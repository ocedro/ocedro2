import { Button } from '@/components/ui/button';
import { SectionLabel } from '@/components/ui/section-label';
import { Divider } from '@/components/ui/divider';

export default function IgrejaPage() {
  const topics = [
    'Pare de lutar contra a pornografia e vença de uma vez',
    'Psicologia redentora: Formando conselheiros espirituais',
    'Deus me chamou para quê? Vocação e propósito',
    'Por que filhos de Deus sofrem com ansiedade?'
  ];

  const formats = [
    { title: 'Palestras e seminários', desc: 'Eventos pontuais para a congregação ou liderança sobre temas específicos.' },
    { title: 'Treinamento de liderança', desc: 'Capacitação prática para pastores e líderes lidarem com questões complexas.' },
  ];

  return (
    <div className="flex flex-col">
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
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-cedro-red mb-6">Cedro para Igrejas</p>
            <h1 className="mb-4" style={{ color: '#0a0a0a' }}>Cedro na sua igreja.</h1>
            <div className="w-12 h-[2px] bg-cedro-red my-6" />
            <p className="text-lg max-w-[600px]" style={{ color: '#3a3a3a' }}>
              Fortalecer comunidades integrando fé, psicologia, filosofia e neurociência para enfrentar os desafios contemporâneos.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cedro-black text-cedro-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-4 text-cedro-white">Não oferecemos respostas superficiais a questões profundas.</h2>
              <Divider className="my-6" />
              <p className="mb-4 text-cedro-sage">Reconhecemos o poder da oração, do jejum e da comunidade da Igreja, além da constante atuação do Espírito Santo.</p>
              <p className="mb-4 text-cedro-sage">No entanto, os desafios contemporâneos nos convocam a um olhar mais atento e reflexivo sobre como Deus já nos forneceu soluções em Sua Palavra.</p>
              <p className="text-cedro-sage">Nas Escrituras, encontramos os alicerces sólidos para edificar pensamentos verdadeiros e combater fortalezas mentais e argumentos falaciosos.</p>
            </div>
            <div>
              <p className="mb-4 text-cedro-sage">Entendendo as diversas pressões enfrentadas por pastores e líderes, nos empenhamos para estudar e desvendar questões complexas.</p>
              <p><strong className="text-cedro-white font-bold">Nosso objetivo é oferecer orientação de alta qualidade potencializando seu ministério.</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cedro-navy">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <SectionLabel>Temas de domínio</SectionLabel>
          <h2 className="mb-12 text-cedro-white">O que levamos para sua comunidade.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {topics.map((topic, i) => (
              <div key={i} className="py-4 border-b border-cedro-sage/10 flex items-start gap-4">
                <div className="w-2 h-2 bg-cedro-red mt-2 shrink-0" />
                <p className="text-[0.95rem] text-cedro-light">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cedro-black">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <SectionLabel>Como entregamos</SectionLabel>
          <h2 className="mb-8 text-cedro-white">Formatos disponíveis.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formats.map((format, i) => (
              <div key={i} className="p-8 border border-cedro-sage/10 transition-all hover:border-cedro-red hover:-translate-y-1 bg-cedro-navy">
                <h4 className="text-cedro-white mb-3">{format.title}</h4>
                <p className="text-[0.95rem] text-cedro-sage">{format.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cedro-navy text-center text-cedro-white">
        <div className="max-w-[600px] mx-auto px-5 md:px-8">
          <h2 className="text-cedro-white">Leve a Cedro para sua igreja.</h2>
          <p className="text-cedro-sage my-4 mb-8">Entre em contato para entender como podemos servir sua comunidade.</p>
          <Button asChild withArrow>
            <a href="https://wa.me/5519999999999?text=Quero%20levar%20a%20Cedro%20para%20minha%20igreja" target="_blank" rel="noopener noreferrer">Fale conosco</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
