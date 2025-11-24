import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { internships } from "@/data/internships";
import { Clock, ArrowLeft, CheckCircle, BookOpen } from "lucide-react";
import * as Icons from "lucide-react";

const InternshipDetail = () => {
  const { id } = useParams();
  
  const internship = internships.find((i) => i.id === id);

  if (!internship) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Internship Not Found</h1>
          <p className="text-muted-foreground mb-8">The internship you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/internships">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Internships
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const IconComponent = Icons[internship.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={internship.title}
        description={`${internship.description} Learn ${internship.skills.slice(0, 3).join(', ')} and more. ${internship.duration} task-based online internship with certificate.`}
        canonicalUrl={`https://yourwebsite.com/internship/${internship.id}`}
      />
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Button asChild variant="ghost" className="mb-8 hover:bg-secondary">
            <Link to="/internships">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Internships
            </Link>
          </Button>

          <div className="animate-fade-in overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-primary p-4 sm:p-6 md:p-8 rounded-xl text-primary-foreground mb-6 sm:mb-8 shadow-large overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {internship.logo ? (
                    <img 
                      src={internship.logo} 
                      alt={`${internship.title} logo`} 
                      className="w-full h-full object-contain p-2"
                    />
                  ) : (
                    IconComponent && <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" />
                  )}
                </div>
                <div className="flex-1 w-full min-w-0">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 break-words">
                    {internship.title}
                  </h1>
                  <div className="flex items-center gap-2 text-primary-foreground/90 mb-3 sm:mb-4">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="font-medium text-sm sm:text-base">{internship.duration}</span>
                  </div>
                  <p className="text-primary-foreground/90 text-base sm:text-lg break-words">
                    {internship.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <Card className="mb-6 sm:mb-8 border-border shadow-soft overflow-hidden w-full">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl break-words">Key Skills You'll Learn</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill) => (
                    <Badge key={skill} className="bg-gradient-primary text-primary-foreground text-xs sm:text-sm break-normal">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tasks */}
            <Card className="mb-6 sm:mb-8 border-border shadow-soft overflow-hidden w-full">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl break-words">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  Internship Tasks
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-3 sm:space-y-4">
                  {internship.tasks.map((task, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0 text-sm sm:text-base">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground pt-1 text-sm sm:text-base break-words min-w-0 flex-1">{task}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Learnings */}
            <Card className="mb-6 sm:mb-8 border-border shadow-soft overflow-hidden w-full">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl break-words">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  What You'll Learn
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <ul className="space-y-2 sm:space-y-3">
                  {internship.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm sm:text-base break-words min-w-0 flex-1">{learning}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Apply Button */}
            <div className="bg-secondary p-4 sm:p-6 md:p-8 rounded-xl text-center border border-border overflow-hidden w-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 break-words">Ready to Start Your Journey?</h3>
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base break-words">
                Join hundreds of students who have completed their internships with CodeIntern
              </p>
              <Button 
                size="lg"
                asChild
                className="bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all text-base sm:text-lg px-6 sm:px-8 shadow-large w-full sm:w-auto"
              >
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeGbJjSopl3DDMS1a56Ooz6pH3Q3amotJoAeJjTd4GSMo2wEg/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InternshipDetail;
