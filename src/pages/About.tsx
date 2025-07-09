
import { Users, Award, Globe, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="minimal-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6 tracking-tight">The Genesis of HuxCo</h1>
            <p className="text-xl text-white/70 leading-relaxed font-light">
              We emerged from the conviction that civilization stands at a hinge moment—
              where the substrate of trust, intelligence, and matter itself can be rewritten.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-6 tracking-tight">Our Mission</h2>
            <p className="text-2xl text-white/80 max-w-4xl mx-auto font-light leading-relaxed">
              We fuel the primitives that render trust uncapturable, cognition boundless, 
              and matter obedient to conscious intent.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4 tracking-tight">Our Values</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
              Three principles that guide our investments and partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center mx-auto mb-6 group-hover:bg-white/15 transition-all duration-300">
                <Globe className="h-8 w-8 text-white/80" />
              </div>
              <h3 className="text-xl font-medium mb-4 text-white/90">Immutable Truth</h3>
              <p className="text-white/60 font-light leading-relaxed">
                Over mutable authority. We back systems that encode veracity into their very architecture.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center mx-auto mb-6 group-hover:bg-white/15 transition-all duration-300">
                <Zap className="h-8 w-8 text-white/80" />
              </div>
              <h3 className="text-xl font-medium mb-4 text-white/90">Self-Evolving Intelligence</h3>
              <p className="text-white/60 font-light leading-relaxed">
                In service of life. Cognition that improves itself while remaining aligned with human flourishing.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center mx-auto mb-6 group-hover:bg-white/15 transition-all duration-300">
                <Award className="h-8 w-8 text-white/80" />
              </div>
              <h3 className="text-xl font-medium mb-4 text-white/90">Atomic Mastery</h3>
              <p className="text-white/60 font-light leading-relaxed">
                For planetary abundance. Technologies that bend matter to conscious will, not scarcity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-20 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4 tracking-tight">Why This Epoch</h2>
          </div>

          <div className="bg-card/50 backdrop-blur-sm p-12 rounded border border-white/10">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-white/80 font-light leading-relaxed mb-6">
                Legacy systems are fraying. Cryptographic rails, self-teaching models, 
                and AI-driven material science are converging into a singular moment of possibility.
              </p>
              <p className="text-lg text-white/70 font-light leading-relaxed">
                Capital deployed at this hinge decides whether fracture becomes renaissance. 
                We choose renaissance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6 tracking-tight">Our Approach</h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>
                  We are not operators seeking exits. We are archaeologists of the future, 
                  identifying the technologies that will define the next century of human experience.
                </p>
                <p>
                  Our partnerships extend beyond capital—we provide technical counsel, 
                  strategic foresight, and access to a constellation of builders 
                  working at the edges of the possible.
                </p>
              </div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded border border-white/10">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-light text-white/90 mb-2">Pre-Seed</div>
                  <div className="text-sm text-white/60">to Seed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-white/90 mb-2">$100K</div>
                  <div className="text-sm text-white/60">to $2M</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-white/90 mb-2">Global</div>
                  <div className="text-sm text-white/60">Remote-First</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-white/90 mb-2">Epoch</div>
                  <div className="text-sm text-white/60">Defining</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
