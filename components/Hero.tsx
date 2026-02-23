import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onCta: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCta }) => {
  return (
    <div className="relative min-h-[90vh] w-full bg-pastel-sky/30 overflow-hidden flex items-center pt-20">
      
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-pastel-lavender rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-pastel-mint rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pastel-rose rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-soft text-brand text-sm font-bold uppercase tracking-wide"
          >
            <Sparkles size={16} />
            <span>Premium Quality</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-text-main leading-[1.1]"
          >
            Custom Apparel, <br/>
            <span className="text-brand relative inline-block">
              Simplified.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-pastel-mint -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-text-muted max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            Premium printing and embroidery for brands, teams, and events. We bring your designs to life with quality that speaks for itself.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <button 
              onClick={onCta}
              className="px-8 py-4 bg-brand text-white rounded-full font-bold text-lg shadow-bouncy hover:bg-brand-dark transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              Get Started
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-white text-text-main border border-gray-100 rounded-full font-bold text-lg shadow-soft hover:bg-gray-50 transition-all hover:scale-105 active:scale-95">
              View Catalog
            </button>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-full aspect-square bg-white rounded-[2rem] shadow-bouncy overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500">
             <img 
               src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1000&auto=format&fit=crop" 
               alt="Custom T-Shirts" 
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
             />
          </div>
          {/* Decorative elements behind image */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-pastel-lemon rounded-full animate-bounce delay-700 -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pastel-rose rounded-full animate-pulse delay-1000 -z-10"></div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
