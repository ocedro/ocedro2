import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Newsletter — Clínica Cedro',
  description: 'Reflexões sobre fé, psicologia e profundidade. Textos do Leandro Carone direto no seu e-mail.',
  alternates: {
    canonical: '/newsletter',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://ocedro.com.br/newsletter',
    siteName: 'Clínica Cedro',
    title: 'Newsletter — Clínica Cedro',
    description: 'Reflexões sobre fé, psicologia e profundidade. Textos do Leandro Carone direto no seu e-mail.',
    images: [
      {
        url: '/og-newsletter.png',
        width: 1200,
        height: 630,
        alt: 'Newsletter — Clínica Cedro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Newsletter — Clínica Cedro',
    description: 'Reflexões sobre fé, psicologia e profundidade.',
    images: ['/og-newsletter.png'],
  },
};

export default function NewsletterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
