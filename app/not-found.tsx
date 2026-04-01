import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cedro-black text-cedro-white px-8 text-center">
      <h1 className="text-cedro-red mb-4">404</h1>
      <h2 className="mb-6">Página não encontrada.</h2>
      <p className="text-cedro-sage mb-10 max-w-[500px]">
        O conteúdo que você está procurando não existe ou foi movido.
      </p>
      <Button asChild withArrow>
        <Link href="/">Voltar para a Home</Link>
      </Button>
    </div>
  );
}
