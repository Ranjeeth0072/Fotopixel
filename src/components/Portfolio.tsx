import { Button } from '@/components/ui/button';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';
import heroLivingRoom from '@/assets/hero-living-room.jpg';
import heroBathroom from '@/assets/hero-bathroom.jpg';

const images = [
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  heroLivingRoom,
  heroBathroom,
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-secondary section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 uppercase tracking-wide">A glimpse of our edits</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={image}
                alt={`Portfolio image ${index + 1}`}
                className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="cta" size="lg">
            EXPLORE FULL PORTFOLIO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
