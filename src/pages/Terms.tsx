
const Terms = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-light text-white/90 mb-8 tracking-tight">Terms & Conditions</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-white/60 mb-6 font-light">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-white/90 mb-4">1. Acceptance of Terms</h2>
            <p className="text-white/70 mb-4 font-light leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please 
              do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-white/90 mb-4">2. Use License</h2>
            <p className="text-white/70 mb-4 font-light leading-relaxed">
              Permission is granted to temporarily download one copy of the materials on HuxCo's 
              website for personal, non-commercial transitory viewing only.
            </p>
            <p className="text-white/70 mb-4 font-light leading-relaxed">This license shall automatically terminate if you violate any of these restrictions.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-white/90 mb-4">3. Investment Disclaimers</h2>
            <p className="text-white/70 mb-4 font-light leading-relaxed">
              The information contained on this website is for informational purposes only and 
              does not constitute an offer to sell or a solicitation of an offer to buy any securities.
            </p>
            <ul className="list-disc pl-6 text-white/70 mb-4 space-y-1">
              <li>Past performance is not indicative of future results</li>
              <li>All investments involve risk and may lose value</li>
              <li>Professional advice should be sought before making investment decisions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-white/90 mb-4">4. Limitations</h2>
            <p className="text-white/70 mb-4 font-light leading-relaxed">
              In no event shall HuxCo or its suppliers be liable for any damages (including, 
              without limitation, damages for loss of data or profit, or due to business interruption) 
              arising out of the use or inability to use the materials on HuxCo's website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-white/90 mb-4">5. Privacy Policy</h2>
            <p className="text-white/70 mb-4 font-light leading-relaxed">
              Your privacy is important to us. Please review our Privacy Policy, which also 
              governs your use of the website, to understand our practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-white/90 mb-4">6. Governing Law</h2>
            <p className="text-white/70 mb-4 font-light leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the 
              laws of New York and you irrevocably submit to the exclusive jurisdiction of the 
              courts in that State or location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-white/90 mb-4">7. Contact Information</h2>
            <p className="text-white/70 font-light leading-relaxed">
              For questions about these Terms & Conditions, please contact us at:
              <br />
              Email: legal@huxco.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
