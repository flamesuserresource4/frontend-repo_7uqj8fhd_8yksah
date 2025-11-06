import React from 'react';

export default function FooterCTA() {
  return (
    <footer id="demo" className="relative overflow-hidden bg-slate-950 py-16 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(14,165,233,0.15),transparent_60%),radial-gradient(ellipse_at_bottom,_rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Turning insurance data chaos into connected intelligence</h3>
            <p className="mt-3 text-slate-300">Book a demo to see how your data becomes queryable, explainable, and compliant—within weeks, not months.</p>
          </div>
          <div id="waitlist" className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur">
            <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <input
                type="email"
                required
                placeholder="Work email"
                className="w-full rounded-md border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300/70 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <button
                type="submit"
                className="rounded-md bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-900/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Join the waitlist
              </button>
            </form>
            <p className="mt-3 text-xs text-slate-400">By joining, you agree to receive product updates from InsuraGraph.</p>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6 text-sm text-slate-400">
          <span>© {new Date().getFullYear()} InsuraGraph</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
