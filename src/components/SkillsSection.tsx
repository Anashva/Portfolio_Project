import { motion } from 'framer-motion';

const skillCategories = [
  { title: 'Languages', skills: ['Java', 'Python', 'C', 'JavaScript (ES6+)'], icon: '⚡' },
  { title: 'Frameworks', skills: ['React', 'Node.js', 'Express.js', 'Bootstrap'], icon: '🔧' },
  { title: 'Web Tech', skills: ['HTML', 'CSS', 'jQuery', 'REST APIs', 'Netlify'], icon: '🌐' },
  { title: 'Databases', skills: ['MongoDB', 'MySQL', 'PostgreSQL'], icon: '🗄️' },
  { title: 'Tools', skills: ['VS Code', 'Git/GitHub', 'Postman', 'IntelliJ'], icon: '🛠️' },
  { title: 'Core CS', skills: ['OOP', 'DSA'], icon: '🧠' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-bold mb-12 text-center"
        >
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={item}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 glow-border hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="relative z-10">
                <div className="text-2xl mb-3">{cat.icon}</div>
                <h3 className="font-display font-semibold text-foreground mb-3">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(s => (
                    <span key={s} className="font-mono text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border/50 hover:border-primary/30 hover:text-primary transition-colors cursor-default">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
