import { 
  Calendar, 
  FolderGit2, 
  Award, 
  MessageCircle, 
  ClipboardCheck, 
  GraduationCap, 
  Home, 
  TrendingUp 
} from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";

const features = [
  {
    icon: Calendar,
    title: "1-Month Task-Based Internships",
    description: "Short, focused programs that fit your schedule"
  },
  {
    icon: FolderGit2,
    title: "Real Projects & Assignments",
    description: "Hands-on experience with industry-relevant tasks"
  },
  {
    icon: Award,
    title: "Verified Completion Certificate",
    description: "Earn credentials recognized by employers"
  },
  {
    icon: MessageCircle,
    title: "Professional Support via WhatsApp",
    description: "Get help whenever you need it"
  },
  {
    icon: ClipboardCheck,
    title: "Easy Registration Process",
    description: "Simple signup in just a few minutes"
  },
  {
    icon: GraduationCap,
    title: "Beginner-Friendly Learning Path",
    description: "Structured guidance for all skill levels"
  },
  {
    icon: Home,
    title: "Work From Home Internship",
    description: "Complete flexibility to learn from anywhere"
  },
  {
    icon: TrendingUp,
    title: "Boost Your Resume & Skills",
    description: "Stand out in the competitive job market"
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">CodeIntern</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join thousands of students who have kickstarted their careers with us
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <RevealOnScroll key={index} delay={index * 75}>
              <div
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group hover-lift h-full"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
