import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-white">
      <section className="px-6 py-12 sm:px-8 sm:py-16 lg:px-24 lg:py-24" aria-label="Footer Information">
        <div className="mx-auto flex max-w-375 flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-24">
          <div className="flex w-full justify-start lg:w-[42%] lg:justify-start">
            <Link href="/" aria-label="Casa D' Bloom Home" className="inline-flex">
              <Image
                src="/logo.png"
                alt="Casa D' Bloom Logo"
                width={280}
                height={90}
                style={{ width: "auto", height: "auto" }}
                className="h-auto w-45 sm:w-55 lg:w-70"
                priority
              />
            </Link>
          </div>

          <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-12 lg:max-w-140 lg:flex-1">
            <nav aria-label="Footer Navigation" className="flex flex-col items-start text-left">
              <h2
                className="font-sans text-[1.0rem] font-bold leading-none text-[#D4AF37]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Company
              </h2>
              <ul className="mt-4 space-y-2 text-[1.0rem] leading-tight">
                <li>
                  <Link href="/our-story" className="underline decoration-1 underline-offset-4 hover:opacity-80">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="underline decoration-1 underline-offset-4 hover:opacity-80">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/get-in-touch" className="underline decoration-1 underline-offset-4 hover:opacity-80">
                    Get in Touch
                  </Link>
                </li>
              </ul>
            </nav>

            <address className="not-italic flex flex-col items-start text-left">
              <h2
                className="font-(family-name:--font-playfair) text-[1.0rem] font-semibold leading-none text-[#D4AF37]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Questions
              </h2>
              <div className="mt-4 space-y-2 text-[1.0rem] leading-tight text-black">
                <p>San Diego, CA</p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a href="mailto:casadbloom@gmail.com" className="hover:underline">
                    casadbloom@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Phone:</span>{" "}
                  <a href="tel:+16193259896" className="hover:underline">
                    (619) 325-9896
                  </a>
                </p>
              </div>
            </address>

            <section aria-label="Social Media" className="flex flex-col items-start">
              <div className="flex items-center gap-3">
                <h2
                  className="font-(family-name:--font-playfair) text-[1rem] font-semibold leading-none text-[#D4AF37]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Follow Us
                </h2>

                <a
                  href="https://www.instagram.com/casadbloom/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Follow Casa D' Bloom on Instagram"
                >
                  <Image
                    src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_60,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/01c3aff52f2a4dffa526d7a9843d46ea.png"
                    alt="Instagram"
                    width={34}
                    height={34}
                    className="h-7 w-7"
                  />
                </a>
              </div>
            </section>
            <div aria-hidden="true" className="hidden sm:block" />
          </div>
        </div>
      </section>

      <div className="pb-8 text-center">
        <p className="text-sm text-black/85">
          Designed by{" "}
          <a
            href="http://trusitemedia.com"
            target="_blank"
            rel="noreferrer noopener"
            className="underline hover:opacity-80"
          >
            trusitemedia
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
