import React from 'react';
import { Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

interface FooterProps {
  setPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => {
  return (
    <footer className="bg-surface-subtle pt-20 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center text-white font-display font-bold text-lg shadow-sm">
                S
              </div>
              <span className="font-display font-bold text-xl text-text-main">
                Shaaq<span className="text-brand">Trading</span>
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              Making custom clothing simple, sustainable, and stylish for everyone.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-text-muted hover:text-brand hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-display font-bold text-text-main mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Blog'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => setPage(item.toLowerCase().replace(' ', ''))}
                    className="text-text-muted hover:text-brand transition-colors text-sm font-medium"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-display font-bold text-text-main mb-6">Support</h4>
            <ul className="space-y-4">
              {['Contact Us', 'FAQ', 'Shipping', 'Returns', 'Size Guide'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => setPage('contact')}
                    className="text-text-muted hover:text-brand transition-colors text-sm font-medium"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold text-text-main mb-6">Stay in the loop</h4>
            <p className="text-text-muted text-sm mb-4">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 rounded-full bg-white border border-gray-200 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all text-sm"
              />
              <button className="absolute right-1 top-1 bottom-1 px-4 bg-brand text-white rounded-full text-xs font-bold hover:bg-brand-dark transition-colors">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted">
           <p>© 2024 Shaaq Trading. All rights reserved.</p>
           <div className="flex gap-6">
             <a href="#" className="hover:text-brand transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-brand transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-brand transition-colors">Cookies</a>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
