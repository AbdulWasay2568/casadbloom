"use client";

import Link from "next/link";
import { Playfair_Display, Nunito_Sans } from "next/font/google";

import { Hero } from "@/components/Hero";
import { Banner } from "@/components/Banner";
import { SplitSection } from "@/components/SplitSection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { MediaGallery } from "@/components/MediaGallery";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito",
});

const IMG = {
  hero: "/hero.avif",
  wedding: "/wedding.avif",
  arrangement: "/flowers.avif",
  events: "/events.avif",
  gifts: "/gifts.avif",
  florals: "/arrangements.avif",
  colA: "/flowers2.avif",
  colB: "/flowers3.avif",
};

const WHAT_WE_DO_ITEMS = [
  { img: IMG.events, label: "Special Events" },
  { img: IMG.gifts, label: "Special Gifts" },
  { img: IMG.florals, label: "Floral Arrangements" },
];

const SHOWCASE_IMAGES = [
  { src: IMG.colA, alt: "Flower arrangement asset showcase" },
  { src: IMG.colB, alt: "Flower bouquet asset showcase" },
];

export default function Home() {
  return (
    <div
      className={`${playfair.variable} ${nunito.variable} min-h-screen bg-white text-black`}
      style={{ fontFamily: "var(--font-nunito), Helvetica, Arial, sans-serif" }}
    >
      <main>
        <Hero
          title="Dreams Blossom on any budget"
          backgroundImage={IMG.hero}
          buttons={[
            {
              label: "BOOK AN EVENT",
              href: "/get-in-touch",
              variant: "solid"
            },
            {
              label: "ORDER FLOWERS",
              href: "/get-in-touch",
              variant: "outline",
              className: "!text-white"
            }
          ]}
        />

        <Banner backgroundColor="bg-[#F9E5EA]">
          <div className="mx-auto flex max-w-5xl flex-row items-center justify-center gap-8 px-4 py-8 md:gap-12">
            {/* Thin-stroke Bouquet Icon matching image_0a8bd4.png */}
            <svg 
              viewBox="0 0 100 100" 
              className="h-24 w-24 shrink-0 text-[#D4AF37]" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {/* Outer wrapper/Ribbon loops */}
              <path d="M48 62 c-2 4-6 12-4 18 c2 5 7 3 9-2 c2-5-1-12-5-16" />
              <path d="M51 63 c3 3 8 11 11 14 c3 3 6-1 2-5 c-4-4-9-8-13-9" />
              {/* Ribbon tails */}
              <path d="M49 68 c-1 4-2 9-2 13 c0 3 2 4 2 1" />
              <path d="M52 68 c1 4 2 10 4 14 c1 2 2 0 1-2" />
              <path d="M46 72 c1 3 3 8 5 11" />
              {/* Flower stems */}
              <path d="M43 62 l-3 18 M46 63 l-1 19 M53 63 l2 16 M56 62 l4 14" />
              {/* Center Rose / Main Blossom */}
              <path d="M45 44 c-2-3-1-7 2-8 c3-1 6 1 5 4 c-1 3-4 3-5 1 z" />
              <path d="M42 42 c-3 1-5 5-3 8 c2 3 7 2 8-2 c0-3-2-5-5-6" />
              <path d="M40 46 c-1 4 2 8 6 8 c4 0 6-4 5-7" />
              {/* Top Blossoms & Buds */}
              <path d="M50 24 c2-2 6-2 7 1 c1 2-1 5-4 4 c-2 0-3-3-3-5" />
              <path d="M48 26 c-2-2-5-1-6 2 c-1 2 1 4 3 3" />
              <path d="M59 31 c1-3 5-3 6 0 c1 2-2 4-4 3" />
              <path d="M35 34 c-2 0-3 3-2 5 c1 2 4 1 4-1" />
              {/* Left Hydrangea / Berry clusters */}
              <circle cx="33" cy="40" r="1.5" /><circle cx="36" cy="39" r="1.5" />
              <circle cx="32" cy="43" r="1.5" /><circle cx="35" cy="42" r="1.5" />
              <circle cx="31" cy="46" r="1.5" /><circle cx="34" cy="46" r="1.5" />
              {/* Right Steatite / Tulip shapes */}
              <path d="M60 40 c3-3 7-1 8 2 l-5 5 z" />
              <path d="M65 47 c3-2 6 1 6 4 l-6 2 z" />
              <path d="M58 52 c2-2 5 0 5 3 l-5 2 z" />
              {/* Leaves & Foliage extensions */}
              <path d="M28 38 c2-3 6-2 5 2 c-1 3-4 1-5-4 Z" />
              <path d="M26 43 c3-1 4 2 2 4 c-2 2-3-1-2-4 Z" />
              <path d="M33 28 c3 1 3 5 0 6 c-3-1-2-5 0-6 Z" />
              <path d="M55 21 c2 2 1 5-2 5 c-3-1-2-4 2-5 Z" />
              <path d="M66 31 c2-2 5-1 4 3 c-1 3-4 1-4-3 Z" />
              <path d="M72 37 c3 0 4 3 1 5 c-3-1-3-4-1-5 Z" />
              <path d="M68 54 c1 3-1 6-4 5 c-3-1-1-5 4-5 Z" />
              <path d="M38 56 c-2 2-5 1-5-2 c0-3 4-2 5 2 Z" />
              <path d="M44 60 c0 2-3 3-4 1 c-1-2 2-3 4-2 Z" />
            </svg>

            {/* Left-aligned typography with perfect line split */}
            <p className=" text-left font-[family-name:var(--font-playfair)] text-xl font-normal leading-[1.3] text-[#D4AF37] md:text-4xl">
              <span className="block">Here at Casa D&apos; Bloom, we create all of your</span>
              <span className="block">dreams &amp; make all moments blossom.</span>
            </p>
          </div>
        </Banner>

        <SplitSection
          title="Our Events"
          description="Discover the perfect floral arrangement for any occasion. Whether it's an intimate gathering or a grand celebration, our designs will make your moments bloom beautifully."
          imageSrc={IMG.wedding}
          imageAlt="Wedding floral display visual"
          backgroundColor="bg-white"
          imagePosition="right"
          button={{
            label: "SEE MORE",
            href: "/gallery",
            variant: "outline"
          }}
        />

        <SplitSection
          title="Shop Holidays & Occasions"
          imageSrc={IMG.arrangement}
          imageAlt="Holiday centerpiece collection display"
          backgroundColor="bg-[#F9E5EA]"
          imagePosition="left"
          button={{
            label: "SEND FLOWERS",
            href: "/get-in-touch",
            variant: "outline"
          }}
        />

        <FeatureGrid
          sectionTitle="What we do"
          sectionSubtitle="It all begins with a vision. Whether it's an unforgettable event, a stunning floral arrangement, or the perfect gift, we bring your ideas to life."
          items={WHAT_WE_DO_ITEMS}
          columnsClassName="sm:grid-cols-3"
        />

        <Banner backgroundColor="bg-[#F9E5EA]">
          <p className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#D4AF37] md:text-xl">
            Farm-fresh flowers for any special occasion or just because.{" "}
            <Link href="/get-in-touch" className="underline hover:opacity-80">
              Order Now
            </Link>
          </p>
        </Banner>

        <MediaGallery 
          images={SHOWCASE_IMAGES} 
          gridColumnsStyle="sm:grid-cols-2" 
        />
      </main>
    </div>
  );
}