
const Privacy = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-light text-white/90 mb-8 tracking-tight">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-white/60 mb-6 font-light">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-white/90 mb-4">1. Information We Collect</h2>
            <p className="text-white/70 mb-4 font-light leading-relaxed">
              We collect information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc pl-6 text-white/70 mb-4 space-y-1">
              <li>Fill out forms on our website</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us for investment inquiries</li>
              <li>Attend our events or webinars</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-white/90 mb-4">2. How We Use Your Information</h2>
            <p className="text-white/70 mb-4 font-light leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-white/70 mb-4 space-y-1">
              <li>Respond to your inquiries and provide customer service</li>
              <li>Send you updates about our investment opportunities</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-white/90 mb-4">3. Information Sharing</h2>
            <p className="text-white/70 mb-4 font-light leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this privacy policy or as required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-white/90 mb-4">4. Data Security</h2>
            <p className="text-white/70 mb-4 font-light leading-relaxed">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-white/90 mb-4">5. Your Rights</h2>
            <p className="text-white/70 mb-4 font-light leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-white/70 mb-4 space-y-1">
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>File a complaint with supervisory authorities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-white/90 mb-4">6. Contact Us</h2>
            <p className="text-white/70 font-light leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@huxco.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
