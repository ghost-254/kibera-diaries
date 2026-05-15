import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Camera,
  Clock,
  HandHeart,
  Map,
  MapPin,
  Music,
  Play,
  Quote,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import { BookingForm } from "@/components/booking-form";
import { MotionSection } from "@/components/motion-section";
import { StructuredData } from "@/components/structured-data";
import { TourGrid } from "@/components/tour-grid";
import { guides, impactStats, tours } from "@/lib/content";
import {
  createMetadata,
  faqJsonLd,
  homeFaqs,
  kiberaPlaceJsonLd,
  organizationJsonLd,
  toursJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Kibera, Nairobi Tours and Local Stories | Kibera Diaries",
  description:
    "Discover Kibera in Nairobi, Kenya with resident-led local stories, walking tours, culture, photography, community projects, music, dance, and ethical travel experiences.",
  path: "/",
  keywords: [
    "Kibera",
    "Kibera Kenya",
    "Kibera Nairobi",
    "Kibera local stories",
    "Kibera community",
    "kibera tour",
    "experience kibera",
    "kibera slums tour",
    "book Kibera tour online",
    "Kibera tours in Nairobi Kenya",
    "safe Kibera walking tour",
    "ethical Kibera slum tour alternative",
    "private Kibera tour Nairobi",
  ],
});

export default function Home() {
  return (
    <>
      <StructuredData
        data={[
          organizationJsonLd(),
          websiteJsonLd(),
          kiberaPlaceJsonLd(),
          toursJsonLd(),
          faqJsonLd(),
        ]}
      />
      <section className="relative min-h-[700px] overflow-hidden bg-[#11100d] pt-20 text-white">
        <Image
          src="/images/kibera.png"
          alt="Kibera landscape"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_66%_47%,rgba(245,158,11,0.35),transparent_28%),linear-gradient(90deg,rgba(10,10,9,0.97)_0%,rgba(10,10,9,0.88)_39%,rgba(10,10,9,0.55)_67%,rgba(10,10,9,0.84)_100%)]" />

        <div className="relative z-10 mx-auto grid min-h-[620px] max-w-7xl items-center gap-7 px-5 py-8 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <MotionSection className="max-w-[620px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/55 bg-black/20 px-4 py-2 text-xs font-bold uppercase text-amber-200 shadow-[0_0_36px_rgba(245,158,11,0.12)] backdrop-blur md:text-sm">
              <Users className="h-4 w-4 text-amber-400" />
              Local-led tours that put community first
            </div>

            <h1 className="text-balance text-[clamp(2.9rem,5vw,5.5rem)] font-black leading-[0.93] tracking-normal text-white drop-shadow-2xl">
              Kibera Diaries
            </h1>

            <div className="mt-5 h-1 w-20 rounded-full bg-amber-400" />

            <p className="mt-4 max-w-[560px] text-base leading-7 text-white/82 md:text-lg md:leading-8">
              Experience the real Kibera through walking, art, culture,
              photography, and music tours guided by the residents who call it
              home.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#booking"
                className="focus-ring inline-flex h-11 items-center justify-center gap-3 rounded-md bg-amber-400 px-6 text-base font-bold text-neutral-950 shadow-xl shadow-amber-950/25 transition hover:bg-amber-300"
              >
                Book a tour
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="#tours"
                className="focus-ring inline-flex h-11 items-center justify-center rounded-md border border-white/30 bg-white/10 px-6 text-base font-bold text-white backdrop-blur transition hover:bg-white/18"
              >
                Explore experiences
              </Link>
            </div>

            <div className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Users,
                  title: "Local Guides",
                  text: "From the community",
                },
                {
                  icon: ShieldCheck,
                  title: "Safe & Respectful",
                  text: "Ethical experiences",
                },
                {
                  icon: Map,
                  title: "Real Impact",
                  text: "Tourism that gives back",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 border-white/25 sm:border-r sm:last:border-r-0"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber-400/70 text-amber-400">
                    <item.icon className="h-5 w-5" />
                  </span>

                  <span>
                    <span className="block text-sm font-bold">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-xs text-white/72 md:text-sm">
                      {item.text}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </MotionSection>

          <div className="relative hidden h-[530px] lg:block xl:h-[560px]">
            <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_55%_45%,rgba(245,158,11,0.28),transparent_42%),radial-gradient(circle_at_85%_70%,rgba(255,255,255,0.08),transparent_35%)]" />

            <svg
              aria-hidden="true"
              className="absolute inset-0 h-full w-full text-amber-400/90"
              viewBox="0 0 720 560"
              fill="none"
            >
              <path
                d="M145 225C215 160 305 170 362 238C415 302 332 325 345 385C362 465 492 475 628 408"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="9 15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="absolute left-[29%] top-[92px] z-40 flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-neutral-950 shadow-2xl shadow-amber-900/40 ring-4 ring-amber-300/20">
              <MapPin className="h-7 w-7 fill-current" />
            </div>

            <div className="absolute left-[27%] top-[24px] z-20 h-[340px] w-[285px] overflow-hidden rounded-[30px] border-[3px] border-white/85 bg-neutral-900 shadow-2xl shadow-black/60 xl:h-[370px] xl:w-[315px]">
              <Image
                src="/images/tours/1746790796_kibera-slum-tour-experience-26.jpg"
                alt="Guests walking through Kibera with a local guide"
                fill
                className="object-cover"
                sizes="315px"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 rounded-full bg-black/55 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                Walking tours
              </div>
            </div>

            <div className="absolute right-[2%] top-[90px] z-30 h-[265px] w-[245px] overflow-hidden rounded-[28px] border-[3px] border-white/85 bg-neutral-900 shadow-2xl shadow-black/60 xl:h-[288px] xl:w-[270px]">
              <Image
                src="/images/tours/1746790774_cultural.jpg"
                alt="Kibera art and culture experience"
                fill
                className="object-cover"
                sizes="270px"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 rounded-full bg-black/55 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                Art & culture
              </div>
            </div>

            <div className="absolute bottom-[32px] left-[37%] z-30 h-[205px] w-[365px] overflow-hidden rounded-[28px] border-[3px] border-amber-400/95 bg-neutral-900 shadow-2xl shadow-black/60 xl:h-[220px] xl:w-[395px]">
              <Image
                src="/images/kibera.png"
                alt="Kibera rooftops at golden hour"
                fill
                className="object-cover saturate-125"
                sizes="395px"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-black/10 to-amber-200/25" />

              <button
                aria-label="Play Kibera Diaries tour video"
                className="focus-ring absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white bg-black/30 text-white shadow-xl backdrop-blur transition hover:bg-black/45"
              >
                <Play className="ml-1 h-7 w-7 fill-current" />
              </button>
            </div>

            <div className="absolute left-[7%] top-[54%] z-40 rounded-[24px] border border-white/30 bg-black/50 px-5 py-4 shadow-2xl shadow-black/50 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <Star className="h-7 w-7 fill-amber-400 text-amber-400" />
                <span className="text-3xl font-black">4.9</span>
              </div>

              <p className="mt-1 text-sm text-white/80">
                From 250+ reviews
              </p>
            </div>

            <div className="absolute right-0 top-[46%] z-40 max-w-[300px] rounded-[26px] border border-white/30 bg-black/50 p-5 shadow-2xl shadow-black/50 backdrop-blur-xl">
              <div className="flex gap-3">
                <Quote className="h-8 w-8 shrink-0 fill-amber-400 text-amber-400" />
                <p className="text-sm leading-6 text-white/82 xl:text-base xl:leading-7">
                  A powerful and eye-opening experience. Truly unforgettable.
                </p>
              </div>

              <div className="mt-4 flex items-center gap-3 pl-10">
                <Image
                  src="/images/team/metrine_ombuya.jpeg"
                  alt="Sarah M."
                  width={44}
                  height={44}
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-white/30"
                />

                <div>
                  <p className="text-sm font-bold">Sarah M.</p>
                  <p className="text-xs text-white/70">United Kingdom</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[18px] right-[5%] z-40 rounded-[24px] border border-white/30 bg-black/50 px-6 py-5 text-center shadow-2xl shadow-black/50 backdrop-blur-xl">
              <Users className="mx-auto h-8 w-8 fill-amber-400 text-amber-400" />

              <p className="mt-2 text-3xl font-black">2K</p>

              <p className="mt-1 max-w-32 text-xs leading-5 text-white/78">
                Visitors hosted by local guides
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 sm:grid-cols-4 sm:px-8 lg:px-10">
          {impactStats.map((stat) => (
            <div key={stat.label} className="py-8">
              <div className="text-3xl font-semibold text-emerald-800">
                {stat.value}
              </div>

              <div className="mt-1 text-sm text-neutral-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <MotionSection className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-800">
            Kibera
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-normal sm:text-5xl">
            Kibera, Nairobi, Kenya.
          </h2>
        </div>

        <div className="grid gap-6 text-lg leading-8 text-neutral-600">
          <p>
            Kibera is one of Nairobi&apos;s most recognized communities, shaped by
            local families, small businesses, markets, artists, youth programs,
            schools, places of worship, and community projects. It is a real
            neighborhood with daily life, creativity, challenges, and leadership
            that can only be understood well through the people who live there.
          </p>

          <p>
            Kibera Diaries exists to help visitors find Kibera through resident
            stories: walking routes, culture, photography, music, dance, local
            initiatives, and careful conversations that give context beyond the
            headlines. If someone is searching for Kibera, Kibera tour,
            experience Kibera, Kibera Kenya, Kibera Nairobi, Kibera community,
            Kibera slums tour, or what to do in Kibera, this is a local place to
            start.
          </p>

          <div className="grid gap-3 text-base font-medium text-neutral-800 sm:grid-cols-2">
            {[
              "Kibera local guides",
              "Kibera community stories",
              "Kibera culture and art",
              "Kibera walking routes",
              "Kibera photography experiences",
              "Kibera music and dance",
            ].map((item) => (
              <span
                key={item}
                className="rounded-md border border-neutral-200 bg-white px-4 py-3"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection
        id="tours"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-800">
            Tours
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-normal sm:text-5xl">
            Choose your Kibera story.
          </h2>

          <p className="mt-4 text-lg leading-8 text-neutral-600">
            Five carefully curated experiences that bring you closer to daily
            life in Kibera, local creativity, community projects, and culture.
          </p>
        </div>

        <TourGrid tours={tours} />
      </MotionSection>

      <section className="bg-[#102f2b] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <MotionSection>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
              Responsible Travel
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-normal sm:text-5xl">
              Designed around dignity, safety, and local value.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/75">
              Every visit is planned with care, clear communication, and respect
              for the people and places that make Kibera home.
            </p>
          </MotionSection>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: HandHeart,
                title: "Community first",
                text: "Local guides, local stories, and direct support for Kibera-led work.",
              },
              {
                icon: ShieldCheck,
                title: "Safe and ethical",
                text: "Tours are structured around visitor safety and respect for residents.",
              },
              {
                icon: Camera,
                title: "Photo-aware",
                text: "Photography experiences include context, consent, and local guidance.",
              },
              {
                icon: Music,
                title: "Culture forward",
                text: "Art, music, dance, and daily life sit at the center of the route.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-md border border-white/10 bg-white/[0.06] p-6"
              >
                <item.icon className="h-6 w-6 text-amber-300" />

                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>

                <p className="mt-2 leading-7 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MotionSection className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-800">
            Questions
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-normal sm:text-5xl">
            Kibera tour questions, answered.
          </h2>

          <p className="mt-4 text-lg leading-8 text-neutral-600">
            Helpful details for guests comparing Kibera walking tours, Nairobi
            cultural tours, private community visits, photography routes, and
            ethical ways to experience Kibera with local guides.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {homeFaqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-md border border-neutral-200 bg-white p-6"
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <p className="mt-3 leading-7 text-neutral-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection
        id="guides"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10"
      >
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-800">
              Guides
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-normal sm:text-5xl">
              Meet the team.
            </h2>
          </div>

          <p className="max-w-xl leading-7 text-neutral-600">
            The people behind the route make the story richer, more careful, and
            more alive.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.name}
              className="overflow-hidden rounded-md border border-neutral-200 bg-white"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={guide.image}
                  alt={guide.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold">{guide.name}</h3>

                <p className="mt-1 text-sm font-medium text-emerald-800">
                  {guide.role}
                </p>

                <p className="mt-3 leading-7 text-neutral-600">
                  {guide.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </MotionSection>

      <section id="booking" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <MotionSection>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-800">
              Booking
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-normal sm:text-5xl">
              Reserve a tour.
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-600">
              Online booking is launching soon. For now, share your preferred
              tour, date, and group size on WhatsApp and the team will confirm
              availability directly.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                { icon: MapPin, text: "Tours begin in Nairobi, Kenya" },
                {
                  icon: Users,
                  text: "Small groups and private tours available",
                },
                { icon: Clock, text: "Most experiences run 2.5 to 4 hours" },
                {
                  icon: Star,
                  text: "Built for ethical, resident-led tourism",
                },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-neutral-700"
                >
                  <item.icon className="h-5 w-5 text-amber-500" />
                  {item.text}
                </div>
              ))}
            </div>
          </MotionSection>

          <BookingForm tours={tours} />
        </div>
      </section>
    </>
  );
}
