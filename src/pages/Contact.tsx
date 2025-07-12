import { Mail } from 'lucide-react';
const Contact = () => {
  return <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="minimal-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6 tracking-tight">Share Your Blueprint</h1>
            <p className="text-xl text-white/70 leading-relaxed font-light">
              If you're building the future, we're listening.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Email Contact with Cool Graphic */}
            <div className="bg-card/50 backdrop-blur-sm p-12 rounded border border-white/10 text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                  </svg>
                </div>
              </div>

              {/* Animated Icon */}
              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto mb-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-full animate-pulse"></div>
                  <div className="absolute inset-2 bg-white/10 rounded-full flex items-center justify-center">
                    <Mail className="h-10 w-10 text-white/80" />
                  </div>
                  {/* Orbital rings */}
                  <div className="absolute inset-0 border border-white/20 rounded-full animate-spin" style={{
                  animationDuration: '8s'
                }}></div>
                  <div className="absolute inset-[-8px] border border-white/10 rounded-full animate-spin" style={{
                  animationDuration: '12s',
                  animationDirection: 'reverse'
                }}></div>
                </div>

                <h2 className="text-2xl font-light mb-6 text-white/90 tracking-tight">Ready to forge tomorrow?</h2>
                
                <div className="mb-8">
                  <a href="mailto:forge@huxcogroup.com" className="inline-flex items-center text-xl font-medium text-white/90 hover:text-white transition-colors">
                    forge@huxcogroup.com
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="space-y-2 text-sm text-white/60">
                  <p>Encrypted inbox. We respond within 72 hours.</p>
                  <p>No decks—send principles, prototypes, and intent.</p>
                </div>
              </div>
            </div>

            {/* Additional Context */}
            <div className="mt-12 text-center">
              <p className="text-white/50 font-light leading-relaxed max-w-lg mx-auto">We're seeking founders who aren't just building products. They are chasing civilization-scale markets that impact our trajectory as a species.</p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;