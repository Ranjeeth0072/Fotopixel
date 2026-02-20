import { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { emailjsConfig, isEmailJSConfigured } from '@/lib/emailjs-config';
import { FadeIn, AnimatedCard, ScaleIn } from '@/components/AnimatedComponents';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Check if EmailJS is configured
    if (!isEmailJSConfigured()) {
      console.error('EmailJS is not configured. Please add your credentials.');
      toast({
        title: "Configuration Error",
        description: "Email service is not configured. Please contact the administrator.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init(emailjsConfig.publicKey);

      // Prepare template parameters
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        message: formData.message||'No message provided',
        to_name: 'Fotopixel Team',
        reply_to: formData.email,
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams
      );

      console.log('Email sent successfully:', response);
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly via email.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="section-container section-padding">
          <ScaleIn className="max-w-lg mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            </motion.div>
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Message Sent!
            </h1>
            <p className="text-muted-foreground mb-8">
              Thank you for reaching out. Our team will get back to you within 12 hours.
            </p>
            <Button variant="cta" animation="glow" onClick={() => window.location.href = '/'}>
              Back to Home
            </Button>
          </ScaleIn>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="section-container section-padding">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about our services? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedCard delay={0.2} hoverEffect={false} className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="font-heading font-bold text-xl mb-6 text-foreground">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2 min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="xl"
                  animation="glow"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      Processing...
                    </motion.div>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </AnimatedCard>

            {/* Contact Info */}
            <div className="space-y-8">
              <AnimatedCard delay={0.4} className="bg-dark rounded-xl p-6 md:p-8">
                <h2 className="font-heading font-bold text-xl mb-6 text-dark-foreground">Contact Information</h2>
                <div className="space-y-6">
                  <a href="tel:+919715052757" className="flex items-center gap-4 text-dark-foreground/80 hover:text-primary transition-colors">
                    <motion.div 
                      className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Phone className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-dark-foreground/60">Phone</p>
                      <p className="font-medium">+91 9715052757</p>
                    </div>
                  </a>

                  <a href="mailto:fotopixelimgsolution@gmail.com" className="flex items-center gap-4 text-dark-foreground/80 hover:text-primary transition-colors">
                    <motion.div 
                      className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Mail className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-dark-foreground/60">Email</p>
                      <p className="font-medium">fotopixelimgsolution@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 text-dark-foreground/80">
                    <motion.div 
                      className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <MapPin className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-dark-foreground/60">Address</p>
                      <p className="font-medium">Chennai, Tamil Nadu 638008, India</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.6} className="bg-primary rounded-xl p-6 md:p-8 text-center">
                <h3 className="font-heading font-bold text-xl text-primary-foreground mb-3">
                  Ready to get started?
                </h3>
                <p className="text-primary-foreground/90 mb-6 text-sm">
                  Try our service with drop your link and see the difference for yourself.
                </p>
                <Button
                  variant="outline"
                  animation="lift"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/80 border-0"
                  onClick={() => window.location.href = '/try-free'}
                >
                  Start Free Trial
                </Button>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
