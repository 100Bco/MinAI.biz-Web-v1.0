import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Hard work got you here.</h2>
          <p className="text-xl md:text-2xl text-slate-400 mb-10">Systems will take you the rest of the way.</p>
          
          <button className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/50 mb-20">
            Book A Demo
          </button>
        </motion.div>

        <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href="#"
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img
              src="/logo.svg"
              alt="MinAI Logo"
              className="h-10"
            />
          </a>
          <div className="text-slate-500 text-sm">
            Copyright © 2025 MinAI. Scale Systems.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;