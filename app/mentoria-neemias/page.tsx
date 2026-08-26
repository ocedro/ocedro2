import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SectionLabel } from '@/components/ui/section-label';

const WA_LINK = 'https://wa.me/5519983133780?text=Quero%20saber%20mais%20sobre%20a%20Mentoria%20Neemias';

export default function NeemiasPage() {
  const encounters = [
    { num: '01', title: 'Diagnóstico e identidade', desc: 'Seu histórico, o que já tentou, o que nunca funcionou. Construção do eixo de identidade que sustenta todo o resto do plano.' },
    { num: '02', title: 'Mapeamento pessoal do ciclo', desc: 'Gatilhos, contextos, horários, estados emocionais específicos que precedem a queda. Precisão cirúrgica sobre a sua geografia de risco, não uma categoria geral de vício.' },
    { num: '03', title: 'Mentiras e mecanismo', desc: 'As crenças específicas que sustentam seu ciclo. O vício como mecanismo de três camadas, comportamental, emocional e espiritual, aplicado ao seu caso.' },
    { num: '04', title: 'Masculinidade redimida e código pessoal', desc: 'Reconstrução da identidade masculina a partir da sua própria formação. Definição do seu código de honra pessoal.' },
    { num: '05', title: 'Plano de guerra e envio', desc: 'Consolidação de tudo em um documento escrito. Protocolos, rotina de vigilância, e para onde essa liberdade recuperada vai apontar depois que a mentoria terminar.' },
  ];

  const textureStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
    backgroundSize: '300px 300px',
  };

  return (
    <div className="flex flex-col">

      {/* HERO */}
      <section className="min-h-svh flex items-end md:items-center pt-32 pb-12 md:pb-20 bg-cedro-black relative overflow-hidden">
        <div
          className="hidden md:block absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'url(/fineias-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center right' }}
        />
        <div
          className="block md:hidden absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'url(/fineias-bg-mobile.png)', backgroundSize: 'cover', backgroundPosition: 'center top' }}
        />
        <div className="md:hidden absolute inset-0 pointer-events-none bg-gradient-to-t from-cedro-black via-cedro-black/85 via-50% to-transparent" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 50%, transparent 25%, rgba(10,4,1,0.85) 100%)' }} />
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10 w-full">
          <div className="max-w-[640px]">
            <Image
              src="/fineias-logo.png"
              alt="Mentoria Neemias"
              width={948}
              height={137}
              className="w-auto mb-10 object-contain"
              style={{ height: '70px' }}
              priority
            />
            <SectionLabel>Mentoria Neemias</SectionLabel>
            <h1 className="mb-6 text-cedro-white">
              Antes de reconstruir o muro, Neemias caminhou sozinho pelas ruínas, de noite, sem contar a ninguém o que estava fazendo.
            </h1>
            <p className="text-lg text-cedro-sage mb-10">
              Essa é a Mentoria Neemias: atendimento individual comigo, cinco encontros, sem turma, sem grupo, sem data fixa dividida com mais ninguém. Para o homem que precisa reconstruir a própria estrutura, mas não pode, ou não quer, fazer essa inspeção com outras onze pessoas na sala.
            </p>
            <Button asChild withArrow>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">Quero conversar sobre o Neemias</a>
            </Button>
          </div>
        </div>
      </section>

      {/* O PROBLEMA QUE PEDE OUTRO FORMATO */}
      <section className="py-24 bg-cedro-navy text-cedro-white relative overflow-hidden" style={textureStyle}>
        <div className="max-w-[720px] mx-auto px-5 md:px-8 relative z-10">
          <h2 className="mb-10 text-cedro-white">Existe um tipo de processo que só acontece quando ninguém mais está olhando.</h2>
          <p className="text-cedro-sage mb-5">Pastor, líder, executivo, alguém com nome conhecido na cidade ou na igreja. Para esse homem, o risco de ser reconhecido pesa mais do que qualquer benefício de estar cercado por outras pessoas, e esse cálculo silencioso costuma adiar a decisão de buscar ajuda por anos.</p>
          <p className="text-cedro-sage mb-5">A Mentoria Neemias existe para esse homem, e para quem simplesmente quer o nível mais alto de atenção que dá para oferecer.</p>
          <p className="text-cedro-sage mb-5">Cinco semanas, direto comigo. Sem turma, sem data compartilhada, sem roteiro genérico repetido para outras pessoas. Cada sessão nasce do seu histórico específico.</p>
          <p className="text-cedro-sage mb-5">Entre os encontros, contato direto comigo por WhatsApp e áudio. Acompanhamento enquanto o processo está acontecendo, não relatado depois numa reunião marcada com antecedência.</p>
          <p className="text-cedro-sage font-semibold text-cedro-white/90">Atenção plena, sem divisão.</p>
        </div>
      </section>

      {/* A PROPOSTA */}
      <section className="py-24 bg-cedro-black text-cedro-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>A proposta</SectionLabel>
              <h2 className="mb-6 text-cedro-white">
                Neemias inspecionou o muro de Jerusalém sozinho, de noite, antes de mobilizar qualquer pessoa para reconstruir.
              </h2>
              <p className="mb-4 text-cedro-sage">Levantou o diagnóstico completo do que estava destruído, desenhou um plano, e só depois chamou o povo para erguer junto. No fim do livro, quando o compromisso do povo volta a se corromper, ele confronta pessoalmente quem está sabotando o que foi construído. Não terceiriza a defesa do que reconstruiu.</p>
              <p className="mb-4 text-cedro-sage">É essa sequência, diagnóstico solitário, plano, reconstrução, e depois zelo para proteger o que foi erguido, que estrutura a Mentoria Neemias.</p>
              <p className="text-cedro-sage">Você sai com um plano de guerra pessoal, escrito, revisado comigo, e a experiência de ter enfrentado isso sem precisar dividir a sala com mais ninguém.</p>
            </div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 my-12">
                <div className="text-center p-8 border border-cedro-sage/10 bg-cedro-navy">
                  <div className="font-serif text-5xl font-bold text-cedro-red">5</div>
                  <p className="text-sm text-cedro-sage mt-2">Encontros individuais</p>
                </div>
                <div className="text-center p-8 border border-cedro-sage/10 bg-cedro-navy">
                  <div className="font-serif text-5xl font-bold text-cedro-red">1</div>
                  <p className="text-sm text-cedro-sage mt-2">Só você</p>
                </div>
                <div className="text-center p-8 border border-cedro-sage/10 bg-cedro-navy">
                  <div className="font-serif text-5xl font-bold text-cedro-red">0</div>
                  <p className="text-sm text-cedro-sage mt-2">Gravações</p>
                </div>
              </div>
              <p className="text-sm text-cedro-sage text-center">Cinco semanas, contato direto entre os encontros, sem plateia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA MEIO */}
      <section className="py-12 bg-cedro-black border-y border-cedro-red/30 text-center">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="text-lg text-cedro-white mb-6">Já sabe que é isso? Não precisa ler mais nada.</p>
          <Button asChild withArrow>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">Quero conversar sobre o Neemias</a>
          </Button>
        </div>
      </section>

      {/* OS 5 ENCONTROS */}
      <section className="py-24 bg-cedro-navy text-cedro-white relative overflow-hidden" style={textureStyle}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
          <SectionLabel>Os 5 encontros</SectionLabel>
          <h2 className="mb-8 text-cedro-white">A jornada completa.</h2>
          <div className="my-12">
            {encounters.map((encounter, i) => (
              <div key={i} className="grid grid-cols-[80px_1fr] gap-6 py-6 border-b border-cedro-sage/10">
                <div className="font-serif text-4xl text-cedro-red/60">{encounter.num}</div>
                <div>
                  <h4 className="font-sans text-base font-bold text-cedro-white mb-1">{encounter.title}</h4>
                  <p className="text-sm text-cedro-sage">{encounter.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINEIAS OU NEEMIAS */}
      <section className="py-24 bg-cedro-black text-cedro-white" style={textureStyle}>
        <div className="max-w-[720px] mx-auto px-5 md:px-8">
          <SectionLabel>Finéias ou Neemias</SectionLabel>
          <h2 className="mb-10 text-cedro-white">Os dois vêm do mesmo método.</h2>
          <p className="text-cedro-sage mb-5">A diferença está em quem cada formato serve melhor.</p>
          <p className="text-cedro-sage mb-5">A Sociedade Finéias entrega aliança coletiva e um investimento mais acessível, para o homem que consegue se expor num grupo pequeno e se beneficia da pressão positiva de estar cercado por outros homens no mesmo processo.</p>
          <p className="text-cedro-sage mb-5">A Mentoria Neemias entrega privacidade total e atenção construída sob medida desde a primeira sessão, para o homem que não pode, ou não quer, resolver isso dividindo sala com outras onze pessoas.</p>
          <p className="text-cedro-sage font-semibold text-cedro-white/90">Nenhum dos dois é o caminho mais fácil. São dois desenhos diferentes para levar o mesmo homem ao mesmo lugar.</p>
        </div>
      </section>

      {/* INVESTIMENTO */}
      <section className="py-24 bg-cedro-navy text-cedro-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-40"
          style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(192,138,62,0.2) 0%, transparent 60%)' }}
        />
        <div className="max-w-[700px] mx-auto px-5 md:px-8 relative z-10">
          <SectionLabel>Investimento</SectionLabel>
          <h2 className="mb-12 text-cedro-white">O que está em jogo.</h2>

          <div className="p-10 bg-cedro-black border border-cedro-red/30">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-cedro-sage mb-8">Valor único</p>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-serif font-bold text-cedro-red leading-none" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}>
                R$ 2.997
              </span>
            </div>
            <div className="w-12 h-[1px] bg-cedro-sage/20 my-6" />
            <p className="text-cedro-sage text-sm leading-relaxed">
              Cinco encontros individuais, mais acompanhamento direto comigo por WhatsApp e áudio durante todo o processo.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-cedro-black text-center text-cedro-white relative overflow-hidden" style={textureStyle}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 70% 50%, transparent 30%, rgba(10,4,1,0.6) 100%)' }} />
        <div className="max-w-[700px] mx-auto px-5 md:px-8 relative z-10">
          <h2 className="text-cedro-white mb-6">Você não precisa de outro grupo, outro devocional, outro aplicativo de bloqueio.</h2>
          <p className="text-cedro-sage my-6 text-lg">Precisa de alguém olhando para o seu caso específico e ajudando a reconstruir com estrutura, sem expor o que você não está pronto para expor a mais ninguém.</p>
          <Button asChild withArrow>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">Quero conversar sobre o Neemias no WhatsApp</a>
          </Button>
        </div>
      </section>

    </div>
  );
}
