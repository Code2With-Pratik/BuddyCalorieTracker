import React from 'react';
import { Target, Heart } from 'lucide-react';

const MeetBuddySection: React.FC = () => {
  return (
    <section className="relative w-full bg-linear-to-b from-[#ffffff] to-[#FFECC5] pt-60 pb-32 -mt-15 overflow-hidden z-20">
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[85%] h-100 bg-[#FED898] rounded-b-full z-0"></div>
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[80%] h-90 bg-[#fff5de] rounded-b-full z-0"></div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">

        {/* 1. SECTION HEADER */}
        <div className="text-center -mt-30 mb-44">
          <p className="text-brand-orange font-normal font-poetsen text-xs tracking-[0.3em]  mb-4">
            Cute. Smart. Loyal.
          </p>
          <h2 className="font-poetsen text-2xl lg:text-5xl text-brand-dark mb-6 flex items-center justify-center gap-3">
            Meet Your Buddy! 
            <img src="/images/buddy.png" alt="🐶" className="relative w-10 h-12 inline-block -left-36 bottom-5 " />
          </h2>
          <p className="text-brand-orange font-san font-semibold text-sm lg:text-sm max-w-xl mx-auto">
            Say hello to your snack-sized, goal-hungry,<br /> health-loving virtual pet!
          </p>
        </div>


        {/* 2. THREE-COLUMN GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-20 items-center">

          {/* ----- LEFT COLUMN (2 Cards) ----- */}
          <div className="flex flex-col gap-16 relative">
            {/* Floating Emojis */}
            <img src="/images/love.png" alt="😍" className="absolute top-40 -left-8 w-12 animate-bounce-slow z-20" />
            <img src="/images/burning.png" alt="🔥" className="absolute top-20 right-2 w-12 animate-bounce-slow z-20" />

            {/* === CARD 1: Cheerleader (CSS Graph) === */}
            <div className="bg-white p-6 rounded-[20px] shadow-card shadow-brand-orange/10 relative z-10">
              {/* Graph Container */}
              <div className="relative w-60 h-40 bg-gray-50 ml-8 rounded-2xl mb-5 overflow-hidden p-4 flex flex-col justify-between">
                {/* Header & Gauge */}
                <div className="flex justify-between items-start relative z-20">
                  <div>
                    <h4 className="font-bold text-brand-dark/70 text-sm">Health Goal</h4>
                    <span className="font-poetsen text-4xl text-[#4ade80] mt-1 block">87%</span>
                  </div>
                  <div className="bg-[#4ade80] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Calorie Tracker
                  </div>
                </div>
                
                {/* CSS Graph Visuals */}
                <div className="absolute inset-0 z-0">
                  {/* Grid Lines */}
                  <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '100% 25%' }}></div>
                  
                  {/* Red Area ("Other Apps") */}
                  <div className="absolute bottom-0 left-0 w-[45%] h-[60%] bg-linear-to-t from-red-200 to-red-100 rounded-tr-[3rem] opacity-80"></div>
                  {/* Green Area ("Your Buddy") */}
                  <div className="absolute bottom-0 right-0 w-[65%] h-[85%] bg-linear-to-t from-[#4ade80]/30 to-[#4ade80]/10 rounded-tl-[4rem] border-t-4 border-[#4ade80]"></div>
                  
                  {/* Labels */}
                  <div className="absolute bottom-[40%] left-[15%] bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Other Apps</div>
                </div>
                 <div className="text-xs text-brand-dark/40 font-bold text-center relative z-20 mt-auto">Time</div>
              </div>
              
              {/* Card Content */}
              <h3 className="font-poetsen text-xl text-brand-dark mb-4">Cheerleader in Your Pocket</h3>
              <p className="text-brand-orange font-medium leading-relaxed">
                Your buddy will remind you of your goal, motivating you to make better choices and stay focused.
              </p>
            </div>

            {/* === CARD 2: Snack Attack (3 Food Images) === */}
            <div className="bg-white p-8 rounded-[20px] shadow-card shadow-brand-orange/10 relative z-10">
            {/* Floating Emojis */}
            <img src="/images/food.png" alt="😋" className="absolute top-35 -left-8 w-12 animate-bounce-slow z-20" />
            <img src="/images/hungry.png" alt="🤤" className="absolute top-35 -right-8 w-12 animate-bounce-slow z-20" />
              {/* Snacks Container */}
              <div className="flex justify-around items-center mb-8 py-4">
                <div className="w-17 h-17 bg-white rounded-2xl shadow-card p-2 flex items-center justify-center rotate-[-10deg]">
                  <img src="/images/donut.png" alt="Donut" className="w-11 object-contain" />
                </div>
                <div className="w-20 h-20 bg-white rounded-2xl shadow-card p-2 flex items-center justify-center -mt-16">
                  <img src="/images/fries.png" alt="Fries" className="w-11 object-contain" />
                </div>
                <div className="w-17 h-17 bg-white rounded-2xl shadow-card p-2 flex items-center justify-center rotate-14">
                  <img src="/images/greenapple.png" alt="Apple" className="w-11 object-contain" />
                </div>
              </div>

              {/* Card Content */}
              <h3 className="font-poetsen text-xl text-brand-dark mb-4">Skip a snack attack? Your buddy levels up.</h3>
              <p className="text-brand-orange leading-relaxed font-medium">
                Resist the urge, and watch your buddy level up with every healthy choice.
              </p>
            </div>
          </div>


          {/* ----- CENTER COLUMN (Mascot) ----- */}
          <div className="flex justify-center relative z-30 my-10 lg:my-0">
            {/* Mascot Image */}
            <img
              src="/images/buddy2.png"
              alt="Buddy with Magnifying Glass"
              className="h-125 lg:h-187.5 w-auto max-w-none object-contain drop-shadow-2xl"
            />
          </div>


          {/* ----- RIGHT COLUMN (2 Cards) ----- */}
          <div className="flex flex-col gap-10 top-16 relative">
            {/* Floating Emojis */}
            <img src="/images/health.png" alt="🧑‍⚕️" className="absolute bottom-40 left-0 w-12 animate-bounce-slow z-20" />
            <img src="/images/heartbeat.png" alt="💖" className="absolute bottom-25 right-2 w-12 animate-bounce-slow z-20" />

            {/* === CARD 3: Eat Well (Plate with Floating Labels) === */}
            <div className="bg-white h-50 p-6 rounded-[20px] shadow-card shadow-brand-orange/10 relative z-10">
              {/* Plate Image Container */}
              <div className="relative h-48 -mt-35 flex items-center justify-center">
                <img src="/images/meal-plate-3.png" alt="Healthy Plate" className="w-48 h-48 object-contain drop-shadow-lg relative z-10" />
                
                {/* Broccoli (Left) */}
                <div className="absolute top-20 -left-2 bg-white px-3 py-1.5 rounded-full shadow-card flex items-center gap-1.5 z-20">
                  <img src="/images/broccoli.png" alt="🥦" className="w-4 h-4" />
                  <span className="text-xs font-bold text-brand-dark">Broccoli</span>
                </div>
                 {/* Avocado (Top Right) */}
                <div className="absolute -top-2 right-4 bg-white px-3 py-1.5 rounded-full shadow-card flex items-center gap-1.5 z-20 rotate-40">
                  <img src="/images/avocado.png" alt="🥑" className="w-4 h-4" />
                  <span className="text-xs font-bold text-brand-dark">Avocado</span>
                </div>
                {/* Carrot (Bottom Right) */}
                <div className="absolute bottom-4 right-10 bg-white px-3 py-1.5 rounded-full shadow-card flex items-center gap-1.5 z-20">
                  <img src="/images/carrot.png" alt="🥕" className="w-4 h-4" />
                  <span className="text-xs font-bold text-brand-dark">Carrot</span>
                </div>
              </div>

              {/* Card Content */}
              <h3 className="font-poetsen text-xl text-brand-dark mb-4">Eat well? Your buddy thrives.</h3>
              <p className="text-brand-orange leading-relaxed font-medium">
                Healthy meals = a happier, stronger buddy. Every bite counts toward your goal!
              </p>
            </div>


            {/* === CARD 4: Goal Timeline (CSS Graph) === */}
            <div className="bg-white p-8 rounded-[20px] shadow-card shadow-brand-orange/10 relative z-10">
              {/* Graph Container */}
              <div className="relative h-40 left-5 w-65 bg-gray-50 rounded-2xl mb-8 overflow-hidden p-5 flex flex-col justify-between">
                {/* Header */}
                <div className="flex justify-between items-center relative z-20 mb-2">
                  <h4 className="font-bold text-brand-dark/70 text-sm flex items-center gap-2">
                    <Target className="w-4 h-4 text-brand-orange" /> Goal Timeline
                  </h4>
                  <Heart className="w-5 h-5 text-red-400 fill-current animate-pulse" />
                </div>

                 {/* CSS Graph Visuals */}
                <div className="relative grow z-0">
                  {/* Grid Lines */}
                  <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '100% 33%' }}></div>
                  
                  {/* Start Point (62kg) */}
                  <div className="absolute top-[10%] left-0 flex flex-col items-center">
                     <span className="font-bold text-brand-dark text-sm mb-1">62 kg</span>
                     <div className="w-4 h-4 rounded-full bg-red-400 border-2 border-white shadow-sm z-10"></div>
                     {/* Red downward slope area */}
                     <div className="absolute top-2 left-2 w-32 h-40 bg-linear-to-r from-red-200 to-transparent transform rotate-25 origin-top-left opacity-50 -z-10 rounded-full"></div>
                  </div>

                  {/* End Point (50kg) */}
                  <div className="absolute bottom-[20%] right-0 flex flex-col items-center">
                     <span className="font-bold text-[#4ade80] text-lg mb-1">50 kg</span>
                     <div className="w-6 h-6 rounded-full bg-[#4ade80] border-4 border-white shadow-sm z-10"></div>
                  </div>
                  
                  {/* Connecting Dashed Line (Approximation) */}
                  <div className="absolute top-[15%] left-[5%] w-[90%] h-[65%] border-b-4 border-dotted border-[#4ade80] transform rotate-12 origin-bottom-left opacity-60"></div>
                  
                   {/* Green Success Area */}
                  <div className="absolute bottom-0 right-0 w-full h-[25%] bg-linear-to-t from-[#4ade80]/30 to-transparent"></div>
                </div>

                {/* Timeline Labels */}
                <div className="flex justify-between text-xs text-brand-dark/50 font-bold relative z-20 mt-2">
                  <span>Today</span>
                  <span>In 3 Month</span>
                </div>
              </div>

              {/* Card Content */}
              <h3 className="font-poetsen text-xl text-brand-dark mb-4">You grow. Your buddy grows.</h3>
              <p className="text-brand-orange leading-relaxed font-medium">
                And together? It's unstoppable.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MeetBuddySection;