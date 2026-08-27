import { Button } from '@/components/ui/button';

const WA_LINK = 'https://wa.me/5519983133780?text=Quero%20saber%20mais%20sobre%20a%20Mentoria%20Neemias';

export default function NeemiasPage() {
  return (
    <div className="flex flex-col bg-cedro-black text-cedro-white">

      {/* HERO */}
      <section className="min-h-svh flex items-center pt-32 pb-20 relative overflow-hidden">
        {/* Vignette sutil */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(184,150,46,0.04) 0%, transparent 70%)' }} />
        {/* Linha dourada no topo */}
        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, #b8962e, transparent)' }} />

        <div className="max-w-[860px] mx-auto px-5 md:px-8 relative z-10 w-full text-center">
          {/* Label */}
          <p className="text-xs font-sans tracking-[0.4em] uppercase mb-10" style={{ color: '#b8962e' }}>
            Mentoria Neemias
          </p>

          <h1 className="mb-8 text-cedro-white font-serif" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.15, fontWeight: 700 }}>
            Você sabe que tem um problema.<br />O que você não tem é um plano.
          </h1>

          <p className="text-lg text-cedro-sage mb-12 max-w-[620px] mx-auto leading-relaxed">
            A Mentoria Neemias é um processo individual, direto comigo. Cinco encontros para entender quem você é, resolver o que está te prendendo e sair com um plano concreto para a sua vida.
          </p>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="neemias-cta inline-flex items-center gap-3 px-8 py-4 text-sm font-sans font-semibold tracking-[0.12em] uppercase transition-all"
          >
            Tenho interesse na Mentoria Neemias
            <span>→</span>
          </a>
        </div>

        {/* Linha dourada no rodapé da seção */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(184,150,46,0.3), transparent)' }} />
      </section>

      {/* SEÇÃO DESCRITIVA */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#111111' }}>
        <div className="max-w-[720px] mx-auto px-5 md:px-8">

          <p className="text-xs font-sans tracking-[0.4em] uppercase mb-12" style={{ color: '#b8962e' }}>
            O processo
          </p>

          <div className="space-y-6 text-cedro-sage leading-relaxed" style={{ fontSize: '1.05rem' }}>
            <p>
              Cinco encontros individuais, uma hora cada. Ninguém mais na sala. Sem turma, sem grupo, sem data compartilhada com outros homens.
            </p>
            <p>
              Entre os encontros, acompanhamento direto comigo durante cinco semanas.
            </p>
            <p>
              Você sai com mais do que um plano escrito. Sai sabendo quem você é, para onde aponta a sua vida, e com as principais questões que estavam te prendendo enfrentadas de frente. Vício, identidade, estrutura. O que precisar.
            </p>
            <p className="font-semibold" style={{ color: '#e8e0cc' }}>
              Não só teoria. Vou te ajudar a executar o que concluímos juntos nos encontros.
            </p>
          </div>

          {/* Três pilares */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-12" style={{ borderTop: '1px solid rgba(184,150,46,0.3)' }}>
            {[
              { num: '5', label: 'encontros individuais' },
              { num: '5', label: 'semanas de acompanhamento' },
              { num: '0', label: 'outros na sala' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="font-serif font-bold mb-1" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#b8962e', lineHeight: 1 }}>
                  {item.num}
                </div>
                <p className="text-xs text-cedro-sage tracking-wide mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTIMENTO + CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(184,150,46,0.04) 0%, transparent 70%)' }} />
        <div className="max-w-[560px] mx-auto px-5 md:px-8 relative z-10 text-center">

          <p className="text-xs font-sans tracking-[0.4em] uppercase mb-10" style={{ color: '#b8962e' }}>
            Investimento
          </p>

          {/* Parcelado */}
          <p className="text-cedro-sage text-xs uppercase tracking-widest mb-3">Parcelado</p>
          <div className="flex items-baseline justify-center gap-2 mb-6">
            <span className="text-cedro-sage text-base">12x</span>
            <span className="font-serif font-bold text-cedro-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1 }}>
              R$ 295
            </span>
          </div>

          {/* Divider */}
          <div className="mx-auto my-6 w-16 h-[1px]" style={{ background: 'rgba(184,150,46,0.3)' }} />

          {/* À vista */}
          <p className="text-cedro-sage text-xs uppercase tracking-widest mb-3">À vista</p>
          <div className="flex items-baseline justify-center gap-2 mb-4">
            <span className="font-serif font-bold mb-10" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1, color: '#b8962e' }}>
              R$ 2.997
            </span>
          </div>

          <p className="text-cedro-sage text-sm mb-12">
            5 encontros individuais + acompanhamento por WhatsApp durante todo o processo.
          </p>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="neemias-cta inline-flex items-center gap-3 px-8 py-4 text-sm font-sans font-semibold tracking-[0.12em] uppercase transition-all"
          >
            Tenho interesse na Mentoria Neemias
            <span>→</span>
          </a>
        </div>
      </section>

    </div>
  );
}
