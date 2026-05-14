import Image from "next/image";
import { Clock, Languages, Users } from "lucide-react";
import type { Tour } from "@/lib/content";
import { getWhatsAppUrl } from "@/lib/contact";
import { formatCurrency } from "@/lib/utils";

export function TourGrid({ tours }: { tours: Tour[] }) {
  return (
    <div className="mt-10 grid gap-5 lg:grid-cols-3">
      {tours.map((tour) => (
        <article key={tour.id} className="group overflow-hidden rounded-md border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src={tour.image} alt={tour.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" />
            <div className="absolute left-4 top-4 rounded-md bg-white px-3 py-2 text-sm font-semibold text-neutral-950">
              {formatCurrency(tour.price)}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold tracking-normal">{tour.title}</h3>
            <p className="mt-3 min-h-20 leading-7 text-neutral-600">{tour.description}</p>
            <div className="mt-5 grid gap-2 text-sm text-neutral-600">
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-emerald-700" />{tour.duration}</span>
              <span className="flex items-center gap-2"><Users className="h-4 w-4 text-emerald-700" />{tour.groupSize}</span>
              <span className="flex items-center gap-2"><Languages className="h-4 w-4 text-emerald-700" />{tour.languages}</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {tour.highlights.map((highlight) => (
                <span key={highlight} className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
                  {highlight}
                </span>
              ))}
            </div>
            <a
              href={getWhatsAppUrl(`Hello Kibera Diaries, I would like to book the ${tour.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-6 inline-flex h-11 w-full items-center justify-center rounded-md bg-neutral-950 px-4 font-semibold text-white transition hover:bg-emerald-900"
            >
              Reserve on WhatsApp
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
