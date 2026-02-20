import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioModal from '@/components/PortfolioModal';

// Single Image Enhancement
const single1 = '/assets/SINGLE IMAGE ENHANCEMENT/AFTER/Stand 767-1.jpg';
const single2 = '/assets/SINGLE IMAGE ENHANCEMENT/AFTER/Stand 767-3.jpg';
const single3 = '/assets/SINGLE IMAGE ENHANCEMENT/AFTER/Stand 767-7.jpg';
const single4 = '/assets/SINGLE IMAGE ENHANCEMENT/AFTER/Stand 767-24.jpg';
const single5 = '/assets/SINGLE IMAGE ENHANCEMENT/AFTER/Stand 767-25.jpg';

// Multi Image Enhancement
const multi1 = '/assets/MULTI IMAGE ENHANCEMENT/AFTER/_DSC5866.jpg';
const multi2 = '/assets/MULTI IMAGE ENHANCEMENT/AFTER/_DSC5875.jpg';
const multi3 = '/assets/MULTI IMAGE ENHANCEMENT/AFTER/_DSC5881.jpg';
const multi4 = '/assets/MULTI IMAGE ENHANCEMENT/AFTER/_DSC5982.jpg';

// Flash Ambient
const flash1 = '/assets/FLASH AMBIENT/AFTER/DSC_3954.jpg';
const flash2 = '/assets/FLASH AMBIENT/AFTER/DSC_3970.jpg';
const flash3 = '/assets/FLASH AMBIENT/AFTER/DSC_4040.jpg';
const flash4 = '/assets/FLASH AMBIENT/AFTER/DSC_8062.jpg';
const flash5 = '/assets/FLASH AMBIENT/AFTER/DSC_9524.jpg';

// Day to Dusk
const dusk1 = '/assets/DAY TO DUSK/AFTER/1.jpg';
const dusk2 = '/assets/DAY TO DUSK/AFTER/2.jpg';
const dusk3 = '/assets/DAY TO DUSK/AFTER/3.jpg';
const dusk4 = '/assets/DAY TO DUSK/AFTER/4.jpg';
const dusk5 = '/assets/DAY TO DUSK/AFTER/5.jpg';

// Virtual Staging
const vs1 = '/assets/virtual staging/After/1.jpeg';
const vs2 = '/assets/virtual staging/After/2.jpeg';
const vs3 = '/assets/virtual staging/After/3.jpeg';
const vs4 = '/assets/virtual staging/After/4.jpeg';
const vs5 = '/assets/virtual staging/After/5.jpeg';

// Portfolio images
const portfolio1 = '/assets/portfolio/1.jpg';
const portfolio4 = '/assets/portfolio/4.jpg';
const portfolio17 = '/assets/portfolio/17.jpg';
const portfolio18 = '/assets/portfolio/18.jpg';
const portfolio19 = '/assets/portfolio/19.jpg';
const portfolio20 = '/assets/portfolio/20.jpg';
const portfolio21 = '/assets/portfolio/21.jpg';
const portfolio22 = '/assets/portfolio/22.jpg';
const portfolio23 = '/assets/portfolio/23.jpg';
const portfolio26 = '/assets/portfolio/26.jpg';
const portfolio30 = '/assets/portfolio/30.jpg';
const portfolio51 = '/assets/portfolio/51.jpg';
const portfolio52 = '/assets/portfolio/52.jpg';
const portfolio53 = '/assets/portfolio/53.jpg';
const portfolio54 = '/assets/portfolio/54.jpg';
const portfolio55 = '/assets/portfolio/55.jpg';
const portfolio56 = '/assets/portfolio/56.jpg';
const portfolio57 = '/assets/portfolio/57.jpg';
const portfolio58 = '/assets/portfolio/58.jpg';
const portfolio59 = '/assets/portfolio/59.jpg';

const categories = [
  'All',
  'Single Image Enhancement',
  'Multi Image Enhancement',
  'Flash Ambient',
  'Day to Dusk',
  'Virtual Staging',
  'Others',
];

const portfolioItems = [
  // Single Image Enhancement
  { image: single1, category: 'Single Image Enhancement' },
  { image: single2, category: 'Single Image Enhancement' },
  { image: single3, category: 'Single Image Enhancement' },
  { image: single4, category: 'Single Image Enhancement' },
  { image: single5, category: 'Single Image Enhancement' },
  // Multi Image Enhancement
  { image: multi1, category: 'Multi Image Enhancement' },
  { image: multi2, category: 'Multi Image Enhancement' },
  { image: multi3, category: 'Multi Image Enhancement' },
  { image: multi4, category: 'Multi Image Enhancement' },
  // Flash Ambient
  { image: flash1, category: 'Flash Ambient' },
  { image: flash2, category: 'Flash Ambient' },
  { image: flash3, category: 'Flash Ambient' },
  { image: flash4, category: 'Flash Ambient' },
  { image: flash5, category: 'Flash Ambient' },
  // Day to Dusk
  { image: dusk1, category: 'Day to Dusk' },
  { image: dusk2, category: 'Day to Dusk' },
  { image: dusk3, category: 'Day to Dusk' },
  { image: dusk4, category: 'Day to Dusk' },
  { image: dusk5, category: 'Day to Dusk' },
  // Virtual Staging
  { image: vs1, category: 'Virtual Staging' },
  { image: vs2, category: 'Virtual Staging' },
  { image: vs3, category: 'Virtual Staging' },
  { image: vs4, category: 'Virtual Staging' },
  { image: vs5, category: 'Virtual Staging' },

  // Portfolio images
  { image: portfolio1, category: 'Others' },
  { image: portfolio4, category: 'Others' },
  { image: portfolio17, category: 'Others' },
  { image: portfolio18, category: 'Others' },
  { image: portfolio19, category: 'Others' },
  { image: portfolio20, category: 'Others' },
  { image: portfolio21, category: 'Others' },
  { image: portfolio22, category: 'Others' },
  { image: portfolio23, category: 'Others' },
  { image: portfolio26, category: 'Others' },
  { image: portfolio30, category: 'Others' },
  { image: portfolio51, category: 'Others' },
  { image: portfolio52, category: 'Others' },
  { image: portfolio53, category: 'Others' },
  { image: portfolio54, category: 'Others' },
  { image: portfolio55, category: 'Others' },
  { image: portfolio56, category: 'Others' },
  { image: portfolio57, category: 'Others' },
  { image: portfolio58, category: 'Others' },
  { image: portfolio59, category: 'Others' },
];

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            Click on any image to view it in full size.
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl group cursor-pointer aspect-square"
              onClick={() => setSelectedImage(item.image)}
            >
              <img
                src={item.image}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
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
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        image={selectedImage || ''}
      />

      <Footer />
    </div>
  );
};

export default PortfolioPage;
