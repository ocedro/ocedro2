import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentoria Neemias — Leandro Carone',
  description: 'Uma mentoria individual, diretamente com Leandro Carone. Cinco encontros para transformar consciência em direção, estrutura e ação.',
  alternates: { canonical: '/mentoria-neemias' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://ocedro.com.br/mentoria-neemias',
    siteName: 'Clínica Cedro',
    title: 'Mentoria Neemias — Leandro Carone',
    description: 'Mentoria individual para homens que sabem que precisam mudar.',
    images: [{ url: '/og-neemias.png', width: 1200, height: 630, alt: 'Mentoria Neemias' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mentoria Neemias — Leandro Carone',
    description: 'Mentoria individual para homens que sabem que precisam mudar.',
    images: ['/og-neemias.png'],
  },
};

export default function NeemiasLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet" />
      {children}
    </>
  );
}
