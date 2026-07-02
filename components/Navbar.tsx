"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './Button';

const NAV_LINKS = [
  { label: "OUR STORY", href: "/our-story" },
  { label: "GALLERY", href: "/gallery" },
  { label: "GET IN TOUCH", href: "/get-in-touch" },
];

const GOLD = "#D4AF37";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
      {/* Responsive horizontal padding added here */}
      <div className="flex w-full items-center justify-between gap-4 py-3 px-4 md:px-8 xl:px-16">

        <div className="flex items-center gap-9">
          {/* Brand Logo with responsive sizing */}
          <Link href="/" className="shrink-0" aria-label="Casa D' Bloom Home">
            <Image
              src="/logo.png"
              alt="Casa D' Bloom Logo"
              width={264}
              height={81}
              className="h-auto w-44 sm:w-52 md:w-64"
              priority
            />
          </Link>

          {/* Desktop Primary Navigation */}
          <nav className="hidden lg:block" aria-label="Primary Navigation">
            <ul className="flex items-center gap-10 xl:gap-12">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] font-bold font-nunito tracking-widest transition hover:opacity-70"
                    style={{ color: GOLD }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Desktop Call to Action */}
        <div className="hidden lg:block fade-in">
          <Button
            label="BOOK AN EVENT"
            href="/get-in-touch"
            variant="outline"
          />
        </div>

        {/* Mobile Menu Toggle Button (Animated to "X") */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="flex flex-col gap-1.5 p-2 lg:hidden z-50"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span 
            className={`block h-0.5 w-6 bg-black transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`} 
            aria-hidden="true" 
          />
          <span 
            className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`} 
            aria-hidden="true" 
          />
          <span 
            className={`block h-0.5 w-6 bg-black transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`} 
            aria-hidden="true" 
          />
        </button>
      </div>

      {/* Mobile Drawer Navigation (Matched visibility to lg:hidden) */}
      {menuOpen && (
        <nav className="border-t border-black/10 bg-white py-6 lg:hidden" aria-label="Mobile Navigation">
          <ul className="flex flex-col items-center gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm font-bold tracking-[0.12em] py-1 transition hover:opacity-70"
                  style={{ color: GOLD }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 w-full max-w-[240px] text-center">
              <Link
                href="/get-in-touch"
                onClick={() => setMenuOpen(false)}
                className="block rounded-full border px-8 py-3 text-xs font-bold tracking-widest text-black transition hover:bg-black/5"
                style={{ borderColor: GOLD }}
              >
                BOOK AN EVENT
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;