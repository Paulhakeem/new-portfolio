import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  const { to, subject, text, name } = body;

  // Validate required fields
  if (!to || !subject || !text || !name) {
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
    from: to,
    to: config.public.EMAIL_USERNAME, // Use the configured email address
    subject,
    text: `From: ${name} <${to}>\n\n${text}`,
  };

  const confirmationMail = {
    from: config.emailUser,
    to: to,
    subject: "Thanks for contacting me!",
    text: `Hi ${name},\n\nThanks for reaching out! I've received your message and will get back to you shortly.\n\nBest regards,\nPaul`,
  };

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    // Send confirmation to user
    await transporter.sendMail(confirmationMail);

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
