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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
