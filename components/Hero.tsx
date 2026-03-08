"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const words = ["innovative", "scalable", "modern", "powerful"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const word = words[wordIndex];
    let i = typing ? displayed.length : displayed.length - 1;

    if (typing && displayed.length === word.length) {
      const t = setTimeout(() => setTyping(false), 1800);
      return () => clearTimeout(t);
    }
    if (!typing && displayed.length === 0) {
      setWordIndex((prev) => (prev + 1) % words.length);
      setTyping(true);
      return;
    }

    const t = setTimeout(
      () => {
        setDisplayed(typing ? word.slice(0, i + 1) : word.slice(0, i));
      },
      typing ? 100 : 60
    );
    return () => clearTimeout(t);
  }, [displayed, typing, wordIndex]);

  return (
    <section id="hero" className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#6c63ff]/10 blur-3xl float-anim pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#00d4ff]/8 blur-3xl float-anim-2 pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-[#6c63ff]/8 blur-2xl float-anim-3 pointer-events-none" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(108,99,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(108,99,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-white/70 mb-8"
        >
          <Sparkles size={14} className="text-[#6c63ff]" />
          Building the future, one product at a time
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
        >
          We craft{" "}
          <span className="gradient-text">
            {displayed}
            <span className="cursor-blink">|</span>
          </span>
          <br />
          software products
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          At vika.io we transform ideas into high-impact digital products —
          from AI-powered face recognition to language learning platforms.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#projects" className="btn-primary text-white font-semibold px-8 py-4 rounded-full text-base">
            View Our Projects
          </a>
          <a
            href="#contact"
            className="glass text-white/80 hover:text-white font-semibold px-8 py-4 rounded-full text-base transition-all hover:bg-white/10"
          >
            Let's Talk →
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex justify-center gap-12 mt-16"
        >
          {[
            { value: "3+", label: "Products Built" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "2024", label: "Founded" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-white/40 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white/30 flex flex-col items-center gap-1"
        >
          <span className="text-xs">Scroll</span>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
