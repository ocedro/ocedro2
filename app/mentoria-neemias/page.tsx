import type { CSSProperties } from 'react';
import Image from 'next/image';

const WA_LINK = 'https://wa.me/5519983133780?text=Quero%20saber%20mais%20sobre%20a%20Mentoria%20Neemias';

const s = {
  silver:      '#C8C8C0',
  silverFaint: 'rgba(200,200,192,0.08)',
  silverLine:  'rgba(200,200,192,0.18)',
  white:       '#FFFFFF',
  bg:          '#080808',
  bgAlt:       '#0e0e0e',
  orange:      '#E8612A',
  orangeText:  '#FFFFFF',
} as const;

// Silhueta SVG de muro de pedras irregulares
function StoneWall({ flip = false }: { flip?: boolean }) {
  return (
    <div style={{
      width: '100%',
      opacity: 0.55,
      transform: flip ? 'scaleX(-1)' : 'none',
      lineHeight: 0,
    }}>
      <svg
        viewBox="0 0 900 64"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
        aria-hidden="true"
      >
        {/* Linha de pedras de baixo */}
        <polygon points="0,64 0,42 18,38 18,64" fill="#C8C8C0" opacity="0.6"/>
        <polygon points="18,64 18,38 52,34 60,64" fill="#C8C8C0" opacity="0.5"/>
        <polygon points="60,64 52,34 98,36 104,64" fill="#C8C8C0" opacity="0.65"/>
        <polygon points="104,64 98,36 130,32 148,64" fill="#C8C8C0" opacity="0.45"/>
        <polygon points="148,64 130,32 178,30 190,64" fill="#C8C8C0" opacity="0.6"/>
        <polygon points="190,64 178,30 224,34 238,64" fill="#C8C8C0" opacity="0.5"/>
        <polygon points="238,64 224,34 264,32 280,64" fill="#C8C8C0" opacity="0.55"/>
        <polygon points="280,64 264,32 316,36 330,64" fill="#C8C8C0" opacity="0.65"/>
        <polygon points="330,64 316,36 358,30 372,64" fill="#C8C8C0" opacity="0.5"/>
        <polygon points="372,64 358,30 404,34 420,64" fill="#C8C8C0" opacity="0.6"/>
        <polygon points="420,64 404,34 448,32 465,64" fill="#C8C8C0" opacity="0.45"/>
        <polygon points="465,64 448,32 495,36 512,64" fill="#C8C8C0" opacity="0.6"/>
        <polygon points="512,64 495,36 540,30 556,64" fill="#C8C8C0" opacity="0.5"/>
        <polygon points="556,64 540,30 588,34 604,64" fill="#C8C8C0" opacity="0.65"/>
        <polygon points="604,64 588,34 634,32 650,64" fill="#C8C8C0" opacity="0.55"/>
        <polygon points="650,64 634,32 682,36 698,64" fill="#C8C8C0" opacity="0.5"/>
        <polygon points="698,64 682,36 726,30 744,64" fill="#C8C8C0" opacity="0.6"/>
        <polygon points="744,64 726,30 772,34 790,64" fill="#C8C8C0" opacity="0.5"/>
        <polygon points="790,64 772,34 820,32 836,64" fill="#C8C8C0" opacity="0.65"/>
        <polygon points="836,64 820,32 868,36 884,64" fill="#C8C8C0" opacity="0.45"/>
        <polygon points="884,64 868,36 900,38 900,64" fill="#C8C8C0" opacity="0.6"/>

        {/* Linha de pedras de cima (escalonada) */}
        <polygon points="10,42 10,22 40,18 55,38" fill="#C8C8C0" opacity="0.35"/>
        <polygon points="40,38 40,18 82,14 95,36" fill="#C8C8C0" opacity="0.4"/>
        <polygon points="82,36 82,14 124,16 136,34" fill="#C8C8C0" opacity="0.3"/>
        <polygon points="124,34 124,16 164,12 178,32" fill="#C8C8C0" opacity="0.38"/>
        <polygon points="164,32 164,12 210,16 222,30" fill="#C8C8C0" opacity="0.32"/>
        <polygon points="210,30 210,16 252,12 264,30" fill="#C8C8C0" opacity="0.4"/>
        <polygon points="252,30 252,12 296,14 308,32" fill="#C8C8C0" opacity="0.35"/>
        <polygon points="296,32 296,14 340,10 354,30" fill="#C8C8C0" opacity="0.42"/>
        <polygon points="340,30 340,10 382,14 396,30" fill="#C8C8C0" opacity="0.33"/>
        <polygon points="382,30 382,14 426,10 440,28" fill="#C8C8C0" opacity="0.38"/>
        <polygon points="426,28 426,10 468,14 482,30" fill="#C8C8C0" opacity="0.4"/>
        <polygon points="468,30 468,14 512,10 524,28" fill="#C8C8C0" opacity="0.32"/>
        <polygon points="512,28 512,10 554,14 568,30" fill="#C8C8C0" opacity="0.38"/>
        <polygon points="554,30 554,14 598,10 612,28" fill="#C8C8C0" opacity="0.42"/>
        <polygon points="598,28 598,10 640,14 654,30" fill="#C8C8C0" opacity="0.35"/>
        <polygon points="640,30 640,14 684,10 698,28" fill="#C8C8C0" opacity="0.4"/>
        <polygon points="684,28 684,10 726,14 740,30" fill="#C8C8C0" opacity="0.33"/>
        <polygon points="726,30 726,14 770,10 784,30" fill="#C8C8C0" opacity="0.38"/>
        <polygon points="770,30 770,10 814,14 828,28" fill="#C8C8C0" opacity="0.4"/>
        <polygon points="814,28 814,10 856,12 870,28" fill="#C8C8C0" opacity="0.35"/>
        <polygon points="856,28 856,12 900,16 900,30" fill="#C8C8C0" opacity="0.38"/>
      </svg>
    </div>
  );
}

function CtaButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="neemias-cta-orange"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        padding: '16px 36px',
        background: s.orange,
        color: s.orangeText,
        fontSize: '11px',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        fontFamily: 'var(--font-inter, Inter, sans-serif)',
        fontWeight: 700,
        transition: 'opacity 0.2s',
      }}
    >
      {children}
    </a>
  );
}

export default function NeemiasPage() {
  const label: CSSProperties = {
    fontFamily: 'var(--font-inter, Inter, sans-serif)',
    fontSize: '10px',
    letterSpacing: '0.42em',
    textTransform: 'uppercase',
    color: s.silver,
    display: 'block',
  };

  return (
    <div style={{ background: s.bg, color: s.white, fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100svh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Coluna esquerda — texto */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 'clamp(120px, 14vh, 180px) clamp(32px, 5vw, 80px) clamp(56px, 8vh, 96px)',
          position: 'relative',
          zIndex: 1,
        }}>
          <span style={{ ...label, marginBottom: '28px' }}>Mentoria Neemias</span>

          <h1 style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: 'clamp(2rem, 4.5vw, 4.2rem)',
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            color: s.white,
            margin: '0 0 32px',
          }}>
            Você sabe que tem<br />um problema.<br />
            <span style={{ color: s.silver }}>O que falta é um plano.</span>
          </h1>

          <p style={{
            fontSize: 'clamp(0.9rem, 1.4vw, 1rem)',
            color: 'rgba(200,200,192,0.6)',
            lineHeight: 1.75,
            maxWidth: '440px',
            margin: '0 0 48px',
          }}>
            Mentoria individual, diretamente comigo. Cinco encontros para entender quem você é, resolver o que está te prendendo, e sair com um plano concreto para a sua vida.
          </p>

          <CtaButton href={WA_LINK}>
            Tenho interesse <span style={{ letterSpacing: 0 }}>→</span>
          </CtaButton>
        </div>

        {/* Coluna direita — foto */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <Image
            src="/leandro-neemias.jpg"
            alt="Leandro Carone"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center top',
              filter: 'grayscale(100%) contrast(1.05)',
            }}
            priority
          />
          {/* Gradiente para fundir com o fundo */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, #080808 0%, transparent 18%), linear-gradient(to top, #080808 0%, transparent 25%)',
          }} />
        </div>
      </section>

      {/* ── MURO 1 ── */}
      <div style={{ borderTop: `1px solid ${s.silverLine}`, paddingTop: '24px', overflow: 'hidden' }}>
        <StoneWall />
      </div>

      {/* ── DESCRIÇÃO ── */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'clamp(48px, 6vw, 96px)',
        padding: 'clamp(64px, 10vh, 120px) clamp(24px, 6vw, 96px)',
        background: s.bgAlt,
      }}>
        <div>
          <span style={{ ...label, marginBottom: '40px' }}>O processo</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              'Cinco encontros individuais, uma hora cada. Ninguém mais na sala.',
              'Entre os encontros, acompanhamento direto comigo durante cinco semanas.',
              'Vício, identidade, estrutura. O que precisar. Saímos com um plano escrito, revisado e pronto para executar.',
              'Não só teoria. Vou te ajudar a executar o que concluímos juntos nos encontros.',
            ].map((p, i) => (
              <p key={i} style={{
                fontSize: 'clamp(0.9rem, 1.4vw, 1rem)',
                color: i === 3 ? s.white : 'rgba(200,200,192,0.55)',
                lineHeight: 1.78,
                margin: 0,
                fontWeight: i === 3 ? 500 : 400,
              }}>{p}</p>
            ))}
          </div>
        </div>

        <div style={{ borderLeft: `1px solid ${s.silverLine}`, paddingLeft: 'clamp(32px, 4vw, 64px)' }}>
          {[
            { num: '5', label: 'encontros individuais' },
            { num: '5', label: 'semanas de acompanhamento' },
            { num: '0', label: 'outros na sala' },
          ].map((item, i) => (
            <div key={i} style={{
              padding: '28px 0',
              borderBottom: i < 2 ? `1px solid ${s.silverLine}` : 'none',
            }}>
              <div style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                fontWeight: 700,
                color: s.silver,
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}>{item.num}</div>
              <p style={{ fontSize: '11px', color: 'rgba(200,200,192,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '8px 0 0' }}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MURO 2 (espelhado) ── */}
      <div style={{ borderBottom: `1px solid ${s.silverLine}`, paddingBottom: '24px', overflow: 'hidden' }}>
        <StoneWall flip />
      </div>

      {/* ── PREÇO + CTA ── */}
      <section style={{
        padding: 'clamp(80px, 12vh, 140px) clamp(24px, 6vw, 96px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}>
        <span style={{ ...label, marginBottom: '48px' }}>Investimento</span>

        <p style={{ fontSize: '11px', color: 'rgba(200,200,192,0.4)', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0 0 8px' }}>Parcelado</p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '32px' }}>
          <span style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', color: 'rgba(200,200,192,0.45)' }}>12x</span>
          <span style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            fontWeight: 700,
            color: s.white,
            lineHeight: 1,
            letterSpacing: '-0.02em',
          }}>R$ 295</span>
        </div>

        <div style={{ width: '48px', height: '1px', background: s.silverLine, margin: '0 0 32px' }} />

        <p style={{ fontSize: '11px', color: 'rgba(200,200,192,0.4)', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0 0 8px' }}>À vista</p>
        <div style={{ marginBottom: '16px' }}>
          <span style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 600,
            color: s.silver,
            lineHeight: 1,
            letterSpacing: '-0.01em',
          }}>R$ 2.997</span>
        </div>

        <p style={{ fontSize: '13px', color: 'rgba(200,200,192,0.4)', margin: '0 0 56px', lineHeight: 1.6 }}>
          5 encontros individuais + acompanhamento por WhatsApp durante todo o processo.
        </p>

        <CtaButton href={WA_LINK}>
          Tenho interesse na Mentoria Neemias <span style={{ letterSpacing: 0 }}>→</span>
        </CtaButton>
      </section>

    </div>
  );
}
