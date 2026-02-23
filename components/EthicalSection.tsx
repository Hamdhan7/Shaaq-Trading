import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ArrowRight } from 'lucide-react';

interface EthicalSectionProps {
  onLearnMore: () => void;
}

const EthicalSection: React.FC<EthicalSectionProps> = ({ onLearnMore }) => {
  return (
    <section className="py-20 bg-pastel-mint/30 overflow-hidden relative">
      {/* Decorative Blobs */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-pastel-mint rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-bouncy transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=1200"
                alt="Sustainable Fabric"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-pastel-lemon rounded-full -z-10 animate-bounce delay-100"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand/10 rounded-full -z-10"></div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-green-600 text-sm font-bold uppercase tracking-wide mb-6">
                <Leaf size={16} />
                <span>Sustainable</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-text-main leading-tight">
                Consciously <br/>
                <span className="text-green-600">Crafted.</span>
              </h2>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-text-muted leading-relaxed"
            >
              Organic materials. Fair wages. Zero compromise. We believe in making clothes that look good and do good.
            </motion.p>

            <ul className="space-y-4">
              {[
                '100% Organic Cotton',
                'Recycled Materials',
                'Ethical Manufacturing',
                'Eco-Friendly Inks'
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex items-center gap-3 text-text-main font-medium"
                >
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.button 
              onClick={onLearnMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-text-main border border-green-100 rounded-full font-bold text-lg shadow-soft hover:shadow-md transition-all flex items-center gap-2 group mt-4"
            >
              Our Impact
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-green-600" />
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EthicalSection;
