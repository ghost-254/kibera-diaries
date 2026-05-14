import { NextResponse } from "next/server";
import { contactAdminTemplate, contactGuestTemplate } from "@/lib/email/templates";
import { sendMail } from "@/lib/email/mailer";
import { getAdminDb } from "@/lib/firebase/admin";
import { contactSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  const parsed = contactSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ message: "Please complete all contact fields correctly." }, { status: 400 });
  }

  const message = {
    ...parsed.data,
    isRead: false,
    createdAt: new Date().toISOString(),
  };

  const db = getAdminDb();
  if (db) {
    await db.collection("contactMessages").add(message);
  }

  const adminEmail = process.env.ADMIN_EMAIL ?? "admin@kiberadiaries.com";
  await Promise.allSettled([
    sendMail({
      to: adminEmail,
      subject: `Website message: ${message.subject}`,
      html: contactAdminTemplate(message),
      replyTo: message.email,
    }),
    sendMail({
      to: message.email,
      subject: "Kibera Diaries received your message",
      html: contactGuestTemplate(message),
    }),
  ]);

  return NextResponse.json({ message: "Message received. We will get back to you shortly." });
}
