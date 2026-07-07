export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-foreground/10">
        <div className="max-w-5xl mx-auto text-center text-sm text-foreground/50">
          <p>© {new Date().getFullYear()} Caio Sena. Todos os direitos reservados.</p>
        </div>
    </footer>
  );
}