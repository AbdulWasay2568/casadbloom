import Image from "next/image";
import { Button } from "./Button";

export interface ActionButton {
  label: string;
  href: string;
  variant: "solid" | "outline"; // Explicitly defining the allowed variants
  className?: string;
}

interface HeroProps {
  title: string;
  backgroundImage: string;
  imageAlt?: string;
  buttons?: ActionButton[];
}

export const Hero = ({
  title,
  backgroundImage,
  imageAlt = "Hero background image",
  buttons = [],
}: HeroProps) => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
      <Image
        src={backgroundImage}
        alt={imageAlt}
        fill
        sizes="100vw"
        priority
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-black/35" />
      
      {/* Container with responsive padding and alignment */}
      <div className="relative z-10 flex w-full items-center px-6 py-20 sm:px-12 md:px-20 lg:px-32">
        {/* Adjusted responsive max-width and margins */}
        <div className="mx-auto text-center md:mx-0 md:max-w-2xl md:text-left">
          <h1
            className="text-4xl font-bold leading-tight tracking-normal text-white sm:text-5xl md:text-6xl xl:text-8xl xl:leading-none"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {title}
          </h1>

          {buttons.length > 0 && (
            /* Buttons stack vertically on tiny screens, shift horizontal on sm+ */
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              {buttons.map((btn, index) => (
                <Button
                  key={index}
                  label={btn.label}
                  href={btn.href}
                  variant={btn.variant}
                  className={`w-full sm:w-auto ${btn.className || ""}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
