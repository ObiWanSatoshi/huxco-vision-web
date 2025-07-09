
import { Users, Award, Globe, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="minimal-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6 tracking-tight">About HuxCo</h1>
            <p className="text-xl text-white/70 leading-relaxed font-light">
              Born from midnight debates over humanity's future, we fund the technologies 
              that will determine whether we flourish or fracture.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light mb-8 tracking-tight">Origin</h2>
            <p className="text-xl text-white/80 leading-relaxed font-light mb-12">
              In a midnight debate over Huxley's pleasure traps and Orwell's power traps, 
              we coined <strong>HuxCo</strong>—to bankroll technologies that liberate humanity from both dystopias.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-8 tracking-tight">Mission</h2>
            <p className="text-2xl text-white/90 leading-relaxed font-light">
              Fuel primitives that render trust uncapturable, cognition boundless, 
              and matter obedient to conscious intent.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4 tracking-tight">Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center mx-auto mb-6 group-hover:bg-white/15 transition-all duration-300">
                <Globe className="h-8 w-8 text-white/80" />
              </div>
              <p className="text-white/90 font-light leading-relaxed">
                Immutable truth over mutable authority.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center mx-auto mb-6 group-hover:bg-white/15 transition-all duration-300">
                <Zap className="h-8 w-8 text-white/80" />
              </div>
              <p className="text-white/90 font-light leading-relaxed">
                Self-evolving intelligence in service of life.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center mx-auto mb-6 group-hover:bg-white/15 transition-all duration-300">
                <Award className="h-8 w-8 text-white/80" />
              </div>
              <p className="text-white/90 font-light leading-relaxed">
                Atomic mastery for planetary abundance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light mb-8 tracking-tight">Why Now</h2>
            <p className="text-xl text-white/80 leading-relaxed font-light">
              Legacy systems are fraying. Cryptographic rails, self-teaching models, 
              and AI-driven material science are converging. Capital deployed at this 
              hinge decides whether fracture becomes renaissance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
