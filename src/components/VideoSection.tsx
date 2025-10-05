import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const VideoSection = () => {
  const { toast } = useToast();
  
  const handleConsulta = () => {
    toast({
      title: "Agendamento de Consulta",
      description: "Em breve você será redirecionado para o WhatsApp.",
    });
  };
  
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 leading-relaxed animate-fade-in">
          Uma consulta que vai além da balança
        </h2>
        
        <div className="relative glass-dark rounded-3xl shadow-card overflow-hidden aspect-video max-w-4xl mx-auto group cursor-pointer hover:shadow-glow transition-all duration-500 animate-scale-in">
          {/* Placeholder for video thumbnail */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/20 backdrop-blur-sm flex items-center justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow">
              <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
            </div>
          </div>
        </div>
        
        <p className="text-muted-foreground text-base sm:text-lg mt-8 mb-8 max-w-3xl mx-auto">
          Você será acolhida, ouvida e orientada com base em evidências, empatia e respeito.
        </p>
        
        <Button 
          variant="pill" 
          size="xl"
          onClick={handleConsulta}
          className="w-full sm:w-auto"
        >
          Agendar minha consulta agora
        </Button>
      </div>
    </section>
  );
};

export default VideoSection;
