export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white/30 text-sm">
          © {new Date().getFullYear()} <span className="gradient-text font-semibold">vika.io</span>. All rights reserved.
        </div>
        <div className="flex gap-6">
          {["#hero", "#about", "#projects", "#contact"].map((href) => (
            <a
              key={href}
              href={href}
              className="text-white/30 hover:text-white/70 text-sm transition-colors capitalize"
            >
              {href.replace("#", "")}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
