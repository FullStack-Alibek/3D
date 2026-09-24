import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Interyer 3D Vizualizatsiya',
    budget: '$500 - $1,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/80 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Start a Project</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                G'oyangizni Muhokama Qilamiz
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Loyiha qoralamasi, AutoCAD chizmasi yoki shunchaki g'oyangiz bo'lsa, xabar qoldiring. 30 daqiqa ichida siz bilan bog'lanaman.
              </p>
            </div>

            {/* Direct Contact Badges */}
            <div className="space-y-4">

              <a
                href={`https://t.me/${PERSONAL_INFO.telegram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-400/50 flex items-center gap-4 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono block">Telegram Orqali Aloqa</span>
                  <span className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {PERSONAL_INFO.telegram}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-400/50 flex items-center gap-4 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono block">Telefon Raqam</span>
                  <span className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
              </a>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono block">Lokatsiya</span>
                  <span className="text-sm font-bold text-white">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-slate-950 p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
                <h3 className="text-2xl font-bold text-white">Xabaringiz Qabul Qilindi!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Tashakkur! Tez orada ko'rsatilgan raqam orqali bog'lanaman. Telegram orqali ham darhol yozishingiz mumkin: <span className="text-amber-400 font-bold">{PERSONAL_INFO.telegram}</span>
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold bg-slate-900 text-slate-300 border border-slate-800 hover:text-white"
                >
                  Yangi Xabar Yuborish
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-white">Loyiha So'rovi Qoldirish</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Ismingiz / Kompaniya
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Masalan: Sardor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Telefon / Telegram Raqamingiz
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="+998 90 123 45 67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Xizmat Turi
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option>Interyer 3D Vizualizatsiya</option>
                      <option>Eksterer & Fasad Dizayni</option>
                      <option>AutoCAD 2D Ishchi Chizmalar</option>
                      <option>Full Package (Chizma + 3D)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Mo'ljallangan Budjet
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option>$300 - $500</option>
                      <option>$500 - $1,000</option>
                      <option>$1,000 - $3,000</option>
                      <option>$3,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Loyiha Haqida Qisqacha (Maydoni, muddati va hokazo)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Masalan: 120 m² xonadon interyeri va AutoCAD chizmalari kerak..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>So'rovni Yuborish</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
