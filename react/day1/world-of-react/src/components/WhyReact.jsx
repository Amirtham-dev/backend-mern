import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { ArrowRight, Puzzle, Sparkles, LayoutGrid, CheckCircle2, RefreshCw, Layers } from 'lucide-react';

export default function WhyReact() {
  const [activeTab, setActiveTab] = useState('with-react');

  const flowSteps = [
    {
      step: '01',
      title: 'Complex UI',
      desc: 'Large websites with feeds, buttons, and comments get messy and hard to manage in one huge file.',
      icon: '🌪️',
      color: 'peach',
      border: 'border-peach-300',
      bg: 'bg-peach-50/80',
      textColor: 'text-peach-600',
    },
    {
      step: '02',
      title: 'Reusable Components',
      desc: 'React divides the screen into small Lego-like pieces (cards, buttons, headers) you can reuse anywhere.',
      icon: '🧩',
      color: 'skyblue',
      border: 'border-skyblue-300',
      bg: 'bg-skyblue-50/80',
      textColor: 'text-sky-600',
    },
    {
      step: '03',
      title: 'Easier Development',
      desc: 'You build one small block at a time. It makes testing, fixing, and updating websites easy and stress-free.',
      icon: '🚀',
      color: 'pista',
      border: 'border-pista-300',
      bg: 'bg-pista-50/80',
      textColor: 'text-emerald-600',
    },
  ];

  return (
    <section id="why-react" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Core Motivation"
          title="💡 Why Was React Created?"
          subtitle="Understanding the core problem React set out to solve: eliminating UI complexity through component isolation."
          color="peach"
        />

        {/* Primary Explanation Animated Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative rounded-3xl bg-gradient-to-r from-peach-100/70 via-babypink-100/60 to-skyblue-100/70 p-1 shadow-lg shadow-peach-100/40">
            <div className="rounded-[22px] bg-white/95 backdrop-blur-md p-8 sm:p-12 text-center border border-white/80">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 mb-5 shadow-inner">
                <span className="text-2xl">💡</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
                The Foundational Purpose
              </h3>

              {/* Required Exact Simple Explanation */}
              <blockquote className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug max-w-2xl mx-auto mb-6">
                “React was created to make it easier to build large and interactive user interfaces using reusable components.”
              </blockquote>

              <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                Instead of messy code that easily breaks when data changes, React lets you build interfaces with small, dependable building blocks.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Visual Flow Section: Complex UI → Reusable Components → Easier Development */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              The Architectural Shift
            </span>
            <h4 className="text-2xl font-extrabold text-slate-900 mt-1">
              Visual Workflow: From Chaos to Clarity
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {flowSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`relative rounded-3xl p-7 border-2 ${step.border} ${step.bg} shadow-sm transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{step.icon}</span>
                    <span className={`text-xs font-mono font-black px-2.5 py-1 rounded-full bg-white/90 border border-slate-200/60 ${step.textColor}`}>
                      Step {step.step}
                    </span>
                  </div>

                  <h5 className="text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h5>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow indicator between steps for desktop */}
                {index < flowSteps.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white shadow-md border border-slate-200 items-center justify-center text-slate-700">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Simple Flow Summary Strip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm font-bold text-slate-800"
          >
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-peach-100 text-peach-700">
              <span>🌪️</span> Complex UI
            </span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-skyblue-100 text-sky-700">
              <span>🧩</span> Reusable Components
            </span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-pista-100 text-emerald-700">
              <span>🚀</span> Easier Development
            </span>
          </motion.div>
        </div>

        {/* Interactive Interactive Conceptual Demonstration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 shadow-2xl overflow-hidden relative"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                Interactive Visual Comparison
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
                How UI Architecture Changed
              </h4>
            </div>

            {/* Toggle Switch */}
            <div className="flex items-center p-1 rounded-xl bg-slate-800 border border-slate-700">
              <button
                onClick={() => setActiveTab('without-react')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'without-react'
                    ? 'bg-rose-500 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Traditional Monolith (Old)
              </button>
              <button
                onClick={() => setActiveTab('with-react')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'with-react'
                    ? 'bg-sky-500 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                React Modular Components (Modern)
              </button>
            </div>
          </div>

          {activeTab === 'without-react' ? (
            <motion.div
              key="without"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
            >
              <div className="space-y-3 text-slate-300 text-sm">
                <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/40 text-rose-200">
                  <span className="font-bold block mb-1">❌ Tight Coupling & Fragile Updates</span>
                  One giant 2000-line HTML/JS file. Modifying a user badge might unintentionally break the checkout cart button!
                </div>
                <ul className="space-y-2 text-xs text-slate-400 list-disc list-inside">
                  <li>Unpredictable direct DOM mutations (<code className="text-rose-300 font-mono px-1 py-0.5 rounded bg-rose-950/60">document.getElementById()</code>)</li>
                  <li>Hard to reuse across pages without copy-pasting</li>
                  <li>Massive debugging headaches when state desynchronizes</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300">
                <div className="text-slate-500 mb-2">// ⚠️ Fragile spaghetti DOM queries</div>
                <p className="text-rose-400">const btn = document.getElementById('save');</p>
                <p className="text-slate-400">btn.addEventListener('click', () =&gt; &#123;</p>
                <p className="pl-4 text-amber-300">document.getElementById('counter').innerText++;</p>
                <p className="pl-4 text-amber-300">document.getElementById('total').innerHTML = ...;</p>
                <p className="text-slate-400">&#125;);</p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="with"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
            >
              <div className="space-y-3 text-slate-300 text-sm">
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-emerald-200">
                  <span className="font-bold block mb-1">✅ Lego-Block Modularity</span>
                  Each piece of UI is an isolated component containing its own logic, template, and styles. Clean, reliable, and predictable!
                </div>
                <ul className="space-y-2 text-xs text-slate-400 list-disc list-inside">
                  <li>Declarative rendering: UI is a pure reflection of State</li>
                  <li>Instant reusability: <code className="text-emerald-300 font-mono px-1 py-0.5 rounded bg-emerald-950/60">&lt;Button color="peach" /&gt;</code> anywhere</li>
                  <li>Fast Virtual DOM reconciliation automatically patches differences</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300">
                <div className="text-slate-500 mb-2">// ✨ Clean, reactive React component</div>
                <p className="text-sky-400">function Counter() &#123;</p>
                <p className="pl-4 text-purple-300">const [count, setCount] = useState(0);</p>
                <p className="pl-4 text-slate-400">return (</p>
                <p className="pl-8 text-emerald-300">&lt;button onClick=&#123;() =&gt; setCount(count + 1)&#125;&gt;</p>
                <p className="pl-12 text-slate-200">Clicked &#123;count&#125; times</p>
                <p className="pl-8 text-emerald-300">&lt;/button&gt;</p>
                <p className="pl-4 text-slate-400">);</p>
                <p className="text-sky-400">&#125;</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
