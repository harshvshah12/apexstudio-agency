'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  Award,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Layers,
  Zap,
  Globe,
  SlidersHorizontal,
  X
} from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  impact: string;
  image: string;
  description: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'Chronos Spatial Brand & Intelligence',
    client: 'Chronos Labs',
    category: 'AI Systems',
    year: '2026',
    impact: '+340% Conversions',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    description: 'Autonomous spatial computing interface and comprehensive design token architecture.'
  },
  {
    id: '2',
    title: 'Vanguard Global Fintech Platform',
    client: 'Vanguard Capital',
    category: 'Digital Products',
    year: '2026',
    impact: '$18M Series A Secured',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    description: 'Sub-millisecond institutional trading dashboard with dark obsidian Swiss typography.'
  },
  {
    id: '3',
    title: 'Komorebi Architectural Brand & 3D WebGL',
    client: 'Komorebi Studio',
    category: '3D & WebGL',
    year: '2025',
    impact: 'Awwwards Site of the Year',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Interactive canvas ray-marching experience presenting ultra-luxury contemporary residences.'
  },
  {
    id: '4',
    title: 'Helios Autonomous Robotics System',
    client: 'Helios Dynamics',
    category: 'Design Engineering',
    year: '2025',
    impact: '100k+ Pre-orders',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    description: 'Hardware companion mobile application and gesture-controlled spatial control cockpit.'
  }
];

export default function HomePage() {
  const [category, setCategory] = useState('All');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const categories = ['All', 'Digital Products', 'AI Systems', '3D & WebGL', 'Design Engineering'];

  const filtered = CASE_STUDIES.filter((c) => category === 'All' || c.category === category);

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setInquiryModalOpen(false);
    }, 2200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#07090e]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-amber-950/40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-600/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[250px] bg-orange-500/10 blur-[110px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-amber-800/40 text-xs font-semibold text-amber-300 mb-6 shadow-sm">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Award-winning Swiss editorial digital design & AI engineering</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.08]">
            Crafting Unforgettable Digital Artifacts with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-rose-400">
              ApexStudio Digital Agency
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Strategic brand design and software engineering studio crafting venture-backed digital artifacts, WebGL experiences, and spatial interfaces.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setInquiryModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold text-sm shadow-lg shadow-orange-600/30 active:scale-95 transition-all"
            >
              <span>Initiate Project Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-amber-950 text-slate-200 hover:text-white font-semibold text-sm transition-all"
            >
              <span>Explore All Case Studies</span>
            </Link>
          </div>

          {/* Honors Grid */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
              <div className="text-2xl font-bold text-white">12x</div>
              <div className="text-xs text-slate-400 mt-0.5">Awwwards SOTD</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
              <div className="text-2xl font-bold text-amber-400">$84M+</div>
              <div className="text-xs text-slate-400 mt-0.5">Client Venture Capital Raised</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
              <div className="text-2xl font-bold text-orange-400">&lt; 14 Days</div>
              <div className="text-xs text-slate-400 mt-0.5">Rapid MVP Delivery Cycle</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-xs text-slate-400 mt-0.5">Production Code Handover</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Bento Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Selected Works & Case Studies
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              A curated selection of venture-backed software and transformative brands.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  category === c
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-[#0c0f17] border border-amber-950/50 overflow-hidden hover:border-amber-500/40 transition-all flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30">
                  {item.category}
                </span>
                <span className="absolute bottom-4 right-4 text-xs font-bold px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-emerald-300">
                  {item.impact}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Client: {item.client}</span>
                    <span>Year: {item.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-amber-400 font-semibold">View Case Study</span>
                  <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:bg-amber-600 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Modal */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0b0e16] border border-amber-950 rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setInquiryModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {inquirySubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 bg-amber-500/10 text-amber-400 rounded-full flex items-center justify-center mx-auto border border-amber-500/30">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Proposal Request Received</h3>
                <p className="text-xs text-slate-400">
                  Our principal partner will review your requirements and respond within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquiry} className="space-y-4">
                <div>
                  <span className="text-[10px] font-semibold text-amber-400 uppercase tracking-wider">Partnership</span>
                  <h3 className="text-lg font-bold text-white mt-1">Request Studio Proposal</h3>
                  <p className="text-xs text-slate-400">Tell us about your venture and timeline goals.</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-xs text-slate-300 font-medium block mb-1">Company / Project Name</label>
                    <input
                      required
                      type="text"
                      defaultValue="Aura Labs"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-300 font-medium block mb-1">Contact Email</label>
                    <input
                      required
                      type="email"
                      defaultValue="harsh@example.com"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-300 font-medium block mb-1">Estimated Budget Bracket</label>
                    <select className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500">
                      <option>₹10,00,000 – ₹25,00,000 (Venture MVP)</option>
                      <option>₹25,00,000 – ₹50,00,000 (Full Brand & Product)</option>
                      <option>₹50,00,000+ (Enterprise Scale)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setInquiryModalOpen(false)}
                    className="px-3 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold shadow-md shadow-amber-600/30"
                  >
                    Submit Proposal
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
