import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  current: string;
  setPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ current, setPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'collections', label: 'Products' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setPage(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-soft py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div 
            className="cursor-pointer flex items-center gap-2 group"
            onClick={() => setPage('home')}
          >
            <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center text-white font-display font-bold text-xl shadow-bouncy group-hover:scale-110 transition-transform">
              S
            </div>
            <span className={`font-display font-bold text-2xl tracking-tight ${isScrolled ? 'text-text-main' : 'text-text-main'}`}>
              Shaaq<span className="text-brand">Trading</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-medium text-sm transition-colors relative group ${
                  current === item.id ? 'text-brand' : 'text-text-muted hover:text-text-main'
                }`}
              >
                {item.label}
                {current === item.id && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand rounded-full"
                  />
                )}
              </button>
            ))}
            <button 
              onClick={() => setPage('contact')}
              className="bg-brand hover:bg-brand-dark text-white px-6 py-2.5 rounded-full font-medium text-sm shadow-bouncy transition-all hover:scale-105 active:scale-95"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-text-main"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <motion.span 
                animate={isMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-current rounded-full origin-center"
              />
              <motion.span 
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-current rounded-full"
              />
              <motion.span 
                animate={isMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-current rounded-full origin-center"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-2xl font-display font-bold text-left ${
                    current === item.id ? 'text-brand' : 'text-text-main'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="h-px bg-gray-100 my-2" />
              <button 
                onClick={() => handleNavClick('contact')}
                className="bg-brand text-white py-4 rounded-2xl font-bold text-lg shadow-bouncy w-full"
              >
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
