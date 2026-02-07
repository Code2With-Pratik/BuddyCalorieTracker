import React, { useRef, useState, useEffect } from 'react';

// Testimonial Data
const testimonials = [
  {
    id: 1,
    name: "Aanya Rastogi",
    highlight: "Staying On Track With Ease",
    image: "/images/user.jpg", 
    text: "Before using the app, I didn't know where to start with calorie tracking. But now, it's second nature! The meal snap feature is a game-changer.",
  },
  {
    id: 2,
    name: "Alex Sim",
    highlight: "Lost 4kg In 5 Weeks",
    image: "/images/user2.jpg",
    text: "I've been using Calorie Tracker Buddy for five weeks, and I've already lost 4kg! It's been an amazing experience because the app doesn't just make tracking easy.",
  },
  {
    id: 3,
    name: "Pooja Rao",
    highlight: "A New Approach To Health",
    image: "/images/user3.jpg",
    text: "I've tried tons of fitness apps, but this is, hands down, the best calorie tracker app I've ever used. Logging meals is fun now—just snap a photo and boom, done.",
  },
  {
    id: 4,
    name: "David Chen",
    highlight: "Finally Consistent!",
    image: "/images/user.jpg",
    text: "Consistency was always my issue. The gamification and the friendly buddy reminders actually make me want to open the app. It feels less like a chore.",
  },
  {
    id: 5,
    name: "Sarah Jenkins",
    highlight: "Love the Buddy!",
    image: "/images/user2.jpg",
    text: "The little dog character makes me smile every time I log my water. It sounds silly, but that positive reinforcement really works for me.",
  }
];

const TestimonialSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // To pause auto-scroll on hover

  // --- 1. AUTO SCROLL FUNCTIONALITY ---
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && scrollContainerRef.current) {
        const nextIndex = (activeIndex + 1) % testimonials.length;
        scrollToSlide(nextIndex);
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [activeIndex, isPaused]);

  // --- 2. SCROLL TO SPECIFIC SLIDE (Used by Auto-scroll & Dots) ---
  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Calculate position: (Card Width + Gap) * Index
      // We assume card width is roughly container width on mobile or fixed on desktop
      // To be precise, we get the width of the first child
      const card = container.children[0] as HTMLElement;
      if (card) {
        const scrollPos = (card.offsetWidth + 32) * index; // 32 is the gap-8 (2rem)
        container.scrollTo({
          left: scrollPos,
          behavior: 'smooth',
        });
        setActiveIndex(index);
      }
    }
  };

  // --- 3. HANDLE MANUAL SCROLL (Update Dots on Swipe) ---
  const handleManualScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const card = scrollContainerRef.current.children[0] as HTMLElement;
      if (card) {
        const itemWidth = card.offsetWidth + 32;
        const newIndex = Math.round(scrollLeft / itemWidth);
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <section className="relative w-full bg-white py-24 overflow-hidden">
      
      {/* =========================================
          PART 1: DOWNLOAD APPS (Floating Icons)
         ========================================= */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-40">
        <h2 className="font-poetsen text-4xl lg:text-5xl text-[#451a03] mb-6 leading-tight">
          Don’t Wait, Your <br/> Buddy’s Waiting!
        </h2>
        <p className="text-[#451a03]/70 font-medium text-lg mb-20 max-w-2xl mx-auto leading-relaxed">
          Your goals, your buddy, your progress. Let’s make it happen <br className="hidden md:block"/>
          — download now and get the health boost you deserve.
        </p>

        {/* Store Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 max-w-3xl mx-auto">
          {/* iOS Card */}
          <div className="relative bg-[#FFF8E7] rounded-xl px-10 pb-10 pt-16 flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 shadow-lg">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white border-[3px] border-[#451a03] rounded-2xl flex items-center justify-center shadow-sm">
              <img src="/images/apple-logo.svg" alt="Apple" className="w-12 h-12 object-contain brightness-0" />
            </div>
            <h3 className="font-poetsen text-xl text-[#451a03] mb-6">App Store</h3>
            <button className="bg-[#D97706] text-white font-bold py-3 px-8 rounded-full shadow-md w-full max-w-50 border-b-4 border-[#9a5404]">
              Download for iOS
            </button>
          </div>

          {/* Android Card */}
          <div className="relative bg-[#FFF8E7] rounded-xl px-10 pb-10 pt-16 flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 shadow-lg">
             <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white border-[3px] border-[#451a03] rounded-2xl flex items-center justify-center shadow-sm">
              <img src="/images/google-play.svg" alt="Google Play" className="w-10 h-10 object-contain brightness-0" />
            </div>
            <h3 className="font-poetsen text-xl text-[#451a03] mb-6">Google Play Store</h3>
            <button className="bg-[#D97706] text-white font-bold py-3 px-0 rounded-full shadow-md w-full max-w-62.5 border-b-4 border-[#9a5404]">
              Download for Android
            </button>
          </div>
        </div>
      </div>


      {/* =========================================
          PART 2: TESTIMONIALS (Cream Box + Slider)
         ========================================= */}
      <div className="relative w-full text-center">
        
        {/* Headings */}
        <div className="max-w-3xl mx-auto px-6 -mt-20 mb-16">
          <h2 className="font-poetsen text-4xl lg:text-5xl text-[#451a03] mb-6">
            They Did It, So Can You!
          </h2>
          <p className="text-[#451a03]/70 font-medium text-lg leading-relaxed">
            Don’t just take our word for it—hear from our users who’ve made <br className="hidden md:block"/>
            amazing progress using the best AI Calorie Tracker Buddy.
          </p>
        </div>

        {/* --- SCROLL AREA WRAPPER --- */}
        <div className="relative w-full pb-12">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-300 h-112.5 bg-[#FFF8E7] rounded-[3rem] -z-10"></div>

          <div 
            ref={scrollContainerRef}
            onScroll={handleManualScroll}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex overflow-x-auto snap-x snap-mandatory gap-8 py-12 px-6 lg:px-[calc(50%-200px)] no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((t) => (
              <div 
                key={t.id}
                className="snap-center shrink-0 w-[85vw] md:w-100 bg-white rounded-4xl p-8 shadow-xl flex flex-col text-left transition-transform hover:scale-[1.02]"
              >
                {/* User Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-100 shrink-0">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-poetsen text-xl text-[#451a03]">{t.name}</h4>
                    <p className="text-[#D97706] font-bold text-xs uppercase tracking-wide">{t.highlight}</p>
                  </div>
                </div>
                {/* Text */}
                <p className="text-[#451a03]/70 text-sm leading-relaxed font-medium">
                  "{t.text}"
                </p>
              </div>
            ))}
            
            {/* Dummy spacer at end to help right-side spacing */}
            <div className="shrink-0 w-6"></div>
          </div>

          {/* C. PAGINATION DOTS (Clickable) */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsPaused(true); // Pause momentarily when clicking
                  scrollToSlide(index);
                  setTimeout(() => setIsPaused(false), 2000); // Resume after 2s
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-[#451a03] w-8' 
                    : 'bg-[#451a03]/20 w-3 hover:bg-[#451a03]/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default TestimonialSection;