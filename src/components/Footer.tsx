import { Leaf, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  const sections = [
    {
      title: "Contato",
      links: [
        { name: "WhatsApp", href: "https://wa.me/5583999999999" },
        { name: "Instagram", href: "#" },
        { name: "Facebook", href: "#" },
        { name: "Localização", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Instagram className="size-5" />, href: "#", label: "Instagram" },
    { icon: <Facebook className="size-5" />, href: "#", label: "Facebook" },
    { icon: <MessageCircle className="size-5" />, href: "https://wa.me/5583999999999", label: "WhatsApp" },
  ];

  const legalLinks = [
    { name: "Política de Privacidade", href: "#" },
    { name: "Termos de Uso", href: "#" },
  ];

  return (
    <footer className="py-32 px-6">
      <div className="container mx-auto">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-3 lg:justify-start">
              <Leaf className="w-8 h-8 text-primary" />
              <div>
                <h2 className="text-xl font-bold">Nutricionista Luana Salvino</h2>
                <p className="text-sm text-muted-foreground">Atendimento presencial na Clínica Virtus</p>
              </div>
            </div>
            <div className="space-y-3 max-w-[70%]">
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
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-primary transition-colors">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-primary/10 py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">© 2024 Nutricionista Luana Salvino. Todos os direitos reservados.</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row md:gap-6">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary transition-colors">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
