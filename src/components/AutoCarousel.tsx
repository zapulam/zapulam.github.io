import { useEffect, useRef } from "react";

type AutoCarouselProps = {
  images: readonly string[];
};

const SPEED_PX_PER_SEC = 30;

export function AutoCarousel({ images }: AutoCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const doubled = [...images, ...images];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let rafId = 0;
    let offset = 0;
    let last = performance.now();
    let cancelled = false;

    const step = (ts: number) => {
      if (cancelled) return;
      const dt = (ts - last) / 1000;
      last = ts;
      offset -= SPEED_PX_PER_SEC * dt;
      const loopWidth = track.scrollWidth / 2;
      if (-offset >= loopWidth) {
        offset += loopWidth;
      }
      track.style.transform = `translateX(${offset}px)`;
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
    };
  }, [images]);

  return (
    <section className="carousel-section">
      <div className="carousel">
        <div ref={trackRef} className="carousel-track">
          {doubled.map((src, i) => (
            <div key={`${src}-${i}`} className="carousel-item">
              <img src={src} alt={`Carousel image ${(i % images.length) + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
