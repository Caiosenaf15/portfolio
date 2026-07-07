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
              Sou desenvolvedor de sistemas com 2 anos de experiência
              construindo aplicações web utilizando Ruby on Rails, Node.js e
              Vue.js. Tenho sólidos conhecimentos em banco de dados e aplico
              práticas de TDD e SOLID no dia a dia, buscando sempre entregar
              código limpo, testável e de fácil manutenção.
            </p>

            <p>
              Já atuei no ciclo completo de desenvolvimento de software, do
              levantamento de requisitos com usuários até a entrega de
              soluções que geraram impacto real — como reduzir faltas de
              estoque, automatizar relatórios e otimizar performance de
              banco de dados. Também sou graduando em Sistemas de Informação,
              o que me ajuda a equilibrar prática de mercado com
              fundamentos teóricos sólidos.
            </p>

            <p>
              Gosto de trabalhar em equipe, em contato direto com quem usa o
              que eu construo, e estou sempre em busca de novos desafios que
              me permitam crescer tecnicamente.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}