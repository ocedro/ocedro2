'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/logo';

export function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/desafio-14-dias')) return null;

  return (
    <footer className="pt-16 pb-8 border-t border-cedro-sage/10 bg-cedro-black">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-sm text-cedro-sage">Psicologia profissional para quem leva fé e saúde mental a sério.</p>
            <p className="mt-4 text-sm text-cedro-sage">ocedro.com.br</p>
          </div>
          
          <div>
            <h4 className="font-sans text-sm font-bold text-cedro-white uppercase tracking-widest mb-4">Navegação</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-cedro-sage hover:text-cedro-red transition-colors">Home</Link>
              <Link href="/leandro" className="text-sm text-cedro-sage hover:text-cedro-red transition-colors">Sobre o Leandro</Link>
              <Link href="/agende" className="text-sm text-cedro-sage hover:text-cedro-red transition-colors">Agende sua consulta</Link>
              <Link href="/igreja" className="text-sm text-cedro-sage hover:text-cedro-red transition-colors">Para igrejas</Link>
              <Link href="/newsletter" className="text-sm text-cedro-sage hover:text-cedro-red transition-colors">Newsletter</Link>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-sm font-bold text-cedro-white uppercase tracking-widest mb-4">Mentorias</h4>
            <div className="flex flex-col gap-2">
              <Link href="/lab" className="text-sm text-cedro-sage hover:text-cedro-red transition-colors">CedroLAB</Link>
              <Link href="/fineias" className="text-sm text-cedro-sage hover:text-cedro-red transition-colors">Sociedade Finéias</Link>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-sm font-bold text-cedro-white uppercase tracking-widest mb-4">Redes</h4>
            <div className="flex flex-col gap-2">
              <a href="https://instagram.com/oleandrocarone" target="_blank" rel="noopener noreferrer" className="text-sm text-cedro-sage hover:text-cedro-red transition-colors">Instagram</a>
              <a href="https://form.respondi.app/tiN0kxRc" target="_blank" rel="noopener noreferrer" className="text-sm text-cedro-sage hover:text-cedro-red transition-colors">Marcar consulta</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-cedro-sage/10 flex flex-col md:flex-row justify-between text-xs text-cedro-sage/60 gap-4">
          <span>© 2026 Clínica Cedro. Todos os direitos reservados.</span>
          <span>Campinas — SP</span>
        </div>
      </div>
    </footer>
  );
}
