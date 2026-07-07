import FadeIn from "@/components/FadeIn";

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
      <FadeIn>
      <div className="max-w-5xl mx-auto">
        <p className="text-accent font-medium mb-2 tracking-wide">
          Skills
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
          Ferramentas e tecnologias
        </h2>

        <div className="space-y-10">
          {skillCategories.map((group) => (
            <div key={group.category}>
              <h3 className="font-heading text-lg font-semibold mb-4 text-foreground/80">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-foreground/5 hover:bg-foreground/10 transition-colors rounded-lg px-4 py-2 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      </FadeIn>
    </section>
  );
}