import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PortfolioModal from './PortfolioModal';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';
import heroLivingRoom from '@/assets/hero-living-room.jpg';
import heroBathroom from '@/assets/hero-bathroom.jpg';

const portfolioItems = [
  { before: portfolio1, after: portfolio2 },
  { before: portfolio3, after: portfolio4 },
  { before: heroLivingRoom, after: heroBathroom },
  { before: portfolio2, after: portfolio1 },
  { before: portfolio4, after: portfolio3 },
  { before: heroBathroom, after: heroLivingRoom },
];

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<{ before: string; after: string } | null>(null);

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
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.after}
                alt={`Portfolio image ${index + 1}`}
                className="w-full h-36 sm:h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-2 left-2 right-2 flex justify-between">
                <span className="bg-dark/70 text-dark-foreground px-2 py-0.5 rounded text-xs">Before/After</span>
              </div>
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
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        beforeImage={selectedItem?.before || ''}
        afterImage={selectedItem?.after || ''}
      />
    </section>
  );
};

export default Portfolio;
