import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden pt-20">
      
      {/* Header */}
      <section className="relative py-20 bg-pastel-lavender/30">
        <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-pastel-lavender rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-64 h-64 bg-pastel-sky rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand font-bold text-sm uppercase tracking-wide mb-6"
          >
            Our Story
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-text-main mb-8"
          >
            We make clothing <br/> <span className="text-brand">personal.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed"
          >
            From a small family business to a global partner for schools and brands. We keep it simple: great clothes, made right.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-[2.5rem] overflow-hidden shadow-bouncy transform -rotate-2 hover:rotate-0 transition-transform duration-500 aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1558507652-2d9626c4e67a?auto=format&fit=crop&q=80&w=1200" 
                  alt="Design Studio" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-pastel-mint rounded-full -z-10"></div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-text-main">
                Designed in London. <br/> Made by Us.
              </h2>
              <p className="text-lg text-text-muted leading-relaxed">
                We own our production facilities, which means we control the quality from start to finish. No middlemen, just great clothing delivered directly to you.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-6 bg-surface-subtle rounded-3xl">
                  <Users className="w-8 h-8 text-brand mb-3" />
                  <h3 className="font-bold text-text-main">Family Run</h3>
                  <p className="text-sm text-text-muted">Personal care in every order.</p>
                </div>
                <div className="p-6 bg-surface-subtle rounded-3xl">
                  <Heart className="w-8 h-8 text-pink-500 mb-3" />
                  <h3 className="font-bold text-text-main">Ethical</h3>
                  <p className="text-sm text-text-muted">Fair wages & safe conditions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="bg-surface-subtle rounded-[3rem] p-12 text-center">
             <h2 className="text-3xl font-display font-bold text-text-main mb-12">Where we operate</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { city: 'London, UK', role: 'Design & HQ', color: 'bg-pastel-sky' },
                  { city: 'Colombo, LK', role: 'Manufacturing', color: 'bg-pastel-mint' },
                  { city: 'Osaka, JP', role: 'Sourcing', color: 'bg-pastel-rose' }
                ].map((loc, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-bouncy transition-all duration-300">
                    <div className={`w-16 h-16 mx-auto ${loc.color} rounded-full flex items-center justify-center mb-6 text-text-main`}>
                      <MapPin size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-text-main mb-2">{loc.city}</h3>
                    <p className="text-text-muted">{loc.role}</p>
                  </div>
                ))}
             </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
