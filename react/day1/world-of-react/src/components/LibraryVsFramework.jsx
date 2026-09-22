import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { ArrowDown, Check, Sparkles, Sliders, Box, Layers, ShieldCheck, Compass } from 'lucide-react';

export default function LibraryVsFramework() {
  return (
    <section id="library-vs-framework" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Conceptual Distinction"
          title="📚 Why React is a Library, Not a Framework?"
          subtitle="Understanding the fundamental difference between an unopinionated UI library and a full-fledged opinionated framework."
          color="pista"
        />

        {/* Primary Explanation Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16 rounded-3xl bg-gradient-to-r from-pista-100/70 via-skyblue-100/70 to-peach-100/70 p-1 shadow-lg shadow-pista-100/30"
        >
          <div className="rounded-[22px] bg-white p-8 sm:p-10 text-center">
            <span className="inline-block p-3 rounded-2xl bg-pista-100 text-emerald-700 mb-4">
              <Compass className="w-6 h-6" />
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
              The Unopinionated UI Philosophy
            </h3>

            {/* Required Exact Simple Language */}
            <blockquote className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug max-w-3xl mx-auto mb-5">
              “React mainly focuses on building the user interface. It does not force developers to use a specific solution for routing, state management, backend, or other application features.”
            </blockquote>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              React focuses purely on the UI. You have total freedom to pick whatever tools you like for page routing, styles, and data.
            </p>
          </div>
        </motion.div>

        {/* Animated Comparison Cards: React (Library) vs Framework */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* Card 1: React - Library */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl bg-gradient-to-b from-skyblue-50 via-white to-white p-8 border-2 border-skyblue-300 shadow-md hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="p-3 rounded-2xl bg-skyblue-100 text-sky-600">
                    <Sliders className="w-6 h-6" />
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-600">The Lean Approach</span>
                    <h3 className="text-2xl font-extrabold text-slate-900">React – Library</h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-skyblue-100 text-sky-700 border border-skyblue-200">
                  Total Flexibility
                </span>
              </div>

              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                React gives you full freedom to pick and assemble whatever ecosystem tools best fit your team:
              </p>

              {/* Required Exact Flow */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 mb-6 text-center space-y-3">
                <div className="p-3 rounded-xl bg-sky-500 text-white font-bold text-sm shadow-sm">
                  UI (React Core)
                </div>
                <div className="flex justify-center text-slate-400">
                  <ArrowDown className="w-5 h-5 animate-bounce" />
                </div>
                <div className="p-3 rounded-xl bg-peach-100 text-peach-800 font-bold text-sm border border-peach-200">
                  You choose additional tools
                </div>
                <div className="flex justify-center text-slate-400">
                  <ArrowDown className="w-5 h-5 animate-bounce" />
                </div>
                <div className="p-3 rounded-xl bg-white text-slate-800 font-bold text-sm border border-slate-200 shadow-xs">
                  Routing / State / API / Backend
                </div>
              </div>

              {/* Examples of choice */}
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span><strong>Routing:</strong> React Router, TanStack Router, or none</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span><strong>State:</strong> Zustand, Redux, Jotai, Context, or Signals</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span><strong>Styling:</strong> Tailwind CSS, CSS Modules, or Styled-Components</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-sky-700 flex items-center justify-between">
              <span>Philosophy: Custom Architecture</span>
              <span>Freedom: Maximum</span>
            </div>
          </motion.div>

          {/* Card 2: Framework */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl bg-gradient-to-b from-pista-50 via-white to-white p-8 border-2 border-pista-300 shadow-md hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="p-3 rounded-2xl bg-pista-100 text-emerald-600">
                    <Box className="w-6 h-6" />
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">The All-in-One Approach</span>
                    <h3 className="text-2xl font-extrabold text-slate-900">Framework</h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-pista-100 text-emerald-800 border border-pista-200">
                  Pre-Configured
                </span>
              </div>

              {/* Required Exact Framework Definition */}
              <p className="text-slate-800 font-semibold text-base mb-4 leading-snug">
                Provides a more complete structure and conventions.
              </p>

              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Frameworks (such as Angular, Django, or React meta-frameworks like Next.js) prescribe folder structures, data fetching protocols, and routing systems out-of-the-box.
              </p>

              {/* Framework Structure Diagram */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 mb-6 text-center space-y-3">
                <div className="p-3 rounded-xl bg-slate-900 text-white font-bold text-sm shadow-sm">
                  Complete Opinionated Architecture
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800">Built-in Routing</div>
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800">Built-in SSR / API</div>
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800">Built-in Bundler</div>
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800">Strict Conventions</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white text-slate-700 text-xs font-medium border border-slate-200">
                  Everything comes packaged inside the framework box
                </div>
              </div>

              {/* Characteristics */}
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span><strong>Opinionated:</strong> Enforces standard architectural patterns</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span><strong>Conventions:</strong> Less configuration decisions required initially</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span><strong>Structure:</strong> Great for strict team uniformity</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-emerald-700 flex items-center justify-between">
              <span>Philosophy: Inversion of Control</span>
              <span>Structure: Maximum</span>
            </div>
          </motion.div>
        </div>

        {/* Required Highlighted Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative rounded-3xl bg-gradient-to-r from-peach-300 via-babypink-300 to-skyblue-300 p-1 shadow-lg shadow-babypink-200/40">
            <div className="rounded-[22px] bg-slate-900 text-white p-6 sm:p-8 text-center relative overflow-hidden">
              <span className="text-xs font-bold uppercase tracking-widest text-peach-300 mb-2 block">
                Golden Rule to Remember
              </span>

              {/* Required Exact Statement */}
              <p className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                “Library gives you freedom; Framework gives you structure.”
              </p>

              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-400">
                <span>React = Freedom to choose</span>
                <span>•</span>
                <span>Framework = Guardrails to follow</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
