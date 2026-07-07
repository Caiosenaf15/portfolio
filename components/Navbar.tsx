"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#artigos", label: "Artigos" },
  { href: "#certificacoes", label: "Certificações" },
  { href: "#skills", label: "Skills" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-md border-b border-foreground/10">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#inicio" className="font-heading font-bold text-lg">
          Caio Sena
        </a>

        <div className="hidden md:flex gap-8 text-sm font-medium text-foreground/70">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Abrir menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col items-center gap-6 py-8 bg-background border-t border-foreground/10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-foreground/80 hover:text-foreground transition-colors text-lg"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}