import React from 'react';
// Import social icons
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  // Tailwind class to turn any colored image/svg purely white using CSS filters
  const whiteFilterClass = "brightness-0 invert";

  // Navigation links data
  const quickLinks = [
    "Contact Now", 
    "Be a Fitness Coach", 
    "Privacy Policy", 
    "Refund Policy", 
    "Terms & Conditions"
  ];

  // Social media icons data
  const socialIcons = [
    { icon: <FaFacebookF />, id: 'fb' },
    { icon: <FaInstagram />, id: 'ig' },
    { icon: <FaTwitter />, id: 'tw' },
    { icon: <FaLinkedinIn />, id: 'li' },
    { icon: <FaYoutube />, id: 'yt' },
  ];

  return (
    <footer className="relative w-full bg-white pt-32 lg:pt-40 pb-0">
      
      {/* ==============================================================
          SECTION A: FLOATING CTA BOX (Unchanged)
      ============================================================== */}
      <div className="max-w-4xl mx-auto px-5 -mt-25 relative z-20">
        <div className="bg-[#FFF8E1] rounded-2xl p-8 lg:p-4 flex flex-col lg:flex-row items-center justify-between relative shadow-2xl -mb-24 lg:-mb-32 overflow-visible">
            
          {/* 1. Left Side Floating Icons */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
            <div className="absolute top-10 right-80 bg-white p-3 rounded-2xl shadow-lg flex items-center justify-center -rotate-10">
              <img src="/images/apple1.png" alt="icon" className="w-10 h-10 object-contain" />
            </div>
            <div className="absolute bottom-5 right-90 bg-white p-3 rounded-2xl shadow-lg flex items-center justify-center">
              <img src="/images/nutrition.png" alt="icon" className="w-10 h-10 object-contain" />
            </div>
            <div className="absolute top-28 right-100 bg-white p-3 rounded-2xl shadow-lg flex items-center justify-center rotate-25">
              <img src="/images/health1.png" alt="icon" className="w-10 h-10 object-contain" />
            </div>
          </div>

           {/* 2. Center Text & Button */}
           <div className="relative z-10 text-center lg:text-left mb-8 lg:mb-0 max-w-xl lg:ml-5">
               <h2 className="font-poetsen text-3xl lg:text-2xl text-[#D97706] mb-4 leading-tight">
                 Let’s Go, Goal Getter!
               </h2>
               <h2 className="font-poetsen text-3xl lg:text-2xl text-[#451a03] mb-4 leading-tight">
                 Say Hello To A Healthier You! 
               </h2>
               <p className="text-[#451a03] text-md font-light mb-8 leading-relaxed">
                 Track your meals, see your progress, and let your <br />
                 buddy keep you motivated. Healthy living is just <br />
                 a snap away.
               </p>
               <button className="bg-[#D97706] text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-[#b36105] transition-transform hover:scale-105 shadow-md border-b-4 border-[#92400e] cursor-pointer">
                   Download Now
               </button>
           </div>

           {/* 3. Right Side Buddy Image */}
           <div className="relative z-20 lg:absolute lg:right-3 lg:-bottom-11 flex justify-center">
             <img 
               src="/images/buddy12.png" 
               alt="Excited Buddy" 
               className="w-64 lg:w-100 h-auto object-contain lg:translate-x-10 lg:translate-y-5" 
             />
           </div>
        </div>
      </div>


      {/* ==============================================================
          MAIN FOOTER BACKGROUND SECTION
      ============================================================== */}
      <div className="w-full bg-brand-dark text-white pt-40 lg:pt-48 pb-8 px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            
            {/* Main Flex Container */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-12 -mt-10">

                {/* === LEFT COLUMN: BUDDY IMAGE ONLY (Scaled) === */}
                <div className="w-full lg:w-4/12 flex items-end justify-center lg:justify-start">
                    <img 
                        src="/images/buddy13.png" 
                        alt="Buddy Standing" 
                        className="w-70 lg:w-100 h-auto object-contain drop-shadow-2xl" 
                    />
                </div>


                {/* === RIGHT COLUMN: HEADER + GRID === */}
                <div className="w-full lg:w-8/12 flex flex-col pt-10">
                    
                    {/* --- PART 1: HEADER (Logo, Title, Tagline, Paragraph) --- */}
                    <div className="mb-10 w-full max-w-lg">
                        
                        {/* Title Row Container */}
                        <div className="flex items-start gap-4 mb-6">
                            {/* 1. Logo Image */}
                            <img src="/images/BuddyLogo.png" alt="Logo" className="w-14 h-14 object-contain shrink-0 mt-1 rounded-2xl" />
                            
                            {/* 2. Text Block */}
                            <div className="flex flex-col w-full">
                                {/* Top Row: Calorie Tracker + Floating Buddy */}
                                <div className="relative flex items-baseline">
                                    <h3 className="font-poetsen text-3xl lg:text-4xl text-[#D97706] leading-none tracking-wide z-10">
                                        Calorie Tracker
                                    </h3>
                                    
                                    {/* 'Buddy' + Paws - Positioned relative to text */}
                                    <div className="absolute -top-5 -right-4 lg:left-15 flex flex-col items-center transform rotate-15 z-20">
                                        <div className="flex gap-1 mb-0.5">
                                            <img src="/images/paw.svg" alt="Paw" className={`w-2 h-2 ${whiteFilterClass}`} />
                                            <img src="/images/paw.svg" alt="Paw" className={`w-3 h-3 ${whiteFilterClass}`} />
                                        </div>
                                        <span className="font-poetsen foont-medium text-white leading-none">Buddy</span>
                                    </div>
                                </div>

                                {/* Orange Line */}
                                <div className="w-30 h-0.5 bg-brand-orange my-3 rounded-full"></div>

                                {/* Tagline */}
                                <p className="text-brand-orange text-[10px] -mt-5 mr-45 font-poetsen tracking-[0.2em] text-right">
                                    Burn That Fat Daily
                                </p>
                            </div>
                        </div>

                        {/* 3. Description Paragraph */}
                        <p className="text-white/80 text-base leading-relaxed ">
                            Buddy's got your back—from meal snaps to mood boosts, every step counts toward your glow-up!
                        </p>
                    </div>


                    {/* --- PART 2: 3-COLUMN GRID (Links, Downloads, Social) --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 border-t border-white/5 pt-8">
                        
                        {/* COLUMN 1: Quick Links */}
                        <div>
                            <h4 className="font-poetsen text-xl mb-6 text-white">Quick Links</h4>
                            <ul className="flex flex-col w-full">
                                {quickLinks.map((link, index) => (
                                    <li key={index} className="border-b border-white/10 last:border-0">
                                        <a href="#" className="block py-3 text-sm lg:text-base font-light text-white/80 hover:text-[#D97706] hover:pl-2 transition-all">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* COLUMN 2: Download Now */}
                        <div>
                            <h4 className="font-poetsen text-xl mb-4 text-[#D97706]">Download Now</h4>
                            <p className="text-white/60 text-sm mb-6 font-light">Get Buddy-fied on the go!</p>
                            
                            <div className="flex flex-col gap-4">
                                {/* Download for Android */}
                                <button className="flex items-center bg-[#D97706] hover:bg-[#bd6806] border border-white/10 rounded-full px-3 py-3 transition-all w-full max-w-50 cursor-pointer">
                                    <img src="/images/google-play.svg" alt="Google Play" className={`w-10 h-10 mr-2 ${whiteFilterClass}`} />
                                    <div className="text-left text-white">
                                        <span className="block text-sm font-mono uppercase opacity-80">GET IT ON</span>
                                        <span className="block text-xl font-mono leading-none">Google Play</span>
                                    </div>
                                </button>

                                {/* Download for iOS */}
                                <button className="flex items-center bg-[#D97706] hover:bg-[#af6006] border border-white/10 rounded-full px-3 py-3 transition-all w-full max-w-50 cursor-pointer">
                                    <img src="/images/apple-logo.svg" alt="Apple" className={`w-10 h-10 mr-2 ${whiteFilterClass}`} />
                                    <div className="text-left text-white">
                                        <span className="block text-sm font-mono opacity-80">Download on</span>
                                        <span className="block text-xl font-mono leading-none">App Store</span>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* COLUMN 3: Let's Be Social */}
                        <div>
                            <h4 className="font-poetsen text-xl mb-4 text-white">Let's Be Social!</h4>
                            <p className="text-white/60 text-sm mb-6 font-light leading-relaxed">
                                Buddy loves making new friends. Follow us & tag your food stories!
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {socialIcons.map((social) => (
                                    <a key={social.id} href="#" className="w-10 h-10 bg-[#D97706] border border-white/10 rounded-lg flex items-center justify-center text-white hover:bg-[#aa5e06] hover:border-[#D97706] transition-all">
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* === BOTTOM SECTION: COPYRIGHT & LINKS === */}
            <div className="border-t border-white/10 pt-8 -mt-18 pb-2">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    
                    {/* Copyright Text (Left) */}
                    <p className="text-sm text-white/40 font-light text-center md:text-left">
                        © Copyright 2025 calorietrackerbuddy
                    </p>

                    {/* Bottom Links (Right) */}
                    <div className="flex flex-wrap gap-6 justify-center">
                        <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">Terms of Use</a>
                        <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>

          </div>
      </div>
    </footer>
  );
};

export default Footer;