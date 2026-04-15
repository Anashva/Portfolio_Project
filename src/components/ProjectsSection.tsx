import { motion } from 'framer-motion';
import { Shield, ShoppingCart, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Real-Time Women Safety & Crime Alert Platform',
    date: 'August 2025',
    icon: <Shield size={24} />,
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Google Maps API'],
    github: 'https://github.com/Anashva/Women-Safety-with-Real-Time-Tracking-and-Emergency-Alerts',
    points: [
      'Real-time emergency alerts to nearby police stations with location tracking',
      'Automatic fallback to next closest station if unavailable',
      'Single-click trigger via sensors or buttons, always-running on device',
      'Proximity-based alert prioritization for fastest response',
    ],
  },
  {
    title: 'E-Commerce Web App',
    date: 'March 2025',
    icon: <ShoppingCart size={24} />,
    tech: ['React', 'Node.js', 'Express.js', 'REST APIs', 'MongoDB'],
    github: 'https://github.com/Anashva/ECommerce',
    points: [
      'Full-stack e-commerce with product catalog, auth, cart & order management',
      'Dynamic cart with real-time updates and secure checkout',
      'Backend REST APIs with full CRUD operations',
      'Responsive UI for seamless cross-device experience',
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-bold mb-12 text-center"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 sm:p-8 glow-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      {p.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-foreground">{p.title}</h3>
                      <p className="font-mono text-xs text-muted-foreground">{p.date}</p>
                    </div>
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 text-xs font-mono"
                  >
                    <Github size={14} />
                    Code
                    <ExternalLink size={10} />
                  </a>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map(t => (
                    <span key={t} className="font-mono text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2">
                  {p.points.map((pt, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1 shrink-0">▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
