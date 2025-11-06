import React from 'react';
import { Shield, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-2 text-white">
          <Shield className="h-5 w-5 text-emerald-400" />
          <span className="font-semibold">Metasocial</span>
        </div>
        <p className="text-center text-sm md:text-left">
          © {new Date().getFullYear()} Metasocial. All rights reserved.
        </p>
        <a
          href="https://wa.me/6281234567890?text=Halo%20Metasocial!%20Saya%20ingin%20konsultasi%20gratis."
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500"
        >
          <MessageCircle className="h-4 w-4" /> Chat WhatsApp
        </a>
      </div>
    </footer>
  );
};

export default Footer;
