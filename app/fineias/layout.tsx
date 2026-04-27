import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentoria Fineias — Sociedade Fineias',
  description: 'Mentoria em grupo para homens cristãos prontos para quebrar o ciclo do vício em pornografia. 10 encontros, 12 homens, sem gravação.',
  alternates: {
    canonical: '/fineias',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://ocedro.com.br/fineias',
    siteName: 'Clínica Cedro',
    title: 'Mentoria Fineias — Sociedade Fineias',
    description: 'Mentoria em grupo para homens cristãos prontos para quebrar o ciclo do vício em pornografia. 10 encontros, 12 homens, sem gravação.',
    images: [
      {
        url: '/og-fineias.png',
        width: 1200,
        height: 630,
        alt: 'Mentoria Fineias — Sociedade Fineias',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mentoria Fineias — Sociedade Fineias',
    description: 'Mentoria em grupo para homens cristãos prontos para quebrar o ciclo do vício em pornografia.',
    images: ['/og-fineias.png'],
  },
};

export default function FineiasLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      '--color-cedro-red':       '#c48f4b',
      '--color-cedro-red-hover': '#a8773a',
      '--color-cedro-white':     '#dbd3c0',
      '--color-cedro-light':     '#ede8de',
      '--color-cedro-black':     '#1e0c04',
      '--color-cedro-navy':      '#36170a',
      '--color-cedro-sage':      'rgba(219,211,192,0.6)',
    } as React.CSSProperties}>
      {children}
    </div>
  );
}
