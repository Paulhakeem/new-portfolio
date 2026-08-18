import nodemailer from "nodemailer";
import { validate } from "email-validator";

// Strip any HTML tags and trim — enough for plain text form fields
function sanitizeText(input) {
  if (typeof input !== "string") return "";
  return input.replace(/<[^>]*>/g, "").trim();
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  const { to, subject, text, name } = body;

  if (!to || !subject || !text || !name) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing required fields: to, subject, text, or name",
    });
  }

  if (!validate(to)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid email address",
    });
  }

  const sanitizedName = sanitizeText(name);
  const sanitizedSubject = sanitizeText(subject);
  const sanitizedText = sanitizeText(text);

  const smtpHost = config.smtpHost || "smtp.gmail.com";
  const smtpPort = Number(config.smtpPort) || 587;

  if (!config.emailUsername || !config.emailPassword) {
    throw createError({
      statusCode: 500,
      statusMessage: "SMTP email configuration is missing.",
    });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: config.emailUsername,
      pass: config.emailPassword,
    },
  });

  const mailOptions = {
    from: config.emailUsername,
    replyTo: to,
    to: config.emailUsername,
    subject: sanitizedSubject,
    text: `From: ${sanitizedName} <${to}>\n\n${sanitizedText}`,
  };

  const confirmationMail = {
    from: config.emailUsername,
    to: to,
    subject: "Thanks for contacting me!",
    html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2 style="color: #ff4b57;">Hi ${sanitizedName},</h2>
      <p>Thank you for reaching out to me! 🙌</p>
      <p>I've received your message and will get back to you shortly.</p>
      <br />
      <p style="color: #888;">Best regards,<br/>Paul Nyamawi</p>
    </div>
  `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    try {
      await transporter.sendMail(confirmationMail);
    } catch (confirmError) {
      console.error("Confirmation email error:", confirmError);
    }
    return { success: true, info };
  } catch (error) {
    console.error("SendMail error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to send email",
      data: error.message,
    });
  }
});
