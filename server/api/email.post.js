import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  const { to, subject, text } = body

  // Validate required fields
  if (!to || !subject || !text) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields: to, subject, or text',
    })
  }

  // Setup transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.emailUser,
      pass: config.emailPass,
    },
  })

  const mailOptions = {
    from: config.emailUser,
    to,
    subject,
    text,
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    return { success: true, info }
  } catch (error) {
    console.error('SendMail error:', error)
    // Use createError for better error feedback
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email',
      data: error.message,
    })
  }
})
