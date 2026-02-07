import React, { useState } from 'react';
// Import Lucide icons for the +/- toggle
import { Plus, Minus } from 'lucide-react';

// FAQ Data
const faqs = [
  {
    id: 1,
    question: "1. How Does The App Track My Calories?",
    answer: "Simply snap a photo of your meal, and our AI analyzes the portion size and ingredients to give you an accurate calorie count instantly. You can also scan barcodes or search our extensive database manually."
  },
  {
    id: 2,
    question: "2. What’s The Deal With My Virtual Pet?",
    answer: "Your buddy’s your #1 health fan! Your pet thrives when you make healthy choices! The more steps you take, meals you log, and water you drink, the more your pet grows and gets active. Slack off? Your pet may take a nap, but don’t worry—it’ll cheer you on when you’re back on track!"
  },
  {
    id: 3,
    question: "3. Can I Track My Steps And Calories From Other Apps?",
    answer: "Yes! Sync and track with ease. You can easily sync the app with fitness trackers like Google Fit and sync your daily steps and calories from other apps. The more data we have, the better we can help you achieve your goals!"
  },
  {
    id: 4,
    question: "4. Is The App Good For Beginners?",
    answer: "Absolutely! We designed it to be super simple. Whether you're a pro athlete or just starting your journey, the intuitive interface and helpful buddy make tracking fun and stress-free."
  },
  {
    id: 5,
    question: "5. Can I Track More Than Just Calories?",
    answer: "Yes! It’s a full health tracker. Along with calories, you can track your macros (carbs, protein, fat), water intake, and exercise. The app will also give you personalized suggestions to help you stay on track with your goals."
  },
  {
    id: 6,
    question: "6. What If I Have Food Allergies Or Sensitivities?",
    answer: "No problem! You can customize your dietary preferences in the settings. The app will alert you if a scanned meal contains ingredients you want to avoid and suggest alternatives."
  }
];

const FAQSection: React.FC = () => {
  // State to track which accordion item is open (null = all closed)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-white py-24 px-6 lg:px-12 overflow-hidden">
      
      {/* HEADER */}
      <div className="text-center -mt-25 mb-16">
        <h2 className="font-poetsen text-4xl lg:text-5xl text-[#451a03] leading-tight">
          Curious About The App? <br /> We’ve Got You!
        </h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">

        {/* --- LEFT SIDE: MASCOT & QUESTION MARKS --- */}
        <div className="relative w-full max-w-[400px] lg:w-1/3 flex justify-center lg:justify-end mt-10 lg:mt-0">
          
          {/* Main Buddy Image */}
          <img 
            src="/images/buddy11.png" 
            alt="Confused Buddy" 
            className="w-70 lg:w-95 object-contain relative z-10" 
          />
          <img 
            src="/images/quest.png" 
            alt="Question Marks" 
            className="absolute top-40 -right-15 w-36 h-auto animate-bounce-slow z-20 rotate-12" 
            style={{ animationDuration: '4s', animationDelay: '1s' }}
          />
        </div>


        {/* --- RIGHT SIDE: ACCORDION LIST --- */}
        <div className="w-full lg:w-2/3 flex flex-col gap-5">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id} 
              className="bg-white rounded-[1.5rem] shadow-[0_4px_20px_rgb(0,0,0,0.06)] overflow-hidden transition-all duration-300 hover:shadow-lg border border-transparent hover:border-orange-100"
            >
              
              {/* Accordion Header (Clickable) */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
              >
                <span className={`font-poetsen text-lg lg:text-xl transition-colors duration-300 ${openIndex === index ? 'text-[#D97706]' : 'text-[#451a03]'}`}>
                  {faq.question}
                </span>
                
                {/* Toggle Icon */}
                <div className="shrink-0 ml-4 cursor-pointer">
                  {openIndex === index ? (
                    <Minus className="text-[#D97706] w-6 h-6" />
                  ) : (
                    <Plus className="text-[#451a03]/60 group-hover:text-[#D97706] w-6 h-6 transition-colors" />
                  )}
                </div>
              </button>

              {/* Accordion Body (Animated Height) */}
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-[#451a03]/70 font-medium leading-relaxed text-sm lg:text-base border-t border-gray-50 mt-2">
                  {faq.answer}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default FAQSection;