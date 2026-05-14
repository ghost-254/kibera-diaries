import { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { MotionSection } from "@/components/motion-section";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-32 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
      <MotionSection>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-800">Contact</p>
        <h1 className="mt-3 text-5xl font-semibold tracking-normal sm:text-6xl">Talk to Kibera Diaries.</h1>
        <p className="mt-6 text-lg leading-8 text-neutral-600">
          Ask about availability, private groups, custom routes, photography expectations, or community projects.
        </p>
        <div className="mt-8 space-y-4 text-neutral-700">
          <a href="mailto:info@kiberadiaries.com" className="flex items-center gap-3 hover:text-emerald-800">
            <Mail className="h-5 w-5 text-amber-500" />
            info@kiberadiaries.com
          </a>
          <a href="tel:+254725399680" className="flex items-center gap-3 hover:text-emerald-800">
            <Phone className="h-5 w-5 text-amber-500" />
            +254 725 399 680
          </a>
          <p className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-amber-500" />
            Nairobi, Kenya
          </p>
        </div>
      </MotionSection>
      <ContactForm />
    </section>
  );
}
