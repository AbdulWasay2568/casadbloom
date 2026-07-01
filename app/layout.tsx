import type { Metadata } from "next";
import { Playfair_Display, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { siteInfo } from "@/data/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800"],
});

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${nunito.variable}`}
    >
      <body className="font-nunito">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
