// app/api/chat/route.ts
import type { NextRequest } from 'next/server';

export const runtime = 'nodejs';

const BACKEND_URL = process.env.CHAT_BACKEND_URL || 'http://127.0.0.1:5004/api/chat';

function pickReply(obj: any): string | null {
  if (!obj || typeof obj !== 'object') return null;
  const keys = ['reply', 'response', 'message', 'text', 'answer'];
  for (const k of keys) {
    if (typeof obj[k] === 'string') return obj[k] as string;
  }
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || '';

    let message: string | undefined;

    if (contentType.includes('application/json')) {
      const data = await req.json().catch(() => ({} as any));
      message = (data?.message ?? data?.msg ?? '').toString();
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const form = await req.formData();
      message = (form.get('msg') ?? form.get('message') ?? '').toString();
    } else {
      // best-effort: try json, then text
      try {
        const data = await req.json();
        message = (data?.message ?? data?.msg ?? '').toString();
      } catch {
        const txt = await req.text();
        message = txt?.toString() ?? '';
      }
    }

    if (!message || !message.trim()) {
      return new Response('Missing message', { status: 400 });
    }

    // Forward to backend as JSON { message }
    const upstream = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });

    // Normalize response to plain text so the Chatbot can consume res.text()
    const upCT = upstream.headers.get('content-type') || '';
    if (!upstream.ok) {
      const errText = upCT.includes('application/json')
        ? JSON.stringify(await upstream.json().catch(() => ({ error: 'Upstream error' })))
        : await upstream.text().catch(() => 'Upstream error');
      return new Response(errText || 'Upstream error', { status: upstream.status });
    }

    if (upCT.includes('application/json')) {
      const data = await upstream.json().catch(() => ({}));
      const reply = pickReply(data);
      if (reply) return new Response(reply, { status: 200 });
      // fallback to echo json as string
      return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } else {
      const text = await upstream.text().catch(() => '');
      return new Response(text || '', { status: 200 });
    }
  } catch (err) {
    console.error('Chat proxy error:', err);
    return new Response('Proxy failure', { status: 500 });
  }
}

