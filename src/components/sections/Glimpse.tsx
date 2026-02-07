import React, { useRef, useState } from 'react';

// Data for the slides
const slides = [
  {
    id: 1,
    image: "/images/scrollImage1.webp",
  },
  {
    id: 2,
    image: "/images/scrollImage2.webp",
  },
  {
    id: 3,
    image: "/images/scrollImage3.webp",
  },
  {
    id: 4,
    image: "/images/scrollImage4.webp",
  },
  {
    id: 5,
    image: "/images/scrollImage1.webp", 
  },
  {
    id: 6,
    image: "/images/scrollImage2.webp",
  },
  {
    id: 7,
    image: "/images/scrollImage3.webp",
  },
  {
    id: 8,
    image: "/images/scrollImage4.webp",
  },
];

const GlimpseSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle scroll and update active dot
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const width = scrollContainerRef.current.clientWidth;
      const totalWidth = scrollContainerRef.current.scrollWidth - width;
      const progress = scrollLeft / totalWidth;
      const newIndex = Math.min(
        slides.length - 1,
        Math.max(0, Math.round(progress * (slides.length - 1)))
      );
      setActiveIndex(newIndex);
    }
  };

  // Function to scroll to a specific slide when a dot is clicked
  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      // On mobile (1 item visible), scroll to width * index
      // On desktop (3 items visible), this logic might need tweaking depending on exact width
      // but simpler is to scroll the container width * ratio
      const container = scrollContainerRef.current;
      const scrollAmount = (container.scrollWidth / slides.length) * index;
      
      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative w-full bg-[#FFF8E7] py-24 overflow-hidden">
      
      {/* --- BACKGROUND DECORATION (Top Yellow Curve) --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-125 bg-[#FFECC5] rounded-b-[100%] pointer-events-none z-0"></div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* 1. HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 -mt-15">
          <h2 className="font-poetsen text-4xl lg:text-5xl text-[#451a03] mb-6 leading-tight">
            A Quick Glimpse Into Our <br/> Fun Tracker App
          </h2>
          <p className="text-[#451a03]/70 font-medium text-sm mb-8 leading-relaxed">
            Get a sneak peek into the most fun way to track health goals. Meals,<br /> steps, and progress — all with a buddy that loves you back.
          </p>
          <button className="bg-[#D97706] text-white font-bold text-lg py-3 px-10 rounded-full hover:bg-[#b36105] transition-transform hover:scale-105 shadow-md border-b-4 border-[#92400e] cursor-pointer">
            Download Now
          </button>
        </div>

        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-12 px-4 lg:px-0 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Inline style to ensure scrollbar is hidden
        >
          {slides.map((slide) => (
            <div 
              key={slide.id} 
              className="min-w-full md:min-w-[45%] lg:min-w-[32%] snap-center flex flex-col items-center"
            >

              <div className="relative w-full max-w-[320px]">
                <img 
                  src={slide.image} 
                  className="w-full h-auto object-contain drop-shadow-2xl rounded-[2.5rem] transform transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          ))}
        </div>

        {/* 3. PAGINATION DOTS */}
        <div className="flex justify-center gap-3 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-[#451a03] w-8' // Active dot is wider (pill shape)
                  : 'bg-[#451a03]/30 hover:bg-[#451a03]/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlimpseSection;