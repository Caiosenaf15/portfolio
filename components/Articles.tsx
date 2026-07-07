import FadeIn from "./FadeIn";
import { FileText } from "lucide-react";

const articles = [
  {
    title: "Benchmark Criptográfico em Bancos NoSQL",
    description:
      "Estudo comparando desempenho de AES-256-CFB, SHA-256, HMAC-SHA-256, Bcrypt e Argon2 em MongoDB, Redis e Cassandra 4.1, com pacote de reprodutibilidade publicado.",
    coauthor: "Co-autoria com Pedro Henrique T. Pinto",
    tags: ["Criptografia", "MongoDB", "Redis", "Cassandra"],
    link: "https://github.com/Caiosenaf15/benchmark-NoSQL",
    linkLabel: "Repositório",
  },
  {
    title: "Análise de Desempenho com OpenMP",
    description:
      "Avaliação de Speedup, Eficiência e Lei de Amdahl em algoritmos paralelos — multiplicação de matrizes, Selection Sort, Heap Sort e histogramas — utilizando a biblioteca LibPPC.",
    coauthor: "Co-autoria com Lucas Pontes Lira",
    tags: ["C", "OpenMP", "HPC", "Paralelismo"],
    link: "https://github.com/Caiosenaf15/Paralelizacao-de-Algoritmos",
    linkLabel: "Repositório",
  },
];

export default function Articles() {
  return (
    <section id="artigos" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-accent font-medium mb-2 tracking-wide">
            Artigos
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
            Trabalhos acadêmicos
          </h2>
        </FadeIn>

        <div className="space-y-6">
          {articles.map((article, index) => (
            <FadeIn key={article.title} delay={index * 0.1}>
              <div className="flex gap-5 p-6 rounded-xl border border-foreground/10 hover:border-accent/30 bg-foreground/[0.03] hover:bg-foreground/[0.06] transition-all">
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="text-accent" size={20} />
                </div>

                <div className="flex-1">
                  <h3 className="font-heading text-lg font-bold mb-1">
                    {article.title}
                  </h3>

                  {article.coauthor && (
                    <p className="text-sm text-foreground/50 mb-2">
                      {article.coauthor}
                    </p>
                  )}

                  <p className="text-foreground/70 mb-4">
                    {article.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-foreground/10 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {article.link && (
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-accent hover:underline"
                    >
                      {article.linkLabel} →
                    </a>
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