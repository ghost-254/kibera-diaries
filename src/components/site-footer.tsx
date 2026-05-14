import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10">
        <div>
          <Link href="/" className="focus-ring inline-flex items-center rounded-md">
            <Image src="/images/logo.png" alt="Kibera Diaries" width={150} height={80} className="h-20 w-auto object-contain" />
          </Link>
          <p className="mt-4 max-w-md leading-7 text-white/65">
            Authentic, ethical tours in Kibera led by local residents, planned with care and grounded in community respect.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            <a className="flex items-center gap-2 hover:text-white" href="mailto:info@kiberadiaries.com">
              <Mail className="h-4 w-4" />
              info@kiberadiaries.com
            </a>
            <a className="flex items-center gap-2 hover:text-white" href="tel:+254725399680">
              <Phone className="h-4 w-4" />
              +254 725 399 680
            </a>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Nairobi, Kenya
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">Explore</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-white/45">
        Copyright {new Date().getFullYear()} Kibera Diaries. All rights reserved.
      </div>
    </footer>
  );
}
