import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import { Internship } from "@/data/internships";

interface InternshipCardProps {
  internship: Internship;
}

const InternshipCard = ({ internship }: InternshipCardProps) => {
  const IconComponent = Icons[internship.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <Card className="group hover:shadow-large transition-all duration-300 border-border hover:border-primary/50 h-full flex flex-col">
      <CardHeader>
        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          {IconComponent && <IconComponent className="w-6 h-6 text-primary-foreground" />}
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {internship.title}
        </CardTitle>
        <CardDescription className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4" />
          {internship.duration}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground mb-4">{internship.description}</p>
        <div className="flex flex-wrap gap-2">
          {internship.skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="secondary" className="bg-secondary">
              {skill}
            </Badge>
          ))}
          {internship.skills.length > 3 && (
            <Badge variant="secondary" className="bg-secondary">
              +{internship.skills.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          asChild 
          className="w-full bg-gradient-primary hover:opacity-90 transition-opacity group"
        >
          <Link to={`/internship/${internship.id}`}>
            View Details
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InternshipCard;
