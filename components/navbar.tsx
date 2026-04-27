'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';

type MenuItem =
  | { type: 'link'; href: string; label: string }
  | { type: 'group'; label: string; items: { href: string; label: string; description?: string }[] };

const menu: MenuItem[] = [
  { type: 'link', href: '/', label: 'Home' },
  { type: 'link', href: '/leandro', label: 'Sobre o Leandro' },
  { type: 'link', href: '/agende', label: 'Agende sua consulta' },
  { type: 'link', href: '/igreja', label: 'Para igrejas' },
  {
    type: 'group',
    label: 'Mentorias',
    items: [
      { href: '/lab', label: 'CedroLAB', description: 'Mentoria para psicólogos' },
      { href: '/fineias', label: 'Finéias', description: 'Para homens cristãos' },
    ],
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState<string | null>(null);
  const desktopGroupRef = useRef<HTMLDivElement>(null);

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (desktopGroupRef.current && !desktopGroupRef.current.contains(event.target as Node)) {
        setOpenGroup(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fecha drawer ao mudar de rota
  useEffect(() => {
    setIsOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  if (pathname?.startsWith('/desafio-14-dias')) return null;

  const isLinkActive = (href: string) => pathname === href;
  const isGroupActive = (items: { href: string }[]) => items.some((i) => pathname === i.href);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-cedro-black/85 backdrop-blur-xl border-b border-cedro-sage/10 transition-all">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex items-center justify-between">
        <Link href="/" className="transition-opacity hover:opacity-90">
          <Logo />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-7 items-center" ref={desktopGroupRef}>
          {menu.map((item) => {
            if (item.type === 'link') {
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'text-sm font-medium transition-colors relative py-1',
                      isLinkActive(item.href) ? 'text-cedro-white' : 'text-cedro-sage hover:text-cedro-white',
                      isLinkActive(item.href) && 'after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-cedro-red'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }

            // Group dropdown
            const active = isGroupActive(item.items);
            const open = openGroup === item.label;
            return (
              <li key={item.label} className="relative">
                <button
                  type="button"
                  onClick={() => setOpenGroup(open ? null : item.label)}
                  className={cn(
                    'text-sm font-medium transition-colors relative py-1 flex items-center gap-1',
                    active || open ? 'text-cedro-white' : 'text-cedro-sage hover:text-cedro-white',
                    active && 'after:absolute after:bottom-[-4px] after:left-0 after:right-[18px] after:h-[2px] after:bg-cedro-red'
                  )}
                  aria-expanded={open}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown size={14} className={cn('transition-transform', open && 'rotate-180')} />
                </button>
                {open && (
                  <div
                    className="absolute top-[calc(100%+12px)] left-[-8px] min-w-[260px] bg-[#1a1a1a] border border-cedro-sage/15 shadow-xl py-2 animate-in fade-in slide-in-from-top-1 duration-150"
                    role="menu"
                  >
                    {item.items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setOpenGroup(null)}
                        className={cn(
                          'block px-4 py-3 transition-colors hover:bg-cedro-navy',
                          isLinkActive(sub.href) && 'bg-cedro-navy'
                        )}
                        role="menuitem"
                      >
                        <span className="block text-sm font-medium text-cedro-white">{sub.label}</span>
                        {sub.description && (
                          <span className="block text-xs text-cedro-sage mt-0.5">{sub.description}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <a
          href="https://form.respondi.app/tiN0kxRc"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block text-xs px-5 py-2.5 bg-cedro-red text-cedro-white font-bold tracking-wider uppercase transition-colors hover:bg-cedro-red-hover"
        >
          Marcar consulta
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-cedro-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed top-0 right-0 w-[80%] max-w-[360px] h-screen bg-cedro-navy flex flex-col pt-20 px-7 gap-2 transition-transform duration-300 ease-in-out md:hidden overflow-y-auto',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <button
          className="absolute top-5 right-7 text-cedro-white"
          onClick={() => setIsOpen(false)}
          aria-label="Fechar menu"
        >
          <X size={24} />
        </button>
        <ul className="flex flex-col gap-1">
          {menu.map((item) => {
            if (item.type === 'link') {
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'block py-3 text-base font-medium transition-colors',
                      isLinkActive(item.href) ? 'text-cedro-white' : 'text-cedro-sage'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }

            const expanded = mobileExpandedGroup === item.label;
            const active = isGroupActive(item.items);
            return (
              <li key={item.label}>
                <button
                  type="button"
                  className={cn(
                    'w-full flex items-center justify-between py-3 text-base font-medium transition-colors text-left',
                    active ? 'text-cedro-white' : 'text-cedro-sage'
                  )}
                  onClick={() => setMobileExpandedGroup(expanded ? null : item.label)}
                  aria-expanded={expanded}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    size={16}
                    className={cn('transition-transform text-cedro-red', expanded && 'rotate-180')}
                  />
                </button>
                {expanded && (
                  <div className="pl-4 border-l-2 border-cedro-red/30 flex flex-col mt-1 mb-2">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          'py-2.5 text-sm transition-colors',
                          isLinkActive(sub.href) ? 'text-cedro-white' : 'text-cedro-sage/85'
                        )}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        <a
          href="https://form.respondi.app/tiN0kxRc"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 text-center text-sm px-5 py-3.5 bg-cedro-red text-cedro-white font-bold tracking-wider uppercase transition-colors hover:bg-cedro-red-hover"
        >
          Marcar consulta
        </a>
      </div>
    </nav>
  );
}
