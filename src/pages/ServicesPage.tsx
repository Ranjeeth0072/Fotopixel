import { ImageIcon, Home, Compass, Wand2, Video, Grid3X3, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
const portfolio2 = '/assets/FLASH AMBIENT/DSC_9535.jpg';
const portfolio1 = '/assets/FLASH AMBIENT/AFTER/DSC_9535.jpg';

const services = [
  {
    icon: ImageIcon,
    title: 'Photo Enhancement',
    subtitle: 'HDR – Single Exposure – Flambient',
    description: 'Transform your real estate photographs into visual masterpieces with our Photo Enhancement service. We specialize in various techniques including HDR, single exposure, and flambient editing.',
    slug: 'photo-enhancement',
  },
  {
    icon: Home,
    title: 'Virtual Staging',
    subtitle: 'High Quality – Furniture Placement – Renovation',
    description: 'Maximize the attractiveness of your listings through our Virtual Staging service, where our skilled team uses advanced technology to beautifully furnish vacant spaces.',
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

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="section-container section-padding">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium mb-2 uppercase tracking-wide text-sm">WHAT WE OFFER</p>
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Our Services
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional real estate photo editing services that help your listings stand out and sell faster.
          </p>
        </div>

        {/* Before/After Showcase */}
        <div className="mb-16">
          <BeforeAfterSlider
            beforeImage={portfolio1}
            afterImage={portfolio2}
            className="w-full max-w-3xl mx-auto"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={`/services/${service.slug}`}
              className="group bg-card border border-border rounded-xl p-6 md:p-8 hover-lift hover-glow transition-all cursor-pointer"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                <service.icon className="w-7 h-7 md:w-8 md:h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-primary font-medium mb-4">{service.subtitle}</p>
              <p className="text-muted-foreground">
                {service.description}
              </p>
              <div className="mt-6 flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Learn More 
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
