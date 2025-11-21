import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplyModal from "@/components/ApplyModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { internships } from "@/data/internships";
import { Clock, ArrowLeft, CheckCircle, BookOpen } from "lucide-react";
import * as Icons from "lucide-react";

const InternshipDetail = () => {
  const { id } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  
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
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Button asChild variant="ghost" className="mb-8 hover:bg-secondary">
            <Link to="/internships">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Internships
            </Link>
          </Button>

          <div className="animate-fade-in">
            {/* Header */}
            <div className="bg-gradient-primary p-8 rounded-xl text-primary-foreground mb-8 shadow-large">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  {IconComponent && <IconComponent className="w-8 h-8" />}
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    {internship.title}
                  </h1>
                  <div className="flex items-center gap-2 text-primary-foreground/90 mb-4">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">{internship.duration}</span>
                  </div>
                  <p className="text-primary-foreground/90 text-lg">
                    {internship.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <Card className="mb-8 border-border shadow-soft">
              <CardHeader>
                <CardTitle>Key Skills You'll Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill) => (
                    <Badge key={skill} className="bg-gradient-primary text-primary-foreground">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tasks */}
            <Card className="mb-8 border-border shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Internship Tasks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {internship.tasks.map((task, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground pt-1">{task}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Learnings */}
            <Card className="mb-8 border-border shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  What You'll Learn
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {internship.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{learning}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Apply Button */}
            <div className="bg-secondary p-8 rounded-xl text-center border border-border">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="text-muted-foreground mb-6">
                Join hundreds of students who have completed their internships with CodeIntern
              </p>
              <Button 
                size="lg"
                onClick={() => setModalOpen(true)}
                className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 shadow-large"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ApplyModal 
        open={modalOpen} 
        onOpenChange={setModalOpen}
        internshipTitle={internship.title}
      />
    </div>
  );
};

export default InternshipDetail;
