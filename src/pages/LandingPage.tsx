import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import MeetBuddy from '../components/sections/MeetBuddy';
import Pricing from '../components/sections/Pricing'; 
import Footer from '../components/layout/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <MeetBuddy />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;