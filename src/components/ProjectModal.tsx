import React, { useState } from 'react';
import { X, Calendar, MapPin, Maximize2, CheckCircle, ExternalLink, Layers, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeImage, setActiveImage] = useState(project.mainImage);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200">

      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10">

        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/50">
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">
              {project.category} • {project.year}
            </span>
            <h3 className="text-xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-8">

          {/* Main Selected Image Showcase */}
          <div className="relative w-full h-[320px] sm:h-[450px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 group">
            <img
              src={activeImage}
              alt={project.title}
              className="w-full h-full object-cover object-center transition-all duration-300"
            />
            <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 text-xs font-mono text-slate-300 flex items-center gap-2">
              <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
              <span>4K High Resolution</span>
            </div>
          </div>

          {/* Thumbnails row */}
          {project.gallery && project.gallery.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative flex-shrink-0 w-24 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImage === img
                      ? 'border-amber-400 shadow-md shadow-amber-500/20 scale-105'
                      : 'border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
            <div>
              <span className="text-xs text-slate-400 block font-medium">Mijoz / Client</span>
              <span className="text-sm font-bold text-white mt-0.5 block">{project.client}</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-medium">Joylashuv / Location</span>
              <span className="text-sm font-bold text-white mt-0.5 block">{project.location}</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-medium">Maydon / Area</span>
              <span className="text-sm font-bold text-amber-400 mt-0.5 block">{project.area}</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-medium">Ishlatilgan Dasturlar</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.software.map((sw) => (
                  <span key={sw} className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-800 text-slate-300">
                    {sw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Description & Key Features */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Loyiha Haqida</span>
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Asosiy Xususiyatlari</span>
              </h4>
              <ul className="space-y-2">
                {project.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <span className="text-xs text-slate-400 hidden sm:inline">
            Shunday loyiha buyurtma qilmoqchimisiz?
          </span>
          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors"
          >
            <span>Shu Loyihadan Buyurtma Berish</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
