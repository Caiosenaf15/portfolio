import FadeIn from "./FadeIn";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Desenvolvimento Orientado a Objetos Utilizando a Linguagem Python",
    issuer: "Fundação Bradesco",
    date: "Mar 2026",
  },
  {
    title: "Empreendedorismo e Inovação",
    issuer: "Fundação Bradesco",
    date: "Mar 2026",
  },
  {
    title: "Scrum Fundamentals Certified (SFC)",
    issuer: "SCRUMstudy",
    date: "Out 2025",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "Mar 2025",
  },
  {
    title: "Data Classification and Summarization Using IBM Granite",
    issuer: "IBM",
    date: "Out 2025",
  },
  {
    title: "Code Generation and Optimization Using IBM Granite",
    issuer: "IBM",
    date: "Out 2025",
  },
];

export default function Certifications() {
  return (
    <section id="certificacoes" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-accent font-medium mb-2 tracking-wide">
            Certificações
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
            Formação complementar
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <FadeIn key={cert.title} delay={index * 0.06}>
              <div className="flex gap-4 items-start p-5 rounded-xl border border-foreground/10 hover:border-accent/30 bg-foreground/[0.03] hover:bg-foreground/[0.06] transition-all h-full">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Award className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold leading-snug mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-foreground/60">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}