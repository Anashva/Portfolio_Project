import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ChevronDown, ExternalLink } from 'lucide-react';

const socials = [
  { icon: <Github size={20} />, href: 'https://github.com/Anashva', label: 'GitHub' },
  { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/anashva-singh', label: 'LinkedIn' },
];

const profiles = [
  { label: 'LeetCode', href: 'https://leetcode.com/u/Anashva_07/', stat: '1846 Rating' },
  { label: 'Codeforces', href: 'https://codeforces.com/profile/Anashva_Singh', stat: '1207 Max' },
];

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl"
      >
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-sm tracking-widest uppercase text-primary mb-4"
        >
          Full-Stack Developer & Competitive Programmer
        </motion.p>

        <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-tight mb-6">
          <span className="text-foreground">Hi, I'm </span>
          <motion.span
            className="gradient-text inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Anashva Singh
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto mb-8"
        >
          B.Tech CSE student at GLA University. Building impactful web applications
          and solved 1200+ problems across competitive programming platforms.
        </motion.p>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="mailto:anashva2406@gmail.com"
            className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300 hover:scale-105"
          >
            <Mail size={18} /> Contact Me
          </a>
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-110 glow-border"
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10"
      >
        <ChevronDown className="text-muted-foreground animate-bounce" size={28} />
      </motion.div>
    </section>
  );
}
