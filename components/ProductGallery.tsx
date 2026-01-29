
import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';

const ProductGallery: React.FC = () => {
  const products: Product[] = [
    {
      id: '1',
      name: 'Education',
      category: 'Schoolwear',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1600'
    },
    {
      id: '2',
      name: 'Corporate Identity',
      category: 'Workwear',
      image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80&w=1600'
    },
    {
      id: '3',
      name: 'Hospitality',
      category: 'Uniforms',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=1600'
    }
  ];

  return (
    <section id="products" className="py-20 md:py-48 bg-white" data-theme="light">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-16 md:mb-32">
          <div className="w-full md:w-1/3">
             <span className="text-[10px] text-gold font-bold uppercase tracking-mega block mb-4 md:mb-6">Sectors</span>
             <h2 className="serif-heading text-4xl md:text-7xl text-navy leading-[0.9]">
               Industry<br/>Solutions.
             </h2>
          </div>
          <div className="w-full md:w-1/3 md:pt-8">
            <p className="text-navy/60 font-light leading-relaxed text-base md:text-lg">
              We design and manufacture apparel systems for specific industries. From durable school uniforms to high-end hospitality attire, our garments are built to perform.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24">
          {products.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 1 }}
              className={`group cursor-pointer ${i === 1 ? 'md:mt-32' : ''} ${i === 2 ? 'md:-mt-32' : ''}`}
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-6 md:mb-8 bg-concrete">
                <motion.img 
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
                {/* Overlay details on hover - Always show button on mobile on tap/hover, or just keep overlay logic */}
                <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <button className="bg-white text-navy px-8 py-3 text-[10px] font-bold uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        View Catalogue
                    </button>
                </div>
              </div>

              <div className="flex justify-between items-end border-b border-navy/10 pb-4">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-navy/40 mb-2 block">
                    {product.category}
                  </span>
                  <h3 className="serif-heading text-2xl md:text-3xl text-navy">{product.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductGallery;
