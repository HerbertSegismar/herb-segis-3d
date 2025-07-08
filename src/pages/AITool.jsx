import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/lib/utils";
import { ArrowLeft, Sparkles, Send, Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function AITool() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!prompt) return;
    setIsLoading(true);
    setResponse("");
    setTimeout(() => {
      setResponse(
        `Based on your prompt for "${prompt}", the AI has generated a comprehensive analysis. This includes market trends, competitor insights, and actionable strategies for growth. The key takeaway is to focus on emerging Gen Z markets with a mobile-first approach.`
      );
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans">
      <header className="p-4 bg-slate-800/50 backdrop-blur-sm border-b border-white/10 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link
            to={createPageUrl("Portfolio")}
            className="flex items-center gap-2 text-xl font-bold text-white hover:text-blue-400 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>AI-Powered Tool</span>
          </Link>
          <a
            href="#"
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors"
          >
            Sign Up
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Sparkles className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">
              Unlock Insights with AI
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Leverage the power of machine learning to automate content
              generation and analysis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="p-6">
              <form onSubmit={handleSubmit}>
                <Textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Enter a prompt, e.g., 'Analyze market for sustainable fashion'"
                  className="bg-slate-800/50 border-slate-700 text-white placeholder-slate-400 h-28 resize-none"
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-4 bg-blue-600 hover:bg-blue-500"
                >
                  {isLoading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" /> Generate
                    </>
                  )}
                </Button>
              </form>
            </div>
            {(isLoading || response) && (
              <div className="p-6 border-t border-white/10 bg-slate-800/20">
                <h3 className="font-bold mb-2">AI Response:</h3>
                {isLoading ? (
                  <div className="space-y-2 animate-pulse">
                    <div className="h-4 bg-slate-700 rounded w-full"></div>
                    <div className="h-4 bg-slate-700 rounded w-5/6"></div>
                    <div className="h-4 bg-slate-700 rounded w-3/4"></div>
                  </div>
                ) : (
                  <p className="text-slate-300 whitespace-pre-wrap">
                    {response}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
