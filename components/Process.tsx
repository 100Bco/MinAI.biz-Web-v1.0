import React from 'react';
import { motion, Variants } from 'framer-motion';
import { STEPS } from '../constants';
import { ArrowRight } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, type: "spring", bounce: 0.4 }
  }
};

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">3 Steps To Freedom.</h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 relative"
        >
            {/* Connecting Line (Desktop) */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-700 z-0 origin-left"
            ></motion.div>

            {STEPS.map((step, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className="relative z-10 flex flex-col items-center text-center p-4 rounded-2xl hover:bg-slate-800/30 transition-colors duration-300"
                >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-24 h-24 bg-slate-800 rounded-full border-4 border-slate-700 flex items-center justify-center mb-6 shadow-lg shadow-black/20 cursor-pointer"
                    >
                        <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-inner">
                            <step.icon size={32} />
                        </div>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed max-w-xs">{step.description}</p>
                    
                    {idx < 2 && (
                        <div className="md:hidden mt-8 text-slate-600">
                            <ArrowRight size={32} className="rotate-90" />
                        </div>
                    )}
                </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;