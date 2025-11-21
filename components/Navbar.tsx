import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const element = document.getElementById(targetId);
    if (element) {
      // 55px provides the requested offset
      const headerOffset = 55;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      // Use setTimeout to ensure menu closing doesn't interfere with scroll on mobile
      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }, 10);
    }
  };

  const navItems = [
    { name: 'The Solution', id: 'solution' },
    { name: 'Features', id: 'product' },
    { name: 'Pricing', id: 'pricing' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-lg shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Area */}
          <a 
            href="#" 
            onClick={scrollToTop}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="relative h-10 flex items-center font-bold text-2xl tracking-tighter text-slate-900">
              <span className="text-blue-600 transition-transform duration-300 group-hover:-translate-y-0.5">Min</span>
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">AI</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors relative group cursor-pointer"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="relative overflow-hidden bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all active:scale-95 group">
              <span className="relative z-10">Book A Demo</span>
              <div className="absolute inset-0 h-full w-full bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-900 p-2 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 origin-left"
          style={{ scaleX }}
        />

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden absolute w-full shadow-xl"
            >
              <div className="flex flex-col px-6 py-6 gap-4">
                {navItems.map((item) => (
                  <a 
                    key={item.name}
                    href={`#${item.id}`} 
                    onClick={(e) => handleNavClick(e, item.id)} 
                    className="text-slate-600 font-medium py-3 border-b border-slate-50 block w-full"
                  >
                    {item.name}
                  </a>
                ))}
                <button className="bg-blue-600 text-white w-full py-3 rounded-lg font-semibold mt-2 hover:bg-blue-700 transition-colors">
                  Book A Demo
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;