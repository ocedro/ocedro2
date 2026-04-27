import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cedro na sua igreja — Palestras, treinamentos e supervisão',
  description: 'Fortalecemos comunidades integrando fé, psicologia, filosofia e neurociência. Palestras, treinamentos de liderança e supervisão clínica para igrejas.',
  alternates: {
    canonical: '/igreja',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://ocedro.com.br/igreja',
    siteName: 'Clínica Cedro',
    title: 'Cedro na sua igreja — Palestras, treinamentos e supervisão',
    description: 'Fortalecemos comunidades integrando fé, psicologia, filosofia e neurociência. Palestras, treinamentos e supervisão clínica para igrejas.',
    images: [
      {
        url: '/og-igreja.png',
        width: 1200,
        height: 630,
        alt: 'Cedro na sua igreja',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cedro na sua igreja',
    description: 'Palestras, treinamentos e supervisão para igrejas.',
    images: ['/og-igreja.png'],
  },
};

export default function IgrejaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
