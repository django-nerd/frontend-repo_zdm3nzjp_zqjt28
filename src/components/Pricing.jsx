import React from 'react';
import { BadgeCheck } from 'lucide-react';

const tiers = [
  {
    name: 'Promo 1',
    price: '1.500.000',
    status: 'Sold Out',
    highlight: false,
    disabled: true,
  },
  {
    name: 'Promo 2',
    price: '2.350.000',
    status: 'Order Now',
    highlight: true,
    disabled: false,
  },
  {
    name: 'Promo 3',
    price: '3.500.000',
    status: 'Upcoming',
    highlight: false,
    disabled: true,
  },
];

const includes = [
  'Konten siap diposting secara konsisten',
  'Project Manager, Social Media Officer, Graphic Designer, Video Editor',
];

const Pricing = () => {
  const waLink = 'https://wa.me/6281234567890?text=Halo%20Metasocial!%20Saya%20ingin%20order%20Promo%202.';

  return (
    <section className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900 md:text-4xl">
          Paket Harga Social Management
        </h2>
        <p className="mt-3 text-center text-slate-600">
          Pilih paket yang sesuai kebutuhan—promo terbatas!
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border p-6 shadow-sm ${
                t.highlight
                  ? 'border-emerald-500 bg-emerald-50'
                  : 'border-slate-200 bg-white'
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 right-6 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                  Best Value
                </div>
              )}
              <div className="text-sm font-medium text-slate-500">{t.name}</div>
              <div className="mt-2 text-4xl font-bold text-slate-900">Rp {t.price}</div>
              <div className="mt-1 text-sm text-slate-500">{t.status}</div>

              <ul className="mt-6 space-y-3">
                {includes.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700">
                    <BadgeCheck className="mt-0.5 h-5 w-5 text-emerald-600" /> {i}
                  </li>
                ))}
              </ul>

              <a
                href={t.disabled ? '#' : waLink}
                onClick={(e) => t.disabled && e.preventDefault()}
                target={t.disabled ? undefined : '_blank'}
                rel={t.disabled ? undefined : 'noreferrer'}
                className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold shadow transition ${
                  t.disabled
                    ? 'cursor-not-allowed bg-slate-200 text-slate-500'
                    : 'bg-emerald-600 text-white hover:bg-emerald-500'
                }`}
              >
                {t.disabled ? 'Not Available' : 'Jangan Tunda Lagi! Chat Kami' }
              </a>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-slate-900 px-6 py-10 text-center text-white">
          <h3 className="text-2xl font-bold">
            Saatnya Punya Team Social Media yang bisa diandalkan untuk handle konten sosmed mu!
          </h3>
          <p className="mt-2 text-slate-300">
            Jangan biarkan kompetitor mendahuluimu. Tampil lebih profesional dengan tim yang tepat—efisien, hemat waktu, dan biaya.
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Metasocial!%20Saya%20ingin%20Free%20Konsultasi%2030%20menit%20via%20Zoom."
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
          >
            🚀 Dapatkan Free Konsultasi Strategi Konten (30 menit)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
