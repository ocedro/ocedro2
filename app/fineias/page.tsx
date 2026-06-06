import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SectionLabel } from '@/components/ui/section-label';
import { Divider } from '@/components/ui/divider';

export default function FineiasPage() {
  const encounters = [
    { num: '01', title: 'Identidade, vergonha e propósito', desc: 'Você não é o que fez, você é quem Deus diz que você é. Mudança do eixo narrativo. A mentalidade de Finéias.' },
    { num: '02', title: 'Mentiras que alimentam o ciclo', desc: 'Todo vício é sustentado por crenças falsas. Mentiras sobre Deus, sobre si, sobre os outros.' },
    { num: '03', title: 'Vício não é apenas pecado: é um mecanismo', desc: 'A psicologia do vício. Três níveis: comportamento, emoção, espiritualidade.' },
    { num: '04', title: 'Gatilhos, hábitos e sistemas', desc: 'Mapear o ciclo pessoal de queda, conhecer seus pontos fracos.' },
    { num: '05', title: 'Desejo deformado: a pornotopia', desc: 'Quando o prazer vira prisão. Sistema dopaminérgico, fantasia vs. intimidade real.' },
    { num: '06', title: 'A mentalidade para construção de hábitos poderosos', desc: 'As 3 grandes barreiras: 0 dias, 1 mês, 3 meses. Resistência, resiliência e organização.' },
    { num: '07', title: 'Os 6 passos práticos', desc: 'Redimir o prazer, não rejeitá-lo. Protocolo e código de honra.' },
    { num: '08', title: 'Masculinidade redimida', desc: 'A psicologia do homem fraco. A virtude da fortaleza. O que é ser homem.' },
    { num: '09', title: 'Plano de guerra e cultura de verdade', desc: 'Liberdade exige estrutura. Protocolos, rotinas, vigilância e reafirmação da identidade.' },
    { num: '10', title: 'Vocação e envio', desc: 'Mentalidade redimida. O propósito de ser livre: liderar outros à liberdade.' },
  ];

  const textureStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
    backgroundSize: '300px 300px',
  };

  return (
    <div className="flex flex-col">

      {/* HERO */}
      <section className="min-h-svh flex items-end md:items-center pt-32 pb-12 md:pb-20 bg-cedro-black relative overflow-hidden">
        {/* Desktop bg */}
        <div
          className="hidden md:block absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'url(/fineias-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center right' }}
        />
        {/* Mobile bg */}
        <div
          className="block md:hidden absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'url(/fineias-bg-mobile.png)', backgroundSize: 'cover', backgroundPosition: 'center top' }}
        />
        {/* Mobile gradient (cedro-black com tom quente) para legibilidade */}
        <div className="md:hidden absolute inset-0 pointer-events-none bg-gradient-to-t from-cedro-black via-cedro-black/85 via-50% to-transparent" />
        {/* Vignette barroca */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 50%, transparent 25%, rgba(10,4,1,0.75) 100%)' }} />
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10 w-full">
          <div className="max-w-[640px]">
            <Image
              src="/fineias-logo.png"
              alt="Mentoria Fineias"
              width={948}
              height={137}
              className="w-auto mb-10 object-contain"
              style={{ height: '70px' }}
              priority
            />
            <SectionLabel>Mentoria Fineias</SectionLabel>
            <h1 className="mb-6 text-cedro-white">
              Seu problema não é só pornografia. É que você não tem um plano.
            </h1>
            <p className="text-lg text-cedro-sage mb-10">
              A Sociedade Finéias é uma mentoria em grupo para homens cristãos que estão prontos para parar de improvisar, retomar o controle e construir um plano de uma vida que valha a pena ser vivida. 10 encontros. 12 homens. Sem gravação.
            </p>
            <Button asChild withArrow>
              <a href="https://form.respondi.app/Qr9kjWMI" target="_blank" rel="noopener noreferrer">Quero sair desse ciclo</a>
            </Button>
          </div>
        </div>
      </section>

      {/* O CICLO */}
      <section className="py-24 bg-cedro-navy text-cedro-white relative overflow-hidden" style={textureStyle}>
        <div className="max-w-[720px] mx-auto px-5 md:px-8 relative z-10">
          <h2 className="mb-10 text-cedro-white">O ciclo que você conhece bem demais.</h2>
          <p className="text-cedro-sage mb-5 text-lg">Você não acorda querendo falhar.</p>
          <p className="text-cedro-sage mb-5">Mas o dia começa sem direção. Sem um plano. Você reage ao que aparece, apaga incêndio, chega à noite exausto e vazio.</p>
          <p className="text-cedro-sage mb-5">E está assim há anos. Você nem se reconhece mais. Tenta, mas não consegue sair do lugar.</p>
          <p className="text-cedro-sage mb-5">Quando há vazio, o homem preenche. Com prazer. Com poder. Com conformismo. É quase automático. O vício escolhe homens sem plano.</p>
          <p className="text-cedro-sage mb-5">A pornografia, por exemplo, é uma das formas mais eficientes de preencher esse espaço. Rápida, acessível, sem custo imediato aparente. Mas ela não resolve o vazio. Ela só engana. É como tentar almoçar batata frita.</p>
          <p className="text-cedro-sage mb-5">E aí o ciclo recomeça. A vergonha chega. Você promete que é a última vez. Dorme com culpa. Acorda sem plano de novo. E cai de novo.</p>
          <p className="text-cedro-sage mb-5">Eu vi isso em centenas de homens. Homens sérios, que amam a Deus, que têm família e fé.</p>
          <p className="text-cedro-sage mb-5">Nenhum deles tinha problema de caráter. Tinham um problema de estrutura. Tinham um vazio sem nome.</p>
          <p className="text-cedro-sage font-semibold text-cedro-white/90">Sem sentido, qualquer homem cede. É só uma questão de tempo e de pressão.</p>
        </div>
      </section>

      {/* PROPOSTA */}
      <section className="py-24 bg-cedro-black text-cedro-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>A proposta</SectionLabel>
              <h2 className="mb-6 text-cedro-white">
                A Sociedade Finéias não é grupo de apoio. Não é círculo de confissão. Não é lugar onde você repete toda semana que é viciado e vai embora igual.
              </h2>
              <p className="mb-4 text-cedro-sage">É uma mentoria onde você sai com um plano escrito na mão.</p>
              <p className="mb-4 text-cedro-sage">Um plano de identidade. De masculinidade. De como você vai conduzir sua vida de agora em diante. A pornografia entra nessa conversa, mas ela não é o centro. O centro é você entender quem você é, o que está destruindo isso, e como reconstruir com estrutura.</p>
              <p className="text-cedro-sage">Dez encontros. Doze homens. Nada gravado. Tudo acontece ao vivo porque esse tipo de trabalho só funciona quando há aliança de verdade.</p>
            </div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 my-12">
                <div className="text-center p-8 border border-cedro-sage/10 bg-cedro-navy">
                  <div className="font-serif text-5xl font-bold text-cedro-red">10</div>
                  <p className="text-sm text-cedro-sage mt-2">Encontros online</p>
                </div>
                <div className="text-center p-8 border border-cedro-sage/10 bg-cedro-navy">
                  <div className="font-serif text-5xl font-bold text-cedro-red">12</div>
                  <p className="text-sm text-cedro-sage mt-2">Homens por turma</p>
                </div>
                <div className="text-center p-8 border border-cedro-sage/10 bg-cedro-navy">
                  <div className="font-serif text-5xl font-bold text-cedro-red">0</div>
                  <p className="text-sm text-cedro-sage mt-2">Gravações</p>
                </div>
              </div>
              <p className="text-sm text-cedro-sage text-center">Tudo é ao vivo, em tempo real, com aliança e confidencialidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA MEIO */}
      <section className="py-12 bg-cedro-black border-y border-cedro-red/30 text-center">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="text-lg text-cedro-white mb-6">Já sabe que precisa disso? Não precisa ler mais nada.</p>
          <Button asChild withArrow>
            <a href="https://form.respondi.app/Qr9kjWMI" target="_blank" rel="noopener noreferrer">Quero estar na próxima turma</a>
          </Button>
        </div>
      </section>

      {/* 10 ENCONTROS */}
      <section className="py-24 bg-cedro-navy text-cedro-white relative overflow-hidden" style={textureStyle}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
          <SectionLabel>Os 10 encontros</SectionLabel>
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

      {/* DEPOIMENTOS */}
      <section className="py-24 bg-cedro-black text-cedro-white relative overflow-hidden" style={textureStyle}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 40%, transparent 20%, rgba(10,4,1,0.7) 100%)' }} />
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
          <SectionLabel>Quem já passou por aqui</SectionLabel>
          <h2 className="mb-12 text-cedro-white">Homens que pararam de se esconder.</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Elias */}
            <div className="flex flex-col">
              <div className="overflow-hidden rounded-sm border border-cedro-sage/10">
                <Image
                  src="/depoimento-elias.jpg"
                  alt="Depoimento de Elias"
                  width={1046}
                  height={897}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="pt-5 pl-1">
                <p className="text-cedro-white font-bold text-sm">Elias</p>
                <p className="text-cedro-sage text-xs mt-0.5">36 anos</p>
              </div>
            </div>

            {/* Denis */}
            <div className="flex flex-col">
              <div className="overflow-hidden rounded-sm border border-cedro-sage/10">
                <Image
                  src="/depoimento-denis.jpg"
                  alt="Depoimento de Denis"
                  width={990}
                  height={3012}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="pt-5 pl-1">
                <p className="text-cedro-white font-bold text-sm">Denis</p>
                <p className="text-cedro-sage text-xs mt-0.5">45 anos, engenheiro mecânico</p>
              </div>
            </div>

            {/* Lucas */}
            <div className="flex flex-col">
              <div className="overflow-hidden rounded-sm border border-cedro-sage/10">
                <Image
                  src="/depoimento-lucas.jpg"
                  alt="Depoimento de Lucas"
                  width={998}
                  height={3590}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="pt-5 pl-1">
                <p className="text-cedro-white font-bold text-sm">Lucas Grabin</p>
                <p className="text-cedro-sage text-xs mt-0.5">23 anos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTIMENTO E TURMA */}
      <section className="py-24 bg-cedro-navy text-cedro-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background: 'radial-gradient(ellipse at 80% 50%, rgba(209,61,29,0.25) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 relative z-10">
          <SectionLabel>Investimento e turma</SectionLabel>
          <h2 className="mb-12 text-cedro-white">O que está em jogo.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Card preço */}
            <div className="p-10 bg-cedro-black border border-cedro-red/30 relative overflow-hidden">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-cedro-sage mb-8">Investimento</p>

              <div className="mb-6">
                <p className="text-cedro-sage text-xs uppercase tracking-widest mb-3">Parcelado</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-cedro-sage text-base">12x</span>
                  <span className="font-serif font-bold text-cedro-white leading-none" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
                    R$ 97
                  </span>
                </div>
              </div>

              <div className="w-12 h-[1px] bg-cedro-sage/20 my-6" />

              <div className="mb-8">
                <p className="text-cedro-sage text-xs uppercase tracking-widest mb-3">À vista</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif font-bold text-cedro-red leading-none" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
                    R$ 997
                  </span>
                </div>
              </div>

              <p className="text-cedro-sage text-sm leading-relaxed">
                10 encontros ao vivo. Sem gravação, sem upsell, sem mensalidade.
              </p>
            </div>

            {/* Card turma */}
            <div className="p-10 bg-cedro-black border border-cedro-sage/15 flex flex-col">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-cedro-sage mb-4">Próxima turma</p>
              <h3 className="text-cedro-white text-2xl font-bold mb-6 leading-tight">
                Previsão: terceira semana de julho.
              </h3>
              <p className="text-cedro-sage text-[0.95rem] leading-relaxed mb-4">
                As vagas são limitadas a 12 homens. O grupo precisa ser pequeno para funcionar de verdade.
              </p>
              <p className="text-cedro-sage text-[0.95rem] leading-relaxed mb-8">
                Você entra na lista agora, recebe a confirmação quando a turma fechar, e decide se entra.
              </p>
              <div className="mt-auto pt-6 border-t border-cedro-sage/10 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="font-serif text-3xl font-bold text-cedro-red leading-none">12</div>
                  <p className="text-xs text-cedro-sage mt-2">Homens</p>
                </div>
                <div>
                  <div className="font-serif text-3xl font-bold text-cedro-red leading-none">10</div>
                  <p className="text-xs text-cedro-sage mt-2">Encontros</p>
                </div>
                <div>
                  <div className="font-serif text-3xl font-bold text-cedro-red leading-none">0</div>
                  <p className="text-xs text-cedro-sage mt-2">Gravações</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-cedro-black text-center text-cedro-white relative overflow-hidden" style={textureStyle}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 70% 50%, transparent 30%, rgba(10,4,1,0.6) 100%)' }} />
        <div className="max-w-[700px] mx-auto px-5 md:px-8 relative z-10">
          <h2 className="text-cedro-white mb-6">Quanto mais tempo no ciclo, mais difícil sair.</h2>
          <p className="text-cedro-sage my-6 text-lg">Cada turma é limitada a 12 homens. O grupo precisa ser pequeno para funcionar de verdade, com confiança, aliança e acompanhamento real.</p>
          <p className="text-cedro-sage mb-4">Você não precisa ter tudo resolvido para entrar. Precisa estar pronto para parar de se esconder.</p>
          <p className="text-[0.95rem] text-cedro-sage mb-10">Mande uma mensagem. A conversa é sigilosa.</p>
          <Button asChild withArrow>
            <a href="https://form.respondi.app/Qr9kjWMI" target="_blank" rel="noopener noreferrer">Quero participar da próxima turma</a>
          </Button>
        </div>
      </section>

    </div>
  );
}
