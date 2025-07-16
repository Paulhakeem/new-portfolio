import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);
  const { to, subject, text } = body;

  if (!to || !subject || !text ) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing required fields: to, subject, or text",
    });
  }

  const transporter = nodemailer.createTransport({
   service: 'gmail',
    auth: {
      user: config.emailUser,
      pass: config.emailPass,
    },
  });

  const mailOptions = {
    from: config.emailUser,
    to: body.to,
    subject: body.subject,
    text: body.text,
  };


  try {
    const info = await transporter.sendMail(mailOptions)
    return { success: true, info }
  } catch (error) {
    console.error('SendMail error:', error)
    return { success: false, error: error.message }
  }
});
