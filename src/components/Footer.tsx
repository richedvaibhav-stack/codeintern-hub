import { Link } from "react-router-dom";
import { Mail, Linkedin } from "lucide-react";

const WhatsAppIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

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
            <h4 className="font-semibold mb-4">Contact & Connect</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail size={16} className="text-primary" />
                <a href="mailto:support@codeintern.in" className="hover:text-primary transition-colors">
                  support@codeintern.in
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Linkedin size={16} className="text-primary" />
                <a 
                  href="https://www.linkedin.com/company/codeintern-official" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Follow us on LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <WhatsAppIcon size={16} className="text-primary" />
                <a 
                  href="https://chat.whatsapp.com/Lag0PN1bYpD0ZniZAsIKGN?mode=hqrt1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Join our WhatsApp Group
                </a>
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
