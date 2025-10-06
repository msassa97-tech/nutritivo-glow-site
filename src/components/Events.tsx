import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import eventSeminar from "@/assets/event-seminar.jpg";
import eventCooking from "@/assets/event-cooking.jpg";
import eventRetreat from "@/assets/event-retreat.jpg";
import eventCongress from "@/assets/event-congress.jpg";

const events = [
  {
    src: eventCongress,
    name: "Congresso Saúde da Mulher",
    designation: "15 de setembro de 2025",
    quote: "Participo ativamente de congressos, formações e eventos para oferecer o que há de mais atual, ético e eficaz na nutrição clínica."
  },
  {
    src: eventSeminar,
    name: "Holistic Health Seminar",
    designation: "'Eating for Energy' talk",
    quote: "Participo ativamente de congressos, formações e eventos para oferecer o que há de mais atual, ético e eficaz na nutrição clínica."
  },
  {
    src: eventCooking,
    name: "Cooking for Wellness Workshop",
    designation: "November 15, 2024 | Plant-based meal prep",
    quote: "Nutrição baseada em ciência, não em modismos. Workshops práticos para transformar sua relação com a comida."
  },
  {
    src: eventRetreat,
    name: "Mindful Movement & Nutrition Retreat",
    designation: "Weekend wellness getaway",
    quote: "Retiros e experiências imersivas focadas em bem-estar integral, unindo nutrição, movimento e autocuidado."
  }
];
const Events = () => {
  const { toast } = useToast();
  
  const handleConsulta = () => {
    toast({
      title: "Agendamento de Consulta",
      description: "Em breve você será redirecionado para o WhatsApp."
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center animate-fade-in">
          Congressos e eventos
        </h2>
        
        <div className="flex items-center justify-center w-full my-12">
          <CircularTestimonials
            testimonials={events}
            autoplay={true}
            colors={{
              name: "hsl(var(--foreground))",
              designation: "hsl(var(--muted-foreground))",
              testimony: "hsl(var(--foreground) / 0.8)",
              arrowBackground: "hsl(var(--primary))",
              arrowForeground: "hsl(var(--primary-foreground))",
              arrowHoverBackground: "hsl(var(--accent))",
            }}
            fontSizes={{
              name: "24px",
              designation: "16px",
              quote: "18px",
            }}
          />
        </div>
        
        <div className="flex justify-center mt-12">
          <Button 
            variant="pill" 
            size="xl" 
            onClick={handleConsulta} 
            className="w-full sm:w-auto animate-scale-in"
          >
            QUERO SER ACOMPANHADA
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Events;