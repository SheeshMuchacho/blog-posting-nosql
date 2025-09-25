import { NextResponse } from "next/server";
import { appendSubscriberRow } from "@/lib/sheets";

export async function POST(req: Request) {
  try {
    const { email, locale, source } = await req.json();

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    await appendSubscriberRow({ email: email.trim(), locale, source });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("Subscribe error:", err?.message || err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
