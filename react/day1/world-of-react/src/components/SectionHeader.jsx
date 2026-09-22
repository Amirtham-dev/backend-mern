import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ badge, title, subtitle, color = 'skyblue' }) {
  const badgeColors = {
    peach: 'bg-peach-100 text-peach-500 border-peach-200',
    pista: 'bg-pista-100 text-emerald-700 border-pista-200',
    babypink: 'bg-babypink-100 text-pink-600 border-babypink-200',
    skyblue: 'bg-skyblue-100 text-sky-700 border-skyblue-200',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="text-center max-w-3xl mx-auto mb-16 px-4"
    >
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border mb-3 shadow-sm ${
            badgeColors[color] || badgeColors.skyblue
          }`}
        >
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-4 flex items-center justify-center gap-1.5">
        <span className="w-8 h-1 rounded-full bg-peach-400"></span>
        <span className="w-8 h-1 rounded-full bg-pista-400"></span>
        <span className="w-8 h-1 rounded-full bg-babypink-400"></span>
        <span className="w-8 h-1 rounded-full bg-skyblue-400"></span>
      </div>
    </motion.div>
  );
}
