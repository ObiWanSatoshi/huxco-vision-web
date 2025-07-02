
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Logo className="mb-4" />
            <p className="text-white/60 mb-4 max-w-md text-sm leading-relaxed">
              A boutique venture capital firm investing in the evolution of the web 
              through crypto, AI, and deep tech innovations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium mb-4 text-white/80">Navigation</h4>
            <ul className="space-y-2">
              <li><NavLink to="/" className="text-white/50 hover:text-white/80 transition-colors text-sm">Home</NavLink></li>
              <li><NavLink to="/about" className="text-white/50 hover:text-white/80 transition-colors text-sm">About</NavLink></li>
              <li><NavLink to="/thesis" className="text-white/50 hover:text-white/80 transition-colors text-sm">Thesis</NavLink></li>
              <li><NavLink to="/portfolio" className="text-white/50 hover:text-white/80 transition-colors text-sm">Portfolio</NavLink></li>
              <li><NavLink to="/contact" className="text-white/50 hover:text-white/80 transition-colors text-sm">Contact</NavLink></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-medium mb-4 text-white/80">Legal</h4>
            <ul className="space-y-2">
              <li><NavLink to="/privacy" className="text-white/50 hover:text-white/80 transition-colors text-sm">Privacy Policy</NavLink></li>
              <li><NavLink to="/terms" className="text-white/50 hover:text-white/80 transition-colors text-sm">Terms & Conditions</NavLink></li>
              <li><NavLink to="/cookies" className="text-white/50 hover:text-white/80 transition-colors text-sm">Cookie Policy</NavLink></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} HuxCo. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-white/40 text-xs">
                Investing in the evolution of the web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
