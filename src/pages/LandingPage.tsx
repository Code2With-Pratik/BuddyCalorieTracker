import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features'; // Create similarly
import Pricing from '../components/sections/Pricing';   // Create similarly
import Footer from '../components/layout/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;