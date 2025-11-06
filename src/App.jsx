import React from 'react';
import HeroSection from './components/HeroSection';
import Logos from './components/Logos';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <HeroSection />
      <Logos />
      <Benefits />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
