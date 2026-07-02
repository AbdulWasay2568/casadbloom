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

  // Section paddings: Compact on mobile, wider on tablet, expansive on desktop
  const sectionClasses = "px-4 py-16 sm:px-8 md:px-16 lg:px-24 xl:px-36 lg:py-24";

  // Flex/Grid orders to swap visual positions on screens lg and up
  const contentOrderClass = isImageLeft ? "lg:order-2" : "lg:order-1";
  const imageOrderClass = isImageLeft ? "lg:order-1" : "lg:order-2";

  return (
    <section className={`${backgroundColor} ${sectionClasses} overflow-hidden`}>
      <div className="mx-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        
        {/* Content Column */}
        <div className={`flex flex-col items-center text-center lg:items-start lg:text-left ${contentOrderClass}`}>
          <h2
            className="text-4xl font-bold leading-[1.1] text-black sm:text-5xl xl:text-[60px] xl:leading-[0.96]"
            style={{ 
              fontFamily: "var(--font-playfair)",
              maxWidth: isImageLeft ? "9ch" : "8ch" 
            }}
          >
            {title}
          </h2>
          
          {description && (
            <p className="mt-6 text-base leading-[1.5] text-black sm:text-lg max-w-md">
              {description}
            </p>
          )}
          
          {button && (
            <div className="mt-8">
              <Button
                label={button.label}
                href={button.href}
                variant={button.variant}
                className="inline-flex h-12 items-center justify-center rounded-[28px] px-8 text-sm font-bold tracking-[0.15em] transition-transform active:scale-95"
              />
            </div>
          )}
        </div>

        {/* Image Column */}
        <div 
          className={`relative w-full overflow-hidden rounded-md border-[3px] border-white shadow-[0_2px_10px_rgba(0,0,0,0.22)] ${imageOrderClass} ${
            isImageLeft ? "aspect-[4/3] xl:aspect-[646/613]" : "aspect-[16/10] xl:aspect-[819/423]"
          }`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
};
