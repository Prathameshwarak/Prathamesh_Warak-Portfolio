import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-2xl">
                <span className="text-primary">&lt;</span>
                Prathamesh Warak
                <span className="text-primary">/&gt;</span>
              </span>
            </div>
            <p className="text-text-muted text-sm">
              Software Engineering Student passionate about building secure, intelligent solutions for tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-text-muted hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/Prathameshwarak"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-surface-elevated border border-border rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/prathamesh-warak/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-surface-elevated border border-border rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:Prathameshwarak@protonmail.com"
                className="w-10 h-10 bg-surface-elevated border border-border rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-text-muted text-sm">
              Open to internships, collaborations, and exciting projects.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            © {currentYear} All rights reserved.
          </p>
          <p className="text-sm text-text-muted flex items-center gap-2">
            Crafted with <Heart size={16} className="text-primary fill-primary" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
