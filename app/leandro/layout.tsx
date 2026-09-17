import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leandro Carone — Psicólogo cristão e logoterapeuta',
  description: 'Psicólogo clínico, logoterapeuta, fundador da Clínica Cedro. Atendimento online integrando fé e psicologia.',
  alternates: {
    canonical: '/leandro',
  },
  openGraph: {
    type: 'profile',
    locale: 'pt_BR',
    url: 'https://ocedro.com.br/leandro',
    siteName: 'Clínica Cedro',
    title: 'Leandro Carone — Psicólogo cristão e logoterapeuta',
    description: 'Psicólogo clínico, logoterapeuta, fundador da Clínica Cedro.',
    images: [
      {
        url: '/og-leandro.png',
        width: 1200,
        height: 630,
        alt: 'Leandro Carone — Psicólogo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leandro Carone — Psicólogo cristão e logoterapeuta',
    description: 'Psicólogo clínico, logoterapeuta.',
    images: ['/og-leandro.png'],
  },
};

export default function LeandroLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet" />
      {children}
    </>
  );
}
