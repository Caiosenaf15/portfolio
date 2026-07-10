import Image from "next/image";
import FadeIn from "./FadeIn";

const projects = [
  {
    title: "Moodfy",
    description:
      "Web app que gera uma experiência visual e musical a partir do humor descrito pelo usuário: a IA cria uma paleta de cores e um texto poético, busca músicas relacionadas no Spotify, e permite ouvir cada faixa via YouTube.",
    tags: ["Next.js", "TypeScript", "Gemini API", "Spotify API", "YouTube API"],
    github: "https://github.com/Caiosenaf15/MoodPlaylist",
    demo: "https://moodfy-app.vercel.app/",
    image: "/imgs/moodfy.png",
  },
  {
    title: "Maria 15 Anos - Galeria",
    description:
      "Aplicação de compartilhamento de fotos em tempo real para eventos, com upload direto pela câmera do celular, galeria ao vivo e painel administrativo protegido por senha para gerenciamento do conteúdo.",
    tags: ["Supabase", "JavaScript", "CSS", "Realtime"],
    github: "",
    demo: "",
    image: "/imgs/Maria15anos.png",
  },
  {
    title: "ProjetoFilmes",
    description:
      "Aplicação web para busca e exploração de filmes, consumindo uma API externa e exibindo informações detalhadas de forma organizada.",
    tags: ["PHP", "API Externa", "Docker", "MVC"],
    github: "https://github.com/Caiosenaf15/ProjetoFilmes",
    demo: "",
    image: "/imgs/CineTrack.png",
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
              <div className="group rounded-xl overflow-hidden border border-foreground/10 hover:border-accent/40 transition-all duration-300 bg-foreground/[0.03] hover:bg-foreground/[0.06] hover:-translate-y-1 h-full flex flex-col">
                <div className="aspect-video relative bg-foreground/5 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`Preview do projeto ${project.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 flex-1">
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

                  {(project.github || project.demo) && (
                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-accent hover:underline"
                        >
                          Código
                        </a>
                      )}
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
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}