import React, { useState, useRef, useEffect } from 'react';
import './MainContent.css';
import logo from '../assets/rayologotipo.png'; // Logo específico

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const MainContent = ({ activeContent }) => {
  const [numPages, setNumPages] = useState(null);
  // const [containerWidth, setContainerWidth] = useState(null); // No longer strictly needed for Page width

  const pdfContainerRef = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // You can still keep this useEffect if you need containerWidth for other purposes
  // or for potential future responsive adjustments, but it's not needed for Page width
  useEffect(() => {
    const handleResize = () => {
      if (pdfContainerRef.current) {
        // If you need to log it or use it for other elements, keep this line
        // setContainerWidth(pdfContainerRef.current.offsetWidth);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeContent]);

  if (!activeContent) {
    return (
      <div className="text-center main-content-container">
        <p className="main-text">Selecciona un elemento del menú.</p>
      </div>
    );
  }

  const renderParagraphContent = (paragraphText, inlineImages, inlinePdfs) => {
    const parts = paragraphText.split(/(\[IMAGEN_PARRAFO:.*?\])|(\[PDF:.*?\])/g);

    return parts.map((part, i) => {
      if (!part) return null;

      if (part.startsWith('[IMAGEN_PARRAFO:')) {
        const imageKey = part.substring(16, part.length - 1);
        const imageData = inlineImages && inlineImages[imageKey];

        if (imageData && imageData.src) {
          return (
            <img
              key={i}
              src={imageData.src}
              alt={imageData.alt || 'Imagen en el párrafo'}
              className={imageData.className || 'inline-image'}
            />
          );
        }
      }

      if (part.startsWith('[PDF:')) {
        const pdfKey = part.substring(5, part.length - 1);
        const pdfData = inlinePdfs && inlinePdfs[pdfKey];

        if (pdfData && pdfData.src) {
          return (
            <div
              key={i}
              ref={pdfContainerRef}
              className="inline-pdf-viewer-container"
              style={{ height: pdfData.height || 'auto' }}
            >
              {/* You can remove the containerWidth check here, as it's not strictly necessary for rendering */}
              {/* If you pass width to Document, react-pdf will use it for all pages */}
              <Document
                file={pdfData.src}
                onLoadSuccess={onDocumentLoadSuccess}
                error="No se pudo cargar el PDF."
                loading="Cargando PDF..."
                // Consider adding a `width` prop here for the Document if you want a fixed width for all pages
                // For dynamic width based on container, rely on CSS
                // width={containerWidth} // <-- If you pass it here, it will apply to all pages
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    // REMOVE THIS LINE: width={containerWidth}
                    // The CSS `width: 100% !important;` on .react-pdf__Page
                    // will now correctly control the width based on its parent container
                  />
                ))}
              </Document>
            </div>
          );
        }
      }

      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="text-center main-content-container">
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