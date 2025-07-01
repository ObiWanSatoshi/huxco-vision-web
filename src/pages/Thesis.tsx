
import { CheckCircle, TrendingUp, Shield, Target, Users, Award } from 'lucide-react';

const Thesis = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Investment Thesis</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our investment philosophy is built on fundamental principles that have 
              proven successful across market cycles and economic environments.
            </p>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Investment Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in making thoughtful, research-driven investments in businesses 
              with strong fundamentals and exceptional growth potential.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Key Principles</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Quality Over Quantity</h4>
                    <p className="text-gray-600">We focus on a concentrated portfolio of high-quality businesses rather than broad diversification.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Long-Term Perspective</h4>
                    <p className="text-gray-600">Our investment horizon spans years, not quarters, allowing us to focus on sustainable value creation.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Operational Excellence</h4>
                    <p className="text-gray-600">We actively work with portfolio companies to improve operations and drive growth.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Risk-Adjusted Returns</h4>
                    <p className="text-gray-600">We prioritize investments that offer attractive returns relative to their risk profile.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Investment Criteria</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-slate-900">Revenue Range</span>
                  <span className="text-gray-600">$10M - $500M</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-slate-900">EBITDA Margin</span>
                  <span className="text-gray-600">≥15%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-slate-900">Market Position</span>
                  <span className="text-gray-600">Top 3 in sector</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-slate-900">Growth Rate</span>
                  <span className="text-gray-600">10%+ annually</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-slate-900">Management Quality</span>
                  <span className="text-gray-600">Exceptional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Strategy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Investment Strategy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach to identifying and nurturing exceptional investment opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Sector Focus</h3>
              <p className="text-gray-600 mb-4">
                We concentrate on industries where we have deep expertise and can add significant value.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Technology & Software</li>
                <li>• Healthcare Services</li>
                <li>• Financial Services</li>
                <li>• Industrial Manufacturing</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Value Creation</h3>
              <p className="text-gray-600 mb-4">
                We work closely with management teams to implement growth strategies and operational improvements.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Strategic Planning</li>
                <li>• Operational Efficiency</li>
                <li>• Market Expansion</li>
                <li>• Technology Integration</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Risk Management</h3>
              <p className="text-gray-600 mb-4">
                Our disciplined approach to risk assessment protects capital while pursuing growth.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Comprehensive Due Diligence</li>
                <li>• Diversification Strategy</li>
                <li>• Continuous Monitoring</li>
                <li>• Exit Planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Market Outlook */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Market Outlook</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our perspective on current market conditions and emerging opportunities.
            </p>
          </div>

          <div className="bg-slate-900 text-white p-12 rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Current Environment</h3>
                <p className="text-gray-300 mb-4">
                  Despite market volatility, we see significant opportunities in businesses that 
                  have adapted to changing economic conditions and demonstrated resilience.
                </p>
                <p className="text-gray-300">
                  Our focus remains on companies with strong balance sheets, recurring revenue 
                  models, and the ability to gain market share during periods of uncertainty.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Future Opportunities</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <Users className="h-8 w-8 text-blue-400 mb-2" />
                    <h4 className="font-semibold mb-1">Digital Transformation</h4>
                    <p className="text-sm text-gray-300">Businesses embracing technology</p>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <Award className="h-8 w-8 text-green-400 mb-2" />
                    <h4 className="font-semibold mb-1">ESG Focus</h4>
                    <p className="text-sm text-gray-300">Sustainable business practices</p>
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

export default Thesis;
