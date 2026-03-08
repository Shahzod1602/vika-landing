"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, MessageSquare, ExternalLink } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your email service (EmailJS / Resend / Formspree)
    console.log(form);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#6c63ff]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#6c63ff] text-sm font-semibold tracking-widest uppercase">Contact</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4">
            Let's build something <span className="gradient-text">together</span>
          </h2>
          <p className="text-white/50 max-w-md mx-auto">
            Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handle}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white/40 text-xs mb-2 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full glass rounded-xl px-4 py-3.5 text-white text-sm outline-none focus:border-[#6c63ff]/50 transition-colors placeholder-white/20"
                />
              </div>
              <div>
                <label className="block text-white/40 text-xs mb-2 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full glass rounded-xl px-4 py-3.5 text-white text-sm outline-none focus:border-[#6c63ff]/50 transition-colors placeholder-white/20"
                />
              </div>
            </div>
            <div>
              <label className="block text-white/40 text-xs mb-2 uppercase tracking-wider">Message</label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your project..."
                className="w-full glass rounded-xl px-4 py-3.5 text-white text-sm outline-none focus:border-[#6c63ff]/50 transition-colors placeholder-white/20 resize-none"
              />
            </div>
            <button
              type="submit"
              className="btn-primary text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 text-sm"
            >
              {sent ? "Message Sent! ✓" : (<><Send size={15} /> Send Message</>)}
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            {/* Contact info */}
            <div className="glass rounded-2xl p-6 mb-6">
              <a href="mailto:shaxzodnematov1602@gmail.com" className="flex items-center gap-3 mb-4 group">
                <div className="w-10 h-10 rounded-xl bg-[#6c63ff]/20 flex items-center justify-center group-hover:bg-[#6c63ff]/30 transition-colors">
                  <Mail size={18} className="text-[#6c63ff]" />
                </div>
                <div>
                  <div className="text-white/40 text-xs">Email</div>
                  <div className="text-white text-sm font-medium group-hover:text-[#6c63ff] transition-colors">shaxzodnematov1602@gmail.com</div>
                </div>
              </a>
              <a href="https://t.me/Shahzod_pc" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center group-hover:bg-[#00d4ff]/20 transition-colors">
                  <Send size={18} className="text-[#00d4ff]" />
                </div>
                <div>
                  <div className="text-white/40 text-xs">Telegram</div>
                  <div className="text-white text-sm font-medium group-hover:text-[#00d4ff] transition-colors">@Shahzod_pc</div>
                </div>
              </a>
            </div>

            {/* Social */}
            <div>
              <p className="text-white/30 text-xs uppercase tracking-wider mb-4">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { icon: Github, label: "GitHub", href: "https://github.com/Shahzod1602" },
                  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/110712346/" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="glass px-5 py-3 rounded-xl flex items-center gap-2.5 text-white/60 hover:text-white hover:bg-white/10 transition-all text-sm"
                  >
                    <Icon size={16} />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA box */}
            <div className="glass rounded-2xl p-6 mt-6 border border-[#6c63ff]/20 bg-[#6c63ff]/5">
              <h4 className="text-white font-semibold mb-2">Ready to start?</h4>
              <p className="text-white/50 text-sm leading-relaxed">
                Whether it's a startup idea, enterprise solution, or anything in between — we're ready to bring it to life.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
