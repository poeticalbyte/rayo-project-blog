import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './Sidebar.css';
import logo from '/REPO_NAME/assets/rayologotipo.png';

const Sidebar = ({ contentItems, onSelectContent, activeContentId }) => {
  return (
    <div className="d-flex flex-column h-100">
      <div className="sidebar-profile-icon-container text-center mb-3">
        <div className="sidebar-profile-icon">
          <img src={logo} alt="Logo" className="profile-image" />
        </div>
      </div>
      <h5 className="text-center project-title">RAYO PROJECT</h5>
      <p className="text-center text-muted small mb-3 project-authors">Juan Ramírez & Daniel Yepez</p>

      <div className="sidebar-nav-list-wrapper">
        <Nav className="flex-column nav-pills">
          {contentItems.map((item) => (
            <Nav.Item key={item.id}>
              <Nav.Link
                href={`#${item.id}`}
                className={`sidebar-nav-link ${item.id === activeContentId ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectContent(item.id);
                }}
              >
                {item.title}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;