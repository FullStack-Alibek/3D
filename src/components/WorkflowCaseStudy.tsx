import React from 'react';
import { Ruler, Box, Sun, Sparkles, ArrowRight } from 'lucide-react';

export const WorkflowCaseStudy: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Texnik Topshiriq & AutoCAD (2D)",
      icon: Ruler,
      description: "Mijozdan xona razmerlari, plan va namunalar (TZ) olinadi. AutoCAD'da 100% aniq o'lchamli 2D plan tayyorlanadi.",
      tools: ["AutoCAD", "Revit", "PDF"]
    },
    {
      number: "02",
      title: "3D Geometriya & Modellashtirish",
      icon: Box,
      description: "3ds Max yoki Blender'da xona devorlari, shift, mebel va dekorativ obyektlarning 3D modeli quriladi.",
      tools: ["3ds Max", "Blender", "Marvelous"]
    },
    {
      number: "03",
      title: "Materiallar & Yoritish (Lighting)",
      icon: Sun,
      description: "Marmar, yog'och va mato teksturalari berilib, kunduzgi (HDRI) hamda tungi artificial yoritish sozlanadi.",
      tools: ["Corona Render", "V-Ray", "PBR Materials"]
    },
    {
      number: "04",
      title: "4K Render & Post-Processing",
      icon: Sparkles,
      description: "4K/8K o'lchamda render olinadi va Photoshop'da ranglar boyitilib, mijozga yakuniy tasdiqlash uchun topshiriladi.",
      tools: ["Photoshop", "Lightroom", "Camera Raw"]
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-slate-900/60 border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <span>Seamless Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ish Bajarish Bosqichlari (Workflow)
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            G'oyadan to tayyor 4K render va qurilish chizmalarigacha bo'lgan tizimli ketma-ketlik.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-slate-950 p-6 rounded-3xl border border-slate-800/80 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-slate-800 group-hover:text-amber-500/30 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 text-amber-400 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-slate-950 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Software Badges */}
                <div className="pt-4 border-t border-slate-900 flex flex-wrap gap-1.5">
                  {step.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
