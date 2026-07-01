import Image from "next/image";

export interface GalleryImage {
  src: string;
  alt: string;
}

interface MediaGalleryProps {
  images: GalleryImage[];
  gridColumnsStyle?: string;
}

export const MediaGallery = ({
  images,
  gridColumnsStyle = "sm:grid-cols-2",
}: MediaGalleryProps) => {
  return (
    <section className="bg-white">
      <div className={`grid grid-cols-1 ${gridColumnsStyle}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-[340px] w-full sm:h-[440px]"
            style={{ position: "relative", minHeight: "340px" }}
          >
            <Image 
              src={image.src} 
              alt={image.alt} 
              fill 
              className="object-cover" 
            />
          </div>
        ))}
      </div>
    </section>
  );
};