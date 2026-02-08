import React from 'react';

const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="relative w-full bg-white py-24 px-6 lg:px-8 overflow-x-clip">
      
      <div className="max-w-7xl mx-auto relative z-10">

        {/* --- PART 1: TOP CTA BANNER --- */}
        <div className="flex justify-center mb-28">
            <div className="relative w-full max-w-xl bg-brand-dark rounded-[3rem] px-9 py-6 flex flex-col lg:flex-row items-center shadow-2xl overflow-visible">
                {/* Image Left */}
                <img 
                    src="/images/buddy7.png" 
                    alt="Waiting Buddy" 
                    className="hidden lg:block absolute mb-42 -left-12 h-100 w-auto object-contain z-20 drop-shadow-2xl pointer-events-none" 
                />

                {/* Text Right */}
                <div className="relative z-10 text-center lg:text-left w-full lg:w-3/5 ml-auto lg:pl-10">
                    <h3 className="font-poetsen text-xl -ml-10 text-white mb-6 leading-tight tracking-wide">
                        Let's do it, buddy waiting...
                    </h3>
                    <button className="bg-brand-orange text-white font-bold text-sm py-3 px-8 rounded-full hover:bg-[#b36105] transition-transform hover:scale-105 shadow-md border-b-4 border-[#92400e] cursor-pointer">
                        Download Now
                    </button>
                </div>
            </div>
        </div>


        {/* --- PART 2: SECTION HEADING --- */}
        <div className="text-center -mb-10">
            <h2 className="font-poetsen text-2xl lg:text-5xl -mt-10 text-[#451a03] leading-tight">
                It’s As Easy As 1-2-3!
            </h2>
            <p className="text-[#451a03]/70 mt-4 max-w-2xl mx-auto">
                It's simple, fun, and all about YOU! Here's how you'll start seeing results with your new companion.
            </p>
        </div>


        {/* --- PART 3: THREE BUDDIES & STANDS --- */}
        <div className="relative max-w-6xl mx-auto">

            {/* === SVG DOTTED LINE (The "Hanging Chain" Curve) === */}
            <svg className="absolute top-57.5 left-0 w-full h-25 z-10 pointer-events-none hidden lg:block overflow-visible">
                <path 
                  d="M 280,30 Q 400,90 520,30 M 680,30 Q 800,90 920,30" 
                  stroke="#451a03" 
                  strokeWidth="3" 
                  strokeDasharray="10 10" 
                  fill="none" 
                  opacity="0.8" 
                  strokeLinecap="round" 
                />
            </svg>


            {/* Grid Container */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-20 text-center items-end relative z-20">

                {/* ====== STEP 1 ====== */}
                <div className="flex flex-col items-center group">
                    <div className="relative flex flex-col items-center mb-12 transition-transform duration-300 group-hover:-translate-y-2">
                       {/* Buddy Image */}
                       <img src="/images/buddy8.png" alt="Step 1" className="w-64 h-auto object-contain relative z-30 -mb-20 drop-shadow-xl" />
                       
                       {/* 3D BROWN STAND */}
                       <div className="relative w-52 h-16 z-20">
                           {/* 1. Dark Side Layer (The Cylinder Body) */}
                           <div className="absolute top-2 left-0 w-full h-full bg-[#a64a08] rounded-[50%] shadow-xl"></div>
                           {/* 2. Top Surface Layer (Lighter Brown) */}
                           <div className="absolute top-0 left-0 w-full h-full bg-[#754824] rounded-[50%] border-b-4 border-[#4a2b13]"></div>
                       </div>
                    </div>
                    
                    {/* Card */}
                    <div className="bg-[#FFF8E7] rounded-2xl p-8 w-full max-w-sm shadow-lg border-2 border-orange-50/50">
                       <h3 className="font-poetsen text-2xl text-[#451a03] mb-3">Set Your Goals</h3>
                       <p className="text-[#451a03]/70 font-medium leading-relaxed text-sm">
                           Whether you want to lose weight, eat healthier, or move more, we personalize everything to fit your needs.
                       </p>
                    </div>
                </div>


                {/* ====== STEP 2 ====== */}
                <div className="flex flex-col items-center group ">
                    <div className="relative flex flex-col items-center mb-12 transition-transform duration-300 group-hover:-translate-y-2">
                       <img src="/images/buddy9.png" alt="Step 2" className="w-65 h-auto object-contain relative z-30 -mb-20 drop-shadow-xl" />
                       
                       {/* 3D BROWN STAND */}
                       <div className="relative w-56 h-16 z-20 -mb-3">
                           <div className="absolute top-2 left-0 w-full h-full bg-[#a64a08] rounded-[50%] shadow-xl"></div>
                           <div className="absolute top-0 left-0 w-full h-full bg-[#754824] rounded-[50%] border-b-4 border-[#4a2b13]"></div>
                       </div>
                    </div>

                    <div className="bg-[#FFF8E7] rounded-2xl p-8 w-full max-w-sm shadow-lg border-2 -mb-20 border-orange-50/50">
                       <h3 className="font-poetsen text-2xl text-[#451a03] mb-3">Snap & Track</h3>
                       <p className="text-[#451a03]/70 font-medium leading-relaxed text-sm">
                       Simply capture your food and fitness, and we’ll do the rest—track your calories, nutrients, and progress in a flash.
                       </p>
                    </div>
                </div>


                {/* ====== STEP 3 ====== */}
                <div className="flex flex-col items-center group">
                    <div className="relative flex-col items-center mb-10 flex transition-transform duration-300 group-hover:-translate-y-2">
                       <img src="/images/buddy10.png" alt="Step 3" className="w-69 h-auto object-contain relative z-30 -mb-25 drop-shadow-xl" />
                       
                       {/* 3D BROWN STAND */}
                       <div className="relative w-52 h-16 z-20">
                           <div className="absolute top-2 left-0 w-full h-full bg-[#a64a08] rounded-[50%] shadow-xl"></div>
                           <div className="absolute top-0 left-0 w-full h-full bg-[#754824] rounded-[50%] border-b-4 border-[#4a2b13]"></div>
                       </div>
                    </div>

                    <div className="bg-[#FFF8E7] rounded-2xl p-8 w-full max-w-sm shadow-lg border-2 border-orange-50/50">
                       <h3 className="font-poetsen text-2xl text-[#451a03] mb-3">Get Motivated</h3>
                       <p className="text-[#451a03]/70 font-medium leading-relaxed text-sm">
                          Wondering how close you are? We show you how each meal, snack, and sip impacts your journey.
                       </p>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;