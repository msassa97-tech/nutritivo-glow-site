import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container max-w-5xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-light text-primary mb-12 leading-relaxed">
          Nourish Your Body,<br />
          Transform you Life
        </h2>
        
        <div className="relative bg-card rounded-3xl shadow-soft border border-primary/20 overflow-hidden aspect-video max-w-4xl mx-auto group cursor-pointer hover:shadow-soft transition-shadow duration-300">
          {/* Placeholder for video thumbnail */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/20 backdrop-blur-sm flex items-center justify-center">
            <div className="w-24 h-24 bg-primary/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft">
              <Play className="w-10 h-10 text-white fill-white ml-1" />
            </div>
          </div>
        </div>
        
        <p className="text-primary text-lg mt-6 font-light">
          Watch Our Introductiry Video
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
