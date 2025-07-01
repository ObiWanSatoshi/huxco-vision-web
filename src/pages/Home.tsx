
import { ArrowRight, TrendingUp, Shield, Target } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Building Value Through
              <span className="block text-blue-400">Strategic Investment</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              HuxCo is a premier investment holding company dedicated to identifying, 
              acquiring, and nurturing exceptional businesses with long-term growth potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink
                to="/about"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
              <NavLink
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors duration-200"
              >
                Get In Touch
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Investment Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We focus on fundamental value creation through strategic partnerships 
              and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Long-Term Growth</h3>
              <p className="text-gray-600">
                We invest with a long-term perspective, focusing on sustainable growth 
                and value creation over market cycles.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Risk Management</h3>
              <p className="text-gray-600">
                Our disciplined approach to risk assessment and management protects 
                capital while pursuing attractive returns.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Strategic Focus</h3>
              <p className="text-gray-600">
                We target industries and markets where we can leverage our expertise 
                to drive meaningful operational improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Explore Opportunities?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover how HuxCo can help you achieve your investment objectives 
            through our proven approach and expertise.
          </p>
          <NavLink
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Start a Conversation
            <ArrowRight className="ml-2 h-5 w-5" />
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;
