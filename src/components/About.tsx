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
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full blur-[300px] -z-10 bg-primary/20" />
      
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          {/* Image */}
          <div className="relative shadow-2xl shadow-primary/40 rounded-2xl overflow-hidden shrink-0 w-full md:w-auto">
            <img 
              className="max-w-md w-full object-cover rounded-2xl aspect-square"
              src={aboutImage}
              alt="Luana Salvino - Nutricionista"
            />
          </div>
          
          {/* Content */}
          <div className="text-sm text-foreground/80 max-w-lg">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Sou Luana Salvino, nutricionista
            </h2>
            <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-primary to-primary/30 mt-3" />
            
            <p className="mt-8">
              Atendo na Clínica Virtus, em Cajazeiras – PB, e minha missão é mostrar que é possível mudar sua alimentação com leveza, prazer e resultados reais.
            </p>
            
            <p className="mt-4">
              Nada de fórmulas prontas. Aqui, a nutrição é construída junto com você, respeitando o seu tempo, sua história e o que funciona na sua rotina.
            </p>
            
            <Button 
              variant="pill" 
              size="xl" 
              onClick={handleConsulta}
              className="flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition w-full sm:w-auto"
            >
              <span>Quero começar minha jornada com você</span>
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                  fill="currentColor"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
