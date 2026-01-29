import { Globe } from 'lucide-react';

const countries = ['USA', 'UK', 'Australia'];

const WorkingClients = () => {
  return (
    <section className="bg-dark section-padding">
      <div className="section-container">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-dark-foreground mb-4">
            Our Working Clients
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {countries.map((country, index) => (
            <div
              key={index}
              className="bg-navy rounded-xl px-6 py-4 md:px-8 md:py-5 border border-primary/20 hover:border-primary/50 transition-all hover:scale-105"
            >
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                <span className="font-heading font-bold text-lg md:text-xl text-dark-foreground">
                  {country}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingClients;
