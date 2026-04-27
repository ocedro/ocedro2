import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CedroLAB — Mentoria para Psicólogos',
  description: 'Identidade profissional para psicólogos cristãos. Posicionamento, precificação e supervisão clínica com Leandro Carone.',
  alternates: {
    canonical: '/lab',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://ocedro.com.br/lab',
    siteName: 'Clínica Cedro',
    title: 'CedroLAB — Mentoria para Psicólogos',
    description: 'Identidade profissional para psicólogos cristãos. Posicionamento, precificação e supervisão clínica.',
    images: [
      {
        url: '/og-lab.png',
        width: 1200,
        height: 630,
        alt: 'CedroLAB — Mentoria para Psicólogos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CedroLAB — Mentoria para Psicólogos',
    description: 'Identidade profissional para psicólogos cristãos.',
    images: ['/og-lab.png'],
  },
};

export default function LabLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      '--color-cedro-red': '#006ede',
      '--color-cedro-red-hover': '#0058c4',
      '--color-cedro-white': '#f1f1f1',
      '--color-cedro-light': '#f1f1f1',
      '--color-cedro-black': '#010101',
      '--color-cedro-navy': '#001a3d',
      '--color-cedro-sage': '#5a9fd4',
    } as React.CSSProperties}>
      {children}
    </div>
  );
}
