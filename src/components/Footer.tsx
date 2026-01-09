import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/logo.jpg';

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
    'Portfolio',
    'How It Works',
    'Contact',
  ];

  return (
    <footer id="contact" className="bg-dark text-dark-foreground">
      <div className="section-container section-padding">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Info */}
          <div>
            <a href="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Fotopixel Image Solution" className="h-12 w-12 object-contain rounded-md" />
              <div>
                <span className="font-heading font-bold text-lg tracking-wide block">fotopixel</span>
                <span className="text-xs tracking-[0.2em] text-primary uppercase">Image Solution</span>
              </div>
            </a>
            <div className="space-y-3">
              <a href="tel:+919715052757" className="flex items-center gap-3 text-dark-foreground/80 hover:text-primary transition-colors text-sm">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                +91 9715052757
              </a>
              <a href="mailto:info@fotopixel.com" className="flex items-center gap-3 text-dark-foreground/80 hover:text-primary transition-colors text-sm">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                info@fotopixel.com
              </a>
              <div className="flex items-start gap-3 text-dark-foreground/80 text-sm">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5" />
                <span>Chennai, Tamil Nadu 638008, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4 md:mb-6">Menu</h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-dark-foreground/80 hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4 md:mb-6">Services</h4>
            <ul className="space-y-2 md:space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-dark-foreground/80 hover:text-primary transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4 md:mb-6">Get Started</h4>
            <p className="text-dark-foreground/80 mb-4 text-sm">
              Ready to enhance your real estate photos? Start with 3 free photos today.
            </p>
            <a
              href="#"
              className="inline-block bg-primary text-primary-foreground font-heading font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              Try For Free
            </a>
          </div>
        </div>

        <div className="border-t border-dark-foreground/10 mt-10 md:mt-12 pt-6 md:pt-8 text-center text-dark-foreground/60 text-xs md:text-sm">
          <p>© {new Date().getFullYear()} Fotopixel Image Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;