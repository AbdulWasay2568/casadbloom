import Image from "next/image";

export interface GridItem {
  img: string;
  label: string;
}

interface FeatureGridProps {
  sectionTitle: string;
  sectionSubtitle?: string;
  items: GridItem[];
}

export const FeatureGrid = ({
  sectionTitle,
  sectionSubtitle,
  items,
}: FeatureGridProps) => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:px-8 lg:py-24">
      {/* Header Container */}
      <div className="mx-auto max-w-3xl text-center">
        <h2
          className="text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {sectionTitle}
        </h2>
        {sectionSubtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-black/80 md:text-lg">
            {sectionSubtitle}
          </p>
        )}
      </div>
      
      {/* 
        Grid Container: 
        - Max width restricted to exactly match three 295px items plus two 8px gaps (~901px).
        - gap-2 applies an 8px spacing vertically and horizontally.
      */}
      <div className="mx-auto mt-12 grid max-w-[901px] grid-cols-1 gap-2 justify-items-center sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <div key={index} className="group flex w-full max-w-[295px] flex-col items-center gap-3">
            {/* Image Aspect Container */}
            <div className="relative aspect-[3/3.5] w-full overflow-hidden rounded-sm bg-gray-100">
              <Image
                src={item.img}
                alt={item.label}
                fill
                sizes="(min-width: 1024px) 295px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={index < 3}
              />
            </div>
            {/* Label */}
            <p
              className="text-center text-xl font-bold tracking-tight text-[#D4AF37]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};