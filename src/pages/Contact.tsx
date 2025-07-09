
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
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
      title: "Message Sent",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
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
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6 tracking-tight">Contact Us</h1>
            <p className="text-xl text-white/70 leading-relaxed font-light">
              Ready to explore investment opportunities or learn more about HuxCo? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light text-white/90 mb-8 tracking-tight">Get In Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card/50 border border-white/10 text-white placeholder-white/50 rounded focus:ring-2 focus:ring-tech-accent focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card/50 border border-white/10 text-white placeholder-white/50 rounded focus:ring-2 focus:ring-tech-accent focus:border-transparent"
                    placeholder="your.name@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-card/50 border border-white/10 text-white placeholder-white/50 rounded focus:ring-2 focus:ring-tech-accent focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-card/50 border border-white/10 text-white placeholder-white/50 rounded focus:ring-2 focus:ring-tech-accent focus:border-transparent"
                    placeholder="Tell us about your inquiry or investment needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-tech-accent text-white font-medium py-4 px-6 rounded hover:bg-tech-accent/80 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-light text-white/90 mb-8 tracking-tight">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-white/80" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white/90 mb-2">Phone</h3>
                    <p className="text-white/70">+1 (555) 123-4567</p>
                    <p className="text-sm text-white/50">Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-white/80" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white/90 mb-2">Email</h3>
                    <p className="text-white/70">info@huxco.com</p>
                    <p className="text-sm text-white/50">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-white/80" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white/90 mb-2">Office</h3>
                    <p className="text-white/70">
                      123 Financial District<br />
                      New York, NY 10004<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-white/80" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white/90 mb-2">Business Hours</h3>
                    <p className="text-white/70">
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Investment Inquiries */}
              <div className="mt-12 p-6 bg-card/50 backdrop-blur-sm rounded border border-white/10">
                <h3 className="text-lg font-medium text-white/90 mb-4">Investment Inquiries</h3>
                <p className="text-white/70 mb-4 font-light leading-relaxed">
                  For investment opportunities and partnership discussions, please 
                  contact our investment team directly at:
                </p>
                <p className="font-medium text-white/90">investments@huxco.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
