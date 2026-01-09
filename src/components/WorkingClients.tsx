import { MapPin } from 'lucide-react';

const locations = [
  {
    country: 'USA',
    city: 'Austin, USA',
  },
  {
    country: 'UK',
    city: 'London, UK',
  },
  {
    country: 'Australia',
    city: 'Sydney, Australia',
  },
];

const WorkingClients = () => {
  return (
    <section className="bg-dark section-padding">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-dark-foreground mb-4">
            Our Working Clients
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-navy rounded-xl p-5 md:p-6 border border-primary/20 hover:border-primary/50 transition-colors text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                <h3 className="font-heading font-bold text-xl md:text-2xl text-dark-foreground">
                  {location.city}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingClients;
