import { useState } from 'react';
import { Menu, X, ShoppingCart, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
            <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
              <div className="w-5 h-5 bg-primary rounded-sm" />
            </div>
            <div className="text-dark-foreground">
              <span className="font-heading font-bold text-lg tracking-wide">REAL ESTATE</span>
              <span className="block text-xs tracking-[0.3em] text-primary">PHOTO EDITING</span>
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
            <a href="#services" className="text-dark-foreground hover:text-primary transition-colors font-medium">
              Shop
            </a>
            <a href="#portfolio" className="text-dark-foreground hover:text-primary transition-colors font-medium">
              Portfolio
            </a>
            <a href="#contact" className="text-dark-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-dark-foreground hover:text-primary transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <Button variant="cta" size="lg">
              ORDER ONLINE
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
              <a href="#services" className="text-dark-foreground hover:text-primary transition-colors font-medium">
                Shop
              </a>
              <a href="#portfolio" className="text-dark-foreground hover:text-primary transition-colors font-medium">
                Portfolio
              </a>
              <a href="#contact" className="text-dark-foreground hover:text-primary transition-colors font-medium">
                Contact
              </a>
              <Button variant="cta" className="w-full mt-2">
                ORDER ONLINE
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
