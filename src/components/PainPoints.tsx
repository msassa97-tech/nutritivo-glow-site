import { Moon, Heart, Waypoints, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const painPoints = [
  {
    icon: Moon,
    title: "FEEL TIRED ALL TIME",
    description: "Low energy, brain fog, and constant fatigue holding you back from living fully.",
  },
  {
    icon: Heart,
    title: "STRUGGLE WITH YOUR RELATIONSHIP WITH FOOD",
    description: "Yo-yo dieting, emotional eating and guilt around meals.",
  },
  {
    icon: Waypoints,
    title: "DON'T KNOW WHERE TO START WITH HEALTHY EATING",
    description: "Overwhelmed by conflicting and endless diet trends.",
  },
  {
    icon: Leaf,
    title: "WANT TO LOSE WEIGHT SUSTAINABLY",
    description: "Frustrated by temporary fixes and ready to lasting change.",
  },
];

const PainPoints = () => {
  const { toast } = useToast();
  
  const handleConsulta = () => {
    toast({
      title: "Agendamento de Consulta",
      description: "Em breve você será redirecionado para o WhatsApp.",
    });
  };
  
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-16 animate-fade-in">
          IF YOU...
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div 
                key={index}
                className="glass-dark rounded-3xl p-6 sm:p-8 shadow-card hover:shadow-glow transition-all duration-500 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black mb-3">
                      {point.title}
                    </h3>
                    <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
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

export default PainPoints;
