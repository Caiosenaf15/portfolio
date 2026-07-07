import FadeIn from "./FadeIn";

const skillCategories = [
  {
    category: "Linguagens",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Firebase", "Supabase"],
  },
  {
    category: "Banco de Dados",
    items: ["MongoDB", "Redis", "Cassandra", "PostgreSQL"],
  },
  {
    category: "Ferramentas",
    items: ["Git", "GitHub", "VS Code", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-accent font-medium mb-2 tracking-wide">
            Skills
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
            Ferramentas e tecnologias
          </h2>
        </FadeIn>

        <div className="space-y-10">
          {skillCategories.map((group, index) => (
            <FadeIn key={group.category} delay={index * 0.08}>
              <div>
                <h3 className="font-heading text-lg font-semibold mb-4 text-foreground/80">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-foreground/5 hover:bg-accent/10 hover:text-accent hover:border-accent/30 border border-transparent transition-all rounded-lg px-4 py-2 text-sm font-medium cursor-default"
                    >
                      {skill}
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