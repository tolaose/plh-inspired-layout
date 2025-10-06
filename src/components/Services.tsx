import { Building2, Users, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "CONSULTING",
      description: "Expert guidance and strategic planning to bring your vision to life. We work collaboratively to develop comprehensive solutions tailored to your unique needs.",
    },
    {
      icon: Building2,
      title: "CUSTOM BUILD",
      description: "From concept to completion, we craft luxury modern homes that exceed expectations. Every detail is meticulously designed and executed to perfection.",
    },
    {
      icon: Wrench,
      title: "CONSTRUCTION MANAGEMENT",
      description: "Full-service project oversight ensuring quality, efficiency, and transparency throughout the building process. Your peace of mind is our priority.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[hsl(var(--section-dark))]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 uppercase">
            How We Can Help
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Comprehensive services designed to transform your vision into reality
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-secondary/50 border-white/10 hover:border-accent/50 transition-all duration-300 backdrop-blur-sm">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-4 uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
