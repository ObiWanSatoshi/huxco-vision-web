
const Portfolio = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="minimal-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6 tracking-tight">Portfolio</h1>
            <p className="text-xl text-white/70 leading-relaxed font-light">
              We back founders rewriting the rules of reality.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              We reveal positions once breakthroughs exit stealth and reshape markets. 
              The ledger below updates in real time.
            </p>
          </div>

          {/* Placeholder for dynamic content */}
          <div className="bg-card/50 backdrop-blur-sm p-12 rounded border border-white/10 text-center">
            <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 border-2 border-white/30 border-t-white/80 rounded-full animate-spin"></div>
            </div>
            <p className="text-white/70 font-light mb-4">Dynamic showcase auto-pulled from Notion</p>
            <div className="inline-flex items-center text-sm text-white/50">
              <span>Updates in real time</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>

          {/* Three Forces Preview */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-light mb-4 tracking-tight">Active Across Three Forces</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-white/10 rounded flex items-center justify-center mx-auto mb-4 group-hover:bg-white/15 transition-all duration-300">
                  <span className="text-lg font-light text-white/90">∞</span>
                </div>
                <h3 className="text-lg font-medium text-white/90 mb-2">Unbreakable Systems</h3>
                <p className="text-white/60 text-sm font-light">Cryptographic foundations for trust</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-white/10 rounded flex items-center justify-center mx-auto mb-4 group-hover:bg-white/15 transition-all duration-300">
                  <span className="text-lg font-light text-white/90">∆</span>
                </div>
                <h3 className="text-lg font-medium text-white/90 mb-2">Intelligent Infrastructure</h3>
                <p className="text-white/60 text-sm font-light">AI that evolves and adapts</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-white/10 rounded flex items-center justify-center mx-auto mb-4 group-hover:bg-white/15 transition-all duration-300">
                  <span className="text-lg font-light text-white/90">◊</span>
                </div>
                <h3 className="text-lg font-medium text-white/90 mb-2">Atomic Breakthroughs</h3>
                <p className="text-white/60 text-sm font-light">AI applied to matter itself</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stealth Mode */}
      <section className="py-20 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded border border-white/10 max-w-2xl mx-auto">
              <h3 className="text-xl font-medium text-white/90 mb-4">Stealth Mode</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Many of our portfolio companies operate in stealth, building the future 
                before the world is ready to see it. When they emerge, the paradigm shifts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
