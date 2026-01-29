
import React from 'react';

interface FooterProps {
  setPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => {
  return (
    <footer className="bg-stone text-navy pt-20 md:pt-32 pb-12 border-t border-navy/5" data-theme="light">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-24 mb-20 md:mb-32">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-6 md:space-y-8">
            <h2 className="serif-heading text-3xl font-bold tracking-tight">Shaaq.</h2>
            <p className="text-navy/50 text-sm leading-loose max-w-xs">
              Defining the aesthetic of institutions through bespoke apparel systems and rigorous manufacturing standards.
            </p>
          </div>

          {/* Links 1 */}
          <div className="md:col-span-2 md:col-start-7 space-y-6">
            <h4 className="text-[9px] font-bold uppercase tracking-mega text-navy/30">Menu</h4>
            <nav className="flex flex-col space-y-3">
              <button onClick={() => setPage('home')} className="text-xs font-bold uppercase tracking-widest text-navy/70 hover:text-navy text-left transition-colors">Overview</button>
              <button onClick={() => setPage('about')} className="text-xs font-bold uppercase tracking-widest text-navy/70 hover:text-navy text-left transition-colors">Agency</button>
              <button onClick={() => setPage('collections')} className="text-xs font-bold uppercase tracking-widest text-navy/70 hover:text-navy text-left transition-colors">Works</button>
            </nav>
          </div>

          {/* Links 2 */}
          <div className="md:col-span-2 space-y-6">
             <h4 className="text-[9px] font-bold uppercase tracking-mega text-navy/30">Connect</h4>
             <nav className="flex flex-col space-y-3">
               <a href="mailto:info@shaaqtrading.com" className="text-xs font-bold uppercase tracking-widest text-navy/70 hover:text-navy transition-colors">Email</a>
               <a href="#" className="text-xs font-bold uppercase tracking-widest text-navy/70 hover:text-navy transition-colors">LinkedIn</a>
               <a href="https://instagram.com/shaaqtrading" className="text-xs font-bold uppercase tracking-widest text-navy/70 hover:text-navy transition-colors">Instagram</a>
               <button onClick={() => setPage('contact')} className="text-xs font-bold uppercase tracking-widest text-navy/70 hover:text-navy text-left transition-colors">Enquire</button>
             </nav>
          </div>

          {/* Address */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="text-[9px] font-bold uppercase tracking-mega text-navy/30">Headquarters</h4>
            <p className="text-xs text-navy/70 leading-relaxed font-medium">
              71-75 Shelton Street<br/>
              Covent Garden<br/>
              London, WC2H 9JQ<br/>
              United Kingdom
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-end border-t border-navy/5 pt-8 gap-4 md:gap-0">
           <p className="text-[9px] font-bold uppercase tracking-widest text-navy/30">
             © 2024 Shaaq Trading Ltd. All Rights Reserved.
           </p>
           <p className="text-[9px] font-bold uppercase tracking-widest text-navy/30">
             Registered in England & Wales
           </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
