import React, { useState, useRef, useEffect } from 'react';
import './MainContent.css';
import logo from '/REPO_NAME/assets/rayologotipo.png';

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const MainContent = ({ activeContent }) => {
  const [numPages, setNumPages] = useState(null);
  // Eliminamos pageNumber y setPageNumber si queremos scroll continuo.
  // Si prefieres navegación por botones, mantenlos y la lógica de los botones.
  const [containerWidth, setContainerWidth] = useState(null);

  const pdfContainerRef = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    // Ya no es necesario setPageNumber(1) si vamos a renderizar todas las páginas.
  }

  useEffect(() => {
    const handleResize = () => {
      if (pdfContainerRef.current) {
        setContainerWidth(pdfContainerRef.current.offsetWidth);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeContent]);

  if (!activeContent) {
    return (
      <div className="text-center">
        <p className="main-text">Selecciona un elemento del menú.</p>
      </div>
    );
  }

  const renderParagraphContent = (paragraphText, inlineImages, inlinePdfs) => {
    const parts = paragraphText.split(/(\[IMAGEN_PARRAFO:.*?\])|(\[PDF:.*?\])/g);

    return parts.map((part, i) => {
      if (!part) return null;

      // --- Lógica para IMAGEN ---
      if (part.startsWith('[IMAGEN_PARRAFO:')) {
        const imagePath = part.substring(16, part.length - 1);
        const imageData = inlineImages && inlineImages[imagePath];
        if (imageData) {
          return (
            <img
              key={i}
              src={imagePath}
              alt={imageData.alt || 'Imagen en el párrafo'}
              className={imageData.className || 'inline-image'}
            />
          );
        }
      }

      // --- Lógica para PDF ---
      if (part.startsWith('[PDF:')) {
        const pdfPath = part.substring(5, part.length - 1);
        const pdfData = inlinePdfs && inlinePdfs[pdfPath];

        if (pdfData) {
          return (
            <div
              key={i}
              ref={pdfContainerRef}
              className="inline-pdf-viewer-container"
              style={{ height: pdfData.height || 'auto' }}
            >
              {containerWidth && (
                <Document
                  file={pdfPath}
                  onLoadSuccess={onDocumentLoadSuccess}
                  error="No se pudo cargar el PDF."
                  loading="Cargando PDF..."
                  // Añade un contenedor para el scroll si lo necesitas, o el mismo Document puede scrollear
                  // La clase 'react-pdf__Document' generada por react-pdf a menudo maneja el desbordamiento
                >
                  {
                    // Itera para renderizar todas las páginas
                    Array.from(new Array(numPages), (el, index) => (
                      <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        width={containerWidth} // Mantén el ancho para que el texto se vea bien
                        // Opcional: scale={1.5}
                      />
                    ))
                  }
                </Document>
              )}
              {/* Opcional: Puedes quitar estos controles de navegación si prefieres el scroll continuo */}
              {/*
              {numPages > 1 && (
                <div className="pdf-navigation">
                  <button
                    disabled={pageNumber <= 1}
                    onClick={() => setPageNumber(prevPageNumber => prevPageNumber - 1)}
                  >
                    Anterior
                  </button>
                  <p>
                    Página {pageNumber} de {numPages}
                  </p>
                  <button
                    disabled={pageNumber >= numPages}
                    onClick={() => setPageNumber(prevPageNumber => prevPageNumber + 1)}
                  >
                    Siguiente
                  </button>
                </div>
              )}
              */}
            </div>
          );
        }
      }

      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="text-center">
      <div className="large-image-placeholder mb-4">
        {activeContent.image && (
          <img src={activeContent.image} alt={activeContent.title} className="large-image-actual-image" />
        )}
      </div>

      <div className="main-profile-icon-container mb-3">
        <div className="main-profile-icon">
          <img src={logo} alt="Logo" className="profile-image" />
        </div>
      </div>

      <h1 className="main-title mb-4">{activeContent.title}</h1>
      {activeContent.paragraphs.map((paragraph, index) => (
        <p key={index} className="main-text text-start">
          {renderParagraphContent(paragraph, activeContent.inlineImages, activeContent.inlinePdfs)}
        </p>
      ))}
    </div>
  );
};

export default MainContent;