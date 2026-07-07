import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contato" className="py-24 px-6">
      <FadeIn>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-accent font-medium mb-2 tracking-wide">
            Contato
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Vamos conversar?
          </h2>
          <p className="text-foreground/70 text-lg mb-10">
            Estou em busca de oportunidades de estágio e aberto a novas
            conexões. Fique à vontade para entrar em contato.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:seuemail@exemplo.com"
              className="bg-accent text-white px-6 py-3 rounded-lg font-medium hover:scale-105 hover:shadow-lg hover:shadow-accent/30 transition-all"
            >
              Enviar Email
            </a>
            <a
              href="https://www.linkedin.com/in/caio-sena-freitas/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-foreground/20 px-6 py-3 rounded-lg font-medium hover:bg-foreground/5 hover:scale-105 transition-all"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Caiosenaf15"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-foreground/20 px-6 py-3 rounded-lg font-medium hover:bg-foreground/5 hover:scale-105 transition-all"
            >
              GitHub
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}