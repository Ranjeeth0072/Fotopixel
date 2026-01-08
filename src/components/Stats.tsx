import { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 11, suffix: '+', label: 'years', sublabel: 'Of Experience' },
  { value: 99, suffix: '%', label: '', sublabel: 'On Time Delivery' },
  { value: 1800, suffix: '+', label: '', sublabel: 'Photos Edited Daily' },
];

const useCountUp = (end: number, duration: number = 2000, startOnView: boolean = true) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView || hasStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [startOnView, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, hasStarted]);

  return { count, ref };
};

const Stats = () => {
  return (
    <section className="bg-background py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const { count, ref } = useCountUp(stat.value, 2000);
            return (
              <div
                key={index}
                ref={ref}
                className="bg-card border border-border rounded-xl p-8 text-center hover-lift hover-glow transition-all"
              >
                <div className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-2">
                  {count}
                  {stat.suffix}
                  {stat.label && <span className="text-3xl ml-1">{stat.label}</span>}
                </div>
                <p className="text-muted-foreground font-medium">{stat.sublabel}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
