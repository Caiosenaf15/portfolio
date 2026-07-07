export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-foreground/10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/50">
        <p>© {new Date().getFullYear()} Caio Sena. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/caio-sena-freitas/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Caiosenaf15"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}