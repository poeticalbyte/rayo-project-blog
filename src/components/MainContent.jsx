import React, { useState, useRef, useEffect } from 'react';
import './MainContent.css';
import logo from '../assets/rayologotipo.png'; // Este logo aún se importa aquí porque es específico de Sidebar

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const MainContent = ({ activeContent }) => {
  const [numPages, setNumPages] = useState(null);
  const [containerWidth, setContainerWidth] = useState(null);

  const pdfContainerRef = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
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
    // Expresión regular mejorada para capturar correctamente las partes
    const parts = paragraphText.split(/(\[IMAGEN_PARRAFO:.*?\])|(\[PDF:.*?\])/g);

    return parts.map((part, i) => {
      if (!part) return null;

      // --- Lógica para IMAGEN ---
      if (part.startsWith('[IMAGEN_PARRAFO:')) {
        const imageKey = part.substring(16, part.length - 1); // Obtenemos la clave original (e.g., '../assets/ventajasrayo.png')
        const imageData = inlineImages && inlineImages[imageKey]; // Buscamos en el objeto inlineImages

        if (imageData && imageData.src) { // Verificamos que imageData y su propiedad src existan
          return (
            <img
              key={i}
              src={imageData.src} // Usamos la variable importada que está en imageData.src
              alt={imageData.alt || 'Imagen en el párrafo'}
              className={imageData.className || 'inline-image'}
            />
          );
        }
      }

      // --- Lógica para PDF ---
      if (part.startsWith('[PDF:')) {
        const pdfKey = part.substring(5, part.length - 1); // Obtenemos la clave original (e.g., '../assets/scrum.pdf')
        const pdfData = inlinePdfs && inlinePdfs[pdfKey]; // Buscamos en el objeto inlinePdfs

        if (pdfData && pdfData.src) { // Verificamos que pdfData y su propiedad src existan
          return (
            <div
              key={i}
              ref={pdfContainerRef}
              className="inline-pdf-viewer-container"
              style={{ height: pdfData.height || 'auto' }}
            >
              {containerWidth && (
                <Document
                  file={pdfData.src} // Usamos la variable importada que está en pdfData.src
                  onLoadSuccess={onDocumentLoadSuccess}
                  error="No se pudo cargar el PDF."
                  loading="Cargando PDF..."
                >
                  {
                    Array.from(new Array(numPages), (el, index) => (
                      <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        width={containerWidth}
                      />
                    ))
                  }
                </Document>
              )}
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
        {/* activeContent.image ya contendrá la URL correcta procesada por el bundler */}
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