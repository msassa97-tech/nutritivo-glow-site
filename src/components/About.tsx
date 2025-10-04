import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import aboutImage from "@/assets/nutritionist-about.jpg";

const About = () => {
  const { toast } = useToast();
  
  const handleConsulta = () => {
    toast({
      title: "Agendamento de Consulta",
      description: "Em breve você será redirecionado para o WhatsApp.",
    });
  };
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-40 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-0 items-center">
          {/* Image */}
          <div className="h-[500px] sm:h-[600px] lg:h-[700px] relative">
            <img 
              src={aboutImage}
              alt="Sobre a nutricionista"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/10" />
          </div>
          
          {/* Content */}
          <div className="px-6 sm:px-8 py-16 lg:px-16 lg:py-20 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8">
              MY STORY
            </h2>
            <div className="space-y-6 text-foreground/80">
              <p>
                From a young age, I was fascinated by food to nourish and heal.
              </p>
              <p>
                Today, as certified nutritionist, my own struggles by the health led me am passionate others achieve to balance and vitality wensity through personalized wellness plans.
              </p>
            </div>
            
            <div className="mt-10 pt-8 border-t border-border">
              <p className="font-bold text-foreground mb-2">
                Credentials:
              </p>
              <p className="text-foreground/80">
                Certified Nutritionist (CN), Diploma in Holistic Health
              </p>
            </div>
            
            <Button 
              variant="pill" 
              size="xl" 
              onClick={handleConsulta}
              className="mt-8 w-full sm:w-auto"
            >
              Agendar Consulta
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
