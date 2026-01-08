import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "We had an exceptional experience with Real Estate Photo Editing. Each photo was thoroughly edited, showcasing our properties in the best light and resulting in a truly stunning final product.",
    author: "Sylvia Marston",
    company: "Property Investor",
  },
  {
    quote: "Real Estate Photo Editing consistently produces remarkable images, focusing on bringing out the best in each shot. The quality of their work surpasses our expectations every time.",
    author: "James Robertson",
    company: "Greenview Real Estate",
  },
  {
    quote: "Extremely satisfied with Real Estate Photo Editing. Ordering was straightforward and efficient. They followed our instructions perfectly, culminating in a gorgeous finished product.",
    author: "Louis Langdorf",
    company: "Premium Homes",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-background section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 uppercase tracking-wide">See what others are saying</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Customer Reviews
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-star-gold text-star-gold" />
            ))}
          </div>
          <p className="text-muted-foreground">
            Real Estate Photo Editing receives an average rating of{' '}
            <strong className="text-foreground">4.9 / 5 stars on Google</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 relative hover-lift transition-all"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <p className="text-muted-foreground italic mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-heading font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
