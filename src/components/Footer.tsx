import { Leaf, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-primary/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
          {/* Logo & tagline */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
              <Leaf className="w-8 h-8 text-primary" />
              <div>
                <div className="font-bold text-base sm:text-lg">Nutricionista Luana Salvino</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Atendimento presencial na Clínica Virtus</div>
              </div>
            </div>
          </div>
          
          {/* Contact info */}
          <div className="space-y-3 text-center sm:text-left">
            <a href="https://wa.me/5583999999999" className="flex items-center justify-center sm:justify-start gap-3 hover:text-primary transition-colors">
              <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm">Agendamentos via WhatsApp</span>
            </a>
            <div className="flex items-start justify-center sm:justify-start gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm">Av. Dr. Aldo Matos de Sá, 1030 – Centro, Cajazeiras – PB</span>
            </div>
          </div>
          
          {/* Social media */}
          <div className="flex items-center justify-center sm:justify-start lg:justify-end gap-4">
            <a 
              href="#" 
              className="w-12 h-12 sm:w-14 sm:h-14 glass-dark hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 sm:w-14 sm:h-14 glass-dark hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 sm:w-14 sm:h-14 glass-dark hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary/10 text-center text-xs sm:text-sm text-foreground/60">
          <p>© 2024 Nutricionista Luana Salvino. Todos os direitos reservados.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-2">
            <a href="#" className="text-primary hover:underline">Política de Privacidade</a>
            <a href="#" className="text-primary hover:underline">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
