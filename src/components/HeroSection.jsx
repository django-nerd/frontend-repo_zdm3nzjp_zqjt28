import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const HeroSection = () => {
  const waLink = 'https://wa.me/6281234567890?text=Halo%20Metasocial!%20Saya%20ingin%20punya%20Team%20Social%20Media.';

  return (
    <section className="relative w-full min-h-[80vh] bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-950/90 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-emerald-300 ring-1 ring-emerald-500/30">
            <Rocket className="h-4 w-4" />
            Metasocial — Sosmed Growth Partner
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Ga punya waktu buat ngurusin sosmed dan belum ada budget buat bangun team sosmed sendiri?
          </h1>

          <p className="mt-5 text-lg text-slate-300 md:text-xl">
            Serahkan pada tim Metasocial! Konten rutin terposting, desain lebih menarik, dan brand makin dikenal — tanpa perlu hire tim in-house yang mahal.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
            >
              👉 Miliki Team Social Media Sekarang!
            </a>
            <div className="text-sm text-slate-300">
              👉 Konten rutin terposting • Desain menarik • Brand makin dikenal
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
