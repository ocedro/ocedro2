import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leandro Carone — Psicólogo cristão e logoterapeuta',
  description: 'Psicólogo clínico (CRP 06/161663), logoterapeuta, fundador da Clínica Cedro. Atendimento online integrando fé e psicologia.',
  alternates: {
    canonical: '/leandro',
  },
  openGraph: {
    type: 'profile',
    locale: 'pt_BR',
    url: 'https://ocedro.com.br/leandro',
    siteName: 'Clínica Cedro',
    title: 'Leandro Carone — Psicólogo cristão e logoterapeuta',
    description: 'Psicólogo clínico (CRP 06/161663), logoterapeuta, fundador da Clínica Cedro.',
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
    description: 'Psicólogo clínico (CRP 06/161663), logoterapeuta.',
    images: ['/og-leandro.png'],
  },
};

export default function LeandroLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
