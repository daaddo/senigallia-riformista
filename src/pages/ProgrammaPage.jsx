import { useState, useLayoutEffect, useRef, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "./ProgrammaPage.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const rawPdfPath = `${import.meta.env.BASE_URL}customassets/programma/programma 26 web.pdf`;
const pdfFile = encodeURI(rawPdfPath);

function ProgrammaPage() {
  const containerRef = useRef(null);
  const [numPages, setNumPages] = useState(0);
  const [width, setWidth] = useState(0);
  const [error, setError] = useState(null);

  const onDocumentLoadSuccess = useCallback(({ numPages: n }) => {
    setError(null);
    setNumPages(n);
  }, []);

  const onDocumentLoadError = useCallback((err) => {
    setError(err?.message || "Impossibile caricare il programma.");
  }, []);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      setWidth(el.clientWidth);
    });
    ro.observe(el);
    setWidth(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  const pageWidth =
    width > 0 ? Math.max(120, Math.min(width - 8, 900)) : undefined;

  return (
    <div className="programma-page" ref={containerRef}>
      {error ? (
        <p className="programma-page__error" role="status">
          {error}
        </p>
      ) : null}
      <div className="programma-page__doc">
        {pageWidth ? (
          <Document
            className="programma-page__document"
            file={pdfFile}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={
              <p className="programma-page__loading" aria-live="polite">
                Caricamento programma…
              </p>
            }
            error={
              <p className="programma-page__error" role="status">
                Errore di caricamento.
              </p>
            }
          >
            {Array.from({ length: numPages }, (_, i) => (
              <div
                key={`p-${i + 1}`}
                className="programma-page__page"
              >
                <Page
                  pageNumber={i + 1}
                  width={pageWidth}
                  renderTextLayer
                  renderAnnotationLayer
                />
              </div>
            ))}
          </Document>
        ) : null}
      </div>
    </div>
  );
}

export default ProgrammaPage;
