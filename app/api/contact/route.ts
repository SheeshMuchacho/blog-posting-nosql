// app/api/contact/route.ts
import { getTransporter } from '@/lib/mailer';
import type { NextRequest } from 'next/server';

export const runtime = 'nodejs';
const transporter = getTransporter();

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, company, phone, subject, message } = await req.json();
    if (!fullName || !email || !company) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    if (!process.env.SMTP_HOST) {
      console.error('Contact API error: SMTP_HOST environment variable is not set.');
      return new Response(JSON.stringify({ error: 'Server configuration error' }), { status: 500 });
    }

    const SUBJECT_LABELS: Record<string, string> = {
      project: 'Project inquiry',
      partnership: 'Partnership',
      support: 'Support request',
      careers: 'Careers',
      other: 'Other',
    };
    const subjectLabel = SUBJECT_LABELS[subject] ?? 'Other';

    // Internal notification email (to your team)
    const internalHtml = `
      <div style="font-family:system-ui,Segoe UI,Arial,sans-serif">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Subject:</strong> ${subjectLabel}</p>
        ${message ? `<p><strong>Message:</strong><br>${String(message).replace(/\n/g,'<br>')}</p>` : ''}
      </div>
    `;

    // Thank-you email (to the submitter)
    const brand = process.env.BRAND_NAME || 'Acumen Intelligence';
    const site  = process.env.SITE_URL || 'https://acumenintelligence.com';
    const thankYouHtml = `
      <div style="font-family:system-ui,Segoe UI,Arial,sans-serif; color:#111">
        <h2>Thanks, ${fullName} </h2>
        <p>We received your message about <strong>${subjectLabel}</strong>.</p>
        <p>Our team will get back to you at <strong>${email}</strong>${
          phone ? ` or <strong>${phone}</strong>` : ''
        } shortly.</p>
        ${message ? `<blockquote style="margin:1rem 0;padding:1rem;background:#f7f7f7;border-left:4px solid #2c74b3">
          ${String(message).replace(/\n/g,'<br>')}
        </blockquote>` : ''}
        <p style="margin-top:1rem">— ${brand}</p>
        <p style="font-size:12px;color:#666;margin-top:16px">
          This confirmation was sent because you submitted the contact form at <a href="${site}">${site}</a>.
          If this wasn’t you, just ignore this email.
        </p>
      </div>
    `;

    const recipients = (process.env.MAIL_TO || 'juzer@acumenintelligence.com')
      .split(',')
      .map(e => e.trim());

    // Require BOTH emails to succeed
    await Promise.all([
      transporter.sendMail({
        from: process.env.MAIL_FROM || process.env.SMTP_USER,
        to: recipients,
        replyTo: email,
        subject: `Contact — ${fullName} (${company})`,
        html: internalHtml,
      }),
      transporter.sendMail({
        from: process.env.MAIL_FROM || process.env.SMTP_USER,
        to: email,
        subject: `Thanks for contacting ${brand}`,
        html: thankYouHtml,
      }),
    ]);

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('Contact API error:', err);
    return new Response(JSON.stringify({ error: 'Failed to send' }), { status: 500 });
  }
}
