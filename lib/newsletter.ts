export type NewsletterPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  coverImage?: string;
  excerpt: string;
  content: string;
};

export const posts: NewsletterPost[] = [
  {
    slug: "bem-vindo-a-newsletter",
    title: "Por que resolvi escrever aqui",
    category: "Editorial",
    date: "01 Abr 2025",
    excerpt:
      "Neste espaço vou publicar o que não cabe em um Reel. Reflexões clínicas, teológicas e sobre o que estou construindo.",
    content: `Este espaço é diferente das redes.

Aqui não há algoritmo decidindo quem lê. Não há corte de 60 segundos. Não há pressão de performance.

É um lugar para pensar em voz alta — com cuidado, sem pressa.

Vou escrever sobre clínica, sobre fé, sobre masculinidade, sobre o que estou lendo, sobre o que estou errando. O que não cabe em um carrossel vai caber aqui.

Se você está lendo isso, obrigado por ter vindo.`,
  },
];
