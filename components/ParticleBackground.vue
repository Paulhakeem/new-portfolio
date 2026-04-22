<template>
  <div
    ref="container"
    class="fixed inset-0 pointer-events-none z-0 overflow-hidden"
  >
    <canvas
      ref="canvas"
      class="absolute inset-0 w-full h-full"
      :style="{ background: 'transparent' }"
    ></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const container = ref(null);
const canvas = ref(null);
let ctx = null;
let particles = [];
let animationId = null;

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.opacity = Math.random() * 0.5 + 0.2;
    this.color = Math.random() > 0.5 ? "#ff4b57" : "#ff6b77";
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > window.innerWidth || this.x < 0) this.speedX *= -1;
    if (this.y > window.innerHeight || this.y < 0) this.speedY *= -1;

    this.opacity += Math.random() * 0.02 - 0.01;
    if (this.opacity < 0.1) this.opacity = 0.1;
    if (this.opacity > 0.8) this.opacity = 0.8;
  }

  draw() {
    if (!ctx) return;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.fill();
  }
}

const initParticles = () => {
  particles = [];
  const particleCount = Math.min(50, Math.floor(window.innerWidth / 20));

  for (let i = 0; i < particleCount; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    particles.push(new Particle(x, y));
  }
};

const animate = () => {
  if (!ctx) return;

  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });

  // Draw connections between nearby particles
  particles.forEach((particle, i) => {
    particles.slice(i + 1).forEach((otherParticle) => {
      const dx = particle.x - otherParticle.x;
      const dy = particle.y - otherParticle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(otherParticle.x, otherParticle.y);
        ctx.strokeStyle = `rgba(255, 75, 87, ${0.1 * (1 - distance / 100)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    });
  });

  animationId = requestAnimationFrame(animate);
};

const handleResize = () => {
  if (!canvas.value) return;
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;
  initParticles();
};

onMounted(() => {
  if (!canvas.value) return;

  ctx = canvas.value.getContext("2d");
  handleResize();

  window.addEventListener("resize", handleResize);
  animate();
});

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
  window.removeEventListener("resize", handleResize);
});
</script>
