// MainContent.tsx
import React from 'react';
import { Container } from 'react-bootstrap';

const MainContent: React.FC = () => {
  //backrgound image style
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: 'url("../../public/Pratham.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', 
    backgroundOpcaity: '0.5',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };
  //pratham text style
  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    color:'rgba(255,255,255,0.7)',
  };

  return (
    <div style={backgroundStyle}>
      <Container style={contentStyle}>
        <h1 className="display-4">Pratham</h1>
      </Container>
    </div>
  );
};

export default MainContent;
