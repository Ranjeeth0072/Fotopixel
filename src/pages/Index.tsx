import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import FreeTrial from '@/components/FreeTrial';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <FreeTrial />
      <Services />
      <HowItWorks />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <FreeTrial />
      <Footer />
    </div>
  );
};

export default Index;
