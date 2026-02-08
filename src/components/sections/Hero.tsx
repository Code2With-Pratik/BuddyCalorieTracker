import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id='hero' className="relative w-full min-h-screen bg-white flex items-center justify-center overflow-hidden py-10">
      <div className="relative -mt-6 w-full max-w-371.25 aspect-video lg:aspect-auto lg:h-screen mx-auto">
        
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-[url('/images/backgroung.webp')] bg-size-[100%_100%] bg-no-repeat bg-center z-0"
        ></div>

        {/* --- CONTENT LAYER (Z-10) --- */}
        <div className="relative z-10 w-full h-full flex flex-col">
          
        {/* Left: Social Media Sidebar */}
        <div className="absolute left-6 top-80 -translate-y-1/2 hidden xl:flex flex-col items-center gap-5">
          <span className="text-[10px] font-bold text-brand-dark -rotate-180 uppercase tracking-[0.3em] mb-4" style={{ writingMode: 'vertical-lr' }}>
            Social Media
          </span>
          <div className="w-1px h-10 bg-brand-dark"></div>
          
          {/* Social Icons Loop */}
          {[
            { key: 'fb', Icon: Facebook,  href: 'https://facebook.com' },
            { key: 'ig', Icon: Instagram, href: 'https://instagram.com' },
            { key: 'x',  Icon: Twitter,   href: 'https://twitter.com' },
            { key: 'in', Icon: Linkedin,  href: 'https://linkedin.com' },
            { key: 'yt', Icon: Youtube,   href: 'https://youtube.com' }
          ].map(({ key, Icon, href }) => (
            // UPDATED: Changed 'div' to 'a' so the links actually work
            <a 
              key={key} 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" // Security best practice for new tabs
              className="relative w-8 h-8 flex items-center justify-center cursor-pointer group hover:scale-105 transition duration-300"
            >
              <img 
                src="/images/paw.svg" 
                alt="Paw Background" 
                className="absolute w-full h-full object-contain" 
              />
              {/* Icon Position: 'mt-1' usually centers it better on the main paw pad than 'mt-4' */}
              <Icon className="relative z-10 w-3 h-3 mt-4 text-white" />
            </a>
          ))}
        </div>

          {/* Right: Scroll Down */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6">
            <span className="text-[12px] font-bold text-shadow-brand-dark rotate-180 uppercase tracking-[0.3em] mb-4" style={{ writingMode: 'vertical-lr' }}>
              Scroll Down
            </span>
            <div className="w-12 h-12 bg-brand-dark rounded-full border border-[#451a03]/20 flex items-center justify-center cursor-pointer hover:bg-brand-orange transition">
              <span className="text-[#ffffff] text-2xl">↓</span>
            </div>
          </div>

          {/* 2. MAIN GRID CONTENT */}
          <div className="grow grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-12 lg:px-24 pt-20 pb-32">
            
            {/* Left Column: Text & CTA */}
            <div className="text-center ml-15 lg:text-left z-20">
              <h1 className="text-5xl text-brand-dark font-poetsen leading-[1.1] tracking-tight drop-shadow-sm">
                Calorie Tracker Meets <br />
                <span className="text-brand-dark">Cutest Companion Ever</span>
              </h1>
              
              <p className="mt-8 text-brand-orange font-poetsen  tracking-wider">
                Steps? Counted.<span className="mx-2"></span> Meals? Snapped. <span className="mx-2"></span> Motivation? ADORABLE.
              </p>
              
              <p className="mt-6 text-[#451a03]/70 text-sm max-w-lg mx-auto lg:mx-0 font-serif leading-relaxed">
                Meet the app that turns your wellness into a daily celebration. With photo-based tracking, real-time feedback, and your own virtual pet cheering you on.
              </p>

              <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-5">
                <button className="flex items-center gap-2 bg-brand-orange px-5 py-2 rounded-full cursor-pointer text-white shadow-[0_10px_20px_-5px_rgba(217,119,6,0.4)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <img src="/images/google-play.svg" className="w-9 h-9" alt="Play" />
                  <div className="text-left leading-tight">
                    <p className="text-[10px] font-serif opacity-80">Get it on</p>
                    <p className="font-normal text-md font-poetsen">Google Play</p>
                  </div>
                </button>
                <button className="flex items-center gap-2 bg-brand-orange px-5 py-2 rounded-full cursor-pointer text-white shadow-[0_10px_20px_-5px_rgba(200,157,102,0.4)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <img src="/images/apple-logo.svg" className="w-9 h-9" alt="App Store" />
                  <div className="text-left leading-tight">
                    <p className="text-[10px] opacity-80 font-serif">Download on</p>
                    <p className="font-normal font-poetsen text-md">App Store</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Column: Mascot & Floating Elements */}
            <div className="relative flex justify-center items-center h-full">
              {/* Main Mascot */}
              <img src="/images/buddy.png" alt="buddy" className="relative z-20 -left-15.5 w-[62%] max-w-112.5 drop-shadow-2xl" />
              
              {/* --- Floating Plate 1 (Bottom Left - Salad) --- */}
              <div className="absolute -left-10 bottom-20 z-15">
                {/* The Plate Image */}
                <img 
                  src="/images/meal-plate-1.png" 
                  alt="Salad" 
                  className="w-40 lg:w-55 rounded-full relative z-10" 
                />
                
                {/* Label: Eggs (Top Right) */}
                <div className="absolute -top-3 z-20 bg-white px-3 py-1 rounded-full flex items-center gap-2 shadow-card -rotate-30">
                  <img src="/images/egg.png" alt="Icon" className="w-5 h-5 object-contain" />
                  <span className="text-xs font-bold text-gray-600">Eggs</span>
                </div>

                {/* Label: Calories (Left) */}
                <div className="absolute -rotate-23 top-25 -left-12 -translate-y-1/2 z-20 bg-white px-2 py-1.5 rounded-full flex items-center gap-1 shadow-card">
                  <img src="/images/calories.png" alt="Icon" className="w-4 h-4 object-contain" />
                  <span className="text-xs font-bold text-gray-600">645Kcal</span>
                </div>

                {/* Label: Avocado (Bottom) */}
                <div className="absolute bottom-6 -rotate-10 left-4 -translate-x-1/2 z-20 bg-white px-2 py-1 rounded-full flex items-center gap-2 shadow-card">
                  <img src="/images/avocado.png" alt="Icon" className="w-5 h-5 object-contain" />
                  <span className="text-xs font-bold text-gray-600">Avocado</span>
                </div>
              </div>

              {/* --- Floating Plate 2 (Top Right - Bowl) --- */}
              <div className="absolute right-10 top-12 z-10">
                {/* The Plate Image */}
                <img 
                  src="/images/meal-plate-2.png" 
                  alt="Bowl" 
                  className="w-32 lg:w-55 rounded-full border-none relative z-10" 
                />

                {/* Label: Calories (Top Left) */}
                <div className="absolute -top-6 -left-2 z-20 bg-white px-3 py-1.5 rounded-full shadow-card flex items-center gap-2 -rotate-10">
                  <img src="/images/calories.png" alt="Icon" className="w-4 h-4 object-contain" />
                  <span className="text-xs font-bold text-gray-600">860Kcal</span>
                </div>

                {/* Label: Egg (Top Right) */}
                <div className="absolute -top-2 right-1 z-20 bg-white px-3 py-1 rounded-full shadow-card flex items-center gap-2 rotate-25">
                  <img src="/images/egg.png" alt="Icon" className="w-5 h-5 object-contain" />
                  <span className="text-xs font-bold text-gray-600">Egg</span>
                </div>

                {/* Label: Tomato (Right) */}
                <div className="absolute top-1/2 -right-12 z-20 bg-white px-2 py-1 rounded-full shadow-card flex items-center gap-2 rotate-25">
                  <img src="/images/tomato.png" alt="Icon" className="w-5 h-5 object-contain" />
                  <span className="text-xs font-bold text-gray-600">Tomato</span>
                </div>

                {/* Label: Blueberry (Bottom) */}
                <div className="absolute -bottom-2 left-20 z-20 bg-white px-3 py-1 rounded-full shadow-card flex items-center gap-2">
                  <img src="/images/blueberry.png" alt="Icon" className="w-5 h-5 object-contain" />
                  <span className="text-xs font-bold text-gray-600">Blueberry</span>
                </div>
              </div>
              {/* Stats Card Component - Rounded, Spaced Chart with Inner Shadow Depth */}
              <div 
                className="
                  absolute right-18 bottom-22 z-30 w-55 p-1 bg-white rounded-2xl shadow-card"
              >
                {/* 1. The SVG Gauge Chart (SVG ensures perfect rounded tips and spacing) */}
                <div className="relative flex flex-col items-center justify-center">
                  
                  {/* SVG Container - Aspect Ratio 2:1 for semi-circle */}
                  <div className="w-02 h-23 overflow-hidden">
                    <svg viewBox="0 0 200 110" className="w-full h-full">
                      {/* GREEN SEGMENT (Left)*/}
                      <path 
                        d="M 30 101 A 70 70 0 0 1 61 40" 
                        fill="none" 
                        stroke="#4FB201" 
                        strokeWidth="35" 
                      />

                      {/* YELLOW SEGMENT (Top)*/}
                      <path 
                        d="M 64 38 A 70 70 0 0 1 136 38" 
                        fill="none" 
                        stroke="#FEB62A" 
                        strokeWidth="35" 
                      />

                      {/* ORANGE SEGMENT (Right)*/}
                      <path 
                        d="M 139 40 A 70 70 0 0 1 171 100" 
                        fill="none" 
                        stroke="#FE6D2F" 
                        strokeWidth="35" 
                      />
                    </svg>
                  </div>
                  
                  {/* Center Overlay: Fire & Calories Text */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center translate-y-2">
                      <img src="/images/calories.png" alt="Fire" className="w-6 h-6 animate-pulse" />
                      <div className="flex items-baseline gap-1">
                          <span className="text-lg font-black text-[#451a03] tracking-tighter">378</span>
                          <span className="text-sm font-bold text-[#451a03]/60">Kcal</span>
                      </div>
                  </div>
                </div>

                {/* 2. Legend Section */}
                <div className="flex justify-between px-4 mt-1">
                  
                  {/* Proteins */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Proteins</span>
                    </div>
                    <span className="text-xs font-black text-green-500">35%</span>
                  </div>

                  {/* Carbs */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Carbs</span>
                    </div>
                    <span className="text-xs font-black text-yellow-400">32%</span>
                  </div>

                  {/* Fats */}
                  <div className="flex flex-col items-center">
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
        <div className="left-0 bottom-35 z-40 bg-[#451a03] w-94 h-35 rounded-[40px] flex items-center px-10 relative overflow-hidden">
          
          {/* --- CONTENT LAYER (z-10 to stay above background fruits) --- */}
          <div className="flex flex-col gap-1 w-full relative z-10">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-black italic text-white tracking-wide">5046Kcal</span>
            </div>
            <button className="mt-3 text-[10px] font-bold text-white tracking-widest border border-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full w-fit transition cursor-pointer">
              Explore More
            </button>
          </div>

          {/* --- DECORATIVE FRUITS (Background Layer) --- */}
          
          {/* 1. Broccoli (Top Center-Right) */}
          <img 
            src="/images/broccoli.png" 
            alt="Broccoli" 
            className="absolute top-3 right-24 w-10 object-contain -rotate-12 opacity-90" 
          />

          {/* 2. Strawberry (Top Right Corner - Clipped) */}
          <img 
            src="/images/Strawberry.png" 
            alt="Strawberry" 
            className="absolute -top-6 -right-5 w-24 object-contain rotate-12" 
          />

          {/* 3. Apple (Bottom Center-Right) */}
          <img 
            src="/images/apple.png" 
            alt="Apple" 
            className="absolute -bottom-2.5 right-24 w-18 object-contain rotate-6" 
          />

          {/* 4. Banana (Bottom Right Corner - Clipped) */}
          <img 
            src="/images/banana.png" 
            alt="Banana" 
            className="absolute -bottom-8 -right-8 w-28 object-contain -rotate-58" 
          />
        </div>

        {/* 2. ORANGE TICKER (Fills the rest of the bottom width) */}
        <div className="absolute bottom-0 right-0 left-95.25 h-28.75 z-30 overflow-hidden rounded-bl-[40px] rounded-br-[40px]">
          {/* Removed 'rounded-l/r' and just kept the background and flex. 
              The outer div handles the shape via overflow-hidden. */}
          <div className="bg-brand-orange w-full h-full flex items-center overflow-hidden">
              <div className="flex gap-14 animate-infinite-scroll whitespace-nowrap text-white font-bold text-lg tracking-widest px-10">
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