import React from 'react';
import Image from 'next/image';

export function Logo({ className, white = false }: { className?: string; white?: boolean }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image 
        src={white ? '/cedro-logo-white.png' : '/cedro-logo-black.png'}
        alt="Clínica Cedro"
        width={1001}
        height={220}
        className="h-8 w-auto object-contain"
        priority
      />
    </div>
  );
}
