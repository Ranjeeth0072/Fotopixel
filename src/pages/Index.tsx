import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import FreeTrial from '@/components/FreeTrial';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Portfolio from '@/components/Portfolio';
import WorkingClients from '@/components/WorkingClients';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroCarousel />
      <FreeTrial />
      <Services />
      <HowItWorks />
      <Portfolio />
      <WorkingClients />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;