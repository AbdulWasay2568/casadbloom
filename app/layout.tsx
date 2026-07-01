import type { Metadata } from "next";
import "./globals.css";
import { siteInfo } from "@/data/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: `${siteInfo.name} | ${siteInfo.tagline}`,
  description: siteInfo.description,
  openGraph: {
    title: `${siteInfo.name} | ${siteInfo.tagline}`,
    description: siteInfo.description,
    url: "https://www.casadbloom.com",
    siteName: siteInfo.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteInfo.name} | ${siteInfo.tagline}`,
    description: siteInfo.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
