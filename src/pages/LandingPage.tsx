import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import MeetBuddy from '../components/sections/MeetBuddy';
import Features from '../components/sections/Features'; 
import Powers from '../components/sections/Powers'; 
import Process from '../components/sections/Process'; 
import Footer from '../components/layout/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <MeetBuddy />
        <Features />
        <Powers/>
        <Process />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;