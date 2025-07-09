
const Portfolio = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="minimal-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6 tracking-tight">Portfolio</h1>
            <p className="text-xl text-white/70 leading-relaxed font-light">
              We reveal positions once breakthroughs exit stealth and reshape markets. 
              The ledger below updates in real time.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Placeholder */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-card/50 backdrop-blur-sm p-12 rounded border border-white/10">
              <p className="text-white/60 text-lg font-light mb-4">
                [Dynamic showcase auto-pulled from Notion ↗]
              </p>
              <p className="text-sm text-white/40 font-light">
                *Forward-looking statements express beliefs, not guarantees.*
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
