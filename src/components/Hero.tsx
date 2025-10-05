import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/nutritionist-hero-new.png";
import logoBlack from "@/assets/logo-black.png";
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
    <AuroraBackground className="min-h-screen bg-background">
      <section className="min-h-screen flex items-start lg:items-center relative overflow-hidden w-full">
        <div className="w-full relative z-10 h-full">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0 items-stretch min-h-screen">
            {/* Content - Top on mobile, Left on desktop */}
            <div className="w-full px-6 sm:px-8 py-8 sm:py-12 lg:px-16 lg:py-20 flex items-center justify-center order-1 lg:order-1">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="max-w-xl w-full text-center lg:text-left"
              >
                <img 
                  src={logoBlack} 
                  alt="Logo Nutricionista Luana Salvino" 
                  className="w-48 mx-auto lg:mx-0 mb-6"
                />
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  A nutrição que acolhe, ensina e transforma
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8">
                  Comer bem não precisa ser difícil, radical ou distante da sua realidade
                </p>
                <Button 
                  variant="pill" 
                  size="xl" 
                  onClick={handleConsulta}
                  className="w-full sm:w-auto"
                >
                  Agende sua consulta
                </Button>
              </motion.div>
            </div>

            {/* Image - Bottom on mobile, Right on desktop */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="w-full flex-1 lg:h-[85vh] relative flex items-end lg:items-center justify-center px-0 pb-0 lg:p-8 order-2 lg:order-2"
            >
              <img 
                src={heroImage}
                alt="Nutricionista profissional"
                className="w-full h-full object-cover object-bottom lg:object-contain lg:rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/20 lg:rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>
    </AuroraBackground>
  );
};

export default Hero;
