import React from 'react';

export default function HowItWorksSVG() {
  return (
    <section className="relative bg-slate-50 py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(14,165,233,0.10),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">How InsuraGraph works</h2>
          <p className="mt-3 text-slate-600">A visual walkthrough from raw documents to a connected knowledge graph and real-time insights.</p>
        </div>

        {/* Pipeline SVG */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">Ingestion → Ontology → Graph → Insights</h3>
          <div className="mt-4 w-full overflow-x-auto">
            <svg className="mx-auto h-[220px] w-[900px] max-w-none" viewBox="0 0 900 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad-blue" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
                <marker id="arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
                </marker>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Step boxes */}
              {[
                { x: 40, label: 'Ingestion', desc: 'PDF / Excel / CSV / SQL / APIs' },
                { x: 280, label: 'Ontology', desc: 'AI mapping + governance' },
                { x: 520, label: 'Knowledge Graph', desc: 'Entities, relations, lineage' },
                { x: 760, label: 'Insights', desc: 'Queries, rules, dashboards' },
              ].map((s, i) => (
                <g key={s.label} transform={`translate(${s.x}, 60)`}>
                  <rect rx="14" ry="14" width="180" height="100" fill="white" stroke="#e2e8f0" />
                  <rect rx="14" ry="14" width="180" height="100" fill="url(#grad-blue)" opacity="0.08" />
                  <text x="90" y="36" textAnchor="middle" fontSize="14" fontWeight="600" fill="#0f172a">{s.label}</text>
                  <text x="90" y="60" textAnchor="middle" fontSize="12" fill="#475569">{s.desc}</text>
                </g>
              ))}

              {/* Arrows */}
              {[
                { x1: 220, x2: 280 },
                { x1: 460, x2: 520 },
                { x1: 700, x2: 760 },
              ].map((a, i) => (
                <line key={i} x1={a.x1} y1={110} x2={a.x2} y2={110} stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
              ))}

              {/* Animated flow underline */}
              <path d="M60 170 C 240 150, 420 190, 600 170 S 840 160, 860 170" stroke="url(#grad-blue)" strokeWidth="4" fill="none" filter="url(#glow)">
                <animate attributeName="stroke-dasharray" from="0,500" to="30,500" dur="1.5s" repeatCount="indefinite" />
                <animate attributeName="stroke-dashoffset" from="0" to="-60" dur="1.5s" repeatCount="indefinite" />
              </path>
            </svg>
          </div>
        </div>

        {/* Knowledge graph SVG */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">Connected knowledge graph</h3>
          <div className="mt-4 w-full overflow-x-auto">
            <svg className="mx-auto h-[280px] w-[900px] max-w-none" viewBox="0 0 900 280" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad-pink" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#f472b6" />
                </linearGradient>
              </defs>

              {/* Edges */}
              {[
                ['Policy', 'Insured'],
                ['Policy', 'Coverage'],
                ['Claim', 'Policy'],
                ['Claim', 'Provider'],
                ['Claim', 'Adjuster'],
                ['Insured', 'Address'],
                ['Claimant', 'Claim'],
              ].map((e, i) => {
                const positions = {
                  Policy: [450, 80],
                  Coverage: [620, 60],
                  Insured: [300, 130],
                  Claim: [450, 180],
                  Provider: [620, 160],
                  Adjuster: [280, 210],
                  Address: [140, 130],
                  Claimant: [760, 190],
                };
                const [x1, y1] = positions[e[0]];
                const [x2, y2] = positions[e[1]];
                return (
                  <g key={i}>
                    <path d={`M ${x1} ${y1} Q ${(x1 + x2) / 2} ${(y1 + y2) / 2 - 20} ${x2} ${y2}`} stroke="#cbd5e1" strokeWidth="2" fill="none" />
                  </g>
                );
              })}

              {/* Highlighted reasoning path */}
              <path d="M 300 130 Q 375 90 450 80 Q 535 70 620 60" stroke="url(#grad-pink)" strokeWidth="4" fill="none" filter="url(#glow)" />

              {/* Nodes */}
              {[
                { id: 'Policy', x: 450, y: 80, color: 'from-sky-500 to-indigo-500' },
                { id: 'Coverage', x: 620, y: 60, color: 'from-indigo-500 to-fuchsia-500' },
                { id: 'Insured', x: 300, y: 130, color: 'from-sky-500 to-cyan-500' },
                { id: 'Claim', x: 450, y: 180, color: 'from-rose-500 to-fuchsia-500' },
                { id: 'Provider', x: 620, y: 160, color: 'from-emerald-500 to-teal-500' },
                { id: 'Adjuster', x: 280, y: 210, color: 'from-amber-500 to-orange-500' },
                { id: 'Address', x: 140, y: 130, color: 'from-violet-500 to-purple-500' },
                { id: 'Claimant', x: 760, y: 190, color: 'from-pink-500 to-rose-500' },
              ].map((n) => (
                <g key={n.id} transform={`translate(${n.x}, ${n.y})`}>
                  <circle r="28" fill="#ffffff" stroke="#e2e8f0" />
                  <circle r="28" fill="url(#grad-blue)" opacity="0.06" />
                  <foreignObject x="-44" y="-44" width="88" height="88">
                    <div className="flex h-22 w-22 items-center justify-center">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${n.color} text-white text-xs font-semibold shadow-sm`}>{n.id[0]}</div>
                    </div>
                  </foreignObject>
                  <text x="0" y="46" textAnchor="middle" fontSize="11" fill="#334155">{n.id}</text>
                </g>
              ))}

              {/* Legend */}
              <g transform="translate(20, 230)">
                <rect width="240" height="32" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
                <circle cx="16" cy="16" r="6" fill="url(#grad-pink)" />
                <text x="30" y="20" fontSize="12" fill="#475569">Highlighted path = reasoning trace</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
