import { Carousel, TestimonialCard, iTestimonial } from "@/components/ui/retro-testimonial";

type TestimonialDetails = {
  [key: string]: iTestimonial & { id: string };
};

const testimonialData = {
  ids: [
    "testimonial-001",
    "testimonial-002",
    "testimonial-003",
    "testimonial-004",
    "testimonial-005",
    "testimonial-006",
  ],
  details: {
    "testimonial-001": {
      id: "testimonial-001",
      description:
        "A Luana transformou completamente minha relação com a comida. Sem dietas restritivas, aprendi a comer de forma equilibrada e prazerosa. Perdi peso de forma saudável e ganhei qualidade de vida.",
      profileImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop",
      name: "Ana Carolina Silva",
      designation: "Executiva",
    },
    "testimonial-002": {
      id: "testimonial-002",
      description:
        "Finalmente encontrei uma nutricionista que entende que cada pessoa é única. O plano alimentar foi feito pensando na minha rotina corrida e nos meus objetivos. Os resultados foram além das expectativas.",
      profileImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1287&auto=format&fit=crop",
      name: "Mariana Costa",
      designation: "Empresária",
    },
    "testimonial-003": {
      id: "testimonial-003",
      description:
        "Depois de anos lutando contra distúrbios alimentares, encontrei na Luana uma profissional empática e competente. Hoje tenho uma relação saudável com a comida e com meu corpo.",
      profileImage:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop",
      name: "Juliana Mendes",
      designation: "Designer",
    },
    "testimonial-004": {
      id: "testimonial-004",
      description:
        "A abordagem da Luana é baseada em ciência, mas também em empatia. Ela não julga, apenas orienta. Consegui alcançar meus objetivos sem sofrimento e com resultados duradouros.",
      profileImage:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop",
      name: "Patricia Oliveira",
      designation: "Professora",
    },
    "testimonial-005": {
      id: "testimonial-005",
      description:
        "Como mãe de dois filhos, precisava de um plano que funcionasse na prática. A Luana criou estratégias simples e eficazes que se encaixaram perfeitamente na minha rotina familiar.",
      profileImage:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1287&auto=format&fit=crop",
      name: "Fernanda Santos",
      designation: "Advogada",
    },
    "testimonial-006": {
      id: "testimonial-006",
      description:
        "Depois de anos fazendo dietas da moda sem sucesso, aprendi com a Luana que nutrição de verdade é sobre saúde, não sobre restrição. Hoje me sinto mais disposta e confiante.",
      profileImage:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1287&auto=format&fit=crop",
      name: "Camila Rodrigues",
      designation: "Arquiteta",
    },
  },
};

const Testimonials = () => {
  const cards = testimonialData.ids.map((cardId: string, index: number) => {
    const details = testimonialData.details as TestimonialDetails;
    return (
      <TestimonialCard
        key={cardId}
        testimonial={details[cardId]}
        index={index}
        backgroundImage="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop"
      />
    );
  });

  return (
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 animate-fade-in">
          O que dizem minhas pacientes
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
          Histórias reais de transformação e bem-estar
        </p>
        
        <Carousel items={cards} />
      </div>
    </section>
  );
};

export default Testimonials;
