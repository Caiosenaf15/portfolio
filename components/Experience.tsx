import FadeIn from "./FadeIn";

const experiences = [
  {
    role: "Analista de Sistemas Júnior",
    company: "LWSA",
    location: "São Paulo/SP",
    period: "08/2025 – 11/2025",
    achievements: [
      "Desenvolveu e manteve serviços backend em Java, Ruby on Rails e PostgreSQL, sustentando alta disponibilidade e estabilidade em 100% dos deploys executados no período.",
      "Integrou mais de 5 endpoints de APIs RESTful conectadas à nuvem AWS, reduzindo a latência média das requisições em 15%.",
      "Conduziu a revisão de código (Code Review) em mais de 20 Pull Requests do time, garantindo padrões de arquitetura, segurança e zero falhas críticas introduzidas em produção.",
      "Atuou em rotinas ágeis (Scrum/Kanban) resolvendo mais de 30 chamados técnicos e bugs, reduzindo o tempo médio de atendimento de chamados (SLA) em 25%.",
    ],
    tags: [
      "Java",
      "AWS",
      "Docker",
      "Git",
      "PostgreSQL",
      "Ruby",
      "Ruby on Rails",
      "APIs REST",
    ],
  },
  {
    role: "Desenvolvedor de Software",
    company: "Casa Filtros",
    location: "Nova Friburgo/RJ",
    period: "12/2023 – 07/2025",
    achievements: [
      "Projetou e desenvolveu microsserviços para automação de rotinas operacionais, resultando na redução de 40% na falta de insumos e 60% no tempo de recuperação de dados.",
      "Implementou suítes de testes automatizados com TDD e boas práticas SOLID, reduzindo em 30% o tempo gasto na manutenção do código.",
      "Realizou otimizações de consultas SQL no banco PostgreSQL, promovendo um ganho de 20% na velocidade de leitura de relatórios do sistema.",
    ],
    tags: ["Node.js", "Vue.js", "PostgreSQL", "Git", "TDD", "APIs REST"],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-accent font-medium mb-2 tracking-wide">
            Experiência
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
            Trajetória profissional
          </h2>
        </FadeIn>

        <div className="relative border-l border-foreground/10 pl-8 space-y-12">
          {experiences.map((exp, index) => (
            <FadeIn key={exp.company} delay={index * 0.15}>
              <div className="relative">
                <span className="absolute -left-[2.35rem] top-1 w-3 h-3 rounded-full bg-accent" />

                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-heading text-xl font-bold">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-foreground/50">
                    {exp.period}
                  </span>
                </div>

                <p className="text-accent font-medium mb-4">
                  {exp.company} · {exp.location}
                </p>

                <ul className="space-y-2 mb-5">
                  {exp.achievements.map((item) => (
                    <li
                      key={item}
                      className="text-foreground/70 text-sm md:text-base leading-relaxed flex gap-2"
                    >
                      <span className="text-accent mt-1.5 flex-shrink-0">
                        ▹
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-foreground/10 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}