// import { NextResponse } from "next/server";
// import { getTransporter } from "@/lib/mailer";
// import { appendSubscriber } from "@/lib/sheets";

// export const runtime = "nodejs";

// export async function POST(req: Request) {
//   try {
//     const { email } = await req.json();
//     if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       return NextResponse.json({ ok:false, error:"Invalid email" }, { status: 400 });
//     }

//     await appendSubscriber(email);

//     const transporter = getTransporter();
//     await transporter.sendMail({
//       from: process.env.NOTIFY_FROM || process.env.SMTP_USER,
//       to: process.env.NOTIFY_TO,
//       subject: "New newsletter subscriber",
//       text: `A new email was added: ${email}`,
//     });

//     return NextResponse.json({ ok: true });
//   } catch (e) {
//     console.error(e);
//     return NextResponse.json({ ok:false, error:"Failed to subscribe" }, { status: 500 });
//   }
// }
