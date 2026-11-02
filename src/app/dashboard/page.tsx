'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Award, CheckCircle2, Clock } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#07090e]">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-950 pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Client Delivery Portal</span>
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Active Deliverables & Sprint Roadmap</h1>
            <p className="text-slate-400 text-sm mt-0.5">Review Figma prototypes, staging deployments, and milestone sign-offs.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
              Client: <strong className="text-white">Harsh Shah</strong>
            </span>
          </div>
        </div>

        {/* Milestone Tracker Card */}
        <div className="rounded-2xl bg-[#0c0f17] border border-amber-950/60 p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-2">
            <div>
              <span className="text-[10px] font-semibold text-amber-400 uppercase tracking-wider">Sprint 03 / Production Release</span>
              <h3 className="text-base font-bold text-white mt-0.5">Autonomous Edge Deployment Handover</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold self-start sm:self-auto">
              Ready for Review
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <span className="text-slate-500 block">Deliverable</span>
              <span className="text-slate-200 font-medium">Next.js 15 App Router Edge Build</span>
            </div>
            <div>
              <span className="text-slate-500 block">Milestone Status</span>
              <span className="text-emerald-400 font-bold">100% Verified Live</span>
            </div>
            <div>
              <span className="text-slate-500 block">Hosting Target</span>
              <span className="text-white font-bold">Vercel Global Edge</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
