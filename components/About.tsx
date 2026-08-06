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
             Desenvolvedor de Software com experiência na construção
              de aplicações web, atuando no ciclo completo de desenvolvimento — 
              desde o levantamento de requisitos com usuários até a entrega de
               soluções de alto impacto. Tenho vivência na criação de sistemas
                que automatizaram relatórios, reduziram faltas de estoque e 
                otimizaram a performance de bancos de dados.
            </p>
            <p>
              Minha stack principal inclui Ruby on Rails, Node.js e Vue.js, 
              combinada a sólidos conhecimentos em bancos de dados. Aplico 
              rotineiramente práticas de TDD e princípios SOLID para garantir 
              entregas com código limpo, testável e de fácil manutenção.
            </p>

            <p>
              Atualmente cursando Sistemas de Informação, me dedico a equilibrar
               a prática do mercado com fundamentos teóricos sólidos. Valorizo o 
               trabalho em equipe, o contato direto com usuários e a 
               busca por novos desafios que promovam meu constante crescimento 
               técnico.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}