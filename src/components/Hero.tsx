import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Clock, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium">
            <Award className="w-4 h-4 text-primary" />
            <span>Certified Online Internships</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            CodeIntern — Certified Online{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Development & Education
            </span>{" "}
            Internships
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            1-Month Task Based Remote Internships for Students. Learn, Build, and Get Certified in Your Dream Tech Stack
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 shadow-large group"
            >
              <Link to="/internships">
                View Internships
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="text-lg px-8 border-primary text-primary hover:bg-secondary"
            >
              <Link to="/contact">Learn More</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-card p-6 rounded-xl border border-border shadow-soft hover:shadow-medium transition-shadow">
              <Clock className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">1 Month Duration</h3>
              <p className="text-muted-foreground text-sm">
                Complete your internship at your own pace within 30 days
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border shadow-soft hover:shadow-medium transition-shadow">
              <Award className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Get Certified</h3>
              <p className="text-muted-foreground text-sm">
                Receive an official certificate upon successful completion
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border shadow-soft hover:shadow-medium transition-shadow">
              <Users className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Task-Based Learning</h3>
              <p className="text-muted-foreground text-sm">
                Learn by doing with practical, real-world projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
