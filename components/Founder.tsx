import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextSegment {
  text: string;
  className?: string;
}

const TypewriterEffect: React.FC<{ segments: TextSegment[]; startDelay?: number }> = ({ segments, startDelay = 0 }) => {
  // Flatten segments into an array of characters with their style
  const chars = React.useMemo(() => {
    const flattened: { char: string; className: string }[] = [];
    segments.forEach(seg => {
      seg.text.split('').forEach(char => {
        flattened.push({ char, className: seg.className || 'text-slate-700' });
      });
    });
    return flattened;
  }, [segments]);

  const [visibleCount, setVisibleCount] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isInView && !hasStarted) {
      const timer = setTimeout(() => {
        setHasStarted(true);
      }, startDelay);
      return () => clearTimeout(timer);
    }
  }, [isInView, hasStarted, startDelay]);

  useEffect(() => {
    if (hasStarted && visibleCount < chars.length) {
      // Randomize typing speed slightly for realism
      const speed = Math.random() * 15 + 20; 
      const timer = setTimeout(() => {
        setVisibleCount(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [hasStarted, visibleCount, chars.length]);

  return (
    <div ref={containerRef} className="leading-relaxed whitespace-pre-wrap">
      {chars.map((item, index) => (
        <span
          key={index}
          className={`${item.className} transition-opacity duration-75`}
          style={{ opacity: index < visibleCount ? 1 : 0 }}
        >
          {item.char}
        </span>
      ))}
      {hasStarted && visibleCount < chars.length && (
        <span className="inline-block w-[2px] h-5 bg-blue-600 ml-1 animate-pulse align-middle"></span>
      )}
    </div>
  );
};

const Founder: React.FC = () => {
  const contentSegments: TextSegment[] = [
    { text: "I’ve seen the difference between " },
    { text: "Busy", className: "text-red-600 font-bold" },
    { text: " and " },
    { text: "Profitable", className: "text-green-600 font-bold" },
    { text: ".\n\n" },
    
    { text: "I previously co-founded a tech platform serving " },
    { text: "1.6 million users", className: "font-bold text-slate-900" },
    { text: ". You don't reach that scale by working harder. You reach it by building systems that work for you.\n\n" },
    
    { text: "Most local business owners are " },
    { text: "intimidated by AI", className: "font-bold text-slate-900" },
    { text: ". They think it's just a buzzword. It's not. It is the difference between a " },
    { text: "business that owns you", className: "font-bold text-red-600" },
    { text: ", and a " },
    { text: "business you own", className: "font-bold text-green-600" },
    { text: ". I built MinAI to make that power accessible to everyone." },
  ];

  return (
    <section className="py-24 bg-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#fdfbf7] p-8 md:p-16 rounded-sm shadow-2xl shadow-slate-900/10 relative transform rotate-1"
        >
          {/* Paper visual detail: subtle texture */}
          <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 mix-blend-multiply rounded-sm"></div>

          {/* Letter Header */}
          <div className="border-b-2 border-slate-100 pb-6 mb-8 flex justify-between items-end">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">From the desk of</div>
            <div className="text-slate-900 font-bold text-lg tracking-tight">Minh Mac</div>
          </div>

          {/* Letter Body */}
          <div className="text-lg md:text-xl leading-relaxed font-medium text-slate-700 min-h-[300px]">
             <TypewriterEffect segments={contentSegments} startDelay={500} />
          </div>

          {/* Signature Area */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 4, duration: 1 }} // Delays signature until text is mostly likely done
            className="mt-12 pt-6"
          >
            <div className="font-handwriting text-4xl text-blue-700 rotate-[-2deg] mb-2">
              Minh Mac
            </div>
            <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">
              Founder of MinAI
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;