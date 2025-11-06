import React from 'react';
import { AlertTriangle, Layers, Link2 } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section className="relative bg-slate-50 py-20 text-slate-800">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(14,165,233,0.10),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800">
              <AlertTriangle className="h-4 w-4" /> Problem
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Siloed data blocks insight—and compliance</h2>
            <p className="mt-4 text-slate-600">
              Claims, policies, and customer data live in PDFs, spreadsheets, and legacy systems. Without a shared meaning, every integration is a custom project. Analysts waste hours reconciling data while risk and compliance teams struggle to prove lineage and consistency.
            </p>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800">
              <Layers className="h-4 w-4" /> Solution
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">A unified semantic layer for insurance</h2>
            <p className="mt-4 text-slate-600">
              InsuraGraph applies an AI-driven ontology to map your sources into a connected knowledge graph. Data gains shared definitions, relationships, and provenance—unlocking real-time reasoning, analytics, and clean integrations across the organization.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-500" /> PDF, Excel, SQL ingestion</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-500" /> Ontology alignment with AI</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-500" /> Real-time reasoning + analytics</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-500" /> API-first integration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
