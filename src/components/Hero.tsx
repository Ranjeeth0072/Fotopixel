import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroLivingRoom from '@/assets/hero-living-room.jpg';
import heroBathroom from '@/assets/hero-bathroom.jpg';
import heroHallway from '@/assets/hero-hallway.jpg';

const Hero = () => {
  return (
    <section className="bg-background section-padding">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              <span className="block">REAL ESTATE</span>
              <span className="block">PHOTO EDITING</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Professional real estate photo editing services.
            </p>
            <p className="text-lg text-foreground mb-8">
              Enhance your real estate photos with our{' '}
              <strong>high-quality</strong>, <strong>fast</strong>, and{' '}
              <strong>affordable</strong> editing.
            </p>
            <Button variant="cta" size="xl" className="group mb-8">
              EASILY ORDER IN UNDER 60 SECONDS
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Google Rating */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center shadow-md">
                <span className="text-xl font-bold text-[#4285F4]">G</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-star-gold text-star-gold" />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Real Estate Photo Editing receives an average rating of
            </p>
            <p className="text-sm text-foreground font-semibold">
              4.9 / 5 stars on Google.
            </p>
          </div>

          {/* Right Image Grid */}
          <div className="relative animate-fade-in">
            <div className="grid grid-cols-5 grid-rows-2 gap-4 h-[450px]">
              <div className="col-span-3 row-span-2">
                <img
                  src={heroLivingRoom}
                  alt="Modern living room"
                  className="w-full h-full object-cover rounded-lg shadow-xl hover-lift"
                />
              </div>
              <div className="col-span-2 row-span-1">
                <img
                  src={heroHallway}
                  alt="Modern hallway"
                  className="w-full h-full object-cover rounded-lg shadow-xl hover-lift"
                />
              </div>
              <div className="col-span-2 row-span-1">
                <img
                  src={heroBathroom}
                  alt="Luxury bathroom"
                  className="w-full h-full object-cover rounded-lg shadow-xl hover-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
