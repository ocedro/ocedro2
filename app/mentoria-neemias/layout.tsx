import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentoria Neemias — Atendimento individual com Leandro Carone',
  description: 'Mentoria individual para homens cristãos. Cinco encontros, atenção total, sem turma, sem grupo. Para quem precisa reconstruir a própria estrutura com privacidade e acompanhamento direto.',
  alternates: {
    canonical: '/mentoria-neemias',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://ocedro.com.br/mentoria-neemias',
    siteName: 'Clínica Cedro',
    title: 'Mentoria Neemias — Atendimento individual com Leandro Carone',
    description: 'Mentoria individual para homens cristãos. Cinco encontros, atenção total, sem turma, sem grupo.',
    images: [{ url: '/og-fineias.png', width: 1200, height: 630, alt: 'Mentoria Neemias' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mentoria Neemias — Atendimento individual com Leandro Carone',
    description: 'Mentoria individual para homens cristãos. Cinco encontros, atenção total, sem turma.',
    images: ['/og-fineias.png'],
  },
};

export default function NeemiasLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      '--color-cedro-red':       '#C8C8C0',
      '--color-cedro-red-hover': '#9a7d25',
      '--color-cedro-white':     '#e8e0cc',
      '--color-cedro-light':     '#f0ebe0',
      '--color-cedro-black':     '#0a0a0a',
      '--color-cedro-navy':      '#111111',
      '--color-cedro-sage':      'rgba(232,224,204,0.55)',
    } as React.CSSProperties}>
      {children}
    </div>
  );
}
