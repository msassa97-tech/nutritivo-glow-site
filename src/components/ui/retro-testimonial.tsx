"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, X } from "lucide-react";
import { cn } from "@/lib/utils";

// ===== Types and Interfaces =====
export interface iTestimonial {
  name: string;
  designation: string;
  description: string;
  profileImage: string;
}

interface iCarouselProps {
  items: React.ReactElement<{
    testimonial: iTestimonial;
    index: number;
    layout?: boolean;
    onCardClose: () => void;
  }>[];
  initialScroll?: number;
}

// ===== Custom Hooks =====
const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement | null>,
  onOutsideClick: () => void,
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      onOutsideClick();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, onOutsideClick]);
};

// ===== Components =====
const Carousel = ({ items, initialScroll = 0 }: iCarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

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

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384;
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  return (
    <div className="relative w-full mt-10 px-2 sm:px-4">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] py-5"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div
          className={cn(
            "flex flex-row justify-start gap-4 pl-4 pr-4",
            "w-full",
          )}
        >
          {items.map((item, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                }}
                key={`card-${index}`}
                className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
              >
                {React.cloneElement(item, {
                  onCardClose: () => {
                    return handleCardClose(index);
                  },
                })}
              </motion.div>
            );
          })}
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
  );
};

const TestimonialCard = ({
  testimonial,
  index,
  layout = false,
  onCardClose = () => {},
  backgroundImage = "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop",
}: {
  testimonial: iTestimonial;
  index: number;
  layout?: boolean;
  onCardClose?: () => void;
  backgroundImage?: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleExpand = () => {
    return setIsExpanded(true);
  };
  const handleCollapse = () => {
    setIsExpanded(false);
    onCardClose();
  };

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCollapse();
      }
    };

    if (isExpanded) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.body.dataset.scrollY = scrollY.toString();
    } else {
      const scrollY = parseInt(document.body.dataset.scrollY || "0", 10);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo({ top: scrollY, behavior: "instant" });
    }

    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      return window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isExpanded]);

  useOutsideClick(containerRef, handleCollapse);

  return (
    <>
      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 h-screen overflow-hidden z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/50 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${testimonial.name}` : undefined}
              className="max-w-5xl mx-auto bg-gradient-to-b from-secondary/80 to-background/80 backdrop-blur-xl h-full z-[60] p-4 md:p-10 rounded-3xl relative md:mt-10 overflow-y-auto"
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto rounded-full flex items-center justify-center bg-primary"
                onClick={handleCollapse}
              >
                <X className="h-6 w-6 text-primary-foreground absolute" />
              </button>
              <motion.p
                layoutId={layout ? `category-${testimonial.name}` : undefined}
                className="px-0 md:px-20 text-muted-foreground text-lg font-thin underline underline-offset-8"
              >
                {testimonial.designation}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${testimonial.name}` : undefined}
                className="px-0 md:px-20 text-2xl md:text-4xl font-normal italic text-foreground mt-4"
              >
                {testimonial.name}
              </motion.p>
              <div className="py-8 text-foreground px-0 md:px-20 text-xl md:text-2xl font-normal leading-relaxed">
                <Quote className="h-6 w-6 text-primary mb-4" />
                {testimonial.description}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${testimonial.name}` : undefined}
        onClick={handleExpand}
        className=""
        whileHover={{
          rotateX: 2,
          rotateY: 2,
          rotate: 3,
          scale: 1.02,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
      >
        <div
          className={`${index % 2 === 0 ? "rotate-0" : "-rotate-0"} rounded-3xl glass-dark h-[500px] md:h-[550px] w-80 md:w-96 overflow-hidden flex flex-col items-center justify-center relative z-10 shadow-card hover:shadow-glow transition-all duration-500`}
        >
          <div className="absolute opacity-20" style={{ inset: "-1px 0 0" }}>
            <div className="absolute inset-0">
              <img
                className="block w-full h-full object-center object-cover"
                src={backgroundImage}
                alt="Background layer"
              />
            </div>
          </div>
          <ProfileImage src={testimonial.profileImage} alt={testimonial.name} />
          <motion.p
            layoutId={layout ? `title-${testimonial.name}` : undefined}
            className="text-foreground text-lg md:text-xl font-normal text-center [text-wrap:balance] mt-4 px-6 relative z-10"
          >
            {testimonial.description.length > 100
              ? `${testimonial.description.slice(0, 100)}...`
              : testimonial.description}
          </motion.p>
          <motion.p
            layoutId={layout ? `category-${testimonial.name}` : undefined}
            className="text-foreground text-xl md:text-2xl font-semibold text-center mt-5 relative z-10"
          >
            {testimonial.name}
          </motion.p>
          <motion.p
            layoutId={layout ? `category-${testimonial.name}` : undefined}
            className="text-muted-foreground text-sm md:text-base font-normal italic text-center mt-1 underline underline-offset-4 decoration-1 relative z-10"
          >
            {testimonial.designation.length > 25
              ? `${testimonial.designation.slice(0, 25)}...`
              : testimonial.designation}
          </motion.p>
        </div>
      </motion.button>
    </>
  );
};

const ProfileImage = ({ src, alt }: { src: string; alt: string }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="w-[90px] h-[90px] md:w-[150px] md:h-[150px] overflow-hidden rounded-full border-4 border-primary/30 aspect-[1/1] flex-none relative z-10">
      <img
        className={cn(
          "transition duration-300 absolute top-0 inset-0 rounded-inherit object-cover z-50 w-full h-full",
          isLoading ? "blur-sm" : "blur-0",
        )}
        onLoad={() => {
          return setLoading(false);
        }}
        src={src}
        loading="lazy"
        decoding="async"
        alt={alt || "Profile image"}
      />
    </div>
  );
};

// Export the components
export { Carousel, TestimonialCard, ProfileImage };
