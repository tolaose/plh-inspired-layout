import interiorLuxury from "@/assets/interior-luxury.jpg";

const Mission = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img 
              src={interiorLuxury} 
              alt="Luxury modern interior design" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 uppercase">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Hasley Park, we are committed to redefining luxury modern living through exceptional architectural design and premium construction. Our vision is to create homes that seamlessly blend contemporary aesthetics with timeless elegance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're building your dream home or seeking consultation on your next project, we bring expertise, innovation, and unwavering attention to detail to every endeavor. We're here to guide you every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
