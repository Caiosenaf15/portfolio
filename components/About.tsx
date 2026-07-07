import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="sobre" className="py-24 px-6">
      <FadeIn>
        <div className="max-w-3xl mx-auto">
          <p className="text-accent font-medium mb-2 tracking-wide">
            Sobre mim
          </p>

          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Quem eu sou
          </h2>

          <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
            <p>
              Sou estudante de Sistemas de Informação no CEFET/RJ, campus Nova
              Friburgo, com foco em desenvolvimento web full stack. Gosto de
              transformar problemas reais em soluções funcionais — seja
              construindo sistemas para eventos, seja explorando desempenho e
              segurança em bancos de dados.
            </p>

            <p>
              Já trabalhei em projetos que vão desde aplicações web com
              upload de arquivos e armazenamento em nuvem, até estudos
              acadêmicos comparando algoritmos de criptografia em diferentes
              bancos NoSQL. Gosto tanto da parte de construir interfaces
              quanto de entender o que acontece por trás delas.
            </p>

            <p>
              Atualmente estou em busca de oportunidades de estágio para
              aplicar o que venho aprendendo em projetos reais, com vontade
              de crescer e aprender continuamente.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}