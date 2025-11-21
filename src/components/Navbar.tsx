import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/CodeIntern_Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
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
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/internships" className="text-foreground hover:text-primary transition-colors">
              Internships
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Button asChild className="bg-gradient-primary hover:opacity-90 transition-opacity">
              <Link to="/internships">View Internships</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
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
            <Button asChild className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
              <Link to="/internships" onClick={() => setIsOpen(false)}>
                View Internships
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
