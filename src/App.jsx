import React from 'react';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import ArchitectureUseCases from './components/ArchitectureUseCases';
import HowItWorksSVG from './components/HowItWorksSVG';
import GraphExplainers from './components/GraphExplainers';
import FooterCTA from './components/FooterCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <HowItWorksSVG />
      <GraphExplainers />
      <Features />
      <ArchitectureUseCases />
      <AboutVision />
      <FooterCTA />
    </div>
  );
}

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500" />
          <span className="text-sm font-semibold tracking-wide text-white">InsuraGraph</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          <a href="#" className="hover:text-white">Product</a>
          <a href="#" className="hover:text-white">Use Cases</a>
          <a href="#demo" className="hover:text-white">Demo</a>
          <a href="#waitlist" className="rounded-md bg-white/10 px-4 py-2 font-medium text-white hover:bg-white/20">Join waitlist</a>
        </nav>
      </div>
    </header>
  );
}

function AboutVision() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Our vision</h2>
            <p className="mt-4 text-slate-600">We believe insurers deserve data that explains itself. InsuraGraph unifies the language of insurance—entities, policies, coverages, claims—into an ontology that your teams can trust. The result is a knowledge graph that connects everything, enabling faster underwriting, cleaner operations, and verifiable compliance.</p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-700">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-500" /> Built for enterprise scale and security</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-500" /> Explainable reasoning with full lineage</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-500" /> Open APIs and ecosystem integrations</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-0 rounded-2xl bg-gradient-to-br from-sky-100 to-indigo-100 blur-2xl" />
            <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-4 gap-4 text-center">
                <Metric label="Sources" value="50+" />
                <Metric label="Entities" value="200k+" />
                <Metric label="Latency" value="<100ms" />
                <Metric label="Uptime" value="99.9%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-lg bg-slate-50 p-4">
      <div className="text-2xl font-semibold text-slate-900">{value}</div>
      <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
    </div>
  );
}
