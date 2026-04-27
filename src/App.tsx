import { useCallback, useState } from "react";
import { AutoCarousel } from "./components/AutoCarousel";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { Lightbox } from "./components/Lightbox";
import { SiteFooter } from "./components/SiteFooter";
import { CAROUSEL_IMAGES } from "./data/carousel";

function App() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const closeLightbox = useCallback(() => setLightboxSrc(null), []);

  return (
    <>
      <main id="top">
        <Hero />
        <Gallery onOpen={setLightboxSrc} />
        <AutoCarousel images={CAROUSEL_IMAGES} />
      </main>
      <SiteFooter />
      <Lightbox src={lightboxSrc} onClose={closeLightbox} />
    </>
  );
}

export default App;
