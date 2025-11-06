import React from 'react';

function Pill({ color, label }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${color}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      <span>{label}</span>
    </div>
  );
}

export default function GraphExplainers() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Explainable by design</h2>
            <p className="mt-3 text-slate-600">Every edge in the graph carries provenance, so you can trace insights back to source documents and ontology rules.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Pill color="border-sky-200 text-sky-600" label="Lineage" />
              <Pill color="border-indigo-200 text-indigo-600" label="Versioning" />
              <Pill color="border-emerald-200 text-emerald-600" label="Access Control" />
              <Pill color="border-rose-200 text-rose-600" label="Anomaly Flags" />
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <svg className="h-[280px] w-full" viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>

              {/* Document nodes */}
              {[
                { x: 70, y: 60, label: 'PDF' },
                { x: 70, y: 140, label: 'Excel' },
                { x: 70, y: 220, label: 'SQL' },
              ].map((d) => (
                <g key={d.label} transform={`translate(${d.x}, ${d.y})`}>
                  <rect x="-36" y="-20" width="72" height="40" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
                  <text x="0" y="5" textAnchor="middle" fontSize="12" fill="#334155">{d.label}</text>
                </g>
              ))}

              {/* Ontology rule */}
              <g transform="translate(220, 140)">
                <rect x="-60" y="-40" width="120" height="80" rx="12" fill="#ffffff" stroke="#e2e8f0" />
                <rect x="-60" y="-40" width="120" height="80" rx="12" fill="url(#g1)" opacity="0.08" />
                <text x="0" y="-8" textAnchor="middle" fontSize="12" fill="#334155">Ontology Rule</text>
                <text x="0" y="12" textAnchor="middle" fontSize="11" fill="#64748b">Extract: Claimant → Person</text>
                <text x="0" y="28" textAnchor="middle" fontSize="11" fill="#64748b">Relate: Claim → Policy</text>
              </g>

              {/* Arrows */}
              {[
                { x1: 106, y1: 60, x2: 160, y2: 120 },
                { x1: 106, y1: 140, x2: 160, y2: 140 },
                { x1: 106, y1: 220, x2: 160, y2: 160 },
              ].map((a, i) => (
                <path key={i} d={`M ${a.x1} ${a.y1} C 140 ${a.y1}, 150 ${a.y2}, ${a.x2} ${a.y2}`} stroke="#94a3b8" fill="none" strokeWidth="2" />
              ))}

              {/* Graph side */}
              <g transform="translate(380, 140)">
                <circle r="36" fill="#fff" stroke="#e2e8f0" />
                <circle r="36" fill="url(#g1)" opacity="0.06" />
                <text x="0" y="4" textAnchor="middle" fontSize="12" fill="#334155">Claim</text>
              </g>
              <g transform="translate(460, 80)">
                <circle r="24" fill="#fff" stroke="#e2e8f0" />
                <text x="0" y="4" textAnchor="middle" fontSize="11" fill="#334155">Policy</text>
              </g>
              <g transform="translate(460, 200)">
                <circle r="24" fill="#fff" stroke="#e2e8f0" />
                <text x="0" y="4" textAnchor="middle" fontSize="11" fill="#334155">Person</text>
              </g>

              {/* Edges */}
              <path d="M 380 140 Q 420 110 460 80" stroke="#cbd5e1" strokeWidth="2" fill="none" />
              <path d="M 380 140 Q 420 170 460 200" stroke="#cbd5e1" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
