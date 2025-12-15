import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Award, Code, Trophy, Target } from 'lucide-react';

const experiences = [
  {
    type: 'internship',
    icon: Briefcase,
    title: 'Cybersecurity Intern',
    organization: 'SecureTech Solutions',
    period: 'Jun 2024 - Aug 2024',
    description: 'Conducted vulnerability assessments and penetration testing for web applications. Implemented security best practices and documented findings.',
    highlights: [
      'Performed security audits on 15+ web applications',
      'Identified and reported 40+ vulnerabilities',
      'Contributed to security documentation',
    ],
  },
  {
    type: 'learning',
    icon: Code,
    title: 'Full-Stack Development Bootcamp',
    organization: 'Self-Paced Learning',
    period: 'Jan 2024 - May 2024',
    description: 'Intensive program covering modern web development, from frontend frameworks to backend APIs and databases.',
    highlights: [
      'Built 10+ full-stack applications',
      'Mastered Flask, React, and PostgreSQL',
      'Deployed applications on cloud platforms',
    ],
  },
  {
    type: 'achievement',
    icon: Trophy,
    title: 'Hackathon Winner - Smart City Challenge',
    organization: 'TechFest 2024',
    period: 'Mar 2024',
    description: 'Led a team of 4 to develop an IoT-based smart parking solution. Won first place among 50+ teams.',
    highlights: [
      'Developed IoT sensor integration',
      'Created real-time web dashboard',
      'Presented solution to industry judges',
    ],
  },
  {
    type: 'certification',
    icon: Award,
    title: 'Google Cloud Skills Boost',
    organization: 'Google Cloud',
    period: '2023 - 2024',
    description: 'Completed multiple hands-on labs and learning paths in cloud computing, covering compute, storage, networking, and security.',
    highlights: [
      'Completed 30+ cloud labs',
      'Earned multiple skill badges',
      'Deployed scalable cloud applications',
    ],
  },
  {
    type: 'internship',
    icon: Briefcase,
    title: 'Android Development Intern',
    organization: 'MobileFirst Labs',
    period: 'Dec 2023 - Feb 2024',
    description: 'Developed features for Android applications, worked with Firebase integration, and implemented Material Design principles.',
    highlights: [
      'Built 5+ app features',
      'Integrated Firebase authentication',
      'Improved app performance by 30%',
    ],
  },
  {
    type: 'learning',
    icon: GraduationCap,
    title: 'Machine Learning Fundamentals',
    organization: 'Online Certification Program',
    period: 'Sep 2023 - Dec 2023',
    description: 'Comprehensive program covering ML algorithms, model training, evaluation, and deployment.',
    highlights: [
      'Implemented 15+ ML algorithms',
      'Built predictive models',
      'Published projects on GitHub',
    ],
  },
];

const typeStyles: Record<string, { bg: string; text: string; border: string }> = {
  internship: { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/30' },
  learning: { bg: 'bg-secondary/10', text: 'text-secondary', border: 'border-secondary/30' },
  achievement: { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent/30' },
  certification: { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/30' },
};

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 bg-surface-elevated relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="mb-4">
              Experience & <span className="text-primary">Learning Journey</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
            <p className="max-w-2xl mx-auto">
              Continuous growth through internships, self-learning, hackathons, and hands-on projects
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

              {experiences.map((exp, index) => {
                const styles = typeStyles[exp.type];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="relative mb-12 md:ml-20"
                  >
                    {/* Icon */}
                    <div className={`absolute -left-20 top-0 w-16 h-16 ${styles.bg} rounded-full border-4 border-background flex items-center justify-center hidden md:flex`}>
                      <exp.icon className={styles.text} size={24} />
                    </div>

                    {/* Content Card */}
                    <div className={`p-6 bg-surface border ${styles.border} rounded-lg hover:border-${exp.type === 'internship' ? 'primary' : exp.type === 'learning' ? 'secondary' : 'accent'}/50 transition-all`}>
                      {/* Mobile Icon */}
                      <div className={`md:hidden w-12 h-12 ${styles.bg} rounded-lg flex items-center justify-center mb-4`}>
                        <exp.icon className={styles.text} size={20} />
                      </div>

                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div>
                          <h4 className="mb-1">{exp.title}</h4>
                          <p className="text-text-secondary text-sm">{exp.organization}</p>
                        </div>
                        <span className={`text-sm ${styles.text} px-3 py-1 ${styles.bg} rounded-full whitespace-nowrap self-start`}>
                          {exp.period}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mb-4 text-sm">{exp.description}</p>

                      {/* Highlights */}
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                            <Target size={16} className={`${styles.text} mt-0.5 flex-shrink-0`} />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Achievements Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { icon: Briefcase, label: 'Internships', value: '2+', color: 'primary' },
              { icon: Award, label: 'Certifications', value: '10+', color: 'secondary' },
              { icon: Trophy, label: 'Hackathons', value: '5+', color: 'accent' },
            ].map((item) => (
              <div key={item.label} className="p-6 bg-surface border border-border rounded-lg text-center hover:border-primary/30 transition-all">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-${item.color}/10 flex items-center justify-center`}>
                  <item.icon className={`text-${item.color}`} size={24} />
                </div>
                <div className={`text-3xl mb-2 text-${item.color}`}>{item.value}</div>
                <div className="text-sm text-text-muted">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
