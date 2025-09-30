import { getTransporter } from '@/lib/mailer';
import type { NextRequest } from 'next/server';

export const runtime = 'nodejs';
const transporter = getTransporter();

// Type guard for Node.js network errors (e.g., ECONNREFUSED)
function isErrno(e: unknown): e is NodeJS.ErrnoException & { address?: string; port?: number } {
  return !!e && typeof e === 'object' && 'code' in e;
}

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

    const html = `
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

    const recipients = (process.env.MAIL_TO || 'juzer@acumenintelligence.com')
      .split(',')
      .map(email => email.trim());

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: recipients,
      replyTo: email,
      subject: `Contact — ${fullName} (${company})`,
      html,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err: unknown) {
    console.error('Contact API error:', err);

    if (isErrno(err) && err.code === 'ECONNREFUSED') {
      const addr = err.address ?? 'unknown-host';
      const prt  = err.port ?? 0;
      console.error(`Connection refused. Is the SMTP server running at ${addr}:${prt}?`);
    }

    return new Response(JSON.stringify({ error: 'Failed to send' }), { status: 500 });
  }
}
