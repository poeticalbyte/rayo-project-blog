import React from 'react';
import './MainContent.css';
import logo from '../assets/rayologotipo.png';

const MainContent = ({ activeContent }) => {
  if (!activeContent) {
    return (
      <div className="text-center">
        <p className="main-text">Selecciona un elemento del menú.</p>
      </div>
    );
  }

  // Función para renderizar el contenido del párrafo (texto o imagen)
  const renderParagraphContent = (paragraphText, inlineImages) => {
    const parts = paragraphText.split(/(\[IMAGEN_PARRAFO:.*?\])/g); // Divide por el marcador
    return parts.map((part, i) => {
      if (part.startsWith('[IMAGEN_PARRAFO:')) {
        const imagePath = part.substring(16, part.length - 1); // Extrae la ruta de la imagen
        const imageData = inlineImages && inlineImages[imagePath];
        if (imageData) {
          return (
            <img
              key={i}
              src={imagePath}
              alt={imageData.alt || 'Imagen en el párrafo'}
              className={imageData.className || 'inline-image'} // Clase CSS para estilos
            />
          );
        }
      }
      return <span key={i}>{part}</span>; // Si no es una imagen, devuelve el texto
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
          {renderParagraphContent(paragraph, activeContent.inlineImages)} {/* Pasa las imágenes en línea */}
        </p>
      ))}
    </div>
  );
};

export default MainContent;