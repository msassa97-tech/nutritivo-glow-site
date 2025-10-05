import { Moon, Heart, Waypoints, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const painPoints = [
  {
    icon: Moon,
    title: "Sente cansaço o tempo todo",
    description: "Falta de energia, mente confusa, corpo pesado — e nenhuma dieta resolve.",
  },
  {
    icon: Heart,
    title: "Tem uma relação difícil com a comida",
    description: "Entre dietas, culpa e recomeços, você sente que nunca consegue manter o equilíbrio.",
  },
  {
    icon: Waypoints,
    title: "Não sabe por onde começar",
    description: "São tantas informações e modismos que tudo parece confuso demais.",
  },
  {
    icon: Leaf,
    title: "Quer emagrecer de forma sustentável",
    description: "Você está cansada de soluções temporárias. O que busca é mudança duradoura, com saúde.",
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
    <section className="py-12 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 animate-fade-in">
          Se você...
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          Você merece um cuidado que te entenda de verdade. Me diga se alguma dessas situações soa familiar:
        </p>
        
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
                    <h3 className="text-base sm:text-lg font-bold mb-3">
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
            Sim, eu preciso disso
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
