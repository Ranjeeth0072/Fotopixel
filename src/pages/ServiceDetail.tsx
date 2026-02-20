import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ImageIcon,
  Home,
  Compass,
  Wand2,
  Video,
  Grid3X3,
  Globe,
  ArrowLeft,
  CheckCircle,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { FadeIn, AnimatedCard, StaggerContainer, SlideIn, ScaleIn } from "@/components/AnimatedComponents";
import VideoModal from "../components/VideoModal";
import { motion } from "framer-motion";
const video1 = "https://player.vimeo.com/video/1166657515?autoplay=0&title=0&byline=0&portrait=0&controls=1";
const video3 = "https://player.vimeo.com/video/1166657592?autoplay=0&title=0&byline=0&portrait=0&controls=1"; // Replace with your second video ID if different

//virtual staging
const vs1 = "/assets/virtual staging/1.jpeg";
const vs1After = "/assets/virtual staging/After/1.jpeg";
const vs2 = "/assets/virtual staging/2.jpeg";
const vs2After = "/assets/virtual staging/After/2.jpeg";
const vs3 = "/assets/virtual staging/3.jpeg";
const vs3After = "/assets/virtual staging/After/3.jpeg";
const vs4 = "/assets/virtual staging/4.jpeg";
const vs4After = "/assets/virtual staging/After/4.jpeg";
const vs5 = "/assets/virtual staging/5.jpeg";
const vs5After = "/assets/virtual staging/After/5.jpeg";

// Single Image Enhancement
const singleBefore1 = "/assets/SINGLE IMAGE ENHANCEMENT/Stand 767-1.jpg";
const singleAfter1 = "/assets/SINGLE IMAGE ENHANCEMENT/AFTER/Stand 767-1.jpg";
const singleBefore2 = "/assets/SINGLE IMAGE ENHANCEMENT/Stand 767-24.jpg";
const singleAfter2 = "/assets/SINGLE IMAGE ENHANCEMENT/AFTER/Stand 767-24.jpg";
const singleBefore3 = "/assets/SINGLE IMAGE ENHANCEMENT/Stand 767-25.jpg";
const singleAfter3 = "/assets/SINGLE IMAGE ENHANCEMENT/AFTER/Stand 767-25.jpg";

// Multi Image Enhancement
const multiBefore1 = "/assets/MULTI IMAGE ENHANCEMENT/_DSC5867.jpg";
const multiAfter1 = "/assets/MULTI IMAGE ENHANCEMENT/AFTER/_DSC5866.jpg";
const multiBefore2 = "/assets/MULTI IMAGE ENHANCEMENT/_DSC5876.jpg";
const multiAfter2 = "/assets/MULTI IMAGE ENHANCEMENT/AFTER/_DSC5875.jpg";
const multiBefore3 = "/assets/MULTI IMAGE ENHANCEMENT/_DSC6015.jpg";
const multiAfter3 = "/assets/MULTI IMAGE ENHANCEMENT/AFTER/_DSC6014.jpg";

// Flash Ambient
const flashBefore1 = "/assets/FLASH AMBIENT/DSC_3971.jpg";
const flashAfter1 = "/assets/FLASH AMBIENT/AFTER/DSC_3970.jpg";
const flashBefore2 = "/assets/FLASH AMBIENT/DSC_4044.jpg";
const flashAfter2 = "/assets/FLASH AMBIENT/AFTER/DSC_4040.jpg";
const flashBefore3 = "/assets/FLASH AMBIENT/DSC_9524.jpg";
const flashAfter3 = "/assets/FLASH AMBIENT/AFTER/DSC_9524.jpg";

// Day to Dusk
const duskBefore1 = "/assets/DAY TO DUSK/1.jpg";
const duskAfter1 = "/assets/DAY TO DUSK/AFTER/1.jpg";
const duskBefore2 = "/assets/DAY TO DUSK/2.jpg";
const duskAfter2 = "/assets/DAY TO DUSK/AFTER/2.jpg";
const duskBefore3 = "/assets/DAY TO DUSK/3.jpg";
const duskAfter3 = "/assets/DAY TO DUSK/AFTER/3.jpg";

/** Section keys for ordering – entire page structure can differ per service */
type SectionKey =
  | "hero"
  | "stats"
  | "features"
  | "howWeWork"
  | "gallery"
  | "cta";

/** Hero: full design variant (not just position) */
type HeroStyle = "banner" | "split" | "card" | "minimal";
type FeaturesLayout = "grid" | "list" | "bento" | "twoCol";
type HowWeWorkLayout = "grid" | "timeline" | "steps" | "flow";
type CtaLayout = "centered" | "split" | "minimal";

/** Per-service theme: colors, section design, order, and optional blocks */
type ServiceTheme = {
  hero: string;
  heroIconBg: string;
  heroStyle: HeroStyle;
  featuresSection: string;
  featureCard: string;
  featureIcon: string;
  featuresLayout: FeaturesLayout;
  featuresHeading: string;
  howWeWorkSection: string;
  stepNumber: string;
  howWeWorkLayout: HowWeWorkLayout;
  howWeWorkHeading: string;
  ctaSection: string;
  ctaButton: string;
  ctaLayout: CtaLayout;
  sectionOrder: SectionKey[];
  showStatsBar: boolean;
};

const serviceThemes: Record<string, ServiceTheme> = {
  "photo-enhancement": {
    hero: "bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900",
    heroIconBg: "bg-blue-500/20 text-blue-400",
    heroStyle: "banner",
    featuresSection: "bg-slate-50 dark:bg-slate-950/30",
    featureCard:
      "bg-white dark:bg-slate-900/30 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md",
    featureIcon: "text-blue-600 dark:text-blue-400",
    featuresLayout: "grid",
    featuresHeading: "What's Included",
    howWeWorkSection:
      "bg-gradient-to-b from-slate-50 to-white dark:from-slate-950/20 dark:to-background",
    stepNumber:
      "bg-blue-600 text-white ring-4 ring-blue-100 dark:ring-blue-900",
    howWeWorkLayout: "grid",
    howWeWorkHeading: "How We Work",
    ctaSection: "bg-gradient-to-r from-blue-600 to-blue-700",
    ctaButton: "bg-white text-blue-700 hover:bg-slate-100 border-0",
    ctaLayout: "centered",
    sectionOrder: ["hero", "stats", "features", "howWeWork", "gallery", "cta"],
    showStatsBar: true,
  },
  "virtual-staging": {
    hero: "bg-gradient-to-br from-amber-900/90 via-amber-800 to-stone-900",
    heroIconBg: "bg-amber-500/25 text-amber-400",
    heroStyle: "split",
    featuresSection: "bg-stone-50 dark:bg-stone-950/30",
    featureCard:
      "bg-white dark:bg-stone-900/30 border-amber-200/60 dark:border-amber-700 hover:border-amber-400 dark:hover:border-amber-500 hover:shadow-amber-100",
    featureIcon: "text-amber-600 dark:text-amber-400",
    featuresLayout: "list",
    featuresHeading: "What You Get",
    howWeWorkSection:
      "bg-gradient-to-b from-amber-50/80 to-white dark:from-amber-950/20 dark:to-background",
    stepNumber:
      "bg-amber-600 text-white ring-4 ring-amber-100 dark:ring-amber-900",
    howWeWorkLayout: "timeline",
    howWeWorkHeading: "Our Process",
    ctaSection: "bg-gradient-to-r from-amber-600 to-amber-700",
    ctaButton: "bg-white text-amber-800 hover:bg-amber-50 border-0",
    ctaLayout: "split",
    sectionOrder: ["hero", "features", "howWeWork", "gallery", "cta"],
    showStatsBar: false,
  },
  "360-panorama": {
    hero: "bg-gradient-to-br from-teal-900 via-cyan-900 to-slate-900",
    heroIconBg: "bg-teal-400/20 text-teal-300",
    heroStyle: "card",
    featuresSection: "bg-teal-50 dark:bg-teal-950/30",
    featureCard:
      "bg-white dark:bg-teal-900/30 border-teal-200 dark:border-teal-700 hover:border-teal-400 dark:hover:border-teal-500 hover:shadow-lg hover:shadow-teal-100/50",
    featureIcon: "text-teal-600 dark:text-teal-400",
    featuresLayout: "bento",
    featuresHeading: "Capabilities",
    howWeWorkSection:
      "bg-gradient-to-b from-cyan-50/50 to-white dark:from-cyan-950/20 dark:to-background",
    stepNumber:
      "bg-teal-600 text-white ring-4 ring-teal-100 dark:ring-teal-900",
    howWeWorkLayout: "flow",
    howWeWorkHeading: "From Capture to Delivery",
    ctaSection: "bg-gradient-to-r from-teal-600 to-cyan-600",
    ctaButton: "bg-white text-teal-700 hover:bg-teal-50 border-0",
    ctaLayout: "minimal",
    sectionOrder: ["hero", "howWeWork", "features", "gallery", "cta"],
    showStatsBar: true,
  },
  "photo-manipulation": {
    hero: "bg-gradient-to-br from-orange-900/80 via-amber-900 to-slate-900",
    heroIconBg: "bg-orange-500/25 text-orange-300",
    heroStyle: "split",
    featuresSection: "bg-orange-50 dark:bg-orange-950/30",
    featureCard:
      "bg-white dark:bg-orange-900/30 border-orange-200 dark:border-orange-700 hover:border-orange-400 dark:hover:border-orange-500 hover:shadow-orange-100",
    featureIcon: "text-orange-600 dark:text-orange-400",
    featuresLayout: "twoCol",
    featuresHeading: "What We Offer",
    howWeWorkSection:
      "bg-gradient-to-b from-orange-50/50 to-white dark:from-orange-950/20 dark:to-background",
    stepNumber:
      "bg-orange-600 text-white ring-4 ring-orange-100 dark:ring-orange-900",
    howWeWorkLayout: "timeline",
    howWeWorkHeading: "Step by Step",
    ctaSection: "bg-gradient-to-r from-orange-600 to-amber-600",
    ctaButton: "bg-white text-orange-800 hover:bg-orange-50 border-0",
    ctaLayout: "split",
    sectionOrder: ["hero", "features", "howWeWork", "gallery", "cta"],
    showStatsBar: false,
  },
  "video-editing": {
    hero: "bg-gradient-to-br from-violet-900 via-purple-900 to-slate-900",
    heroIconBg: "bg-violet-400/25 text-violet-300",
    heroStyle: "minimal",
    featuresSection: "bg-violet-50 dark:bg-violet-950/30",
    featureCard:
      "bg-white dark:bg-violet-900/30 border-violet-200 dark:border-violet-700 hover:border-violet-400 dark:hover:border-violet-500 hover:shadow-violet-100",
    featureIcon: "text-violet-600 dark:text-violet-400",
    featuresLayout: "list",
    featuresHeading: "Included in Every Edit",
    howWeWorkSection:
      "bg-gradient-to-b from-violet-50/50 to-white dark:from-violet-950/20 dark:to-background",
    stepNumber:
      "bg-violet-600 text-white ring-4 ring-violet-100 dark:ring-violet-900",
    howWeWorkLayout: "flow",
    howWeWorkHeading: "Your Workflow",
    ctaSection: "bg-gradient-to-r from-violet-600 to-purple-600",
    ctaButton: "bg-white text-violet-700 hover:bg-violet-50 border-0",
    ctaLayout: "centered",
    sectionOrder: ["hero", "stats", "features", "howWeWork", "gallery", "cta"],
    showStatsBar: true,
  },
  "floor-plan": {
    hero: "bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900",
    heroIconBg: "bg-slate-400/20 text-slate-300",
    heroStyle: "banner",
    featuresSection: "bg-slate-50 dark:bg-slate-950/30",
    featureCard:
      "bg-white dark:bg-slate-900/30 border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:shadow-md",
    featureIcon: "text-slate-600 dark:text-slate-400",
    featuresLayout: "bento",
    featuresHeading: "What's Included",
    howWeWorkSection:
      "bg-gradient-to-b from-slate-100 to-white dark:from-slate-950/20 dark:to-background",
    stepNumber:
      "bg-slate-700 text-white ring-4 ring-slate-200 dark:ring-slate-800",
    howWeWorkLayout: "grid",
    howWeWorkHeading: "How We Work",
    ctaSection: "bg-gradient-to-r from-slate-700 to-slate-800",
    ctaButton: "bg-white text-slate-800 hover:bg-slate-100 border-0",
    ctaLayout: "split",
    sectionOrder: ["hero", "howWeWork", "features", "gallery", "cta"],
    showStatsBar: false,
  },
  "real-estate-website": {
    hero: "bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900",
    heroIconBg: "bg-indigo-400/25 text-indigo-300",
    heroStyle: "card",
    featuresSection: "bg-indigo-50 dark:bg-indigo-950/30",
    featureCard:
      "bg-white dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-indigo-100",
    featureIcon: "text-indigo-600 dark:text-indigo-400",
    featuresLayout: "twoCol",
    featuresHeading: "Built-In Features",
    howWeWorkSection:
      "bg-gradient-to-b from-indigo-50/50 to-white dark:from-indigo-950/20 dark:to-background",
    stepNumber:
      "bg-indigo-600 text-white ring-4 ring-indigo-100 dark:ring-indigo-900",
    howWeWorkLayout: "steps",
    howWeWorkHeading: "From Idea to Launch",
    ctaSection: "bg-gradient-to-r from-indigo-600 to-blue-600",
    ctaButton: "bg-white text-indigo-700 hover:bg-indigo-50 border-0",
    ctaLayout: "centered",
    sectionOrder: ["hero", "features", "howWeWork", "gallery", "cta"],
    showStatsBar: false,
  },
};

const servicesData: Record<
  string,
  {
    icon: typeof ImageIcon;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    howWeWork: string[];
  }
> = {
  "photo-enhancement": {
    icon: ImageIcon,
    title: "Photo Enhancement",
    subtitle: "HDR – Single Exposure – Flambient",
    description:
      "Transform your real estate photographs into visual masterpieces with our Photo Enhancement service. We specialize in various techniques including HDR, single exposure, and flambient editing to bring out the best in every property image.",
    features: [
      "HDR Processing",
      "Color Correction",
      "Exposure Balancing",
      "Window Masking",
      "Sky Replacement",
      "Perspective Correction",
    ],
    howWeWork: [
      "Upload your raw images",
      "Our experts analyze each photo",
      "Apply professional enhancement techniques",
      "Quality check by senior editors",
      "Deliver within 12 hours",
    ],
  },
  "virtual-staging": {
    icon: Home,
    title: "Virtual Staging",
    subtitle: "High Quality – Furniture Placement – Renovation",
    description:
      "Maximize the attractiveness of your listings through our Virtual Staging service. Our skilled team uses advanced technology to beautifully furnish vacant spaces, helping buyers visualize their future home.",
    features: [
      "Furniture Addition",
      "Style Customization",
      "Room Renovation",
      "Décor Enhancement",
      "Multiple Style Options",
      "Photorealistic Results",
    ],
    howWeWork: [
      "Send vacant room photos",
      "Choose your preferred style",
      "Our designers create staging",
      "Review and request revisions",
      "Receive final staged images",
    ],
  },
  "360-panorama": {
    icon: Compass,
    title: "360° Panorama",
    subtitle: "HDR – Single Exposure",
    description:
      "Experience a new dimension in property showcasing with our 360° Panorama Photo Stitching and Editing service for immersive virtual tours that let buyers explore properties from anywhere.",
    features: [
      "Photo Stitching",
      "HDR Enhancement",
      "Color Correction",
      "Ghost Removal",
      "Tripod Removal",
      "Interactive Tours",
    ],
    howWeWork: [
      "Capture 360° images",
      "Upload to our platform",
      "Seamless stitching process",
      "Enhancement and corrections",
      "Deliver tour-ready panoramas",
    ],
  },
  "photo-manipulation": {
    icon: Wand2,
    title: "Photo Manipulation",
    subtitle: "Object Removal – Day To Dusk – Add Fire",
    description:
      "Enhance your real estate images with our Photo Manipulation service. We expertly add warmth, remove unwanted objects, and transform day scenes to twilight for stunning visual impact.",
    features: [
      "Object Removal",
      "Day to Dusk",
      "Sky Replacement",
      "Lawn Enhancement",
      "Fire & Lighting Effects",
      "TV Screen Replacement",
    ],
    howWeWork: [
      "Submit your photos",
      "Specify manipulation needs",
      "Expert editing process",
      "Quality assurance check",
      "Fast delivery guarantee",
    ],
  },
  "video-editing": {
    icon: Video,
    title: "Video Editing",
    subtitle: "Seamless Transitions – Cinematic Effects",
    description:
      "Bring your property listings to life with our professional Video Editing service. We craft engaging and dynamic visual narratives with cinematic finesse that captivate potential buyers.",
    features: [
      "Color Grading",
      "Smooth Transitions",
      "Music Integration",
      "Title & Graphics",
      "Drone Footage Editing",
      "Social Media Optimization",
    ],
    howWeWork: [
      "Upload raw footage",
      "Share your vision",
      "Professional editing",
      "Review and feedback",
      "Final export in multiple formats",
    ],
  },
  "floor-plan": {
    icon: Grid3X3,
    title: "Floor Plan",
    subtitle: "2D – 3D",
    description:
      "We transform sketches into 2D or 3D floor plans, creating detailed layouts that accurately depict room sizes and spatial arrangements for better property visualization.",
    features: [
      "2D Floor Plans",
      "3D Floor Plans",
      "Site Plans",
      "Furnished Plans",
      "Custom Branding",
      "Multiple Formats",
    ],
    howWeWork: [
      "Send sketches or blueprints",
      "Specify dimensions",
      "Design creation",
      "Review and revisions",
      "Deliver in your format",
    ],
  },
  "real-estate-website": {
    icon: Globe,
    title: "Real Estate Website",
    subtitle: "Custom Design – Responsive – SEO Optimized",
    description:
      "We create stunning, responsive real estate websites that showcase your properties beautifully. Our websites are designed to attract more clients and help you succeed in the digital marketplace.",
    features: [
      "Custom Design",
      "Mobile Responsive",
      "SEO Optimized",
      "Property Listings",
      "Lead Capture Forms",
      "Fast Loading Speed",
    ],
    howWeWork: [
      "Discuss your requirements",
      "Design mockups",
      "Development phase",
      "Content integration",
      "Launch and support",
    ],
  },
};

const All = [
  { before: duskBefore1, after: duskAfter1 },
  { before: duskBefore2, after: duskAfter2 },
  { before: duskBefore3, after: duskAfter3 },
  { before: flashBefore2, after: flashAfter2 },
  { before: flashBefore3, after: flashAfter3 },
  { before: singleBefore1, after: singleAfter1 },
  { before: singleBefore2, after: singleAfter2 },
  { before: singleBefore3, after: singleAfter3 },
];

const categories = [
  "All",
  "Single Image Enhancement",
  "Multi Image Enhancement",
  "Flash Ambient",
  "Day to Dusk",
];

const categoryMap: Record<string, typeof All> = {
  "Single Image Enhancement": [
    { before: singleBefore1, after: singleAfter1 },
    { before: singleBefore2, after: singleAfter2 },
    { before: singleBefore3, after: singleAfter3 },
  ],
  "Multi Image Enhancement": [
    { before: multiBefore1, after: multiAfter1 },
    { before: multiBefore2, after: multiAfter2 },
    { before: multiBefore3, after: multiAfter3 },
  ],
  "Flash Ambient": [
    { before: flashBefore1, after: flashAfter1 },
    { before: flashBefore2, after: flashAfter2 },
    { before: flashBefore3, after: flashAfter3 },
  ],
  "Day to Dusk": [
    { before: duskBefore1, after: duskAfter1 },
    { before: duskBefore2, after: duskAfter2 },
    { before: duskBefore3, after: duskAfter3 },
  ],
};

const virtualStaging = [
  { before: vs1After, after: vs1 },
  { before: vs2After, after: vs2 },
  { before: vs3After, after: vs3 },
  { before: vs4After, after: vs4 },
  { before: vs5After, after: vs5 },
];

const ServiceDetail = () => {
  // Video modal state
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;
  const [selectedCategory, setSelectedCategory] = useState("All");

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="section-container section-padding text-center">
          <h1 className="font-heading font-bold text-3xl text-foreground mb-4">
            Service Not Found
          </h1>
          <Link to="/services">
            <Button variant="cta">View All Services</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;
  const theme =
    slug && serviceThemes[slug]
      ? serviceThemes[slug]
      : serviceThemes["photo-enhancement"];
  const sectionOrder = theme.sectionOrder.filter(
    (k) => k !== "stats" || theme.showStatsBar,
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex flex-col">
        {/* Hero – full design varies: banner, split, card, minimal */}
        <section
          style={{ order: sectionOrder.indexOf("hero") }}
          className={`section-padding ${theme.hero} ${theme.heroStyle === "card" ? "py-8 md:py-16" : ""}`}
        >
          {theme.heroStyle === "banner" && (
            <div className="section-container">
              <SlideIn direction="left">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Services
                </Link>
              </SlideIn>
              <FadeIn delay={0.2}>
                <div className="flex items-center gap-5 mb-6">
                  <motion.div
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center ${theme.heroIconBg}`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
                  >
                    <Icon className="w-10 h-10" />
                  </motion.div>
                  <div>
                    <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white">
                      {service.title}
                    </h1>
                    <p className="text-white/90 font-medium text-lg mt-1">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="text-white/85 max-w-3xl text-lg leading-relaxed">
                  {service.description}
                </p>
              </FadeIn>
            </div>
          )}
          {theme.heroStyle === "split" && (
            <div className="section-container grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <SlideIn direction="left">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Services
                  </Link>
                </SlideIn>
                <FadeIn delay={0.2}>
                  <motion.div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${theme.heroIconBg}`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>
                  <h1 className="font-heading font-bold text-3xl md:text-4xl text-white mb-3">
                    {service.title}
                  </h1>
                  <p className="text-white/90 font-medium mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-white/85 text-lg">{service.description}</p>
                </FadeIn>
              </div>
              <SlideIn direction="right" delay={0.4}>
                <div className="hidden md:block relative h-64 md:h-80 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl" />
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Icon className="w-24 h-24 text-white/30" />
                  </motion.div>
                </div>
              </SlideIn>
            </div>
          )}
          {theme.heroStyle === "card" && (
            <div className="section-container max-w-4xl mx-auto">
              <SlideIn direction="left">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Services
                </Link>
              </SlideIn>
              <ScaleIn delay={0.2}>
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                  <div className="text-center mb-6">
                    <motion.div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 ${theme.heroIconBg}`}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.4 }}
                    >
                      <Icon className="w-10 h-10" />
                    </motion.div>
                    <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-2">
                      {service.title}
                    </h1>
                    <p className="text-white/90 font-medium text-lg mb-4">
                      {service.subtitle}
                    </p>
                  </div>
                  <p className="text-white/90 text-lg text-center max-w-2xl mx-auto leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScaleIn>
            </div>
          )}
          {theme.heroStyle === "minimal" && (
            <div className="section-container">
              <SlideIn direction="left">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Services
                </Link>
              </SlideIn>
              <FadeIn delay={0.2}>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <motion.div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${theme.heroIconBg}`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
                  >
                    <Icon className="w-7 h-7" />
                  </motion.div>
                  <h1 className="font-heading font-bold text-2xl md:text-4xl text-white">
                    {service.title}
                  </h1>
                  <span className="text-white/60 font-medium">—</span>
                  <p className="text-white/80 font-medium">{service.subtitle}</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="text-white/85 max-w-2xl text-lg">
                  {service.description}
                </p>
              </FadeIn>
            </div>
          )}
        </section>
        {/* Stats bar – optional, design varies per service */}
        {theme.showStatsBar && (
          <section
            style={{ order: sectionOrder.indexOf("stats") }}
            className={`section-padding ${theme.hero} py-6`}
          >
            <StaggerContainer className="section-container">
              <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-white/90">
                <motion.span 
                  className="inline-flex items-center gap-2 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <Zap className="w-5 h-5 text-white" />
                  12hr delivery
                </motion.span>
                <motion.span 
                  className="font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  1000+ edits delivered
                </motion.span>
                <motion.span 
                  className="font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Unlimited revisions
                </motion.span>
              </div>
            </StaggerContainer>
          </section>
        )}
        {/* Features – responsive: grid on mobile, flex wrap on larger screens */}
        <section
          style={{ order: sectionOrder.indexOf("features") }}
          className={`section-container section-padding ${theme.featuresSection}`}
        >
          <FadeIn>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4 text-center">
              {theme.featuresHeading}
            </h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center gap-2 md:gap-3">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                className={`flex items-center gap-2 border rounded-lg px-3 py-2 text-sm font-medium ${theme.featureCard} ${theme.featureIcon}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </motion.div>
            ))}
          </StaggerContainer>
        </section>
        {/* How We Work – responsive: grid on mobile, flex wrap on larger screens */}
        <section
          style={{ order: sectionOrder.indexOf("howWeWork") }}
          className={`section-padding py-8 ${theme.howWeWorkSection}`}
        >
          <div className="section-container">
            <FadeIn>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4 text-center">
                {theme.howWeWorkHeading}
              </h2>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center gap-2 md:gap-3">
              {service.howWeWork.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 rounded-lg border border-border bg-card/50 px-3 py-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <motion.span
                    className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs flex-shrink-0 ${theme.stepNumber}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {index + 1}
                  </motion.span>
                  <span className="text-foreground text-sm font-medium">
                    {step}
                  </span>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </section>
        {/* Contact CTA - only for Real Estate Website service */}
        {slug === "real-estate-website" ? (
          <section
            style={{ order: sectionOrder.indexOf("gallery") }}
            className="section-container section-padding text-center"
          >
            <FadeIn>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
                Ready to Build Your Website?
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Let's discuss your vision and create a stunning real estate
                website that showcases your properties perfectly.
              </p>
            </FadeIn>
            <ScaleIn delay={0.4}>
              <Link to="/contact">
                <Button variant="cta" size="xl">
                  Click me
                </Button>
              </Link>
            </ScaleIn>
          </section>
        ) : slug === "video-editing" ? (
          <section
            style={{ order: sectionOrder.indexOf("gallery") }}
            className="section-container section-padding"
          >
            <FadeIn>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6 text-center">
                Sample Videos
              </h2>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Video 1 */}
              <motion.div 
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => { setActiveVideo(video1); setVideoModalOpen(true); }}
                tabIndex={0}
                role="button"
                aria-label="Play Property Showcase Video"
              >
                <div className="relative w-full" style={{ aspectRatio: '16/9', minHeight: '300px' }}>
                  <iframe
                    src={video1}
                    className="w-full h-full pointer-events-none"
                    style={{ aspectRatio: '16/9', minHeight: '300px' }}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Property Showcase Video"
                    tabIndex={-1}
                  ></iframe>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><polygon points="8,5 19,12 8,19" fill="currentColor" /></svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                    Property Showcase Video
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Professional real estate video editing with smooth
                    transitions, color grading, and cinematic effects.
                  </p>
                </div>
              </motion.div>

              {/* Video 2 */}
              <motion.div 
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -5 }}
                onClick={() => { setActiveVideo(video3); setVideoModalOpen(true); }}
                tabIndex={0}
                role="button"
                aria-label="Play Aerial Drone Footage"
              >
                <div className="relative w-full" style={{ aspectRatio: '16/9', minHeight: '300px' }}>
                  <iframe
                    src={video3}
                    className="w-full h-full pointer-events-none"
                    style={{ aspectRatio: '16/9', minHeight: '300px' }}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Aerial Drone Footage"
                    tabIndex={-1}
                  ></iframe>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><polygon points="8,5 19,12 8,19" fill="currentColor" /></svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                    Aerial Drone Footage
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Expert drone footage editing with dynamic angles and
                    seamless integration of ground and aerial shots.
                  </p>
                </div>
              </motion.div>
            </StaggerContainer>
            <FadeIn delay={0.4}>
              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                  Upload your raw footage to get professional editing
                </p>
                <Link to="/contact">
                  <Button variant="cta" size="lg">
                    Get Your Video Edited
                  </Button>
                </Link>
              </div>
            </FadeIn>
            {/* Video Modal */}
            <VideoModal
              isOpen={videoModalOpen}
              onClose={() => { setVideoModalOpen(false); setActiveVideo(null); }}
              videoSrc={
                activeVideo
                  ? activeVideo.replace("autoplay=0", "autoplay=1")
                  : ""
              }
            />
          </section>
        ) : slug === "floor-plan" ? (
          <section
            style={{ order: sectionOrder.indexOf("gallery") }}
            className="section-container section-padding"
          >
            <FadeIn>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6 text-center">
                Sample Floor Plans
              </h2>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* 2D Floor Plan Sample */}
              <motion.div 
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                  2D Floor Plan
                </h3>
                <div className="aspect-[4/3] bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 mb-4 p-4">
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    {/* Outer walls */}
                    <rect
                      x="20"
                      y="20"
                      width="360"
                      height="260"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="text-slate-800 dark:text-slate-300"
                    />

                    {/* Living Room */}
                    <rect
                      x="20"
                      y="20"
                      width="200"
                      height="140"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-slate-600 dark:text-slate-400"
                    />
                    <text
                      x="120"
                      y="95"
                      textAnchor="middle"
                      className="text-xs fill-slate-700 dark:fill-slate-400"
                      fontSize="12"
                    >
                      Living Room
                    </text>
                    <text
                      x="120"
                      y="110"
                      textAnchor="middle"
                      className="text-xs fill-slate-500 dark:fill-slate-500"
                      fontSize="10"
                    >
                      18' x 14'
                    </text>

                    {/* Kitchen */}
                    <rect
                      x="220"
                      y="20"
                      width="160"
                      height="100"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-slate-600 dark:text-slate-400"
                    />
                    <text
                      x="300"
                      y="65"
                      textAnchor="middle"
                      className="text-xs fill-slate-700 dark:fill-slate-400"
                      fontSize="12"
                    >
                      Kitchen
                    </text>
                    <text
                      x="300"
                      y="80"
                      textAnchor="middle"
                      className="text-xs fill-slate-500 dark:fill-slate-500"
                      fontSize="10"
                    >
                      12' x 10'
                    </text>

                    {/* Bathroom */}
                    <rect
                      x="220"
                      y="120"
                      width="80"
                      height="80"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-slate-600 dark:text-slate-400"
                    />
                    <text
                      x="260"
                      y="160"
                      textAnchor="middle"
                      className="text-xs fill-slate-700 dark:fill-slate-400"
                      fontSize="11"
                    >
                      Bath
                    </text>
                    <text
                      x="260"
                      y="172"
                      textAnchor="middle"
                      className="text-xs fill-slate-500 dark:fill-slate-500"
                      fontSize="9"
                    >
                      8' x 8'
                    </text>

                    {/* Bedroom 1 */}
                    <rect
                      x="20"
                      y="160"
                      width="140"
                      height="120"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-slate-600 dark:text-slate-400"
                    />
                    <text
                      x="90"
                      y="215"
                      textAnchor="middle"
                      className="text-xs fill-slate-700 dark:fill-slate-400"
                      fontSize="12"
                    >
                      Bedroom 1
                    </text>
                    <text
                      x="90"
                      y="230"
                      textAnchor="middle"
                      className="text-xs fill-slate-500 dark:fill-slate-500"
                      fontSize="10"
                    >
                      14' x 12'
                    </text>

                    {/* Bedroom 2 */}
                    <rect
                      x="160"
                      y="160"
                      width="140"
                      height="120"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-slate-600 dark:text-slate-400"
                    />
                    <text
                      x="230"
                      y="215"
                      textAnchor="middle"
                      className="text-xs fill-slate-700 dark:fill-slate-400"
                      fontSize="12"
                    >
                      Bedroom 2
                    </text>
                    <text
                      x="230"
                      y="230"
                      textAnchor="middle"
                      className="text-xs fill-slate-500 dark:fill-slate-500"
                      fontSize="10"
                    >
                      14' x 12'
                    </text>

                    {/* Closet */}
                    <rect
                      x="300"
                      y="200"
                      width="80"
                      height="80"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-slate-600 dark:text-slate-400"
                    />
                    <text
                      x="340"
                      y="240"
                      textAnchor="middle"
                      className="text-xs fill-slate-700 dark:fill-slate-400"
                      fontSize="10"
                    >
                      Closet
                    </text>

                    {/* Doors */}
                    <line
                      x1="120"
                      y1="20"
                      x2="120"
                      y2="35"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-blue-500"
                    />
                    <line
                      x1="220"
                      y1="70"
                      x2="235"
                      y2="70"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-blue-500"
                    />
                    <line
                      x1="260"
                      y1="120"
                      x2="260"
                      y2="135"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-blue-500"
                    />
                    <line
                      x1="90"
                      y1="160"
                      x2="90"
                      y2="175"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-blue-500"
                    />
                    <line
                      x1="230"
                      y1="160"
                      x2="230"
                      y2="175"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-blue-500"
                    />

                    {/* Furniture indicators */}
                    <rect
                      x="40"
                      y="40"
                      width="40"
                      height="30"
                      fill="currentColor"
                      fillOpacity="0.2"
                      className="text-slate-400"
                    />
                    <rect
                      x="160"
                      y="40"
                      width="40"
                      height="30"
                      fill="currentColor"
                      fillOpacity="0.2"
                      className="text-slate-400"
                    />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong className="text-foreground">
                    Total: 1,850 sq ft
                  </strong>{" "}
                  • 3 Bed • 2 Bath
                </p>
                <p className="text-sm text-muted-foreground">
                  Clean, professional 2D floor plans with accurate measurements
                  and room labels. Perfect for listings and brochures.
                </p>
              </motion.div>

              {/* 3D Floor Plan Sample */}
              <motion.div 
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                  3D Floor Plan
                </h3>
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 mb-4 p-4 overflow-hidden">
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    <defs>
                      <linearGradient
                        id="wall1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          className="dark:stop-slate-600"
                          style={{ stopColor: "#e2e8f0" }}
                        />
                        <stop
                          offset="100%"
                          className="dark:stop-slate-700"
                          style={{ stopColor: "#cbd5e1" }}
                        />
                      </linearGradient>
                      <linearGradient
                        id="floor1"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop offset="0%" style={{ stopColor: "#f1f5f9" }} />
                        <stop offset="100%" style={{ stopColor: "#e2e8f0" }} />
                      </linearGradient>
                    </defs>

                    {/* 3D Perspective Floor */}
                    <polygon
                      points="50,220 150,250 350,250 350,150 300,120 50,120"
                      fill="url(#floor1)"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-slate-400"
                    />

                    {/* Living Room Wall */}
                    <polygon
                      points="50,120 50,220 150,250 150,180"
                      fill="url(#wall1)"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-slate-600 dark:text-slate-400"
                    />

                    {/* Kitchen Wall */}
                    <polygon
                      points="150,180 150,250 250,250 250,160"
                      fill="#f8fafc"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-slate-600 dark:text-slate-400"
                    />

                    {/* Bedroom Wall */}
                    <polygon
                      points="250,160 250,250 350,250 350,150"
                      fill="url(#wall1)"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-slate-600 dark:text-slate-400"
                    />

                    {/* Back Wall */}
                    <polygon
                      points="50,120 300,120 350,150 350,150 300,120 50,120"
                      fill="#e2e8f0"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-slate-600"
                    />

                    {/* Furniture - Sofa */}
                    <rect
                      x="70"
                      y="190"
                      width="50"
                      height="20"
                      fill="currentColor"
                      className="text-blue-400/40"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <polygon
                      points="70,190 90,180 140,180 120,190"
                      fill="currentColor"
                      className="text-blue-500/30"
                    />

                    {/* Furniture - Bed */}
                    <rect
                      x="270"
                      y="190"
                      width="50"
                      height="30"
                      fill="currentColor"
                      className="text-amber-400/40"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <polygon
                      points="270,190 285,180 335,180 320,190"
                      fill="currentColor"
                      className="text-amber-500/30"
                    />

                    {/* Furniture - Table */}
                    <rect
                      x="170"
                      y="210"
                      width="30"
                      height="20"
                      fill="currentColor"
                      className="text-green-400/40"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <polygon
                      points="170,210 180,200 210,200 200,210"
                      fill="currentColor"
                      className="text-green-500/30"
                    />

                    {/* Labels */}
                    <text
                      x="100"
                      y="240"
                      className="text-xs fill-slate-700 dark:fill-slate-300"
                      fontSize="11"
                      fontWeight="bold"
                    >
                      Living
                    </text>
                    <text
                      x="180"
                      y="240"
                      className="text-xs fill-slate-700 dark:fill-slate-300"
                      fontSize="11"
                      fontWeight="bold"
                    >
                      Kitchen
                    </text>
                    <text
                      x="280"
                      y="240"
                      className="text-xs fill-slate-700 dark:fill-slate-300"
                      fontSize="11"
                      fontWeight="bold"
                    >
                      Bedroom
                    </text>
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong className="text-foreground">
                    Total: 2,200 sq ft
                  </strong>{" "}
                  • 4 Bed • 3 Bath
                </p>
                <p className="text-sm text-muted-foreground">
                  Stunning 3D rendered floor plans with depth and furniture.
                  Helps buyers visualize space and flow.
                </p>
              </motion.div>
            </StaggerContainer>
            <FadeIn delay={0.4}>
              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                  Upload your sketches or blueprints to get started
                </p>
                <Link to="/contact">
                  <Button variant="cta" size="lg">
                    Get Your Floor Plan
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </section>
        ) : slug === "virtual-staging" ? (
          <section
            style={{ order: sectionOrder.indexOf("gallery") }}
            className="section-container section-padding"
          >
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {virtualStaging.map((pair, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <BeforeAfterSlider
                    beforeImage={pair.before}
                    afterImage={pair.after}
                    className="w-full"
                  />
                </motion.div>
              ))}
            </StaggerContainer>
          </section>
        ) : (
          <section
            style={{ order: sectionOrder.indexOf("gallery") }}
            className="section-container section-padding"
          >
            {slug === "photo-enhancement" && (
              <>
                <FadeIn>
                  <div className="text-center mb-6">
                    <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
                      Categories
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                      Choose from our specialized enhancement techniques to see
                      examples
                    </p>
                  </div>
                </FadeIn>

                <StaggerContainer className="flex flex-wrap justify-center gap-3 mb-8">
                  {categories.map((category, index) => (
                    <motion.button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-5 py-2 rounded-full font-medium transition-all ${
                        selectedCategory === category
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-foreground hover:bg-primary/20"
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category}
                    </motion.button>
                  ))}
                </StaggerContainer>
                {selectedCategory !== "All" ? (
                  <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    {categoryMap[selectedCategory].map((pair, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <BeforeAfterSlider
                          beforeImage={pair.before}
                          afterImage={pair.after}
                          className="w-full"
                        />
                      </motion.div>
                    ))}
                  </StaggerContainer>
                ) : (
                  <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    {All.map((pair, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <BeforeAfterSlider
                          beforeImage={pair.before}
                          afterImage={pair.after}
                          className="w-full"
                        />
                      </motion.div>
                    ))}
                  </StaggerContainer>
                )}
              </>
            )}
          </section>
        )}
        {/* CTA – layout varies: centered, split, or minimal (hidden for Real Estate Website) */}
        {slug !== "real-estate-website" && slug !== "video-editing" && (
          <section
            style={{ order: sectionOrder.indexOf("cta") }}
            className={`section-padding ${theme.ctaSection}`}
          >
            <div className="section-container">
              {theme.ctaLayout === "centered" && (
                <div className="text-center">
                  <FadeIn>
                    <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
                      Ready to Get Started?
                    </h2>
                  </FadeIn>
                  <FadeIn delay={0.2}>
                    <p className="text-white/90 mb-8 max-w-xl mx-auto">
                      Try our {service.title} service with drop your link and
                      experience the quality difference.
                    </p>
                  </FadeIn>
                  <ScaleIn delay={0.4}>
                    <Link to="/try-free">
                      <Button
                        variant="outline"
                        size="xl"
                        className={theme.ctaButton}
                      >
                        Start Free Trial
                      </Button>
                    </Link>
                  </ScaleIn>
                </div>
              )}
              {theme.ctaLayout === "split" && (
                <motion.div 
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-center md:text-left"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <SlideIn direction="left">
                    <div>
                      <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-2">
                        Ready to Get Started?
                      </h2>
                      <p className="text-white/90 max-w-xl">
                        Try our {service.title} service with drop your link and
                        experience the quality difference.
                      </p>
                    </div>
                  </SlideIn>
                  <SlideIn direction="right" delay={0.2}>
                    <Link to="/try-free" className="flex-shrink-0">
                      <Button
                        variant="outline"
                        size="xl"
                        className={theme.ctaButton}
                      >
                        Start Free Trial
                      </Button>
                    </Link>
                  </SlideIn>
                </motion.div>
              )}
              {theme.ctaLayout === "minimal" && (
                <div className="text-center">
                  <FadeIn>
                    <p className="text-white/90 mb-4 text-lg">
                      Try our {service.title} service with drop your link.
                    </p>
                  </FadeIn>
                  <ScaleIn delay={0.2}>
                    <Link to="/try-free">
                      <Button
                        variant="outline"
                        size="lg"
                        className={theme.ctaButton}
                      >
                        Start Free Trial
                      </Button>
                    </Link>
                  </ScaleIn>
                </div>
              )}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
