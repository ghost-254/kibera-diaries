import type { Metadata } from "next";
import { CONTACT_PHONE_DISPLAY } from "@/lib/contact";
import { tours } from "@/lib/content";

function normalizeSiteUrl(url: string) {
  return url.replace(/\/+$/, "");
}

function unique(items: string[]) {
  return Array.from(new Set(items.map((item) => item.trim()).filter(Boolean)));
}

export const SITE_URL = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kiberadiaries.com",
);

export const SITE_NAME = "Kibera Diaries";
export const SITE_EMAIL = "info@kiberadiaries.com";
export const DEFAULT_OG_IMAGE = "/images/kibera.png";

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

const services = [
  "Kibera tour",
  "Kibera tours",
  "Kibera walking tour",
  "Kibera guided tour",
  "Kibera local guide",
  "Kibera community tour",
  "Kibera cultural tour",
  "Kibera art tour",
  "Kibera photography tour",
  "Kibera music tour",
  "Kibera dance tour",
  "Kibera private tour",
  "Kibera day tour",
  "Kibera slum tour",
  "Nairobi walking tour",
  "Nairobi cultural tour",
  "Nairobi community tour",
  "Nairobi photography tour",
  "Kenya community tourism",
  "ethical Kenya tour",
];

const locations = [
  "Nairobi",
  "Kenya",
  "Kibera Nairobi",
  "Nairobi Kenya",
  "near Nairobi",
  "from Nairobi",
  "in Kenya",
  "East Africa",
];

const modifiers = [
  "best",
  "safe",
  "ethical",
  "authentic",
  "resident led",
  "local led",
  "responsible",
  "private",
  "small group",
  "book",
  "price",
  "cost",
  "reviews",
  "with local guides",
];

const generatedSearchPhrases = services.flatMap((service) => {
  const normalizedService = service.toLowerCase();
  const locationPhrases = locations
    .filter((location) => {
      const firstLocationWord = location.toLowerCase().split(" ")[0];
      return !normalizedService.includes(firstLocationWord);
    })
    .map((location) => `${service} ${location}`);

  const modifierPhrases = modifiers
    .filter((modifier) => {
      const normalizedModifier = modifier.toLowerCase();
      return (
        !normalizedService.includes(normalizedModifier) &&
        !(normalizedModifier.includes("local guide") && normalizedService.includes("local guide"))
      );
    })
    .map((modifier) => `${modifier} ${service}`);

  return [...locationPhrases, ...modifierPhrases];
});

export const SEO_KEYWORDS = unique([
  "Kibera",
  "Kibera Kenya",
  "Kibera Nairobi",
  "Kibera Nairobi Kenya",
  "Kibera Africa",
  "Kibera location",
  "Kibera community",
  "Kibera culture",
  "Kibera stories",
  "Kibera daily life",
  "Kibera local life",
  "Kibera travel",
  "Kibera visit",
  "visit Kibera",
  "Kibera guide",
  "Kibera map",
  "Kibera photos",
  "Kibera history",
  "Kibera people",
  "kibera tour",
  "experience kibera",
  "kibera slums tour",
  "Kibera slums tour",
  "Kibera slum tours",
  "Kibera slums walking tour",
  "experience Kibera Nairobi",
  "experience Kibera Kenya",
  "Kibera Diaries",
  "Kibera Diaries tours",
  "Kibera tours Nairobi",
  "book Kibera tour",
  "Kibera tour booking",
  "Kibera tour company",
  "Kibera tour guide",
  "Kibera tour agency",
  "Kibera experiences",
  "Kibera activities",
  "things to do in Kibera",
  "things to do in Nairobi",
  "Nairobi local experiences",
  "Nairobi community experiences",
  "Nairobi cultural experiences",
  "ethical slum tour Nairobi",
  "responsible Kibera tour",
  "community based tourism Kenya",
  "Kibera social impact tour",
  "Kibera community projects",
  "Kibera youth projects",
  "Kibera schools tour",
  "Kibera market tour",
  "Kibera street photography",
  "Kibera artists",
  "Kibera creatives",
  "Kibera music and dance",
  "Kibera storytelling tour",
  "Kibera resident guide",
  "Kibera local stories",
  ...generatedSearchPhrases,
]);

type SeoConfig = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  keywords = [],
  noIndex = false,
}: SeoConfig): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    title,
    description,
    keywords: unique([...SEO_KEYWORDS, ...keywords]),
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "Travel and tourism",
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} community tours in Kibera, Nairobi`,
        },
      ],
      locale: "en_KE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export const homeFaqs = [
  {
    question: "Where is Kibera?",
    answer:
      "Kibera is in Nairobi, Kenya, southwest of the city center. It is one of Nairobi's best-known communities and is home to residents, markets, artists, schools, workshops, faith communities, local businesses, and community-led projects.",
  },
  {
    question: "What is Kibera known for?",
    answer:
      "Kibera is known for its strong community life, creativity, local entrepreneurship, music, art, sport, youth programs, and everyday resilience. Kibera Diaries helps visitors understand Kibera through resident-led stories rather than outside assumptions.",
  },
  {
    question: "What is the best Kibera tour in Nairobi?",
    answer:
      "The best Kibera tour is local-led, respectful, and clear about where your money goes. Kibera Diaries offers walking, culture, photography, music, dance, and community project experiences guided by residents.",
  },
  {
    question: "Is a Kibera walking tour safe?",
    answer:
      "Yes, Kibera walking tours are planned around known routes, local relationships, and guide instructions. Guests are hosted by resident guides who understand the area and keep the experience respectful.",
  },
  {
    question: "Can I book a private Kibera tour?",
    answer:
      "Private Kibera tours and small group tours are available. You can request a custom route for culture, art, photography, community projects, music, dance, schools, markets, or daily life in Kibera.",
  },
  {
    question: "Do you offer ethical Kibera slum tours?",
    answer:
      "People often search for a Kibera slum tour or Kibera slums tour, but Kibera Diaries focuses on ethical, resident-led community tourism. The tour centers dignity, consent, accurate context, and direct value for local guides and partners.",
  },
  {
    question: "How much does a Kibera tour cost?",
    answer:
      "Kibera tour prices vary by experience, duration, and group size. Current experiences start from USD 35, with private and specialist tours priced according to the route and host requirements.",
  },
  {
    question: "What can I see on a Kibera tour?",
    answer:
      "Depending on the route, guests can visit local markets, creative workshops, community projects, youth programs, photography locations, performance spaces, and everyday neighborhoods with a local guide.",
  },
];

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/images/logo.png"),
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    description:
      "Kibera Diaries offers ethical, resident-led Kibera tours, walking tours, culture tours, photography tours, and community experiences in Nairobi, Kenya.",
    email: SITE_EMAIL,
    telephone: CONTACT_PHONE_DISPLAY,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressRegion: "Nairobi County",
      addressCountry: "KE",
    },
    areaServed: ["Kibera", "Nairobi", "Kenya"],
    knowsAbout: SEO_KEYWORDS.slice(0, 60),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-KE",
  };
}

export function toursJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/#tours`,
    name: "Kibera tours and community experiences",
    itemListElement: tours.map((tour, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "TouristTrip",
        "@id": `${SITE_URL}/#${tour.id}`,
        name: tour.title,
        description: tour.description,
        image: absoluteUrl(tour.image),
        touristType: ["Cultural traveler", "Responsible traveler", "Community tourism guest"],
        provider: {
          "@id": `${SITE_URL}/#organization`,
        },
        offers: {
          "@type": "Offer",
          price: tour.price,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: absoluteUrl("/#booking"),
        },
      },
    })),
  };
}

export function kiberaPlaceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${SITE_URL}/#kibera`,
    name: "Kibera",
    description:
      "Kibera is a community in Nairobi, Kenya known for local creativity, markets, community projects, art, music, daily life, and resident-led stories.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kibera",
      addressRegion: "Nairobi County",
      addressCountry: "KE",
    },
    containedInPlace: {
      "@type": "City",
      name: "Nairobi",
    },
    subjectOf: {
      "@id": `${SITE_URL}/#website`,
    },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
