import React from 'react';
import { motion } from 'framer-motion';
import { COMPARISON_POINTS } from '../constants';
import { X, Check } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section id="solution" className="py-24 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Stop Renting Effort. <br/>
            <span className="text-blue-400">Start Owning The Machine.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Agencies charge you monthly retainers to "try" to get results.
            <br />
            MinAI installs a permanent system that you own.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-0 md:gap-8 items-center">
            {/* Old Way */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/50 p-8 rounded-t-2xl md:rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors duration-300 cursor-default"
            >
                <h3 className="text-xl font-bold text-slate-400 mb-8 uppercase tracking-wider text-center">The Old Way (Manual)</h3>
                <div className="space-y-8">
                    {COMPARISON_POINTS.map((point, idx) => (
                        <div key={idx} className="flex gap-4">
                            <div className="min-w-[24px] h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                                <X size={14} strokeWidth={3} />
                            </div>
                            <p className="text-slate-300">{point.manual}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-10 pt-6 border-t border-slate-700 text-center">
                    <span className="text-red-400 font-bold text-xl">Result: Burnout</span>
                </div>
            </motion.div>

            {/* MinAI Way */}
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.4 }}
               whileHover={{ scale: 1.08 }}
               className="bg-blue-600 p-8 rounded-b-2xl md:rounded-2xl shadow-2xl shadow-blue-500/20 relative transform md:scale-105 z-10 cursor-default"
            >
                <div className="absolute top-0 right-0 p-2">
                    <div className="bg-white/20 backdrop-blur text-xs font-bold px-2 py-1 rounded text-white">RECOMMENDED</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-8 uppercase tracking-wider text-center">The MinAI Way (System)</h3>
                <div className="space-y-8">
                    {COMPARISON_POINTS.map((point, idx) => (
                        <div key={idx} className="flex gap-4">
                            <div className="min-w-[24px] h-6 rounded-full bg-white text-blue-600 flex items-center justify-center">
                                <Check size={14} strokeWidth={3} />
                            </div>
                            <p className="text-white font-medium">{point.system}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-10 pt-6 border-t border-blue-500 text-center">
                    <span className="text-white font-bold text-2xl">Result: Scale</span>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;