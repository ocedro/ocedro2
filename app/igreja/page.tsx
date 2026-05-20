import { Button } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';

export default function IgrejaPage() {
  const topics = [
    'Como orientar um membro que não consegue largar a pornografia',
    'Preparar seus conselheiros para atender sem causar mais dano',
    'Quando alguém da congregação perdeu o senso de propósito e vocação',
    'O que dizer quando um membro fiel está paralisado pela ansiedade',
  ];

  return (
    <div className="flex flex-col bg-cedro-white text-cedro-ink">
      <section className="min-h-svh flex items-start md:items-center pt-32 pb-16 relative overflow-hidden bg-white">
        {/* Imagem desktop (md+): horizontal, texto à esquerda */}
        <div
          className="hidden md:block absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'url(/igreja-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Imagem mobile: vertical, texto em cima */}
        <div
          className="block md:hidden absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'url(/igreja-bg-mobile.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Fade desktop: branco da esquerda para direita (texto fica na área clara) */}
        <div className="hidden md:block absolute inset-0 pointer-events-none bg-gradient-to-r from-white via-white/70 to-transparent" />
        {/* Fade mobile: branco do topo para baixo (texto fica no topo na área clara) */}
        <div className="block md:hidden absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-white/85 to-transparent" />

        <div className="max-w-[1200px] mx-auto px-5 md:px-8 w-full relative z-10">
          <div className="max-w-[600px]">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-cedro-red mb-6">Para pastores e líderes</p>
            <h1 className="mb-4" style={{ color: '#0a0a0a' }}>Sua congregação tem perguntas que você não sabe exatamente como responder?</h1>
            <div className="w-12 h-[2px] bg-cedro-red my-6" />
            <p className="text-lg max-w-[600px]" style={{ color: '#3a3a3a' }}>
              Pornografia, ansiedade, identidade, vocação. Questões que chegam até você toda semana e que merecem mais profundidade.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cedro-white text-cedro-ink">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="max-w-[700px]">
            <h2 className="mb-4 text-cedro-navy">E quando a fé parece insuficiente?</h2>
            <Divider className="my-6" />
            <p className="mb-4 text-cedro-ink/72">Você reconhece o poder da oração. Sabe que o Espírito Santo age. Mas também sabe que às vezes falta embasamento. Falta robustez técnica. Falta saber como conduzir um atendimento com respostas mais profundas.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f6f2ea]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-cedro-red mb-4">Sobre o que conversamos</p>
          <h2 className="mb-12 text-cedro-navy">Os temas que chegam toda semana na vida de uma congregação.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {topics.map((topic, i) => (
              <div key={i} className="py-4 border-b border-cedro-clay/15 flex items-start gap-4">
                <div className="w-2 h-2 bg-cedro-red mt-2 shrink-0" />
                <p className="text-[0.95rem] text-cedro-ink/72">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cedro-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-cedro-red mb-4">Como funciona</p>
          <h2 className="mb-8 text-cedro-navy">Tudo começa com um café.</h2>
          <div className="max-w-[700px]">
            <p className="mb-4 text-cedro-ink/72">Antes de qualquer proposta, quero entender sua comunidade. Seus líderes. Os desafios que você não sabe nem como nomear ainda.</p>
            <p className="mb-4 text-cedro-ink/72">A gente marca uma conversa e a partir daí alinhamos o que faz sentido.</p>
            <p className="text-cedro-ink/72">Pode ser uma palestra para a congregação. Pode ser uma tarde de formação com sua equipe pastoral. Pode ser um ciclo de encontros ao longo do ano.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cedro-navy text-center text-cedro-white">
        <div className="max-w-[600px] mx-auto px-5 md:px-8">
          <h2 className="text-cedro-white">Me chama para um café.</h2>
          <p className="text-cedro-sage my-4 mb-8">Nenhum comprometimento. Só uma conversa para entender se faz sentido.</p>
          <Button asChild withArrow>
            <a href="https://wa.me/5519974010520?text=Quero%20conversar%20sobre%20levar%20a%20Cedro%20para%20minha%20igreja" target="_blank" rel="noopener noreferrer">Quero conversar</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
