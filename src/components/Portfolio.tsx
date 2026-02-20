import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PortfolioModal from './PortfolioModal';

const portfolio1 = '/assets/portfolio/4.jpg';
const portfolio17 = '/assets/portfolio/17.jpg';
const portfolio18 = '/assets/portfolio/18.jpg';
const portfolio20 = '/assets/portfolio/20.jpg';
const portfolio51 = '/assets/portfolio/51.jpg';
const portfolio57 = '/assets/portfolio/57.jpg';

const portfolioItems = [
  { image: portfolio1 },
  { image: portfolio17 },
  { image: portfolio18 },
  { image: portfolio20 },
  { image: portfolio51 },
  { image: portfolio57 },
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="portfolio" className="bg-secondary section-padding">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium mb-2 uppercase tracking-wide text-sm">A glimpse of our edits</p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-foreground">
            Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <img
                src={item.image}
                alt={`Portfolio image ${index + 1}`}
                className="w-full h-36 sm:h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <Link to="/portfolio">
            <Button variant="cta" size="lg">
              EXPLORE FULL PORTFOLIO
            </Button>
          </Link>
        </div>
      </div>

      <PortfolioModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        image={selectedImage || ''}
      />
    </section>
  );
};

export default Portfolio;
