import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';

export default function ReactSummary() {
  const [celebrated, setCelebrated] = useState(false);

  const flowNodes = [
    { name: 'Created', icon: '🌱', color: 'bg-peach-100 border-peach-300 text-peach-800', note: 'Jordan Walke (2011)' },
    { name: 'Components', icon: '🧩', color: 'bg-skyblue-100 border-skyblue-300 text-sky-800', note: 'Modular UI Blocks' },
    { name: 'JSX', icon: '📝', color: 'bg-babypink-100 border-babypink-300 text-pink-800', note: 'HTML in JS' },
    { name: 'Props', icon: '📦', color: 'bg-pista-100 border-pista-300 text-emerald-800', note: 'Pass Data Down' },
    { name: 'State', icon: '🧠', color: 'bg-peach-100 border-peach-300 text-peach-800', note: 'Interactive Memory' },
    { name: 'Hooks', icon: '🪝', color: 'bg-skyblue-100 border-skyblue-300 text-sky-800', note: 'Lifecycle & Logic' },
    { name: 'Virtual DOM', icon: '⚡', color: 'bg-babypink-100 border-babypink-300 text-pink-800', note: 'Superfast Diffing' },
    { name: 'Modern Web Apps', icon: '🚀', color: 'bg-pista-100 border-pista-300 text-emerald-800', note: 'Scalable & Slick' },
  ];

  const handleCelebrate = () => {
    setCelebrated(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#FFA07A', '#7BC686', '#FF8FAB', '#38BDF8', '#61DAFB'],
    });
  };

  return (
    <section id="summary" className="py-24 relative overflow-hidden">
      {/* Background Soft Pastel Bubbles */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-gradient-to-tr from-peach-100/50 via-babypink-100/40 to-skyblue-100/50 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Complete Architecture"
          title="🚀 React in One View"
          subtitle="Connecting every single concept into one continuous, harmonious mental model."
          color="skyblue"
        />

        {/* Required Interactive Animated Flow: Created → Components → JSX → Props → State → Hooks → Virtual DOM → Modern Web Apps */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="p-8 sm:p-12 rounded-3xl bg-white/95 border-2 border-slate-200/80 shadow-xl backdrop-blur-xl relative">
            <div className="text-center mb-8">
              <span className="text-xs font-bold tracking-widest uppercase text-slate-500">
                The React Mindmap Flow
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                How React Brings Everything Together
              </h3>
            </div>

            {/* Desktop / Tablet Flow */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-2 items-center">
              {flowNodes.map((node, index) => (
                <React.Fragment key={node.name}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    whileHover={{ y: -6, scale: 1.05 }}
                    className="flex flex-col items-center text-center group cursor-pointer"
                  >
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border-2 ${node.color} flex items-center justify-center text-2xl shadow-sm transition-all duration-200 group-hover:shadow-md mb-2`}>
                      {node.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {node.name}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">
                      {node.note}
                    </span>
                  </motion.div>
                </React.Fragment>
              ))}
            </div>

            {/* Flow Banner representation */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-10 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center"
            >
              <p className="font-mono text-xs sm:text-sm font-bold text-slate-700 leading-relaxed">
                <span className="text-peach-600">Created</span> →{' '}
                <span className="text-sky-600">Components</span> →{' '}
                <span className="text-pink-600">JSX</span> →{' '}
                <span className="text-emerald-600">Props</span> →{' '}
                <span className="text-peach-600">State</span> →{' '}
                <span className="text-sky-600">Hooks</span> →{' '}
                <span className="text-pink-600">Virtual DOM</span> →{' '}
                <span className="text-emerald-700">Modern Web Apps</span>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Required Final Message Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-r from-peach-100 via-babypink-100 to-skyblue-100 p-1 shadow-2xl"
        >
          <div className="rounded-[22px] bg-slate-900 text-white p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-sky-500/20 text-sky-400 mb-6 border border-sky-400/30">
              <Sparkles className="w-8 h-8" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 block mb-2">
              Final Learning Insight
            </span>

            {/* Required Exact Final Message */}
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight max-w-2xl mx-auto mb-6">
              “React makes it easier to build modern, interactive and reusable user interfaces.”
            </blockquote>

            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Whether you are crafting a tiny personal hobby project or scaling a global digital platform with millions of concurrent users, React's declarative component model provides the superpowers to build with confidence.
            </p>

            <button
              onClick={handleCelebrate}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-400 via-peach-300 to-babypink-300 text-slate-950 font-extrabold text-base shadow-lg shadow-sky-500/25 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span>{celebrated ? '🎉 Keep Building Amazing Things!' : '🎉 Celebrate Your React Journey!'}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
