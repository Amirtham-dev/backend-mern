import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { 
  Puzzle, 
  Zap, 
  FileCode, 
  Repeat, 
  Package, 
  BrainCircuit, 
  Anchor, 
  ArrowDownCircle,
  ExternalLink,
  ChevronRight,
  Code
} from 'lucide-react';

export default function FeaturesGrid() {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      id: 'component-based',
      title: 'Component-Based',
      iconEmoji: '🧩',
      icon: <Puzzle className="w-6 h-6 text-peach-500" />,
      desc: 'React divides the UI into small and reusable components.',
      deepDive: 'Think of your website as Lego blocks — each component handles its own layout and job.',
      snippet: `function UserBadge({ name }) {\n  return <div className="badge">👤 {name}</div>;\n}`,
      color: 'peach',
      cardBg: 'bg-peach-50/60',
      border: 'border-peach-200 hover:border-peach-400',
      badgeBg: 'bg-peach-100 text-peach-700',
      glow: 'group-hover:shadow-peach-200/80',
    },
    {
      id: 'virtual-dom',
      title: 'Virtual DOM',
      iconEmoji: '⚡',
      icon: <Zap className="w-6 h-6 text-sky-500" />,
      desc: 'React efficiently updates the UI when data changes.',
      deepDive: 'React tests changes in memory first, then updates only the exact item that changed.',
      snippet: `// React updates ONLY the changed score in the real browser\n<h1>Score: {liveScore}</h1>`,
      color: 'skyblue',
      cardBg: 'bg-skyblue-50/60',
      border: 'border-skyblue-200 hover:border-skyblue-400',
      badgeBg: 'bg-skyblue-100 text-sky-700',
      glow: 'group-hover:shadow-skyblue-200/80',
    },
    {
      id: 'jsx',
      title: 'JSX',
      iconEmoji: '📝',
      icon: <FileCode className="w-6 h-6 text-pink-500" />,
      desc: 'JSX allows developers to write HTML-like syntax inside JavaScript.',
      deepDive: 'Write HTML tags directly inside your JavaScript file for clean, natural coding.',
      snippet: `const welcome = <h2>Hello, {isLoggedIn ? 'Welcome back!' : 'Guest'}</h2>;`,
      color: 'babypink',
      cardBg: 'bg-babypink-50/60',
      border: 'border-babypink-200 hover:border-babypink-400',
      badgeBg: 'bg-babypink-100 text-pink-700',
      glow: 'group-hover:shadow-pink-200/80',
    },
    {
      id: 'reusable-components',
      title: 'Reusable Components',
      iconEmoji: '♻️',
      icon: <Repeat className="w-6 h-6 text-emerald-500" />,
      desc: 'Components can be created once and reused multiple times.',
      deepDive: 'Design a button or card once, and reuse it 50 times across your whole website.',
      snippet: `<Button color="peach">Submit</Button>\n<Button color="skyblue">Cancel</Button>`,
      color: 'pista',
      cardBg: 'bg-pista-50/60',
      border: 'border-pista-200 hover:border-pista-400',
      badgeBg: 'bg-pista-100 text-emerald-700',
      glow: 'group-hover:shadow-pista-200/80',
    },
    {
      id: 'props',
      title: 'Props',
      iconEmoji: '📦',
      icon: <Package className="w-6 h-6 text-peach-500" />,
      desc: 'Props allow data to be passed from parent components to child components.',
      deepDive: 'Like passing ingredients into a recipe, parents send custom data into child components.',
      snippet: `// Parent passes "title" prop down\n<Card title="Learn React" level="Beginner" />`,
      color: 'peach',
      cardBg: 'bg-peach-50/60',
      border: 'border-peach-200 hover:border-peach-400',
      badgeBg: 'bg-peach-100 text-peach-700',
      glow: 'group-hover:shadow-peach-200/80',
    },
    {
      id: 'state',
      title: 'State',
      iconEmoji: '🧠',
      icon: <BrainCircuit className="w-6 h-6 text-sky-500" />,
      desc: 'State stores data that can change during the application’s execution.',
      deepDive: 'The live memory of a component — like a click counter or whether a popup is open.',
      snippet: `const [count, setCount] = useState(0);\n// Calling setCount updates memory and updates UI\nsetCount(count + 1);`,
      color: 'skyblue',
      cardBg: 'bg-skyblue-50/60',
      border: 'border-skyblue-200 hover:border-skyblue-400',
      badgeBg: 'bg-skyblue-100 text-sky-700',
      glow: 'group-hover:shadow-skyblue-200/80',
    },
    {
      id: 'hooks',
      title: 'Hooks',
      iconEmoji: '🪝',
      icon: <Anchor className="w-6 h-6 text-pink-500" />,
      desc: 'Hooks allow functional components to use React features such as state and effects.',
      deepDive: 'Simple built-in helper functions like useState that give components their powers.',
      snippet: `// Auto-updates page title when count changes\nuseEffect(() => {\n  document.title = \`Clicks: \${count}\`;\n}, [count]);`,
      color: 'babypink',
      cardBg: 'bg-babypink-50/60',
      border: 'border-babypink-200 hover:border-babypink-400',
      badgeBg: 'bg-babypink-100 text-pink-700',
      glow: 'group-hover:shadow-pink-200/80',
    },
    {
      id: 'one-way-data-flow',
      title: 'One-Way Data Flow',
      iconEmoji: '🔄',
      icon: <ArrowDownCircle className="w-6 h-6 text-emerald-500" />,
      desc: 'Data generally flows from parent components to child components.',
      deepDive: 'Data moves strictly downwards from parents to children, preventing confusing bugs.',
      snippet: `// Top-to-bottom data flow\n<App>\n  <UserList users={users} />\n</App>`,
      color: 'pista',
      cardBg: 'bg-pista-50/60',
      border: 'border-pista-200 hover:border-pista-400',
      badgeBg: 'bg-pista-100 text-emerald-700',
      glow: 'group-hover:shadow-pista-200/80',
    },
  ];

  return (
    <section id="features" className="py-20 relative bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Core Building Blocks"
          title="⭐ Important Features of React"
          subtitle="The key foundational principles that make React intuitive, fast, scalable, and the primary choice of front-end developers."
          color="babypink"
        />

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const isSelected = selectedFeature === index;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => setSelectedFeature(index)}
                className={`group cursor-pointer rounded-3xl p-6 bg-white border-2 transition-all duration-300 shadow-sm hover:shadow-xl ${
                  feature.border
                } ${isSelected ? 'ring-2 ring-slate-900 shadow-lg' : ''}`}
              >
                {/* Top Row: Icon & Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${feature.badgeBg}`}>
                    {feature.iconEmoji} #{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                  <span>{feature.iconEmoji}</span>
                  <span>{feature.title}</span>
                </h3>

                {/* Required Short Explanation */}
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {feature.desc}
                </p>

                {/* Interactive inspect indicator */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-slate-900 transition-colors">
                  <span>{isSelected ? 'Viewing Code Snippet' : 'Click to inspect snippet'}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90 text-sky-500' : 'group-hover:translate-x-1'}`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Live Feature Spotlight Inspector */}
        <AnimatePresence mode="wait">
          {features[selectedFeature] && (
            <motion.div
              key={selectedFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto rounded-3xl bg-slate-900 text-white p-6 sm:p-10 border border-slate-800 shadow-2xl"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-slate-800 text-2xl">
                    {features[selectedFeature].iconEmoji}
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-wider uppercase text-sky-400">
                      Feature Deep Dive
                    </span>
                    <h4 className="text-2xl font-extrabold text-white">
                      {features[selectedFeature].title}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 font-mono">
                    React Concept #{selectedFeature + 1} of 8
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-6 space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                    <p className="text-sm font-semibold text-sky-200 mb-1">Beginner Summary:</p>
                    <p className="text-slate-200 text-base leading-snug">
                      "{features[selectedFeature].desc}"
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {features[selectedFeature].deepDive}
                  </p>
                </div>

                <div className="md:col-span-6">
                  <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-inner">
                    <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-xs text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Code className="w-3.5 h-3.5 text-sky-400" />
                        Code Syntax
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400">JSX / React</span>
                    </div>
                    <pre className="p-4 text-xs font-mono text-emerald-300 overflow-x-auto whitespace-pre leading-relaxed">
                      {features[selectedFeature].snippet}
                    </pre>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
