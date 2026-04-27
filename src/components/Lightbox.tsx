import { useEffect } from "react";

type LightboxProps = {
  src: string | null;
  onClose: () => void;
};

export function Lightbox({ src, onClose }: LightboxProps) {
  const open = src !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      className={`lightbox${open ? " open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button type="button" className="lightbox-close" aria-label="Close" onClick={onClose}>
        &times;
      </button>
      {open ? <img src={src} alt="Expanded view" className="lightbox-img" /> : null}
    </div>
  );
}
