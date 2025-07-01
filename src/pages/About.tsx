
import { Users, Award, Globe, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About HuxCo</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We are pioneers investing in the next generation of the internet, 
              partnering with visionary founders who are building decentralized, 
              private, and immersive digital experiences that will define the future.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <div className="space-y-4 text-gray-300">
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
            <div className="bg-slate-800 p-8 rounded-xl border border-purple-500/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                  <div className="text-sm text-gray-400">Years in Web3</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">12</div>
                  <div className="text-sm text-gray-400">Portfolio Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">3</div>
                  <div className="text-sm text-gray-400">Successful Exits</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
                  <div className="text-sm text-gray-400">Founders Supported</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide our investment decisions and partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-purple-400 group-hover:to-purple-500 transition-all duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Partnership</h3>
              <p className="text-gray-300">
                We believe in true partnerships with founders, providing ongoing support beyond just capital.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-teal-400 group-hover:to-teal-500 transition-all duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-teal-400">Innovation</h3>
              <p className="text-gray-300">
                We seek breakthrough technologies that have the potential to create entirely new markets.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-orange-400 group-hover:to-orange-500 transition-all duration-300">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-400">Decentralization</h3>
              <p className="text-gray-300">
                We champion technologies that distribute power and create more equitable systems.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-blue-400 group-hover:to-blue-500 transition-all duration-300">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Impact</h3>
              <p className="text-gray-300">
                We invest in companies that have the potential to positively impact billions of lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Investment Philosophy</h2>
          </div>

          <div className="bg-slate-800/80 backdrop-blur-sm p-12 rounded-xl border border-purple-500/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-purple-400">Our Approach</h3>
                <p className="text-gray-300 mb-4">
                  We invest in seed to Series A companies that are building the foundational 
                  infrastructure and applications for the next generation of the internet.
                </p>
                <p className="text-gray-300">
                  Our sweet spot is companies at the intersection of crypto/Web3, AI, and deep tech 
                  that are addressing fundamental challenges around digital freedom, privacy, and immersion.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-teal-400">What We Look For</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Exceptional founding teams with deep technical expertise</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Breakthrough technology with defensible moats</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Large addressable markets with network effects</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Alignment with our thesis of web evolution</span>
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
