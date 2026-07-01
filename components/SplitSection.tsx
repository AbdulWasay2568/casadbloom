import Image from "next/image";
import { Button } from "./Button";

interface SplitSectionProps {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  backgroundColor: string;
  imagePosition?: "left" | "right";
  button?: { label: string; href: string; variant?: "solid" | "outline" };
}

export const SplitSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
  backgroundColor,
  imagePosition = "right",
  button,
}: SplitSectionProps) => {
  const isImageLeft = imagePosition === "left";

  return (
    <section className={`${backgroundColor} px-4 py-16 md:px-6 md:py-20`}>
      <div className="mx-auto grid max-w-[1700px] items-center gap-10 md:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] md:gap-10">
        {/* Content Box */}
        <div className={`${isImageLeft ? "md:order-2" : "md:order-1"}`}>
          <h2
            className="max-w-[11ch] text-[clamp(3rem,5vw,5.4rem)] font-bold leading-[0.94] tracking-[-0.04em] text-black"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {title}
          </h2>
          {description && (
            <p className="mt-6 max-w-sm text-[1.05rem] leading-[1.65] text-black md:text-[1.25rem]">
              {description}
            </p>
          )}
          {button && (
            <Button
              label={button.label}
              href={button.href}
              variant={button.variant}
              className="mt-8"
            />
          )}
        </div>
        
        {/* Image Box */}
        <div
          className={`relative ${isImageLeft ? "md:order-1" : "md:order-2"}`}
          style={{ position: "relative", minHeight: "420px" }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 768px) 60vw, 100vw"
            className="rounded-md border-[3px] border-white object-cover shadow-[0_2px_10px_rgba(0,0,0,0.22)]"
          />
        </div>
      </div>
    </section>
  );
};