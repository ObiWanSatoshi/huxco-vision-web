
import { CheckCircle, Globe, Shield, Zap } from 'lucide-react';

const Thesis = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="minimal-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6 tracking-tight">Investment Thesis</h1>
            <p className="text-xl text-white/70 leading-relaxed font-light">
              Lasting progress rests on the quiet protocols that shape how people 
              coordinate, compute, and create.
            </p>
          </div>
        </div>
      </section>

      {/* The Three Forces */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4 tracking-tight">The Three Forces We Back</h2>
          </div>

          <div className="space-y-12">
            {/* Unbreakable Systems */}
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded border border-white/10 hover-lift">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center mb-6">
                    <Globe className="h-8 w-8 text-white/80" />
                  </div>
                  <h3 className="text-2xl font-medium text-white/90 mb-4">Unbreakable Systems</h3>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-white/80 font-light leading-relaxed text-lg">
                    Cryptographic networks that keep value and information verifiable, portable, 
                    and beyond capture—settlement layers no decree can rewrite.
                  </p>
                </div>
              </div>
            </div>

            {/* Intelligent Infrastructure */}
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded border border-white/10 hover-lift">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center mb-6">
                    <Zap className="h-8 w-8 text-white/80" />
                  </div>
                  <h3 className="text-2xl font-medium text-white/90 mb-4">Intelligent Infrastructure</h3>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-white/80 font-light leading-relaxed text-lg">
                    AI platforms that learn and adapt—handling research, logistics, or design 
                    at scales where human iteration slows.
                  </p>
                </div>
              </div>
            </div>

            {/* Atomic Breakthroughs */}
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded border border-white/10 hover-lift">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center mb-6">
                    <Shield className="h-8 w-8 text-white/80" />
                  </div>
                  <h3 className="text-2xl font-medium text-white/90 mb-4">Atomic Breakthroughs</h3>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-white/80 font-light leading-relaxed text-lg">
                    Where algorithms meet matter: AI-guided biotech, advanced energy, 
                    and robotic fabrication that convert constraints into abundance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage & Check Size */}
      <section className="py-20 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-8 tracking-tight">Our Approach</h2>
            <p className="text-xl text-white/80 leading-relaxed font-light">
              Seed to early Series A. Tickets of $250k – $2M. We lead or co-lead 
              when the technical question is still the biggest question.
            </p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl text-white/90 leading-relaxed font-light">
              If you're engineering trust that can't be tampered with, intelligence that 
              improves itself, or tech that moves atoms with software precision, let's talk.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Thesis;
