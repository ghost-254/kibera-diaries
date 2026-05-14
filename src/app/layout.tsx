import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://kiberadiaries.com"),
  title: {
    default: "Kibera Diaries | Authentic Community Tours in Nairobi",
    template: "%s | Kibera Diaries",
  },
  description:
    "Book ethical Kibera tours led by local guides. Walking tours, art, culture, photography, community projects, music, and dance experiences in Nairobi.",
  keywords: [
    "Kibera tours",
    "Nairobi tours",
    "ethical tourism Kenya",
    "Kibera walking tour",
    "community tourism",
  ],
  openGraph: {
    title: "Kibera Diaries",
    description: "Authentic Kibera tours led by local residents.",
    url: "/",
    siteName: "Kibera Diaries",
    images: ["/images/kibera.png"],
    locale: "en_KE",
    type: "website",
  },
  icons: {
    icon: "/images/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#fbfaf7] text-neutral-950">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
