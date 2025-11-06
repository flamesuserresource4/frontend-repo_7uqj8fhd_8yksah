import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.20),transparent_60%),radial-gradient(ellipse_at_center,rgba(99,102,241,0.16),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-24 md:pt-36 md:pb-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-sky-200 backdrop-blur">
              AI + Knowledge Graph for Insurance
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
              InsuraGraph
              <span className="block bg-gradient-to-r from-sky-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">Connected intelligence for insurance data</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              An AI-powered insurance ontology and knowledge graph that unifies claims, policies, and client data into a single semantic layer—so your teams can reason in real time and act with confidence.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-900/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                Join the waitlist
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Request a demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
