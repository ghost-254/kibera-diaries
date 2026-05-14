import { CalendarClock, MessageCircle } from "lucide-react";
import type { Tour } from "@/lib/content";
import { getWhatsAppUrl } from "@/lib/contact";
import { formatCurrency } from "@/lib/utils";

export function BookingForm({ tours }: { tours: Tour[] }) {
  const href = getWhatsAppUrl(
    "Hello Kibera Diaries, I would like to book a tour. My preferred date is: ",
  );

  return (
    <div className="rounded-md border border-neutral-200 bg-[#fbfaf7] p-5 shadow-xl sm:p-7">
      <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-950">
        <CalendarClock className="h-4 w-4" />
        Online bookings launching soon
      </div>
      <h3 className="mt-5 text-2xl font-semibold tracking-normal text-neutral-950">
        Book directly with our team on WhatsApp.
      </h3>
      <p className="mt-3 leading-7 text-neutral-600">
        Our online booking form is not ready yet, but tours are still available.
        Send us your preferred tour, date, and group size on WhatsApp and we
        will confirm availability directly.
      </p>
      <div className="mt-6 grid gap-3">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="flex items-center justify-between gap-4 rounded-md border border-neutral-200 bg-white px-4 py-3"
          >
            <span className="font-medium text-neutral-800">{tour.title}</span>
            <span className="shrink-0 text-sm font-semibold text-emerald-800">
              {formatCurrency(tour.price)}
            </span>
          </div>
        ))}
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 font-semibold text-neutral-950 transition hover:bg-[#1ebe5d]"
      >
        <MessageCircle className="h-5 w-5" />
        Book via WhatsApp
      </a>
    </div>
  );
}
