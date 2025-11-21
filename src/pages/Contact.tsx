import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageCircle, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long is the internship?",
    answer: "Each internship program is designed to be completed within 1 month. However, you can work at your own pace and complete the tasks according to your schedule within this timeframe."
  },
  {
    question: "How many tasks do I need to complete?",
    answer: "Each internship consists of 3 practical tasks that are designed to give you hands-on experience with real-world projects. These tasks progressively build your skills and knowledge in your chosen domain."
  },
  {
    question: "How do I get the certificate?",
    answer: "Once you successfully complete all 3 tasks and submit them for review, our team will evaluate your work. Upon approval, you will receive an official CodeIntern internship completion certificate via email."
  },
  {
    question: "Is this internship free?",
    answer: "Yes, all our internship programs are completely free for students. We believe in making quality education and practical experience accessible to everyone."
  },
  {
    question: "Do I need prior experience?",
    answer: "Basic knowledge of the respective domain is recommended but not mandatory. Each internship is designed to take you from beginner to intermediate level with proper guidance and resources."
  },
  {
    question: "Will I get support during the internship?",
    answer: "Absolutely! You'll be added to a dedicated WhatsApp group where you can interact with mentors and fellow interns. You'll receive guidance, resources, and support throughout your internship journey."
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact <span className="bg-gradient-primary bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Have questions? We're here to help you get started
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <Card className="border-border shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Send us an email and we'll get back to you within 24 hours
                </p>
                <a 
                  href="mailto:contact@codeintern.com" 
                  className="text-primary hover:text-primary-dark transition-colors font-medium"
                >
                  contact@codeintern.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-border shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>WhatsApp Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Join our WhatsApp group for instant support and community interaction
                </p>
                <span className="text-primary font-medium">
                  Link will be shared after registration
                </span>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium mb-4">
                <HelpCircle className="w-4 h-4 text-primary" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl font-bold">Common Questions</h2>
            </div>

            <Card className="border-border shadow-soft">
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left hover:text-primary transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
