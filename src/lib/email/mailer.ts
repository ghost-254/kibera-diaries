import nodemailer from "nodemailer";

type MailInput = {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
};

export function emailConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

export async function sendMail({ to, subject, html, replyTo }: MailInput) {
  if (!emailConfigured()) {
    console.warn("SMTP is not configured. Skipping email:", subject);
    return { skipped: true };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
    to,
    subject,
    html,
    replyTo,
  });

  return { skipped: false };
}
