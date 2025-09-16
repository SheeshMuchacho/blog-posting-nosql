import nodemailer from "nodemailer";

let cached: nodemailer.Transporter | null = null;

export function getTransporter() {
  if (cached) return cached;

  cached = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true", // true:465, false:587
    auth:
      process.env.SMTP_USER && process.env.SMTP_PASS
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        : undefined,
  });

  return cached;
}
