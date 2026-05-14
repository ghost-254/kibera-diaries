import Image from "next/image";
import Link from "next/link";
import { CalendarCheck } from "lucide-react";

const navItems = [
  { href: "/#tours", label: "Tours" },
  { href: "/#guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#111111]/96 text-white backdrop-blur-xl">
      <nav className="mx-auto grid h-20 max-w-7xl grid-cols-[auto_auto] items-center gap-5 px-5 sm:px-8 md:grid-cols-[1fr_auto_1fr] lg:px-10">
        <Link href="/" className="focus-ring flex items-center rounded-md">
          <Image src="/images/logo.png" alt="Kibera Diaries" width={150} height={68} className="h-14 w-auto object-contain md:h-16" priority />
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-base font-semibold text-white/70 transition hover:text-amber-300">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-end gap-2">
          <Link
            href="/#booking"
            className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-md bg-amber-400 px-4 text-sm font-bold text-neutral-950 shadow-lg shadow-amber-950/20 transition hover:bg-amber-300 md:h-12 md:px-6 md:text-base"
          >
            <CalendarCheck className="h-4 w-4" />
            <span className="hidden sm:inline">Book</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
