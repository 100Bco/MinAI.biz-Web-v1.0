import React from 'react';
import { motion } from 'framer-motion';
import { PRICING } from '../constants';
import { Check, Zap } from 'lucide-react';

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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white relative">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-70"></div>
       
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Cost of an Employee: <span className="line-through text-slate-400 decoration-red-500/50">$4,000/mo</span>
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold text-blue-600 tracking-tight">
            Cost of MinAI: $XXX
          </h2>
          <p className="mt-4 text-slate-500">One simple subscription. No hidden fees. Cancel anytime.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 items-start"
        >
          {PRICING.map((tier, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -15, transition: { duration: 0.3 } }}
              className={`relative flex flex-col h-full bg-white rounded-2xl p-8 transition-all duration-300 ${
                tier.isPopular 
                  ? 'border-2 border-blue-500 shadow-2xl shadow-blue-900/10 z-10 transform scale-105' 
                  : 'border border-slate-200 shadow-lg hover:shadow-xl hover:border-blue-200'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg flex items-center gap-1">
                  <Zap size={12} fill="white" /> Most Popular
                </div>
              )}

              <div className="text-center mb-8 pt-4">
                <h3 className={`text-lg font-bold mb-2 ${tier.isPopular ? 'text-blue-600' : 'text-slate-600'}`}>{tier.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">{tier.price}</span>
                  {tier.period && <span className="text-slate-500 font-medium text-lg">{tier.period}</span>}
                </div>
                <p className="text-sm text-slate-500 min-h-[20px]">{tier.description}</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3 group">
                    <div className={`min-w-[20px] pt-1 transition-colors ${tier.isPopular ? 'text-blue-600' : 'text-blue-400 group-hover:text-blue-600'}`}>
                      <Check size={18} strokeWidth={3} />
                    </div>
                    <span className="text-slate-700 text-sm font-medium leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <div className="mb-6 p-4 bg-slate-50 rounded-xl text-center border border-slate-100">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase mb-1 tracking-widest">PRIMARY GOAL</span>
                    <span className="font-bold text-slate-800 text-sm">{tier.goal}</span>
                </div>

                <button 
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform active:scale-95 ${
                    tier.isPopular 
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/40' 
                        : 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg'
                    }`}
                >
                    {tier.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
