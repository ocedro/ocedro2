import { SectionLabel } from '@/components/ui/section-label';
import { Divider } from '@/components/ui/divider';

export default function IgrejaPage() {
  const topics = [
    'Pare de lutar contra a pornografia e vença de uma vez',
    'Psicologia redentora: Formando conselheiros espirituais',
    'Identidade inabalável: Quem Deus diz que sou?',
    'Deus me chamou para quê? Vocação e propósito',
    'Os 4 temperamentos e a personalidade madura',
    'Por que filhos de Deus sofrem com ansiedade?'
  ];

  const formats = [
    { title: 'Palestras e seminários', desc: 'Eventos pontuais para a congregação ou liderança sobre temas específicos.' },
    { title: 'Treinamento de liderança', desc: 'Capacitação prática para pastores e líderes lidarem com questões complexas.' },
    { title: 'Supervisão e acompanhamento', desc: 'Supervisão dos atendimentos e aconselhamentos da equipe pastoral.' },
    { title: 'Atendimento clínico', desc: 'Psicólogos cristãos treinados para atender membros da comunidade.' },
    { title: 'Aconselhamento pastoral', desc: 'Atendimento e aconselhamento para pastores e líderes.' },
    { title: 'Workshops', desc: 'Workshops práticos e interativos para grupos específicos da igreja.' }
  ];

  return (
    <div className="flex flex-col">

      {/* HERO — fundo escuro com glow vermelho radial */}
      <section className="pt-32 pb-20 bg-cedro-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background: 'radial-gradient(ellipse at 75% 40%, rgba(209,61,29,0.25) 0%, rgba(209,61,29,0.05) 40%, transparent 70%)',
          }}
        />
        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <SectionLabel>Cedro para Igrejas</SectionLabel>
          <h1 className="text-cedro-white mb-4">Cedro na sua igreja.</h1>
          <Divider className="my-6" />
          <p className="text-lg text-cedro-sage max-w-[600px]">
            Fortalecer comunidades integrando fé, psicologia, filosofia e neurociência para enfrentar os desafios contemporâneos.
          </p>
        </div>
      </section>

      {/* NÃO OFERECEMOS RESPOSTAS — h2 promovido, glow vermelho lateral */}
      <section className="py-24 bg-cedro-black text-cedro-white relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 80% 60%, rgba(209,61,29,0.3) 0%, rgba(209,61,29,0.05) 50%, transparent 75%)',
          }}
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[35%] h-[60%] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 90% 50%, rgba(180,40,10,0.35) 0%, transparent 60%)',
            filter: 'blur(40px)',
          }}
        />

        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-4 text-cedro-white">Não oferecemos respostas superficiais a questões profundas.</h2>
              <Divider className="my-6" />
              <p className="mb-4 text-cedro-sage">Reconhecemos o poder da oração, do jejum e da comunidade da Igreja, além da constante atuação do Espírito Santo.</p>
              <p className="mb-4 text-cedro-sage">No entanto, os desafios contemporâneos nos convocam a um olhar mais atento e reflexivo sobre como Deus já nos forneceu soluções em Sua Palavra.</p>
              <p className="text-cedro-sage">Nas Escrituras, encontramos os alicerces sólidos para edificar pensamentos verdadeiros e combater fortalezas mentais e argumentos falaciosos.</p>
            </div>
            <div className="md:pt-20">
              <p className="mb-4 text-cedro-sage">Entendendo as diversas pressões enfrentadas por pastores e líderes, nos empenhamos para estudar e desvendar questões complexas.</p>
              <p><strong className="text-cedro-white font-bold">Nosso objetivo é oferecer orientação de alta qualidade potencializando seu ministério.</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* TEMAS DE DOMÍNIO — fundo branco invertido, marcadores circulares com anel */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-cedro-red mb-4">Temas de domínio</p>
          <h2 className="mb-12" style={{ color: '#111' }}>O que levamos para sua comunidade.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
            {topics.map((topic, i) => (
              <div key={i} className="py-4 border-b border-black/10 flex items-start gap-4">
                <span className="mt-[5px] w-4 h-4 rounded-full border-2 border-cedro-red flex items-center justify-center shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-cedro-red block" />
                </span>
                <p className="text-[0.95rem] leading-relaxed" style={{ color: '#111' }}>{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO ENTREGAMOS — cards com border-left vermelho, árvore decorativa */}
      <section className="py-24 bg-cedro-black relative overflow-hidden">
        {/* Árvore SVG decorativa no canto superior direito */}
        <div className="absolute top-0 right-0 w-72 h-96 pointer-events-none overflow-hidden opacity-40">
          <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <ellipse cx="160" cy="80" rx="120" ry="140" fill="#d13d1d" opacity="0.6" />
            <ellipse cx="100" cy="60" rx="80" ry="100" fill="#141414" />
            <ellipse cx="180" cy="40" rx="70" ry="90" fill="#d13d1d" opacity="0.5" />
            <ellipse cx="130" cy="20" rx="50" ry="60" fill="#141414" />
          </svg>
        </div>

        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <SectionLabel>Como entregamos</SectionLabel>
          <h2 className="mb-8 text-cedro-white">Formatos disponíveis.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {formats.map((format, i) => (
              <div key={i} className="p-8 bg-cedro-navy border border-cedro-sage/10 border-l-[3px] border-l-cedro-red transition-all hover:-translate-y-1 hover:border-l-cedro-red hover:border-cedro-red/30">
                <h4 className="text-cedro-white mb-3">{format.title}</h4>
                <p className="text-[0.95rem] text-cedro-sage">{format.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL — fundo vermelho sólido, botão branco invertido */}
      <section className="py-24 bg-cedro-red text-center text-cedro-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        <div className="max-w-[600px] mx-auto px-8 relative z-10">
          <h2 className="text-cedro-white">Leve a Cedro para sua igreja.</h2>
          <p className="text-cedro-white/85 my-4 mb-8">Entre em contato para entender como podemos servir sua comunidade.</p>
          <a
            href="https://wa.me/5519999999999?text=Quero%20levar%20a%20Cedro%20para%20minha%20igreja"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-cedro-red font-bold tracking-[0.15em] uppercase text-sm px-10 py-4 transition-all hover:-translate-y-0.5 hover:bg-white/95"
          >
            Fale conosco →
          </a>
        </div>
      </section>
    </div>
  );
}
