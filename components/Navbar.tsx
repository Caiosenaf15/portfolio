export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-md border-b border-foreground/10">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#inicio" className="font-heading font-bold text-lg">
          Caio Sena
        </a>

        <div className="hidden md:flex gap-8 text-sm font-medium text-foreground/70">
          <a href="#sobre" className="hover:text-foreground transition-colors">
            Sobre
          </a>
          <a href="#projetos" className="hover:text-foreground transition-colors">
            Projetos
          </a>
          <a href="#skills" className="hover:text-foreground transition-colors">
            Skills
          </a>
          <a href="#contato" className="hover:text-foreground transition-colors">
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}