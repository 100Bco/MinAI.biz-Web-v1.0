import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, UserX, Activity } from 'lucide-react';

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Agitation: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            If you stop, the money stops. <br/>
            <span className="text-red-500">That is the trap.</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div 
            variants={itemVariants} 
            whileHover={{ y: -8 }}
            className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 transition-all duration-300 cursor-default"
          >
            <AlertTriangle className="text-orange-500 mb-4" size={32} />
            <h3 className="font-bold text-lg mb-2">The Bottleneck</h3>
            <p className="text-slate-600 text-sm">
              You are the best closer, the best project manager, and the customer support team.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            whileHover={{ y: -8 }}
            className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 transition-all duration-300 cursor-default"
          >
            <UserX className="text-red-500 mb-4" size={32} />
            <h3 className="font-bold text-lg mb-2">Not A Business</h3>
            <p className="text-slate-600 text-sm">
              That isn’t a business; that’s a high-paying job with no time off.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            whileHover={{ y: -8 }}
            className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 transition-all duration-300 cursor-default"
          >
            <Activity className="text-blue-500 mb-4" size={32} />
            <h3 className="font-bold text-lg mb-2">The Tech Gap</h3>
            <p className="text-slate-600 text-sm">
              You know technology could help, but you don't have time to learn it.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 p-8 bg-blue-900 rounded-2xl text-center text-white shadow-xl relative overflow-hidden cursor-default"
        >
           <div className="relative z-10">
             <h3 className="text-xl font-semibold mb-2">MinAI bridges that gap.</h3>
             <p className="text-blue-100">We translate complex automation into a simple engine that runs your business for you.</p>
           </div>
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Agitation;