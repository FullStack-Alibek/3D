import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project, Category } from '../types';
import { ProjectModal } from './ProjectModal';
import { Box, Eye, Layers, Search, Filter, Sparkles } from 'lucide-react';

export const ProjectsGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: 'Barcha Loyihalar' },
    { key: 'exterior', label: 'Eksterer (Tashqi Fasad)' },
    { key: 'interior', label: 'Interyer Dizayn' },
    { key: 'autocad', label: 'AutoCAD Chizmalar' },
    { key: '3d-product', label: '3D Modellar' },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.software.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Box className="w-3.5 h-3.5" />
              <span>Selected Portfolio Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ajoyib Architecture & 3D Renderlar
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              Har bir loyiha aniq chizmalar, fotorealistik tekstura va zamonaviy yoritish texnikasi bilan yaratilgan.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Qidiruv (3ds Max, Villa, ...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.key
                  ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group relative bg-slate-900/60 rounded-3xl overflow-hidden border border-slate-800/80 hover:border-amber-500/50 transition-all duration-300 cursor-pointer flex flex-col hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-slate-950">
                <img
                  src={project.mainImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Category & Featured Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-1 rounded-lg bg-amber-400 text-slate-950 text-[10px] font-bold flex items-center gap-1 shadow-md">
                      <Sparkles className="w-3 h-3" />
                      <span>TOP</span>
                    </span>
                  )}
                </div>

                {/* View Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-3 rounded-2xl bg-amber-400 text-slate-950 shadow-xl flex items-center gap-2 text-xs font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-4 h-4" />
                    <span>Loyiha Tafsilotlari</span>
                  </div>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Software tags & Area */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.software.slice(0, 3).map((sw) => (
                      <span key={sw} className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-800 text-slate-300">
                        {sw}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-mono font-semibold text-amber-400">
                    {project.area}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800">
            <Search className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">Hech qanday loyiha topilmadi</h3>
            <p className="text-slate-400 text-xs mt-1">
              Iltimos, boshqa kalit so'z yoki kategoriya tanlang.
            </p>
          </div>
        )}

      </div>

      {/* Project Modal Detail */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
