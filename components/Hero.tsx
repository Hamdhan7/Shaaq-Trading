
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  onCta: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCta }) => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <div className="relative min-h-[100dvh] w-full bg-navy overflow-hidden flex items-center justify-center pt-28 md:pt-20" data-theme="dark">
      
      {/* 1. Ambient Light / "Blobs" Layer */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-[-20%] right-[-10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-blue-900/40 rounded-full blur-[80px] md:blur-[120px] mix-blend-screen pointer-events-none"
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 50, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gold/10 rounded-full blur-[60px] md:blur-[100px] mix-blend-screen pointer-events-none"
      />

      {/* Center Highlight */}
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-white/5 rounded-full blur-[40px] md:blur-[80px] mix-blend-overlay pointer-events-none" />


      {/* 2. Main Layout */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center h-full">
        
        {/* Left: Typography (Now Order 1 on mobile to ensure visibility) */}
        <div className="space-y-6 md:space-y-10 order-1 flex flex-col justify-center">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-3"
            >
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gold animate-pulse"></span>
                <span className="text-gold/80 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em]">
                    Global Textile Trading
                </span>
            </motion.div>

            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="serif-heading text-5xl md:text-8xl lg:text-9xl text-white leading-[0.9] tracking-tighter"
            >
                Source.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">
                  Manufacture.
                </span>
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-white/60 font-light text-base md:text-xl leading-relaxed max-w-md border-l border-white/10 pl-6"
            >
                A vertically integrated trading house. From yarn sourcing in Osaka to final assembly in Colombo, we engineer the supply chain for the UK's leading institutions.
            </motion.p>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap items-center gap-4 md:gap-6 pt-2 md:pt-4"
            >
                <button 
                    onClick={onCta}
                    className="flex-1 md:flex-none px-6 md:px-8 py-3 md:py-4 bg-white text-navy text-[10px] md:text-[11px] font-bold uppercase tracking-widest hover:bg-gold transition-colors duration-300 rounded-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] text-center whitespace-nowrap"
                >
                    Start Enquiry
                </button>
                <button className="flex-1 md:flex-none px-6 md:px-8 py-3 md:py-4 border border-white/10 text-white text-[10px] md:text-[11px] font-bold uppercase tracking-widest hover:border-white/30 hover:bg-white/5 transition-all duration-300 rounded-sm backdrop-blur-sm text-center whitespace-nowrap"
                >
                    View Capabilities
                </button>
            </motion.div>
        </div>

        {/* Right: The "Cutout" Image (Order 2 on mobile) */}
        <div className="relative order-2 h-[40vh] md:h-[85vh] flex items-end justify-center w-full">
             
             {/* Abstract Ring Decorations behind image - Scaled down for mobile */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-square border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
             
             <motion.div 
                style={{ y: yParallax }}
                className="relative w-full h-full flex items-end justify-center"
             >
                 <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1600" 
                    alt="Executive Uniform Standard"
                    className="w-full h-full object-cover object-top opacity-100 select-none pointer-events-none mix-blend-normal brightness-90 contrast-110"
                    style={{
                        // Fade bottom to blend
                        maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)', 
                    }}
                 />
                 
                 {/* Floating Glass Card */}
                 <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] md:top-[30%] right-4 md:-right-4 bg-white/5 backdrop-blur-xl border border-white/10 p-4 md:p-5 rounded-sm max-w-[140px] md:max-w-[160px]"
                 >
                    <div className="text-[8px] md:text-[9px] text-gold font-bold uppercase tracking-widest mb-2">Production</div>
                    <div className="text-[10px] md:text-xs text-white font-serif leading-tight">Batch No. 2441<br/>Colombo HQ</div>
                 </motion.div>
             </motion.div>
        </div>

      </div>

      {/* Bottom Ticker / Trust Bar */}
      <div className="absolute bottom-0 w-full border-t border-white/5 bg-navy/30 backdrop-blur-md z-20">
         <div className="flex overflow-hidden py-3 md:py-4">
             <div className="animate-[scroll_30s_linear_infinite] flex whitespace-nowrap gap-12 md:gap-24 px-8">
                 {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex items-center gap-12 md:gap-24">
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 flex items-center gap-3">
                            <span className="w-1 h-1 bg-gold rounded-full"></span> GLOBAL SOURCING
                        </span>
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 flex items-center gap-3">
                            <span className="w-1 h-1 bg-gold rounded-full"></span> FACTORY DIRECT
                        </span>
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 flex items-center gap-3">
                            <span className="w-1 h-1 bg-gold rounded-full"></span> DDP LOGISTICS
                        </span>
                    </div>
                 ))}
             </div>
         </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

    </div>
  );
};

export default Hero;
