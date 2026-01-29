
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  current: string;
  setPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ current, setPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('dark'); // Default to dark for hero
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Scrolled State
      setIsScrolled(window.scrollY > 50);

      // 2. Theme Detection
      // Check the point at the visual center of the navbar (top-6 is ~24px, height ~50px => ~50px from top)
      const checkY = 50; 
      const checkX = window.innerWidth / 2;
      
      const elements = document.elementsFromPoint(checkX, checkY);
      
      // Default to what we had if we find nothing specific
      let foundTheme = null;

      for (const el of elements) {
          // Skip the navbar itself
          if (el.closest('nav')) continue;

          // Look for data-theme attribute on the element or its ancestors
          const themeContainer = el.closest('[data-theme]');
          if (themeContainer) {
              foundTheme = themeContainer.getAttribute('data-theme');
              break; // Found the top-most content element with a theme
          }
      }

      if (foundTheme) {
        setCurrentTheme(foundTheme);
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    // Run once on mount/update to set initial state
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', onScroll);
  }, [current]); // Re-run when page changes to ensure correct initial theme for new page

  const navItems = [
    { id: 'home', label: 'Overview' },
    { id: 'about', label: 'Agency' },
    { id: 'collections', label: 'Collections' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setPage(id);
    setIsMenuOpen(false);
  };

  const isDarkMode = currentTheme === 'dark';
  
  // Theme configuration objects
  const theme = {
    container: isDarkMode 
      ? (isScrolled ? 'bg-navy/80 backdrop-blur-xl border-white/10 shadow-black/20' : 'bg-navy/40 backdrop-blur-md border-white/10')
      : 'bg-white/80 backdrop-blur-xl border-navy/5 shadow-navy/5',
    text: isDarkMode ? 'text-white' : 'text-navy',
    subText: isDarkMode ? 'text-white/50 group-hover:text-gold' : 'text-navy/40 group-hover:text-navy',
    logoBg: isDarkMode ? 'bg-white' : 'bg-navy',
    logoText: isDarkMode ? 'text-navy' : 'text-white',
    pillActive: isDarkMode ? 'bg-white text-navy shadow-lg' : 'bg-navy text-white shadow-lg',
    pillInactive: isDarkMode ? 'text-white/70 hover:text-white hover:bg-white/10' : 'text-navy/60 hover:text-navy hover:bg-navy/5',
    buttonBorder: isDarkMode ? 'border-white/20 text-white hover:border-gold hover:text-navy hover:bg-gold' : 'border-navy/10 text-navy hover:border-navy hover:bg-navy hover:text-white',
    mobileToggle: isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-navy/5 hover:bg-navy/10',
    mobileToggleLine: isDarkMode ? 'bg-white' : 'bg-navy'
  };

  return (
    <>
      {/* Floating Dock Container */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 md:top-6 left-0 right-0 z-[100] flex justify-center px-4 md:px-6 pointer-events-none"
      >
        <div className={`
          pointer-events-auto
          relative flex items-center justify-between 
          w-full max-w-5xl 
          transition-all duration-500 ease-out
          ${isScrolled ? 'px-5 py-3 shadow-2xl' : 'px-6 py-4 md:px-8 md:py-5'}
          rounded-full border
          ${theme.container}
        `}>
          
          {/* Brand */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group"
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-serif font-bold text-sm transition-colors duration-500 ${theme.logoBg} ${theme.logoText}`}>
              S
            </div>
            <div className="flex flex-col items-start">
              <span className={`font-bold tracking-widest text-sm font-serif transition-colors duration-500 ${theme.text}`}>SHAAQ</span>
              <span className={`text-[8px] uppercase tracking-mega hidden sm:block transition-colors duration-500 ${theme.subText}`}>Trading Ltd.</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center rounded-full px-2 py-1 transition-colors duration-500 ${isDarkMode ? 'bg-black/20' : 'bg-navy/5'}`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`
                  relative px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500
                  ${current === item.id ? theme.pillActive : theme.pillInactive}
                `}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Action / Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => handleNavClick('contact')}
              className={`
                hidden md:block px-5 py-2 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all duration-300
                ${theme.buttonBorder}
              `}
            >
              Enquire
            </button>

            <button 
              onClick={() => setIsMenuOpen(true)}
              className={`md:hidden w-10 h-10 rounded-full flex flex-col items-center justify-center gap-1.5 transition-colors duration-500 ${theme.mobileToggle}`}
            >
              <span className={`w-4 h-px transition-colors duration-500 ${theme.mobileToggleLine}`}></span>
              <span className={`w-4 h-px transition-colors duration-500 ${theme.mobileToggleLine}`}></span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[110] bg-navy flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              ✕
            </button>

            <div className="flex flex-col items-center space-y-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1), duration: 0.5, type: 'spring' }}
                  onClick={() => handleNavClick(item.id)}
                  className="serif-heading text-4xl text-white hover:text-gold transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
            
            <div className="absolute bottom-12 text-center">
               <p className="text-[10px] text-white/30 tracking-widest uppercase mb-2">Shaaq Trading Ltd.</p>
               <p className="text-gold text-xs font-serif italic">Est. 1994</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
