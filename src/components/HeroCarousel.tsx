import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroLivingRoom from '@/assets/hero-living-room.jpg';
import heroBathroom from '@/assets/hero-bathroom.jpg';
import heroHallway from '@/assets/hero-hallway.jpg';

const slides = [
  {
    image: heroLivingRoom,
    title: 'Transform Your Property Photos',
    subtitle: 'Professional real estate photo editing that sells homes faster',
  },
  {
    image: heroBathroom,
    title: 'Virtual Staging Excellence',
    subtitle: 'Turn empty spaces into beautifully furnished rooms',
  },
  {
    image: heroHallway,
    title: 'HDR & Photo Enhancement',
    subtitle: 'Stunning visuals that capture buyer attention',
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/60 to-dark/40" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center px-4 max-w-4xl mx-auto">
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-dark-foreground leading-tight mb-4 md:mb-6 animate-slide-up">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-dark-foreground/90 mb-6 md:mb-8 animate-fade-in">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                <Link to="/try-free">
                  <Button variant="cta" size="xl" className="text-sm sm:text-base w-full sm:w-auto">
                    GET FREE TRIAL
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button 
                    variant="outline" 
                    size="xl" 
                    className="border-2 border-dark-foreground text-dark-foreground bg-transparent hover:bg-dark-foreground hover:text-dark text-sm sm:text-base w-full sm:w-auto"
                  >
                    VIEW PORTFOLIO
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - More Visible */}
      <button
        onClick={goToPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-primary hover:bg-primary/80 rounded-full flex items-center justify-center text-primary-foreground shadow-lg transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-primary hover:bg-primary/80 rounded-full flex items-center justify-center text-primary-foreground shadow-lg transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-primary w-10'
                : 'bg-dark-foreground/50 hover:bg-dark-foreground w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
