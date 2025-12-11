import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { FileText, Phone, Mail, CheckCircle, ArrowDown, TrendingUp, Users, Bell, Calendar, MessageSquare } from 'lucide-react';

const random = (min: number, max: number) => Math.random() * (max - min) + min;

const ChaosIcon: React.FC<{ index: number }> = ({ index }) => {
  const config = useMemo(() => {
    const side = Math.floor(random(0, 4)); // 0: top, 1: right, 2: bottom, 3: left
    let startX = 0, startY = 0;

    // 1. Start Offscreen (The Threat)
    // Adjusted to -10/110 to make them appear in viewport slightly faster
    switch (side) {
      case 0: startX = random(10, 90); startY = -10; break; // Top
      case 1: startX = 110; startY = random(10, 90); break; // Right
      case 2: startX = random(10, 90); startY = 110; break; // Bottom
      case 3: startX = -10; startY = random(10, 90); break; // Left
    }

    // 2. Creep to Center (The Pressure)
    const centerX = random(35, 65);
    const centerY = random(35, 65);

    // 3. Bounce Randomly (The Chaos)
    const keyframesX = [`${startX}%`, `${centerX}%`];
    const keyframesY = [`${startY}%`, `${centerY}%`];
    
    // Add random bounces after reaching center
    for (let i = 0; i < 8; i++) {
      keyframesX.push(`${random(5, 95)}%`);
      keyframesY.push(`${random(5, 95)}%`);
    }

    // Icon selection
    const icons = [FileText, Phone, Mail, Bell, Calendar, MessageSquare];
    const Icon = icons[index % icons.length];

    return {
      x: keyframesX,
      y: keyframesY,
      Icon,
      rotation: random(0, 360),
      size: random(20, 36),
      duration: random(45, 60), // Speed remains perfect (slow)
      delay: 0 // No wait time
    };
  }, [index]);

  return (
    <motion.div
      className="absolute text-slate-300/60 pointer-events-none z-0"
      initial={{ left: config.x[0], top: config.y[0], opacity: 0 }}
      animate={{
        left: config.x,
        top: config.y,
        opacity: [0, 1, 1, 1, 1], // Fade in as they enter
        rotate: [config.rotation, config.rotation + 180, config.rotation + 360]
      }}
      transition={{
        duration: config.duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
        delay: config.delay
      }}
    >
      <config.Icon size={config.size} />
    </motion.div>
  );
};

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // PHYSICS SMOOTHING: This is the magic sauce for removing jerkiness
  // Instead of mapping 1:1 to scroll, we map to a spring that follows the scroll
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001
  });

  // Animation Sequence
  const hookOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const hookScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const hookY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  
  // Dashboard Animations - Using smoothProgress instead of scrollYProgress
  // Adding Scale and Rotation for a "Modern 3D" feel
  const dashboardY = useTransform(smoothProgress, [0.15, 0.45], ["100vh", "0vh"]);
  const dashboardScale = useTransform(smoothProgress, [0.15, 0.45], [0.85, 1]);
  const dashboardRotateX = useTransform(smoothProgress, [0.15, 0.45], [15, 0]); // Starts tilted back
  const dashboardOpacity = useTransform(smoothProgress, [0.15, 0.3], [0, 1]);

  const contentOpacity = useTransform(smoothProgress, [0.5, 0.7], [0, 1]);
  const contentY = useTransform(smoothProgress, [0.5, 0.7], [50, 0]);

  const chaosOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[550vh] bg-slate-50">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center perspective-1000">
        
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
           <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-200/20 rounded-full blur-[120px]" />
           <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-200/20 rounded-full blur-[120px]" />
        </div>

        {/* PHASE 1: THE HOOK */}
        <motion.div 
          style={{ opacity: hookOpacity, scale: hookScale, y: hookY }}
          className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 text-center"
        >
             {/* Chaos Visuals (Creeping Chaos) */}
             <motion.div style={{ opacity: chaosOpacity }} className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <ChaosIcon key={i} index={i} />
                ))}
             </motion.div>

             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
               <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
               The Entrepreneur's Trap
             </div>
             
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 tracking-tighter mb-6 leading-[1.1]">
               You Started A Business <br className="hidden md:block" />
               To Be <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Free</span>.
             </h1>
             
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1, y: [0, 10, 0] }}
               transition={{
                 opacity: { delay: 5.5, duration: 1 },
                 y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
               }}
               className="absolute bottom-12 left-0 right-0 mx-auto w-full flex justify-center items-center gap-2 text-slate-400"
             >
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">Scroll to Activate</span>
                <ArrowDown size={20} className="text-blue-600" />
             </motion.div>
        </motion.div>

        {/* PHASE 2: THE REVEAL (DASHBOARD + CTA) */}
        {/* Added perspective to parent (in className above) and rotateX here for 3D effect */}
        <motion.div 
           style={{ 
             y: dashboardY, 
             opacity: dashboardOpacity,
             scale: dashboardScale,
             rotateX: dashboardRotateX
           }}
           className="relative z-20 flex flex-col items-center justify-center w-full max-w-6xl px-4 pt-12 md:pt-20 will-change-transform"
        >
            {/* Dashboard Card */}
            <div className="w-full bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl shadow-blue-900/20 border border-white/50 overflow-hidden ring-1 ring-slate-900/5 transform-gpu">
               {/* Header */}
               <div className="bg-slate-50/50 border-b border-slate-100 px-6 py-4 flex items-center justify-between backdrop-blur-md">
                  <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">MinAI Autopilot v2.0</div>
               </div>
               
               {/* Dashboard Content Grid */}
               <div className="p-4 md:p-8 grid md:grid-cols-3 gap-3 md:gap-6">
                   {/* Col 1: Key Metrics - Grid on mobile to save height */}
                   <div className="grid grid-cols-2 gap-3 md:block md:space-y-4">
                      <div className="p-3 md:p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                          <div className="flex items-center gap-2 mb-2">
                             <div className="p-1.5 bg-blue-100 rounded-md text-blue-600"><TrendingUp size={16} /></div>
                             <span className="text-xs font-bold text-blue-900">Revenue</span>
                          </div>
                          <div className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">$24.5k</div>
                          <div className="text-[10px] md:text-xs text-green-600 font-semibold mt-1">+12% this week</div>
                      </div>
                      <div className="p-3 md:p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                             <div className="p-1.5 bg-purple-100 rounded-md text-purple-600"><Users size={16} /></div>
                             <span className="text-xs font-bold text-slate-600">Active Leads</span>
                          </div>
                          <div className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">142</div>
                          <div className="text-[10px] md:text-xs text-slate-400 font-semibold mt-1">Auto-Nurturing</div>
                      </div>
                   </div>

                   {/* Col 2 & 3: Live Feed */}
                   <div className="md:col-span-2 bg-slate-50/50 rounded-xl border border-slate-100 p-3 md:p-5 flex flex-col">
                       <div className="flex justify-between items-center mb-4">
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Live System Activity</span>
                          <span className="flex items-center gap-1.5">
                             <span className="relative flex h-2 w-2">
                               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                               <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                             </span>
                             <span className="text-[10px] font-bold text-green-600">ONLINE</span>
                          </span>
                       </div>

                       <div className="space-y-2 md:space-y-3 flex-1 overflow-hidden relative">
                           <FeedItem delay={0.6} icon={Phone} color="green" title="Missed Call (John D.)" time="Just now" desc="AI Agent engaged via SMS. Booking link sent." />
                           <FeedItem delay={1.8} icon={Mail} color="blue" title="Reactivation Campaign" time="2m ago" desc="Client 'Sarah M.' replied 'YES'. Appointment booked." />
                           <FeedItem delay={3.0} icon={CheckCircle} color="yellow" title="Review Request" time="5m ago" desc="5-Star Review posted on Google My Business." />
                       </div>
                   </div>
               </div>
            </div>

            {/* Bottom Text & CTAs */}
            <motion.div 
               style={{ opacity: contentOpacity, y: contentY }}
               className="mt-12 md:mt-24 pb-48 md:pb-24 text-center max-w-3xl mx-auto"
            >
               <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                 So Why Are You Always Working?
               </h2>
               <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                 We install the proven growth infrastructure that allows you to <span className="font-bold text-slate-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">3x your revenue</span> while saving you <span className="font-bold text-slate-900 bg-green-50 px-2 py-0.5 rounded border border-green-100">5 hours+ per week</span> of headache.
               </p>
               
               <div className="flex flex-row items-center justify-center gap-3 w-full md:w-auto">
                 <a
                   href="https://app.minai.biz/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex-1 md:flex-none bg-blue-600 text-white px-4 py-3 md:px-8 md:py-4 rounded-xl font-bold text-sm md:text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 flex items-center justify-center gap-2 whitespace-nowrap"
                 >
                   See The System
                 </a>
                 <button className="flex-1 md:flex-none bg-white text-slate-700 border border-slate-200 px-4 py-3 md:px-8 md:py-4 rounded-xl font-bold text-sm md:text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 whitespace-nowrap">
                   Watch The Demo
                 </button>
               </div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

interface FeedItemProps {
  icon: React.ElementType;
  color: 'green' | 'blue' | 'yellow';
  title: string;
  time: string;
  desc: string;
  delay: number;
}

const FeedItem: React.FC<FeedItemProps> = ({ icon: Icon, color, title, time, desc, delay }) => (
    <motion.div 
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="flex items-start gap-3 bg-white p-2 md:p-3 rounded-lg shadow-sm border border-slate-100"
    >
        <div className={`p-2 rounded-full shrink-0 ${
            color === 'green' ? 'bg-green-100 text-green-600' : 
            color === 'blue' ? 'bg-blue-100 text-blue-600' : 
            'bg-yellow-100 text-yellow-600'
        }`}>
            <Icon size={14} />
        </div>
        <div className="flex-1 min-w-0">
            <div className="flex justify-between items-baseline mb-0.5">
                <span className="text-xs font-bold text-slate-800 truncate">{title}</span>
                <span className="text-[10px] text-slate-400 shrink-0">{time}</span>
            </div>
            <p className="text-xs text-slate-500 leading-snug">{desc}</p>
        </div>
    </motion.div>
);

export default Hero;