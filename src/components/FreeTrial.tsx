import { Button } from '@/components/ui/button';

const FreeTrial = () => {
  return (
    <section className="bg-secondary py-16">
      <div className="section-container text-center">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
          First time here for Real Estate Photo Editing?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Try your first 3 photos for free! Experience our services at no cost and discover how we can enhance your photos.
        </p>
        <Button variant="cta" size="xl">
          GIVE US A TRY FOR FREE
        </Button>
      </div>
    </section>
  );
};

export default FreeTrial;
