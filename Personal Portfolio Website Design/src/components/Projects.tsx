import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Github, ExternalLink, Lock, Brain, Globe, Smartphone, Shield, Database } from 'lucide-react';

const projects = [
  {
    title: 'SecureVault - Password Manager',
    description: 'A secure, locally-encrypted password manager with AES-256 encryption. Implements master password authentication and secure storage with zero-knowledge architecture.',
    tech: ['Python', 'Cryptography', 'Flask', 'SQLite'],
    icon: Lock,
    color: 'primary',
    category: 'Cybersecurity',
  },
  {
    title: 'SmartPredict - ML Price Forecaster',
    description: 'Machine learning model for predicting product prices using historical data. Features data preprocessing, feature engineering, and model comparison.',
    tech: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
    icon: Brain,
    color: 'secondary',
    category: 'AI/ML',
  },
  {
    title: 'TaskFlow - Project Management App',
    description: 'Full-stack web application for team task management with real-time updates, user authentication, and role-based access control.',
    tech: ['Flask', 'React', 'PostgreSQL', 'REST API'],
    icon: Globe,
    color: 'accent',
    category: 'Web Development',
  },
  {
    title: 'CampusConnect - Student Network',
    description: 'Android app connecting students for collaboration. Features include chat, file sharing, event management, and course discussions.',
    tech: ['Java', 'Android Studio', 'Firebase', 'Material Design'],
    icon: Smartphone,
    color: 'primary',
    category: 'Android',
  },
  {
    title: 'NetGuard - Network Scanner',
    description: 'Python-based network security tool for scanning vulnerabilities, port analysis, and network mapping. Includes reporting and recommendations.',
    tech: ['Python', 'Scapy', 'Nmap', 'Security Tools'],
    icon: Shield,
    color: 'secondary',
    category: 'Cybersecurity',
  },
  {
    title: 'DataViz Dashboard',
    description: 'Interactive data visualization dashboard for analyzing datasets. Features dynamic charts, filters, and export functionality.',
    tech: ['Python', 'Plotly', 'Pandas', 'Dash'],
    icon: Database,
    color: 'accent',
    category: 'Data Analysis',
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const colorMap: Record<string, { border: string; bg: string; text: string; glow: string }> = {
    primary: { 
      border: 'border-primary/30', 
      bg: 'bg-primary/10', 
      text: 'text-primary',
      glow: 'hover:shadow-lg hover:shadow-primary/20'
    },
    secondary: { 
      border: 'border-secondary/30', 
      bg: 'bg-secondary/10', 
      text: 'text-secondary',
      glow: 'hover:shadow-lg hover:shadow-secondary/20'
    },
    accent: { 
      border: 'border-accent/30', 
      bg: 'bg-accent/10', 
      text: 'text-accent',
      glow: 'hover:shadow-lg hover:shadow-accent/20'
    },
  };

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
            <p className="max-w-2xl mx-auto">
              Real-world solutions built to solve problems and demonstrate technical proficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const colors = colorMap[project.color];
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`group p-6 bg-surface border ${colors.border} rounded-lg hover:border-${project.color} transition-all ${colors.glow}`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center`}>
                      <project.icon className={colors.text} size={24} />
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-surface-elevated rounded transition-colors">
                        <Github size={18} className="text-text-muted hover:text-text-primary transition-colors" />
                      </button>
                      <button className="p-2 hover:bg-surface-elevated rounded transition-colors">
                        <ExternalLink size={18} className="text-text-muted hover:text-text-primary transition-colors" />
                      </button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className={`text-xs px-2 py-1 ${colors.bg} ${colors.text} rounded`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h4 className="mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm mb-4 text-text-muted">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-background border border-border rounded text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <div className="mt-6">
                    <button className={`w-full py-2 border ${colors.border} ${colors.text} rounded hover:bg-${project.color}/10 transition-all flex items-center justify-center gap-2 group/btn`}>
                      View Details
                      <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* View All Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <button className="group px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary hover:text-background transition-all flex items-center gap-2 mx-auto">
              View All Projects on GitHub
              <Github size={20} className="group-hover:rotate-12 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
