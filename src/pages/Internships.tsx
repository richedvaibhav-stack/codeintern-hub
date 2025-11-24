import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternshipCard from "@/components/InternshipCard";
import SEO from "@/components/SEO";
import { internships } from "@/data/internships";

const Internships = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="All Internship Programs"
        description="Explore comprehensive 1-month task-based internships in Web Development, Python, C++, Java, React, SQL, MongoDB, UI/UX Design, DevOps, and more. Free certified online internships for students and freshers."
        canonicalUrl="https://yourwebsite.com/internships"
      />
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Internship Programs</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our comprehensive range of 1-month task-based internships designed to enhance your technical skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internships.map((internship, index) => (
              <div 
                key={internship.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <InternshipCard internship={internship} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Internships;
