
import { Users, Award, Globe, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About HuxCo</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Founded on the principles of integrity, excellence, and long-term value creation, 
              HuxCo has established itself as a trusted partner for businesses seeking 
              strategic capital and operational expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  HuxCo was established with a clear vision: to build a premier investment 
                  holding company that creates lasting value through strategic partnerships 
                  and operational excellence.
                </p>
                <p>
                  Our team brings decades of combined experience in investment management, 
                  business operations, and strategic planning across diverse industries. 
                  This expertise allows us to identify unique opportunities and work 
                  collaboratively with management teams to unlock potential.
                </p>
                <p>
                  We believe that successful investing goes beyond capital allocation. 
                  It requires deep industry knowledge, operational insight, and a 
                  commitment to building sustainable businesses that benefit all stakeholders.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">$500M+</div>
                  <div className="text-sm text-gray-600">Assets Under Management</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
                  <div className="text-sm text-gray-600">Portfolio Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
                  <div className="text-sm text-gray-600">Industry Sectors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Partnership</h3>
              <p className="text-gray-600">
                We build lasting relationships based on trust, transparency, and mutual success.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from investment selection to portfolio management.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Vision</h3>
              <p className="text-gray-600">
                We maintain a long-term perspective, focusing on sustainable growth and value creation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Expertise</h3>
              <p className="text-gray-600">
                Our deep industry knowledge and operational experience drive superior results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
