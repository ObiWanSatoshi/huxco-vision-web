import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
const Home = () => {
  return <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative minimal-gradient">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6 tracking-tight">
              Accelerating the Advent of
              <span className="block text-white/90 font-normal">
                Humanity's Golden Era
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-8 leading-relaxed font-light">A venture firm backing the builders of civilization-scale technologies.</p>
            <p className="text-lg text-white/60 mb-12 leading-relaxed font-light max-w-3xl">We stand at the threshold of a new epoch where immutable systems, intelligent infrastructure, and atomic breakthroughs converge to redefine the substrate of reality.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink to="/thesis" className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-medium rounded hover:bg-white/15 transition-all duration-200 border border-white/20">
                Our Thesis
                <ArrowRight className="ml-2 h-4 w-4" />
              </NavLink>
              <NavLink to="/contact" className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-medium rounded hover:bg-white/5 hover:border-white/40 transition-all duration-200">Share Your Future</NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Three Forces Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">
              The Three Forces We Bet On
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">We back technologies that rewire trust, intelligence, and matter.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded border border-white/10 hover:bg-card/70 transition-all duration-300">
              <h3 className="text-xl font-medium mb-4 text-white/90">Unbreakable Systems</h3>
              <p className="text-white/60 font-light leading-relaxed">Decentralized architectures that resist capture, coercion, and collapse. Trustless, permissionless networks designed to encode incorruptible rules into the fabric of the digital world.</p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-8 rounded border border-white/10 hover:bg-card/70 transition-all duration-300">
              <h3 className="text-xl font-medium mb-4 text-white/90">Intelligent Infrastructure</h3>
              <p className="text-white/60 font-light leading-relaxed">AI-native platforms that learn, reason, and optimize at scale. From autonomous agents to adaptive tools. We seek cognition embedded in code that increases humanity's bandwidth.</p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-8 rounded border border-white/10 hover:bg-card/70 transition-all duration-300">
              <h3 className="text-xl font-medium mb-4 text-white/90">Atomic Breakthroughs</h3>
              <p className="text-white/60 font-light leading-relaxed">Our greatest tools applied to matter: biotech, energy, robotics, manufacturing, space. 
Civilization-scale technologies solving problems in atoms, not bits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Focus Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">Investment Focus</h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed">We back outliers—builders with lived edge, deep conviction, and a non-consensus view of the future.

We invest broadly across the above verticals, seeking founders that crave the unknown.


Some arrive at brilliance through hardship, obsession, or the scars of constraint. 

All share an uncommon trait—a deep hunger for the unknown.




We look for:

A compelling and contrarian view of the future

Hard-earned insight from direct exposure to the problem

Clear leverage in capturing a large or emerging market</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-light text-white/90">₿</span>
              </div>
              <h3 className="text-xl font-medium mb-4 text-white/90">Crypto</h3>
              <p className="text-white/60 font-light leading-relaxed">
                Protocols that eliminate trust assumptions and encode 
                incorruptible rules into digital infrastructure.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-light text-white/90">AI</span>
              </div>
              <h3 className="text-xl font-medium mb-4 text-white/90">Artificial Intelligence</h3>
              <p className="text-white/60 font-light leading-relaxed">
                Intelligent systems that reason, learn, and optimize 
                across scales previously unimaginable.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-light text-white/90">∞</span>
              </div>
              <h3 className="text-xl font-medium mb-4 text-white/90">Deep Tech</h3>
              <p className="text-white/60 font-light leading-relaxed">
                The application of AI to solve humanity's hardest problems 
                with atoms, not bits. Civilization-scale breakthroughs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">
            If You're Forging Tomorrow
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto font-light">
            Let's talk. We partner with builders who see the same epochal shift—and 
            have the conviction to architect it.
          </p>
          <NavLink to="/contact" className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-medium rounded hover:bg-white/15 transition-all duration-200 border border-white/20">
            Start a Conversation
            <ArrowRight className="ml-2 h-4 w-4" />
          </NavLink>
        </div>
      </section>
    </div>;
};
export default Home;