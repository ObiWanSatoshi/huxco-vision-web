const Cookies = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-light text-white/90 mb-8 tracking-tight">Cookie Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-white/60 mb-6 font-light">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-white/90 mb-4">What Are Cookies?</h2>
            <p className="text-white/70 mb-4 font-light leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when 
              you visit a website. They are widely used to make websites work more efficiently and 
              to provide information to website owners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-white/90 mb-4">How We Use Cookies</h2>
            <p className="text-white/70 mb-4 font-light leading-relaxed">
              We use cookies for several purposes:
            </p>
            <ul className="list-disc pl-6 text-white/70 mb-4 space-y-1">
              <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> These help us understand how visitors interact with our website</li>
              <li><strong>Functional Cookies:</strong> These enable enhanced functionality and personalization</li>
              <li><strong>Marketing Cookies:</strong> These are used to deliver relevant advertisements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-white/90 mb-4">Types of Cookies We Use</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium text-white/90 mb-2">Essential Cookies</h3>
              <p className="text-white/70 mb-4 font-light leading-relaxed">
                These cookies are strictly necessary to provide you with services available through 
                our website and to use some of its features.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-white/90 mb-2">Analytics and Performance Cookies</h3>
              <p className="text-white/70 mb-4 font-light leading-relaxed">
                These cookies collect information about how you use our website, such as which pages 
                you visit most often. This data helps us improve how our website works.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-white/90 mb-2">Functionality Cookies</h3>
              <p className="text-white/70 mb-4 font-light leading-relaxed">
                These cookies allow our website to remember choices you make and provide enhanced, 
                more personal features.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-white/90 mb-4">Managing Cookies</h2>
            <p className="text-white/70 mb-4 font-light leading-relaxed">
              You can control and/or delete cookies as you wish. You can delete all cookies that 
              are already on your computer and you can set most browsers to prevent them from being placed.
            </p>
            <p className="text-white/70 mb-4 font-light leading-relaxed">
              However, if you do this, you may have to manually adjust some preferences every time 
              you visit a site and some services and functionalities may not work.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-white/90 mb-4">Third-Party Cookies</h2>
            <p className="text-white/70 mb-4 font-light leading-relaxed">
              We may also use various third-party cookies to report usage statistics of the service 
              and deliver advertisements on and through the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-white/90 mb-4">Updates to This Policy</h2>
            <p className="text-white/70 mb-4 font-light leading-relaxed">
              We may update this Cookie Policy from time to time. We will notify you of any changes 
              by posting the new Cookie Policy on this page and updating the "last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-white/90 mb-4">Contact Us</h2>
            <p className="text-white/70 font-light leading-relaxed">
              If you have any questions about this Cookie Policy, please contact us at:
              <br />
              Email: privacy@huxco.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
