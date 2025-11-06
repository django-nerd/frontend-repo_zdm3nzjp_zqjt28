import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rina Putri',
    role: 'Owner, LuminaCare',
    quote:
      'Dalam 2 bulan, feed jadi rapi dan engagement naik. Tim responsif dan ide-idenya fresh!',
    rating: 5,
  },
  {
    name: 'Dimas Ardi',
    role: 'CMO, Nexora Tech',
    quote:
      'Konten video mereka bantu kami tingkatkan awareness. Terukur dan tepat sasaran.',
    rating: 5,
  },
  {
    name: 'Sari W.',
    role: 'Founder, Arkana Foods',
    quote:
      'Nggak perlu rekrut tim sendiri lagi. Hemat biaya dan hasilnya memuaskan.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-200">
            <Quote className="h-4 w-4" /> Testimoni Klien
          </div>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Bukti Nyata dari Mereka yang Sudah Percaya
          </h2>
          <p className="mt-2 text-slate-600">Semua ulasan di bawah menggunakan data dummy untuk pratinjau.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Quote className="h-5 w-5" />
                </div>
                <figcaption>
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </figcaption>
              </div>
              <p className="mt-4 text-slate-700">{t.quote}</p>
              <div className="mt-4 flex items-center gap-1 text-amber-500">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
