
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Factory, Ship } from 'lucide-react';

const Features: React.FC = () => {
  const services = [
    {
      id: "01",
      title: 'Global Sourcing',
      desc: 'We procure technical fabrics and raw materials directly from mills in Japan, Italy, and China to meet exact specifications.',
      icon: <Globe className="w-6 h-6 text-navy" />
    },
    {
      id: "02",
      title: 'Vertical Manufacturing',
      desc: 'Owned facilities in Colombo allow for rigorous Quality Control (AQL 2.5) and ethical oversight from cut to pack.',
      icon: <Factory className="w-6 h-6 text-navy" />
    },
    {
      id: "03",
      title: 'Freight & Logistics',
      desc: 'End-to-end supply chain management. We handle customs, freight, and DDP delivery directly to your UK distribution center.',
      icon: <Ship className="w-6 h-6 text-navy" />
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-stone" data-theme="light">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        
        {/* TRUST SIGNALS / CLIENT LOGOS */}
        <div className="mb-16 md:mb-32 border-b border-navy/10 pb-12">
            <p className="text-center text-[10px] font-bold uppercase tracking-mega text-navy/40 mb-8">Supply Chain Partner For</p>
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                {['St. Michaels Academy', 'Barclays Corporate', 'The Royal Hotel', 'Imperial College', 'TechSpace London'].map((client, i) => (
                    <span key={i} className="serif-heading text-lg md:text-2xl text-navy font-bold text-center">{client}</span>
                ))}
            </div>
        </div>

        <div className="mb-12 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-4">
          <h2 className="serif-heading text-4xl md:text-6xl text-navy">
            The Trading Model.
          </h2>
          <span className="hidden md:block text-[10px] font-bold uppercase tracking-mega text-navy/40 mb-2">
            Integrated Solutions
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="group flex flex-col justify-between min-h-[300px] md:h-80 bg-white border border-navy/5 p-6 md:p-10 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/5 transition-all duration-500"
            >
              <div className="flex justify-between items-start w-full mb-6 md:mb-0">
                 <div className="p-3 bg-stone rounded-full group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                    {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-6 h-6 transition-colors duration-500 group-hover:text-white" })}
                 </div>
                 <span className="text-[10px] font-bold text-navy/30 tracking-widest">
                  {item.id}
                 </span>
              </div>
              
              <div>
                <h3 className="serif-heading text-2xl md:text-3xl text-navy mb-3 md:mb-4 group-hover:translate-x-1 transition-transform duration-500">
                  {item.title}
                </h3>
                <p className="text-sm text-navy/50 leading-relaxed font-light group-hover:text-navy/70 transition-colors">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Features;
