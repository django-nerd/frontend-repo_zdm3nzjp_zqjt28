import React from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

const bullets = [
  'Bingung mau posting apa setiap hari',
  'Feed berantakan, desain seadanya',
  'Sudah rajin upload tapi engagement sepi',
  'Waktu habis buat ngurus konten, bisnis utama jadi terbengkalai',
  'Mau rekrut tim social media? Budgetnya bikin mikir dua kali',
];

const solutions = [
  'Posting konsisten sesuai jadwal',
  'Desain profesional yang bikin feed rapi & menarik',
  'Konten video dengan style kekinian',
  'Brand awareness meningkat dengan konten tepat sasaran',
  'Anda fokus ke bisnis, kami urus sosial medianya',
  'Hemat biaya, tanpa hire karyawan khusus',
];

const PainSolution = () => {
  return (
    <section className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-rose-600 ring-1 ring-rose-200">
            <AlertTriangle className="h-4 w-4" /> PAIN PROBLEM
          </div>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Ngaku deh, Pernah Alami Hal Ini Saat Kelola Sosmed Bisnis?
          </h2>
          <ul className="mt-6 space-y-3">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-700">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rose-500/80"></span>
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-200">
            <CheckCircle2 className="h-4 w-4" /> SOLUTION
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-slate-900">
            Tenang, Semua Bisa Diurus Tim Metasocial
          </h3>
          <ul className="mt-6 grid gap-3">
            {solutions.map((s, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-500" /> {s}
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Metasocial!%20Saya%20ingin%20konsultasi%20gratis."
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white shadow hover:bg-emerald-500"
          >
            📲 Konsultasi Gratis via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default PainSolution;
