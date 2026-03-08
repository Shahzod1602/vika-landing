"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Shield, Users, Code2 } from "lucide-react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="gradient-text">
      {count}
      {suffix}
    </span>
  );
}

const values = [
  { icon: Zap, title: "Fast Delivery", desc: "We ship quickly without compromising quality." },
  { icon: Code2, title: "Clean Code", desc: "Scalable, maintainable architecture from day one." },
  { icon: Shield, title: "Secure by Default", desc: "Security built into every layer of our products." },
  { icon: Users, title: "User First", desc: "Intuitive interfaces designed for real people." },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#6c63ff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#6c63ff] text-sm font-semibold tracking-widest uppercase">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 leading-tight">
              A team that turns <span className="gradient-text">ideas</span> into products
            </h2>
            <p className="text-white/50 leading-relaxed mb-6">
              vika.io is a software company based in Uzbekistan. We specialise in building AI-integrated
              web applications, management systems, and edtech platforms that solve real problems.
            </p>
            <p className="text-white/50 leading-relaxed mb-10">
              From concept to deployment, we handle the entire product lifecycle — design, engineering,
              testing and launch.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { target: 3, suffix: "+", label: "Projects" },
                { target: 100, suffix: "%", label: "Satisfaction" },
                { target: 5, suffix: "+", label: "Technologies" },
              ].map((s) => (
                <div key={s.label} className="text-center glass rounded-2xl py-5 px-3">
                  <div className="text-3xl font-extrabold mb-1">
                    <Counter target={s.target} suffix={s.suffix} />
                  </div>
                  <div className="text-white/40 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — values grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-2xl p-5 hover:bg-white/[0.06] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#6c63ff]/20 flex items-center justify-center mb-4 group-hover:bg-[#6c63ff]/30 transition-colors">
                    <Icon size={18} className="text-[#6c63ff]" />
                  </div>
                  <h4 className="text-white font-semibold mb-1.5 text-sm">{v.title}</h4>
                  <p className="text-white/40 text-xs leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
