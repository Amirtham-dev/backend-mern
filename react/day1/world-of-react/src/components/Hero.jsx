import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Layers, Cpu, Code2, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
      {/* Background Pastel Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[520px] pointer-events-none -z-10">
        <div className="absolute -top-16 left-12 w-80 h-80 bg-peach-200/50 rounded-full blur-3xl" />
        <div className="absolute top-20 right-16 w-96 h-96 bg-skyblue-200/50 rounded-full blur-3xl" />
        <div className="absolute bottom-4 left-1/3 w-88 h-88 bg-babypink-200/40 rounded-full blur-3xl" />
        <div className="absolute top-32 right-1/3 w-72 h-72 bg-pista-200/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Pill Tag */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-slate-200/90 shadow-sm backdrop-blur-md mb-6">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
              </span>
              <span className="text-xs font-bold tracking-wide uppercase text-slate-700">
                Interactive Educational Journey
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-skyblue-100 text-sky-700 font-semibold">
                React 19 Ready
              </span>
            </motion.div>

            {/* Main Heading requested by user */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.08] mb-6"
            >
              WORLD OF REACT <span className="inline-block text-sky-500 animate-spin-slow">⚛️</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Learn React simply. Build interactive web pages using reusable components like Lego blocks — fast, modern, and fun.
            </motion.p>

            {/* Pastel Highlights Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2.5 justify-center lg:justify-start mb-10"
            >
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-peach-50 border border-peach-200 text-slate-800 text-xs sm:text-sm font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-peach-400"></span>
                <span>Component-Based</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-pista-50 border border-pista-200 text-slate-800 text-xs sm:text-sm font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-pista-400"></span>
                <span>Virtual DOM Speed</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-babypink-50 border border-babypink-200 text-slate-800 text-xs sm:text-sm font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-babypink-400"></span>
                <span>Declarative JSX</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-skyblue-50 border border-skyblue-200 text-slate-800 text-xs sm:text-sm font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-skyblue-400"></span>
                <span>Unidirectional Flow</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#history"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-slate-900 text-white font-semibold text-base shadow-lg shadow-slate-900/10 hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Start Learning</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href="#why-react"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/90 text-slate-700 font-semibold text-base border border-slate-200 hover:bg-slate-50 hover:text-slate-900 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm"
              >
                <span>Why Was It Created?</span>
                <span className="text-amber-500">💡</span>
              </a>
            </motion.div>

            {/* Quick Stats / Micro-banner */}
            <motion.div
              variants={itemVariants}
              className="mt-10 pt-8 border-t border-slate-200/80 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Beginner-friendly</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-500" />
                <span>Visual Flowcharts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-pink-500" />
                <span>Interactive Cards</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: React-themed Visual Illustration */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
              {/* Outer decorative soft color rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-peach-100/60 via-babypink-100/40 to-skyblue-100/70 border border-slate-200/50 shadow-2xl backdrop-blur-xl -z-10" />

              {/* Orbital Ring 1 - 0deg */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                className="absolute w-64 h-24 sm:w-80 sm:h-32 border-2 border-sky-400/50 rounded-full"
                style={{ transformOrigin: 'center' }}
              >
                {/* Orbiting electron */}
                <motion.div
                  className="absolute -top-2 left-1/2 w-4 h-4 rounded-full bg-sky-400 shadow-lg shadow-sky-400/80 border-2 border-white"
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Orbital Ring 2 - 60deg */}
              <motion.div
                animate={{ rotate: [60, 420] }}
                transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                className="absolute w-64 h-24 sm:w-80 sm:h-32 border-2 border-pink-300/60 rounded-full"
                style={{ transformOrigin: 'center' }}
              >
                <div className="absolute -top-2 left-1/2 w-4 h-4 rounded-full bg-babypink-400 shadow-lg shadow-pink-400/80 border-2 border-white" />
              </motion.div>

              {/* Orbital Ring 3 - 120deg */}
              <motion.div
                animate={{ rotate: [120, 480] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute w-64 h-24 sm:w-80 sm:h-32 border-2 border-pista-300/70 rounded-full"
                style={{ transformOrigin: 'center' }}
              >
                <div className="absolute -top-2 left-1/2 w-4 h-4 rounded-full bg-pista-400 shadow-lg shadow-emerald-400/80 border-2 border-white" />
              </motion.div>

              {/* Central Nucleus */}
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-sky-400 via-sky-300 to-white flex items-center justify-center shadow-xl shadow-sky-400/40 border-4 border-white cursor-pointer"
              >
                <motion.div
                  animate={{ scale: [0.95, 1.05, 0.95] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center text-white font-extrabold text-2xl shadow-inner"
                >
                  ⚛️
                </motion.div>
              </motion.div>

              {/* Floating Concept Chips */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 sm:top-2 sm:left-0 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-peach-200 shadow-md flex items-center gap-2"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-peach-400" />
                <span className="text-xs font-bold text-slate-800 font-mono">&lt;App /&gt;</span>
              </motion.div>

              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-2 sm:bottom-4 sm:left-2 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-pista-200 shadow-md flex items-center gap-2"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-pista-400" />
                <span className="text-xs font-bold text-slate-800 font-mono">useState(0)</span>
              </motion.div>

              <motion.div
                animate={{ y: [-5, 7, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-4 -right-4 sm:top-8 sm:-right-2 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-skyblue-200 shadow-md flex items-center gap-2"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-skyblue-400" />
                <span className="text-xs font-bold text-slate-800 font-mono">Virtual DOM</span>
              </motion.div>

              <motion.div
                animate={{ y: [5, -7, 5] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute -bottom-2 -right-4 sm:bottom-6 sm:right-0 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-babypink-200 shadow-md flex items-center gap-2"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-babypink-400" />
                <span className="text-xs font-bold text-slate-800 font-mono">Hooks 🪝</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
