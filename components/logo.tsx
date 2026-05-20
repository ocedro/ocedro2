import React from 'react';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image 
        src="/favicon-192.png"
        alt=""
        width={192}
        height={192}
        className="h-8 w-8 object-contain"
        priority
      />
      <span className="font-sans text-[1.5rem] font-bold leading-none tracking-normal text-cedro-navy">
        cedro<span className="align-super text-[0.42em] font-normal ml-0.5">®</span>
      </span>
    </div>
  );
}
