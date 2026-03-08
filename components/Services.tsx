"use client";

import { motion } from "framer-motion";
import { Globe, Bot, Brain, Smartphone, Settings2, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website & Landing Page",
    desc: "Modern, fast and responsive websites that convert visitors into clients.",
    gradient: "from-[#6c63ff] to-[#a855f7]",
    glow: "rgba(108, 99, 255, 0.15)",
    features: ["Next.js / React", "Mobile responsive", "SEO optimized", "Fast delivery"],
  },
  {
    icon: Bot,
    title: "Telegram Bot",
    desc: "Custom bots for business automation, e-commerce, CRM, notifications and more.",
    gradient: "from-[#00d4ff] to-[#0066ff]",
    glow: "rgba(0, 212, 255, 0.12)",
    features: ["Inline keyboards", "Payment integration", "Admin panel", "24/7 support"],
  },
  {
    icon: Brain,
    title: "AI Integration",
    desc: "Add intelligence to your product — ChatGPT, speech recognition, face ID, OCR.",
    gradient: "from-[#f59e0b] to-[#ef4444]",
    glow: "rgba(245, 158, 11, 0.12)",
    features: ["ChatGPT / LLM", "Face recognition", "Speech-to-text", "Custom ML models"],
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    desc: "Cross-platform mobile apps for iOS and Android with native-like performance.",
    gradient: "from-[#10b981] to-[#059669]",
    glow: "rgba(16, 185, 129, 0.12)",
    features: ["React Native", "iOS & Android", "Push notifications", "Offline support"],
  },
  {
    icon: Settings2,
    title: "Custom System",
    desc: "ERP, CRM, Library, HMS or any management system tailored to your workflow.",
    gradient: "from-[#8b5cf6] to-[#6c63ff]",
    glow: "rgba(139, 92, 246, 0.12)",
    features: ["Role-based access", "Dashboard & reports", "REST API", "Scalable architecture"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 relative overflow-hidden">
      {/* bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#6c63ff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-[#6c63ff] text-sm font-semibold tracking-widest uppercase">Freelance</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4">
            What I can build <span className="gradient-text">for you</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            From a simple landing page to a full AI-powered system — tell me your idea and I'll make it real.
          </p>
        </motion.div>

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/20 bg-green-500/5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-sm font-medium">Available for new projects</span>
          </div>
        </motion.div>

        {/* Cards — first row: 3, second row: 2 centered */}
        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {services.slice(0, 3).map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-5 md:w-2/3 mx-auto">
          {services.slice(3).map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i + 3} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-white/40 text-sm mb-5">Have a custom project idea? Let's discuss it.</p>
          <a
            href="https://t.me/Shahzod_pc"
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full text-base"
          >
            Get a Free Quote <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="glass rounded-2xl p-6 group relative overflow-hidden transition-all duration-300 flex flex-col"
      style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.06)` }}
    >
      {/* bg glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top left, ${service.glow}, transparent 70%)` }}
      />

      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 flex-shrink-0`}>
        <Icon size={22} className="text-white" />
      </div>

      <h3 className="text-white font-bold text-lg mb-2 group-hover:gradient-text transition-all">{service.title}</h3>
      <p className="text-white/50 text-sm leading-relaxed mb-5">{service.desc}</p>

      {/* Features */}
      <ul className="space-y-2 mt-auto mb-6">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-white/60">
            <CheckCircle2 size={13} className="text-[#6c63ff] flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="https://t.me/Shahzod_pc"
        target="_blank"
        rel="noreferrer"
        onClick={(e) => e.stopPropagation()}
        className={`mt-auto w-full bg-gradient-to-r ${service.gradient} text-white text-sm font-semibold py-3 rounded-xl flex items-center justify-center gap-2 opacity-80 hover:opacity-100 transition-opacity`}
      >
        Get a Quote <ArrowRight size={14} />
      </a>
    </motion.div>
  );
}
