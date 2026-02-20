// Animation Demo Component - Shows all available button animations
import { Button } from '@/components/ui/button';
import { AnimatedButton, AnimatedCard, AnimatedDiv, FadeIn, ScaleIn, SlideIn } from './AnimatedComponents';
import { motion } from 'framer-motion';

const AnimationDemo = () => {
  return (
    <div className="section-padding bg-background">
      <div className="section-container">
        <FadeIn className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Animation Showcase
          </h2>
          <p className="text-muted-foreground">
            Explore all the beautiful animations available in the app
          </p>
        </FadeIn>

        {/* Button Animations */}
        <AnimatedDiv variant="fadeInUp" className="mb-16">
          <h3 className="font-heading font-bold text-2xl mb-6 text-center">
            Button Animations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <Button variant="default" size="lg" className="w-full mb-2">
                Default Scale
              </Button>
              <p className="text-sm text-muted-foreground">Hover to scale</p>
            </div>

            <div className="text-center">
              <Button variant="cta" size="lg" animation="glow" className="w-full mb-2">
                Glow Effect
              </Button>
              <p className="text-sm text-muted-foreground">Hover for glow</p>
            </div>

            <div className="text-center">
              <Button variant="default" size="lg" animation="lift" className="w-full mb-2">
                Lift Effect
              </Button>
              <p className="text-sm text-muted-foreground">Hover to lift</p>
            </div>

            <div className="text-center">
              <Button variant="cta" size="lg" animation="shine" className="w-full mb-2">
                Shine Effect
              </Button>
              <p className="text-sm text-muted-foreground">Hover for shine</p>
            </div>
          </div>
        </AnimatedDiv>

        {/* Framer Motion Buttons */}
        <AnimatedDiv variant="fadeInUp" delay={0.2} className="mb-16">
          <h3 className="font-heading font-bold text-2xl mb-6 text-center">
            Advanced Button Animations (Framer Motion)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <AnimatedButton variant="scale" className="w-full mb-2">
                <Button variant="default" size="lg" className="w-full pointer-events-none">
                  Scale Animation
                </Button>
              </AnimatedButton>
              <p className="text-sm text-muted-foreground">Interactive scale</p>
            </div>

            <div className="text-center">
              <AnimatedButton variant="bounce" className="w-full mb-2">
                <Button variant="default" size="lg" className="w-full pointer-events-none">
                  Bounce Animation
                </Button>
              </AnimatedButton>
              <p className="text-sm text-muted-foreground">Bouncy effect</p>
            </div>

            <div className="text-center">
              <AnimatedButton variant="pulse" className="w-full mb-2">
                <Button variant="default" size="lg" className="w-full pointer-events-none">
                  Pulse Animation
                </Button>
              </AnimatedButton>
              <p className="text-sm text-muted-foreground">Continuous pulse</p>
            </div>

            <div className="text-center">
              <AnimatedButton variant="glow" className="w-full mb-2">
                <Button variant="default" size="lg" className="w-full pointer-events-none">
                  Glow Animation
                </Button>
              </AnimatedButton>
              <p className="text-sm text-muted-foreground">Glow on hover</p>
            </div>
          </div>
        </AnimatedDiv>

        {/* Card Animations */}
        <div className="mb-16">
          <h3 className="font-heading font-bold text-2xl mb-6 text-center">
            Card Entrance Animations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedCard delay={0}>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <h4 className="font-bold text-lg mb-2">Fade In Up</h4>
                <p className="text-muted-foreground text-sm">
                  Card appears from bottom with fade
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.1}>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <h4 className="font-bold text-lg mb-2">Staggered</h4>
                <p className="text-muted-foreground text-sm">
                  Cards appear one after another
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2} hoverEffect={true}>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <h4 className="font-bold text-lg mb-2">Hover Lift</h4>
                <p className="text-muted-foreground text-sm">
                  Hover over me to see effect
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>

        {/* Directional Animations */}
        <div className="mb-16">
          <h3 className="font-heading font-bold text-2xl mb-6 text-center">
            Directional Entrance Animations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <SlideIn direction="left">
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-center">
                <h4 className="font-bold mb-2">From Left</h4>
                <p className="text-sm text-muted-foreground">Slides in from left</p>
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-center">
                <h4 className="font-bold mb-2">From Right</h4>
                <p className="text-sm text-muted-foreground">Slides in from right</p>
              </div>
            </SlideIn>

            <SlideIn direction="up">
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-center">
                <h4 className="font-bold mb-2">From Bottom</h4>
                <p className="text-sm text-muted-foreground">Slides in from bottom</p>
              </div>
            </SlideIn>

            <SlideIn direction="down">
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-center">
                <h4 className="font-bold mb-2">From Top</h4>
                <p className="text-sm text-muted-foreground">Slides in from top</p>
              </div>
            </SlideIn>
          </div>
        </div>

        {/* CSS Animations */}
        <div>
          <h3 className="font-heading font-bold text-2xl mb-6 text-center">
            CSS Animation Classes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              className="bg-card border border-border rounded-xl p-6 text-center hover-lift"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse-slow">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-bold mb-2">Hover Lift</h4>
              <p className="text-sm text-muted-foreground">Class: hover-lift</p>
            </motion.div>

            <motion.div
              className="bg-card border border-border rounded-xl p-6 text-center hover-glow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center animate-float">
                <span className="text-2xl">✨</span>
              </div>
              <h4 className="font-bold mb-2">Hover Glow</h4>
              <p className="text-sm text-muted-foreground">Class: hover-glow</p>
            </motion.div>

            <motion.div
              className="bg-card border border-border rounded-xl p-6 text-center hover-scale"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl animate-rotate">⚡</span>
              </div>
              <h4 className="font-bold mb-2">Hover Scale</h4>
              <p className="text-sm text-muted-foreground">Class: hover-scale</p>
            </motion.div>
          </div>
        </div>

        {/* Usage Guide */}
        <FadeIn delay={0.5} className="mt-16 bg-primary/5 border border-primary/20 rounded-xl p-8">
          <h3 className="font-heading font-bold text-2xl mb-4 text-center">
            How to Use Animations
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold mb-2">CSS Classes</h4>
              <code className="block bg-card p-4 rounded text-sm">
                className="hover-lift hover-glow"
              </code>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Framer Motion Components</h4>
              <code className="block bg-card p-4 rounded text-sm">
                {"<AnimatedCard delay={0.1}>"}
              </code>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Button Animations</h4>
              <code className="block bg-card p-4 rounded text-sm">
                {"<Button animation=\"glow\">"}
              </code>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Custom Variants</h4>
              <code className="block bg-card p-4 rounded text-sm">
                {"<SlideIn direction=\"left\">"}
              </code>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default AnimationDemo;
