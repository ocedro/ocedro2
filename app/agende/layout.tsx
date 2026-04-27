import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agende sua consulta — Clínica Cedro',
  description: 'Atendimento psicológico online com profissionais cristãos. Terapia que integra fé, ciência e profundidade.',
  alternates: {
    canonical: '/agende',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://ocedro.com.br/agende',
    siteName: 'Clínica Cedro',
    title: 'Agende sua consulta — Clínica Cedro',
    description: 'Atendimento psicológico online com profissionais cristãos. Terapia que integra fé, ciência e profundidade.',
    images: [
      {
        url: '/og-agende.png',
        width: 1200,
        height: 630,
        alt: 'Agende sua consulta — Clínica Cedro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agende sua consulta — Clínica Cedro',
    description: 'Atendimento psicológico online com profissionais cristãos.',
    images: ['/og-agende.png'],
  },
};

export default function AgendeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
