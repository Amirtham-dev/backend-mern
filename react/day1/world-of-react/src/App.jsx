import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HistoryTimeline from './components/HistoryTimeline';
import WhyReact from './components/WhyReact';
import FeaturesGrid from './components/FeaturesGrid';
import LibraryVsFramework from './components/LibraryVsFramework';
import Drawbacks from './components/Drawbacks';
import ReactSummary from './components/ReactSummary';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFCFE] text-slate-800 selection:bg-sky-200 selection:text-slate-900">
      {/* Interactive Sticky Navbar with scroll progress bar */}
      <Navbar />

      {/* Main Container */}
      <main className="relative">
        {/* Hero Section */}
        <Hero />

        {/* Section 1: History of React & Jordan Walke Highlight */}
        <HistoryTimeline />

        {/* Section 2: Why Was React Created? */}
        <WhyReact />

        {/* Section 3: Important Features of React */}
        <FeaturesGrid />

        {/* Section 4: Why React is a Library, Not a Framework */}
        <LibraryVsFramework />

        {/* Section 5: Drawbacks of React */}
        <Drawbacks />

        {/* Section 6: Final Summary - React in One View */}
        <ReactSummary />
      </main>

      {/* Modern IT Learning Footer */}
      <Footer />
    </div>
  );
}
