import nodemailer from 'nodemailer'
import { NextApiRequest, NextApiResponse } from 'next'

const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like SMTP, SendGrid, etc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, name, company, message } = req.body

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `Company: ${company}\n\nMessage: ${message}`,
    }

    try {
      await transporter.sendMail(mailOptions)
      res.status(200).json({ message: 'Email sent successfully' })
    } catch (error) {
      console.error('Error sending email', error)
      res.status(500).json({ message: 'Error sending email', error })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
