import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-white flex items-center justify-center overflow-hidden py-10">
      
      {/* MAIN CONTAINER 
        Uses your 'backgroung.webp' to create the exact shape.
        'bg-contain' ensures the whole shape is visible.
      */}
      <div className="relative -mt-6 w-full max-w-[1485px] aspect-[16/9] lg:aspect-auto lg:h-[100vh] mx-auto">
        
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-[url('/images/backgroung.webp')] bg-[length:100%_100%] bg-no-repeat bg-center z-0"
        ></div>

        {/* --- CONTENT LAYER (Z-10) --- */}
        <div className="relative z-10 w-full h-full flex flex-col">
          
          {/* 1. SIDEBARS (Absolute positioning relative to the card) */}
          
          {/* Left: Social Media */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6">
            <span className="text-[10px] font-bold text-[#451a03]/40 -rotate-180 uppercase tracking-[0.3em] mb-4" style={{ writingMode: 'vertical-lr' }}>
              Social Media
            </span>
            <div className="w-[1px] h-12 bg-[#451a03]/20"></div>
            {['fb', 'ig', 'x', 'in'].map((key, i) => (
              <div key={i} className="cursor-pointer hover:scale-110 transition duration-300 opacity-60 hover:opacity-100">
                <img src="/images/paw.svg" alt="Social" className="w-5 h-5 opacity-70" />
              </div>
            ))}
          </div>

          {/* Right: Scroll Down */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6">
            <span className="text-[10px] font-bold text-[#451a03]/40 rotate-180 uppercase tracking-[0.3em] mb-4" style={{ writingMode: 'vertical-lr' }}>
              Scroll Down
            </span>
            <div className="w-10 h-10 rounded-full border border-[#451a03]/20 flex items-center justify-center cursor-pointer hover:bg-[#451a03]/5 transition">
              <span className="text-[#451a03] text-xs">↓</span>
            </div>
          </div>

          {/* 2. MAIN GRID CONTENT */}
          <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-12 lg:px-24 pt-20 pb-32">
            
            {/* Left Column: Text & CTA */}
            <div className="text-center lg:text-left z-20">
              <h1 className="text-5xl xl:text-7xl font-black text-[#451a03] leading-[1.1] tracking-tight drop-shadow-sm">
                Calorie Tracker Meets <br />
                <span className="text-[#451a03]">Cutest Companion Ever</span>
              </h1>
              
              <p className="mt-8 text-[#D97706] font-bold text-lg uppercase tracking-wider">
                Steps? Counted. <span className="mx-2 opacity-40">|</span> Meals? Snapped. <span className="mx-2 opacity-40">|</span> Motivation? ADORABLE.
              </p>
              
              <p className="mt-6 text-[#451a03]/70 text-lg max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed">
                Meet the app that turns your wellness into a daily celebration. With photo-based tracking, real-time feedback, and your own virtual pet cheering you on.
              </p>

              <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-5">
                <button className="flex items-center gap-3 bg-[#D97706] px-8 py-3.5 rounded-2xl text-white shadow-[0_10px_20px_-5px_rgba(217,119,6,0.4)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <img src="/images/google-play.svg" className="w-7 h-7" alt="Play" />
                  <div className="text-left leading-tight">
                    <p className="text-[9px] font-bold opacity-80 uppercase">GET IT ON</p>
                    <p className="font-bold text-lg">Google Play</p>
                  </div>
                </button>
                <button className="flex items-center gap-3 bg-[#C89D66] px-8 py-3.5 rounded-2xl text-white shadow-[0_10px_20px_-5px_rgba(200,157,102,0.4)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <img src="/images/apple-logo.svg" className="w-7 h-7" alt="App Store" />
                  <div className="text-left leading-tight">
                    <p className="text-[9px] font-bold opacity-80 uppercase">Download on</p>
                    <p className="font-bold text-lg">App Store</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Column: Mascot & Floating Elements */}
            <div className="relative flex justify-center items-center h-full">
              {/* Main Mascot */}
              <img src="/images/buddy.png" alt="buddy" className="relative z-20 -left-5.5 w-[62%] max-w-[450px] drop-shadow-2xl" />
              
              {/* --- Floating Plate 1 (Bottom Left - Salad) --- */}
              <div className="absolute -left-4 bottom-20 z-15">
                {/* The Plate Image */}
                <img 
                  src="/images/meal-plate-1.png" 
                  alt="Salad" 
                  className="w-40 lg:w-48 shadow-2xl rounded-full border-4 border-white relative z-10" 
                />
                
                {/* Label: Eggs (Top Right) */}
                <div className="absolute -top-2 z-20 bg-white px-5 py-1 rounded-full flex items-center gap-2 shadow-card">
                  <img src="/images/egg.png" alt="Icon" className="w-5 h-5 object-contain" />
                  <span className="text-xs font-bold text-gray-600">Eggs</span>
                </div>

                {/* Label: Calories (Left) */}
                <div className="absolute top-1/2 -left-8 -translate-y-1/2 z-20 bg-white px-3 py-1.5 rounded-full flex items-center gap-2 shadow-card">
                  <img src="/images/calories.png" alt="Icon" className="w-4 h-4 object-contain" />
                  <span className="text-xs font-bold text-gray-600">645Kcal</span>
                </div>

                {/* Label: Avocado (Bottom) */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 bg-white px-3 py-1 rounded-full flex items-center gap-2 shadow-card">
                  <img src="/images/avocado.png" alt="Icon" className="w-5 h-5 object-contain" />
                  <span className="text-xs font-bold text-gray-600">Avocado</span>
                </div>
              </div>

              {/* --- Floating Plate 2 (Top Right - Bowl) --- */}
              <div className="absolute right-4 top-12 z-10">
                {/* The Plate Image */}
                <img 
                  src="/images/meal-plate-2.png" 
                  alt="Bowl" 
                  className="w-32 lg:w-50 rounded-full border-none relative z-10" 
                />

                {/* Label: Calories (Top Left) */}
                <div className="absolute -top-6 -left-2 z-20 bg-white px-3 py-1.5 rounded-full shadow-card flex items-center gap-2">
                  <img src="/images/calories.png" alt="Icon" className="w-4 h-4 object-contain" />
                  <span className="text-xs font-bold text-gray-600">860Kcal</span>
                </div>

                {/* Label: Egg (Top Right) */}
                <div className="absolute -top-2 -right-6 z-20 bg-white px-3 py-1 rounded-full shadow-card flex items-center gap-2">
                  <img src="/images/egg.png" alt="Icon" className="w-5 h-5 object-contain" />
                  <span className="text-xs font-bold text-gray-600">Egg</span>
                </div>

                {/* Label: Tomato (Right) */}
                <div className="absolute top-1/2 -right-12 z-20 bg-white px-3 py-1 rounded-full shadow-card flex items-center gap-2">
                  <img src="/images/tomato.png" alt="Icon" className="w-5 h-5 object-contain" />
                  <span className="text-xs font-bold text-gray-600">Tomato</span>
                </div>

                {/* Label: Blueberry (Bottom) */}
                <div className="absolute -bottom-6 left-1/12 z-20 bg-white px-3 py-1 rounded-full shadow-card flex items-center gap-2">
                  <img src="/images/blueberry.png" alt="Icon" className="w-5 h-5 object-contain" />
                  <span className="text-xs font-bold text-gray-600">Blueberry</span>
                </div>
              </div>
              {/* Stats Card Component - Rounded, Spaced Chart with Inner Shadow Depth */}
              <div 
                className="
                  absolute right-0 bottom-24 z-30 w-64 p-2 bg-white rounded-2xl shadow-card"
              >
                {/* 1. The SVG Gauge Chart (SVG ensures perfect rounded tips and spacing) */}
                <div className="relative flex flex-col items-center justify-center mb-2">
                  
                  {/* SVG Container - Aspect Ratio 2:1 for semi-circle */}
                  <div className="w-52 h-26 overflow-hidden">
                    <svg viewBox="0 0 200 110" className="w-full h-full">
                      {/* GREEN SEGMENT (Left)*/}
                      <path 
                        d="M 30 101 A 70 70 0 0 1 61 40" 
                        fill="none" 
                        stroke="#4ade80" 
                        strokeWidth="35" 
                      />

                      {/* YELLOW SEGMENT (Top)*/}
                      <path 
                        d="M 64 38 A 70 70 0 0 1 136 38" 
                        fill="none" 
                        stroke="#facc15" 
                        strokeWidth="35" 
                      />

                      {/* ORANGE SEGMENT (Right)*/}
                      <path 
                        d="M 139 40 A 70 70 0 0 1 171 100" 
                        fill="none" 
                        stroke="#f97316" 
                        strokeWidth="35" 
                      />
                    </svg>
                  </div>
                  
                  {/* Center Overlay: Fire & Calories Text */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center translate-y-2">
                      <img src="/images/calories.png" alt="Fire" className="w-6 h-6 mb-1 animate-pulse" />
                      <div className="flex items-baseline">
                          <span className="text-4xl font-black text-[#451a03] tracking-tighter">378</span>
                          <span className="text-sm font-bold text-[#451a03]/60 ml-0.5">Kcal</span>
                      </div>
                  </div>
                </div>

                {/* 2. Legend Section */}
                <div className="flex justify-between px-2 mt-4">
                  
                  {/* Proteins */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Proteins</span>
                    </div>
                    <span className="text-xs font-black text-green-500">35%</span>
                  </div>

                  {/* Carbs */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Carbs</span>
                    </div>
                    <span className="text-xs font-black text-yellow-400">32%</span>
                  </div>

                  {/* Fats */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Fats</span>
                    </div>
                    <span className="text-xs font-black text-orange-500">33%</span>
                  </div>

                </div>
              </div>
                
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION (Absolute positioning to fit the cutout) --- */}
        
        {/* 1. DARK BROWN CARD (Fits into the bottom-left notch) */}
        <div className="absolute left-0 bottom-0 z-40 bg-[#451a03] w-[400px] h-[140px] rounded-tr-[60px] rounded-bl-[40px] flex items-center px-10 relative shadow-2xl">
           <img src="/images/floating-fruit.png" className="w-24 absolute -right-8 -top-12 drop-shadow-xl z-50 animate-bounce-slow" alt="Fruits" />
           
           <div className="flex flex-col gap-1 w-full">
              <div className="flex items-center gap-3">
                 <span className="text-3xl animate-pulse">🔥</span>
                 <span className="text-3xl font-black italic text-white tracking-wide">5046Kcal</span>
              </div>
              <button className="mt-3 text-[10px] font-bold text-white uppercase tracking-widest border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-2 rounded-full w-fit transition">
                Explore More
              </button>
           </div>
        </div>

        {/* 2. ORANGE TICKER (Fills the rest of the bottom width) */}
        <div className="absolute bottom-6 right-6 left-[380px] h-[80px] z-30 overflow-hidden rounded-r-[40px]">
           <div className="bg-[#F59E0B] w-full h-full rounded-l-[40px] rounded-r-[40px] flex items-center overflow-hidden">
              <div className="flex gap-16 animate-infinite-scroll whitespace-nowrap text-white font-bold text-xl uppercase tracking-widest px-10">
                 <span>Calorie Burns</span> • <span>Steps Count</span> • <span>Meal Calorie Track</span> • <span>Fitness Goals</span> • <span>Health</span> •
                 <span>Calorie Burns</span> • <span>Steps Count</span> • <span>Meal Calorie Track</span>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;