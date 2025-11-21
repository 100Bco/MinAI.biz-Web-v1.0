import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Agitation from './components/Agitation';
import Solution from './components/Solution';
import Product from './components/Product';
import Niches from './components/Niches';
import Founder from './components/Founder';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Agitation />
        <Solution />
        <Product />
        <Niches />
        <Founder />
        <Process />
        <Pricing />
      </main>
      <Footer />
      
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-slate-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors z-40 group"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;