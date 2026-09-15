'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const WA_LINK = 'https://wa.me/5519974010520?text=Ol%C3%A1%2C%20Leandro.%20Conheci%20a%20Mentoria%20Neemias%20e%20me%20identifiquei%20com%20a%20proposta.%20Quero%20entender%20melhor%20como%20funciona%20o%20processo%20e%20saber%20se%20existe%20uma%20vaga%20dispon%C3%ADvel%20para%20o%20meu%20momento.';

const C = {
  bg:      '#0B0B0A',
  bgAlt:   '#111110',
  text:    '#E8E3D8',
  dim:     'rgba(232,227,216,0.5)',
  dimmer:  'rgba(232,227,216,0.3)',
  bronze:  '#9A7950',
  bronzeD: 'rgba(154,121,80,0.15)',
  bronzeL: 'rgba(154,121,80,0.35)',
  white:   '#F0EBE2',
  line:    'rgba(232,227,216,0.1)',
};

const serif = '"Cormorant Garamond", "Playfair Display", Georgia, serif';
const sans  = 'var(--font-inter, Inter, "Helvetica Neue", sans-serif)';

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        obs.disconnect();
      }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function FadeIn({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useFadeIn();
  return (
    <div ref={ref} style={{
      opacity: 0,
      transform: 'translateY(24px)',
      transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
      ...style,
    }}>{children}</div>
  );
}

function Bronze({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <span style={{ color: C.bronze, ...style }}>{children}</span>;
}

function Section({ children, bg, style = {}, id }: { children: React.ReactNode; bg?: string; style?: React.CSSProperties; id?: string }) {
  return (
    <section id={id} style={{
      background: bg || C.bg,
      padding: 'clamp(80px, 12vh, 140px) clamp(24px, 7vw, 120px)',
      ...style,
    }}>{children}</section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: sans,
      fontSize: '11px',
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: C.bronze,
      marginBottom: '32px',
    }}>{children}</p>
  );
}

function H2({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <h2 style={{
      fontFamily: serif,
      fontSize: 'clamp(2.2rem, 5vw, 4rem)',
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: '-0.01em',
      color: C.white,
      margin: '0 0 32px',
      ...style,
    }}>{children}</h2>
  );
}

function Body({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{
      fontFamily: sans,
      fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
      color: C.dim,
      lineHeight: 1.8,
      margin: '0 0 20px',
      maxWidth: '58ch',
      ...style,
    }}>{children}</p>
  );
}

function Cta({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      padding: secondary ? '13px 28px' : '15px 36px',
      fontFamily: sans,
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      textDecoration: 'none',
      background: secondary ? 'transparent' : C.bronze,
      color: secondary ? C.bronze : C.bg,
      border: `1px solid ${C.bronze}`,
      transition: 'opacity 0.2s',
    }}
    onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.8'}
    onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
    >{children}</a>
  );
}

function Divider() {
  return <div style={{ width: '48px', height: '1px', background: C.bronze, margin: '48px 0', opacity: 0.6 }} />;
}

export default function NeemiasPage() {
  const [mobileCtaVisible, setMobileCtaVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      setMobileCtaVisible(!e.isIntersecting);
    }, { threshold: 0.1 });
    if (heroRef.current) obs.observe(heroRef.current);
    return () => obs.disconnect();
  }, []);

  const steps = [
    { n: '01', title: 'Diagnóstico', desc: 'Onde você está e o que precisa ser reconstruído.' },
    { n: '02', title: 'Identidade', desc: 'Quem você é, o que importa e quem precisa se tornar.' },
    { n: '03', title: 'Estrutura', desc: 'Rotina, hábitos, limites, responsabilidades e organização.' },
    { n: '04', title: 'Direção', desc: 'Decisões, prioridades e próximos passos.' },
    { n: '05', title: 'Execução', desc: 'Transformar o plano em comportamento acompanhado.' },
  ];

  const entrega = [
    '5 encontros individuais de 60 minutos',
    'Acompanhamento direto durante 5 semanas',
    'Contato pelo WhatsApp durante o processo',
    'Diagnóstico individual',
    'Plano pessoal escrito',
    'Revisão e ajuste do plano',
    'Direcionamento para execução',
  ];

  const paraQuem = [
    'Você sabe que precisa mudar, mas continua adiando.',
    'Existe uma área da sua vida que está fora de controle.',
    'Você está cansado de consumir conteúdo sem conseguir aplicar.',
    'Precisa tomar decisões importantes e não sabe por onde começar.',
    'Falta estrutura para sustentar aquilo que acredita.',
    'Quer alguém que não apenas escute, mas ajude a organizar, confrontar e direcionar.',
    'Está disposto a executar o que for definido no processo.',
  ];

  const naoParaQuem = [
    'Quer terceirizar a própria responsabilidade.',
    'Não está disposto a executar.',
    'Procura apenas motivação passageira.',
    'Espera uma solução instantânea.',
    'Procura psicoterapia.',
  ];

  const faq = [
    { q: 'A Neemias é terapia?', a: 'Não. É uma mentoria individual focada em orientação, estrutura, direção e execução. Não substitui psicoterapia.' },
    { q: 'Quantos encontros são?', a: 'Cinco encontros individuais de aproximadamente uma hora cada.' },
    { q: 'Quanto tempo dura o processo?', a: 'Cinco semanas, com acompanhamento direto entre os encontros.' },
    { q: 'É individual?', a: 'Sim. Não há outros participantes nos encontros. Cada sessão é construída a partir do seu histórico específico.' },
    { q: 'Existe acompanhamento entre as sessões?', a: 'Sim. O acompanhamento é feito diretamente comigo pelo WhatsApp durante todo o processo.' },
    { q: 'Os encontros são online?', a: 'Sim. Os cinco encontros acontecem online, em formato de videochamada individual.' },
    { q: 'Preciso ser cristão?', a: 'A referência de Neemias é bíblica, mas a mentoria não exige filiação religiosa. O processo é voltado para qualquer homem que busca direção, estrutura e reconstrução.' },
    { q: 'Como entro?', a: 'O primeiro passo é solicitar uma vaga pelo WhatsApp. Vamos conversar para entender se o processo faz sentido para o seu momento.' },
  ];

  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: sans }}>

      {/* ── HERO ── */}
      <section ref={heroRef} style={{
        minHeight: '100svh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Foto */}
        <div style={{ position: 'relative', overflow: 'hidden', gridColumn: 2, gridRow: 1 }}>
          <Image src="/leandro-neemias.jpg" alt="Leandro Carone" fill
            style={{ objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(100%) contrast(1.08) brightness(0.88)' }} priority />
          <div style={{ position: 'absolute', inset: 0,
            background: `linear-gradient(to right, ${C.bg} 0%, transparent 22%), linear-gradient(to top, ${C.bg} 0%, transparent 30%)` }} />
        </div>

        {/* Texto */}
        <div style={{
          gridColumn: 1, gridRow: 1,
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: 'clamp(120px,14vh,180px) clamp(32px,5vw,96px) clamp(64px,9vh,112px)',
          position: 'relative', zIndex: 1,
        }}>
          <FadeIn delay={100}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
              <Image src="/neemias-logo.png" alt="N" width={168} height={168}
                style={{ opacity: 0.9 }} />
              <div>
                <div style={{ fontFamily: serif, fontSize: 'clamp(1.1rem,2vw,1.4rem)', fontWeight: 600, color: C.white, letterSpacing: '0.04em', lineHeight: 1.15 }}>Mentoria</div>
                <div style={{ fontFamily: serif, fontSize: 'clamp(1.1rem,2vw,1.4rem)', fontWeight: 600, color: C.bronze, letterSpacing: '0.04em', lineHeight: 1.15 }}>Neemias</div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <p style={{ fontFamily: sans, fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', color: C.bronze, marginBottom: '24px' }}>
              Mentoria Individual
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <h1 style={{
              fontFamily: serif,
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              fontWeight: 600,
              lineHeight: 1.04,
              letterSpacing: '-0.02em',
              color: C.white,
              margin: '0 0 28px',
            }}>
              Você não precisa<br />de mais conteúdo.<br />
              <Bronze>Precisa de direção.</Bronze>
            </h1>
          </FadeIn>
          <FadeIn delay={400}>
            <p style={{ fontFamily: sans, fontSize: 'clamp(0.9rem,1.4vw,1rem)', color: C.dim, lineHeight: 1.8, maxWidth: '44ch', marginBottom: '40px' }}>
              Uma mentoria individual, diretamente comigo, para homens que sabem que precisam mudar, mas precisam transformar consciência em direção, estrutura e ação.
            </p>
          </FadeIn>
          <FadeIn delay={500}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <Cta href={WA_LINK}>Solicitar uma vaga</Cta>
              <a href="#processo" style={{ fontFamily: sans, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.dim, textDecoration: 'none' }}>
                Entender como funciona ↓
              </a>
            </div>
            <p style={{ fontFamily: sans, fontSize: '11px', color: C.dimmer, letterSpacing: '0.05em' }}>
              Poucas vagas por ciclo devido ao formato individual.
            </p>
          </FadeIn>
        </div>

        {/* Stats flutuantes */}
        <div style={{
          position: 'absolute', bottom: 'clamp(32px,5vh,64px)', right: 'clamp(24px,4vw,64px)',
          display: 'flex', gap: '40px', zIndex: 2,
        }}>
          {[['5', 'encontros privados'], ['5', 'semanas de acompanhamento'], ['1', 'plano pessoal']].map(([n, l], i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: serif, fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 600, color: C.bronze, lineHeight: 1 }}>{n}</div>
              <div style={{ fontFamily: sans, fontSize: '10px', color: C.dimmer, letterSpacing: '0.1em', marginTop: '6px', textTransform: 'uppercase' }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── O PROBLEMA ── */}
      <Section bg={C.bgAlt}>
        <FadeIn>
          <div style={{ maxWidth: '640px' }}>
            <Label>O problema</Label>
            <H2>Você já sabe muita coisa.</H2>
            <Body>Você sabe o que deveria fazer. Sabe o que precisa mudar. Talvez até saiba exatamente onde está o problema.</Body>
            <Body>Mas saber não significa mudar.</Body>
            <Body>Existe uma distância entre aquilo que você entende e aquilo que consegue viver. É nessa distância que a Neemias trabalha.</Body>
            <Divider />
            <p style={{ fontFamily: serif, fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', color: C.white, fontStyle: 'italic', lineHeight: 1.4, maxWidth: '48ch' }}>
              Consciência sem direção não produz reconstrução.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* ── METÁFORA NEEMIAS ── */}
      <Section>
        <FadeIn>
          <div style={{ maxWidth: '720px' }}>
            <Label>A referência</Label>
            <H2>Toda reconstrução começa quando você decide olhar para as ruínas.</H2>
            <Body>Neemias não recebeu uma cidade pronta. Recebeu uma cidade com seus muros destruídos.</Body>
            <Body>Antes de reconstruir, precisou enxergar o estado real das coisas. Depois, estabelecer uma estratégia. Organizar. Trabalhar. Resistir à oposição. E permanecer até terminar.</Body>
            <Body>A Neemias segue essa lógica.</Body>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: '1px', marginTop: '64px', background: C.line }}>
          {[
            { n: '01', t: 'Diagnosticar', d: 'Entender o que está realmente acontecendo.' },
            { n: '02', t: 'Reconstruir', d: 'Identificar aquilo que precisa ser corrigido.' },
            { n: '03', t: 'Estruturar', d: 'Transformar princípios em decisões, hábitos e limites.' },
            { n: '04', t: 'Executar', d: 'Colocar o plano em prática e sustentar o processo.' },
          ].map((s, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div style={{ background: C.bg, padding: '40px 32px' }}>
                <div style={{ fontFamily: sans, fontSize: '11px', color: C.bronze, marginBottom: '20px', letterSpacing: '0.15em' }}>{s.n}</div>
                <div style={{ fontFamily: serif, fontSize: '1.4rem', fontWeight: 600, color: C.white, marginBottom: '12px' }}>{s.t}</div>
                <div style={{ fontFamily: sans, fontSize: '0.9rem', color: C.dim, lineHeight: 1.7 }}>{s.d}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ── O PROCESSO ── */}
      <Section id="processo" bg={C.bgAlt}>
        <FadeIn>
          <div style={{ maxWidth: '560px', marginBottom: '64px' }}>
            <Label>O processo</Label>
            <H2 style={{ marginBottom: '16px' }}>Cinco encontros.<br />Cinco semanas.<br />Um plano.</H2>
            <Body>Encontros individuais de uma hora, diretamente comigo. Acompanhamento entre os encontros durante todo o processo.</Body>
          </div>
        </FadeIn>
        <div style={{ maxWidth: '720px' }}>
          {steps.map((s, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div style={{
                display: 'grid', gridTemplateColumns: '48px 1fr',
                gap: '24px', alignItems: 'start',
                padding: '28px 0',
                borderBottom: `1px solid ${C.line}`,
              }}>
                <div style={{ fontFamily: sans, fontSize: '11px', color: C.bronze, letterSpacing: '0.12em', paddingTop: '4px' }}>{s.n}</div>
                <div>
                  <div style={{ fontFamily: serif, fontSize: 'clamp(1.1rem,2vw,1.35rem)', fontWeight: 600, color: C.white, marginBottom: '8px' }}>{s.title}</div>
                  <div style={{ fontFamily: sans, fontSize: '0.9rem', color: C.dim, lineHeight: 1.7 }}>{s.desc}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ── O QUE VOCÊ RECEBE ── */}
      <Section>
        <FadeIn>
          <div style={{ maxWidth: '560px', marginBottom: '64px' }}>
            <Label>O que você recebe</Label>
            <H2>Você não termina a Neemias com mais anotações.<br /><Bronze>Termina com um plano.</Bronze></H2>
          </div>
        </FadeIn>

        {/* Números grandes */}
        <div style={{ display: 'flex', gap: 'clamp(32px,6vw,96px)', marginBottom: '72px', flexWrap: 'wrap' }}>
          {[['5', 'encontros'], ['5', 'semanas'], ['0', 'outras pessoas\nna sala']].map(([n, l], i) => (
            <FadeIn key={i} delay={i * 100}>
              <div>
                <div style={{ fontFamily: serif, fontSize: 'clamp(4rem,9vw,8rem)', fontWeight: 600, color: n === '0' ? C.bronze : C.white, lineHeight: 1, letterSpacing: '-0.03em' }}>{n}</div>
                <div style={{ fontFamily: sans, fontSize: '11px', color: C.dim, letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '12px', whiteSpace: 'pre-line' }}>{l}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Lista */}
        <div style={{ maxWidth: '480px' }}>
          {entrega.map((e, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '14px 0', borderBottom: `1px solid ${C.line}` }}>
              <div style={{ width: '6px', height: '6px', background: C.bronze, borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
              <span style={{ fontFamily: sans, fontSize: '0.95rem', color: C.dim, lineHeight: 1.6 }}>{e}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── PARA QUEM É ── */}
      <Section bg={C.bgAlt}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 'clamp(48px,6vw,96px)' }}>
          <FadeIn>
            <div>
              <Label>Para quem é</Label>
              <H2>A Neemias é para você se…</H2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {paraQuem.map((p, i) => (
                  <div key={i} style={{ padding: '16px 0', borderBottom: `1px solid ${C.line}` }}>
                    <span style={{ fontFamily: sans, fontSize: '0.95rem', color: C.dim, lineHeight: 1.7 }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div>
              <Label>Para quem não é</Label>
              <H2>A Neemias não é para todo mundo.</H2>
              <Body>A Neemias não foi criada para quem procura motivação passageira, respostas prontas ou mais conteúdo para consumir.</Body>
              <Body style={{ marginBottom: '32px' }}>Não é para quem:</Body>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '40px' }}>
                {naoParaQuem.map((p, i) => (
                  <div key={i} style={{ padding: '14px 0', borderBottom: `1px solid ${C.line}` }}>
                    <span style={{ fontFamily: sans, fontSize: '0.95rem', color: C.dim, lineHeight: 1.7 }}>{p}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontFamily: serif, fontSize: 'clamp(1.1rem,2vw,1.35rem)', color: C.white, fontStyle: 'italic', lineHeight: 1.5 }}>
                Você não precisa de alguém para viver a sua vida por você. Precisa de direção para assumir novamente a responsabilidade por ela.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>





      {/* ── ESCASSEZ ── */}
      <Section>
        <FadeIn>
          <div style={{ maxWidth: '560px' }}>
            <Label>Disponibilidade</Label>
            <H2>Um processo individual exige espaço.</H2>
            <Body>Como todos os encontros são individuais e o acompanhamento é feito diretamente por mim, o número de participantes simultâneos é limitado. Não há como escalar sem comprometer a qualidade do acompanhamento.</Body>
          </div>
        </FadeIn>
      </Section>

      {/* ── INVESTIMENTO ── */}
      <Section bg={C.bgAlt}>
        <FadeIn>
          <div style={{ maxWidth: '480px' }}>
            <Label>Investimento</Label>
            <div style={{ marginBottom: '48px' }}>
              <div style={{ fontFamily: serif, fontSize: 'clamp(3.5rem,8vw,6rem)', fontWeight: 600, color: C.white, lineHeight: 1, letterSpacing: '-0.02em' }}>
                R$ 2.997
              </div>
              <div style={{ fontFamily: sans, fontSize: '13px', color: C.dim, marginTop: '12px' }}>à vista</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '20px 0' }}>
                <div style={{ flex: 1, height: '1px', background: C.line }} />
                <span style={{ fontFamily: sans, fontSize: '11px', color: C.dimmer, letterSpacing: '0.15em' }}>OU</span>
                <div style={{ flex: 1, height: '1px', background: C.line }} />
              </div>
              <div style={{ fontFamily: serif, fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 600, color: C.dim, lineHeight: 1 }}>
                12× de R$ 295
              </div>
            </div>
            <Body style={{ marginBottom: '40px' }}>Inclui 5 encontros individuais de 60 minutos + acompanhamento direto durante cinco semanas.</Body>
            <Cta href={WA_LINK}>Solicitar uma vaga</Cta>
          </div>
        </FadeIn>
      </Section>

      {/* ── FAQ ── */}
      <Section>
        <FadeIn>
          <div style={{ maxWidth: '640px' }}>
            <Label>Perguntas frequentes</Label>
            <H2>O que você precisa saber.</H2>
            <div style={{ marginTop: '48px' }}>
              {faq.map((f, i) => (
                <div key={i} style={{ padding: '24px 0', borderBottom: `1px solid ${C.line}` }}>
                  <div style={{ fontFamily: serif, fontSize: '1.15rem', fontWeight: 600, color: C.white, marginBottom: '10px' }}>{f.q}</div>
                  <div style={{ fontFamily: sans, fontSize: '0.93rem', color: C.dim, lineHeight: 1.75 }}>{f.a}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ── CTA FINAL ── */}
      <section style={{ background: C.bg, padding: 'clamp(100px,15vh,160px) clamp(24px,7vw,120px)', textAlign: 'center' }}>
        <FadeIn>
          <Image src="/neemias-logo.png" alt="N" width={72} height={72} style={{ marginBottom: '48px', opacity: 0.7 }} />
          <H2 style={{ maxWidth: '520px', margin: '0 auto 24px', textAlign: 'center' }}>Você já sabe o que precisa mudar.</H2>
          <p style={{ fontFamily: serif, fontSize: 'clamp(1.2rem,2.5vw,1.6rem)', color: C.bronze, fontStyle: 'italic', marginBottom: '32px' }}>
            Agora precisa decidir o que fará a respeito.
          </p>
          <Body style={{ textAlign: 'center', margin: '0 auto 48px', maxWidth: '44ch' }}>
            Cinco encontros. Cinco semanas. Um plano para reconstruir o que precisa ser reconstruído.
          </Body>
          <Cta href={WA_LINK}>Solicitar uma vaga</Cta>
        </FadeIn>
      </section>

      {/* ── CTA FIXO MOBILE ── */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100,
        background: C.bronze, padding: '16px 24px',
        display: mobileCtaVisible ? 'block' : 'none',
      }}
      className="md:hidden">
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{
          display: 'block', textAlign: 'center',
          fontFamily: sans, fontSize: '11px', fontWeight: 700,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: C.bg, textDecoration: 'none',
        }}>Solicitar uma vaga</a>
      </div>

    </div>
  );
}
