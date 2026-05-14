import Image from "next/image";
import { Metadata } from "next";
import { HandHeart, Route, Users } from "lucide-react";
import { MotionSection } from "@/components/motion-section";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-32 sm:px-8 lg:px-10">
      <MotionSection className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-800">About</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-normal sm:text-6xl">Built by stories, guided by residents.</h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Kibera Diaries offers community-based tours that help visitors understand Kibera through the people who live, work, create, and lead there.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-md">
          <Image src="/images/tours/1746790395_Walking-tour.jpg" alt="Kibera walking tour" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
      </MotionSection>
      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {[
          { icon: Users, title: "Local leadership", text: "Guides are residents with lived knowledge of the routes and relationships." },
          { icon: Route, title: "Careful routes", text: "Tours are planned around safety, respect, and genuine community context." },
          { icon: HandHeart, title: "Shared value", text: "Experiences create work for guides and visibility for local makers." },
        ].map((item) => (
          <article key={item.title} className="rounded-md border border-neutral-200 bg-white p-6">
            <item.icon className="h-6 w-6 text-amber-500" />
            <h2 className="mt-5 text-xl font-semibold">{item.title}</h2>
            <p className="mt-3 leading-7 text-neutral-600">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
