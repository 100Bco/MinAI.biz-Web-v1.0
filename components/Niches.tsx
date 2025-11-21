import React from 'react';
import { motion } from 'framer-motion';
import { NICHES } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Niches: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16 text-white"
        >
          Built For Your Business Model.
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {NICHES.map((niche, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-slate-800 border border-slate-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group cursor-default"
            >
              <div className="mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">
                <niche.icon size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">{niche.title}</h3>
              <p className="text-sm text-slate-400">{niche.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Niches;