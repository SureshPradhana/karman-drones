import React, { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <main>
      <Header onToggleSidebar={handleToggleSidebar} />
      <MainContent />
      <Sidebar show={isSidebarOpen} onHide={() => setSidebarOpen(false)} />
      <Footer />
    </main>
  );
}
