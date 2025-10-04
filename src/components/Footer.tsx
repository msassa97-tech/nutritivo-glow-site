import { Leaf, Phone, MapPin, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-primary/10">
      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Logo & tagline */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
              <Leaf className="w-8 h-8 text-primary" />
              <div>
                <div className="font-bold text-lg">NUTRIÇÃO & BEM-ESTAR</div>
                <div className="text-sm text-primary/70">Nourish Your Journey</div>
              </div>
            </div>
          </div>
          
          {/* Contact info */}
          <div className="space-y-3 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-sm">Telefone: (11, 1234-5678</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-sm">Email: contato@nutrição.com</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm">Endereço: R. Saudável, 123 - Saúde SP</span>
            </div>
          </div>
          
          {/* Social media */}
          <div className="flex items-center justify-center lg:justify-end gap-4">
            <a 
              href="#" 
              className="w-14 h-14 bg-primary/10 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="w-14 h-14 bg-primary/10 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="w-14 h-14 bg-primary/10 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary/10 text-center text-sm text-foreground/60">
          <p>© 2024 Nutrição & Bem-Estar. Todos és dorritos reservedo.</p>
          <div className="flex justify-center gap-6 mt-2">
            <a href="#" className="text-primary hover:underline">Política de Prividade</a>
            <a href="#" className="text-primary hover:underline">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
