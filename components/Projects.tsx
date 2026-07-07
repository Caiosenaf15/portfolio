import FadeIn from "./FadeIn";

const projects = [
  {
    title: "Photo Share - Eventos",
    description:
      "Aplicação para compartilhamento de fotos em tempo real durante eventos, com upload via celular e galeria ao vivo.",
    tags: ["Firebase", "Firestore", "JavaScript", "Storage"],
    github: "https://github.com/Caiosenaf15/seu-repo",
    demo: "",
  },
  {
    title: "Maria 15 Anos - Galeria",
    description:
      "App de compartilhamento de fotos para festa de 15 anos, com painel administrativo e design inspirado no Liquid Glass da Apple.",
    tags: ["Supabase", "JavaScript", "CSS", "Glassmorphism"],
    github: "https://github.com/Caiosenaf15/seu-repo",
    demo: "",
  },
  {
    title: "Benchmark Criptográfico NoSQL",
    description:
      "Estudo acadêmico comparando desempenho de AES-256, SHA-256, Bcrypt e Argon2 em MongoDB, Redis e Cassandra.",
    tags: ["Python", "MongoDB", "Redis", "Cassandra"],
    github: "https://github.com/Caiosenaf15/benchmark-NoSQL",
    demo: "",
  },
  {
    title: "Benchmark HPC com OpenMP",
    description:
      "Artigo acadêmico avaliando Speedup, Eficiência e Lei de Amdahl em algoritmos paralelos com OpenMP.",
    tags: ["C", "OpenMP", "LaTeX", "Paralelismo"],
    github: "https://github.com/Caiosenaf15/seu-repo",
    demo: "",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-accent font-medium mb-2 tracking-wide">
            Projetos
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
            O que eu venho construindo
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <div className="group rounded-xl overflow-hidden border border-foreground/10 hover:border-accent/40 transition-all duration-300 bg-foreground/[0.03] hover:bg-foreground/[0.06] hover:-translate-y-1">
                <div className="aspect-video bg-gradient-to-br from-foreground/10 to-foreground/5 flex items-center justify-center">
                  <span className="text-foreground/30 text-sm">
                    Preview do projeto
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-foreground/10 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-accent hover:underline"
                    >
                      Código
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-accent hover:underline"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}