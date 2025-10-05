import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const VideoSection = () => {
  const { toast } = useToast();

  const handleConsulta = () => {
    toast({
      title: "Agendamento de Consulta",
      description: "Em breve você será redirecionado para o WhatsApp."
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 leading-relaxed animate-fade-in">
          Uma consulta que vai além da balança
        </h2>
        
        <div className="relative max-w-md mx-auto animate-scale-in">
          <iframe
            src="https://www.instagram.com/reel/DNl1faooYdx/embed"
            className="w-full rounded-3xl shadow-card hover:shadow-glow transition-all duration-500"
            style={{
              height: '700px',
              border: 'none',
              overflow: 'hidden'
            }}
            scrolling="no"
            allowTransparency={true}
            allow="encrypted-media"
          />
        </div>
        
        <p className="text-muted-foreground text-base sm:text-lg mt-8 mb-8 max-w-3xl mx-auto">
          Você será acolhida, ouvida e orientada com base em evidências, empatia e respeito.
        </p>
        
        <Button variant="pill" size="xl" onClick={handleConsulta} className="w-full sm:w-auto">
          AGENDAR MINHA CONSULTA
        </Button>
      </div>
    </section>
  );
};

export default VideoSection;
