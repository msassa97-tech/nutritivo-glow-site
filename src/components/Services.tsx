import { Utensils, MessageSquare, Users, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();
  
  const handleConsulta = () => {
    toast({
      title: "Agendamento de Consulta",
      description: "Em breve você será redirecionado para o WhatsApp.",
    });
  };
  
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-16 animate-fade-in">
          HOW CAN I HELP YOU
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="glass-dark rounded-3xl p-6 sm:p-8 shadow-card hover:shadow-glow transition-all duration-500 text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary stroke-[1.5]" />
                </div>
                <h3 className="text-sm sm:text-base font-black mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="flex justify-center">
          <Button 
            variant="pill" 
            size="xl"
            onClick={handleConsulta}
            className="w-full sm:w-auto animate-scale-in"
          >
            Agendar Consulta
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
