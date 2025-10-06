const Footer = () => {
  return (
    <footer className="bg-primary py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-primary-foreground/70 text-sm tracking-wide">
            © {new Date().getFullYear()} Hasley Park. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-xs mt-2 tracking-wide">
            Redefining luxury modern living
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-primary-foreground/60 text-xs">
            <a href="/privacy-policy" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="/terms-and-conditions" className="hover:text-accent transition-colors">
              Terms & Conditions
            </a>
            <span>|</span>
            <a 
              href="https://i85labs.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Website Design By i85Labs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
