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
    images: [
      {
        url: '/og-fineias.png',
        width: 1200,
        height: 630,
        alt: 'Mentoria Neemias',
      },
    ],
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
      '--color-cedro-red':       '#C08A3E',
      '--color-cedro-red-hover': '#a8773a',
      '--color-cedro-white':     '#DED6C0',
      '--color-cedro-light':     '#ede8de',
      '--color-cedro-black':     '#2E1810',
      '--color-cedro-navy':      '#3d2015',
      '--color-cedro-sage':      'rgba(222,214,192,0.6)',
    } as React.CSSProperties}>
      {children}
    </div>
  );
}
