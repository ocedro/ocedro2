import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pare de Lutar Contra o Porno — Desafio 14 Dias',
  description: '14 dias para provar que você pode decidir. Com âncora bíblica e exercício prático todo dia.',
};

export default function DesafioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400;1,700&family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300;1,9..40,400&display=swap"
        rel="stylesheet"
      />
      {children}
    </>
  );
}
