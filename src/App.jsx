import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Evolution from './components/Evolution';
import Footer from './components/Footer';

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false);

  // Toggle Theme
  const toggleTheme = () => setIsDark(!isDark);

  // Theme Classes
  const theme = {
    bg: isDark ? 'bg-slate-900' : 'bg-slate-50',
    text: isDark ? 'text-slate-100' : 'text-slate-800',
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme.bg} ${theme.text} font-sans selection:bg-blue-500 selection:text-white`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero isDark={isDark} />
      <TechStack isDark={isDark} />
      <Experience isDark={isDark} />
      <Projects isDark={isDark} />
      <Education isDark={isDark} />
      <Evolution isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
}