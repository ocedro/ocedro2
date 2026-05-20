import type { Metadata } from 'next';
import Script from 'next/script';
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
    icon: '/favicon-192.png',
    apple: '/favicon-192.png',
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
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M7FK5MGK');`}
        </Script>
        <Script id="whatsapp-tracking-config" strategy="beforeInteractive">
          {`window.WPP_TRACKING_CONFIG = {
  DEFAULT_MESSAGE: "Olá! Vim do *Google*, e gostaria de mais informações.",
  WARNING_TEXT: "(Esse é seu código de atendimento, por favor não apague! PID=",
  LABEL: 'IDs da nossa conversa (favor não apagar para facilitar sua identificação dentro da nossa base):',
  EXP_DAYS: 30,
  WINDOW_DAYS: 30,
  POST_TIMEOUT: 4000,
  REDIRECT_DELAY_AFTER_OK: 1000,
  TRACKING_PATH_RX: /\\/whats-trck/i
};`}
        </Script>
        <Script src="https://static.mindvertising.com/wpp-tracking/v1/wpp.min.js" strategy="afterInteractive" />
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M7FK5MGK"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <div className="whatsapp-chat whatsapp-chat-mobile">
          <a className="hide-web" href="/whats-trck#5519983133780" target="_blank" rel="noopener noreferrer">
            <img
              title="Contato via Whatsapp"
              src="https://static.wixstatic.com/media/19ca7c_59945c8db19d43c9ac14f49b10cb5cef~mv2.png"
              alt="Contato via Whatsapp"
            />
          </a>
        </div>
        <div className="whatsapp-chat whatsapp-chat-desktop">
          <a className="hide-mobile" href="/whats-trck#5519983133780" target="_blank" rel="noopener noreferrer">
            <img
              title="Contato via Whatsapp"
              src="https://static.wixstatic.com/media/19ca7c_59945c8db19d43c9ac14f49b10cb5cef~mv2.png"
              alt="Contato via Whatsapp"
            />
          </a>
        </div>
        <Footer />
      </body>
    </html>
  );
}
