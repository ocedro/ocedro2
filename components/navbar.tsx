'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  if (pathname?.startsWith('/desafio-14-dias')) return null;

  const links = [
    { href: '/', label: 'Home' },
    { href: '/leandro', label: 'Leandro Carone' },
    { href: '/agende', label: 'Agende sua Consulta' },
    { href: '/igreja', label: 'Cedro na sua Igreja' },
    { href: '/lab', label: 'CedroLAB' },
    { href: '/fineias', label: 'Mentoria Finéias' },
    { href: '/newsletter', label: 'Newsletter' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-cedro-black/85 backdrop-blur-xl border-b border-cedro-sage/10 transition-all">
      <div className="max-w-[1200px] mx-auto px-8 flex items-center justify-between">
        <Link href="/" className="transition-opacity hover:opacity-90">
          <Logo />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors relative py-1",
                  pathname === link.href ? "text-cedro-white" : "text-cedro-sage hover:text-cedro-white",
                  pathname === link.href && "after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-cedro-red"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="https://form.respondi.app/tiN0kxRc"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block text-xs px-5 py-2.5 bg-cedro-red text-cedro-white font-bold tracking-wider uppercase transition-colors hover:bg-cedro-red-hover"
        >
          Agendar sessão
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-cedro-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-0 right-0 w-[75%] max-w-[360px] h-screen bg-cedro-navy flex flex-col pt-20 px-8 gap-6 transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          className="absolute top-5 right-8 text-cedro-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>
        <ul className="flex flex-col gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium transition-colors",
                  pathname === link.href ? "text-cedro-white" : "text-cedro-sage"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="https://form.respondi.app/tiN0kxRc"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-center text-sm px-5 py-3 bg-cedro-red text-cedro-white font-bold tracking-wider uppercase transition-colors hover:bg-cedro-red-hover"
        >
          Agendar sessão
        </a>
      </div>
    </nav>
  );
}
