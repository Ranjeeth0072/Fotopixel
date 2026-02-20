import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailjsConfig, isEmailJSConfigured } from '@/lib/emailjs-config';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from '@/hooks/use-toast';

const TryFree = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
  });
  const [link, setLink] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (!link) {
      toast({
        title: "Error",
        description: "Please provide a link to your photos",
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
        businessName: formData.businessName || 'Not provided',
        email: formData.email,
        message: link,
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
        businessName: '',
        email: '',
      });
      setLink('');

      toast({
        title: "Success!",
        description: "Your free trial request has been submitted. We'll contact you within 12 hours.",
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);

      toast({
        title: "Error",
        description: "Failed to send request. Please try again or contact us directly via email.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="section-container section-padding">
          <div className="max-w-lg mx-auto text-center">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Thank You!
            </h1>
            <p className="text-muted-foreground mb-8">
              Your free trial request has been submitted successfully. Our team will review your photos and get back to you within 12 hours.
            </p>
            <Button variant="cta" onClick={() => window.location.href = '/'}>
              Back to Home
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="section-container section-padding">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Drop Your Link For Free
            </h1>
            <p className="text-muted-foreground">
              Experience our professional photo editing quality with no commitment. Share a link to your photos (Google Drive, Dropbox, WeTransfer, etc.) and receive professionally edited images within 12 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 md:p-8">
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
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
                  <Label htmlFor="businessName" className="text-foreground">Business Name</Label>
                  <Input
                    id="businessName"
                    type="text"
                    placeholder="Your business name (optional)"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="mt-2"
                  />
                </div>
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
                <Label htmlFor="link" className="text-foreground">Drop Your Link Here *</Label>
                <div className="mt-2">
                  <Input
                    id="link"
                    type="url"
                    placeholder="Paste your Google Drive, Dropbox, or WeTransfer link here..."
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    className="text-base"
                    required
                  />
                  <p className="text-muted-foreground text-xs sm:text-sm mt-2">
                    Share a link to your photos from Google Drive, Dropbox, WeTransfer, or any file sharing service
                  </p>
                </div>
                {link && (
                  <div className="mt-4">
                    <div className="flex items-center gap-2 text-sm text-foreground bg-secondary/50 rounded-lg px-3 py-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Link added successfully
                    </div>
                  </div>
                )}
              </div>

              <Button
                type="submit"
                variant="cta"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    Submit Request
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TryFree;
