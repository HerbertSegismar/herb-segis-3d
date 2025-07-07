import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero3D() {
  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated 3D Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-blue-500/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-purple-500/30 rotate-12 animate-bounce-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border-2 border-cyan-500/30 -rotate-12 animate-pulse"></div>

        {/* Floating dots */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Large geometric shapes */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border border-blue-500/20 rotate-45 animate-spin-very-slow"></div>
          <div className="absolute inset-8 border border-purple-500/20 rotate-12 animate-spin-reverse"></div>
          <div className="absolute inset-16 border border-cyan-500/20 -rotate-12 animate-pulse"></div>
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full blur-3xl animate-bounce-slow"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent animate-gradient">
            HeRb SeGis
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
            Creative Developer & Digital Innovator
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences through the intersection of
            design and technology
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center space-x-6 mb-16"
        >
          <a
            href="https://github.com/herbsegis"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 animate-float"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/herbsegis"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 animate-float"
            style={{ animationDelay: "0.5s" }}
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:herb@example.com"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 animate-float"
            style={{ animationDelay: "1s" }}
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          onClick={scrollToAbout}
          className="animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-slate-400" />
        </motion.button>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/20 pointer-events-none" />
    </section>
  );
}
