import React from 'react';
import Link from 'next/link';
import { Award, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-amber-950/60 bg-[#05070d] text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="font-bold text-white text-base">ApexStudio Digital Agency</span>
          </div>
          <p className="text-slate-400 max-w-sm text-xs leading-relaxed">
            Strategic brand design and software engineering studio crafting venture-backed digital artifacts, WebGL experiences, and spatial interfaces.
          </p>
          <div className="text-xs text-slate-500 pt-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Honored with 12x Awwwards SOTD & Red Dot Design Awards</span>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">Studio</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/" className="hover:text-white transition-colors">Featured Works</Link></li>
            <li><Link href="/explore" className="hover:text-white transition-colors">Case Studies</Link></li>
            <li><Link href="/dashboard" className="hover:text-white transition-colors">Client Portal</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">Discipline</h4>
          <ul className="space-y-2 text-xs text-slate-500">
            <li>Design Engineering & Spatial UI</li>
            <li>WebGL 3D & Micro-Interactions</li>
            <li>Autonomous AI Web Architecture</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-amber-950/50 max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
        <p>© {new Date().getFullYear()} ApexStudio Digital Agency. Swiss Editorial Digital Studio.</p>
        <p className="flex items-center gap-1">
          Crafted with <Heart className="w-3.5 h-3.5 text-amber-400 inline fill-amber-400" /> by VoxBuild AI
        </p>
      </div>
    </footer>
  );
}
