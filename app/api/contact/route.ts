import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs'; 

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, company, phone, message } = await req.json();
    if (!fullName || !email || !company) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,                  // e.g. smtp.sendgrid.net OR "mailpit"
      port: Number(process.env.SMTP_PORT) || 587,   // 587 for STARTTLS, 465 for SMTPS
      secure: process.env.SMTP_SECURE === "true" || false, // false for 587 (STARTTLS)
      auth: process.env.SMTP_USER && process.env.SMTP_PASS ? {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      } : undefined,
      tls: { rejectUnauthorized: false }, // optional for dev/mailcatchers
    });

    const html = `
      <div style="font-family:system-ui,Segoe UI,Arial,sans-serif">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${message ? `<p><strong>Message:</strong><br>${String(message).replace(/\n/g,'<br>')}</p>` : ''}
      </div>
    `;

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.MAIL_TO || 'sheedh@acumenintelligence.com',
      replyTo: email,
      subject: `Contact — ${fullName} (${company})`,
      html,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('Contact API error:', err);
    return new Response(JSON.stringify({ error: 'Failed to send' }), { status: 500 });
  }
}
