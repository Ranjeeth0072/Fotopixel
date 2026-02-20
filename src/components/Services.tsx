import { ImageIcon, Home, Compass, Wand2, Video, Grid3X3, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import BeforeAfterSlider from './BeforeAfterSlider';
const portfolio2 = '/assets/virtual staging/1.jpeg';
const portfolio1 = '/assets/virtual staging/After/1.jpeg';
import { AnimatedCard, AnimatedDiv, StaggerContainer, FadeIn } from './AnimatedComponents';
import { motion } from 'framer-motion';

const services = [
  {
    icon: ImageIcon,
    title: 'Photo Enhancement',
    subtitle: 'HDR – Single Exposure – Flambient',
    description: 'Transform your real estate photographs into visual masterpieces with our Photo Enhancement service. We specialize in various techniques including // HDR, single exposure, and flambient editing.',
    slug: 'photo-enhancement',
  },
  {
    icon: Home,
    title: 'Virtual Staging',
    subtitle: 'High Quality – Furniture Placement – Renovation',
    description: 'Maximize the attractiveness of your listings through our Virtual Staging service, where our skilled team uses advanced tec// hnology to beautifully furnish vacant spaces.',
    slug: 'virtual-staging',
  },
  // {
  //   icon: Compass,
  //   title: '360° Panorama',
  //   subtitle: 'HDR – Single Exposure',
  //   description: 'Experience a new dimension in property showcasing with our 360° Panorama Photo Stitching and Editing service for immersive virtual tours.',
  //   slug: '360-panorama',
  // },
  // {
  //   icon: Wand2,
  //   title: 'Photo Manipulation',
  //   subtitle: 'Object Removal – Day To Dusk – Add Fire',
  //   description: 'Enhance your real estate images with our Photo Manipulation service, expertly adding warmth, removing unwanted objects, and transforming day scenes to twilight.',
  //   slug: 'photo-manipulation',
  // },
  {
    icon: Video,
    title: 'Video Editing',
    subtitle: 'Seamless Transitions – Cinematic Effects',
    description: 'Bring your property listings to life with our professional Video Editing service, crafting engaging and dynamic visual narratives with cinematic finesse.',
    slug: 'video-editing',
  },
  {
    icon: Grid3X3,
    title: 'Floor Plan',
    subtitle: '2D – 3D',
    description: 'We transform sketches into 2D or 3D floor plans, creating detailed layouts that accurately depict room sizes and spatial arrangements.',
    slug: 'floor-plan',
  },
  {
    icon: Globe,
    title: 'Real Estate Website',
    subtitle: 'Custom Design – Responsive – SEO Optimized',
    description: 'We create stunning, responsive real estate websites that showcase your properties beautifully and help you attract more clients online.',
    slug: 'real-estate-website',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-background section-padding">
      <div className="section-container">
        <FadeIn className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium mb-2 uppercase tracking-wide text-sm">THIS IS WHAT WE DO</p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-foreground">
            Our Services
          </h2>
        </FadeIn>

        {/* Before/After Showcase */}
        <AnimatedDiv variant="fadeInUp" className="mb-12 md:mb-16">
          <BeforeAfterSlider
            beforeImage={portfolio1}
            afterImage={portfolio2}
            className="w-full max-w-3xl mx-auto"
          />
        </AnimatedDiv>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {services.map((service, index) => (
            <AnimatedCard
              key={index}
              delay={index}
              className="group"
            >
              <Link
                to={`/services/${service.slug}`}
                className="block bg-card border border-border rounded-xl p-5 md:p-6 hover-glow transition-all cursor-pointer h-full"
              >
                <motion.div 
                  className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                >
                  <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </motion.div>
                <h3 className="font-heading font-bold text-lg md:text-xl text-foreground mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">{service.subtitle}</p>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {service.description}
                </p>
              </Link>
            </AnimatedCard>
          ))}
        </StaggerContainer>

        <AnimatedDiv variant="fadeInUp" delay={0.5} className="text-center mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/services">
            <Button variant="cta" size="lg" animation="glow">
              VIEW ALL SERVICES
            </Button>
          </Link>
          <Link to="/portfolio">
            <Button variant="outline" size="lg" animation="scale" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              EXPLORE PORTFOLIO
            </Button>
          </Link>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default Services;
