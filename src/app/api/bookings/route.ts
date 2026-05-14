import { NextResponse } from "next/server";
import { bookingGuestTemplate, bookingAdminTemplate } from "@/lib/email/templates";
import { getAdminDb } from "@/lib/firebase/admin";
import { bookingSchema } from "@/lib/schemas";
import { tours } from "@/lib/content";
import { sendMail } from "@/lib/email/mailer";

export async function POST(request: Request) {
  const parsed = bookingSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ message: "Please check the booking form and try again." }, { status: 400 });
  }

  const tour = tours.find((item) => item.id === parsed.data.tourId);
  if (!tour) {
    return NextResponse.json({ message: "Selected tour was not found." }, { status: 400 });
  }

  const booking = {
    ...parsed.data,
    tourTitle: tour.title,
    totalAmount: tour.price * parsed.data.numberOfPeople,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  const db = getAdminDb();
  let bookingId: string | null = null;
  if (db) {
    const doc = await db.collection("bookings").add(booking);
    bookingId = doc.id;
  }

  const adminEmail = process.env.ADMIN_EMAIL ?? "admin@kiberadiaries.com";
  await Promise.allSettled([
    sendMail({
      to: adminEmail,
      subject: `New booking: ${tour.title}`,
      html: bookingAdminTemplate(booking),
      replyTo: booking.email,
    }),
    sendMail({
      to: booking.email,
      subject: "Kibera Diaries booking received",
      html: bookingGuestTemplate(booking),
    }),
  ]);

  return NextResponse.json({
    id: bookingId,
    message: "Booking request received. We will confirm availability shortly.",
  });
}
