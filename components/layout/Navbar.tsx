"use client";

import Container from "../ui/container";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">

          <a
            href="#home"
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 text-xl font-bold text-white shadow-lg shadow-cyan-500/20"
          >
            BK
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="/resume/resume.pdf"
              target="_blank"
              className="rounded-full border border-cyan-500/30 px-5 py-2 text-sm font-medium text-white transition hover:bg-cyan-500 hover:text-white"
            >
              Resume
            </a>

            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900">
              🌙
            </button>
          </div>

        </div>
      </Container>
    </header>
  );
}