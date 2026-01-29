import { useParams, Link } from 'react-router-dom';
import { ImageIcon, Home, Compass, Wand2, Video, Grid3X3, Globe, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';
import heroLivingRoom from '@/assets/hero-living-room.jpg';
import heroBathroom from '@/assets/hero-bathroom.jpg';

const servicesData: Record<string, {
  icon: typeof ImageIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  howWeWork: string[];
}> = {
  'photo-enhancement': {
    icon: ImageIcon,
    title: 'Photo Enhancement',
    subtitle: 'HDR – Single Exposure – Flambient',
    description: 'Transform your real estate photographs into visual masterpieces with our Photo Enhancement service. We specialize in various techniques including HDR, single exposure, and flambient editing to bring out the best in every property image.',
    features: ['HDR Processing', 'Color Correction', 'Exposure Balancing', 'Window Masking', 'Sky Replacement', 'Perspective Correction'],
    howWeWork: ['Upload your raw images', 'Our experts analyze each photo', 'Apply professional enhancement techniques', 'Quality check by senior editors', 'Deliver within 12 hours'],
  },
  'virtual-staging': {
    icon: Home,
    title: 'Virtual Staging',
    subtitle: 'High Quality – Furniture Placement – Renovation',
    description: 'Maximize the attractiveness of your listings through our Virtual Staging service. Our skilled team uses advanced technology to beautifully furnish vacant spaces, helping buyers visualize their future home.',
    features: ['Furniture Addition', 'Style Customization', 'Room Renovation', 'Décor Enhancement', 'Multiple Style Options', 'Photorealistic Results'],
    howWeWork: ['Send vacant room photos', 'Choose your preferred style', 'Our designers create staging', 'Review and request revisions', 'Receive final staged images'],
  },
  '360-panorama': {
    icon: Compass,
    title: '360° Panorama',
    subtitle: 'HDR – Single Exposure',
    description: 'Experience a new dimension in property showcasing with our 360° Panorama Photo Stitching and Editing service for immersive virtual tours that let buyers explore properties from anywhere.',
    features: ['Photo Stitching', 'HDR Enhancement', 'Color Correction', 'Ghost Removal', 'Tripod Removal', 'Interactive Tours'],
    howWeWork: ['Capture 360° images', 'Upload to our platform', 'Seamless stitching process', 'Enhancement and corrections', 'Deliver tour-ready panoramas'],
  },
  'photo-manipulation': {
    icon: Wand2,
    title: 'Photo Manipulation',
    subtitle: 'Object Removal – Day To Dusk – Add Fire',
    description: 'Enhance your real estate images with our Photo Manipulation service. We expertly add warmth, remove unwanted objects, and transform day scenes to twilight for stunning visual impact.',
    features: ['Object Removal', 'Day to Dusk', 'Sky Replacement', 'Lawn Enhancement', 'Fire & Lighting Effects', 'TV Screen Replacement'],
    howWeWork: ['Submit your photos', 'Specify manipulation needs', 'Expert editing process', 'Quality assurance check', 'Fast delivery guarantee'],
  },
  'video-editing': {
    icon: Video,
    title: 'Video Editing',
    subtitle: 'Seamless Transitions – Cinematic Effects',
    description: 'Bring your property listings to life with our professional Video Editing service. We craft engaging and dynamic visual narratives with cinematic finesse that captivate potential buyers.',
    features: ['Color Grading', 'Smooth Transitions', 'Music Integration', 'Title & Graphics', 'Drone Footage Editing', 'Social Media Optimization'],
    howWeWork: ['Upload raw footage', 'Share your vision', 'Professional editing', 'Review and feedback', 'Final export in multiple formats'],
  },
  'floor-plan': {
    icon: Grid3X3,
    title: 'Floor Plan',
    subtitle: '2D – 3D',
    description: 'We transform sketches into 2D or 3D floor plans, creating detailed layouts that accurately depict room sizes and spatial arrangements for better property visualization.',
    features: ['2D Floor Plans', '3D Floor Plans', 'Site Plans', 'Furnished Plans', 'Custom Branding', 'Multiple Formats'],
    howWeWork: ['Send sketches or blueprints', 'Specify dimensions', 'Design creation', 'Review and revisions', 'Deliver in your format'],
  },
  'real-estate-website': {
    icon: Globe,
    title: 'Real Estate Website',
    subtitle: 'Custom Design – Responsive – SEO Optimized',
    description: 'We create stunning, responsive real estate websites that showcase your properties beautifully. Our websites are designed to attract more clients and help you succeed in the digital marketplace.',
    features: ['Custom Design', 'Mobile Responsive', 'SEO Optimized', 'Property Listings', 'Lead Capture Forms', 'Fast Loading Speed'],
    howWeWork: ['Discuss your requirements', 'Design mockups', 'Development phase', 'Content integration', 'Launch and support'],
  },
};

const beforeAfterPairs = [
  { before: portfolio1, after: portfolio2 },
  { before: portfolio3, after: portfolio4 },
  { before: heroLivingRoom, after: heroBathroom },
  { before: portfolio2, after: portfolio1 },
  { before: portfolio4, after: portfolio3 },
];

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="section-container section-padding text-center">
          <h1 className="font-heading font-bold text-3xl text-foreground mb-4">Service Not Found</h1>
          <Link to="/services">
            <Button variant="cta">View All Services</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-dark section-padding">
        <div className="section-container">
          <Link to="/services" className="inline-flex items-center gap-2 text-dark-foreground/70 hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="font-heading font-bold text-3xl md:text-4xl text-dark-foreground">
                {service.title}
              </h1>
              <p className="text-primary font-medium">{service.subtitle}</p>
            </div>
          </div>
          <p className="text-dark-foreground/80 max-w-3xl text-lg">
            {service.description}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="section-container section-padding">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8 text-center">
          What's Included
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 bg-card border border-border rounded-lg p-4">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-secondary section-padding">
        <div className="section-container">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-12 text-center">
            How We Work
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {service.howWeWork.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {index + 1}
                </div>
                <p className="text-foreground text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="section-container section-padding">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8 text-center">
          Before & After Examples
        </h2>
        <div className="space-y-8">
          {beforeAfterPairs.map((pair, index) => (
            <BeforeAfterSlider
              key={index}
              beforeImage={pair.before}
              afterImage={pair.after}
              className="h-[250px] md:h-[350px] max-w-4xl mx-auto"
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding">
        <div className="section-container text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
            Try our {service.title} service with 3 free photos and experience the quality difference.
          </p>
          <Link to="/try-free">
            <Button
              variant="outline"
              size="xl"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/80 border-0"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
