import { useEffect, useState } from "react";
import lqip from "../data/lqip";

const srcOf = (img) => (typeof img === "string" ? img : img.src);
const captionOf = (img) => (typeof img === "string" ? "" : img.caption || "");

// Flipbook format: a single cover image (no caption) plus a button that
// opens a modal flipping through the project's pages.
export const Flipbook = ({ cover, title, pages = [], pdf }) => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [loadedPage, setLoadedPage] = useState(-1);

  const last = pages.length - 1;
  const go = (n) => setPage((p) => Math.min(Math.max(p + n, 0), last));

  // Keyboard nav + scroll lock while the modal is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    // Lock scroll on both <html> and <body> — the scroll container varies.
    const html = document.documentElement;
    const prevBody = document.body.style.overflow;
    const prevHtml = html.style.overflow;
    document.body.style.overflow = "hidden";
    html.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevBody;
      html.style.overflow = prevHtml;
    };
  }, [open, last]);

  const openBook = () => {
    setPage(0);
    setOpen(true);
  };

  const current = pages[page];
  const ph = current ? lqip[srcOf(current)] : null; // { ar, uri } placeholder
  // The on-page cover is the first page of the flipbook itself.
  const coverSrc = pages.length ? srcOf(pages[0]) : cover;

  return (
    <div className="flipbook-block">
      <figure className="flipbook-cover">
        <div className="plate-photo">
          <img src={coverSrc} alt={title} loading="lazy" decoding="async" />
        </div>
      </figure>

      <div className="flipbook-actions">
        {pages.length > 0 && (
          <button className="flipbook-open" onClick={openBook}>
            open flipbook ({pages.length}) →
          </button>
        )}
        {pdf && (
          <a
            className="flipbook-pdf"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open as PDF ↗
          </a>
        )}
      </div>

      {open && (
        <div
          className="flipbook-overlay"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} flipbook`}
        >
          <button
            className="flipbook-close"
            onClick={() => setOpen(false)}
            aria-label="close flipbook"
          >
            ×
          </button>

          <div className="flipbook-modal" onClick={(e) => e.stopPropagation()}>
            <div className="flipbook-stage">
              {/* The frame is sized by the page's aspect ratio so it fills
                  the stage correctly before the full image loads; the
                  blurred placeholder shows underneath, full page fades in. */}
              <div
                key={page}
                className="flipbook-frame"
                style={{ "--ar": ph?.ar || 1 }}
              >
                {ph?.uri && (
                  <img
                    className="flipbook-lqip"
                    src={ph.uri}
                    alt=""
                    aria-hidden="true"
                  />
                )}
                <img
                  className={`flipbook-page${
                    loadedPage === page ? " is-loaded" : ""
                  }`}
                  src={srcOf(current)}
                  alt={`${title} — page ${page + 1}`}
                  decoding="async"
                  onLoad={() => setLoadedPage(page)}
                />
              </div>
            </div>

            <div className="flipbook-controls">
              <button
                className="flipbook-nav"
                onClick={() => go(-1)}
                disabled={page === 0}
                aria-label="previous page"
              >
                ← prev
              </button>
              <span className="flipbook-count">
                {captionOf(current) ? `${captionOf(current)} · ` : ""}
                {page + 1} / {pages.length}
              </span>
              <button
                className="flipbook-nav"
                onClick={() => go(1)}
                disabled={page === last}
                aria-label="next page"
              >
                next →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Flipbook;
