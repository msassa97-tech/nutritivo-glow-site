import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/nutritionist-hero-new.png";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

const Hero = () => {
  const { toast } = useToast();
  
  const handleConsulta = () => {
    toast({
      title: "Agendamento de Consulta",
      description: "Em breve você será redirecionado para o WhatsApp.",
    });
  };
  
  return (
    <AuroraBackground className="min-h-screen">
      <section className="min-h-screen flex items-center relative overflow-hidden w-full">
        <div className="w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-0 items-center min-h-screen">
            {/* Content - Left */}
            <div className="px-6 sm:px-8 py-16 lg:px-16 lg:py-20 flex items-center justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="max-w-xl"
              >
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
              </motion.div>
            </div>
            
            {/* Image - Right */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="h-[500px] sm:h-[600px] lg:h-[85vh] relative flex items-center justify-center p-2 sm:p-4 lg:p-8"
            >
              <img 
                src={heroImage}
                alt="Nutricionista profissional"
                className="w-auto h-full max-w-full object-contain rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/20 rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>
    </AuroraBackground>
  );
};

export default Hero;
