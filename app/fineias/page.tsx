'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SectionLabel } from '@/components/ui/section-label';
import { useState } from 'react';

const CTA_LINK = 'https://pay.hub.la/BHnADAMVdYRbdlqLMRU5';

export default function FineiasPage() {
  const textureStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
    backgroundSize: '300px 300px',
  };

  const fases = [
    {
      fase: 'Fase 1',
      titulo: 'Entender',
      descricao: 'Antes de mudar qualquer comportamento, você precisa entender o que está acontecendo.',
      encontros: [
        { num: '01', titulo: 'Quem eu me tornei?', desc: 'Identidade, vergonha e propósito. Mudança do eixo narrativo. A mentalidade de Finéias.' },
        { num: '02', titulo: 'As mentiras que me mantêm preso', desc: 'Todo ciclo é sustentado por crenças falsas — sobre Deus, sobre si mesmo, sobre o que é possível mudar.' },
        { num: '03', titulo: 'O mecanismo por trás do comportamento', desc: 'A psicologia do padrão compulsivo. Três níveis integrados: comportamento, emoção e espiritualidade.' },
      ],
    },
    {
      fase: 'Fase 2',
      titulo: 'Reconstruir',
      descricao: 'Entendida a estrutura, o trabalho passa a ser concreto: construir o que vai substituir o ciclo.',
      encontros: [
        { num: '04', titulo: 'Conhecer meu ciclo pessoal', desc: 'Mapear gatilhos, hábitos, padrões e pontos de vulnerabilidade específicos.' },
        { num: '05', titulo: 'Desejo e intimidade real', desc: 'Quando o prazer vira prisão. Sistema de recompensa, fantasia e o que diferencia prazer de intimidade.' },
        { num: '06', titulo: 'Construir uma nova estrutura', desc: 'Hábitos, disciplina, ambiente e organização. As três fases de resistência na construção de qualquer novo padrão.' },
      ],
    },
    {
      fase: 'Fase 3',
      titulo: 'Viver',
      descricao: 'Liberdade sem direção não dura. Essa fase transforma o que foi reconstruído em uma vida com propósito.',
      encontros: [
        { num: '07', titulo: 'Código de honra e protocolos práticos', desc: 'Redimir o prazer, não apenas rejeitá-lo. Os seis passos práticos e o código de honra pessoal.' },
        { num: '08', titulo: 'Masculinidade redimida', desc: 'A psicologia do homem maduro. Fortaleza, responsabilidade e o que significa ser homem na prática.' },
        { num: '09', titulo: 'Plano de guerra', desc: 'Liberdade exige estrutura. Protocolos, rotinas, vigilância e reafirmação contínua da identidade.' },
        { num: '10', titulo: 'Vocação e envio', desc: 'O que você fará com a liberdade que construiu? O propósito de ser livre: liderar outros ao mesmo caminho.' },
      ],
    },
  ];

  const mecanismo = [
    { num: '01', titulo: 'Identidade', desc: 'Quem você é, no que acredita, e que tipo de homem está decidido a se tornar. O ponto de partida de qualquer reconstrução real.' },
    { num: '02', titulo: 'Diagnóstico', desc: 'Entender seu ciclo específico: gatilhos, padrões, emoções e mecanismos de fuga. Sem diagnóstico preciso, qualquer intervenção é genérica.' },
    { num: '03', titulo: 'Estrutura', desc: 'Rotina, ambiente, hábitos e sistemas que reduzem a dependência de força de vontade. Viver bem exige arquitetura, não apenas intenção.' },
    { num: '04', titulo: 'Domínio próprio', desc: 'Aprender a lidar com desejo, impulso, desconforto e prazer imediato. Não rejeitar o desejo, mas governá-lo.' },
    { num: '05', titulo: 'Masculinidade', desc: 'Responsabilidade, maturidade, coragem e integridade. O que significa ser homem quando ninguém está olhando.' },
    { num: '06', titulo: 'Vocação', desc: 'Construir uma direção concreta para a própria vida. Uma vida sem propósito sempre encontra uma fuga.' },
  ];

  const [faqAberto, setFaqAberto] = useState<number | null>(null);

  const faqs = [
    { q: 'Preciso estar completamente livre da pornografia para participar?', a: 'Não. A Finéias é exatamente o espaço para quem ainda está dentro do ciclo e quer construir uma saída. A condição de entrada é disposição para o processo, não limpeza prévia.' },
    { q: 'E se eu já tentei parar várias vezes e falhei?', a: 'Esse é o perfil de quem a Finéias foi construída para atender. O pressuposto da mentoria é que tentar parar sem estrutura, identidade e plano raramente funciona a longo prazo.' },
    { q: 'Isso é terapia?', a: 'Não. A Finéias é uma mentoria em grupo com fundamentos psicológicos e cristãos. Não substitui psicoterapia individual quando essa for necessária — e pode coexistir com ela.' },
    { q: 'Preciso ser cristão?', a: 'A Finéias foi construída dentro de uma visão cristã de masculinidade, propósito e fé. O conteúdo integra psicologia e espiritualidade cristã. Se você não compartilha dessa fé, parte da metodologia pode não fazer sentido para você.' },
    { q: 'E se eu tiver vergonha de falar no grupo?', a: 'A sala tem 12 homens. Todos estão ali pelo mesmo motivo. A ausência de gravação e o compromisso de confidencialidade criam um ambiente onde a honestidade é possível — e necessária. A vergonha costuma diminuir depois do primeiro encontro.' },
    { q: 'Por que não existe gravação?', a: 'Porque a Finéias não é um curso. É uma sala. O que acontece dentro de uma sala de 12 homens sendo honestos sobre suas vidas não deveria existir além daquele espaço. A ausência de gravação protege a experiência.' },
    { q: 'Como funcionam os encontros?', a: 'São 10 encontros online ao vivo, com toda a turma de 12 homens. Cada encontro tem um tema, uma metodologia e termina com aplicação prática para a semana seguinte.' },
    { q: 'E se eu recair durante a mentoria?', a: 'A recaída faz parte do processo para muitos homens. A Finéias não trata recaída como fracasso, mas como dado clínico a ser compreendido. O que muda é a forma de analisar e responder a ela.' },
    { q: 'Quando acontece a próxima turma?', a: '[DATA DA PRÓXIMA TURMA — a ser confirmada]' },
  ];

  return (
    <div className="flex flex-col">

      {/* ── HERO ── */}
      <section className="min-h-svh flex items-end md:items-center pt-32 pb-12 md:pb-20 bg-cedro-black relative overflow-hidden">
        <div className="hidden md:block absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'url(/fineias-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center right' }} />
        <div className="block md:hidden absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'url(/fineias-bg-mobile.png)', backgroundSize: 'cover', backgroundPosition: 'center top' }} />
        <div className="md:hidden absolute inset-0 pointer-events-none bg-gradient-to-t from-cedro-black via-cedro-black/85 via-50% to-transparent" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 50%, transparent 25%, rgba(10,4,1,0.78) 100%)' }} />
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10 w-full">
          <div className="max-w-[640px]">
            <Image src="/fineias-logo.png" alt="Mentoria Finéias" width={948} height={137}
              className="w-auto mb-10 object-contain" style={{ height: '70px' }} priority />
            <SectionLabel>Mentoria Finéias</SectionLabel>
            <h1 className="mb-6 text-cedro-white">
              Pare de administrar suas recaídas.<br />Comece a construir sua vida.
            </h1>
            <p className="text-lg text-cedro-sage mb-8">
              Uma mentoria para homens cristãos que estão cansados de viver no ciclo de pornografia, culpa e recomeços, e estão prontos para construir uma vida com direção, disciplina, identidade e propósito.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-sans font-semibold tracking-widest uppercase text-cedro-sage mb-10">
              {['10 encontros', '12 homens', 'Ao vivo', 'Sem gravação', 'Confidencial'].map((item, i) => (
                <span key={i} className="border border-cedro-sage/20 px-3 py-1.5">{item}</span>
              ))}
            </div>
            <Button asChild withArrow>
              <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">Quero entrar na Finéias</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── O PROBLEMA ── */}
      <section className="py-24 bg-cedro-navy text-cedro-white relative overflow-hidden" style={textureStyle}>
        <div className="max-w-[720px] mx-auto px-5 md:px-8 relative z-10">
          <SectionLabel>O problema real</SectionLabel>
          <h2 className="mb-10 text-cedro-white">A pornografia não é o problema inteiro.</h2>
          <p className="text-cedro-sage mb-5 text-lg">Você não acorda querendo falhar.</p>
          <p className="text-cedro-sage mb-5">Mas o dia começa sem direção. Sem um plano. Você reage ao que aparece, apaga incêndio, chega à noite exausto e vazio.</p>
          <p className="text-cedro-sage mb-5">E está assim há anos. Você nem se reconhece mais. Tenta, mas não consegue sair do lugar.</p>
          <p className="text-cedro-sage mb-5">Quando há vazio, o homem preenche. Com prazer. Com poder. Com conformismo. É quase automático. O vício escolhe homens sem plano.</p>
          <p className="text-cedro-sage mb-5">A pornografia, por exemplo, é uma das formas mais eficientes de preencher esse espaço. Rápida, acessível, sem custo imediato aparente. Mas ela não resolve o vazio. Ela só engana. É como tentar almoçar batata frita.</p>
          <p className="text-cedro-sage mb-5">E aí o ciclo recomeça. A vergonha chega. Você promete que é a última vez. Dorme com culpa. Acorda sem plano de novo. E cai de novo.</p>
          <p className="text-cedro-sage mb-5">Eu vi isso em centenas de homens. Homens sérios, que amam a Deus, que têm família e fé.</p>
          <p className="text-cedro-sage mb-5">Nenhum deles tinha problema de caráter. Tinham um problema de estrutura. Tinham um vazio sem nome.</p>
          <p className="text-cedro-sage font-semibold text-cedro-white/90 mb-8">Sem sentido, qualquer homem cede. É só uma questão de tempo e de pressão.</p>
          <div className="border-l-2 border-cedro-red pl-6 mt-8">
            <p className="font-serif text-xl text-cedro-white italic leading-relaxed">
              Você não constrói uma vida nova simplesmente tentando eliminar aquilo para onde foge. Você precisa construir uma vida da qual não precise fugir.
            </p>
          </div>
        </div>
      </section>

      {/* ── MECANISMO ── */}
      <section className="py-24 bg-cedro-black text-cedro-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <SectionLabel>O método Finéias</SectionLabel>
          <h2 className="mb-6 text-cedro-white max-w-[560px]">Por que simplesmente tentar parar nunca foi suficiente.</h2>
          <p className="text-cedro-sage mb-14 max-w-[560px]">A Finéias trabalha em seis dimensões da reconstrução masculina. Cada uma responde a uma parte do problema que a força de vontade isolada não consegue resolver.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-cedro-sage/10">
            {mecanismo.map((m, i) => (
              <div key={i} className="bg-cedro-black p-8">
                <div className="font-sans text-xs font-semibold tracking-[0.25em] text-cedro-red mb-4">{m.num}</div>
                <h3 className="font-serif text-xl font-semibold text-cedro-white mb-3">{m.titulo}</h3>
                <p className="text-sm text-cedro-sage leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-cedro-sage mt-10 max-w-[560px] font-serif text-lg italic">
            Quando você vê as seis dimensões juntas, começa a entender por que atacar apenas o comportamento raramente resolve.
          </p>
        </div>
      </section>

      {/* ── CTA MEIO ── */}
      <section className="py-12 bg-cedro-black border-y border-cedro-red/30 text-center">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="text-lg text-cedro-white mb-6">Já sabe que precisa disso? Não precisa ler mais nada.</p>
          <Button asChild withArrow>
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">Quero entrar na Finéias</a>
          </Button>
        </div>
      </section>

      {/* ── JORNADA 10 ENCONTROS ── */}
      <section className="py-24 bg-cedro-navy text-cedro-white relative overflow-hidden" style={textureStyle}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
          <SectionLabel>Os 10 encontros</SectionLabel>
          <h2 className="mb-4 text-cedro-white">Uma jornada de reconstrução.</h2>
          <p className="text-cedro-sage mb-14 max-w-[520px]">Os encontros foram organizados em três fases progressivas. Cada fase pressupõe a anterior.</p>
          <div className="flex flex-col gap-14">
            {fases.map((fase, fi) => (
              <div key={fi}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-cedro-red">{fase.fase}</span>
                  <div className="h-px flex-1 bg-cedro-sage/10" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-cedro-white mb-2">{fase.titulo}</h3>
                <p className="text-cedro-sage text-sm mb-8 max-w-[480px]">{fase.descricao}</p>
                <div className="flex flex-col gap-0">
                  {fase.encontros.map((enc, ei) => (
                    <div key={ei} className="grid grid-cols-[56px_1fr] gap-6 py-5 border-b border-cedro-sage/10">
                      <div className="font-serif text-3xl text-cedro-red/50 leading-none pt-1">{enc.num}</div>
                      <div>
                        <h4 className="font-sans text-sm font-bold text-cedro-white mb-1">{enc.titulo}</h4>
                        <p className="text-xs text-cedro-sage leading-relaxed">{enc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <section className="py-24 bg-cedro-black text-cedro-white">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8">
          <SectionLabel>Como funciona</SectionLabel>
          <h2 className="mb-14 text-cedro-white max-w-[520px]">Você não compra acesso a 10 aulas.<br />Você entra em uma jornada.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex flex-col gap-6">
                {[
                  { titulo: 'Encontros ao vivo', desc: 'Toda semana, um encontro online com os 12 homens da turma e o Leandro. Cada encontro tem estrutura, tema e aplicação.' },
                  { titulo: 'Trabalho entre os encontros', desc: 'Cada encontro termina com tarefas práticas. O processo não para quando a câmera fecha. A construção acontece na semana.' },
                  { titulo: 'Plano pessoal escrito', desc: 'Ao longo dos 10 encontros, você constrói progressivamente um plano de vida próprio, revisado e aplicável.' },
                  { titulo: 'Aliança com o grupo', desc: 'Os outros 11 homens da turma não são plateia. São aliança. O grupo cria responsabilidade horizontal.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="w-1 h-full min-h-[20px] bg-cedro-red mt-1.5 flex-shrink-0" style={{ width: '3px', minHeight: '20px' }} />
                    <div>
                      <p className="font-sans text-sm font-bold text-cedro-white mb-1">{item.titulo}</p>
                      <p className="text-sm text-cedro-sage leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {/* Por que sem gravação */}
              <div className="p-8 bg-cedro-navy border border-cedro-sage/10">
                <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-cedro-sage mb-4">Por que não há gravação?</p>
                <p className="text-cedro-sage mb-4 text-sm leading-relaxed">Porque você não está entrando em um curso. Está entrando em uma sala pequena, com outros homens, onde existe vulnerabilidade, responsabilidade e confidencialidade.</p>
                <p className="text-cedro-sage text-sm leading-relaxed">O que acontece dentro de uma sala de 12 homens sendo honestos sobre suas vidas não deveria existir além daquele espaço. A ausência de gravação não é uma limitação. É uma escolha que protege a experiência.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEANDRO ── */}
      <section className="py-24 bg-cedro-navy text-cedro-white relative overflow-hidden" style={textureStyle}>
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 items-start">
            <div>
              <div className="overflow-hidden" style={{ filter: 'grayscale(20%)' }}>
                <Image src="/leandro-lab.jpeg" alt="Leandro Carone" width={400} height={500}
                  className="w-full object-cover object-top" style={{ maxHeight: '360px' }} />
              </div>
            </div>
            <div>
              <SectionLabel>Quem conduz essa sala</SectionLabel>
              <h2 className="mb-6 text-cedro-white">Leandro Carone</h2>
              <p className="text-cedro-sage mb-4 leading-relaxed">Eu não criei a Finéias porque estudei pornografia. Criei essa mentoria a partir de anos de experiência clínica com homens que sabiam que precisavam mudar e não conseguiam, e da compreensão de que homens precisam de mais do que simplesmente tentar resistir.</p>
              <p className="text-cedro-sage mb-4 leading-relaxed">A psicologia, a fé cristã e o sentido existencial não são três mundos separados. Quando você integra os três, a leitura do problema muda, e a intervenção também.</p>
              <p className="text-cedro-sage leading-relaxed">A Finéias é o resultado prático dessa integração.</p>
              <div className="mt-8 pt-8 border-t border-cedro-sage/10 flex flex-col gap-3">
                {['Psicólogo clínico', 'Especialização em Logoterapia e Análise Existencial', 'Fundador e diretor clínico da Clínica Cedro', 'Speaker em igrejas e empresas'].map((c, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <div className="w-1 h-1 rounded-full bg-cedro-red flex-shrink-0" />
                    <span className="text-sm text-cedro-sage">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section className="py-24 bg-cedro-black text-cedro-white relative overflow-hidden" style={textureStyle}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 40%, transparent 20%, rgba(10,4,1,0.7) 100%)' }} />
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
          <SectionLabel>Quem já passou por aqui</SectionLabel>
          <h2 className="mb-12 text-cedro-white">Homens que pararam de se esconder.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="flex flex-col">
              <div className="overflow-hidden rounded-sm border border-cedro-sage/10">
                <Image src="/depoimento-elias.jpg" alt="Depoimento de Elias" width={1046} height={897} className="w-full h-auto object-cover" />
              </div>
              <div className="pt-5 pl-1">
                <p className="text-cedro-white font-bold text-sm">Elias</p>
                <p className="text-cedro-sage text-xs mt-0.5">36 anos</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="overflow-hidden rounded-sm border border-cedro-sage/10">
                <Image src="/depoimento-denis.jpg" alt="Depoimento de Denis" width={990} height={3012} className="w-full h-auto object-cover" />
              </div>
              <div className="pt-5 pl-1">
                <p className="text-cedro-white font-bold text-sm">Denis</p>
                <p className="text-cedro-sage text-xs mt-0.5">45 anos, engenheiro mecânico</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="overflow-hidden rounded-sm border border-cedro-sage/10">
                <Image src="/depoimento-lucas.jpg" alt="Depoimento de Lucas" width={998} height={3590} className="w-full h-auto object-cover" />
              </div>
              <div className="pt-5 pl-1">
                <p className="text-cedro-white font-bold text-sm">Lucas</p>
                <p className="text-cedro-sage text-xs mt-0.5">23 anos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARA QUEM É / NÃO É ── */}
      <section className="py-24 bg-cedro-navy text-cedro-white">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionLabel>Para quem é</SectionLabel>
              <h3 className="font-serif text-2xl font-semibold text-cedro-white mb-8">A Finéias é para você se…</h3>
              <div className="flex flex-col gap-0">
                {[
                  'Você é homem cristão e percebe que está preso em ciclos de pornografia ou outros comportamentos de fuga',
                  'Está cansado de prometer que vai mudar e voltar ao mesmo lugar',
                  'Quer construir disciplina real, não apenas resistir ao impulso',
                  'Quer recuperar direção e sentido para a própria vida',
                  'Quer viver com integridade no longo prazo',
                  'Está disposto a assumir responsabilidade pelo próprio processo',
                  'Aceita participar de um processo coletivo e ao vivo, com honestidade',
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start py-4 border-b border-cedro-sage/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-cedro-red mt-1.5 flex-shrink-0" />
                    <p className="text-sm text-cedro-sage leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionLabel>Para quem não é</SectionLabel>
              <h3 className="font-serif text-2xl font-semibold text-cedro-white mb-8">A Finéias não é para você se…</h3>
              <div className="flex flex-col gap-0">
                {[
                  'Você procura uma solução instantânea sem processo real',
                  'Quer apenas consumir conteúdo sem se comprometer com aplicação',
                  'Não está disposto a ser honesto com o grupo',
                  'Espera que outra pessoa faça o trabalho de mudança por você',
                  'Procura exclusivamente tratamento clínico individual, como psicoterapia',
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start py-4 border-b border-cedro-sage/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-cedro-sage/30 mt-1.5 flex-shrink-0" />
                    <p className="text-sm text-cedro-sage leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-cedro-sage text-sm mt-6 font-serif italic leading-relaxed">
                A Finéias não é terapia e não substitui acompanhamento clínico individual quando esse for necessário.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── O QUE VOCÊ RECEBE ── */}
      <section className="py-24 bg-cedro-black text-cedro-white">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8">
          <SectionLabel>O que você recebe</SectionLabel>
          <h2 className="mb-14 text-cedro-white max-w-[480px]">Tudo que está incluído na Finéias.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-cedro-sage/10">
            {[
              { label: 'Encontros', titulo: '10 encontros ao vivo', desc: 'Online, com toda a turma. Cada encontro tem tema, metodologia e aplicação prática.' },
              { label: 'Grupo', titulo: 'Sala com 12 homens', desc: 'Grupo pequeno e intencional. Tamanho pensado para permitir profundidade e aliança real.' },
              { label: 'Entregável', titulo: 'Plano pessoal escrito', desc: 'Ao longo dos encontros, você constrói progressivamente seu próprio plano de vida.' },
              { label: 'Metodologia', titulo: 'Método Finéias', desc: 'As seis dimensões da reconstrução: identidade, diagnóstico, estrutura, domínio, masculinidade e vocação.' },
              { label: 'Aplicação', titulo: 'Tarefas práticas', desc: 'Exercícios e comprometimentos semanais que conectam o encontro à vida real da semana.' },
              { label: 'Comunidade', titulo: 'Aliança com o grupo', desc: 'Os outros 11 homens são aliança. O grupo cria responsabilidade e pertencimento real.' },
            ].map((item, i) => (
              <div key={i} className="bg-cedro-black p-8">
                <p className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-cedro-red mb-3">{item.label}</p>
                <h4 className="font-serif text-lg font-semibold text-cedro-white mb-2">{item.titulo}</h4>
                <p className="text-sm text-cedro-sage leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INVESTIMENTO ── */}
      <section className="py-24 bg-cedro-navy text-cedro-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-40"
          style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(209,61,29,0.25) 0%, transparent 60%)' }} />
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 relative z-10">
          <SectionLabel>Investimento e turma</SectionLabel>
          <h2 className="mb-12 text-cedro-white">Seu investimento.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="p-10 bg-cedro-black border border-cedro-red/30">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-cedro-sage mb-8">Investimento</p>
              <div className="mb-6">
                <p className="text-cedro-sage text-xs uppercase tracking-widest mb-3">Parcelado</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-cedro-sage text-base">12x</span>
                  <span className="font-serif font-bold text-cedro-white leading-none" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>R$ 97</span>
                </div>
              </div>
              <div className="w-12 h-[1px] bg-cedro-sage/20 my-6" />
              <div className="mb-8">
                <p className="text-cedro-sage text-xs uppercase tracking-widest mb-3">À vista</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif font-bold text-cedro-red leading-none" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>R$ 997</span>
                </div>
              </div>
              <p className="text-cedro-sage text-sm leading-relaxed">10 encontros ao vivo. Sem gravação, sem upsell, sem mensalidade.</p>
              <div className="mt-8">
                <Button asChild withArrow>
                  <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">Quero entrar na Finéias</a>
                </Button>
              </div>
            </div>
            <div className="p-10 bg-cedro-black border border-cedro-sage/15 flex flex-col">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-cedro-sage mb-4">Próxima turma</p>
              <h3 className="text-cedro-white text-2xl font-bold mb-6 leading-tight">
                [DATA DA PRÓXIMA TURMA]
              </h3>
              <p className="text-cedro-sage text-[0.95rem] leading-relaxed mb-4">
                As vagas são limitadas a 12 homens. O grupo precisa ser pequeno para funcionar de verdade.
              </p>
              <p className="text-cedro-sage text-[0.95rem] leading-relaxed mb-8">
                Você garante sua vaga agora e recebe as informações de acesso quando a turma fechar.
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

      {/* ── FAQ ── */}
      <section className="py-24 bg-cedro-black text-cedro-white">
        <div className="max-w-[720px] mx-auto px-5 md:px-8">
          <SectionLabel>Perguntas frequentes</SectionLabel>
          <h2 className="mb-12 text-cedro-white">O que você precisa saber.</h2>
          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-cedro-sage/10">
                <button
                  className="w-full text-left py-5 flex justify-between items-center gap-4"
                  onClick={() => setFaqAberto(faqAberto === i ? null : i)}
                >
                  <span className="font-serif text-base font-medium text-cedro-white leading-snug">{faq.q}</span>
                  <span className="text-cedro-red text-xl flex-shrink-0 font-sans font-light transition-transform"
                    style={{ transform: faqAberto === i ? 'rotate(45deg)' : 'none' }}>+</span>
                </button>
                {faqAberto === i && (
                  <p className="text-sm text-cedro-sage leading-relaxed pb-5">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-cedro-navy text-center text-cedro-white relative overflow-hidden" style={textureStyle}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 70% 50%, transparent 30%, rgba(10,4,1,0.6) 100%)' }} />
        <div className="max-w-[700px] mx-auto px-5 md:px-8 relative z-10">
          <Image src="/fineias-simbolo.png" alt="" width={64} height={64} className="mx-auto mb-8 opacity-60" />
          <h2 className="text-cedro-white mb-6">
            Quanto mais tempo sem um plano,<br />mais fundo o ciclo fica.
          </h2>
          <p className="text-cedro-sage my-6 text-lg max-w-[480px] mx-auto">
            As vagas são 12. O grupo precisa ser pequeno para funcionar, porque aliança de verdade não acontece em multidão.
          </p>
          <p className="text-cedro-sage mb-10">
            Você não precisa ter tudo resolvido para entrar. Precisa estar pronto para parar de improvisar.
          </p>
          <Button asChild withArrow>
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">Quero entrar na Finéias</a>
          </Button>
        </div>
      </section>

    </div>
  );
}
