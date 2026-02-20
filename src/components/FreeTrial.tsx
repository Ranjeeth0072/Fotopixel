import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FadeIn, ScaleIn } from './AnimatedComponents';
import { motion } from 'framer-motion';

const FreeTrial = () => {
  return (
    <section className="bg-primary section-padding">
      <div className="section-container text-center">
        <ScaleIn>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-primary-foreground mb-4">
            Drop Your Link For Free
          </h2>
        </ScaleIn>
        <FadeIn delay={0.2}>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-lg px-4">
            Experience our professional photo editing quality with no commitment. 
            Drop Your Link and receive professionally edited images within 12 hours.
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <Link to="/try-free">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="xl"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/80 hover:text-primary border-0 group text-sm md:text-base"
              >
                START FREE TRIAL
                <motion.div
                  className="inline-block ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </motion.div>
              </Button>
            </motion.div>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};

export default FreeTrial;
