import React from 'react';

// Data Array for the 6 features
const features = [
  {
    id: 1,
    title: "Snap The Meal",
    description: "Point your camera. Tap once. Boom! Your food is scanned for calories, nutrients & balance.",
    icon: "/images/healthy_food.png", 
    overlay: "/images/scanner.png", // This will now be rendered
  },
  {
    id: 2,
    title: "Calorie Burn Tracker",
    description: "From dance moves to dishwashing, every step you take gets counted. Track daily burns & watch your progress ignite.",
    icon: "/images/kcal.png", 
  },
  {
    id: 3,
    title: "Calorie Intake Tracker",
    description: "You eat, we calculate. Track what's on your plate in seconds and get instant feedback on how it fits your goals.",
    icon: "/images/barcodescan.png", 
  },
  {
    id: 4,
    title: "Goal Predictions",
    description: "Wondering how close you are? We show you how each meal, snack and sip impacts your journey.",
    icon: "/images/target.png", 
  },
  {
    id: 5,
    title: "Buddy Motivation",
    description: "Your pet grows with every healthy choice you make. Get daily motivation from your virtual buddy.",
    icon: "/images/buddy6.png", 
  },
  {
    id: 6,
    title: "Social Sharing",
    description: "Proud of your plate or just loving the glow-up? Post your meals, share your streaks, and let your squad hype you up!",
    icon: "/images/social.png", 
  },
];

const PowersSection: React.FC = () => {
  return (
    // SECTION CONTAINER
    <section className="relative w-full bg-white py-24 px-6 lg:px-8">
      
      {/* --- HEADER --- */}
      <div className="text-center mb-24"> {/* Increased margin bottom to clear the first row's floating icons */}
        <p className="text-brand-orange font-bold text-xs tracking-widest uppercase mb-4">
          Features That Flex
        </p>
        <h2 className="font-poetsen text-4xl lg:text-5xl text-[#451a03] leading-tight">
          Your Healthy Sidekick's <br /> Secret Powers
        </h2>
      </div>

      {/* --- GRID LAYOUT --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
        
        {features.map((feature) => (
          // CARD COMPONENT
          <div 
            key={feature.id} 
           
            className="relative bg-[radial-gradient(circle_at_center,#FFF7E8_10%,#FFF7E8_100%)] rounded-xl px-8 pb-13 pt-17 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl mt-8"
          >
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-26 h-26 bg-white border-[3px] border-[#451a03] rounded-3xl flex items-center justify-center shadow-sm z-10">
              
              {/* Main Icon */}
              <img 
                src={feature.icon} 
                alt={feature.title} 
                className="w-14 h-14 object-contain relative z-0" 
              />

              {/* Overlay Image (Scanner Frame) - Rendered if it exists */}
              {feature.overlay && (
                <img 
                  src={feature.overlay} 
                  alt="Overlay" 
                  className="absolute inset-0 m-auto w-20 h-20 object-contain z-10" 
                />
              )}
            </div>

            {/* TITLE */}
            <h3 className="font-poetsen text-2xl text-[#451a03] mb-5 mt-4">
              {feature.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-[#451a03]/70 text-sm leading-relaxed font-medium max-w-[90%]">
              {feature.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default PowersSection;