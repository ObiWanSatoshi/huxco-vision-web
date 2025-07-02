
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
              We are pioneers investing in the next generation of the internet, 
              partnering with visionary founders who are building decentralized, 
              private, and immersive digital experiences that will define the future.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6 tracking-tight">Our Mission</h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>
                  HuxCo was founded on the belief that the internet's next evolution 
                  will be defined by three fundamental principles: Freedom, Privacy, and Immersion.
                </p>
                <p>
                  We partner with exceptional entrepreneurs building breakthrough technologies 
                  in crypto/Web3, artificial intelligence, and deep tech. Our focus is on 
                  early-stage companies that have the potential to reshape entire industries 
                  and create new paradigms for human interaction with technology.
                </p>
                <p>
                  As active partners, we bring more than just capital—we provide strategic 
                  guidance, technical expertise, and access to a network of industry leaders 
                  who share our vision for a decentralized, privacy-preserving, and 
                  immersive digital future.
                </p>
              </div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded border border-white/10">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-light text-white/90 mb-2">5+</div>
                  <div className="text-sm text-white/60">Years in Web3</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-white/90 mb-2">12</div>
                  <div className="text-sm text-white/60">Portfolio Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-white/90 mb-2">3</div>
                  <div className="text-sm text-white/60">Successful Exits</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-white/90 mb-2">100+</div>
                  <div className="text-sm text-white/60">Founders Supported</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4 tracking-tight">Our Values</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
              These principles guide our investment decisions and partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center mx-auto mb-4 group-hover:bg-white/15 transition-all duration-300">
                <Users className="h-8 w-8 text-white/80" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-white/90">Partnership</h3>
              <p className="text-white/60 font-light leading-relaxed">
                We believe in true partnerships with founders, providing ongoing support beyond just capital.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center mx-auto mb-4 group-hover:bg-white/15 transition-all duration-300">
                <Award className="h-8 w-8 text-white/80" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-white/90">Innovation</h3>
              <p className="text-white/60 font-light leading-relaxed">
                We seek breakthrough technologies that have the potential to create entirely new markets.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center mx-auto mb-4 group-hover:bg-white/15 transition-all duration-300">
                <Globe className="h-8 w-8 text-white/80" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-white/90">Decentralization</h3>
              <p className="text-white/60 font-light leading-relaxed">
                We champion technologies that distribute power and create more equitable systems.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center mx-auto mb-4 group-hover:bg-white/15 transition-all duration-300">
                <Zap className="h-8 w-8 text-white/80" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-white/90">Impact</h3>
              <p className="text-white/60 font-light leading-relaxed">
                We invest in companies that have the potential to positively impact billions of lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-20 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4 tracking-tight">Investment Philosophy</h2>
          </div>

          <div className="bg-card/50 backdrop-blur-sm p-12 rounded border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-medium mb-6 text-white/90">Our Approach</h3>
                <p className="text-white/70 mb-4 font-light leading-relaxed">
                  We invest in seed to Series A companies that are building the foundational 
                  infrastructure and applications for the next generation of the internet.
                </p>
                <p className="text-white/70 font-light leading-relaxed">
                  Our sweet spot is companies at the intersection of crypto/Web3, AI, and deep tech 
                  that are addressing fundamental challenges around digital freedom, privacy, and immersion.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-6 text-white/90">What We Look For</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white/60 rounded-full mr-3"></div>
                    <span className="text-white/70 font-light">Exceptional founding teams with deep technical expertise</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white/60 rounded-full mr-3"></div>
                    <span className="text-white/70 font-light">Breakthrough technology with defensible moats</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white/60 rounded-full mr-3"></div>
                    <span className="text-white/70 font-light">Large addressable markets with network effects</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white/60 rounded-full mr-3"></div>
                    <span className="text-white/70 font-light">Alignment with our thesis of web evolution</span>
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

export default About;
