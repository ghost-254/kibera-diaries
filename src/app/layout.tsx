import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button";
import { createMetadata, DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...createMetadata({
    title: "Kibera Diaries | Authentic Community Tours in Nairobi",
    description:
      "Book ethical Kibera tours led by local guides. Walking tours, art, culture, photography, community projects, music, and dance experiences in Nairobi.",
    path: "/",
    image: DEFAULT_OG_IMAGE,
  }),
  title: {
    default: "Kibera Diaries | Authentic Community Tours in Nairobi",
    template: `%s | ${SITE_NAME}`,
  },
  icons: {
    icon: "/images/favicon.jpg",
    shortcut: "/images/favicon.jpg",
    apple: "/images/logo.png",
  },
  manifest: "/manifest.webmanifest",
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
