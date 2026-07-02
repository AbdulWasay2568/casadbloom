import Link from "next/link";
import Image from "next/image";

export const footerData = {
  company: {
    title: "Company",
    links: [
      { label: "Our Story", href: "/our-story" },
      { label: "Gallery", href: "/gallery" },
      { label: "Get in Touch", href: "/get-in-touch" },
    ],
  },

  questions: {
    title: "Questions",
    location: "San Diego, CA",
    email: "casadbloom@gmail.com",
    phone: "(619) 325-9896",
  },

  social: {
    title: "Follow Us",
    links: [
      {
        name: "Instagram",
        href: "https://www.instagram.com/casadbloom/",
        icon: "https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_60,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/01c3aff52f2a4dffa526d7a9843d46ea.png",
      },
    ],
  },
};

export const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Responsive section padding */}
      <section className="px-4 py-16 sm:px-8 lg:px-16 xl:px-24 lg:py-20" aria-label="Footer Information">
        {/* Main layout container transforms from flex-column to clean multi-column layouts */}
        <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          
          {/* Logo container: centers on mobile, sticks to left on desktop */}
          <div className="flex w-full justify-center lg:w-auto lg:justify-start lg:shrink-0">
            <Link href="/" aria-label="Casa D' Bloom Home" className="inline-flex">
              <Image
                src="/logo.png"
                alt="Casa D' Bloom Logo"
                width={280}
                height={90}
                style={{ width: "auto", height: "auto" }}
                className="h-auto w-44 sm:w-52 lg:w-64"
                priority
              />
            </Link>
          </div>

          {/* Links and details wrapper grid layout handles variable column counts per screen layout */}
          <div className="grid w-full grid-cols-1 gap-10 text-center text-[0.94rem] sm:grid-cols-2 sm:text-left md:grid-cols-3 lg:max-w-3xl lg:flex-1">
            
            {/* Company Link Block */}
            <nav
              aria-label="Footer Navigation"
              className="flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <h2
                className="font-sans font-bold leading-none text-[#D4AF37]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {footerData.company.title}
              </h2> 

              <ul className="mt-4 space-y-2.5 leading-tight">
                {footerData.company.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="underline decoration-1 underline-offset-4 hover:opacity-80 transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Questions/Contact Address Block */}
            <address className="not-italic flex flex-col items-center text-center sm:items-start sm:text-left">
              <h2
                className="font-bold leading-none text-[#D4AF37]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {footerData.questions.title}
              </h2>

              <div className="mt-4 space-y-2.5 leading-tight text-black">
                <p>{footerData.questions.location}</p>

                <p>
                  <span className="font-bold">Email:</span>{" "}
                  <a
                    href={`mailto:${footerData.questions.email}`}
                    className="hover:underline break-all"
                  >
                    {footerData.questions.email}
                  </a>
                </p>

                <p>
                  <span className="font-bold">Phone:</span>{" "}
                  <a
                    href={`tel:${footerData.questions.phone.replace(/[^\d+]/g, "")}`}
                    className="hover:underline"
                  >
                    {footerData.questions.phone}
                  </a>
                </p>
              </div>
            </address>

            {/* Social Block handles responsive width boundaries */}
            <section aria-label="Social Media" className="flex flex-col items-center sm:items-start col-span-1 sm:col-span-2 md:col-span-1">
              <div className="flex flex-col items-center gap-3 sm:items-start md:flex-row md:items-center">
                <h2
                  className="font-bold leading-none text-[#D4AF37]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {footerData.social.title}
                </h2> 

                <div className="flex items-center gap-2 mt-1 md:mt-0">
                  {footerData.social.links.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`Follow Casa D' Bloom on ${social.name}`}
                      className="hover:scale-105 transition-transform"
                    >
                      <Image
                        src={social.icon}
                        alt={social.name}
                        width={34}
                        height={34}
                        className="h-7 w-7"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </div>

        </div>
      </section>

      {/* Attribution info area */}
      <div className="pb-8 px-4 text-center">
        <p className="text-[13px] text-black/85">
          Designed by{" "}
          <a
            href="http://trusitemedia.com"
            target="_blank"
            rel="noreferrer noopener"
            className="underline hover:opacity-80 transition"
          >
            trusitemedia
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
