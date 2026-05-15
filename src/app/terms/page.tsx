import { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description:
    "Terms of service for Kibera Diaries bookings, visitor conduct, payments, changes, and tour requests.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-32 sm:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-800">Legal</p>
      <h1 className="mt-3 text-5xl font-semibold tracking-normal">Terms of Service</h1>
      <div className="mt-10 grid gap-8 text-lg leading-8 text-neutral-600">
        <div>
          <h2 className="text-2xl font-semibold text-neutral-950">Bookings</h2>
          <p className="mt-2">Bookings are requests until Kibera Diaries confirms guide availability and payment instructions.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-neutral-950">Visitor conduct</h2>
          <p className="mt-2">Guests agree to follow guide instructions, respect residents, and photograph people only with consent.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-neutral-950">Payments and changes</h2>
          <p className="mt-2">Payment methods, refunds, rescheduling, and cancellations are confirmed directly by the Kibera Diaries team.</p>
        </div>
      </div>
    </section>
  );
}
