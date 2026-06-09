import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseActive, setMouseActive] = useState(false);

  // Monitor scroll for Scroll-to-Top visibility
  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  // Monitor mouse position for ambient follower glow (only for pointer devices)
  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setMouseActive(true);
    };

    const handleMouseLeave = () => {
      setMouseActive(false);
    };

    window.addEventListener('mousemove', updateMouse);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMouse);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen bg-[#07070a] overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Ambient Mouse Follower Ring (Hidden on touch devices, runs on GPU) */}
      <AnimatePresence>
        {mouseActive && (
          <motion.div
            className="hidden md:block fixed pointer-events-none z-50 w-8 h-8 rounded-full border border-cyan-500/30 -translate-x-1/2 -translate-y-1/2"
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
              scale: 1
            }}
            exit={{ opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 15,
              mass: 0.2
            }}
          />
        )}
      </AnimatePresence>

      {/* Floating Header */}
      <Navbar />

      {/* Landing Sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* High-end Footer */}
      <Footer />

      {/* Back to Top Floating Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            onClick={handleScrollTop}
            className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full glassmorphism text-slate-300 hover:text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl border border-white/10 hover:border-cyan-500/30 cursor-pointer focus-visible:outline-2 focus-visible:outline-cyan-500"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
