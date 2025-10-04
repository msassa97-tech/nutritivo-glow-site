import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  return (
    <section className="py-20 px-6">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-black mb-16">
          EVENTS & WORKSHOPS
        </h2>
        
        <div className="relative">
          {/* Navigation buttons */}
          <Button
            variant="pill"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 shadow-soft"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            variant="pill"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 shadow-soft"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
          
          {/* Events grid */}
          <div className="grid md:grid-cols-3 gap-6 px-16">
            {events.map((event, index) => (
              <div 
                key={index}
                className="bg-card rounded-3xl shadow-card overflow-hidden hover:shadow-soft transition-shadow duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-foreground/60">
                    {event.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center gap-3 mt-8">
            {[0, 1, 2, 3, 4].map((dot) => (
              <button
                key={dot}
                className={`w-3 h-3 rounded-full transition-colors ${
                  dot === 0 ? "bg-primary" : "bg-primary/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
