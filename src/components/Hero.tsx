import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, FolderKanban, MapPin, Briefcase } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import heroImg from '../assets/hero.png';

const words = ["Python Developer", "AI Project Builder", "Algorithm Enthusiast", "B.Tech Student"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  // Typing effect logic
  useEffect(() => {
    let timer: number;
    const currentWord = words[wordIndex];

    const typeSpeed = isDeleting ? 40 : 80;

    const handleTyping = () => {
      if (!isDeleting && charIndex < currentWord.length) {
        setDisplayedText(currentWord.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(currentWord.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else {
        setIsDeleting(!isDeleting);
        if (isDeleting) {
          setWordIndex(prev => (prev + 1) % words.length);
        }
      }
    };

    if (!isDeleting && charIndex === currentWord.length) {
      // Pause at full word
      timer = window.setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex === 0) {
      // Pause when deleted
      timer = window.setTimeout(() => setIsDeleting(false), 500);
    } else {
      timer = window.setTimeout(handleTyping, typeSpeed);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Motion container definitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 px-6 lg:px-12 relative overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[150px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Profile Image (First on mobile, second on desktop) */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="relative group cursor-pointer"
          >
            {/* Ambient Border Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 to-blue-500/30 opacity-70 group-hover:opacity-100 blur transition-all duration-700" />
            
            {/* Main Picture Frame */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] w-72 md:w-80 border border-white/10 shadow-2xl bg-[#0e0e14]">
              <img
                src="https://stalwart-baklava-8ed433.netlify.app/images/img2.jpg"
                alt="Uday Deore"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = heroImg;
                }}
              />
              {/* Overlay shadow layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>

        {/* Text Content Area */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 text-left"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-6 shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-slate-300 tracking-wide uppercase">B.Tech Student & Python Enthusiast</span>
          </motion.div>

          {/* Heading with Serif Title */}
          <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05] mb-4">
            Hi, I'm <span className="text-gradient">Uday</span>
          </motion.h1>

          {/* Typing Terminal-style Line */}
          <motion.div variants={itemVariants} className="h-10 md:h-12 flex items-center mb-6">
            <span className="text-xl md:text-2xl lg:text-3xl text-cyan-400 font-mono tracking-tight font-medium">
              {displayedText}
              <span className="inline-block w-1.5 h-6 ml-1 bg-cyan-400 animate-[pulse_0.8s_infinite] align-middle" />
            </span>
          </motion.div>

          {/* Intro Paragraph */}
          <motion.p variants={itemVariants} className="text-base md:text-lg text-slate-400 leading-relaxed max-w-xl mb-8">
            I focus on <strong className="text-white font-semibold">Python programming</strong> and <strong className="text-white font-semibold">AI-related projects</strong>, building functional applications that bridge mathematical logic and clean web UI.
          </motion.p>

          {/* Location & Status details */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400 font-medium mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span>Available for Collaborations</span>
            </div>
          </motion.div>

          {/* Action Callouts */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
            <button
              onClick={() => handleScrollTo('contact')}
              className="btn-premium px-8 py-4 bg-white text-black font-semibold rounded-full flex items-center justify-center gap-2 text-sm shadow-xl shadow-white/5 cursor-pointer hover:bg-slate-100"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </button>
            <button
              onClick={() => handleScrollTo('project')}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-full flex items-center justify-center gap-2 text-sm transition-all duration-300 shadow-lg cursor-pointer"
            >
              <FolderKanban className="w-4 h-4" />
              View Projects
            </button>
          </motion.div>

          {/* Follow Section */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 border-t border-white/5 pt-6">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Follow me:</span>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/AlwaysUday006"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/uday-deore-5949bb32a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:udaydeore006@gmail.com"
                className="w-10 h-10 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
                aria-label="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
