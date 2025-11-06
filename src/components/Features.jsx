import React from 'react';
import { Database, FileText, Network, Brain, Gauge, PlugZap } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Smart data ingestion',
    desc: 'Ingest PDFs, Excel, CSV, and SQL sources with automated parsing and quality checks.'
  },
  {
    icon: Brain,
    title: 'AI-driven ontology mapping',
    desc: 'Map entities and relationships to a shared insurance ontology using AI-assisted matching.'
  },
  {
    icon: Gauge,
    title: 'Real-time reasoning & analytics',
    desc: 'Query the graph for fraud patterns, exposures, and coverage gaps with millisecond latency.'
  },
  {
    icon: PlugZap,
    title: 'API-first integration',
    desc: 'Use simple APIs and webhooks to connect internal systems and keep data in sync.'
  }
];

export default function Features() {
  return (
    <section className="relative bg-white py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Key capabilities</h2>
          <p className="mt-3 text-slate-600">Structured, AI-driven data intelligence—built for insurers.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500/20 to-indigo-500/20 text-sky-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
