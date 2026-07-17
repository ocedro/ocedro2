import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Psicologia para mulheres — Beatriz Carone',
  description: 'Um espaço de escuta, fé e cuidado psicológico para mulheres que desejam viver com mais leveza, clareza e inteireza.',
  alternates: { canonical: '/beatriz' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://ocedro.com.br/beatriz',
    siteName: 'Clínica Cedro',
    title: 'Psicologia para mulheres — Beatriz Carone',
    description: 'Acolhimento psicológico com profundidade, respeito à sua fé e atenção à sua história.',
    images: [{ url: '/beatriz-hero.jpeg', width: 1365, height: 2048, alt: 'Beatriz Carone' }],
  },
};

export default function BeatrizLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
