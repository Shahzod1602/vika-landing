"use client";

import { motion } from "framer-motion";

const stack = [
  { name: "Next.js", color: "#fff" },
  { name: "React", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Python", color: "#FFD43B" },
  { name: "FastAPI", color: "#009688" },
  { name: "Node.js", color: "#8CC84B" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "MongoDB", color: "#4DB33D" },
  { name: "OpenCV", color: "#5C3EE8" },
  { name: "TailwindCSS", color: "#38BDF8" },
  { name: "Docker", color: "#2496ED" },
  { name: "Vercel", color: "#fff" },
];

export default function Stack() {
  return (
    <section className="py-16 px-6 border-y border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/30 text-sm uppercase tracking-widest mb-10"
        >
          Technologies we work with
        </motion.p>

        {/* Marquee */}
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 flex-nowrap"
          >
            {[...stack, ...stack].map((tech, i) => (
              <div
                key={i}
                className="glass px-5 py-3 rounded-xl flex items-center gap-2.5 flex-shrink-0 whitespace-nowrap"
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: tech.color, boxShadow: `0 0 8px ${tech.color}` }}
                />
                <span className="text-white/70 text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
