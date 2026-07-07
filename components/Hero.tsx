import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <FadeIn>
      <p className="text-accent font-medium mb-4 tracking-wide">
        Olá, eu sou
      </p>

      <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4">
        Caio Sena
      </h1>

      <p className="text-lg md:text-xl text-foreground/70 max-w-xl mb-8">
        Estudante de Sistemas de Informação e desenvolvedor Full Stack,
        construindo experiências web funcionais e bem cuidadas.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <a href="#projetos" className="bg-accent text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform">
        Ver Projetos
        </a>
        <a href="#contato"className="border border-foreground/20 px-6 py-3 rounded-lg font-medium hover:bg-foreground/5 hover:scale-105 transition-transform">
          Contato
        </a>
      </div>
      </FadeIn>
    </section>
  );
}