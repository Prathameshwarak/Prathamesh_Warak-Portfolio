import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Globe, Smartphone, Shield, Brain, Database, Terminal, GitBranch } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    color: 'primary',
    skills: ['Python', 'Java', 'C/C++ Basics', 'JavaScript', 'SQL'],
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    color: 'accent',
    skills: ['Network Security', 'Penetration Testing', 'Vulnerability Assessment', 'Cryptography', 'Security Best Practices'],
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    color: 'secondary',
    skills: ['ML Fundamentals', 'Data Analysis', 'TensorFlow Basics', 'NumPy/Pandas', 'Model Training'],
  },
  {
    title: 'Android Development',
    icon: Smartphone,
    color: 'primary',
    skills: ['Android Studio', 'Java/Kotlin', 'Mobile UI/UX', 'Firebase', 'API Integration'],
  },
  {
    title: 'Web Development',
    icon: Globe,
    color: 'secondary',
    skills: ['Flask', 'HTML/CSS', 'React Basics', 'RESTful APIs', 'Responsive Design'],
  },
  {
    title: 'Tools & Technologies',
    icon: Terminal,
    color: 'accent',
    skills: ['Git/GitHub', 'Linux', 'Docker Basics', 'Cloud (GCP)', 'VS Code', 'Postman','AWS Basics'],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const colorMap: Record<string, string> = {
    primary: 'border-primary/30 hover:border-primary/70 hover:bg-primary/5',
    secondary: 'border-secondary/30 hover:border-secondary/70 hover:bg-secondary/5',
    accent: 'border-accent/30 hover:border-accent/70 hover:bg-accent/5',
  };

  const iconColorMap: Record<string, string> = {
    primary: 'bg-primary/10 text-primary group-hover:bg-primary/20',
    secondary: 'bg-secondary/10 text-secondary group-hover:bg-secondary/20',
    accent: 'bg-accent/10 text-accent group-hover:bg-accent/20',
  };

  return (
    <section id="skills" className="py-32 bg-surface-elevated relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(0, 217, 255, 0.3) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="mb-4">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
            <p className="max-w-2xl mx-auto">
              A diverse skill set built through hands-on projects, self-learning, and real-world applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`group p-6 bg-surface border rounded-lg transition-all ${colorMap[category.color]}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${iconColorMap[category.color]}`}>
                    <category.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2">{category.title}</h4>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-background/50 border border-border rounded text-sm text-text-secondary hover:text-text-primary hover:border-border-hover transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: 'Languages', value: '5+' },
              { label: 'Projects', value: '15+' },
              { label: 'Technologies', value: '20+' },
              { label: 'Learning Hours', value: '1000+' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-surface border border-border rounded-lg">
                <div className="text-3xl mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
