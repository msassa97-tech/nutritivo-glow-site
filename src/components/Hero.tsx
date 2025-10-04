import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/nutritionist-hero.jpg";

const Hero = () => {
  const { toast } = useToast();
  
  const handleConsulta = () => {
    toast({
      title: "Agendamento de Consulta",
      description: "Em breve você será redirecionado para o WhatsApp.",
    });
  };
  
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Decorative blur elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-0 items-center min-h-screen">
          {/* Content - Left */}
          <div className="px-6 sm:px-8 py-16 lg:px-16 lg:py-20 flex items-center justify-center">
            <div className="max-w-xl animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                NOURISH.<br />
                GLOW. LIVE.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8">
                Personalized nutrition for a balanced and vibrant life.
              </p>
              <Button 
                variant="pill" 
                size="xl" 
                onClick={handleConsulta}
                className="w-full sm:w-auto"
              >
                Agendar Consulta
              </Button>
            </div>
          </div>
          
          {/* Image - Right */}
          <div className="h-[500px] sm:h-[600px] lg:h-screen relative">
            <img 
              src={heroImage}
              alt="Nutricionista profissional"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
