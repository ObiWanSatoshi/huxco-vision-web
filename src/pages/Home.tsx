
import { ArrowRight, Shield, Globe, Zap } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative minimal-gradient">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6 tracking-tight">
              Investing in the
              <span className="block text-white/90 font-normal">
                Evolution of the Web
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-8 leading-relaxed font-light">
              A boutique venture capital firm partnering with visionary founders 
              building the future through crypto, AI, and deep tech innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink
                to="/thesis"
                className="inline-flex items-center px-8 py-4 bg-tech-accent text-white font-medium rounded hover:bg-tech-accent/80 transition-all duration-200"
              >
                Investment Thesis
                <ArrowRight className="ml-2 h-4 w-4" />
              </NavLink>
              <NavLink
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-medium rounded hover:bg-white/5 hover:border-white/30 transition-all duration-200"
              >
                Partner With Us
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">
              Three Pillars of Web Evolution
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
              We invest in technologies that define the next generation of the internet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded border border-white/10 hover-lift group">
              <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center mb-6 group-hover:bg-white/15 transition-all duration-300">
                <Globe className="h-6 w-6 text-white/80" />
              </div>
              <h3 className="text-xl font-medium mb-4 text-white/90">Freedom</h3>
              <p className="text-white/60 font-light leading-relaxed">
                Decentralized protocols enabling true digital sovereignty and 
                permissionless innovation.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-8 rounded border border-white/10 hover-lift group">
              <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center mb-6 group-hover:bg-white/15 transition-all duration-300">
                <Shield className="h-6 w-6 text-white/80" />
              </div>
              <h3 className="text-xl font-medium mb-4 text-white/90">Privacy</h3>
              <p className="text-white/60 font-light leading-relaxed">
                Zero-knowledge proofs and encryption technologies protecting user data 
                while enabling seamless experiences.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-8 rounded border border-white/10 hover-lift group">
              <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center mb-6 group-hover:bg-white/15 transition-all duration-300">
                <Zap className="h-6 w-6 text-white/80" />
              </div>
              <h3 className="text-xl font-medium mb-4 text-white/90">Immersion</h3>
              <p className="text-white/60 font-light leading-relaxed">
                Spatial computing and metaverse technologies creating immersive 
                digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Focus Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">Investment Focus</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
              Early-stage companies across three key verticals shaping the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-light text-white/90">₿</span>
              </div>
              <h3 className="text-xl font-medium mb-4 text-white/90">Crypto & Web3</h3>
              <p className="text-white/60 font-light leading-relaxed">
                DeFi protocols, infrastructure, and applications building 
                decentralized financial systems.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-light text-white/90">AI</span>
              </div>
              <h3 className="text-xl font-medium mb-4 text-white/90">Artificial Intelligence</h3>
              <p className="text-white/60 font-light leading-relaxed">
                Machine learning platforms and AI-powered applications 
                transforming industries.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-light text-white/90">∞</span>
              </div>
              <h3 className="text-xl font-medium mb-4 text-white/90">Deep Tech</h3>
              <p className="text-white/60 font-light leading-relaxed">
                Quantum computing, biotech, and breakthrough technologies 
                solving fundamental challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">
            Building the Future Together
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto font-light">
            Partner with us to accelerate breakthrough technologies in crypto, AI, and deep tech.
          </p>
          <NavLink
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-tech-accent text-white font-medium rounded hover:bg-tech-accent/80 transition-all duration-200"
          >
            Start the Conversation
            <ArrowRight className="ml-2 h-4 w-4" />
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;
