import { ImageIcon, Home, Compass, Wand2, Video, Grid3X3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: ImageIcon,
    title: 'Photo Enhancement',
    subtitle: 'HDR – Single Exposure – Flambient',
    description: 'Transform your real estate photographs into visual masterpieces with our Photo Enhancement service. We specialize in various techniques including HDR, single exposure, and flambient editing.',
    price: '€1.00',
    delivery: '<24 hours',
  },
  {
    icon: Home,
    title: 'Virtual Staging',
    subtitle: 'High Quality – Furniture Placement – Renovation',
    description: 'Maximize the attractiveness of your listings through our Virtual Staging service, where our skilled team uses advanced technology to beautifully furnish vacant spaces.',
    price: '€15.00',
    delivery: '<36 hours',
  },
  {
    icon: Compass,
    title: '360° Panorama',
    subtitle: 'HDR – Single Exposure',
    description: 'Experience a new dimension in property showcasing with our 360° Panorama Photo Stitching and Editing service for immersive virtual tours.',
    price: '€5.00',
    delivery: '<72 hours',
  },
  {
    icon: Wand2,
    title: 'Photo Manipulation',
    subtitle: 'Object Removal – Day To Dusk – Add Fire',
    description: 'Enhance your real estate images with our Photo Manipulation service, expertly adding warmth, removing unwanted objects, and transforming day scenes to twilight.',
    price: 'Custom',
    delivery: 'Contact us',
  },
  {
    icon: Video,
    title: 'Video Editing',
    subtitle: 'Seamless Transitions – Cinematic Effects',
    description: 'Bring your property listings to life with our professional Video Editing service, crafting engaging and dynamic visual narratives with cinematic finesse.',
    price: 'Custom',
    delivery: 'Contact us',
  },
  {
    icon: Grid3X3,
    title: 'Floor Plan',
    subtitle: '2D – 3D',
    description: 'We transform sketches into 2D or 3D floor plans, creating detailed layouts that accurately depict room sizes and spatial arrangements.',
    price: 'Custom',
    delivery: 'Contact us',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-background section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 uppercase tracking-wide">THIS IS WHAT WE DO</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover-lift hover-glow transition-all"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-primary font-medium mb-3">{service.subtitle}</p>
              <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                {service.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="font-heading font-bold text-lg text-primary">{service.price}</p>
                  <p className="text-xs text-muted-foreground">{service.delivery}</p>
                </div>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
