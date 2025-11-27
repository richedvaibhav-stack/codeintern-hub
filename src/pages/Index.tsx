import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InternshipCard from "@/components/InternshipCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import PastProjects from "@/components/PastProjects";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { internships } from "@/data/internships";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Certified Online Development & Education Internships"
        description="1-Month Task Based Remote Internships for Students. Get certified in Web Development, Python, C++, Java, UI/UX Design, SQL, MongoDB, DevOps, and more. Free online internship programs for beginners and freshers."
        canonicalUrl="https://yourwebsite.com/"
      />
      <Navbar />
      <Hero />

      {/* Featured Internships Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Internships
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose from our carefully curated internship programs designed for student success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {internships.slice(0, 3).map((internship, index) => (
              <div 
                key={internship.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <InternshipCard internship={internship} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity group"
            >
              <Link to="/internships">
                View All Internships
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <PastProjects />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
