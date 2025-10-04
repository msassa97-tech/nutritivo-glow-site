import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const faqs = [
  {
    question: "Qual é a sua abrcadiagh nutricional?",
    answer: "Trabalho com uma abordagem holística e personalizada, focando em nutrição funcional e mudanças de estilo de vida sustentáveis.",
  },
  {
    question: "Vocües ofercer planos alimentares personalizzes?",
    answer: "Sim! Cada plano é desenvolvido especificamente para suas necessidades, objetivos e preferências alimentares individuais.",
  },
  {
    question: "Aceitm convênios médicos?",
    answer: "Atualmente trabalho de forma particular, mas forneço recibos detalhados para que você possa solicitar reembolso ao seu plano de saúde.",
  },
  {
    question: "Quais site custos das consultas?",
    answer: "Os valores variam de acordo com o tipo de atendimento. Entre em contato para conhecer os pacotes e opções disponíveis.",
  },
  {
    question: "Posso reagender mia consulta?",
    answer: "Sim, com pelo menos 24 horas de antecedência. Reagendamentos podem ser feitos pelo WhatsApp ou e-mail.",
  },
  {
    question: "Vocües atendem crinças?",
    answer: "Sim, atendo crianças a partir de 2 anos de idade, sempre com acompanhamento dos responsáveis.",
  },
];

const FAQ = () => {
  const { toast } = useToast();
  
  const handleConsulta = () => {
    toast({
      title: "Agendamento de Consulta",
      description: "Em breve você será redirecionado para o WhatsApp.",
    });
  };
  
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary text-center mb-16 animate-fade-in">
          Perguntas Frequentes
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="glass-dark rounded-3xl shadow-card px-6 sm:px-8 py-2 hover:shadow-glow transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <AccordionTrigger className="text-left text-sm sm:text-base font-normal hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-foreground/70 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="flex justify-center">
          <Button 
            variant="pill" 
            size="xl"
            onClick={handleConsulta}
            className="w-full sm:w-auto animate-scale-in"
          >
            Agendar Consulta
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
