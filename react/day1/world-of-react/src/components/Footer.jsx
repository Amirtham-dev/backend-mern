import React from 'react';
import { Atom, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-600">
                <Atom className="w-6 h-6 animate-spin-slow" />
              </div>
              <span className="text-xl font-extrabold text-slate-900 tracking-tight">
                World of React <span className="text-sky-500">⚛️</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 max-w-md leading-relaxed">
              A clean, modern, and visually attractive educational guide designed to explain React's history, philosophy, components, and trade-offs.
            </p>

            {/* Pastel Palette Showcase */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-400 block mb-2">Designed With Pastel Harmonized Palette:</span>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-peach-50 border border-peach-200 text-xs font-medium text-slate-700">
                  <span className="w-3 h-3 rounded-full bg-peach-400" />
                  <span>Peach</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-pista-50 border border-pista-200 text-xs font-medium text-slate-700">
                  <span className="w-3 h-3 rounded-full bg-pista-400" />
                  <span>Pista Green</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-babypink-50 border border-babypink-200 text-xs font-medium text-slate-700">
                  <span className="w-3 h-3 rounded-full bg-babypink-400" />
                  <span>Baby Pink</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-skyblue-50 border border-skyblue-200 text-xs font-medium text-slate-700">
                  <span className="w-3 h-3 rounded-full bg-skyblue-400" />
                  <span>Sky Blue</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Jump Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Course Sections</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#history" className="hover:text-sky-600 transition-colors">📜 History & Jordan Walke</a></li>
              <li><a href="#why-react" className="hover:text-sky-600 transition-colors">💡 Why Was React Created?</a></li>
              <li><a href="#features" className="hover:text-sky-600 transition-colors">⭐ Important Features</a></li>
              <li><a href="#library-vs-framework" className="hover:text-sky-600 transition-colors">📚 Library vs Framework</a></li>
              <li><a href="#drawbacks" className="hover:text-sky-600 transition-colors">⚠️ Drawbacks of React</a></li>
              <li><a href="#summary" className="hover:text-sky-600 transition-colors">🚀 React in One View</a></li>
            </ul>
          </div>

          {/* Key Takeaways */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Golden Mindset</h4>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 leading-relaxed">
              <p className="font-semibold text-slate-800 mb-1">“Library gives you freedom; Framework gives you structure.”</p>
              Master components, understand state flow, and build modular interfaces.
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
            <span>for React learners & enthusiasts worldwide</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
