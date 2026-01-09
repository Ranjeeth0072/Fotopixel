import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.jpg';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'Photo Enhancement', slug: 'photo-enhancement' },
    { name: 'Virtual Staging', slug: 'virtual-staging' },
    { name: '360° Panorama', slug: '360-panorama' },
    { name: 'Photo Manipulation', slug: 'photo-manipulation' },
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
            <img src={logo} alt="Fotopixel Image Solution" className="h-12 w-12 object-contain rounded-md" />
            <div className="text-dark-foreground hidden sm:block">
              <span className="font-heading font-bold text-lg tracking-wide">fotopixel</span>
              <span className="block text-xs tracking-[0.2em] text-primary uppercase">Image Solution</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-dark-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <div 
              className="relative" 
              onMouseEnter={() => setIsServicesOpen(true)} 
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-dark-foreground hover:text-primary transition-colors font-medium flex items-center gap-1">
                Services <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card rounded-xl shadow-2xl py-3 animate-fade-in border border-border overflow-hidden">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-primary hover:text-primary-foreground transition-all group"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary group-hover:bg-primary-foreground transition-colors" />
                      {service.name}
                    </Link>
                  ))}
                  <div className="border-t border-border mt-2 pt-2">
                    <Link
                      to="/services"
                      className="flex items-center justify-center gap-2 px-4 py-2 text-primary font-medium hover:bg-primary/10 transition-colors"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/portfolio" className="text-dark-foreground hover:text-primary transition-colors font-medium">
              Portfolio
            </Link>
            <a href="/#how-it-works" className="text-dark-foreground hover:text-primary transition-colors font-medium">
              How It Works
            </a>
            <Link to="/contact" className="text-dark-foreground hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Link to="/try-free">
              <Button variant="cta" size="lg">
                GET FREE TRIAL
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
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
          <div className="lg:hidden py-4 border-t border-dark-foreground/10 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-dark-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/services" className="text-dark-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link to="/portfolio" className="text-dark-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Portfolio
              </Link>
              <a href="/#how-it-works" className="text-dark-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                How It Works
              </a>
              <Link to="/contact" className="text-dark-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <Link to="/try-free" onClick={() => setIsMenuOpen(false)}>
                <Button variant="cta" className="w-full mt-2">
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
