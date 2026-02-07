import React from 'react';
// Import social icons
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  // Tailwind class to turn any colored image/svg purely white using CSS filters
  const whiteFilterClass = "brightness-0 invert";

  // Navigation links data
  const navLinks = ["Home", "About Us", "Features", "How It Works", "Testimonials", "FAQs"];

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
          SECTION A: FLOATING CTA BOX (Overlapping the main footer)
      ============================================================== */}
      <div className="max-w-4xl mx-auto px-5 -mt-25 relative z-20">
        {/* The Box Container: Negative margin top pulls it up over the section above */}
        <div className="bg-brand-cream rounded-2xl p-8 lg:p-4 flex flex-col lg:flex-row items-center justify-between relative shadow-2xl -mb-24 lg:-mb-32 overflow-visible">
           
          {/* 1. Left Side Floating Icons (Absolute decorations) */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
            
            {/* Apple Icon - Top Right */}
            <div 
              className="absolute top-10 right-80 bg-white p-3 rounded-2xl shadow-lg flex items-center justify-center -rotate-10" 
              style={{animationDelay: '0s'}}
            >
              <img src="/images/apple1.png" alt="icon" className="w-10 h-10 object-contain" />
            </div>

            {/* Nutrition Icon - Bottom Left */}
            <div 
              className="absolute bottom-5 right-90 bg-white p-3 rounded-2xl shadow-lg flex items-center justify-center" 
              style={{animationDelay: '1s'}}
            >
              <img src="/images/nutrition.png" alt="icon" className="w-10 h-10 object-contain" />
            </div>

            {/* Health Icon - Middle Left */}
            <div 
              className="absolute top-28 right-100 bg-white p-3 rounded-2xl shadow-lg flex items-center justify-center rotate-25" 
              style={{animationDelay: '0.5s'}}
            >
              <img src="/images/health1.png" alt="icon" className="w-10 h-10 object-contain" />
            </div>

          </div>

           {/* 2. Center Text & Button */}
           <div className="relative z-10 text-center lg:text-left mb-8 lg:mb-0 max-w-xl lg:ml-5">
               <h2 className="font-poetsen text-3xl lg:text-2xl text-brand-orange mb-4 leading-tight">
                 Let’s Go, Goal Getter!
               </h2>
               <h2 className="font-poetsen text-3xl lg:text-2xl text-brand-dark mb-4 leading-tight">
                 Say Hello To A Healthier You! 
               </h2>
               <p className="text-brand-dark text-md font-light mb-8 leading-relaxed">
                 Track your meals, see your progress, and let your <br />
                  buddy keep you motivated. Healthy living is just <br />
                  a snap away.
               </p>
               <button className="bg-[#D97706] text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-[#b36105] transition-transform hover:scale-105 shadow-md border-b-4 border-[#92400e] cursor-pointer">
                   Download Now
               </button>
           </div>

           {/* 3. Right Side Buddy 12 Image (Popping out) */}
           <div className="relative z-20 lg:absolute lg:right-3 lg:-bottom-11 flex justify-center">
             <img 
               src="/images/buddy12.png" 
               alt="Excited Buddy" 
               className="w-64 lg:w-[400px] h-auto object-contain lg:translate-x-10 lg:translate-y-5" 
             />
           </div>
        </div>
      </div>


     {/* ==============================================================
          MAIN FOOTER BACKGROUND SECTION
          - Matches the Left-Aligned Layout
      ============================================================== */}
      <div className="w-full bg-[#2a0f02] text-white pt-40 lg:pt-48 pb-12 px-6 lg:px-8 relative z-10 border-t-8 border-[#D97706]">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">

            {/* === LEFT COLUMN: LOGO, TAGLINE, & IMAGE === */}
            <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start">
                
                {/* 1. Header Logo */}
                <div className="flex items-center gap-3 mb-6">
                    <img src="/images/BuddyLogo.png" alt="Logo" className="w-10 h-10 object-contain" />
                    <h3 className="font-poetsen text-2xl lg:text-3xl tracking-wide">Calorie Tracker</h3>
                </div>

                {/* 2. "Burn That Fat" Tagline */}
                <div className="flex flex-wrap items-center gap-3 mb-10">
                    <span className="font-poetsen text-lg lg:text-xl tracking-widest uppercase text-[#D97706]">
                        BURN THAT FAT DAILY
                    </span>
                    <span className="font-poetsen text-xl lg:text-2xl rotate-12 transform origin-bottom-left text-white/90 mx-1">
                        Buddy
                    </span>
                    <div className="flex gap-2">
                        <img src="/images/paw.svg" alt="Paw" className={`w-5 h-5 ${whiteFilterClass} opacity-60`} />
                        <img src="/images/paw.svg" alt="Paw" className={`w-5 h-5 ${whiteFilterClass} opacity-60`} />
                    </div>
                </div>

                {/* 3. Buddy Image (Heart Eyes) */}
                <div className="mt-auto">
                    <img 
                        src="/images/buddy13.png" 
                        alt="Buddy Standing" 
                        className="w-[220px] lg:w-[280px] h-auto object-contain drop-shadow-2xl" 
                    />
                </div>
            </div>


            {/* === RIGHT COLUMN: LINKS, DOWNLOADS, SOCIALS === */}
            <div className="w-full lg:w-7/12 flex flex-col">
                
                {/* Top Row: Links & Download */}
                <div className="flex flex-col md:flex-row gap-12 lg:gap-16 mb-16">
                    
                    {/* Quick Links */}
                    <div className="w-full md:w-1/2">
                        <h4 className="font-poetsen text-xl mb-6 text-white/90">Quick Links</h4>
                        <ul className="flex flex-col space-y-0 border-t border-white/10">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="block py-3 text-base lg:text-lg font-medium text-white/60 hover:text-[#D97706] hover:pl-2 transition-all border-b border-white/10">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Download Section */}
                    <div className="w-full md:w-1/2">
                        <h4 className="font-poetsen text-xl mb-6 text-[#D97706]">Download Now</h4>
                        <p className="text-white/50 text-sm mb-6">Get Buddy-fied on the go!</p>
                        <div className="flex flex-col gap-4">
                            <button className="flex items-center bg-[#451a03] hover:bg-[#5c2304] border border-white/10 rounded-xl px-5 py-3 transition-all w-full max-w-[250px]">
                                <img src="/images/apple-logo.svg" alt="Apple" className={`w-8 h-8 mr-4 ${whiteFilterClass}`} />
                                <div className="text-left">
                                    <span className="block text-[10px] text-white/50 uppercase">Download on the</span>
                                    <span className="block text-lg font-bold leading-none">App Store</span>
                                </div>
                            </button>
                            <button className="flex items-center bg-[#451a03] hover:bg-[#5c2304] border border-white/10 rounded-xl px-5 py-3 transition-all w-full max-w-[250px]">
                                <img src="/images/google-play.svg" alt="Google Play" className={`w-8 h-8 mr-4 ${whiteFilterClass}`} />
                                <div className="text-left">
                                    <span className="block text-[10px] text-white/50 uppercase">GET IT ON</span>
                                    <span className="block text-lg font-bold leading-none">Google Play</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Socials & Copyright */}
                <div>
                    <h4 className="font-poetsen text-xl mb-6">Let's Be Social</h4>
                    <div className="flex flex-wrap gap-3 mb-8">
                        {socialIcons.map((social) => (
                            <a key={social.id} href="#" className="w-10 h-10 bg-[#451a03] border border-white/10 rounded-lg flex items-center justify-center text-white hover:bg-[#D97706] hover:border-[#D97706] transition-all">
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    <hr className="border-white/10 mb-6" />

                    <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/40 gap-4">
                        <p>© 2024 Calorie Tracker Buddy. All rights reserved.</p>
                        <div className="flex flex-wrap gap-4 lg:gap-6 justify-center">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms & Condition</a>
                            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                        </div>
                    </div>
                </div>

            </div>

          </div>
      </div>
    </footer>
  );
};

export default Footer;