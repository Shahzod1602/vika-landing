"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, Globe, Brain, BookOpen, Send } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "IELTSpeak",
    subtitle: "Multilevel Speaking App",
    category: "EdTech · Mobile",
    icon: Globe,
    gradient: "from-[#6c63ff] to-[#a855f7]",
    bg: "rgba(108, 99, 255, 0.08)",
    border: "rgba(108, 99, 255, 0.25)",
    image: "/ieltspeak.png",
    imageType: "mobile",
    description:
      "An AI-powered IELTS speaking preparation mobile app. Features multilevel practice system with Part 1, 2 & 3, mock tests, tips & pronunciation guides, and full session history tracking.",
    tags: ["React Native", "AI", "Speech API", "Node.js", "PostgreSQL"],
    features: [
      "3-part IELTS speaking practice (Intro, Long Turn, Discussion)",
      "Full mock test simulator with scoring",
      "Tips & pronunciation learning section",
      "Progress tracking with history",
    ],
    demo: "https://t.me/IELTSpeakbot",
    demoLabel: "Open in Telegram",
    demoIcon: "telegram",
    github: "#",
  },
  {
    id: 2,
    title: "Identify.uz",
    subtitle: "Face Recognition System",
    category: "AI · Enterprise",
    icon: Brain,
    gradient: "from-[#00d4ff] to-[#0066ff]",
    bg: "rgba(0, 212, 255, 0.06)",
    border: "rgba(0, 212, 255, 0.25)",
    image: "/identify.png",
    imageType: "desktop",
    description:
      "Enterprise-grade face recognition attendance system. Automatically tracks employee attendance using face ID with geolocation verification, Telegram bot notifications, and real-time reports.",
    tags: ["Python", "OpenCV", "FastAPI", "React", "Deep Learning", "Telegram Bot"],
    features: [
      "Real-time face detection & recognition",
      "Geolocation-based attendance verification",
      "Telegram bot for instant notifications",
      "Real-time analytics dashboard",
    ],
    demo: "https://www.identify.uz/#stats",
    demoLabel: "Live Demo",
    demoIcon: "link",
    github: "#",
  },
  {
    id: 3,
    title: "Library System",
    subtitle: "Digital Management Platform",
    category: "Management · Web",
    icon: BookOpen,
    gradient: "from-[#f59e0b] to-[#ef4444]",
    bg: "rgba(245, 158, 11, 0.06)",
    border: "rgba(245, 158, 11, 0.25)",
    image: "/library.png",
    imageType: "desktop",
    description:
      "A modern digital library management system with QR-based book tracking, member management, overdue alerts, and a clean admin dashboard for complete library operations.",
    tags: ["React", "Node.js", "MongoDB", "QR Code"],
    features: [
      "QR-code based book check-in/out",
      "Member management & borrow history",
      "Automated overdue notifications",
      "Analytics & inventory reports",
    ],
    demo: "#",
    demoLabel: "Coming Soon",
    demoIcon: "link",
    github: "#",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#6c63ff] text-sm font-semibold tracking-widest uppercase">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Real products solving real problems — built with modern tech stacks and shipped with care.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelected(project)}
                className="rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 flex flex-col"
                style={{
                  background: project.bg,
                  border: `1px solid ${project.border}`,
                }}
              >
                {/* Screenshot preview */}
                <div className="relative overflow-hidden bg-black/20" style={{ height: project.imageType === "mobile" ? "200px" : "180px" }}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={`object-cover object-top transition-transform duration-700 group-hover:scale-105 ${
                        project.imageType === "mobile" ? "object-center" : "object-top"
                      }`}
                    />
                  ) : (
                    /* Placeholder for Library System */
                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-20 flex items-center justify-center`}>
                      <Icon size={48} className="text-white opacity-40" />
                    </div>
                  )}
                  {/* Gradient overlay at bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-12"
                    style={{ background: `linear-gradient(to top, ${project.bg.replace("0.06", "1").replace("0.08","1")}, transparent)` }}
                  />
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black/50 text-white/80 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={16} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base leading-tight group-hover:text-[#6c63ff] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/40 text-xs">{project.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-white/50 text-sm leading-relaxed line-clamp-2 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.55)" }}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-2 py-0.5 rounded-full text-white/30">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 text-xs text-white/30 group-hover:text-[#6c63ff] transition-colors">
                    View details →
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(5, 8, 22, 0.9)", backdropFilter: "blur(12px)" }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="rounded-3xl max-w-lg w-full overflow-hidden relative"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${selected.border}`,
                backdropFilter: "blur(20px)",
                maxHeight: "90vh",
                overflowY: "auto",
              }}
            >
              {/* Screenshot in modal */}
              {selected.image && (
                <div
                  className="relative w-full"
                  style={{ height: selected.imageType === "mobile" ? "280px" : "220px" }}
                >
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    className="object-cover object-top"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-20"
                    style={{ background: "linear-gradient(to top, rgba(10,8,30,1), transparent)" }}
                  />
                </div>
              )}

              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-white transition-colors z-10"
              >
                <X size={16} />
              </button>

              <div className="p-7">
                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${selected.gradient} flex items-center justify-center flex-shrink-0`}>
                    <selected.icon size={22} className="text-white" />
                  </div>
                  <div>
                    <span className="text-xs text-white/40 uppercase tracking-wider">{selected.category}</span>
                    <h3 className="text-xl font-bold text-white leading-tight">{selected.title}</h3>
                    <p className="text-white/40 text-sm">{selected.subtitle}</p>
                  </div>
                </div>

                <p className="text-white/60 leading-relaxed mb-5 text-sm">{selected.description}</p>

                {/* Features */}
                <div className="mb-5">
                  <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selected.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                        <span className="text-[#6c63ff] mt-0.5 flex-shrink-0">▸</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.65)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={selected.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary flex-1 flex items-center justify-center gap-2 text-white font-semibold py-3 rounded-xl text-sm"
                  >
                    {selected.demoIcon === "telegram"
                      ? <><Send size={14} /> {selected.demoLabel}</>
                      : <><ExternalLink size={14} /> {selected.demoLabel}</>
                    }
                  </a>
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 font-semibold py-3 rounded-xl text-sm transition-all"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    <Github size={14} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
