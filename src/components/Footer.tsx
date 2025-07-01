
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">HuxCo</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              A premier investment holding company focused on building long-term value 
              through strategic investments and operational excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><NavLink to="/" className="text-gray-300 hover:text-white transition-colors">Home</NavLink></li>
              <li><NavLink to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</NavLink></li>
              <li><NavLink to="/thesis" className="text-gray-300 hover:text-white transition-colors">Thesis</NavLink></li>
              <li><NavLink to="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</NavLink></li>
              <li><NavLink to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</NavLink></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><NavLink to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</NavLink></li>
              <li><NavLink to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</NavLink></li>
              <li><NavLink to="/cookies" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</NavLink></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} HuxCo. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Investment advisory services provided by licensed professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
