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
      <div className="mx-auto flex max-w-[1440px] items-center justify-between p-4 w-full h-auto">

        <div className="flex items-center justify-center gap-8">
        {/* Brand Logo */}
          <Link href="/" className="shrink-0" aria-label="Casa D' Bloom Home">
            <Image
              src="/logo.png"
              alt="Casa D' Bloom Logo"
              width={280}
              height={90}
              priority
            />
          </Link>

          {/* Desktop Primary Navigation */}
          <nav className="hidden md:block" aria-label="Primary Navigation">
            <ul className="flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold font-nunito tracking-[0.05em] transition hover:opacity-70"
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
        <div className="hidden md:block">

          <Button
            label="BOOK AN EVENT"
            href="/get-in-touch"
            variant="outline"
          />
          
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-6 bg-black transition-transform" aria-hidden="true" />
          <span className="block h-0.5 w-6 bg-black transition-opacity" aria-hidden="true" />
          <span className="block h-0.5 w-6 bg-black transition-transform" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {menuOpen && (
        <nav className="border-t border-black/10 bg-white py-6 md:hidden" aria-label="Mobile Navigation">
          <ul className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm font-bold tracking-[0.12em] py-1"
                  style={{ color: GOLD }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/get-in-touch"
                onClick={() => setMenuOpen(false)}
                className="inline-block rounded-full border px-8 py-3.5 text-xs font-bold tracking-[0.1em] text-black"
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