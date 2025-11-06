import React from 'react';
import { Workflow, ShieldCheck, Search, Sparkles, ChartBar } from 'lucide-react';

export default function ArchitectureUseCases() {
  return (
    <section className="relative bg-slate-50 py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_rgba(99,102,241,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">From raw data to real-time insight</h2>
            <p className="mt-3 text-slate-600">A streamlined pipeline aligns sources to an ontology and writes a connected knowledge graph for analytics and reasoning.</p>
            <div className="mt-8 grid gap-4">
              <Step label="Data" desc="PDF, Excel, CSV, SQL, APIs" />
              <Step label="Ontology" desc="AI mapping + governance" />
              <Step label="Knowledge Graph" desc="Entities, relations, lineage" />
              <Step label="Insights" desc="Query, rules, ML, dashboards" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">High-impact use cases</h3>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              <UseCase icon={ShieldCheck} title="Fraud detection" desc="Detect suspicious claim networks and behaviors in minutes." />
              <UseCase icon={Sparkles} title="Policy recommendation" desc="Recommend coverages based on entity relationships and history." />
              <UseCase icon={Search} title="Risk analysis" desc="Surface exposures across portfolios with explainable paths." />
              <UseCase icon={ChartBar} title="Regulatory reporting" desc="Prove lineage and consistency with semantic metadata." />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ label, desc }) {
  return (
    <div className="relative flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-4">
      <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-sky-500/20 to-indigo-500/20" />
      <div>
        <div className="text-sm font-semibold text-slate-900">{label}</div>
        <div className="text-sm text-slate-600">{desc}</div>
      </div>
    </div>
  );
}

function UseCase({ icon: Icon, title, desc }) {
  return (
    <li className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="flex items-center gap-2 text-slate-900">
        <Icon className="h-5 w-5 text-sky-600" />
        <span className="font-semibold">{title}</span>
      </div>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
    </li>
  );
}
