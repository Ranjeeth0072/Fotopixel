import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FreeTrial = () => {
  return (
    <section className="bg-primary section-padding">
      <div className="section-container text-center">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-primary-foreground mb-4">
          Try 3 Photos For Free
        </h2>
        <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-lg px-4">
          Experience our professional photo editing quality with no commitment. 
          Upload 3 photos and receive professionally edited images within 12 hours.
        </p>
        <Link to="/try-free">
          <Button
            variant="outline"
            size="xl"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/80 hover:text-primary border-0 group text-sm md:text-base"
          >
            START FREE TRIAL
            <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FreeTrial;
