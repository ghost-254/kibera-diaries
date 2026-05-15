import { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Kibera Diaries booking, contact, and tour inquiry data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PolicyPage title="Privacy Policy" intro="How Kibera Diaries handles booking, contact, and admin data.">
      <h2>Information we collect</h2>
      <p>We collect information you submit through booking and contact forms, including names, emails, phone numbers, tour dates, group sizes, and messages.</p>
      <h2>How we use it</h2>
      <p>We use this information to respond to inquiries, manage bookings, send confirmations, and coordinate tour operations.</p>
      <h2>Storage</h2>
      <p>Booking and contact details are kept securely and used only by the Kibera Diaries team to manage inquiries, confirmations, and guest support.</p>
      <h2>Questions</h2>
      <p>Email info@kiberadiaries.com for privacy-related questions.</p>
    </PolicyPage>
  );
}

function PolicyPage({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-4xl px-5 py-32 sm:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-800">Legal</p>
      <h1 className="mt-3 text-5xl font-semibold tracking-normal">{title}</h1>
      <p className="mt-5 text-lg leading-8 text-neutral-600">{intro}</p>
      <div className="mt-10 grid gap-6 text-lg leading-8 text-neutral-600 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-neutral-950">
        {children}
      </div>
    </section>
  );
}
