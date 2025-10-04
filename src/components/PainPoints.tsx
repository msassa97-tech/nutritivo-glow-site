import { Moon, Heart, Waypoints, Leaf } from "lucide-react";

const painPoints = [
  {
    icon: Moon,
    title: "FEEL TIRED ALL TIME",
    description: "Low energy, brain fog, and constant fatigue holding you back from living fully.",
  },
  {
    icon: Heart,
    title: "STRUGGLE WITH YOUR RELATIONSHIP WITH FOOD",
    description: "Yo-yo dieting, emotional eating and guilt around meals.",
  },
  {
    icon: Waypoints,
    title: "DON'T KNOW WHERE TO START WITH HEALTHY EATING",
    description: "Overwhelmed by conflicting and endless diet trends.",
  },
  {
    icon: Leaf,
    title: "WANT TO LOSE WEIGHT SUSTAINABLY",
    description: "Frustrated by temporary fixes and ready to lasting change.",
  },
];

const PainPoints = () => {
  return (
    <section className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-black text-center mb-16">
          IF YOU...
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-3xl p-8 shadow-card border border-primary/20 hover:shadow-soft transition-shadow duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <Icon className="w-12 h-12 text-primary stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black mb-3">
                      {point.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
