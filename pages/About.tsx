
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="bg-white overflow-hidden">
      {/* Immersive Header - DARK */}
      <section className="h-[50vh] md:h-[60vh] relative flex items-center justify-center bg-navy" data-theme="dark">
        <motion.div 
          style={{ y: yImage }}
          className="absolute inset-0 opacity-50 grayscale mix-blend-luminosity"
        >
          {/* Image: Container Ship or Logistics Hub to signify Trading */}
          <img src="https://images.unsplash.com/photo-1494412574643-35d324698422?auto=format&fit=crop&q=80&w=2400" className="w-full h-full object-cover" />
        </motion.div>
        <div className="relative z-10 text-center space-y-4 md:space-y-6 px-6">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold uppercase tracking-[0.4em] md:tracking-[0.6em] text-[9px] font-bold block"
          >
            ESTABLISHED 1994
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="serif-heading text-5xl md:text-9xl text-white tracking-tight"
          >
            Global Trade
          </motion.h1>
        </div>
      </section>

      {/* Philosophy Section - LIGHT */}
      <section className="py-20 md:py-48 px-6 bg-white" data-theme="light">
        <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center"
          >
            <h2 className="serif-heading text-4xl md:text-7xl text-navy leading-tight">
              London to<br /><span className="italic font-light">Colombo.</span>
            </h2>
            <div className="space-y-6 md:space-y-8">
              <p className="text-lg md:text-xl text-navy/70 font-light leading-relaxed">
                Founded by Shaqeeq Ahamed, Shaaq Trading has evolved from a boutique garment house into a multinational trading operation.
              </p>
              <p className="text-base md:text-lg text-navy/50 font-light leading-relaxed">
                We bridge the gap between British design standards and South Asian manufacturing capabilities. By owning the production line in Colombo and managing our own freight logistics, we eliminate the volatility of third-party sourcing.
              </p>
            </div>
          </motion.div>

          {/* Global Footprint Grid */}
          <div className="border-t border-navy/10 pt-16 md:pt-24">
             <span className="text-[9px] text-gold font-bold uppercase tracking-mega block mb-12">Global Footprint</span>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-4">
                    <h3 className="serif-heading text-2xl text-navy">London, UK</h3>
                    <p className="text-xs text-navy/50 leading-relaxed">
                        <strong>Registered Office & Design</strong><br/>
                        71-75 Shelton Street<br/>
                        Covent Garden, WC2H 9JQ
                    </p>
                </div>
                <div className="space-y-4">
                    <h3 className="serif-heading text-2xl text-navy">Colombo, LK</h3>
                    <p className="text-xs text-navy/50 leading-relaxed">
                        <strong>Manufacturing Plant</strong><br/>
                        Cut-and-Sew, Embroidery, QC Labs, Ethical Auditing.
                    </p>
                </div>
                <div className="space-y-4">
                    <h3 className="serif-heading text-2xl text-navy">Osaka, JP</h3>
                    <p className="text-xs text-navy/50 leading-relaxed">
                        <strong>Technical Sourcing</strong><br/>
                        Performance Fabrics, Buttons, Zippers, and Trims.
                    </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Process/Logistics Section - DARK */}
      <section className="py-24 md:py-48 bg-navy text-white px-6" data-theme="dark">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
             <div className="space-y-8">
                <h2 className="serif-heading text-3xl md:text-5xl leading-tight">Freight &<br/>Fulfillment.</h2>
                <p className="text-white/60 font-light leading-relaxed">
                    We don't just make it; we move it. Shaaq Trading handles all freight forwarding, customs clearance, and duty payments. We deliver DDP (Delivered Duty Paid) to your warehouse, meaning the price we quote is the final landed price. No hidden import fees. No port delays.
                </p>
             </div>
             <div className="grid grid-cols-2 gap-4">
                 <div className="p-6 bg-white/5 border border-white/10">
                    <div className="text-2xl font-bold text-gold mb-2">25k+</div>
                    <div className="text-[9px] uppercase tracking-widest text-white/50">Monthly Capacity (Units)</div>
                 </div>
                 <div className="p-6 bg-white/5 border border-white/10">
                    <div className="text-2xl font-bold text-gold mb-2">14</div>
                    <div className="text-[9px] uppercase tracking-widest text-white/50">Days Air Freight</div>
                 </div>
                 <div className="p-6 bg-white/5 border border-white/10">
                    <div className="text-2xl font-bold text-gold mb-2">AQL 2.5</div>
                    <div className="text-[9px] uppercase tracking-widest text-white/50">Quality Standard</div>
                 </div>
                 <div className="p-6 bg-white/5 border border-white/10">
                    <div className="text-2xl font-bold text-gold mb-2">100%</div>
                    <div className="text-[9px] uppercase tracking-widest text-white/50">Carbon Offset</div>
                 </div>
             </div>
        </div>
      </section>
    </div>
  );
};

export default About;
