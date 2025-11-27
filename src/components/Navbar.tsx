import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import logo from "@/assets/CodeIntern_Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  const activeSection = useActiveSection(
    isHomePage ? ["hero", "internships", "why-choose", "projects", "how-it-works"] : []
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  const navLinks = isHomePage
    ? [
        { label: "Home", sectionId: "hero" },
        { label: "Internships", sectionId: "internships" },
        { label: "Why Us", sectionId: "why-choose" },
        { label: "Projects", sectionId: "projects" },
      ]
    : [];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-soft" 
          : "bg-background/80 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="CodeIntern Logo" 
              className="h-10 md:h-12 w-10 md:w-12 rounded-full object-cover"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                {navLinks.map((link) => (
                  <button
                    key={link.sectionId}
                    onClick={() => scrollToSection(link.sectionId)}
                    className={cn(
                      "relative text-foreground hover:text-primary transition-colors py-2",
                      activeSection === link.sectionId && "text-primary"
                    )}
                  >
                    {link.label}
                    <span 
                      className={cn(
                        "absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300",
                        activeSection === link.sectionId ? "scale-x-100" : "scale-x-0"
                      )}
                    />
                  </button>
                ))}
                <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className="text-foreground hover:text-primary transition-colors">
                  Home
                </Link>
                <Link to="/internships" className="text-foreground hover:text-primary transition-colors">
                  Internships
                </Link>
                <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </>
            )}
            <Button asChild className="bg-gradient-primary hover:opacity-90 transition-opacity">
              <Link to="/internships">View Internships</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-out",
            isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="space-y-4 pt-4">
            {isHomePage ? (
              <>
                {navLinks.map((link) => (
                  <button
                    key={link.sectionId}
                    onClick={() => scrollToSection(link.sectionId)}
                    className={cn(
                      "block w-full text-left text-foreground hover:text-primary transition-colors",
                      activeSection === link.sectionId && "text-primary font-medium"
                    )}
                  >
                    {link.label}
                  </button>
                ))}
                <Link
                  to="/contact"
                  className="block text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="block text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/internships"
                  className="block text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Internships
                </Link>
                <Link
                  to="/contact"
                  className="block text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </>
            )}
            <Button asChild className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
              <Link to="/internships" onClick={() => setIsOpen(false)}>
                View Internships
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
