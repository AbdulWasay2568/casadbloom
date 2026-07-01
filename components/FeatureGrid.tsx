import Image from "next/image";

export interface GridItem {
  img: string;
  label: string;
}

interface FeatureGridProps {
  sectionTitle: string;
  sectionSubtitle?: string;
  items: GridItem[];
  columnsClassName?: string;
}

export const FeatureGrid = ({
  sectionTitle,
  sectionSubtitle,
  items,
  columnsClassName = "sm:grid-cols-3",
}: FeatureGridProps) => {
  return (
    <section className="bg-white px-4 py-14 md:px-8 md:py-18">
      <div className="mx-auto max-w-[980px] text-center">
        <h2
          className="font-[family-name:var(--font-playfair)] text-4xl font-bold md:text-6xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {sectionTitle}
        </h2>
        {sectionSubtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-[1.7] text-black/80 md:text-lg">
            {sectionSubtitle}
          </p>
        )}
      </div>
      
      <div className="mx-auto mt-10 flex w-fit max-w-full flex-wrap justify-center gap-4 px-2 md:px-4">
        {items.map((item, index) => (
          <div key={index} className="flex w-[295px] flex-col items-center gap-4">
            <div className="relative h-[350px] w-[295px] overflow-hidden">
              <Image
                src={item.img}
                alt={item.label}
                fill
                sizes="295px"
                className="object-cover"
              />
            </div>
            <p
              className="font-[family-name:var(--font-playfair)] text-[1.25rem] font-semibold leading-none tracking-[-0.02em] text-[#D4AF37]"
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