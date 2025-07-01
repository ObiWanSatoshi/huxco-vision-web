
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Investing in the
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                Evolution of the Web
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              HuxCo is a boutique venture capital firm partnering with visionary founders 
              building the future of freedom, privacy, and immersion through crypto, AI, 
              and deep tech innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink
                to="/thesis"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Our Investment Thesis
                <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
              <NavLink
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-purple-500/50 text-white font-semibold rounded-lg hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-200"
              >
                Partner With Us
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Three Pillars of Web Evolution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We invest in startups building the next generation of the internet 
              through three fundamental principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:from-purple-400 group-hover:to-purple-500 transition-all duration-300">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Freedom</h3>
              <p className="text-gray-300">
                Decentralized protocols and platforms that liberate users from centralized 
                control, enabling true digital sovereignty and permissionless innovation.
              </p>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300 group hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-6 group-hover:from-teal-400 group-hover:to-teal-500 transition-all duration-300">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-teal-400">Privacy</h3>
              <p className="text-gray-300">
                Zero-knowledge proofs, encryption technologies, and privacy-preserving 
                infrastructure that protects user data while enabling seamless experiences.
              </p>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 group hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:from-orange-400 group-hover:to-orange-500 transition-all duration-300">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-orange-400">Immersion</h3>
              <p className="text-gray-300">
                AR/VR, spatial computing, and metaverse technologies that create 
                immersive digital experiences and blur the lines between physical and digital worlds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Focus Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Investment Focus</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We partner with exceptional founders across three key verticals 
              shaping the future of technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">₿</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Crypto & Web3</h3>
              <p className="text-gray-300">
                DeFi protocols, infrastructure, and applications building the decentralized financial system of the future.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">AI</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-teal-400">Artificial Intelligence</h3>
              <p className="text-gray-300">
                Machine learning platforms, autonomous systems, and AI-powered applications transforming industries.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">∞</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-orange-400">Deep Tech</h3>
              <p className="text-gray-300">
                Quantum computing, biotech, robotics, and breakthrough technologies solving humanity's biggest challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Building the Future Together
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Are you building the next breakthrough in crypto, AI, or deep tech? 
            Let's explore how we can partner to accelerate your vision.
          </p>
          <NavLink
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
          >
            Start the Conversation
            <ArrowRight className="ml-2 h-5 w-5" />
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;
