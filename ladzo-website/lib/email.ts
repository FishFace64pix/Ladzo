import nodemailer from 'nodemailer'

interface BookingPayload {
  name: string
  company: string
  email: string
  industry: string
  preferredDate?: string
  message?: string
}

function createTransporter() {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return null
  }
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: parseInt(process.env.SMTP_PORT || '587') === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

export async function sendBookingEmails(payload: BookingPayload): Promise<void> {
  const transporter = createTransporter()

  if (!transporter) {
    console.log('[Ladzo Contact] SMTP not configured — booking details:', payload)
    return
  }

  const adminEmail = process.env.ADMIN_EMAIL || 'office@ladzogroup.com'

  const dateStr = payload.preferredDate
    ? new Date(payload.preferredDate).toLocaleDateString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'To be arranged'

  // Admin notification
  await transporter.sendMail({
    from: `"Ladzo Limited Website" <${process.env.SMTP_USER}>`,
    to: adminEmail,
    subject: `New Booking — ${payload.name} from ${payload.company}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #0A1628; border-bottom: 2px solid #C9A84C; padding-bottom: 12px;">
          New Consultation Booking
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr><td style="padding: 8px 0; color: #8E9BAE; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${payload.name}</td></tr>
          <tr><td style="padding: 8px 0; color: #8E9BAE; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Company</td><td style="padding: 8px 0;">${payload.company}</td></tr>
          <tr><td style="padding: 8px 0; color: #8E9BAE; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td><td style="padding: 8px 0;"><a href="mailto:${payload.email}">${payload.email}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #8E9BAE; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Industry</td><td style="padding: 8px 0;">${payload.industry}</td></tr>
          <tr><td style="padding: 8px 0; color: #8E9BAE; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Preferred Date</td><td style="padding: 8px 0;">${dateStr}</td></tr>
          ${payload.message ? `<tr><td style="padding: 8px 0; color: #8E9BAE; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Message</td><td style="padding: 8px 0;">${payload.message}</td></tr>` : ''}
        </table>
      </div>
    `,
  })

  // User confirmation
  await transporter.sendMail({
    from: `"Ladzo Limited" <${process.env.SMTP_USER}>`,
    to: payload.email,
    subject: 'Your Free Consultation is Confirmed — Ladzo Limited',
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #F5F3EE;">
        <div style="background: #0A1628; padding: 30px; border-bottom: 2px solid #C9A84C;">
          <h1 style="color: white; font-family: Georgia, serif; margin: 0; font-size: 24px;">Ladzo <span style="color: #C9A84C;">Limited</span></h1>
          <p style="color: #8E9BAE; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; margin: 8px 0 0;">Empowering Global Growth</p>
        </div>
        <div style="background: white; padding: 32px; border: 1px solid #e5e7eb;">
          <h2 style="color: #0A1628; margin-top: 0;">Hello ${payload.name},</h2>
          <p style="color: #6b7280; line-height: 1.7;">
            Thank you for booking a free consultation with Ladzo Limited. We have received your enquiry
            and a member of our team will be in touch within 24 hours to confirm your appointment.
          </p>
          <div style="background: #F5F3EE; border-left: 3px solid #C9A84C; padding: 16px 20px; margin: 24px 0;">
            <p style="margin: 0 0 4px; font-weight: 600; color: #0A1628;">Your preferred date: ${dateStr}</p>
            <p style="margin: 0 0 4px; color: #6b7280;">Industry: ${payload.industry}</p>
          </div>
          <p style="color: #6b7280; line-height: 1.7;">
            If you have any questions in the meantime, please don&apos;t hesitate to reach out:
          </p>
          <p style="color: #0A1628; font-weight: 600;">
            📞 +44 7585 367081<br>
            📍 Unit 6, 160 Eltham Hill, London SE9 5EA, United Kingdom
          </p>
          <p style="color: #6b7280; font-size: 14px; margin-top: 24px;">
            Warm regards,<br>
            <strong style="color: #0A1628;">The Ladzo Limited Team</strong>
          </p>
        </div>
        <p style="color: #9ca3af; font-size: 11px; text-align: center; margin-top: 16px;">
          © ${new Date().getFullYear()} Ladzo Limited. Registered in England & Wales.
        </p>
      </div>
    `,
  })
}
