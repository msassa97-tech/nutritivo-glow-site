import aboutImage from "@/assets/nutritionist-about.jpg";

const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="bg-card rounded-[2rem] shadow-soft overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            {/* Image */}
            <div>
              <img 
                src={aboutImage}
                alt="Sobre a nutricionista"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="px-8 py-16 lg:px-16 lg:py-20">
              <h2 className="text-4xl lg:text-5xl font-black mb-8">
                MY STORY
              </h2>
              <div className="space-y-6 text-foreground/80">
                <p>
                  From a young age, I was fascinated by food to nourish and heal.
                </p>
                <p>
                  Today, as certified nutritionist, my own struggles by the health led me am passionate others achieve to balance and vitality wensity through personalized wellness plans.
                </p>
              </div>
              
              <div className="mt-10 pt-8 border-t border-border">
                <p className="font-bold text-foreground mb-2">
                  Credentials:
                </p>
                <p className="text-foreground/80">
                  Certified Nutritionist (CN), Diploma in Holistic Health
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
