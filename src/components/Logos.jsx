import React from 'react';
import { ShieldCheck } from 'lucide-react';

const clients = [
  { name: 'Nexora Tech' },
  { name: 'Arkana Foods' },
  { name: 'Velora Studio' },
  { name: 'BluePeak' },
  { name: 'LuminaCare' },
  { name: 'Orbit Logistics' },
];

const Logos = () => {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-medium tracking-wide text-slate-500">
          Dipercaya oleh berbagai brand dan UMKM
        </p>
        <div className="mt-6 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-6">
          {clients.map((c) => (
            <div
              key={c.name}
              className="flex h-16 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-slate-600"
            >
              <ShieldCheck className="mr-2 h-4 w-4 text-emerald-600" />
              <span className="text-sm font-semibold">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
