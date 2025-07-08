import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/lib/utils";
import { CheckCircle, Zap, Shield, ArrowLeft } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Task Management",
    description: "Organize your life with intuitive to-do lists and projects.",
  },
  {
    icon: Zap,
    title: "Real-time Sync",
    description: "Your data is always up-to-date across all your devices.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "End-to-end encryption ensures your data stays yours.",
  },
];

export default function MobileAppLanding() {
  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans">
      <header className="p-4 bg-slate-800/50 backdrop-blur-sm border-b border-white/10 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            to={createPageUrl("Portfolio")}
            className="flex items-center gap-2 text-xl font-bold text-white hover:text-blue-400 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Productivity App</span>
          </Link>
          <a
            href="#"
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors"
          >
            Download Now
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              Achieve More, Stress Less.
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              The ultimate productivity app to help you focus, organize, and
              achieve your goals.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-transform hover:scale-105">
                Download for iOS
              </button>
              <button className="px-6 py-3 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-transform hover:scale-105">
                Download for Android
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mx-auto w-64 h-[500px] bg-slate-800 border-8 border-slate-700 rounded-4xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500&h=1000&fit=crop"
                alt="App Screenshot"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why You'll Love It
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 p-6 rounded-xl border border-white/10 text-center hover-lift"
              >
                <div className="inline-block p-4 bg-blue-500/20 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
