import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
   
    <section className="relative w-full bg-linear-to-b from-[#FFECC5] to-[#FFF8E7] pt-24 overflow-hidden">

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">

        {/* 1. SECTION HEADER */}
        <h2 className="font-poetsen text-4xl lg:text-5xl text-[#451a03] mb-4 leading-tight">
          Whether It’s Water, Walks, Or One Less Donut,
        </h2>
        <h3 className="font-poetsen text-4xl lg:text-5xl text-[#D97706] mb-20">
          He Is Your #1 Fan.
        </h3>

        {/* 2. CENTRAL ILLUSTRATION LAYOUT */}
        <div className="relative inline-block">
          
          {/* === MAIN MASCOT (Buddy 3) === */}
          <img
            src="/images/buddy3.png"
            alt="Cheering Buddy"
            className="relative z-20 w-full max-w-125 -mt-18 mx-auto drop-shadow-2xl animate-bounce-slow"
          />

          {/* --- B. TOP LEFT: Speech Bubble with Buddy --- */}
          <div className="absolute top-10 -left-80 lg:-left-112.5 z-20 hidden md:block">
            
            <div className="bg-white px-8 py-2 rounded-full shadow-card relative flex flex-col items-center">
              
              {/* Line 1: Quote */}
              <p className="text-brand-orange mt-1 font-poetsen text-xl whitespace-nowrap">
                “You crushed that salad... can I have a bite?”
              </p>

              {/* Line 2: Signature + Image (Placed Inside) */}
              <div className="flex items-center gap-2 mt-1">
                <p className="text-[#451a03] font-medium text-lg">
                  — Your Buddy, with love
                </p>
                {/* Image is now INSIDE the flex box, next to text */}
                <img 
                  src="/images/buddy.png" 
                  alt="Small Buddy" 
                  className="w-12 h-12 -mt-4 object-contain" 
                />
              </div>
            </div>
          </div>


          {/* --- C. TOP RIGHT: Daily Step Target Card --- */}
          <div className="absolute top-10 -right-70 lg:-right-95 z-20 hidden md:block">
            <div className="bg-white p-5 rounded-xl shadow-card w-85 text-left">
              
              {/* 1. Green Header Bar (Pill Shape) */}
              <div className="bg-[#489f28] rounded-xl h-14 p-1.5 flex items-center relative overflow-hidden shadow-inner">
                
                {/* Icon (Left) */}
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10">
                  <img src="/images/running.png" alt="Run" className="w-8 h-8 rounded-full" />
                </div>

                {/* Progress Bar (Middle - White Track / Orange Fill) */}
                <div className="grow h-3.5 bg-white rounded-full ml-3 mr-16 relative">
                  <div className="absolute top-0 left-0 h-full w-[70%] bg-[#ff7b29] rounded-full shadow-sm"></div>
                </div>

                {/* Steps Badge (Right - Dark Green Tab) */}
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-[#1f3f0e] rounded-r-xl flex flex-col justify-center items-center pl-2 z-0">
                  <span className="text-white font-bold text-[10px] leading-tight text-center">3,159<br/>Steps</span>
                  {/* Decorative curved edge effect (optional visual trick) */}
                  <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-8 bg-[#1f3f0e] rounded-l-xl"></div>
                </div>
              </div>

              {/* 2. Divider Line */}
              <div className="h-px bg-orange-100 my-4 mx-2"></div>

              {/* 3. Bottom Content */}
              <div className="flex items-center justify-between px-2">
                
                {/* Left: Footprints Icon & Text */}
                <div className="flex items-center gap-3">
                  {/* Footprints */}
                  <img src="/images/footprint.png" alt="steps" className="w-10 h-10 opacity-90 object-contain" /> 
                  
                  {/* Text */}
                  <div className="flex flex-col">
                    <h4 className="text-[#451a03] font-bold text-lg leading-tight">Daily Step Target</h4>
                    <p className="text-[#451a03]/80 text-sm font-medium">10,000 Steps/Day</p>
                  </div>
                </div>

                {/* Right: Mascot */}
                <div className="relative">
                  <img src="/images/buddy5.png" alt="Buddy Walking" className="w-16 h-16 object-contain" />
                </div>
              </div>

            </div>
          </div>


         {/* --- D. BOTTOM LEFT: Daily Hydration Target Card --- */}
          <div className="absolute bottom-20 -left-70 lg:-left-95 z-20 hidden md:block">
            
            {/* CARD CONTAINER: Added 'hover:scale-105' and transition for smooth animation */}
            <div className="bg-white p-5 rounded-xl shadow-card w-85 text-left">
              
              {/* 1. Blue Header Bar (Pill Shape) */}
              <div className="bg-[#0ea5e9] rounded-xl h-14 p-1.5 flex items-center relative overflow-hidden shadow-inner">
                
                {/* Icon (Left) - Water Drop */}
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10">
                  {/* Using standard water icon or the one provided */}
                  <img src="/images/drop.png" alt="Water" className="w-6 h-6" />
                </div>

                {/* Progress Bar (Middle - White Track / Orange Fill) */}
                <div className="grow h-3.5 bg-white rounded-full ml-3 mr-16 relative">
                  {/* Orange fill to match the specific UI style */}
                  <div className="absolute top-0 left-0 h-full w-[60%] bg-[#ff7b29] rounded-full shadow-sm"></div>
                </div>

                {/* Liters Badge (Right - Dark Blue Tab) */}
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-[#0c4a6e] rounded-r-xl flex flex-col justify-center items-center pl-2 z-0">
                  <span className="text-white font-bold text-[10px] leading-tight text-center">3.159<br/>Liter</span>
                  {/* Decorative curved edge effect */}
                  <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-8 bg-[#0c4a6e] rounded-l-xl"></div>
                </div>
              </div>

              {/* 2. Divider Line */}
              <div className="h-px bg-blue-200 my-4 mx-2"></div>

              {/* 3. Bottom Content */}
              <div className="flex items-center justify-between px-2">
                
                {/* Left: Bottle Icon & Text */}
                <div className="flex items-center gap-3">
                  {/* Decorative Bottle inside card */}
                  <img src="/images/bottle.png" alt="bottle" className="w-10 h-auto opacity-90 object-contain" /> 
                  
                  {/* Text */}
                  <div className="flex flex-col">
                    <h4 className="text-brand-dark font-bold text-lg leading-tight">Hydration Goal</h4>
                    <p className="text-[#451a03]/80 text-sm font-medium">2.5 Liter/Day</p>
                  </div>
                </div>

                {/* Right: Buddy Image */}
                <div className="relative">
                  <img src="/images/buddy4.png" alt="Buddy Drinking" className="w-16 h-16 object-contain" />
                </div>
              </div>

            </div>
          </div>


          {/* --- E. BOTTOM RIGHT: Smart Watch --- */}
          <div className="absolute bottom-0 -right-62.5 lg:-right-87.5 z-20 hidden md:block">
            {/* Assuming the gauge inside is part of the smartwatch image provided */}
            <img
              src="/images/smartwatch.png"
              alt="Smart Watch tracking calories"
              className="w-70 h-auto object-contain drop-shadow-xl rotate-15"
            />
          </div>

        </div>
      </div>
      {/* --- BOTTOM CURVE (Overlapping Layers) --- */}
    <div className="absolute -bottom-10 left-0 w-full h-63.75 overflow-hidden z-0 pointer-events-none">
      
    
      <div className="absolute -bottom-30 left-1/2 -translate-x-1/2 w-[70%] h-75 bg-[#FFEDC5] rounded-t-[100%] z-10"></div>

      
      <div className="absolute -bottom-33.75 left-1/2 -translate-x-1/2 w-[65%] h-70 bg-[#FFF6E0] rounded-t-[100%] z-20"></div>

    </div>

    </section>
  );
};

export default FeaturesSection;