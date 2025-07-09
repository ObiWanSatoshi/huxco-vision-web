
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
    
    toast({
      title: "Blueprint Received",
      description: "We'll respond within 72 hours.",
    });
    
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="minimal-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6 tracking-tight">Contact</h1>
            <p className="text-xl text-white/70 leading-relaxed font-light">
              Share your blueprint.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-white/80 mb-4">
              Email <strong>forge@huxco.xyz</strong> or use the encrypted form below.
            </p>
            <p className="text-sm text-white/60">
              Replies within 72 h. No decks—send principles, prototypes, and intent.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card/50 border border-white/10 text-white placeholder-white/50 rounded focus:ring-2 focus:ring-tech-accent focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card/50 border border-white/10 text-white placeholder-white/50 rounded focus:ring-2 focus:ring-tech-accent focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                Project/Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card/50 border border-white/10 text-white placeholder-white/50 rounded focus:ring-2 focus:ring-tech-accent focus:border-transparent"
                placeholder="What you're building"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                Blueprint
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={8}
                className="w-full px-4 py-3 bg-card/50 border border-white/10 text-white placeholder-white/50 rounded focus:ring-2 focus:ring-tech-accent focus:border-transparent"
                placeholder="Share your principles, prototypes, and intent..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-tech-accent text-white font-medium py-4 px-6 rounded hover:bg-tech-accent/80 transition-all duration-200"
            >
              Send Blueprint
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
