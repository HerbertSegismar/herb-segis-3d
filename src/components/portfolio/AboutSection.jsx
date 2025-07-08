import { motion } from "framer-motion";
import { Code, Palette, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Expertise in modern web technologies and frameworks",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user experiences",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Building fast, efficient, and scalable applications",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description:
      "Leading cross-functional teams to deliver exceptional results",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with over 8 years of experience creating
            digital solutions that make a difference. My expertise spans
            full-stack development, UI/UX design, and team leadership.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-full p-1">
                <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center">
                  <div className="w-60 h-60 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
