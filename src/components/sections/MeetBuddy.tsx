import React from 'react';
import { Activity, Target, Heart } from 'lucide-react';

const MeetBuddySection: React.FC = () => {
  return (
    <section className="relative w-full bg-brand-cream-light pt-60 pb-32 -mt-15 overflow-hidden z-20">
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[85%] h-[500px] bg-[#FED898] rounded-b-full z-0"></div>
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[80%] h-[460px] bg-[#fff5de] rounded-b-full z-0"></div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">

        {/* 1. SECTION HEADER */}
        <div className="text-center mb-24">
          <p className="text-brand-dark/60 font-bold text-xs tracking-[0.3em] uppercase mb-4">
            Cute. Smart. Loyal.
          </p>
          <h2 className="font-poetsen text-5xl lg:text-7xl text-brand-dark mb-6 flex items-center justify-center gap-3">
            Meet Your Buddy! 
            <img src="/images/buddy.png" alt="🐶" className="w-10 h-10 inline-block" />
          </h2>
          <p className="text-brand-dark/80 text-lg lg:text-xl max-w-2xl mx-auto font-medium">
            Say hello to your snack-sized, goal-hungry, health-loving virtual pet!
          </p>
        </div>


        {/* 2. THREE-COLUMN GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-20 items-center">

          {/* ----- LEFT COLUMN (2 Cards) ----- */}
          <div className="flex flex-col gap-16 relative">
            {/* Floating Emojis */}
            <img src="/images/love.png" alt="😍" className="absolute -top-12 -left-8 w-12 animate-bounce-slow z-0" />
            <img src="/images/burning.png" alt="🔥" className="absolute top-1/3 -left-10 w-10 animate-pulse z-0" />

            {/* === CARD 1: Cheerleader (CSS Graph) === */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-brand-orange/10 relative z-10">
              {/* Graph Container */}
              <div className="relative h-52 bg-gray-50 rounded-2xl mb-8 overflow-hidden p-4 flex flex-col justify-between">
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
                  <div className="absolute bottom-0 left-0 w-[45%] h-[60%] bg-gradient-to-t from-red-200 to-red-100 rounded-tr-[3rem] opacity-80"></div>
                  {/* Green Area ("Your Buddy") */}
                  <div className="absolute bottom-0 right-0 w-[65%] h-[85%] bg-gradient-to-t from-[#4ade80]/30 to-[#4ade80]/10 rounded-tl-[4rem] border-t-4 border-[#4ade80]"></div>
                  
                  {/* Labels */}
                  <div className="absolute bottom-[40%] left-[15%] bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Other Apps</div>
                </div>
                 <div className="text-xs text-brand-dark/40 font-bold text-center relative z-20 mt-auto">Time</div>
              </div>
              
              {/* Card Content */}
              <h3 className="font-poetsen text-2xl text-brand-dark mb-4">Cheerleader in Your Pocket</h3>
              <p className="text-brand-dark/70 leading-relaxed font-medium">
                Your buddy will remind you of your goal, motivating you to make better choices and stay focused.
              </p>
            </div>


            {/* === CARD 2: Snack Attack (3 Food Images) === */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-brand-orange/10 relative z-10">
              {/* Snacks Container */}
              <div className="flex justify-around items-center mb-8 py-4">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-md p-2 flex items-center justify-center rotate-[-6deg]">
                  <img src="/images/donut.png" alt="Donut" className="w-14 object-contain" />
                </div>
                <div className="w-20 h-20 bg-white rounded-2xl shadow-md p-2 flex items-center justify-center rotate-[4deg] -mt-4">
                  <img src="/images/fries.png" alt="Fries" className="w-14 object-contain" />
                </div>
                <div className="w-20 h-20 bg-white rounded-2xl shadow-md p-2 flex items-center justify-center rotate-[-3deg]">
                  <img src="/images/greenapple.png" alt="Apple" className="w-14 object-contain" />
                </div>
              </div>

              {/* Card Content */}
              <h3 className="font-poetsen text-2xl text-brand-dark mb-4">Skip a snack attack? Your buddy levels up.</h3>
              <p className="text-brand-dark/70 leading-relaxed font-medium">
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
              className="w-full max-w-[450px] xl:max-w-[550px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>


          {/* ----- RIGHT COLUMN (2 Cards) ----- */}
          <div className="flex flex-col gap-16 relative">
            {/* Floating Emojis */}
            <img src="/images/health.png" alt="🥑" className="absolute -top-10 right-0 w-12 animate-pulse z-0" />
            <img src="/images/heartbeat.png" alt="💖" className="absolute bottom-1/3 -right-8 w-10 animate-bounce-slow z-0" />

            {/* === CARD 3: Eat Well (Plate with Floating Labels) === */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-brand-orange/10 relative z-10">
              {/* Plate Image Container */}
              <div className="relative h-52 mb-8 flex items-center justify-center">
                <img src="/images/meal-plate-3.png" alt="Healthy Plate" className="w-48 h-48 object-contain drop-shadow-lg relative z-10" />
                
                {/* Floating Labels */}
                {/* Broccoli (Left) */}
                <div className="absolute top-1/4 -left-2 bg-white px-3 py-1.5 rounded-full shadow-card flex items-center gap-1.5 z-20">
                  <img src="/images/broccoli.png" alt="🥦" className="w-4 h-4" />
                  <span className="text-xs font-bold text-brand-dark">Broccoli</span>
                </div>
                 {/* Avocado (Top Right) */}
                <div className="absolute -top-2 right-4 bg-white px-3 py-1.5 rounded-full shadow-card flex items-center gap-1.5 z-20">
                  <img src="/images/avocado.png" alt="🥑" className="w-4 h-4" />
                  <span className="text-xs font-bold text-brand-dark">Avocado</span>
                </div>
                {/* Carrot (Bottom Right) */}
                <div className="absolute bottom-4 right-0 bg-white px-3 py-1.5 rounded-full shadow-card flex items-center gap-1.5 z-20">
                  <img src="/images/carrot.png" alt="🥕" className="w-4 h-4" />
                  <span className="text-xs font-bold text-brand-dark">Carrot</span>
                </div>
              </div>

              {/* Card Content */}
              <h3 className="font-poetsen text-2xl text-brand-dark mb-4">Eat well? Your buddy thrives.</h3>
              <p className="text-brand-dark/70 leading-relaxed font-medium">
                Healthy meals = a happier, stronger buddy. Every bite counts toward your goal!
              </p>
            </div>


            {/* === CARD 4: Goal Timeline (CSS Graph) === */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-brand-orange/10 relative z-10">
              {/* Graph Container */}
              <div className="relative h-52 bg-gray-50 rounded-2xl mb-8 overflow-hidden p-5 flex flex-col justify-between">
                {/* Header */}
                <div className="flex justify-between items-center relative z-20 mb-2">
                  <h4 className="font-bold text-brand-dark/70 text-sm flex items-center gap-2">
                    <Target className="w-4 h-4 text-brand-orange" /> Goal Timeline
                  </h4>
                  <Heart className="w-5 h-5 text-red-400 fill-current animate-pulse" />
                </div>

                 {/* CSS Graph Visuals */}
                <div className="relative flex-grow z-0">
                  {/* Grid Lines */}
                  <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '100% 33%' }}></div>
                  
                  {/* Start Point (62kg) */}
                  <div className="absolute top-[10%] left-0 flex flex-col items-center">
                     <span className="font-bold text-brand-dark text-sm mb-1">62 kg</span>
                     <div className="w-4 h-4 rounded-full bg-red-400 border-2 border-white shadow-sm z-10"></div>
                     {/* Red downward slope area */}
                     <div className="absolute top-2 left-2 w-32 h-40 bg-gradient-to-r from-red-200 to-transparent transform rotate-[25deg] origin-top-left opacity-50 -z-10 rounded-full"></div>
                  </div>

                  {/* End Point (50kg) */}
                  <div className="absolute bottom-[20%] right-0 flex flex-col items-center">
                     <span className="font-bold text-[#4ade80] text-lg mb-1">50 kg</span>
                     <div className="w-6 h-6 rounded-full bg-[#4ade80] border-4 border-white shadow-sm z-10"></div>
                  </div>
                  
                  {/* Connecting Dashed Line (Approximation) */}
                  <div className="absolute top-[15%] left-[5%] w-[90%] h-[65%] border-b-4 border-dotted border-[#4ade80] transform rotate-[12deg] origin-bottom-left opacity-60"></div>
                  
                   {/* Green Success Area */}
                  <div className="absolute bottom-0 right-0 w-full h-[25%] bg-gradient-to-t from-[#4ade80]/30 to-transparent"></div>
                </div>

                {/* Timeline Labels */}
                <div className="flex justify-between text-xs text-brand-dark/50 font-bold relative z-20 mt-2">
                  <span>Today</span>
                  <span>In 3 Month</span>
                </div>
              </div>

              {/* Card Content */}
              <h3 className="font-poetsen text-2xl text-brand-dark mb-4">You grow. Your buddy grows.</h3>
              <p className="text-brand-dark/70 leading-relaxed font-medium">
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