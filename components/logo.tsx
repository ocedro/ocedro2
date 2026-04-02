import React from 'react';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image 
        src="/logo.png"
        alt="Clínica Cedro" 
        width={1001}
        height={220}
        className="h-8 w-auto object-contain"
        priority
      />
    </div>
  );
}
