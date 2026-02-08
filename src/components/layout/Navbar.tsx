import React from 'react';
import { Smartphone, Mail } from 'lucide-react';

const Navbar: React.FC = () => {

  // 1. Define your dynamic links data here
  const navLinks = [
    { name: "Home", href: "#", active: true },      
    { name: "Meet Buddy", href: "#meetbuddy", active: false }, 
    { name: "Features", href: "#features", active: false },
    { name: "Blog", href: "#process", active: false },
  ];

  return (
    <nav className="fixed top-6 left-0 w-full z-50 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="shrink-0 cursor-pointer border-2 rounded-2xl border-brand-dark hover:scale-105 transition">
          <img src="/images/BuddyLogo.png" alt="Buddy Logo" className="w-14 h-14 rounded-xl" />
        </div>

        {/* Central Pill Navigation */}
        <div className="hidden md:flex items-center bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-white ml-24">
          <ul className="flex items-center gap-1">
            
            {/* 2. Map through the navLinks array */}
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className={`px-5 py-2 rounded-full transition hover:text-brand-orange ${
                    link.active 
                      ? "font-bold text-gray-700"  // Style for Active link (Home)
                      : "font-medium text-gray-500" // Style for Inactive links
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}

            {/* Static Mobile App Button (Kept separate as it's a CTA) */}
            <li>
              <button className="flex items-center gap-2 px-6 py-2.5 bg-brand-orange text-white rounded-full font-bold shadow-md hover:bg-orange-700 hover:shadow-lg transition ml-2">
                <Smartphone className="w-5 h-5" /> 
                <span>Mobile App</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4 translate-x-18">
          {/* Mail Button */}
          <button className="w-12 h-12 rounded-full flex items-center justify-center shadow-md border border-orange-500 text-brand-orange hover:bg-orange-50 transition group">
            <Mail className="w-6 h-6 group-hover:scale-110 transition cursor-pointer" />
          </button>
          
          {/* Register / Trainer Button */}
          <div className="flex items-center pr-2 pl-1.5 py-1.5 cursor-pointer group">
             <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white shadow-sm group-hover:bg-orange-700 transition">
                <img 
                  src="/images/trainer.png" 
                  alt="Trainer" 
                  className="w-6 h-6 object-contain brightness-0 invert" 
                />
             </div>
             <div className="ml-3 text-[10px] leading-tight font-bold text-brand-dark">
                Be a Fitness Coach?<br/>
                <span className="text-gray-400 text-[15px] font-medium group-hover:text-brand-orange transition">Register Here</span>
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;