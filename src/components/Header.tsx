import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    'Photo Enhancement',
    'Virtual Staging',
    '360° Panorama',
    'Photo Manipulation',
    'Video Editing',
    'Floor Plan',
  ];

  return (
    <header className="bg-dark sticky top-0 z-50">
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="Fotopixel Image Solution" className="h-12 w-12 object-contain rounded-md" />
            <div className="text-dark-foreground hidden sm:block">
              <span className="font-heading font-bold text-lg tracking-wide">fotopixel</span>
              <span className="block text-xs tracking-[0.2em] text-primary uppercase">Image Solution</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-dark-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <button className="text-dark-foreground hover:text-primary transition-colors font-medium flex items-center gap-1">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-dark-foreground rounded-lg shadow-xl py-2 animate-fade-in">
                  {services.map((service) => (
                    <a
                      key={service}
                      href="#services"
                      className="block px-4 py-2 text-dark hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="#portfolio" className="text-dark-foreground hover:text-primary transition-colors font-medium">
              Portfolio
            </a>
            <a href="#how-it-works" className="text-dark-foreground hover:text-primary transition-colors font-medium">
              How It Works
            </a>
            <a href="#contact" className="text-dark-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="cta" size="lg">
              GET FREE TRIAL
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-dark-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-dark-foreground/10 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-dark-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="#services" className="text-dark-foreground hover:text-primary transition-colors font-medium">
                Services
              </a>
              <a href="#portfolio" className="text-dark-foreground hover:text-primary transition-colors font-medium">
                Portfolio
              </a>
              <a href="#how-it-works" className="text-dark-foreground hover:text-primary transition-colors font-medium">
                How It Works
              </a>
              <a href="#contact" className="text-dark-foreground hover:text-primary transition-colors font-medium">
                Contact
              </a>
              <Button variant="cta" className="w-full mt-2">
                GET FREE TRIAL
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;