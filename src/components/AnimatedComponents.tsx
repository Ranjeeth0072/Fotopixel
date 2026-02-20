// Reusable animated components using Framer Motion
import { motion, HTMLMotionProps, Variants } from 'framer-motion';
import { ReactNode } from 'react';
import { buttonVariants, cardVariants } from '@/lib/animations';

// Animated Button Wrapper
interface AnimatedButtonProps extends HTMLMotionProps<'button'> {
  children: ReactNode;
  variant?: 'scale' | 'bounce' | 'pulse' | 'shimmer' | 'lift' | 'glow';
  className?: string;
}

export const AnimatedButton = ({ 
  children, 
  variant = 'scale', 
  className,
  ...props 
}: AnimatedButtonProps) => {
  const animations = buttonVariants[variant] as Variants;
  
  return (
    <motion.button
      className={className}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      animate={variant === 'pulse' ? 'animate' : undefined}
      variants={animations}
      {...props}
    >
      {children}
    </motion.button>
  );
};

// Animated Div Wrapper
interface AnimatedDivProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  variant?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleUp';
  delay?: number;
  className?: string;
}

export const AnimatedDiv = ({ 
  children, 
  variant = 'fadeInUp', 
  delay = 0,
  className,
  ...props 
}: AnimatedDivProps) => {
  const animations = cardVariants[variant] as Variants;
  
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      custom={delay}
      variants={animations}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Animated Card with Hover Effect
interface AnimatedCardProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
  className?: string;
  hoverEffect?: boolean;
}

export const AnimatedCard = ({ 
  children, 
  delay = 0,
  className,
  hoverEffect = true,
  ...props 
}: AnimatedCardProps) => {
  const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay * 0.1,
      },
    },
    hover: hoverEffect ? {
      y: -8,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    } : {},
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      whileHover={hoverEffect ? "hover" : undefined}
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInVariants}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Stagger Container
interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  className?: string;
}

export const StaggerContainer = ({ children, className, ...props }: StaggerContainerProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Animated Section
interface AnimatedSectionProps extends HTMLMotionProps<'section'> {
  children: ReactNode;
  className?: string;
}

export const AnimatedSection = ({ children, className, ...props }: AnimatedSectionProps) => {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.section>
  );
};

// Fade In Component
interface FadeInProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = 0.5,
  className,
  ...props 
}: FadeInProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Scale In Component
interface ScaleInProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const ScaleIn = ({ 
  children, 
  delay = 0,
  className,
  ...props 
}: ScaleInProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Slide In Component
interface SlideInProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  className?: string;
}

export const SlideIn = ({ 
  children, 
  direction = 'up',
  delay = 0,
  className,
  ...props 
}: SlideInProps) => {
  const directions = {
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
    up: { x: 0, y: 40 },
    down: { x: 0, y: -40 },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
