
import { CheckCircle, Globe, Shield, Zap, Users, Award } from 'lucide-react';

const Thesis = () => {
  return (
    <div className="bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Investment Thesis</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              The internet is undergoing its most significant transformation since its inception. 
              We invest in the technologies and founders building this new decentralized, 
              private, and immersive digital frontier.
            </p>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Web Evolution Thesis</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe the next phase of the internet will be defined by three fundamental shifts 
              that create unprecedented opportunities for innovation and value creation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">Core Principles</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Decentralization Over Centralization</h4>
                    <p className="text-gray-300">Power is shifting from centralized platforms to distributed networks, creating new models for value creation and capture.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Privacy as a Fundamental Right</h4>
                    <p className="text-gray-300">Users demand control over their data, driving adoption of zero-knowledge proofs and privacy-preserving technologies.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Digital-Physical Convergence</h4>
                    <p className="text-gray-300">The boundaries between digital and physical worlds are dissolving through AR/VR and spatial computing.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">AI-Native Infrastructure</h4>
                    <p className="text-gray-300">The next generation of applications will be built AI-first, requiring new infrastructure and interaction paradigms.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-teal-400">Investment Criteria</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                  <span className="font-medium text-white">Stage</span>
                  <span className="text-gray-300">Seed to Series A</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                  <span className="font-medium text-white">Check Size</span>
                  <span className="text-gray-300">$250K - $2M</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                  <span className="font-medium text-white">Geography</span>
                  <span className="text-gray-300">Global, Remote-First</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                  <span className="font-medium text-white">Sectors</span>
                  <span className="text-gray-300">Crypto, AI, Deep Tech</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-white">Team Quality</span>
                  <span className="text-gray-300">World-Class</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Deep Dive */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Three Pillars</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our investment focus is organized around three transformative themes 
              that define the future of human-computer interaction.
            </p>
          </div>

          <div className="space-y-12">
            {/* Freedom */}
            <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">Freedom</h3>
                  <p className="text-gray-300">
                    Decentralized protocols that eliminate single points of failure and give users 
                    true ownership of their digital assets and identity.
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <h4 className="text-lg font-semibold text-white mb-4">Investment Areas:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h5 className="font-medium text-purple-400 mb-2">DeFi Infrastructure</h5>
                      <p className="text-sm text-gray-300">DEXs, lending protocols, yield farming platforms</p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h5 className="font-medium text-purple-400 mb-2">Web3 Identity</h5>
                      <p className="text-sm text-gray-300">Self-sovereign identity, credential systems</p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h5 className="font-medium text-purple-400 mb-2">DAOs & Governance</h5>
                      <p className="text-sm text-gray-300">Decentralized decision-making platforms</p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h5 className="font-medium text-purple-400 mb-2">Layer 1/2 Scaling</h5>
                      <p className="text-sm text-gray-300">Blockchain infrastructure and scaling solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy */}
            <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-teal-500/20">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-teal-400 mb-4">Privacy</h3>
                  <p className="text-gray-300">
                    Technologies that enable private computation and data sovereignty while 
                    maintaining the benefits of network participation.
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <h4 className="text-lg font-semibold text-white mb-4">Investment Areas:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h5 className="font-medium text-teal-400 mb-2">Zero-Knowledge Proofs</h5>
                      <p className="text-sm text-gray-300">zk-SNARKs, zk-STARKs, privacy protocols</p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h5 className="font-medium text-teal-400 mb-2">Secure Computation</h5>
                      <p className="text-sm text-gray-300">Multi-party computation, homomorphic encryption</p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h5 className="font-medium text-teal-400 mb-2">Private Messaging</h5>
                      <p className="text-sm text-gray-300">End-to-end encrypted communication platforms</p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h5 className="font-medium text-teal-400 mb-2">Data Ownership</h5>
                      <p className="text-sm text-gray-300">Personal data vaults and monetization platforms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Immersion */}
            <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-400 mb-4">Immersion</h3>
                  <p className="text-gray-300">
                    Spatial computing and mixed reality technologies that create seamless 
                    integration between digital and physical experiences.
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <h4 className="text-lg font-semibold text-white mb-4">Investment Areas:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h5 className="font-medium text-orange-400 mb-2">AR/VR Platforms</h5>
                      <p className="text-sm text-gray-300">Metaverse infrastructure, virtual worlds</p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h5 className="font-medium text-orange-400 mb-2">Spatial Computing</h5>
                      <p className="text-sm text-gray-300">3D interfaces, gesture recognition</p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h5 className="font-medium text-orange-400 mb-2">Digital Twins</h5>
                      <p className="text-sm text-gray-300">Real-world simulation and modeling</p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h5 className="font-medium text-orange-400 mb-2">Neural Interfaces</h5>
                      <p className="text-sm text-gray-300">Brain-computer interfaces, biometric sensors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Outlook */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Market Outlook</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're at an inflection point where these technologies are moving from 
              experimental to mainstream adoption.
            </p>
          </div>

          <div className="bg-slate-800/80 backdrop-blur-sm p-12 rounded-xl border border-purple-500/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-purple-400">Current Environment</h3>
                <p className="text-gray-300 mb-4">
                  The convergence of crypto maturity, AI breakthroughs, and spatial computing 
                  advances creates unprecedented opportunities for startups building at the 
                  intersection of these technologies.
                </p>
                <p className="text-gray-300">
                  We're seeing increased institutional adoption, regulatory clarity, and 
                  user demand for alternatives to centralized platforms, creating a perfect 
                  storm for web evolution technologies.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-teal-400">Key Catalysts</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-slate-700/50 p-4 rounded-lg flex items-center">
                    <Users className="h-6 w-6 text-purple-400 mb-2 mr-3" />
                    <div>
                      <h4 className="font-semibold mb-1 text-white">Mainstream Crypto Adoption</h4>
                      <p className="text-sm text-gray-300">Institutional investment and regulatory frameworks</p>
                    </div>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg flex items-center">
                    <Award className="h-6 w-6 text-teal-400 mb-2 mr-3" />
                    <div>
                      <h4 className="font-semibold mb-1 text-white">AI Infrastructure Maturity</h4>
                      <p className="text-sm text-gray-300">Widespread availability of powerful AI models</p>
                    </div>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg flex items-center">
                    <Zap className="h-6 w-6 text-orange-400 mb-2 mr-3" />
                    <div>
                      <h4 className="font-semibold mb-1 text-white">Hardware Acceleration</h4>
                      <p className="text-sm text-gray-300">Improved AR/VR devices and neural interfaces</p>
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
