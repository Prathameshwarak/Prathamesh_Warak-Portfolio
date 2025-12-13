import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block mb-4 px-4 py-2 border border-primary/30 rounded-full bg-primary/5"
          >
            <span className="text-primary text-sm">Prathamesh Sitaram Warak</span>
          </motion.div>

          <h1 className="mb-6 bg-gradient-to-r from-text-primary via-primary to-text-primary bg-clip-text text-transparent">
            Building the Future,
            <br />
            One Line at a Time
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8 space-y-2"
          >
            <p className="text-xl md:text-2xl text-text-secondary">
              Python Developer | Cybersecurity & AI Enthusiast
            </p>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Problem-solver with a tech-driven mindset. Passionate about crafting secure, intelligent solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-primary text-background rounded-lg transition-all hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/50 flex items-center gap-2"
            >
              View Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all flex items-center gap-2"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        {/* Floating Code Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-32 left-12 hidden lg:block opacity-30"
        >
          <div className="px-4 py-2 bg-surface border border-primary/30 rounded font-mono text-sm text-primary">
            {'{ code }'}
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 right-12 hidden lg:block opacity-30"
        >
          <div className="px-4 py-2 bg-surface border border-secondary/30 rounded font-mono text-sm text-secondary">
            {'<AI />'}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
