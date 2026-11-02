'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Award, Compass } from 'lucide-react';

export default function ExplorePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#07090e]">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
        <div className="border-b border-amber-950 pb-6 mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">Case Studies & Teardowns</h1>
          <p className="text-slate-400 text-sm mt-1">
            Deep dive into technical architectures, design tokens, and business growth metrics.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0c0f17] border border-amber-950/60 text-center py-16 space-y-3">
          <Award className="w-10 h-10 text-amber-400 mx-auto" />
          <h3 className="text-lg font-bold text-white">Full Archive Available</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Explore 14 award-winning digital projects delivered with Next.js 15, WebGL, and autonomous engineering.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
