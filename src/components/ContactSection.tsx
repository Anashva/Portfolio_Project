import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, ExternalLink } from 'lucide-react';

const contactLinks = [
  { icon: <Mail size={18} />, text: 'anashva2406@gmail.com', href: 'mailto:anashva2406@gmail.com' },
  { icon: <Phone size={18} />, text: '+91 9696595041', href: 'tel:+919696595041' },
  { icon: <Github size={18} />, text: 'github.com/Anashva', href: 'https://github.com/Anashva' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-bold mb-6"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground mb-10"
        >
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap"
        >
          {contactLinks.map(l => (
            <a
              key={l.text}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-card/50 glow-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              <span className="text-primary">{l.icon}</span>
              <span className="font-mono text-sm">{l.text}</span>
              <ExternalLink size={12} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 mt-6 text-muted-foreground text-sm"
        >
          <MapPin size={14} /> GLA University, Mathura, UP
        </motion.div>
      </div>
    </section>
  );
}
