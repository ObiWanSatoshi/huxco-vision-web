
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
              The internet is undergoing its most significant transformation since its inception. 
              We invest in the technologies and founders building this new decentralized, 
              private, and immersive digital frontier.
            </p>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4 tracking-tight">The Web Evolution Thesis</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
              We believe the next phase of the internet will be defined by three fundamental shifts 
              that create unprecedented opportunities for innovation and value creation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-medium mb-6 text-white/90">Core Principles</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-white/80 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white/90">Decentralization Over Centralization</h4>
                    <p className="text-white/60 font-light leading-relaxed">Power is shifting from centralized platforms to distributed networks, creating new models for value creation and capture.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-white/80 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white/90">Privacy as a Fundamental Right</h4>
                    <p className="text-white/60 font-light leading-relaxed">Users demand control over their data, driving adoption of zero-knowledge proofs and privacy-preserving technologies.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-white/80 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white/90">Digital-Physical Convergence</h4>
                    <p className="text-white/60 font-light leading-relaxed">The boundaries between digital and physical worlds are dissolving through AR/VR and spatial computing.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-white/80 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white/90">AI-Native Infrastructure</h4>
                    <p className="text-white/60 font-light leading-relaxed">The next generation of applications will be built AI-first, requiring new infrastructure and interaction paradigms.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-8 rounded border border-white/10">
              <h3 className="text-2xl font-medium mb-6 text-white/90">Investment Criteria</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="font-medium text-white/90">Stage</span>
                  <span className="text-white/70">Seed to Series A</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="font-medium text-white/90">Check Size</span>
                  <span className="text-white/70">$250K - $2M</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="font-medium text-white/90">Geography</span>
                  <span className="text-white/70">Global, Remote-First</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="font-medium text-white/90">Sectors</span>
                  <span className="text-white/70">Crypto, AI, Deep Tech</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-white/90">Team Quality</span>
                  <span className="text-white/70">World-Class</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Deep Dive */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4 tracking-tight">The Three Pillars</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
              Our investment focus is organized around three transformative themes 
              that define the future of human-computer interaction.
            </p>
          </div>

          <div className="space-y-12">
            {/* Freedom */}
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded border border-white/10 hover-lift">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center mb-6">
                    <Globe className="h-8 w-8 text-white/80" />
                  </div>
                  <h3 className="text-2xl font-medium text-white/90 mb-4">Freedom</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Decentralized protocols that eliminate single points of failure and give users 
                    true ownership of their digital assets and identity.
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <h4 className="text-lg font-medium text-white/90 mb-4">Investment Areas:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-card/30 p-4 rounded border border-white/5">
                      <h5 className="font-medium text-white/90 mb-2">DeFi Infrastructure</h5>
                      <p className="text-sm text-white/60 font-light">DEXs, lending protocols, yield farming platforms</p>
                    </div>
                    <div className="bg-card/30 p-4 rounded border border-white/5">
                      <h5 className="font-medium text-white/90 mb-2">Web3 Identity</h5>
                      <p className="text-sm text-white/60 font-light">Self-sovereign identity, credential systems</p>
                    </div>
                    <div className="bg-card/30 p-4 rounded border border-white/5">
                      <h5 className="font-medium text-white/90 mb-2">DAOs & Governance</h5>
                      <p className="text-sm text-white/60 font-light">Decentralized decision-making platforms</p>
                    </div>
                    <div className="bg-card/30 p-4 rounded border border-white/5">
                      <h5 className="font-medium text-white/90 mb-2">Layer 1/2 Scaling</h5>
                      <p className="text-sm text-white/60 font-light">Blockchain infrastructure and scaling solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy */}
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded border border-white/10 hover-lift">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center mb-6">
                    <Shield className="h-8 w-8 text-white/80" />
                  </div>
                  <h3 className="text-2xl font-medium text-white/90 mb-4">Privacy</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Technologies that enable private computation and data sovereignty while 
                    maintaining the benefits of network participation.
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <h4 className="text-lg font-medium text-white/90 mb-4">Investment Areas:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-card/30 p-4 rounded border border-white/5">
                      <h5 className="font-medium text-white/90 mb-2">Zero-Knowledge Proofs</h5>
                      <p className="text-sm text-white/60 font-light">zk-SNARKs, zk-STARKs, privacy protocols</p>
                    </div>
                    <div className="bg-card/30 p-4 rounded border border-white/5">
                      <h5 className="font-medium text-white/90 mb-2">Secure Computation</h5>
                      <p className="text-sm text-white/60 font-light">Multi-party computation, homomorphic encryption</p>
                    </div>
                    <div className="bg-card/30 p-4 rounded border border-white/5">
                      <h5 className="font-medium text-white/90 mb-2">Private Messaging</h5>
                      <p className="text-sm text-white/60 font-light">End-to-end encrypted communication platforms</p>
                    </div>
                    <div className="bg-card/30 p-4 rounded border border-white/5">
                      <h5 className="font-medium text-white/90 mb-2">Data Ownership</h5>
                      <p className="text-sm text-white/60 font-light">Personal data vaults and monetization platforms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Immersion */}
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded border border-white/10 hover-lift">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center mb-6">
                    <Zap className="h-8 w-8 text-white/80" />
                  </div>
                  <h3 className="text-2xl font-medium text-white/90 mb-4">Immersion</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Spatial computing and mixed reality technologies that create seamless 
                    integration between digital and physical experiences.
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <h4 className="text-lg font-medium text-white/90 mb-4">Investment Areas:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-card/30 p-4 rounded border border-white/5">
                      <h5 className="font-medium text-white/90 mb-2">AR/VR Platforms</h5>
                      <p className="text-sm text-white/60 font-light">Metaverse infrastructure, virtual worlds</p>
                    </div>
                    <div className="bg-card/30 p-4 rounded border border-white/5">
                      <h5 className="font-medium text-white/90 mb-2">Spatial Computing</h5>
                      <p className="text-sm text-white/60 font-light">3D interfaces, gesture recognition</p>
                    </div>
                    <div className="bg-card/30 p-4 rounded border border-white/5">
                      <h5 className="font-medium text-white/90 mb-2">Digital Twins</h5>
                      <p className="text-sm text-white/60 font-light">Real-world simulation and modeling</p>
                    </div>
                    <div className="bg-card/30 p-4 rounded border border-white/5">
                      <h5 className="font-medium text-white/90 mb-2">Neural Interfaces</h5>
                      <p className="text-sm text-white/60 font-light">Brain-computer interfaces, biometric sensors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Outlook */}
      <section className="py-20 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4 tracking-tight">Market Outlook</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
              We're at an inflection point where these technologies are moving from 
              experimental to mainstream adoption.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm p-12 rounded border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-medium mb-6 text-white/90">Current Environment</h3>
                <p className="text-white/70 mb-4 font-light leading-relaxed">
                  The convergence of crypto maturity, AI breakthroughs, and spatial computing 
                  advances creates unprecedented opportunities for startups building at the 
                  intersection of these technologies.
                </p>
                <p className="text-white/70 font-light leading-relaxed">
                  We're seeing increased institutional adoption, regulatory clarity, and 
                  user demand for alternatives to centralized platforms, creating a perfect 
                  storm for web evolution technologies.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-6 text-white/90">Key Catalysts</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-card/30 p-4 rounded border border-white/5 flex items-center">
                    <Users className="h-6 w-6 text-white/80 mb-2 mr-3" />
                    <div>
                      <h4 className="font-medium mb-1 text-white/90">Mainstream Crypto Adoption</h4>
                      <p className="text-sm text-white/60 font-light">Institutional investment and regulatory frameworks</p>
                    </div>
                  </div>
                  <div className="bg-card/30 p-4 rounded border border-white/5 flex items-center">
                    <Award className="h-6 w-6 text-white/80 mb-2 mr-3" />
                    <div>
                      <h4 className="font-medium mb-1 text-white/90">AI Infrastructure Maturity</h4>
                      <p className="text-sm text-white/60 font-light">Widespread availability of powerful AI models</p>
                    </div>
                  </div>
                  <div className="bg-card/30 p-4 rounded border border-white/5 flex items-center">
                    <Zap className="h-6 w-6 text-white/80 mb-2 mr-3" />
                    <div>
                      <h4 className="font-medium mb-1 text-white/90">Hardware Acceleration</h4>
                      <p className="text-sm text-white/60 font-light">Improved AR/VR devices and neural interfaces</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Thesis;
