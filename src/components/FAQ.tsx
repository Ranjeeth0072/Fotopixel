import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    question: 'Can I really get my photos in 24 hours?',
    answer: 'Yes, our global team works around the clock to ensure your photos are delivered within 24 hours. We prioritize timely delivery without compromising on quality.',
  },
  {
    question: 'What if I want to change something in my photos after delivery?',
    answer: 'We are committed to your satisfaction as we value long-term partnerships. You can request any changes you need, and we will make them until you are fully satisfied with the result.',
  },
  {
    question: 'How many photos do I need to order for HDR or Flambient editing?',
    answer: "You only need to order the final amount of edited photos you require. There's no need to order each individual bracket.",
  },
  {
    question: 'What type of photo files do you prefer for optimal results?',
    answer: 'For the best editing potential, we prefer RAW files due to their high flexibility in editing. However, we can also work with JPG files if that\'s what you have available.',
  },
  {
    question: 'How many brackets are preferred for HDR photos?',
    answer: 'For HDR editing, we recommend uploading between 3 to 7 brackets. It\'s crucial that the darkest bracket does not have overexposed areas in the windows, to facilitate effective window pulls.',
  },
  {
    question: 'Will I have a dedicated editor for all my projects?',
    answer: 'Yes, each client is assigned a dedicated editor. We strongly believe in the importance of consistency and quality in photo editing. By providing you with a dedicated editor, we ensure that all your photos are uniform and meet your specific style and preferences.',
  },
];

const FAQ = () => {
  return (
    <section className="bg-secondary section-padding">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-8">
              Frequently asked questions
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-8">
              <Button variant="outline" size="lg">
                No answer found? Contact us
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-card border border-border rounded-xl p-8 sticky top-24">
              <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our team is here to help. Contact us for personalized assistance with your real estate photo editing needs.
              </p>
              <Button variant="cta" size="lg" className="w-full">
                GET IN TOUCH
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
