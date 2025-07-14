import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);
  const { to, from, subject, text } = body;

  if (!to || !subject || !text || !from) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing required fields: to, subject, or text",
    });
  }

  const transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE,
    host: config.public.apiBaseUrl,
    port: process.env.SMTP_PORT,
    auth: {
      user: config.emailUser,
      pass: config.emailPass,
    },
  });

  try {
    await transporter.sendMail({
      from,
      to,
      subject,
      text,
    });
    return { success: true };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to send email",
      data: error.message,
    });
  }
});
