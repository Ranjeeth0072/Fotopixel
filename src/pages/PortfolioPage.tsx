import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioModal from '@/components/PortfolioModal';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';
import heroLivingRoom from '@/assets/hero-living-room.jpg';
import heroBathroom from '@/assets/hero-bathroom.jpg';
import heroHallway from '@/assets/hero-hallway.jpg';

const categories = ['All', 'Photo Enhancement', 'Virtual Staging', 'Day to Dusk', 'Floor Plans'];

const portfolioItems = [
  { before: portfolio1, after: portfolio2, category: 'Photo Enhancement' },
  { before: portfolio3, after: portfolio4, category: 'Virtual Staging' },
  { before: heroLivingRoom, after: heroBathroom, category: 'Day to Dusk' },
  { before: portfolio2, after: portfolio1, category: 'Photo Enhancement' },
  { before: portfolio4, after: portfolio3, category: 'Virtual Staging' },
  { before: heroBathroom, after: heroLivingRoom, category: 'Day to Dusk' },
  { before: heroHallway, after: portfolio1, category: 'Photo Enhancement' },
  { before: portfolio1, after: heroHallway, category: 'Virtual Staging' },
  { before: portfolio3, after: heroBathroom, category: 'Floor Plans' },
];

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<{ before: string; after: string } | null>(null);

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="section-container section-padding">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 uppercase tracking-wide text-sm">OUR WORK</p>
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Portfolio
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Click on any image to view the before and after comparison with our interactive slider.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-foreground hover:bg-primary/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl group cursor-pointer aspect-square"
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.after}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/50 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-7 h-7 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                  <span className="text-dark-foreground font-medium text-sm">View Before/After</span>
                </div>
              </div>
              <div className="absolute bottom-3 left-3">
                <span className="bg-dark/80 text-dark-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PortfolioModal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        beforeImage={selectedItem?.before || ''}
        afterImage={selectedItem?.after || ''}
      />

      <Footer />
    </div>
  );
};

export default PortfolioPage;
