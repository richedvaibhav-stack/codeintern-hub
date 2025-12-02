import RevealOnScroll from "@/components/RevealOnScroll";
import { Gift, Package, Coffee, Droplet, Award, FileText, Sparkles } from "lucide-react";
import swagImage from "@/assets/CodeIntern_Swag.png";

const SwagSection = () => {
  const swagItems = [
    { icon: Award, text: "Official CodeIntern Cap" },
    { icon: Package, text: "Premium Backpack" },
    { icon: Coffee, text: "Branded Mug" },
    { icon: Droplet, text: "Water Bottle" },
    { icon: FileText, text: "Certificate Holder" },
    { icon: Gift, text: "Special Completion Note" },
    { icon: Sparkles, text: "Surprise Goodies 🎉" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              CodeIntern Swags – Your Achievement, Our Appreciation 🎁
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Every successful CodeIntern intern receives exclusive branded swags as a token of appreciation. 
              Complete your internship and proudly earn your CodeIntern goodies!
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <RevealOnScroll direction="left" delay={100}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 rounded-3xl blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-card rounded-2xl p-8 shadow-xl border border-border overflow-hidden">
                <img 
                  src={swagImage} 
                  alt="CodeIntern Swags - Cap, Backpack, Mug, Water Bottle, and more exclusive branded merchandise"
                  className="w-full h-auto rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={200}>
            <div className="space-y-6">
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-lg font-semibold text-foreground">
                  Complete your 1-Month Internship and get CodeIntern Swags delivered to you as early as possible.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold mb-4 text-foreground">What You'll Receive:</h3>
                {swagItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border/50 hover:bg-card hover:border-border transition-all duration-300 hover:translate-x-2"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <span className="text-foreground font-medium">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default SwagSection;
