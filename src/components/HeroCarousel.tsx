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
    title: 'Real Estate Property Website',
    subtitle: 'Custom designed websites that showcase your properties beautifully',
  },
  {
    image: heroBathroom,
    title: 'Virtual Staging Excellence',
    subtitle: 'Turn empty spaces into beautifully furnished rooms',
  },
  {
    image: heroHallway,
    title: 'Video Editing',
    subtitle: 'Cinematic property videos that captivate buyers',
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
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden touch-pan-y">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-dark/85 via-dark/70 to-dark/50" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center px-6 sm:px-8 max-w-4xl mx-auto">
              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-dark-foreground leading-tight mb-3 md:mb-6 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-dark-foreground/95 mb-6 md:mb-8 drop-shadow-md max-w-2xl mx-auto">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link to="/try-free">
                  <Button variant="cta" size="xl" className="text-sm sm:text-base w-full sm:w-auto shadow-lg">
                    GET FREE TRIAL
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button 
                    variant="outline" 
                    size="xl" 
                    className="border-2 border-dark-foreground text-dark-foreground bg-dark-foreground/10 hover:bg-dark-foreground hover:text-dark text-sm sm:text-base w-full sm:w-auto backdrop-blur-sm"
                  >
                    VIEW PORTFOLIO
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Enhanced visibility */}
      <button
        onClick={goToPrev}
        className="absolute left-3 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center text-primary-foreground shadow-xl transition-all hover:scale-110 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-3 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center text-primary-foreground shadow-xl transition-all hover:scale-110 z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 sm:h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-primary w-8 sm:w-10'
                : 'bg-dark-foreground/60 hover:bg-dark-foreground w-2 sm:w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
