import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://ocedro.com.br'),
  title: {
    default: 'Clínica Cedro — Psicologia, fé e profundidade',
    template: '%s | Clínica Cedro',
  },
  description: 'Terapia para quem não quer escolher entre fé e saúde mental. Atendimento online com psicólogos cristãos.',
  applicationName: 'Clínica Cedro',
  authors: [{ name: 'Leandro Carone', url: 'https://ocedro.com.br/leandro' }],
  creator: 'Clínica Cedro',
  publisher: 'Clínica Cedro',
  keywords: [
    'psicologia cristã',
    'terapia cristã',
    'logoterapia',
    'Leandro Carone',
    'Clínica Cedro',
    'psicólogo cristão',
    'aconselhamento cristão',
    'psicologia e fé',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://ocedro.com.br',
    siteName: 'Clínica Cedro',
    title: 'Clínica Cedro — Psicologia, fé e profundidade',
    description: 'Terapia para quem não quer escolher entre fé e saúde mental. Atendimento online com psicólogos cristãos.',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Clínica Cedro — Psicologia, fé e profundidade',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clínica Cedro — Psicologia, fé e profundidade',
    description: 'Terapia para quem não quer escolher entre fé e saúde mental.',
    images: ['/og-default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
        <style>{`* { --font-cormorant: 'Cormorant', 'Georgia', ui-serif, serif; }`}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalBusiness',
              '@id': 'https://ocedro.com.br/#organization',
              name: 'Clínica Cedro',
              url: 'https://ocedro.com.br',
              logo: 'https://ocedro.com.br/logo.png',
              image: 'https://ocedro.com.br/og-default.png',
              description: 'Clínica de psicologia online para o público cristão. Terapia integrando fé e saúde mental.',
              medicalSpecialty: 'Psychology',
              areaServed: {
                '@type': 'Country',
                name: 'Brasil',
              },
              founder: {
                '@type': 'Person',
                name: 'Leandro Carone',
                jobTitle: 'Psicólogo Clínico',
                identifier: 'CRP 06/161663',
              },
              sameAs: [
                'https://www.instagram.com/ocedro',
                'https://www.instagram.com/oleandrocarone',
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans bg-cedro-black text-cedro-light antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
