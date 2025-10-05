import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import eventSeminar from "@/assets/event-seminar.jpg";
import eventCooking from "@/assets/event-cooking.jpg";
import eventRetreat from "@/assets/event-retreat.jpg";

const events = [
  {
    image: eventSeminar,
    title: "Holistic Health Seminar",
    subtitle: "| 'Eating for Energy' talk",
  },
  {
    image: eventCooking,
    title: "Cooking for Wellness Workshop",
    subtitle: "November 15, 2024 | Plant-based meal prep",
  },
  {
    image: eventRetreat,
    title: "Mindful Movement & Nutrition Retreat",
    subtitle: "| Weekend wellness getaway",
  },
];

const Events = () => {
  const { toast } = useToast();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);
  
  const handleConsulta = () => {
    toast({
      title: "Agendamento de Consulta",
      description: "Em breve você será redirecionado para o WhatsApp.",
    });
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 animate-fade-in">
          Congressos e eventos
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Nutrição baseada em ciência, não em modismos
        </p>
        <p className="text-base text-muted-foreground mb-16 max-w-3xl">
          Participo ativamente de congressos, formações e eventos para oferecer o que há de mais atual, ético e eficaz na nutrição clínica.
        </p>
        
        <div className="relative">
          {/* Navigation buttons - Hidden on mobile */}
          <Button
            variant="pill"
            size="icon"
            onClick={scrollPrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 shadow-soft"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            variant="pill"
            size="icon"
            onClick={scrollNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 shadow-soft"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
          
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 px-0 md:px-16">
              {events.map((event, index) => (
                <div 
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_80%] md:flex-[0_0_calc(33.333%-16px)] min-w-0"
                >
                  <div className="glass-dark rounded-3xl shadow-card overflow-hidden hover:shadow-glow transition-all duration-500 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-base sm:text-lg mb-2">
                        {event.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/60">
                        {event.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center gap-3 mt-8">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? "bg-primary w-8" : "bg-primary/30"
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <Button 
            variant="pill" 
            size="xl"
            onClick={handleConsulta}
            className="w-full sm:w-auto animate-scale-in"
          >
            Quero ser acompanhada por uma profissional atualizada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
