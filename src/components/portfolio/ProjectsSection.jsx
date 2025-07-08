import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/lib/utils";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    demoUrl: createPageUrl("EcommercePlatform"),
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with interactive charts and data visualization",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["React", "Recharts", "FastAPI"],
    demoUrl: createPageUrl("AnalyticsDashboard"),
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Mobile App",
    description:
      "Cross-platform mobile application for productivity and task management",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    tags: ["React Native", "Firebase", "Redux", "TypeScript"],
    demoUrl: createPageUrl("MobileAppLanding"),
    githubUrl: "#",
  },
  {
    id: 4,
    title: "AI-Powered Tool",
    description:
      "Machine learning application for automated content generation and analysis",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tags: ["Python", "AI", "React", "OpenAI"],
    demoUrl: createPageUrl("AITool"),
    githubUrl: "#",
  },
];

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="py-24 px-6 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A selection of projects that showcase my technical skills and
            creative problem-solving
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <Link to={project.demoUrl}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                </Link>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <Link to={project.demoUrl}>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                    <span>View Project</span>
                    <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
