export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    slug: "entendendo-docker",
    title: "Entendendo Docker para Desenvolvedores",
    excerpt: "Um guia prático sobre containerização",
    content: `
  # Entendendo Docker
  
  Docker revolucionou a forma como deployamos aplicações...
  
  ## Por que usar Docker?
  
  1. **Consistência** - Funciona igual em dev e prod
  2. **Isolamento** - Dependências não conflitam
  3. **Portabilidade** - Roda em qualquer lugar
  
  ## Exemplo Prático
  
  \`\`\`dockerfile
  FROM node:20-alpine
  WORKDIR /app
  COPY package*.json ./
  RUN npm ci
  COPY . .
  CMD ["npm", "start"]
  \`\`\`
      `,
    publishedAt: "2025-01-10",
    author: "João Silva",
    tags: ["docker", "devops", "containers"],
  },
  {
    slug: "typescript-avancado",
    title: "TypeScript Avançado: Utility Types",
    excerpt: "Dominando Partial, Pick, Omit e mais",
    content: `
  # TypeScript Avançado
  
  Utility types são transformações de tipos built-in...
  
  ## Os Mais Úteis
  
  ### Partial<T>
  Torna todas as propriedades opcionais.
  
  ### Pick<T, K>
  Seleciona apenas algumas propriedades.
  
  ### Omit<T, K>  
  Remove propriedades específicas.
      `,
    publishedAt: "2025-01-08",
    author: "Maria Santos",
    tags: ["typescript", "javascript", "tipos"],
  },
  {
    slug: "arquitetura-microsservicos",
    title: "Microsserviços: Quando Usar?",
    excerpt: "Trade-offs e decisões arquiteturais",
    content: `
  # Microsserviços
  
  Nem sempre são a resposta certa...
  
  ## Quando FAZ sentido
  - Times grandes e independentes
  - Escala diferente por domínio
  - Deploy independente é crítico
  
  ## Quando NÃO faz sentido
  - Time pequeno
  - MVP/Startup early stage
  - Domínio não bem definido
      `,
    publishedAt: "2025-01-05",
    author: "Carlos Oliveira",
    tags: ["arquitetura", "microsserviços", "backend"],
  },
];

export function getAllPosts(): Post[] {
  return posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function searchPosts(query: string): Post[] {
  const lowerQuery = query.toLowerCase();
  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.excerpt.toLowerCase().includes(lowerQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

export function getAllTags(): string[] {
  const tags = new Set(posts.flatMap((post) => post.tags));
  return Array.from(tags).sort();
}
