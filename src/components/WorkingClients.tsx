import { MapPin } from 'lucide-react';

const locations = [
  {
    country: 'USA',
    city: 'Austin, USA',
    description: 'Client Engagement & Business Operations',
  },
  {
    country: 'UK',
    city: 'London, UK',
    description: 'Marketing & Client Support Hub',
  },
  {
    country: 'Australia',
    city: 'Sydney, Australia',
    description: 'Asia-Pacific Operations Center',
  },
];

const WorkingClients = () => {
  return (
    <section className="bg-dark section-padding">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-dark-foreground mb-4">
            Our Presence
          </h2>
          <p className="text-dark-foreground/70 max-w-2xl mx-auto text-sm md:text-base px-4">
            Fotopixel Image Solution operates across three key hubs enabling global delivery and continuous collaboration.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-navy rounded-xl p-5 md:p-6 border border-primary/20 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <h3 className="font-heading font-bold text-lg md:text-xl text-dark-foreground">
                  {location.city}
                </h3>
              </div>
              <p className="text-dark-foreground/70 text-sm md:text-base">
                {location.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingClients;