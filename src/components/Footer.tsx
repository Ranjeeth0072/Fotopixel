import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const services = [
    'Photo Enhancement',
    'Virtual Staging',
    '360° Panorama',
    'Photo Manipulation',
    'Video Editing',
    'Floor Plan',
  ];

  const quickLinks = [
    'Home',
    'Services',
    'Shop',
    'Portfolio',
    'Contact',
    'Free Sample',
  ];

  return (
    <footer id="contact" className="bg-dark text-dark-foreground">
      <div className="section-container section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Info */}
          <div>
            <a href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                <div className="w-5 h-5 bg-primary rounded-sm" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg tracking-wide block">REAL ESTATE</span>
                <span className="text-xs tracking-[0.3em] text-primary">PHOTO EDITING</span>
              </div>
            </a>
            <div className="space-y-3">
              <a href="tel:+32485206513" className="flex items-center gap-3 text-dark-foreground/80 hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                +32 485 20 65 13
              </a>
              <a href="mailto:info@real-estate-photo-editing.com" className="flex items-center gap-3 text-dark-foreground/80 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                info@yoursite.com
              </a>
              <div className="flex items-start gap-3 text-dark-foreground/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Your Address Here</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Menu</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-dark-foreground/80 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-dark-foreground/80 hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Get Started</h4>
            <p className="text-dark-foreground/80 mb-4">
              Ready to enhance your real estate photos? Start with 3 free photos today.
            </p>
            <a
              href="#"
              className="inline-block bg-primary text-primary-foreground font-heading font-semibold py-3 px-6 rounded-lg hover:bg-orange-hover transition-colors"
            >
              Try For Free
            </a>
          </div>
        </div>

        <div className="border-t border-dark-foreground/10 mt-12 pt-8 text-center text-dark-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} Real Estate Photo Editing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
