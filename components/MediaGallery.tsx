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
            className="relative h-85 w-full sm:h-110"
            style={{ position: "relative", minHeight: "340px" }}
          >
            <Image 
              src={image.src} 
              alt={image.alt} 
              fill 
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover" 
            />
          </div>
        ))}
      </div>
    </section>
  );
};