import { Link } from "react-router-dom";
import { Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              CodeIntern
            </h3>
            <p className="text-muted-foreground text-sm">
              1-Month Task Based Remote Internships for Students
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/internships" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Internships
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Internships</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/internship/web-development" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/internship/cpp-development" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  C++ Development
                </Link>
              </li>
              <li>
                <Link to="/internship/python-data" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Python Data
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail size={16} className="text-primary" />
                <a href="mailto:support@codeintern.in" className="hover:text-primary transition-colors">
                  support@codeintern.in
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <MessageCircle size={16} className="text-primary" />
                <span>WhatsApp Support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; 2024 CodeIntern. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
