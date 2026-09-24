import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Box, Award, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Interactive3DViewer } from './Interactive3DViewer';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-blueprint">
      {/* Glow Orbs background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Available for New Projects</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Arxitektura va <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                3D Vizualizatsiya
              </span> San'ati
            </h1>

            {/* Subtitle Bio */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {PERSONAL_INFO.bio}
            </p>

            {/* Feature Checkmarks */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm font-medium text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>4K Fotorealistik Renderlar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>AutoCAD Ishchi Chizmalar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>TekshirilganTZ & Muddat</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-slate-950 font-bold bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-1"
              >
                <span>Loyihalarni Ko'rish</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-slate-200 font-semibold bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-white transition-all"
              >
                <Layers className="w-5 h-5 text-amber-400" />
                <span>Hisoblash (Kalkulyator)</span>
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80">
              <div className="text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl font-extrabold text-white">
                  {PERSONAL_INFO.projectsCompleted}
                </span>
                <span className="text-xs text-slate-400 font-medium">Muvaffaqiyatli Loyiha</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl font-extrabold text-amber-400">
                  {PERSONAL_INFO.experience}
                </span>
                <span className="text-xs text-slate-400 font-medium">Ish Tajribasi</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl font-extrabold text-white">
                  {PERSONAL_INFO.clientsSatisfied}
                </span>
                <span className="text-xs text-slate-400 font-medium">Mijozlar Mamnunligi</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Model Studio */}
          <div id="3d-studio" className="lg:col-span-6 space-y-4">
            <Interactive3DViewer />
          </div>

        </div>
      </div>
    </section>
  );
};
