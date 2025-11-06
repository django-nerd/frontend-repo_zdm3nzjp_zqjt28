import React from 'react';

const faqs = [
  {
    q: 'Apakah saya bisa request niche/industri spesifik?',
    a: 'Bisa. Tim kami akan riset market dan tone brand Anda sebelum memulai.'
  },
  {
    q: 'Berapa lama sampai konten pertama tayang?',
    a: 'Biasanya 3-5 hari kerja setelah kick-off dan approval konsep konten.'
  },
  {
    q: 'Bagaimana sistem revisinya?',
    a: 'Termasuk 1-2 kali revisi per konten untuk memastikan hasil sesuai harapan.'
  }
];

const FAQ = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900 md:text-4xl">
          Masih banyak pertanyaan di kepala? Mungkin ini bisa menjawab!
        </h2>
        <div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {faqs.map((f, i) => (
            <details key={i} className="group p-6 open:bg-slate-50">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left text-lg font-semibold text-slate-900">
                <span>{f.q}</span>
                <span className="ml-4 text-slate-400 transition group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-3 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
