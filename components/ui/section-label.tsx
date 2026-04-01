export function SectionLabel({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <p className={`font-sans text-xs font-bold tracking-[0.2em] uppercase text-cedro-red mb-6 ${className || ''}`}>
      {children}
    </p>
  );
}
