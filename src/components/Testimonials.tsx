import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const testimonialImages = [
  { id: "1", src: testimonial1, alt: "Depoimento 1" },
  { id: "2", src: testimonial2, alt: "Depoimento 2" },
  { id: "3", src: testimonial3, alt: "Depoimento 3" },
  { id: "4", src: testimonial4, alt: "Depoimento 4" },
];

const Testimonials = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  useEffect(() => {
    checkScrollability();
  }, []);

  return (
    <section className="py-20 px-0 sm:px-4 relative overflow-hidden bg-card">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 animate-fade-in">
            O que dizem minhas pacientes
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
            Histórias reais de transformação e bem-estar
          </p>
        </div>
        
        <div className="relative w-full mt-10 px-2 sm:px-4">
          <div
            className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] py-5"
            ref={carouselRef}
            onScroll={checkScrollability}
          >
            <div className="flex flex-row justify-start gap-4 pl-4 pr-4 w-full">
              {testimonialImages.map((testimonial, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                  }}
                  key={testimonial.id}
                  className="last:pr-[5%] md:last:pr-[33%]"
                >
                  <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-[280px] md:w-[320px]">
                    <img
                      src={testimonial.src}
                      alt={testimonial.alt}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-4 pr-2 sm:pr-4">
            <button
              className="relative z-40 h-10 w-10 rounded-full bg-primary flex items-center justify-center disabled:opacity-50 hover:bg-primary/80 transition-colors duration-200"
              onClick={handleScrollLeft}
              disabled={!canScrollLeft}
            >
              <ArrowLeft className="h-6 w-6 text-primary-foreground" />
            </button>
            <button
              className="relative z-40 h-10 w-10 rounded-full bg-primary flex items-center justify-center disabled:opacity-50 hover:bg-primary/80 transition-colors duration-200"
              onClick={handleScrollRight}
              disabled={!canScrollRight}
            >
              <ArrowRight className="h-6 w-6 text-primary-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
