'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cedro-black text-cedro-white px-8 text-center">
      <h1 className="text-cedro-red mb-4">Erro</h1>
      <h2 className="mb-6">Algo deu errado.</h2>
      <p className="text-cedro-sage mb-10 max-w-[500px]">
        Ocorreu um erro inesperado ao carregar esta página.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()}>Tentar novamente</Button>
        <Button asChild variant="outline">
          <Link href="/">Voltar para a Home</Link>
        </Button>
      </div>
    </div>
  );
}
