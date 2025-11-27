import { FileText, MessageCircle, CheckCircle, Award } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";

const steps = [
  {
    icon: FileText,
    title: "Register",
    description: "Fill out the registration form (Google Form will be added soon)"
  },
  {
    icon: MessageCircle,
    title: "Join WhatsApp Group",
    description: "Get instant support and connect with fellow interns"
  },
  {
    icon: CheckCircle,
    title: "Complete Tasks",
    description: "Work on 3 practical tasks at your own pace"
  },
  {
    icon: Award,
    title: "Get Certificate",
    description: "Receive your official internship completion certificate"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get started with your internship journey in 4 simple steps
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <RevealOnScroll key={index} delay={index * 100}>
                <div className="relative h-full">
                  <div className="bg-card p-6 rounded-xl border border-border shadow-soft hover:shadow-medium transition-all duration-300 text-center h-full hover-lift">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold shadow-medium">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
