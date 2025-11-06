import React from 'react';
import { Sparkles, Image as ImageIcon, Video, MessageCircle, Hash, Calendar, BarChart3 } from 'lucide-react';

const features = [
  { icon: Sparkles, title: 'Ide Konten', desc: 'Relate dengan target market Anda' },
  { icon: ImageIcon, title: 'Desain Visual', desc: 'Selaras dengan brand identity' },
  { icon: Video, title: 'Editing Video', desc: 'Sesuai style kekinian' },
  { icon: MessageCircle, title: 'Caption', desc: 'Engaging & mendorong interaksi' },
  { icon: Hash, title: 'Hashtag', desc: 'Riset hashtag yang tepat' },
  { icon: Calendar, title: 'Kalender Konten', desc: 'Posting terjadwal & konsisten' },
  { icon: BarChart3, title: 'Laporan Bulanan', desc: 'Analisis performa konten' },
];

const Benefits = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900 md:text-4xl">
          Apa yang Akan Anda Dapatkan?
        </h2>
        <p className="mt-3 text-center text-slate-600">
          Paket lengkap untuk kelola sosial media bisnis Anda dengan tim profesional.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="mt-3 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
