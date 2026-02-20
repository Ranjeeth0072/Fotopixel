import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const logo = '/logo.png';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const services = [
    { name: 'Photo Enhancement', slug: 'photo-enhancement' },
    { name: 'Virtual Staging', slug: 'virtual-staging' },
    // { name: '360° Panorama', slug: '360-panorama' },
    // { name: 'Photo Manipulation', slug: 'photo-manipulation' },
    { name: 'Video Editing', slug: 'video-editing' },
    { name: 'Floor Plan', slug: 'floor-plan' },
    { name: 'Real Estate Website', slug: 'real-estate-website' },
  ];

  return (
    <header className="bg-dark sticky top-0 z-50">
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Fotopixel Image Solution" className="h-14 w-auto object-contain" />
            <div className="text-dark-foreground hidden sm:block">
              <span className="font-heading font-bold text-lg tracking-wide">fotopixel</span>
              <span className="block text-xs tracking-[0.2em] text-primary uppercase">Image Solution</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-dark-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <div 
              className="relative" 
              onMouseEnter={() => setIsServicesOpen(true)} 
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button 
                className="text-dark-foreground hover:text-primary transition-colors font-medium flex items-center gap-1"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full left-0 mt-2 w-64 bg-card rounded-xl shadow-2xl py-3 border border-border overflow-hidden transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-primary hover:text-primary-foreground transition-all group"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <span className="w-2 h-2 rounded-full bg-primary group-hover:bg-primary-foreground transition-colors" />
                    {service.name}
                  </Link>
                ))}
                <div className="border-t border-border mt-2 pt-2">
                  <Link
                    to="/services"
                    className="flex items-center justify-center gap-2 px-4 py-2 text-primary font-medium hover:bg-primary/10 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/portfolio" className="text-dark-foreground hover:text-primary transition-colors font-medium">
              Portfolio
            </Link>
            <Link to="/contact" className="text-dark-foreground hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link to="/try-free">
              <Button variant="cta" size="lg">
                GET FREE TRIAL
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              className="text-dark-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-dark-foreground/10 animate-fade-in max-h-[70vh] overflow-y-auto">
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-dark-foreground hover:text-primary transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button 
                  className="w-full text-left text-dark-foreground hover:text-primary transition-colors font-medium py-2 flex items-center justify-between"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-4 py-2 space-y-2 border-l-2 border-primary/30 ml-2">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="block text-dark-foreground/80 hover:text-primary transition-colors py-1 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      className="block text-primary font-medium py-1 text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>
              
              <Link to="/portfolio" className="text-dark-foreground hover:text-primary transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Portfolio
              </Link>
              <Link to="/contact" className="text-dark-foreground hover:text-primary transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <Link to="/try-free" onClick={() => setIsMenuOpen(false)}>
                <Button variant="cta" className="w-full mt-3">
                  GET FREE TRIAL
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
