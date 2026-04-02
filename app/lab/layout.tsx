import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CedroLAB — Mentoria para Psicólogos',
  description: 'Identidade profissional para psicólogos cristãos. Posicionamento, precificação e supervisão clínica.',
};

export default function LabLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      '--color-cedro-red': '#006ede',
      '--color-cedro-red-hover': '#0058c4',
      '--color-cedro-white': '#f1f1f1',
      '--color-cedro-light': '#f1f1f1',
      '--color-cedro-black': '#010101',
      '--color-cedro-navy': '#001a3d',
      '--color-cedro-sage': '#5a9fd4',
    } as React.CSSProperties}>
      {/* Navbar sobrescrito com logo CedroLAB */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-[#010101]/90 backdrop-blur-xl border-b border-[#5a9fd4]/10">
        <div className="max-w-[1200px] mx-auto px-8 flex items-center justify-between">
          <Link href="/lab">
            <Image
              src="/cedrolab-logo.png"
              alt="CedroLAB"
              width={160}
              height={40}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>
          <a
            href="https://form.respondi.app/dbn6xbQI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-5 py-2.5 bg-[#006ede] text-[#f1f1f1] font-bold tracking-wider uppercase transition-colors hover:bg-[#0058c4]"
          >
            Aplicar para a CedroLAB
          </a>
        </div>
      </nav>
      {children}
    </div>
  );
}
