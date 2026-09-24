import React from 'react';
import { Box, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
              <Box className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold text-white">
              {PERSONAL_INFO.name} <span className="text-amber-400">3D</span>
            </span>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400">
            <a href="#projects" className="hover:text-amber-400 transition-colors">Projects</a>
            <a href="#3d-studio" className="hover:text-amber-400 transition-colors">3D Studio</a>
            <a href="#cad-vs-3d" className="hover:text-amber-400 transition-colors">2D vs 3D</a>
            <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-slate-500 font-mono text-center md:text-right">
            © {new Date().getFullYear()} All Rights Reserved. Built with React & Three.js.
          </div>

        </div>
      </div>
    </footer>
  );
};
