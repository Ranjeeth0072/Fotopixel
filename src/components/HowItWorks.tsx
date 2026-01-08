import { Upload, Palette, Download } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Submit Your Order',
    description: 'Submit your real estate photos through our user-friendly online platform. Try your first 3 photos for free!',
  },
  {
    icon: Palette,
    title: 'Editing Process',
    description: 'Sit back and relax while our team of professional editors meticulously enhances your photos using advanced techniques.',
  },
  {
    icon: Download,
    title: 'Receive and Review',
    description: 'Your beautifully edited photos will be delivered promptly, ready for you to download and use.',
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-dark section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 uppercase tracking-wide">Method of working</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark-foreground">
            Step-by-Step
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="relative inline-flex mb-6">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-dark-foreground text-dark rounded-full flex items-center justify-center font-heading font-bold text-lg">
                  {index + 1}
                </div>
              </div>
              <h3 className="font-heading font-bold text-xl text-dark-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-dark-foreground/70 max-w-sm mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
