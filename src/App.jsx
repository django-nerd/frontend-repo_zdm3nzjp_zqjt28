import React from 'react';
import HeroSection from './components/HeroSection';
import PainSolution from './components/PainSolution';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <HeroSection />
      <PainSolution />
      <Benefits />
      <Pricing />
      <FAQ />
      <footer className="bg-slate-900 py-10 text-center text-slate-300">
        <p>© {new Date().getFullYear()} Metasocial. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
