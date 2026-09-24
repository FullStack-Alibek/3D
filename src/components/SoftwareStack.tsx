import React from 'react';
import { SOFTWARE_STACK } from '../data/portfolioData';
import { Box, Sun, Camera, Ruler, Layers, Image, Sparkles } from 'lucide-react';

export const SoftwareStack: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Box': return <Box className="w-5 h-5 text-amber-400" />;
      case 'Sun': return <Sun className="w-5 h-5 text-amber-400" />;
      case 'Camera': return <Camera className="w-5 h-5 text-amber-400" />;
      case 'Ruler': return <Ruler className="w-5 h-5 text-amber-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-amber-400" />;
      case 'Image': return <Image className="w-5 h-5 text-amber-400" />;
      default: return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section className="py-20 bg-slate-900/40 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">
            Tools & Technology Stack
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Ishlatiladigan Professional Dasturlar
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Har bir dastur bo'yicha ko'p yillik amaliy tajriba va chuqur bilim.
          </p>
        </div>

        {/* Software Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SOFTWARE_STACK.map((item) => (
            <div
              key={item.name}
              className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-amber-500/30 transition-all duration-300 space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:bg-amber-400/10 transition-colors">
                    {getIcon(item.icon)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {item.category}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                  {item.experienceYears}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1 pt-1">
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>Proficiency</span>
                  <span>{item.level}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
