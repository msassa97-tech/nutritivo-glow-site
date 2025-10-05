import { Leaf, MapPin, Instagram, MessageCircle } from "lucide-react";
import logoFooter from "@/assets/logo-footer.png";
const Footer = () => {
  const sections = [{
    title: "Contato",
    links: [{
      name: "WhatsApp",
      href: "https://wa.me/5583999999999"
    }, {
      name: "Instagram",
      href: "#"
    }, {
      name: "Facebook",
      href: "#"
    }, {
      name: "Localização",
      href: "#"
    }]
  }];
  const socialLinks = [{
    icon: <Instagram className="size-5" />,
    href: "#",
    label: "Instagram"
  }];
  const legalLinks = [{
    name: "Política de Privacidade",
    href: "#"
  }, {
    name: "Termos de Uso",
    href: "#"
  }];
  return <footer className="py-16 px-6 bg-card">
      <div className="container mx-auto">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-center lg:justify-center lg:text-center">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-center">
            {/* Logo */}
            <div className="flex justify-center lg:justify-center mb-4">
              <img 
                src={logoFooter} 
                alt="Luana Salvino Nutricionista" 
                className="h-16 w-auto"
              />
            </div>
            <div className="space-y-2 max-w-[70%] lg:mx-auto">
              <a href="https://wa.me/5583999999999" className="flex items-center gap-3 hover:text-primary transition-colors text-sm">
                <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Agendamentos via WhatsApp</span>
              </a>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Av. Dr. Aldo Matos de Sá, 1030 – Centro, Cajazeiras – PB</span>
              </div>
            </div>
            <ul className="flex items-center space-x-6 text-muted-foreground">
              {socialLinks.map((social, idx) => <li key={idx} className="font-medium hover:text-primary transition-colors">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-primary/10 py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:justify-center md:text-center">
          <p className="order-2 lg:order-1 text-center">© 2024 Nutricionista Luana Salvino. Todos os direitos reservados.</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row md:gap-6">
            {legalLinks.map((link, idx) => <li key={idx} className="hover:text-primary">
                
              </li>)}
          </ul>
        </div>
      </div>
    </footer>;
};
export default Footer;