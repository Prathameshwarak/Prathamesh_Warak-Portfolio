import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Brain, Shield, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Problem Solver',
    description: 'Crafting efficient solutions through clean, scalable code',
  },
  {
    icon: Brain,
    title: 'AI Enthusiast',
    description: 'Exploring machine learning and intelligent systems',
  },
  {
    icon: Shield,
    title: 'Security Focused',
    description: 'Building with security and best practices in mind',
  },
  {
    icon: Rocket,
    title: 'Growth Mindset',
    description: 'Constantly learning and adapting to new technologies',
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="mb-6">
                Software Engineering Student <span className="text-primary">| BE-IT</span>
              </h3>
              <div className="space-y-4">
                <p>
                  I'm a technology enthusiast pursuing Bachelor of Engineering in Information Technology,
                  with a strong focus on building real-world solutions that matter.
                </p>
                <p>
                  My journey spans across Python development, cybersecurity, web and Android development,
                  and the fundamentals of AI/ML. I believe in learning by doing — every project is an
                  opportunity to solve problems and push boundaries.
                </p>
                <p>
                  Driven by curiosity and a growth mindset, I'm constantly exploring new technologies,
                  contributing to open-source, and preparing myself for the next generation of tech challenges.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-surface border border-primary/30 rounded-lg">
                  <span className="text-primary">🎯 Tech-Driven</span>
                </div>
                <div className="px-4 py-2 bg-surface border border-secondary/30 rounded-lg">
                  <span className="text-secondary">🚀 Future-Ready</span>
                </div>
                <div className="px-4 py-2 bg-surface border border-accent/30 rounded-lg">
                  <span className="text-accent">💡 Innovation-Focused</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="p-6 bg-surface border border-border rounded-lg hover:border-primary/50 transition-all group"
                >
                  <div className="w-12 h-12 mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <h4 className="mb-2 text-lg">{item.title}</h4>
                  <p className="text-sm text-text-muted">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
