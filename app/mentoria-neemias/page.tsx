import type { CSSProperties } from 'react';

const WA_LINK = 'https://wa.me/5519983133780?text=Quero%20saber%20mais%20sobre%20a%20Mentoria%20Neemias';

const s = {
  silver:      '#C8C8C0',
  silverFaint: 'rgba(200,200,192,0.08)',
  silverLine:  'rgba(200,200,192,0.18)',
  white:       '#FFFFFF',
  bg:          '#080808',
  bgAlt:       '#0e0e0e',
} as const;

function WallDivider() {
  // Blocos irregulares que remetem a alvenaria/muro
  const blocks = [
    { w: 72, h: 3 }, { w: 28, h: 3 }, { w: 52, h: 3 }, { w: 40, h: 3 },
    { w: 60, h: 3 }, { w: 34, h: 3 }, { w: 48, h: 3 }, { w: 80, h: 3 },
    { w: 36, h: 3 }, { w: 55, h: 3 }, { w: 42, h: 3 }, { w: 30, h: 3 },
  ];
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2px', maxWidth: '480px', opacity: 0.35 }}>
      {blocks.map((b, i) => (
        <div key={i} style={{ width: b.w, height: b.h, background: s.silver }} />
      ))}
    </div>
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
    marginBottom: '0',
  };

  return (
    <div style={{ background: s.bg, color: s.white, fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 'clamp(120px, 14vh, 180px) clamp(24px, 6vw, 96px) clamp(56px, 8vh, 96px)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Número de fundo decorativo */}
        <div style={{
          position: 'absolute', top: '50%', right: 'clamp(24px, 5vw, 80px)',
          transform: 'translateY(-50%)',
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(160px, 22vw, 340px)',
          fontWeight: 700,
          color: 'rgba(200,200,192,0.03)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.05em',
        }}>N</div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '780px' }}>
          <span style={{ ...label, marginBottom: '28px', display: 'block' }}>Mentoria Neemias</span>

          <h1 style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: 'clamp(2.6rem, 6.5vw, 5.2rem)',
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
            fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
            color: 'rgba(200,200,192,0.6)',
            lineHeight: 1.75,
            maxWidth: '520px',
            margin: '0 0 48px',
          }}>
            Atendimento individual, direto comigo. Cinco encontros para entender quem você é, resolver o que está te prendendo, e sair com um plano concreto para a sua vida.
          </p>

          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="neemias-cta"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '12px',
              padding: '14px 32px',
              border: `1px solid ${s.silver}`,
              color: s.silver,
              fontSize: '11px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
              fontWeight: 600,
              transition: 'background 0.2s',
            }}>
            Tenho interesse na Mentoria Neemias <span style={{ letterSpacing: 0 }}>→</span>
          </a>
        </div>
      </section>

      {/* ── DIVISOR MURO ── */}
      <div style={{
        padding: '0 clamp(24px, 6vw, 96px)',
        borderTop: `1px solid ${s.silverLine}`,
        borderBottom: `1px solid ${s.silverLine}`,
        paddingTop: '32px',
        paddingBottom: '32px',
      }}>
        <WallDivider />
      </div>

      {/* ── DESCRIÇÃO ── */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'clamp(48px, 6vw, 96px)',
        padding: 'clamp(64px, 10vh, 120px) clamp(24px, 6vw, 96px)',
        background: s.bgAlt,
      }}>
        {/* Texto */}
        <div>
          <span style={{ ...label, marginBottom: '40px', display: 'block' }}>O processo</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              'Cinco encontros individuais, uma hora cada. Ninguém mais na sala.',
              'Entre os encontros, acompanhamento direto comigo durante cinco semanas.',
              'Vício, identidade, estrutura. O que precisar. Saímos com um plano escrito, revisado e pronto para executar.',
              'Não só teoria. Vou te ajudar a executar o que concluímos juntos nos encontros.',
            ].map((p, i) => (
              <p key={i} style={{
                fontSize: 'clamp(0.9rem, 1.4vw, 1rem)',
                color: i === 3 ? s.white : 'rgba(200,200,192,0.58)',
                lineHeight: 1.78,
                margin: 0,
                fontWeight: i === 3 ? 500 : 400,
              }}>{p}</p>
            ))}
          </div>
        </div>

        {/* Números */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', borderLeft: `1px solid ${s.silverLine}`, paddingLeft: 'clamp(32px, 4vw, 64px)' }}>
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
              <p style={{ fontSize: '11px', color: 'rgba(200,200,192,0.45)', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '8px 0 0' }}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIVISOR MURO 2 ── */}
      <div style={{
        padding: '28px clamp(24px, 6vw, 96px)',
        borderTop: `1px solid ${s.silverLine}`,
        borderBottom: `1px solid ${s.silverLine}`,
        display: 'flex', justifyContent: 'flex-end',
      }}>
        <WallDivider />
      </div>

      {/* ── PREÇO + CTA ── */}
      <section style={{
        padding: 'clamp(80px, 12vh, 140px) clamp(24px, 6vw, 96px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '0',
      }}>
        <span style={{ ...label, marginBottom: '48px' }}>Investimento</span>

        {/* Parcelado */}
        <p style={{ fontSize: '11px', color: 'rgba(200,200,192,0.4)', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0 0 8px' }}>Parcelado</p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '32px' }}>
          <span style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', color: 'rgba(200,200,192,0.5)' }}>12x</span>
          <span style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            fontWeight: 700,
            color: s.white,
            lineHeight: 1,
            letterSpacing: '-0.02em',
          }}>R$ 295</span>
        </div>

        {/* Divider */}
        <div style={{ width: '48px', height: '1px', background: s.silverLine, margin: '0 0 32px' }} />

        {/* À vista */}
        <p style={{ fontSize: '11px', color: 'rgba(200,200,192,0.4)', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0 0 8px' }}>À vista</p>
        <div style={{ marginBottom: '16px' }}>
          <span style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            fontWeight: 700,
            color: s.silver,
            lineHeight: 1,
            letterSpacing: '-0.02em',
          }}>R$ 2.997</span>
        </div>

        <p style={{ fontSize: '13px', color: 'rgba(200,200,192,0.4)', margin: '0 0 56px', lineHeight: 1.6 }}>
          5 encontros individuais + acompanhamento por WhatsApp durante todo o processo.
        </p>

        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="neemias-cta"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '12px',
            padding: '16px 40px',
            border: `1px solid ${s.silver}`,
            color: s.silver,
            fontSize: '11px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontFamily: 'var(--font-inter, Inter, sans-serif)',
            fontWeight: 600,
            transition: 'background 0.2s',
          }}>
          Tenho interesse na Mentoria Neemias <span style={{ letterSpacing: 0 }}>→</span>
        </a>
      </section>

    </div>
  );
}
