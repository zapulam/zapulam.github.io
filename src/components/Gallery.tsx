import { GALLERY_IMAGES } from "../data/gallery";

type GalleryProps = {
  onOpen: (src: string) => void;
};

export function Gallery({ onOpen }: GalleryProps) {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery-grid">
        {GALLERY_IMAGES.map(({ src, alt }) => (
          <figure key={src} className="gallery-item">
            <a
              href={src}
              className="lightbox-link"
              onClick={(e) => {
                e.preventDefault();
                onOpen(src);
              }}
            >
              <img src={src} alt={alt} />
            </a>
          </figure>
        ))}
      </div>
    </section>
  );
}
