import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Award, AlertCircle, CheckCircle, Calendar, Clock, User, IdCard } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

interface InternRecord {
  name: string;
  internId: string;
  duration: string;
  length: string;
  taskStatus: string;
  eligibility: string;
  message: string;
}

const internDatabase: Record<string, InternRecord> = {
  "COE/OCT015": {
    name: "Elesh Rodge",
    internId: "COE/OCT015",
    duration: "1 October – 31 October",
    length: "1 Month",
    taskStatus: "All Assigned Tasks Completed",
    eligibility: "Eligible – Certificate Approved",
    message: "Congratulations Elesh! You have successfully completed your 1-Month Internship at CodeIntern by completing all assigned tasks. Your certificate will be issued shortly."
  },
  "CI/DEC009": {
    name: "Sanket Rajesaheb Hake",
    internId: "CI/DEC009",
    duration: "1 October – 31 October",
    length: "1 Month",
    taskStatus: "All Assigned Tasks Completed",
    eligibility: "Eligible – Certificate Approved",
    message: "Congratulations Sanket! You have successfully completed your UI/UX Design Internship at CodeIntern by completing all assigned tasks. Your certificate will be issued shortly."
  },
  "DEC003": {
    name: "Shubham Shashikant Pol",
    internId: "DEC003",
    duration: "1 December – 31 December",
    length: "1 Month",
    taskStatus: "All Assigned Tasks Completed",
    eligibility: "Eligible – Certificate Approved",
    message: "Congratulations Shubham Shashikant Pol! You have successfully completed your 1-Month Internship at CodeIntern from 1 December to 31 December with all assigned tasks completed. You are eligible for the Internship Completion Certificate."
  }
};

const CertificateStatus = () => {
  const [internId, setInternId] = useState("");
  const [searchResult, setSearchResult] = useState<InternRecord | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    const trimmedId = internId.trim().toUpperCase();
    setHasSearched(true);
    
    if (internDatabase[trimmedId]) {
      setSearchResult(internDatabase[trimmedId]);
      setNotFound(false);
    } else {
      setSearchResult(null);
      setNotFound(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section id="certificate-status" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Check Your Certificate Status
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Enter your Intern ID to verify your internship completion status and certificate eligibility
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <Card className="mb-8 shadow-lg border-0 bg-card">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Enter your Intern ID"
                    value={internId}
                    onChange={(e) => setInternId(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="pl-10 h-12 text-base"
                  />
                </div>
                <Button 
                  onClick={handleSearch}
                  className="h-12 px-8 bg-gradient-primary hover:opacity-90 transition-opacity"
                >
                  Check Status
                </Button>
              </div>
            </CardContent>
          </Card>
        </RevealOnScroll>

        {/* Success Result */}
        {hasSearched && searchResult && (
          <div className="animate-fade-in">
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="bg-gradient-primary p-6 text-primary-foreground">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">🎉 Certificate Status Found!</h3>
                    <p className="text-primary-foreground/80">Your internship record has been verified</p>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                    <User className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Intern Name</p>
                      <p className="font-semibold">{searchResult.name}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                    <IdCard className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Intern ID</p>
                      <p className="font-semibold">{searchResult.internId}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                    <Calendar className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Internship Duration</p>
                      <p className="font-semibold">{searchResult.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Internship Length</p>
                      <p className="font-semibold">{searchResult.length}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <div>
                      <p className="text-sm text-muted-foreground">Tasks Status</p>
                      <p className="font-semibold text-green-700 dark:text-green-300">{searchResult.taskStatus}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <Award className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <div>
                      <p className="text-sm text-muted-foreground">Certificate Eligibility</p>
                      <p className="font-semibold text-green-700 dark:text-green-300">✔ {searchResult.eligibility}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-1">Message</p>
                  <p className="text-foreground italic">"{searchResult.message}"</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Not Found Result */}
        {hasSearched && notFound && (
          <div className="animate-fade-in">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-xl font-bold mb-2">❌ No Record Found</h3>
                <p className="text-muted-foreground">
                  Please enter a valid Intern ID. If you believe this is an error, contact us at{" "}
                  <a href="mailto:support@codeintern.in" className="text-primary hover:underline">
                    support@codeintern.in
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificateStatus;
