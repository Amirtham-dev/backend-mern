import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { 
  AlertTriangle, 
  GraduationCap, 
  RefreshCw, 
  Library, 
  Layers, 
  Network, 
  Search, 
  Gauge, 
  CheckCircle2, 
  Lightbulb
} from 'lucide-react';

export default function Drawbacks() {
  const drawbacks = [
    {
      id: 'learning-curve',
      title: 'Learning curve',
      icon: <GraduationCap className="w-5 h-5 text-amber-500" />,
      color: 'peach',
      badgeBg: 'bg-peach-100 text-peach-700 border-peach-200',
      border: 'border-peach-200 hover:border-peach-400',
      shortDesc: 'Requires learning JSX, component lifecycles, and thinking in declarative state instead of standard imperative HTML/JS.',
      modernFix: 'Modern React documentation, interactive tutorials, and hooks have made learning significantly more intuitive.',
    },
    {
      id: 'fast-changing-ecosystem',
      title: 'Fast-changing ecosystem',
      icon: <RefreshCw className="w-5 h-5 text-sky-500" />,
      color: 'skyblue',
      badgeBg: 'bg-skyblue-100 text-sky-700 border-skyblue-200',
      border: 'border-skyblue-200 hover:border-skyblue-400',
      shortDesc: 'Tools, community packages, best practices, and APIs evolve rapidly, which can occasionally feel overwhelming for newcomers.',
      modernFix: 'Core React APIs remain stable, and major releases prioritize backward compatibility with codemods.',
    },
    {
      id: 'need-for-additional-libraries',
      title: 'Need for additional libraries',
      icon: <Library className="w-5 h-5 text-pink-500" />,
      color: 'babypink',
      badgeBg: 'bg-babypink-100 text-pink-700 border-babypink-200',
      border: 'border-babypink-200 hover:border-babypink-400',
      shortDesc: 'Since React is only a UI library, you must research and configure extra packages for routing, animations, and forms.',
      modernFix: 'Vite templates and modern meta-frameworks provide well-curated starter configurations.',
    },
    {
      id: 'prop-drilling',
      title: 'Prop drilling',
      icon: <Layers className="w-5 h-5 text-emerald-500" />,
      color: 'pista',
      badgeBg: 'bg-pista-100 text-emerald-700 border-pista-200',
      border: 'border-pista-200 hover:border-pista-400',
      shortDesc: 'Passing props through multiple intermediate child components that do not actually need the data can clutter code.',
      modernFix: 'Solvable using React Context API or lightweight state stores like Zustand.',
    },
    {
      id: 'state-management-complexity',
      title: 'State management complexity',
      icon: <Network className="w-5 h-5 text-amber-500" />,
      color: 'peach',
      badgeBg: 'bg-peach-100 text-peach-700 border-peach-200',
      border: 'border-peach-200 hover:border-peach-400',
      shortDesc: 'As applications scale to hundreds of components, organizing server state, form state, and global UI state requires careful design.',
      modernFix: 'Tools like TanStack Query (server state) and Zustand (client state) simplify this dramatically.',
    },
    {
      id: 'seo-setup',
      title: 'SEO can require additional setup in traditional client-side applications',
      icon: <Search className="w-5 h-5 text-sky-500" />,
      color: 'skyblue',
      badgeBg: 'bg-skyblue-100 text-sky-700 border-skyblue-200',
      border: 'border-skyblue-200 hover:border-skyblue-400',
      shortDesc: 'Pure client-side Single Page Apps (SPAs) send an empty HTML shell which some web crawlers might index less effectively.',
      modernFix: 'SSR / SSG frameworks (Next.js, Remix, Astro) pre-render full HTML for top-tier search engine optimization.',
    },
    {
      id: 'performance-optimization',
      title: 'Performance optimization may be needed for large applications',
      icon: <Gauge className="w-5 h-5 text-pink-500" />,
      color: 'babypink',
      badgeBg: 'bg-babypink-100 text-pink-700 border-babypink-200',
      border: 'border-babypink-200 hover:border-babypink-400',
      shortDesc: 'Unnecessary component re-renders or heavy component trees can cause UI stutter if not monitored with React DevTools.',
      modernFix: 'React 19 compiler automatically optimizes re-renders, reducing the need for manual useMemo and useCallback.',
    },
  ];

  return (
    <section id="drawbacks" className="py-20 relative bg-gradient-to-b from-transparent via-slate-50/60 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Balanced Perspective"
          title="⚠️ Drawbacks of React"
          subtitle="No tool is a silver bullet. Being a great developer means knowing not just when to use React, but what challenges to anticipate."
          color="peach"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {drawbacks.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className={`rounded-3xl p-6 bg-white border-2 ${item.border} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`p-2.5 rounded-2xl bg-slate-50 border border-slate-100 shadow-xs`}>
                    {item.icon}
                  </span>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${item.badgeBg}`}>
                    Challenge #{index + 1}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h4>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {item.shortDesc}
                </p>
              </div>

              {/* Constructive Pro-Tip / Modern Fix */}
              <div className="pt-3 border-t border-slate-100 bg-slate-50/60 -mx-6 -mb-6 p-4 rounded-b-3xl">
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600 leading-normal">
                    <strong className="text-slate-800">Pro Solution:</strong> {item.modernFix}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
        >
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h5 className="font-bold text-slate-900 text-base">
              The Takeaway for Beginners
            </h5>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-0.5">
              These drawbacks are natural side-effects of React's massive power and flexibility. Once you master the fundamentals, these challenges become easy to navigate.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
