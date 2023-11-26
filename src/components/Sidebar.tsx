// Sidebar.tsx
import React, { FC } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';

interface SidebarProps {
  show: boolean;
  onHide: () => void;
}

const Sidebar: FC<SidebarProps> = ({ show, onHide }) => {
  // hamburger menu style
  const offcanvasStyle: React.CSSProperties = {
    width: '100vw',
    maxWidth: '100%',
    margin: 0,
  };
  
  return (
    // hambuger menu
    <Offcanvas show={show} onHide={onHide} placement="end" style={offcanvasStyle}>
      <Offcanvas.Header closeButton className="ms-auto mx-3" >
      </Offcanvas.Header>
      <Offcanvas.Body classsName="sidebar">
        <ul className="navbar-nav d-flex justify-content-center align-items-center flex-column">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
