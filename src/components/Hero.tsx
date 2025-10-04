import { Button } from "@/components/ui/button";
import heroImage from "@/assets/nutritionist-hero.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16 lg:py-24">
      <div className="container max-w-7xl">
        <div className="bg-card rounded-[2rem] shadow-soft overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img 
                src={heroImage}
                alt="Nutricionista profissional"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2 px-8 py-16 lg:px-16 lg:py-20 text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
                NOURISH.<br />
                GLOW. LIVE.
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto lg:mx-0">
                Personalized nutrition for a balanced and vibrant life.
              </p>
              <Button variant="pill" size="xl">
                Start Your Journey
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
