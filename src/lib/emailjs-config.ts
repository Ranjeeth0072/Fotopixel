// EmailJS Configuration
// Get your credentials from https://www.emailjs.com/
// Environment variables are loaded from .env.local for development
// and from Vercel Environment Variables for production

export const emailjsConfig = {
  // Your EmailJS Public Key (User ID)
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  
  // Your EmailJS Service ID
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  
  // Your EmailJS Template ID
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
};

// Validate configuration
export const isEmailJSConfigured = () => {
  return (
    emailjsConfig.publicKey !== '' &&
    emailjsConfig.serviceId !== '' &&
    emailjsConfig.templateId !== ''
  );
};
