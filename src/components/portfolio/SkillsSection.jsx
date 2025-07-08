import { motion } from "framer-motion";

const skills = [
  { name: "React / Next.js", level: 95, color: "from-blue-500 to-cyan-500" },
  { name: "TypeScript", level: 90, color: "from-indigo-500 to-purple-500" },
  { name: "Node.js", level: 85, color: "from-green-500 to-emerald-500" },
  { name: "Python", level: 80, color: "from-yellow-500 to-orange-500" },
  { name: "UI/UX Design", level: 88, color: "from-pink-500 to-rose-500" },
  {
    name: "Cloud Architecture",
    level: 82,
    color: "from-violet-500 to-purple-500",
  },
  { name: "Database Design", level: 86, color: "from-teal-500 to-blue-500" },
  { name: "DevOps", level: 78, color: "from-orange-500 to-red-500" },
];

export default function SkillsSection() {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience
            and continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </h3>
                <span className="text-sm text-slate-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{
                    duration: 1.5,
                    delay: 0.5 + index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                >
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
