// Header.tsx
import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import Sidebar from './Sidebar';

const Header: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const navbarStyle: React.CSSProperties = {
    backgroundColor: 'rgba(33,37,41,0.9)', // Adjust the alpha channel for opacity
  };

  return (
    // logo,nav,burger
    <>
      <Navbar  variant="dark"  style={navbarStyle}>
        <Container className="justify-content-between">
          <div>
            <Navbar.Brand href="#">
              <img
                src="../../public/Karman.png" 
                
                height="40"
                className="d-inline-block align-top bg-grey"
              />
            </Navbar.Brand>
          </div>
          <div>
            <Nav className="me-auto d-none d-lg-flex">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
            <Button
              variant="outline-light"
              className="d-lg-none"
              onClick={toggleSidebar}
              style={{ border: 'none' }}
            >
              ☰
            </Button>
          </div>
        </Container>
      </Navbar>
      <Sidebar show={showSidebar} onHide={() => setShowSidebar(false)} />
    </>
  );
};

export default Header;
