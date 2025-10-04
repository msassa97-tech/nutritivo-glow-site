import { Button } from "@/components/ui/button";
import heroImage from "@/assets/nutritionist-hero.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 gap-0 items-center min-h-screen">
          {/* Content - Left */}
          <div className="px-8 py-16 lg:px-16 lg:py-20 flex items-center justify-center">
            <div className="max-w-xl">
              <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
                NOURISH.<br />
                GLOW. LIVE.
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Personalized nutrition for a balanced and vibrant life.
              </p>
              <Button variant="pill" size="xl">
                Start Your Journey
              </Button>
            </div>
          </div>
          
          {/* Image - Right */}
          <div className="h-full min-h-[600px] lg:min-h-screen">
            <img 
              src={heroImage}
              alt="Nutricionista profissional"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
