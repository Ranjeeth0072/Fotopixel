import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is the turnaround time for photo editing?',
    answer: 'Our standard turnaround time is 12 hours for most photo enhancement services. For more complex services like virtual staging or 3D floor plans, it may take 36-72 hours. Rush delivery options are also available.',
  },
  {
    question: 'What file formats do you accept?',
    answer: 'We accept all major image formats including RAW, JPEG, PNG, and TIFF. For best results, we recommend uploading RAW files as they provide the highest quality and most flexibility for editing.',
  },
  {
    question: 'How does the free trial work?',
    answer: 'Our free trial allows you to upload 3 photos and receive professionally edited images at no cost. This helps you experience our quality before committing to a paid service. No credit card required.',
  },
  {
    question: 'Can I request revisions?',
    answer: 'Yes, we offer unlimited revisions on all our services. If you are not satisfied with the initial edit, simply let us know what changes you would like, and we will make adjustments at no extra cost.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers. For enterprise clients, we also offer invoicing options with NET 30 payment terms.',
  },
  {
    question: 'Do you offer bulk pricing?',
    answer: 'Yes, we offer competitive bulk pricing for high-volume clients. Contact our sales team for custom quotes tailored to your specific needs and volume requirements.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-background section-padding">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium mb-2 uppercase tracking-wide text-sm">Got Questions?</p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-4 md:px-6"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary text-sm md:text-base py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;