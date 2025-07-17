import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  const { email, subject, text, name } = body;

  // Validate required fields
  if (!email || !subject || !text || !name) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing required fields: to, subject, or text",
    });
  }

  // Setup transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.public.EMAIL_USERNAME,
      pass: config.public.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: `<${email}>`,
    to: config.public.EMAIL_USERNAME, // Use the configured email address
    subject,
    text: `
Name: ${name}
Email: ${email}
${text}
  `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, info };
  } catch (error) {
    console.error("SendMail error:", error);
    // Use createError for better error feedback
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to send email",
      data: error.message,
    });
  }
});
