
import { ExternalLink, TrendingUp, Users, DollarSign } from 'lucide-react';

const Portfolio = () => {
  const portfolioCompanies = [
    {
      name: 'ZKSync Labs',
      sector: 'Crypto Infrastructure',
      description: 'Layer 2 scaling solution using zero-knowledge proofs for Ethereum.',
      investment: '2022',
      status: 'Active',
      growth: '+340%'
    },
    {
      name: 'Anthropic',
      sector: 'Artificial Intelligence',
      description: 'AI safety research company building helpful, harmless, and honest AI systems.',
      investment: '2021',
      status: 'Active',
      growth: '+280%'
    },
    {
      name: 'Uniswap Protocol',
      sector: 'DeFi',
      description: 'Decentralized trading protocol powering automated market makers.',
      investment: '2020',
      status: 'Active',
      growth: '+450%'
    },
    {
      name: 'Quantum Circuits',
      sector: 'Deep Tech',
      description: 'Quantum computing hardware for cryptographic applications.',
      investment: '2023',
      status: 'Active',
      growth: '+85%'
    },
    {
      name: 'Chainlink Labs',
      sector: 'Web3 Infrastructure',
      description: 'Decentralized oracle network connecting smart contracts to real-world data.',
      investment: '2019',
      status: 'Exited',
      growth: '+1,200%'
    },
    {
      name: 'OpenAI',
      sector: 'Artificial Intelligence',
      description: 'AI research lab developing advanced AI systems and language models.',
      investment: '2020',
      status: 'Exited',
      growth: '+2,100%'
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="minimal-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6 tracking-tight">Our Portfolio</h1>
            <p className="text-xl text-white/70 leading-relaxed font-light">
              A showcase of our strategic investments in companies building the future 
              of decentralized, private, and immersive digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white/80" />
              </div>
              <div className="text-3xl font-light text-white/90 mb-2">15+</div>
              <div className="text-white/60">Portfolio Companies</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-white/80" />
              </div>
              <div className="text-3xl font-light text-white/90 mb-2">$50M+</div>
              <div className="text-white/60">Total Investment</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white/80" />
              </div>
              <div className="text-3xl font-light text-white/90 mb-2">1,000+</div>
              <div className="text-white/60">Jobs Created</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="h-8 w-8 text-white/80" />
              </div>
              <div className="text-3xl font-light text-white/90 mb-2">5</div>
              <div className="text-white/60">Successful Exits</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Investments */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4 tracking-tight">Featured Investments</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
              Representative examples of our investment portfolio across crypto, AI, and deep tech sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioCompanies.map((company, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm p-8 rounded border border-white/10 hover-lift">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-white/90 mb-2">{company.name}</h3>
                    <span className="inline-block px-3 py-1 bg-white/10 text-white/80 text-sm font-medium rounded">
                      {company.sector}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className={`inline-block px-3 py-1 text-sm font-medium rounded ${
                      company.status === 'Active' 
                        ? 'bg-tech-accent text-white' 
                        : 'bg-white/10 text-white/70'
                    }`}>
                      {company.status}
                    </div>
                  </div>
                </div>
                
                <p className="text-white/60 mb-4 font-light leading-relaxed">{company.description}</p>
                
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <span className="text-white/50">Investment Year: </span>
                    <span className="font-medium text-white/80">{company.investment}</span>
                  </div>
                  <div>
                    <span className="text-white/50">Growth: </span>
                    <span className="font-medium text-white/90">{company.growth}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Distribution */}
      <section className="py-20 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4 tracking-tight">Sector Distribution</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
              Our focused portfolio spans the three pillars of web evolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-light text-white/90">45%</span>
              </div>
              <h3 className="text-lg font-medium text-white/90 mb-2">Crypto & Web3</h3>
              <p className="text-white/60 text-sm font-light">DeFi protocols, infrastructure, and applications</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-light text-white/90">35%</span>
              </div>
              <h3 className="text-lg font-medium text-white/90 mb-2">Artificial Intelligence</h3>
              <p className="text-white/60 text-sm font-light">Machine learning platforms and AI-powered applications</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-light text-white/90">20%</span>
              </div>
              <h3 className="text-lg font-medium text-white/90 mb-2">Deep Tech</h3>
              <p className="text-white/60 text-sm font-light">Quantum computing, biotech, and breakthrough technologies</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
