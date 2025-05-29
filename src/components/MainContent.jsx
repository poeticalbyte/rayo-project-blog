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
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default MainContent;