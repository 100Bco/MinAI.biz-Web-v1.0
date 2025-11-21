import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Product: React.FC = () => {
  return (
    <section id="product" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
         <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Hire The Team That <span className="text-blue-600">Never Sleeps</span>.
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We don't sell "software features."
            <br />
            We install pre-trained digital employees ready to work immediately.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {FEATURES.map((feature, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-3">
                <feature.icon size={32} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{idx + 1}. {feature.title}</h3>
              
              <div className="mb-6 min-h-[80px]">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">The Job</span>
                <p className="text-slate-600 mt-1 leading-relaxed">{feature.description}</p>
              </div>
              
              <div className="pt-6 border-t border-slate-100">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">The Payoff</span>
                <p className="text-slate-800 font-medium mt-1">{feature.payoff}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Product;