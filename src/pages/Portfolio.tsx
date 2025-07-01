
import { ExternalLink, TrendingUp, Users, DollarSign } from 'lucide-react';

const Portfolio = () => {
  const portfolioCompanies = [
    {
      name: 'TechFlow Solutions',
      sector: 'Software & Technology',
      description: 'Leading provider of enterprise workflow automation solutions.',
      investment: '2021',
      status: 'Active',
      growth: '+125%'
    },
    {
      name: 'HealthCare Partners',
      sector: 'Healthcare Services',
      description: 'Regional healthcare network specializing in primary care.',
      investment: '2020',
      status: 'Active',
      growth: '+85%'
    },
    {
      name: 'Industrial Dynamics',
      sector: 'Manufacturing',
      description: 'Precision manufacturing for aerospace and automotive industries.',
      investment: '2022',
      status: 'Active',
      growth: '+45%'
    },
    {
      name: 'FinServe Corp',
      sector: 'Financial Services',
      description: 'Innovative fintech platform for small business lending.',
      investment: '2019',
      status: 'Exited',
      growth: '+340%'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              A showcase of our strategic investments and the exceptional companies 
              we've partnered with to drive growth and create value.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">25+</div>
              <div className="text-gray-600">Portfolio Companies</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">$500M+</div>
              <div className="text-gray-600">Total Investment</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">5,000+</div>
              <div className="text-gray-600">Jobs Created</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">12</div>
              <div className="text-gray-600">Successful Exits</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Investments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Investments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Representative examples of our investment portfolio across various sectors and stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioCompanies.map((company, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{company.name}</h3>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {company.sector}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                      company.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {company.status}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{company.description}</p>
                
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <span className="text-gray-500">Investment Year: </span>
                    <span className="font-medium text-slate-900">{company.investment}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Growth: </span>
                    <span className="font-medium text-green-600">{company.growth}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Distribution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Sector Distribution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diversified portfolio spans multiple high-growth sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">35%</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Technology</h3>
              <p className="text-gray-600 text-sm">Software, SaaS, and digital platforms</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">25%</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Healthcare</h3>
              <p className="text-gray-600 text-sm">Medical services and health technology</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">25%</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Industrial</h3>
              <p className="text-gray-600 text-sm">Manufacturing and industrial services</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">15%</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Financial</h3>
              <p className="text-gray-600 text-sm">Fintech and financial services</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
