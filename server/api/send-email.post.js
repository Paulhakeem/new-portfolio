import nodemailer from "nodemailer";
import { validate } from "email-validator";
import DOMPurify from "isomorphic-dompurify";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  const { to, subject, text, name } = body;

  // Validate required fields
  if (!to || !subject || !text || !name) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing required fields: to, subject, text, or name",
    });
  }

  // Validate email format
  if (!validate(to)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid email address",
    });
  }

  // Sanitize inputs
  const sanitizedName = DOMPurify.sanitize(name);
  const sanitizedSubject = DOMPurify.sanitize(subject);
  const sanitizedText = DOMPurify.sanitize(text);

  // Setup transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.emailUsername,
      pass: config.emailPassword,
    },
  });

  const mailOptions = {
    from: config.emailUsername, // Use your email as sender
    replyTo: to, // User's email for replies
    to: config.emailUsername, // Send to yourself
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
