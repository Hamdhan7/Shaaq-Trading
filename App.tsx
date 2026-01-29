
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductGallery from './components/ProductGallery';
import EthicalSection from './components/EthicalSection';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'about':
        return <About key="about" />;
      case 'contact':
        return <Contact key="contact" />;
      case 'collections':
        return (
          <motion.div
            key="collections-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24"
          >
            <ProductGallery />
            <Features />
          </motion.div>
        );
      default:
        // Home page is rendered without a limiting wrapper to preserve sticky behavior
        return (
          <div key="home-page">
            <Hero onCta={() => setCurrentPage('collections')} />
            <div className="relative z-20 bg-white">
              <Features />
              <ProductGallery />
              <EthicalSection onLearnMore={() => setCurrentPage('about')} />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar current={currentPage} setPage={setCurrentPage} />
      <main className="w-full">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>
      <Footer setPage={setCurrentPage} />
    </div>
  );
};

export default App;
