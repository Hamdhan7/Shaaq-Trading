import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shirt, Truck, Palette, Zap, Leaf } from 'lucide-react';

const Features: React.FC = () => {
  const services = [
    {
      title: 'Made for You',
      desc: 'Unique apparel that perfectly matches your brand identity.',
      icon: <Palette className="w-6 h-6 text-brand" />,
      color: 'bg-pastel-sky'
    },
    {
      title: 'Quality First',
      desc: 'Finest fabrics ensuring comfort and durability.',
      icon: <Globe className="w-6 h-6 text-pink-500" />,
      color: 'bg-pastel-rose'
    },
    {
      title: 'Quick Shipping',
      desc: 'Streamlined logistics for on-time delivery.',
      icon: <Truck className="w-6 h-6 text-emerald-500" />,
      color: 'bg-pastel-mint'
    },
    {
      title: 'Expert Print',
      desc: 'Crisp, lasting logos with top-tier technology.',
      icon: <Shirt className="w-6 h-6 text-purple-500" />,
      color: 'bg-pastel-lavender'
    },
    {
      title: 'Express Service',
      desc: 'Need it fast? We get it to you in record time.',
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      color: 'bg-pastel-lemon'
    },
    {
      title: 'Eco-Friendly',
      desc: 'Organic and recycled materials for a better planet.',
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      color: 'bg-green-100'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand font-bold text-sm uppercase tracking-wide mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-main mb-6">
            Everything you need <br/> to build your brand.
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Simple, fast, and reliable custom clothing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-[2rem] bg-surface-subtle border border-transparent hover:border-gray-100 hover:bg-white hover:shadow-bouncy transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              
              <h3 className="text-xl font-display font-bold text-text-main mb-3">
                {item.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Features;
