import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { 
  Sparkles, 
  Smartphone, 
  Cpu, 
  Anchor, 
  Flame, 
  Zap, 
  Award, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause,
  ListFilter,
  CheckCircle2,
  Calendar
} from 'lucide-react';

export default function HistoryTimeline() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [viewMode, setViewMode] = useState('stepper'); // 'stepper' | 'grid'

  const milestones = [
    {
      year: '2011',
      title: 'Created at Facebook',
      desc: 'React was created by Jordan Walke at Facebook.',
      detail: 'First tested on Facebook News Feed to make dynamic user updates simple and reliable.',
      color: 'peach',
      badgeBg: 'bg-peach-100 text-peach-700 border-peach-200',
      pillBg: 'hover:bg-peach-50 text-peach-700 border-peach-300',
      activeBg: 'bg-peach-500 text-white shadow-peach-300',
      icon: <Sparkles className="w-6 h-6" />,
      tag: 'Birth of React',
    },
    {
      year: '2013',
      title: 'Open-Sourced Worldwide',
      desc: 'React was open-sourced and made available to developers worldwide.',
      detail: 'Released free to developers worldwide, introducing the superfast Virtual DOM.',
      color: 'skyblue',
      badgeBg: 'bg-skyblue-100 text-sky-700 border-skyblue-200',
      pillBg: 'hover:bg-skyblue-50 text-sky-700 border-skyblue-300',
      activeBg: 'bg-sky-500 text-white shadow-sky-300',
      icon: <Zap className="w-6 h-6" />,
      tag: 'Open Source',
    },
    {
      year: '2015',
      title: 'React Native Launch',
      desc: 'React Native was introduced for building mobile applications.',
      detail: 'Empowered developers to build iOS and Android mobile apps using the same React skills.',
      color: 'pista',
      badgeBg: 'bg-pista-100 text-emerald-700 border-pista-200',
      pillBg: 'hover:bg-pista-50 text-emerald-700 border-pista-300',
      activeBg: 'bg-emerald-500 text-white shadow-emerald-300',
      icon: <Smartphone className="w-6 h-6" />,
      tag: 'Mobile Apps',
    },
    {
      year: '2017',
      title: 'React 16 & Fiber Engine',
      desc: 'React 16 introduced the new Fiber architecture.',
      detail: 'Completely upgraded React’s core engine so complex animations and screens run smoothly.',
      color: 'babypink',
      badgeBg: 'bg-babypink-100 text-pink-700 border-babypink-200',
      pillBg: 'hover:bg-babypink-50 text-pink-700 border-babypink-300',
      activeBg: 'bg-pink-500 text-white shadow-pink-300',
      icon: <Cpu className="w-6 h-6" />,
      tag: 'Fiber Engine',
    },
    {
      year: '2019',
      title: 'React Hooks Era',
      desc: 'React Hooks were introduced.',
      detail: 'Made it easy to add state and logic to simple functions without writing confusing classes.',
      color: 'peach',
      badgeBg: 'bg-peach-100 text-peach-700 border-peach-200',
      pillBg: 'hover:bg-peach-50 text-peach-700 border-peach-300',
      activeBg: 'bg-peach-500 text-white shadow-peach-300',
      icon: <Anchor className="w-6 h-6" />,
      tag: 'Easy Hooks',
    },
    {
      year: '2022',
      title: 'React 18 Concurrent Speed',
      desc: 'React 18 introduced improved rendering capabilities.',
      detail: 'Added smart background rendering so web pages stay fast and responsive even under heavy loads.',
      color: 'skyblue',
      badgeBg: 'bg-skyblue-100 text-sky-700 border-skyblue-200',
      pillBg: 'hover:bg-skyblue-50 text-sky-700 border-skyblue-300',
      activeBg: 'bg-sky-500 text-white shadow-sky-300',
      icon: <Flame className="w-6 h-6" />,
      tag: 'Concurrent Mode',
    },
    {
      year: '2024',
      title: 'React 19 Next Gen',
      desc: 'React 19 introduced new features and improvements.',
      detail: 'Introduced the React Compiler to automatically optimize code speed with less manual work.',
      color: 'pista',
      badgeBg: 'bg-pista-100 text-emerald-700 border-pista-200',
      pillBg: 'hover:bg-pista-50 text-emerald-700 border-pista-300',
      activeBg: 'bg-emerald-500 text-white shadow-emerald-300',
      icon: <Award className="w-6 h-6" />,
      tag: 'React Compiler',
    },
  ];

  const current = milestones[activeIdx];

  // Auto-play timer
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveIdx((prev) => (prev + 1) % milestones.length);
      }, 3500);
    }
    return () => clearInterval(timer);
  }, [isPlaying, milestones.length]);

  const handleNext = () => {
    setIsPlaying(false);
    setActiveIdx((prev) => (prev + 1) % milestones.length);
  };

  const handlePrev = () => {
    setIsPlaying(false);
    setActiveIdx((prev) => (prev - 1 + milestones.length) % milestones.length);
  };

  return (
    <section id="history" className="py-20 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Chronicle of Innovation"
          title="📜 History of React"
          subtitle="From Jordan Walke's breakthrough idea at Facebook to a global UI standard. Explore each milestone in a neat, interactive timeline."
          color="skyblue"
        />

        {/* Special Jordan Walke Profile Card with Original Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 bg-gradient-to-r from-peach-50 via-white to-skyblue-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md relative overflow-hidden"
        >
          {/* Subtle watermark */}
          <div className="absolute -right-8 -bottom-8 w-44 h-44 opacity-10 pointer-events-none text-sky-500">
            <svg viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
              <circle cx="0" cy="0" r="2.05" />
              <g stroke="currentColor" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
              </g>
            </svg>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            {/* Authentic Jordan Walke Photo */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative shrink-0"
            >
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-br from-peach-200 via-babypink-200 to-skyblue-200 p-1.5 shadow-lg shadow-peach-200/40">
                <div className="w-full h-full rounded-[22px] bg-slate-100 overflow-hidden relative group/photo">
                  <img
                    src="/jordan-walke.jpg"
                    alt="Jordan Walke - Creator of React"
                    className="w-full h-full object-cover object-center group-hover/photo:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <span className="absolute bottom-2.5 left-1/2 -translate-x-1/2 bg-slate-900/85 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow border border-white/20 whitespace-nowrap">
                    Facebook • 2011
                  </span>
                </div>
              </div>

              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-peach-400 text-white flex items-center justify-center shadow-md">
                ⚛️
              </div>
            </motion.div>

            {/* Jordan Walke Details */}
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-800 border border-sky-200">
                  Creator Spotlight
                </span>
                <span className="text-xs text-slate-500 font-medium">Software Engineer & Innovator</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                Jordan Walke
              </h3>

              {/* Exact Required One-Line Description */}
              <div className="relative p-4 rounded-2xl bg-white/90 border border-slate-200/90 shadow-xs mb-4">
                <Quote className="w-5 h-5 text-peach-400 mb-1 inline-block mr-1.5 opacity-80" />
                <p className="text-slate-800 font-semibold text-base sm:text-lg italic leading-relaxed inline">
                  "Jordan Walke created React at Facebook to make building complex user interfaces easier and more efficient."
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Before React, updating web pages was slow and complicated. Jordan solved this by introducing reusable Lego-like components.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Clean, Neat Year Milestone Navigator & View Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Interactive Milestone Timeline
            </span>
            <h4 className="text-2xl font-extrabold text-slate-900">
              Key Years of Evolution
            </h4>
          </div>

          <div className="flex items-center gap-2">
            {/* View Switcher: Stepper vs Compact Grid */}
            <div className="flex items-center p-1 rounded-xl bg-white border border-slate-200 shadow-xs">
              <button
                onClick={() => setViewMode('stepper')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'stepper'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                ✨ Interactive Stepper
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                📜 All Milestones
              </button>
            </div>

            {viewMode === 'stepper' && (
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
                  isPlaying
                    ? 'bg-sky-500 text-white border-sky-600 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
                title={isPlaying ? 'Pause Auto-Play' : 'Auto-Play Milestones'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{isPlaying ? 'Pause' : 'Play'}</span>
              </button>
            )}
          </div>
        </div>

        {/* 1. INTERACTIVE STEPPER VIEW (Simple, Clean, Focused) */}
        {viewMode === 'stepper' && (
          <div className="space-y-8">
            {/* Sleek Horizontal Year Track */}
            <div className="relative p-2 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200 shadow-sm overflow-x-auto scrollbar-none">
              <div className="flex items-center justify-between min-w-[580px] gap-2">
                {milestones.map((item, index) => {
                  const isActive = activeIdx === index;
                  return (
                    <button
                      key={item.year}
                      onClick={() => {
                        setIsPlaying(false);
                        setActiveIdx(index);
                      }}
                      className={`relative flex-1 py-2.5 px-3 rounded-xl font-bold text-sm transition-all duration-300 flex flex-col items-center justify-center gap-1 ${
                        isActive
                          ? `${item.activeBg} shadow-md scale-105`
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      <span className="font-mono text-base font-extrabold tracking-tight">
                        {item.year}
                      </span>
                      <span className={`text-[10px] font-medium leading-none ${isActive ? 'text-white/90' : 'text-slate-400'}`}>
                        {item.tag}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activePillIndicator"
                          className="absolute -bottom-1 w-2 h-2 rounded-full bg-white shadow-xs"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Focused Animated Milestone Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.year}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative rounded-3xl bg-white border-2 border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-10"
              >
                {/* Pastel accent top glow */}
                <div
                  className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${
                    current.color === 'peach'
                      ? 'from-peach-400 to-amber-300'
                      : current.color === 'pista'
                      ? 'from-emerald-400 to-pista-300'
                      : current.color === 'babypink'
                      ? 'from-pink-400 to-rose-300'
                      : 'from-sky-400 to-cyan-300'
                  }`}
                />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Big Year & Icon */}
                  <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold border mb-3 ${current.badgeBg}`}>
                      {current.tag}
                    </span>

                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-6xl sm:text-7xl font-black text-slate-900 tracking-tighter font-mono">
                        {current.year}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <span>Milestone {activeIdx + 1} of 7</span>
                      <span>•</span>
                      <span className="capitalize">{current.color} Edition</span>
                    </div>
                  </div>

                  {/* Right Column: Title, Required Text & Details */}
                  <div className="md:col-span-8 space-y-4">
                    <h4 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {current.title}
                    </h4>

                    {/* Exact Required Milestone Line */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {current.desc}
                      </p>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {current.detail}
                    </p>

                    {/* Stepper Navigation Buttons */}
                    <div className="pt-2 flex items-center justify-between">
                      <button
                        onClick={handlePrev}
                        className="inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Previous Year</span>
                      </button>

                      <div className="flex items-center gap-1.5">
                        {milestones.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => {
                              setIsPlaying(false);
                              setActiveIdx(i);
                            }}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              activeIdx === i ? 'w-6 bg-slate-900' : 'w-2 bg-slate-300 hover:bg-slate-400'
                            }`}
                            aria-label={`Jump to milestone ${i + 1}`}
                          />
                        ))}
                      </div>

                      <button
                        onClick={handleNext}
                        className="inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm"
                      >
                        <span>Next Year</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* 2. COMPACT ROADMAP GRID (All Milestones At A Glance) */}
        {viewMode === 'grid' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {milestones.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-2xl font-black text-slate-900 tracking-tight">
                      {item.year}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${item.badgeBg}`}>
                      {item.tag}
                    </span>
                  </div>

                  <h5 className="font-extrabold text-slate-900 text-base mb-2">
                    {item.title}
                  </h5>

                  {/* Exact required description */}
                  <p className="text-slate-800 font-semibold text-sm leading-snug mb-2">
                    {item.desc}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span>Milestone #{index + 1}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
