import { motion } from 'framer-motion';
import { Trophy, Code, Target, ExternalLink, Swords } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy size={28} />,
    stat: '1846',
    label: 'LeetCode Rating',
    sub: 'Knight • Top 6.14%',
    href: 'https://leetcode.com/u/Anashva_07/',
    color: 'primary',
  },
  {
    icon: <Code size={28} />,
    stat: '1273+',
    label: 'Problems Solved',
    sub: '1232 Java • 40 C++ • 1 SQL',
    href: 'https://leetcode.com/u/Anashva_07/',
    color: 'primary',
  },
  {
    icon: <Swords size={28} />,
    stat: '1207',
    label: 'Codeforces Max',
    sub: 'Pupil • 67 Contests',
    href: 'https://codeforces.com/profile/Anashva_Singh',
    color: 'accent',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-bold mb-12 text-center"
        >
          Competitive <span className="gradient-text">Achievements</span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {achievements.map((a) => (
            <motion.a
              key={a.label}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ y: -8, scale: 1.03 }}
              className={`group relative text-center rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 ${
                a.color === 'accent' ? 'glow-accent hover:border-accent/40' : 'glow-border hover:border-primary/40'
              } transition-all duration-300 cursor-pointer overflow-hidden`}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                a.color === 'accent'
                  ? 'bg-gradient-to-b from-accent/5 to-transparent'
                  : 'bg-gradient-to-b from-primary/5 to-transparent'
              }`} />

              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  a.color === 'accent' ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'
                }`}>
                  {a.icon}
                </div>
                <div className="font-display text-4xl font-bold gradient-text mb-1">{a.stat}</div>
                <div className="font-medium text-foreground text-sm flex items-center justify-center gap-1">
                  {a.label}
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="font-mono text-xs text-muted-foreground mt-1">{a.sub}</div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
