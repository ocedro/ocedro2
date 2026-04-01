export function Divider({ className }: { className?: string }) {
  return <div className={`w-[60px] h-[2px] bg-cedro-red my-8 ${className || ''}`} />;
}
