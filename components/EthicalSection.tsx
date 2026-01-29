
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface EthicalSectionProps {
  onLearnMore: () => void;
}

const EthicalSection: React.FC<EthicalSectionProps> = ({ onLearnMore }) => {
  return (
    <section className="bg-navy text-stone py-20 md:py-48 overflow-hidden relative" data-theme="dark">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="space-y-10 md:space-y-16 order-1">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-[9px] text-gold font-bold uppercase tracking-mega block mb-6 md:mb-8">
                Governance
              </span>
              <h2 className="serif-heading text-4xl md:text-7xl leading-tight">
                The Shaaq<br/><span className="italic opacity-50">Standard.</span>
              </h2>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-xl font-light text-white/60 leading-relaxed max-w-md"
            >
              We don't outsource responsibility. Our Colombo facility operates as a direct extension of our London studio, ensuring Net Zero 2024 compliance and absolute fair wage transparency.
            </motion.p>

            <motion.button 
              onClick={onLearnMore}
              whileHover={{ x: 10 }}
              className="group flex items-center space-x-4 text-[10px] font-bold uppercase tracking-widest text-white hover:text-gold transition-colors"
            >
              <span>View ESG Report</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-2 relative aspect-square md:aspect-[4/5] bg-navy-light overflow-hidden"
          >
            {/* Image: Industrial thread/fabric detail, clean and organized */}
            <img 
              src="https://images.unsplash.com/photo-1606296303861-1d5d36e788bc?auto=format&fit=crop&q=80&w=1200"
              alt="Fabric Detail"
              className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-normal"
            />
            <div className="absolute bottom-8 left-8 border-l border-white/20 pl-4 bg-navy/80 p-4 backdrop-blur-sm">
              <p className="text-[9px] text-white/40 font-bold uppercase tracking-mega">Fabric Origin</p>
              <p className="text-white font-mono text-xs mt-1">Osaka, Japan / Colombo, LK</p>
            </div>
          </motion.div>
        </div>

      </div>
      
      {/* Decorative large text */}
      <div className="absolute -bottom-10 -right-10 pointer-events-none opacity-[0.03] select-none">
         <span className="text-[20vw] font-bold text-white leading-none">ETHICS</span>
      </div>
    </section>
  );
};

export default EthicalSection;
