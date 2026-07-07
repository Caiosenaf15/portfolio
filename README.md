# Portfólio — Caio Sena Freitas

Site pessoal de portfólio, construído para apresentar minha trajetória, experiência profissional, projetos e artigos acadêmicos.

🔗 **Acesse:** [portfolio-caio.vercel.app](https://portfolio-tau-hazel-26.vercel.app/)

## Sobre o projeto

Portfólio desenvolvido com foco em performance, design minimalista e organização de conteúdo por seções: sobre, experiência profissional, projetos, artigos acadêmicos, certificações, skills e contato.

## Tecnologias utilizadas

- **[Next.js](https://nextjs.org/)** — framework React com App Router
- **[TypeScript](https://www.typescriptlang.org/)** — tipagem estática
- **[Tailwind CSS v4](https://tailwindcss.com/)** — estilização utilitária
- **[Framer Motion](https://www.framer.com/motion/)** — animações de entrada (fade-in) ao rolar a página
- **[Lucide React](https://lucide.dev/)** — ícones
- **[Vercel](https://vercel.com/)** — hospedagem e deploy contínuo via GitHub

## Estrutura do projeto

```
src/
├── app/
│   ├── layout.tsx        # Layout global, fontes e metadados
│   ├── page.tsx           # Composição das seções da página
│   └── globals.css        # Tema (cores, fontes) e estilos globais
└── components/
    ├── Navbar.tsx          # Menu fixo com navegação e versão mobile
    ├── Hero.tsx            # Seção inicial de apresentação
    ├── About.tsx           # Sobre mim
    ├── Experience.tsx      # Timeline de experiência profissional
    ├── Projects.tsx        # Grid de projetos com imagens e links
    ├── Articles.tsx        # Lista de artigos acadêmicos
    ├── Certifications.tsx  # Grid de certificações
    ├── Skills.tsx          # Skills agrupadas por categoria
    ├── Contact.tsx         # Seção de contato
    ├── Footer.tsx          # Rodapé
    └── FadeIn.tsx          # Wrapper reutilizável de animação de entrada
```

## Rodando localmente

Pré-requisito: [Node.js](https://nodejs.org/) 18 ou superior.

```bash
# Clonar o repositório
git clone https://github.com/Caiosenaf15/portfolio.git
cd portfolio

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

Acesse `http://localhost:3000` no navegador.

## Build de produção

```bash
npm run build
npm start
```

## Deploy

O deploy é feito automaticamente pela [Vercel](https://vercel.com/) a cada push na branch `main`, através da integração com este repositório no GitHub.

## Contato

- **LinkedIn:** [linkedin.com/in/caio-sena-freitas](https://www.linkedin.com/in/caio-sena-freitas/)
- **GitHub:** [github.com/Caiosenaf15](https://github.com/Caiosenaf15)
- **Email:** caiofreitas15@yahoo.com.br
