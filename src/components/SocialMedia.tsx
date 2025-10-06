import { Instagram } from "lucide-react";
import logo from "@/assets/hasley-park-logo.jpg";

const SocialMedia = () => {
  const instagramHandle = "@halseypark";
  const instagramUrl = "https://instagram.com/halseypark";

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Logo and Brand Name */}
          <a 
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 transition-opacity hover:opacity-80"
          >
            <img 
              src={logo} 
              alt="Halsey Park Logo" 
              className="w-16 h-16 rounded-full object-cover"
            />
            <span className="text-2xl font-bold text-foreground uppercase tracking-wide">
              Halseypark
            </span>
          </a>

          {/* Call to Action Text */}
          <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest text-center">
            Follow more behind the scenes on Instagram
          </p>

          {/* Instagram Handle */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-accent hover:text-accent/80 transition-colors group"
          >
            <Instagram className="w-8 h-8 group-hover:scale-110 transition-transform" />
            <span className="text-xl font-semibold uppercase tracking-wide">
              {instagramHandle}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
