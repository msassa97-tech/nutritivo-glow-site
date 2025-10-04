import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  return (
    <section className="py-20 px-6">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-light text-primary text-center mb-16">
          Perguntas Frequentes
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-3xl shadow-card border border-primary/20 px-8 py-2 hover:shadow-soft transition-shadow duration-300"
            >
              <AccordionTrigger className="text-left font-normal hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
