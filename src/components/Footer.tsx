
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              HuxCo
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              A boutique venture capital firm focused on the evolution of the web through 
              investments in crypto, AI, and deep tech startups building the future of 
              freedom, privacy, and immersion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Navigation</h4>
            <ul className="space-y-2">
              <li><NavLink to="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</NavLink></li>
              <li><NavLink to="/about" className="text-gray-300 hover:text-purple-400 transition-colors">About</NavLink></li>
              <li><NavLink to="/thesis" className="text-gray-300 hover:text-purple-400 transition-colors">Thesis</NavLink></li>
              <li><NavLink to="/portfolio" className="text-gray-300 hover:text-purple-400 transition-colors">Portfolio</NavLink></li>
              <li><NavLink to="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</NavLink></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Legal</h4>
            <ul className="space-y-2">
              <li><NavLink to="/privacy" className="text-gray-300 hover:text-purple-400 transition-colors">Privacy Policy</NavLink></li>
              <li><NavLink to="/terms" className="text-gray-300 hover:text-purple-400 transition-colors">Terms & Conditions</NavLink></li>
              <li><NavLink to="/cookies" className="text-gray-300 hover:text-purple-400 transition-colors">Cookie Policy</NavLink></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} HuxCo. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Building the future of the decentralized web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
