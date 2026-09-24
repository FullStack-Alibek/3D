import React, { useState, useRef, useCallback } from 'react';
import { MoveHorizontal, Eye, Ruler, Box } from 'lucide-react';

interface BeforeAfterProps {
  beforeImage?: string; // AutoCAD 2D blueprint image
  afterImage?: string;  // 3D Render
  title?: string;
  subtitle?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterProps> = ({
  beforeImage = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
  afterImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  title = "AutoCAD 2D Chizma vs 3D Fotorealistik Render",
  subtitle = "Sichqonchani surish orqali 2D reja va 3D natijani solishtiring"
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="cad-vs-3d" className="py-20 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Ruler className="w-3.5 h-3.5" />
            <span>Interactive Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {subtitle}
          </p>
        </div>

        {/* Comparison Container */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full h-[380px] sm:h-[500px] lg:h-[580px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 select-none cursor-ew-resize group"
        >
          {/* AFTER Image (3D Render) - Full Width Background */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={afterImage}
              alt="3D Photorealistic Render"
              className="w-full h-full object-cover object-center"
            />
            {/* Label Badge */}
            <div className="absolute top-6 right-6 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-xl border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <Box className="w-4 h-4 text-amber-400" />
              <span>3D Render (Corona / V-Ray)</span>
            </div>
          </div>

          {/* BEFORE Image (AutoCAD 2D) - Clipped Overlay */}
          <div
            className="absolute inset-0 h-full overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src={beforeImage}
              alt="2D AutoCAD Blueprint"
              className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
              style={{ width: containerRef.current?.clientWidth || '100%' }}
            />
            {/* Blueprint Overlay Tint effect */}
            <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply" />

            {/* Label Badge */}
            <div className="absolute top-6 left-6 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-xl border border-blue-500/40 text-blue-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <Ruler className="w-4 h-4 text-blue-400" />
              <span>AutoCAD 2D Blueprint</span>
            </div>
          </div>

          {/* Slider Dividing Bar */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.8)] z-20 pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            {/* Handle Button */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shadow-2xl border-2 border-white transform group-hover:scale-110 transition-transform">
              <MoveHorizontal className="w-6 h-6" />
            </div>
          </div>

        </div>

        {/* Feature Highlights beneath */}
        <div className="grid sm:grid-cols-3 gap-6 mt-8 text-center sm:text-left">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <span className="text-amber-400 font-mono text-xs block mb-1">01. Precision</span>
            <h3 className="text-white font-bold text-sm">100% Aniq O'lchamlarga Asoslangan</h3>
            <p className="text-slate-400 text-xs mt-1">Barcha 3D modellar AutoCAD chizmalaridagi aniq razmerlar bo'yicha quriladi.</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <span className="text-amber-400 font-mono text-xs block mb-1">02. Realism</span>
            <h3 className="text-white font-bold text-sm">Haqiqiy Fasad & Mebel Teksturalari</h3>
            <p className="text-slate-400 text-xs mt-1">Haqiqiy bozorda sotiladigan materiallar (marmar, yog'och, mato) ishlatiladi.</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <span className="text-amber-400 font-mono text-xs block mb-1">03. Ready for Build</span>
            <h3 className="text-white font-bold text-sm">Ustalarga Tayyor Chizmalar</h3>
            <p className="text-slate-400 text-xs mt-1">Qurilish ustalariga tushunarli bo'lgan barcha elektr va santexnika planlari.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
