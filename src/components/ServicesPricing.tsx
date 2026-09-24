import React, { useState } from 'react';
import { SERVICES } from '../data/portfolioData';
import { Home, Building2, FileSpreadsheet, Sparkles, Check, Calculator, ArrowRight } from 'lucide-react';

export const ServicesPricing: React.FC = () => {
  // Calculator state
  const [serviceType, setServiceType] = useState<'interior' | 'exterior' | 'autocad' | 'full'>('interior');
  const [areaSqM, setAreaSqM] = useState<number>(80);
  const [isExpress, setIsExpress] = useState<boolean>(false);
  const [include3DPanoramas, setInclude3DPanoramas] = useState<boolean>(false);

  // Calculate estimated price based on service type
  const calculatePrice = () => {
    let baseRatePerSqM = 0;
    if (serviceType === 'interior') baseRatePerSqM = 7;
    else if (serviceType === 'exterior') baseRatePerSqM = 12;
    else if (serviceType === 'autocad') baseRatePerSqM = 4;
    else if (serviceType === 'full') baseRatePerSqM = 15;

    let total = baseRatePerSqM * areaSqM;

    if (include3DPanoramas) total += 80;
    if (isExpress) total *= 1.3; // 30% express surcharge

    return Math.round(total);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home className="w-6 h-6" />;
      case 'Building2': return <Building2 className="w-6 h-6" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Services & Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Xizmatlar va Shaffof Tariflar
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Hech qanday yashirin to'lovlarsiz shaffof va o'z vaqtida bajariladigan sifatli xizmat.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`relative bg-slate-900/70 p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                service.popular
                  ? 'border-amber-400 shadow-xl shadow-amber-500/10 scale-102 bg-slate-900'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {service.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                  Ko'p Tanlanadi
                </span>
              )}

              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-6">
                  {getIcon(service.iconName)}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>
                <span className="text-xl font-extrabold text-amber-400 block mb-4">
                  {service.pricePerUnit}
                </span>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables checklist */}
                <div className="space-y-2 border-t border-slate-800 pt-4">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="mt-8 w-full py-3 rounded-xl text-xs font-bold text-center transition-all bg-slate-800 hover:bg-amber-400 hover:text-slate-950 text-white"
              >
                Tanlash & Buyurtma
              </a>
            </div>
          ))}
        </div>

        {/* Interactive Cost Estimator Calculator */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">

            {/* Left Column: Calculator Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-amber-400" />
                <h3 className="text-xl font-bold text-white">
                  Onlayn Narx Kalkulyatori
                </h3>
              </div>

              {/* Service Type Selector */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 block">
                  Xizmat Turini Tanlang:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'interior', label: 'Interyer 3D' },
                    { id: 'exterior', label: 'Eksterer (Fasad)' },
                    { id: 'autocad', label: 'AutoCAD 2D' },
                    { id: 'full', label: 'Full Package' },
                  ].map((st) => (
                    <button
                      key={st.id}
                      onClick={() => setServiceType(st.id as any)}
                      className={`p-2.5 rounded-xl text-xs font-semibold transition-all ${
                        serviceType === st.id
                          ? 'bg-amber-400 text-slate-950 font-bold shadow'
                          : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      {st.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Square Meters Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-300">Loyiha Maydoni:</span>
                  <span className="text-amber-400 font-mono font-bold text-sm">{areaSqM} m²</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="5"
                  value={areaSqM}
                  onChange={(e) => setAreaSqM(Number(e.target.value))}
                  className="w-full accent-amber-400 bg-slate-950 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>20 m²</span>
                  <span>250 m²</span>
                  <span>500 m²</span>
                </div>
              </div>

              {/* Additional Options */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold text-slate-300 block">Qo'shimcha Imkoniyatlar:</span>
                <div className="flex flex-col sm:flex-row gap-4">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300">
                    <input
                      type="checkbox"
                      checked={include3DPanoramas}
                      onChange={(e) => setInclude3DPanoramas(e.target.checked)}
                      className="accent-amber-400 w-4 h-4 rounded"
                    />
                    <span>360° VR Interaktiv Panorama (+$80)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300">
                    <input
                      type="checkbox"
                      checked={isExpress}
                      onChange={(e) => setIsExpress(e.target.checked)}
                      className="accent-amber-400 w-4 h-4 rounded"
                    />
                    <span>Shoshilinch (Express 48-Soat) (+30%)</span>
                  </label>
                </div>
              </div>

            </div>

            {/* Right Column: Estimated Result Box */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
                Taxminiy Loyiha Qiymati
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-amber-400 tracking-tight">
                ${calculatePrice()}
              </div>
              <p className="text-xs text-slate-400">
                Taxminiy tayyor bo'lish muddati: <span className="text-white font-bold">{Math.max(3, Math.ceil(areaSqM / 25))} ish kuni</span>
              </p>

              <a
                href={`#contact`}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/20"
              >
                <span>Ushbu Hisob Bilan Buyurtma Berish</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
