import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-white">
      <section className="p-24" aria-label="Footer Information">
        <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-16 lg:flex-row lg:items-start lg:gap-24">
          <div className="flex justify-center lg:w-[42%] lg:justify-start">
            <Link href="/" aria-label="Casa D' Bloom Home" className="inline-flex">
              <Image
                src="/logo.avif"
                alt="Casa D' Bloom Logo"
                width={280}
                height={90}
                priority
              />
            </Link>
          </div>

          <div className="grid w-full max-w-[620px] grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-x-20 sm:gap-y-12 lg:max-w-[560px] lg:flex-1">
            <nav aria-label="Footer Navigation" className="flex flex-col items-center sm:items-start">
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

            <address className="not-italic flex flex-col items-center text-center sm:items-start sm:text-left">
              <h2
                className="font-[family-name:var(--font-playfair)] text-[1.0rem] font-semibold leading-none text-[#D4AF37]"
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

            <section aria-label="Social Media" className="flex flex-col items-center sm:items-start">
              <h2
                className="font-[family-name:var(--font-playfair)] text-[1.0rem] font-semibold leading-none text-[#D4AF37]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Follow Us
              </h2>
              <a
                href="https://www.instagram.com/casadbloom/"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 inline-flex items-center gap-4"
                aria-label="Follow Casa D' Bloom on Instagram"
              >
                <Image
                  src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_60,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/01c3aff52f2a4dffa526d7a9843d46ea.png"
                  alt="Instagram"
                  width={34}
                  height={34}
                  className="h-[34px] w-[34px]"
                />
              </a>
            </section>

            <div aria-hidden="true" className="hidden sm:block" />
          </div>
        </div>
      </section>

      <div className="pb-8 text-center">
        <p className="text-[1.05rem] text-black/85">
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