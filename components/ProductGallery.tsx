import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProductGallery: React.FC = () => {
  const products = [
    {
      id: '1',
      name: 'Custom T-Shirts',
      category: 'Essentials',
      image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=80&w=800',
      color: 'bg-pastel-sky'
    },
    {
      id: '2',
      name: 'Premium Hoodies',
      category: 'Streetwear',
      image: 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?auto=format&fit=crop&q=80&w=800',
      color: 'bg-pastel-rose'
    },
    {
      id: '3',
      name: 'Workwear Polos',
      category: 'Corporate',
      image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80&w=800',
      color: 'bg-pastel-mint'
    },
    {
      id: '4',
      name: 'Activewear',
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?auto=format&fit=crop&q=80&w=800',
      color: 'bg-pastel-lemon'
    }
  ];

  return (
    <section id="products" className="py-20 bg-surface-subtle">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-brand font-bold uppercase tracking-wide text-sm mb-2 block">Our Products</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-text-main">
              Quality you <br/> can feel.
            </h2>
          </div>
          <button className="px-6 py-3 bg-white border border-gray-200 rounded-full font-bold text-text-main shadow-soft hover:shadow-md transition-all flex items-center gap-2 group">
            View All Products
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] mb-4 shadow-soft group-hover:shadow-bouncy transition-all duration-500">
                <div className={`absolute inset-0 ${product.color} opacity-20 group-hover:opacity-0 transition-opacity duration-500 z-10`}></div>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-text-main shadow-sm">
                    {product.category}
                  </span>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100 shadow-lg">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-display font-bold text-text-main group-hover:text-brand transition-colors">
                {product.name}
              </h3>
              <p className="text-text-muted text-sm mt-1">Starting from £12.99</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductGallery;
