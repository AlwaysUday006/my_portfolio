import { motion } from 'framer-motion';
import { FolderCode, ExternalLink } from 'lucide-react';
import { Github } from './BrandIcons';

interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
}

const projects: ProjectItem[] = [
  {
    title: '🔐 Vigenère Cipher Tool',
    description: 'A Python-based cryptographic tool utilizing the Vigenère cipher for interactive text encoding and decoding.',
    tags: ['Python', 'Streamlit', 'Cryptography'],
    githubUrl: 'https://github.com/AlwaysUday006/cipher_project',
    demoUrl: 'https://alwaysuday006-cipher-project-app-uqhd8o.streamlit.app/'
  },
  {
    title: '💳 Luhn Validator',
    description: 'An interactive validator script that implements the Luhn algorithm to check credit card and identification numbers.',
    tags: ['Python', 'Streamlit', 'Validation'],
    githubUrl: 'https://github.com/AlwaysUday006/luhn_validator_project',
    demoUrl: 'https://alwaysuday006-luhn-algorithm-app-056.streamlit.app/'
  },
  {
    title: '💰 Expense Tracker',
    description: 'A modern tracking application enabling users to log, tag, and analyze daily expenses via an interactive dashboard.',
    tags: ['Python', 'Streamlit', 'Data Logs'],
    githubUrl: 'https://github.com/AlwaysUday006/expense_tracker',
    demoUrl: 'https://alwaysuday006-expense-tracker-app-hxkusf.streamlit.app/'
  },
  {
    title: '📝 Case Converter Utility',
    description: 'A utility that parses and converts PascalCase or camelCase formatted strings into clean PEP 8 compliant snake_case.',
    tags: ['Python', 'Streamlit', 'Strings'],
    githubUrl: 'https://github.com/AlwaysUday006/PascalCase-to-snake_case-Converter.git',
    demoUrl: 'https://alwaysuday006-pascalcase-to-snake-case-converter-app-zyccqn.streamlit.app/'
  },
  {
    title: '🧮 Square Root Finder',
    description: 'An educational algorithm visualizer calculating numerical square roots to custom decimal positions using the Bisection Method.',
    tags: ['Python', 'Streamlit', 'Algorithms'],
    githubUrl: 'https://github.com/AlwaysUday006/sqrt_by_bisection.git',
    demoUrl: 'https://alwaysuday006-sqrt-by-bisection-app-o4nyqa.streamlit.app/'
  },
  {
    title: '🧮 Arithmetic Formatter',
    description: 'Neatly reformats multi-line math problems side-by-side with vertical alignment structures and togglable answers.',
    tags: ['Python', 'Streamlit', 'Mathematics'],
    githubUrl: 'https://github.com/AlwaysUday006/arithmetic_formatter.git',
    demoUrl: 'https://alwaysuday006-arithmetic-formatter-app-y3tbrj.streamlit.app/'
  },
  {
    title: '🔐 Password Generator',
    description: 'A randomized key utility that generates customizable, cryptographically strong passwords based on rules.',
    tags: ['Python', 'Streamlit', 'Security'],
    githubUrl: 'https://github.com/AlwaysUday006/password_generator.git',
    demoUrl: 'https://alwaysuday006-password-generator-app-uj6mmb.streamlit.app/'
  },
  {
    title: '🧭 Dijkstra Path Finder',
    description: 'An interactive graphs visualizer that builds node path flows and calculates shortest distance solutions using Dijkstra\'s algorithm.',
    tags: ['Python', 'Streamlit', 'Graph Theory', 'Dijkstra'],
    githubUrl: 'https://github.com/AlwaysUday006/shortest_path_algorithm.git',
    demoUrl: 'https://alwaysuday006-shortest-path-algorithm-app-xf0tpb.streamlit.app/'
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <section id="project" className="py-24 px-6 lg:px-12 relative border-t border-white/5 bg-[#07070a]">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[160px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <FolderCode className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-semibold text-cyan-400 tracking-widest uppercase">Projects</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-white tracking-tight leading-none mb-4">
            Featured <span className="italic text-gradient">Work</span>
          </h2>
          <p className="text-sm md:text-base text-slate-400 max-w-lg leading-relaxed">
            A showcase of Python-based utilities, mathematics utilities, and interactive Streamlit applications demonstrating algorithmic problem solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="glassmorphism rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/30 hover:bg-white/5 transition-all duration-500 group shadow-lg shadow-black/20"
            >
              <div>
                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase font-semibold tracking-wider px-2 py-1 rounded bg-white/5 border border-white/5 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions Row */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg border border-white/10 hover:border-white/30 text-xs text-slate-300 hover:text-white font-medium flex items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Source Code
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg text-xs text-black font-semibold bg-white hover:bg-slate-100 flex items-center justify-center gap-1.5 transition-all duration-300 shadow-md shadow-white/5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
