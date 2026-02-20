// Animation configuration and variants for Framer Motion

export const animationConfig = {
  // Timing durations
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    verySlow: 0.8,
  },

  // Spring configurations
  spring: {
    light: { type: "spring" as const, stiffness: 300, damping: 25 },
    default: { type: "spring" as const, stiffness: 260, damping: 20 },
    heavy: { type: "spring" as const, stiffness: 200, damping: 15 },
    bounce: { type: "spring" as const, stiffness: 400, damping: 10 },
  },

  // Easing functions (cubic bezier)
  easing: {
    ease: [0.25, 0.1, 0.25, 1] as const,
    easeIn: [0.42, 0, 1, 1] as const,
    easeOut: [0, 0, 0.58, 1] as const,
    easeInOut: [0.42, 0, 0.58, 1] as const,
  },

  // Stagger delays
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
};

// Button animation variants
export const buttonVariants = {
  // Scale animation
  scale: {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: animationConfig.spring.light,
    },
    tap: { 
      scale: 0.95,
      transition: animationConfig.spring.light,
    },
  },

  // Bounce animation
  bounce: {
    initial: { scale: 1 },
    hover: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.3,
        times: [0, 0.5, 1],
      },
    },
    tap: { 
      scale: 0.9,
      transition: { duration: 0.1 },
    },
  },

  // Pulse animation
  pulse: {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    hover: { scale: 1.08 },
    tap: { scale: 0.95 },
  },

  // Shimmer effect (for use with CSS)
  shimmer: {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: animationConfig.spring.light,
    },
    tap: { scale: 0.98 },
  },

  // Lift effect
  lift: {
    initial: { y: 0, boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" },
    hover: {
      y: -4,
      boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      transition: animationConfig.spring.light,
    },
    tap: { 
      y: -2,
      transition: { duration: 0.1 },
    },
  },

  // Glow effect
  glow: {
    initial: { scale: 1, filter: "brightness(1)" },
    hover: {
      scale: 1.02,
      filter: "brightness(1.1)",
      transition: animationConfig.spring.light,
    },
    tap: { scale: 0.98 },
  },
};

// Card animation variants
export const cardVariants = {
  // Fade in from bottom
  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.1,
        ease: "easeOut" as const,
      },
    }),
  },

  // Fade in from left
  fadeInLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.1,
        ease: "easeOut" as const,
      },
    }),
  },

  // Fade in from right
  fadeInRight: {
    hidden: { opacity: 0, x: 40 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.1,
        ease: "easeOut" as const,
      },
    }),
  },

  // Scale up
  scaleUp: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: custom * 0.1,
        ease: "easeOut" as const,
      },
    }),
  },

  // Hover lift
  hoverLift: {
    initial: { y: 0 },
    hover: {
      y: -8,
      transition: animationConfig.spring.light,
    },
  },
};

// Page transition variants
export const pageVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  },

  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  },
};

// Stagger container variants
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: animationConfig.stagger.normal,
      delayChildren: 0.1,
    },
  },
};

// Parallax scroll effect helper
export const createParallaxEffect = (strength: number = 0.5) => ({
  initial: { y: 0 },
  animate: (scrollY: number) => ({
    y: scrollY * strength,
  }),
});

// Rotate animation
export const rotateVariants = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Wiggle animation
export const wiggleVariants = {
  initial: { rotate: 0 },
  animate: {
    rotate: [-5, 5, -5, 5, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

// Elastic animation
export const elasticVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};
