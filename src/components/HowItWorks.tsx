import { Upload, Wand2, Download, CheckCircle } from 'lucide-react';
import { FadeIn, StaggerContainer, AnimatedCard } from './AnimatedComponents';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Upload,
    title: 'Upload Photos',
    description: 'Simply upload your raw real estate photos through our secure platform.',
    step: '01',
  },
  {
    icon: Wand2,
    title: 'We Edit',
    description: 'Our expert team enhances your photos using professional editing techniques.',
    step: '02',
  },
  {
    icon: Download,
    title: 'Download',
    description: 'Receive your polished photos within 12 hours, ready to impress.',
    step: '03',
  },
  {
    icon: CheckCircle,
    title: 'Sell Faster',
    description: 'Use stunning visuals to attract more buyers and close deals faster.',
    step: '04',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-secondary section-padding">
      <div className="section-container">
        <FadeIn className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium mb-2 uppercase tracking-wide text-sm">Simple Process</p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-foreground">
            How It Works
          </h2>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <AnimatedCard 
              key={index} 
              delay={index}
              className="relative text-center group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <motion.div 
                  className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  style={{ transformOrigin: 'left' }}
                />
              )}

              <div className="relative z-10 mb-4 md:mb-6">
                <motion.div 
                  className="w-20 h-20 md:w-24 md:h-24 bg-card border-2 border-primary/20 rounded-2xl flex items-center justify-center mx-auto group-hover:border-primary transition-colors"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, -5, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <step.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="absolute -top-2 -right-2 w-7 h-7 md:w-8 md:h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold text-xs md:text-sm"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                    delay: index * 0.2 + 0.4
                  }}
                >
                  {step.step}
                </motion.div>
              </div>

              <h3 className="font-heading font-bold text-lg md:text-xl text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </AnimatedCard>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default HowItWorks;