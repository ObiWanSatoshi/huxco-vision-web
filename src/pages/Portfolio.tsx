import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Portfolio = () => {
  const portfolioCategories = [{
    title: "Unbreakable Systems",
    subtitle: "Cryptographic foundations for trust",
    companies: [{
      name: "Bitcoin",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
    }, {
      name: "Ethereum", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png"
    }, {
      name: "Solana",
      logo: "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png"
    }]
  }, {
    title: "Intelligent Infrastructure",
    subtitle: "AI that evolves and adapts",
    companies: [{
      name: "Nvidia",
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Nvidia-Logo.png"
    }, {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
    }, {
      name: "Galaxy Digital",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Galaxy_Digital_logo.svg/2560px-Galaxy_Digital_logo.svg.png"
    }]
  }, {
    title: "Atomic Breakthroughs",
    subtitle: "AI applied to matter itself",
    companies: [{
      name: "Apptronik",
      logo: "https://media.licdn.com/dms/image/C4E0BAQHQf9z9z9z9z9/company-logo_200_200/0/1630511057000?e=2147483647&v=beta&t=0"
    }, {
      name: "Anduril",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Anduril_logo.svg/2560px-Anduril_logo.svg.png"
    }, {
      name: "Molecule",
      logo: "https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/erkxwhl1gdu48p7qsOs6"
    }]
  }];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="minimal-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6 tracking-tight">Portfolio</h1>
            <p className="text-xl text-white/70 leading-relaxed font-light">
              We back companies rewriting the rules of reality.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {portfolioCategories.map((category, categoryIndex) => (
            <div key={category.title} className={`mb-20 ${categoryIndex !== portfolioCategories.length - 1 ? 'border-b border-white/10 pb-20' : ''}`}>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-light mb-4 tracking-tight text-white/90">{category.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {category.companies.map(company => (
                  <HoverCard key={company.name}>
                    <HoverCardTrigger asChild>
                      <div className="group cursor-pointer">
                        <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center transition-all duration-300 hover:bg-card/50 hover:border-white/20 hover:scale-105 hover:shadow-lg hover:shadow-black/20">
                          <div className="h-16 mb-4 flex items-center justify-center">
                            <img 
                              src={company.logo} 
                              alt={`${company.name} logo`}
                              className="max-h-12 max-w-32 object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                            />
                          </div>
                          <h3 className="text-lg font-medium text-white/90 group-hover:text-white transition-colors duration-300">
                            {company.name}
                          </h3>
                        </div>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 bg-card/90 backdrop-blur-sm border-white/20">
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-white/90">{company.name}</h4>
                        <p className="text-xs text-white/70">
                          Building the future of {category.title.toLowerCase()}
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stealth Mode */}
      <section className="py-20 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded border border-white/10 max-w-2xl mx-auto">
              <h3 className="text-xl font-medium text-white/90 mb-4">Stealth Mode</h3>
              <p className="text-white/70 font-light leading-relaxed">Many of our early stage portfolio companies are operating in stealth,</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
