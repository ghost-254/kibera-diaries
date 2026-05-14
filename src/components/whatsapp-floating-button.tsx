import { getWhatsAppUrl } from "@/lib/contact";

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor">
      <path d="M16.01 3.2A12.65 12.65 0 0 0 5.14 22.33L3.5 28.8l6.62-1.57A12.65 12.65 0 1 0 16.01 3.2Zm0 22.98a10.39 10.39 0 0 1-5.29-1.45l-.38-.23-3.9.92 1.02-3.8-.25-.39A10.36 10.36 0 1 1 16 26.18Zm5.68-7.77c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.82 1.01-1.01 1.22-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.52-1.55-.93-.83-1.56-1.85-1.74-2.16-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.25-.61-.51-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.79.66.75.24 1.44.2 1.98.12.6-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37Z" />
    </svg>
  );
}

export function WhatsAppFloatingButton() {
  const href = getWhatsAppUrl(
    "Hello Kibera Diaries, I would like to book a tour. Could you help me with availability?",
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book a Kibera Diaries tour on WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-950/25 transition hover:-translate-y-1 hover:bg-[#1ebe5d] sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <WhatsAppIcon />
    </a>
  );
}
