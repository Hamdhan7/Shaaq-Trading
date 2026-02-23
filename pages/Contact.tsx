import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-pastel-sky/20 min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand font-bold text-sm uppercase tracking-wide mb-4">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-text-main mb-6">
            Let's start your project.
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Whether you need 50 shirts or 5,000 uniforms, we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-soft hover:shadow-bouncy transition-all duration-300">
              <div className="w-12 h-12 bg-pastel-rose rounded-2xl flex items-center justify-center text-pink-500 mb-6">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold text-text-main mb-2">Email Us</h3>
              <p className="text-text-muted mb-4">For general inquiries and quotes.</p>
              <a href="mailto:hello@shaaqtrading.com" className="text-brand font-bold hover:underline">hello@shaaqtrading.com</a>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-soft hover:shadow-bouncy transition-all duration-300">
              <div className="w-12 h-12 bg-pastel-mint rounded-2xl flex items-center justify-center text-emerald-500 mb-6">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold text-text-main mb-2">Call Us</h3>
              <p className="text-text-muted mb-4">Mon-Fri from 9am to 6pm.</p>
              <a href="tel:+441234567890" className="text-brand font-bold hover:underline">+44 (0) 123 456 7890</a>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-soft hover:shadow-bouncy transition-all duration-300">
              <div className="w-12 h-12 bg-pastel-lemon rounded-2xl flex items-center justify-center text-yellow-600 mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-text-main mb-2">Visit Us</h3>
              <p className="text-text-muted mb-4">Come say hi at our office.</p>
              <span className="text-text-main font-medium">71-75 Shelton Street, London</span>
            </div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-bouncy"
          >
            <form className="space-y-8" onSubmit={e => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-main ml-1">Name</label>
                  <input type="text" className="w-full px-6 py-4 bg-surface-subtle rounded-2xl border-transparent focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all outline-none" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-main ml-1">Company</label>
                  <input type="text" className="w-full px-6 py-4 bg-surface-subtle rounded-2xl border-transparent focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all outline-none" placeholder="Company Name" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-main ml-1">Email</label>
                  <input type="email" className="w-full px-6 py-4 bg-surface-subtle rounded-2xl border-transparent focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all outline-none" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-main ml-1">Phone</label>
                  <input type="tel" className="w-full px-6 py-4 bg-surface-subtle rounded-2xl border-transparent focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all outline-none" placeholder="+44 ..." />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-text-main ml-1">What do you need?</label>
                <select className="w-full px-6 py-4 bg-surface-subtle rounded-2xl border-transparent focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all outline-none appearance-none cursor-pointer">
                  <option>Custom T-Shirts</option>
                  <option>Workwear & Uniforms</option>
                  <option>Hoodies & Sweatshirts</option>
                  <option>Caps & Hats</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-text-main ml-1">Message</label>
                <textarea rows={4} className="w-full px-6 py-4 bg-surface-subtle rounded-2xl border-transparent focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all outline-none resize-none" placeholder="Tell us more about your project..." />
              </div>

              <button className="w-full py-5 bg-brand text-white rounded-2xl font-bold text-lg shadow-bouncy hover:bg-brand-dark hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                Send Message
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
