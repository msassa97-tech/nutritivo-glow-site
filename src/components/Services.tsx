import { Utensils, MessageSquare, Users, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Utensils,
    title: "PERSONAZIZED MEAL PLANS",
    description: "Customized eating guides for your health goals.",
  },
  {
    icon: MessageSquare,
    title: "ONE-IN-ONE COACHING",
    description: "Dedicated support and expert guidance.",
  },
  {
    icon: Users,
    title: "NUTRITION WORKSHOPS",
    description: "Group sessions for shared learning & growth",
  },
  {
    icon: Leaf,
    title: "LIFESTYLE TRANSFORMATION",
    description: "Holistic journey to shared gives and rounl eeting meals.",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-black text-center mb-16">
          HOW CAN I HELP YOU
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-3xl p-8 shadow-card border border-primary/20 hover:shadow-soft transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-6">
                  <Icon className="w-12 h-12 text-primary stroke-[1.5]" />
                </div>
                <h3 className="text-base font-black mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="flex justify-center">
          <Button variant="pill" size="xl">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
