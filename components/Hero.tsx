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
        priority
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative z-10 mx-auto flex w-full max-w-screen-2xl items-center px-6 py-24 sm:px-10 lg:px-16">
        <div className="max-w-xl">
          <h1
            className="text-[90px] font-semibold leading-[0.92] tracking-tighter text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
          {title}
          </h1>

          {buttons.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-4 sm:mt-12 sm:gap-5">
            {buttons.map((btn, index) => (
              <Button
                key={index}
                label={btn.label}
                href={btn.href}
                variant={btn.variant}
                className={btn.className}
              />
            ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};