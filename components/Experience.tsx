import FadeIn from "./FadeIn";

const experiences = [
  {
    role: "Desenvolvedor de Software",
    company: "Casa Filtros",
    location: "Nova Friburgo/RJ",
    period: "12/2023 – 07/2025",
    achievements: [
      "Criou sistema de gestão de estoque com alertas automáticos de reposição, reduzindo em 40% as faltas em estoque",
      "Desenvolveu sistemas de cadastro e acompanhamento de clientes, reduzindo em 60% o tempo de busca por informações",
      "Automatizou relatórios de clientes, diminuindo em 50% o tempo manual de conferência",
      "Aplicou TDD e princípios SOLID, reduzindo em 30% o tempo de manutenção do código",
      "Melhorou a performance de queries no PostgreSQL em 20%",
    ],
    tags: ["Node.js", "Vue.js", "Ruby on Rails", "PostgreSQL", "Git"],
  },
  {
    role: "Analista de Sistemas Júnior",
    company: "LWSA",
    location: "São Paulo/SP",
    period: "08/2025 – 11/2025",
    achievements: [
      "Participou de times multidisciplinares desenvolvendo soluções para os sistemas da squad",
      "Contribuiu para garantir qualidade e segurança nas entregas e processos",
      "Construiu e liderou tecnicamente soluções da equipe de desenvolvimento",
    ],
    tags: ["Java", "Ruby on Rails", "PostgreSQL", "Docker", "AWS"],
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