
import { CheckCircle, Globe, Shield, Zap, Users, Award } from 'lucide-react';

const Thesis = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="minimal-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6 tracking-tight">Investment Thesis</h1>
            <p className="text-xl text-white/70 leading-relaxed font-light">
              Lasting progress rests on the quiet protocols that shape how civilizations 
              coordinate, compute, and create. We back the architects of these new foundations.
            </p>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4 tracking-tight">The Three Forces We Back</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
              We invest in technologies that rewire the fundamental substrates of trust, 
              intelligence, and reality itself.
            </p>
          </div>

          <div className="space-y-12">
            {/* Unbreakable Systems */}
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded border border-white/10 hover-lift">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center mb-6">
                    <Globe className="h-8 w-8 text-white/80" />
                  </div>
                  <h3 className="text-2xl font-medium text-white/90 mb-4">Unbreakable Systems</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Cryptographic networks that keep value and information verifiable, portable, 
                    and beyond capture—settlement layers no decree can rewrite.
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <h4 className="text-lg font-medium text-white/90 mb-4">Technologies We Back:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-card/30 p-4 rounded border border-white/5">
                      <h5 className="font-medium text-white/90 mb-2">Zero-Knowledge Infrastructure</h5>
                      <p className="text-sm text-white/60 font-light">Privacy-preserving computation at scale</p>
                    </div>
                    <div className="bg-card/30 p-4 rounded border border-white/5">
                      <h5 className="font-medium text-white/90 mb-2">Decentralized Identity</h5>
                      <p className="text-sm text-white/60 font-light">Sovereign digital identity systems</p>
                    </div>
                    <div className="bg-card/30 p-4 rounded border border-white/5">
                      <h5 className="font-medium text-white/90 mb-2">Immutable Protocols</h5>
                      <p className="text-sm text-white/60 font-light">Consensus mechanisms for civilization</p>
                    </div>
                    <div className="bg-card/30 p-4 rounded border border-white/5">
                      <h5 className="font-medium text-white/90 mb-2">Trustless Coordination</h5>
                      <p className="text-sm text-white/60 font-light">Autonomous organizational structures</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Intelligent Infrastructure */}
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded border border-white/10 hover-lift">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center mb-6">
                    <Zap className="h-8 w-8 text-white/80" />
                  </div>
                  <h3 className="text-2xl font-medium text-white/90 mb-4">Intelligent Infrastructure</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    AI platforms that learn and adapt—handling research, logistics, or design 
                    at scales where human iteration becomes the bottleneck.
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <h4 className="text-lg font-medium text-white/90 mb-4">Technologies We Back:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-card/30 p-4 rounded border border-white/5">
                      <h5 className="font-medium text-white/90 mb-2">Autonomous Agents</h5>
                      <p className="text-sm text-white/60 font-light">Self-directing AI systems</p>
                    </div>
                    <div className="bg-card/30 p-4 rounded border border-white/5">
                      <h5 className="font-medium text-white/90 mb-2">Reasoning Engines</h5>
                      <p className="text-sm text-white/60 font-light">AI that can think through complex problems</p>
                    </div>
                    <div className="bg-card/30 p-4 rounded border border-white/5">
                      <h5 className="font-medium text-white/90 mb-2">Adaptive Platforms</h5>
                      <p className="text-sm text-white/60 font-light">Infrastructure that evolves with usage</p>
                    </div>
                    <div className="bg-card/30 p-4 rounded border border-white/5">
                      <h5 className="font-medium text-white/90 mb-2">Cognitive Architectures</h5>
                      <p className="text-sm text-white/60 font-light">Frameworks for artificial general intelligence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Atomic Breakthroughs */}
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded border border-white/10 hover-lift">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center mb-6">
                    <Shield className="h-8 w-8 text-white/80" />
                  </div>
                  <h3 className="text-2xl font-medium text-white/90 mb-4">Atomic Breakthroughs</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Where algorithms meet matter: AI-guided biotech, advanced energy, and robotic 
                    fabrication that convert constraints into abundance.
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <h4 className="text-lg font-medium text-white/90 mb-4">Technologies We Back:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-card/30 p-4 rounded border border-white/5">
                      <h5 className="font-medium text-white/90 mb-2">AI-Driven Biotech</h5>
                      <p className="text-sm text-white/60 font-light">Computational biology and drug discovery</p>
                    </div>
                    <div className="bg-card/30 p-4 rounded border border-white/5">
                      <h5 className="font-medium text-white/90 mb-2">Robotic Manufacturing</h5>
                      <p className="text-sm text-white/60 font-light">Autonomous production systems</p>
                    </div>
                    <div className="bg-card/30 p-4 rounded border border-white/5">
                      <h5 className="font-medium text-white/90 mb-2">Energy Abundance</h5>
                      <p className="text-sm text-white/60 font-light">Next-generation power generation</p>
                    </div>
                    <div className="bg-card/30 p-4 rounded border border-white/5">
                      <h5 className="font-medium text-white/90 mb-2">Material Science</h5>
                      <p className="text-sm text-white/60 font-light">Programmable matter and metamaterials</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4 tracking-tight">Our Approach</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
              We invest pre-seed to seed, typically $100K-$2M, when the technical question 
              is still the biggest question.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm p-12 rounded border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-medium mb-6 text-white/90">What We Look For</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-white/80 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-white/90">Designs trustless systems</h4>
                      <p className="text-white/60 font-light leading-relaxed">That operate beyond the reach of capture or coercion</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-white/80 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-white/90">Harnesses artificial intelligence</h4>
                      <p className="text-white/60 font-light leading-relaxed">To automate what was previously impossible at scale</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-white/80 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-white/90">Applies computation to atoms</h4>
                      <p className="text-white/60 font-light leading-relaxed">Solving humanity's hardest problems in the physical world</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-white/80 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-white/90">Possesses civilizational scope</h4>
                      <p className="text-white/60 font-light leading-relaxed">Technologies that reshape how billions coordinate and create</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-6 text-white/90">The Moment</h3>
                <p className="text-white/70 mb-4 font-light leading-relaxed">
                  Three fundamental technologies—cryptographic consensus, artificial intelligence, 
                  and computational matter manipulation—are converging for the first time in human history.
                </p>
                <p className="text-white/70 font-light leading-relaxed">
                  The builders who master this convergence will author the next chapter of 
                  human civilization. We exist to ensure they have the resources to succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-light mb-6 tracking-tight">If This Reads Like Your Roadmap</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
              If you're engineering trust that can't be tampered with, intelligence that improves itself, 
              or technology that moves atoms with software precision—our capital is yours to wield.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Thesis;
