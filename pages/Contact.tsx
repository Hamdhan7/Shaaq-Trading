
import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="bg-stone min-h-screen pt-32 md:pt-48 pb-12 md:pb-24 px-6" data-theme="light">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-12 md:mb-24 text-center">
          <span className="text-[9px] font-bold uppercase tracking-mega text-gold mb-4 md:mb-6 block">Trade Enquiry</span>
          <h1 className="serif-heading text-4xl md:text-7xl text-navy">Get a Quote.</h1>
          <p className="mt-6 text-navy/50 text-base md:text-lg max-w-xl mx-auto font-light">
            Tell us about your requirements. We specialize in bulk orders for schools, corporate teams, and hospitality.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 md:p-24 shadow-[0_0_50px_rgba(0,0,0,0.02)] border border-navy/5"
        >
          <form className="space-y-8 md:space-y-12" onSubmit={e => e.preventDefault()}>
            
            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="group">
                <label className="block text-[9px] font-bold uppercase tracking-widest text-navy/40 mb-3">Name</label>
                <input type="text" className="w-full border-b border-navy/10 py-3 bg-transparent outline-none text-navy font-serif text-xl focus:border-gold transition-colors rounded-none" placeholder="Full Name" />
              </div>
              <div className="group">
                <label className="block text-[9px] font-bold uppercase tracking-widest text-navy/40 mb-3">Organization</label>
                <input type="text" className="w-full border-b border-navy/10 py-3 bg-transparent outline-none text-navy font-serif text-xl focus:border-gold transition-colors rounded-none" placeholder="School or Company Name" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="group">
                <label className="block text-[9px] font-bold uppercase tracking-widest text-navy/40 mb-3">Email</label>
                <input type="email" className="w-full border-b border-navy/10 py-3 bg-transparent outline-none text-navy font-serif text-xl focus:border-gold transition-colors rounded-none" placeholder="email@organization.com" />
              </div>
              <div className="group">
                <label className="block text-[9px] font-bold uppercase tracking-widest text-navy/40 mb-3">Phone</label>
                <input type="tel" className="w-full border-b border-navy/10 py-3 bg-transparent outline-none text-navy font-serif text-xl focus:border-gold transition-colors rounded-none" placeholder="+44 ..." />
              </div>
            </div>

            {/* Quote Specifics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-0 md:pt-8">
               <div className="group">
                <label className="block text-[9px] font-bold uppercase tracking-widest text-navy/40 mb-3">Service Interest</label>
                <select className="w-full border-b border-navy/10 py-3 bg-transparent outline-none text-navy font-serif text-xl focus:border-gold transition-colors appearance-none rounded-none">
                    <option>School Uniforms</option>
                    <option>Corporate Workwear</option>
                    <option>Event Merchandise</option>
                    <option>Bespoke Manufacturing</option>
                    <option>Fabrics & Raw Materials</option>
                </select>
              </div>
              <div className="group">
                <label className="block text-[9px] font-bold uppercase tracking-widest text-navy/40 mb-3">Estimated Quantity</label>
                <select className="w-full border-b border-navy/10 py-3 bg-transparent outline-none text-navy font-serif text-xl focus:border-gold transition-colors appearance-none rounded-none">
                    <option>50 - 100 Units</option>
                    <option>100 - 500 Units</option>
                    <option>500 - 1000 Units</option>
                    <option>1000+ Units</option>
                </select>
              </div>
            </div>

            <div className="group pt-0 md:pt-4">
              <label className="block text-[9px] font-bold uppercase tracking-widest text-navy/40 mb-3">Additional Details</label>
              <textarea rows={3} className="w-full border-b border-navy/10 py-3 bg-transparent outline-none text-navy font-serif text-xl focus:border-gold transition-colors resize-none rounded-none" placeholder="Tell us about specific fabric needs, deadlines, or design ideas..." />
            </div>

            <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
              <p className="text-xs text-navy/40 max-w-xs text-center md:text-left">
                * Our team typically responds with a preliminary estimate within 24 hours.
              </p>
              <button className="w-full md:w-auto px-12 py-5 bg-navy text-white text-xs font-bold uppercase tracking-widest hover:bg-gold transition-colors duration-500 shadow-lg shadow-navy/20">
                Request Quote
              </button>
            </div>

          </form>
        </motion.div>

        <div className="mt-16 md:mt-24 text-center space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-navy/40">Direct Sales & Inquiries</p>
          <p className="serif-heading text-lg md:text-xl text-navy selection:bg-gold selection:text-white">
            <a href="mailto:info@shaaqtrading.com" className="hover:text-gold transition-colors">info@shaaqtrading.com</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Contact;
