import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import project1 from "@/assets/project-1.jpg";
import project1_2 from "@/assets/project-1-2.jpg";
import project1_3 from "@/assets/project-1-3.jpg";
import project1_4 from "@/assets/project-1-4.jpg";
import project1_5 from "@/assets/project-1-5.jpg";
import project2 from "@/assets/project-2.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Masterpiece",
      location: "Mableton, Georgia",
      images: [project1, project1_2, project1_3, project1_4, project1_5], // Carousel with 5 images
      description: "Step inside this newly built modern masterpiece where architectural brilliance meets refined living. From the LED-lit floating stairs and Italian quartz finishes to resort-style amenities, every detail is designed to elevate your lifestyle in elegance and convenience.",
    },
    {
      id: 2,
      title: "Architectural Villa",
      location: "Sandy Springs",
      images: [project2], // Single image
      description: "An elegant 5,800 sq ft modern villa with minimalist design, infinity pool, and state-of-the-art smart home technology throughout.",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of exceptional luxury homes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden border-border hover:border-accent/50 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                {project.images.length > 1 ? (
                  <Carousel className="w-full">
                    <CarouselContent>
                      {project.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <img 
                            src={image} 
                            alt={`${project.title} - ${project.location} - Image ${index + 1}`}
                            className="w-full h-80 object-contain bg-muted"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60 pointer-events-none" />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                ) : (
                  <>
                    <img 
                      src={project.images[0]} 
                      alt={`${project.title} - ${project.location}`}
                      className="w-full h-80 object-contain bg-muted transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60" />
                  </>
                )}
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2 uppercase tracking-wide">
                  {project.title}
                </h3>
                <p className="text-accent font-medium mb-4 uppercase text-sm tracking-widest">
                  {project.location}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
