import { ImageIcon, Home, Compass, Wand2, Video, Grid3X3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BeforeAfterSlider from './BeforeAfterSlider';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';

const services = [
  {
    icon: ImageIcon,
    title: 'Photo Enhancement',
    subtitle: 'HDR – Single Exposure – Flambient',
    description: 'Transform your real estate photographs into visual masterpieces with our Photo Enhancement service. We specialize in various techniques including HDR, single exposure, and flambient editing.',
  },
  {
    icon: Home,
    title: 'Virtual Staging',
    subtitle: 'High Quality – Furniture Placement – Renovation',
    description: 'Maximize the attractiveness of your listings through our Virtual Staging service, where our skilled team uses advanced technology to beautifully furnish vacant spaces.',
  },
  {
    icon: Compass,
    title: '360° Panorama',
    subtitle: 'HDR – Single Exposure',
    description: 'Experience a new dimension in property showcasing with our 360° Panorama Photo Stitching and Editing service for immersive virtual tours.',
  },
  {
    icon: Wand2,
    title: 'Photo Manipulation',
    subtitle: 'Object Removal – Day To Dusk – Add Fire',
    description: 'Enhance your real estate images with our Photo Manipulation service, expertly adding warmth, removing unwanted objects, and transforming day scenes to twilight.',
  },
  {
    icon: Video,
    title: 'Video Editing',
    subtitle: 'Seamless Transitions – Cinematic Effects',
    description: 'Bring your property listings to life with our professional Video Editing service, crafting engaging and dynamic visual narratives with cinematic finesse.',
  },
  {
    icon: Grid3X3,
    title: 'Floor Plan',
    subtitle: '2D – 3D',
    description: 'We transform sketches into 2D or 3D floor plans, creating detailed layouts that accurately depict room sizes and spatial arrangements.',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-background section-padding">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium mb-2 uppercase tracking-wide text-sm">THIS IS WHAT WE DO</p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-foreground">
            Our Services
          </h2>
        </div>

        {/* Before/After Showcase */}
        <div className="mb-12 md:mb-16">
          <BeforeAfterSlider
            beforeImage={portfolio1}
            afterImage={portfolio2}
            className="h-[250px] sm:h-[300px] md:h-[400px] max-w-4xl mx-auto"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-5 md:p-6 hover-lift hover-glow transition-all"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-lg md:text-xl text-foreground mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-primary font-medium mb-3">{service.subtitle}</p>
              <p className="text-muted-foreground text-sm line-clamp-3">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <Button variant="cta" size="lg">
            VIEW ALL SERVICES
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;