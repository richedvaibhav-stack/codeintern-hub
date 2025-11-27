import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code2, Layout, Calculator, Palette, Lock, Globe } from "lucide-react";

const projects = [
  {
    title: "Weather App",
    description: "A responsive weather application with real-time data fetching and location-based forecasts.",
    tech: ["React JS", "API", "CSS"],
    icon: Globe,
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Student Result Dashboard",
    description: "Interactive dashboard displaying student grades, attendance, and performance analytics.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: Layout,
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    title: "Simple Calculator",
    description: "A functional calculator with basic arithmetic operations and clean UI design.",
    tech: ["Java", "Swing", "OOP"],
    icon: Calculator,
    color: "bg-red-500/10 text-red-600"
  },
  {
    title: "E-commerce Product Page",
    description: "Modern product page design with cart functionality and responsive layout.",
    tech: ["UI/UX", "Figma", "Design"],
    icon: Palette,
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Text Encryption Tool",
    description: "Secure text encryption and decryption tool using popular cryptographic algorithms.",
    tech: ["Python", "Cryptography", "CLI"],
    icon: Lock,
    color: "bg-green-500/10 text-green-600"
  },
  {
    title: "Travel Blog Landing Page",
    description: "Beautiful responsive landing page for a travel blog with smooth animations.",
    tech: ["HTML", "CSS", "Web Design"],
    icon: Code2,
    color: "bg-teal-500/10 text-teal-600"
  }
];

const PastProjects = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Past Intern <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore real projects completed by our interns during their training
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${project.color}`}>
                  <project.icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 pt-0">
                {project.tech.map((tech, techIndex) => (
                  <Badge 
                    key={techIndex} 
                    variant="secondary"
                    className="text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View More Projects
            <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PastProjects;
