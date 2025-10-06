import { MessageSquare, ClipboardList, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Initial Consultation",
      description: "Share your vision with us during a comprehensive consultation where we discuss your goals, budget, and timeline.",
    },
    {
      number: "02",
      icon: ClipboardList,
      title: "Design & Planning",
      description: "Our team develops detailed plans and designs, working closely with you to refine every aspect of your project.",
    },
    {
      number: "03",
      icon: Home,
      title: "Build & Deliver",
      description: "We bring your dream to life with expert craftsmanship, transparent communication, and meticulous attention to detail.",
    },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to your dream home
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-accent/30" />
              )}
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-accent/10 border-2 border-accent mb-6 relative">
                  <step.icon className="w-12 h-12 text-accent" />
                  <span className="absolute -top-4 -right-4 text-6xl font-bold text-accent/20">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="uppercase tracking-wider px-8 py-6 text-lg"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
