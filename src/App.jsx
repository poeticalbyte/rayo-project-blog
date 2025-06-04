
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';
import contentData from './data/contentData.js';

function App() {
  const initialContentId = contentData.length > 0 ? contentData[0].id : null;
  const [activeContentId, setActiveContentId] = useState(initialContentId);

  const getActiveContent = () => {
    return contentData.find(item => item.id === activeContentId) || null;
  };

  return (
    <div className="app-container">
      <Row className="g-0 h-100 w-100">
        <Col xs={12} md={4} lg={3} className="sidebar-column">
          <Sidebar
            contentItems={contentData.map(item => ({ id: item.id, title: item.title }))}
            onSelectContent={setActiveContentId}
            activeContentId={activeContentId}
          />
        </Col>
        <Col xs={12} md={8} lg={9} className="main-content-column">
          <MainContent activeContent={getActiveContent()} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
