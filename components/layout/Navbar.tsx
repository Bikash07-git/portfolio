"use client";

import Container from "../ui/container";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 bg-[#050816]/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-16 items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-lg font-bold text-white"
          >
            BK
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-slate-300 transition hover:text-white"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            <button
              className="hidden rounded-xl border border-slate-700 px-4 py-2 text-sm transition hover:border-cyan-500 md:block"
            >
              Resume
            </button>

            <button
              className="rounded-xl border border-slate-700 p-2 transition hover:border-cyan-500"
            >
              🌙
            </button>

          </div>

        </nav>
      </Container>
    </header>
  );
}