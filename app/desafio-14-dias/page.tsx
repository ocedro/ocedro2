'use client';

import { useEffect, useRef } from 'react';
import './desafio.css';

const CTA = 'https://chk.eduzz.com/bfldrrzr';

export default function DesafioPage() {
  const progRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const mmRef = useRef<HTMLSpanElement>(null);
  const msRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prog = progRef.current;
    const nav = navRef.current;
    const sticky = stickyRef.current;
    let shown = false;

    const onScroll = () => {
      const h = document.body.scrollHeight - window.innerHeight;
      if (h > 0 && prog) prog.style.width = (window.scrollY / h * 100) + '%';
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
      const show = window.scrollY > 600;
      if (show && !shown && sticky) { sticky.classList.add('up'); shown = true; }
      if (!show && shown && sticky) { sticky.classList.remove('up'); shown = false; }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Scroll animations
    const sas = document.querySelectorAll('.sa');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); });
    }, { threshold: 0.10, rootMargin: '0px 0px -32px 0px' });
    sas.forEach(el => io.observe(el));

    // Pain underline
    const pi = document.querySelectorAll('.pain-item');
    const io2 = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.3 });
    pi.forEach(el => io2.observe(el));

    // Hero immediate
    requestAnimationFrame(() => {
      document.querySelectorAll('.hero .sa, .proof-strip.sa').forEach(el => {
        setTimeout(() => el.classList.add('on'), 80);
      });
    });

    // Timer
    const mm = mmRef.current;
    const ms = msRef.current;
    let rem = 7 * 60;
    const tick = () => {
      if (rem < 0) rem = 7 * 60;
      if (mm) mm.textContent = String(Math.floor(rem / 60)).padStart(2, '0');
      if (ms) ms.textContent = String(rem % 60).padStart(2, '0');
      rem--;
    };
    tick();
    const timer = setInterval(tick, 1000);

    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
      io2.disconnect();
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="desafio-page">
      <div id="grain" />
      <div id="prog" ref={progRef} />

      <nav id="nav" ref={navRef} className="d-nav">
        <span className="nav-logo">PLDCP · XIV</span>
        <a href={CTA} target="_blank" rel="noopener" className="nav-cta">Garantir vaga</a>
      </nav>

      <div className="urgency-bar" style={{ marginTop: 'var(--nav-h)' }}>
        <span className="urg-text">⚡ Oferta especial encerra em</span>
        <div className="urg-timer">
          <div><span className="urg-seg" ref={mmRef}>07</span><span className="urg-label">min</span></div>
          <span className="urg-colon">:</span>
          <div><span className="urg-seg" ref={msRef}>00</span><span className="urg-label">seg</span></div>
        </div>
        <span className="urg-price-off">De R$197 por R$49,90</span>
      </div>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-badge sa from-b" style={{ transitionDelay: '.05s' }}>Desafio · 14 Dias</div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/desafio/logo-hero.png"
              alt="Pare de Lutar Contra o Porno"
              className="sa from-b"
              style={{ transitionDelay: '.15s', maxWidth: 520, width: '100%' }}
            />
            <p className="hero-sub sa from-b" style={{ transitionDelay: '.25s' }}>
              Você não é escravo. Você é um homem capaz de decidir.<br />
              14 dias para provar isso a si mesmo — com âncora bíblica e exercício prático todo dia.
            </p>
            <div className="hero-checks sa from-b" style={{ transitionDelay: '.33s' }}>
              <div className="hc">14 vídeos + exercícios práticos diários</div>
              <div className="hc">Método bíblico com base real — sem teoria vazia</div>
              <div className="hc">Acesso vitalício e imediato</div>
              <div className="hc">Funciona mesmo que você já tenha tentado antes</div>
            </div>
            <div className="hero-cta-block sa from-b" style={{ transitionDelay: '.42s' }}>
              <div className="price-block">
                <span className="price-from">R$ 197,00</span>
                <span className="price-now"><sup>R$&nbsp;</sup>49<sup>,90</sup></span>
              </div>
              <a href={CTA} target="_blank" rel="noopener" className="btn-gold">Quero começar agora →</a>
              <div className="safe-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                Compra segura · Acesso imediato
              </div>
            </div>
          </div>
          <div className="hero-right sa from-r" style={{ transitionDelay: '.3s' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="mockup-img" src="/desafio/mockup-desktop.png" alt="Mockup do Desafio — laptop" />
          </div>
        </div>
        <div className="hero-mobile-img" style={{ display: 'none' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/desafio/mockup-mobile.png" alt="Mockup do Desafio" style={{ maxWidth: 480, width: '100%', filter: 'drop-shadow(0 16px 48px rgba(0,0,0,.7))', animation: 'float 5s ease-in-out infinite' }} />
        </div>
      </section>

      <div className="proof-strip sa from-b">
        <div className="proof-item"><div className="proof-num">14</div><div className="proof-label">Dias de desafio</div></div>
        <div className="proof-sep" />
        <div className="proof-item"><div className="proof-num">14</div><div className="proof-label">Exercícios práticos</div></div>
        <div className="proof-sep" />
        <div className="proof-item"><div className="proof-num">∞</div><div className="proof-label">Acesso vitalício</div></div>
        <div className="proof-sep" />
        <div className="proof-item"><div className="proof-num">100%</div><div className="proof-label">Base bíblica</div></div>
      </div>

      <section className="what">
        <div className="what-inner">
          <div className="sec-label sa from-b">O que está incluso</div>
          <h2 className="sec-title sa from-b">Tudo que você recebe<br /><em>por R$49,90</em></h2>
          <div className="what-grid" data-stagger="">
            {[
              { n: '01', t: 'Vídeo de introdução', d: 'Antes de começar, você entende a raiz do problema — e por que força de vontade sozinha nunca vai resolver.' },
              { n: '02', t: '14 aulas em vídeo', d: 'Uma por dia. Cada aula tem âncora bíblica, reflexão direta e um exercício prático — o Do the Work.' },
              { n: '03', t: 'Exercícios práticos diários', d: 'Não é conteúdo para consumir. É ação para executar. Cada dia tem uma tarefa concreta e incômoda.' },
              { n: '04', t: 'Vídeo de encerramento', d: 'Ao final dos 14 dias, você escreve suas regras inegociáveis e define seus próximos passos com clareza.' },
              { n: '05', t: 'Acesso vitalício', d: 'O desafio é seu para sempre. Volte quantas vezes precisar, no ritmo que funcionar para você.' },
              { n: '06', t: 'Metodologia bíblica', d: 'Cada dia ancorado em um versículo real — não como decoração, mas como fundamento do exercício.' },
            ].map(c => (
              <div key={c.n} className="what-card sa sc">
                <div className="wc-num">{c.n}</div>
                <div className="wc-title">{c.t}</div>
                <div className="wc-desc">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="d-divider" />

      <section className="pain">
        <div className="pain-inner">
          <div>
            <div className="sec-label sa from-b">O problema</div>
            <h2 className="pain-title sa from-b">Você já tentou<br />parar antes.<b>E caiu de novo.</b></h2>
            <p className="pain-body sa from-b">
              Prometeu para si mesmo. Para Deus. Para ela.<br /><br />
              O maior estrago da pornografia não é moral — é a imagem que você cria de si mesmo.
              Enquanto você se enxerga como escravo, qualquer método falha.
            </p>
          </div>
          <ul className="pain-list" data-stagger="">
            {[
              'Você sente que não tem força de vontade suficiente',
              'Cada recaída apaga um pouco mais da sua imagem',
              'Você negocia consigo mesmo — e perde sempre',
              'O vício está te custando foco, energia, espiritualidade e relacionamentos',
              'Você se vê como escravo dos próprios impulsos',
            ].map((t, i) => (
              <li key={i} className="pain-item sa from-r">
                <span className="pain-n">{String(i + 1).padStart(2, '0')}</span>
                <span className="pain-t">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="days-sec">
        <div className="days-inner">
          <div className="days-header">
            <div>
              <div className="sec-label sa from-b">O programa</div>
              <h2 className="sec-title sa from-b" style={{ marginBottom: 0 }}><em>14 Dias.</em> 14 Batalhas.</h2>
            </div>
            <p className="days-desc sa from-r">
              Cada dia tem um tema central, uma âncora bíblica e um exercício prático.
              Não é conteúdo para consumir — é estrutura para agir.
            </p>
          </div>
          <div className="days-wrap" data-stagger="">
            {[
              'Onde você está?', 'Não negocie consigo mesmo', 'Você não é seus impulsos',
              'Governe o desconforto', 'Queime as pontes', 'Do the Work', 'Silêncio e Abstinência',
              'O que você está calando?', 'Seu corpo precisa de ordem', 'Resgatando a virilidade',
              'Restaurando o olhar', 'Não lute sozinho', 'Permaneça', 'O Pacto do Homem Original',
            ].map((name, i) => (
              <div key={i} className="d-card sa from-b">
                <p className="d-n">{String(i + 1).padStart(2, '0')}</p>
                <p className="d-name">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="method">
        <div className="method-inner">
          <div className="method-top">
            <div>
              <div className="sec-label sa from-b">Como funciona</div>
              <h2 className="method-title sa from-b"><em>Não são truques.</em> É reconstrução.</h2>
            </div>
            <p className="method-body sa from-r">
              Cada dia tem três camadas que se reforçam. A progressão é intencional —
              vai de localização até identidade, passando por corpo, mente e espírito.
            </p>
          </div>
          <div className="method-cols" data-stagger="">
            <div className="m-col sa sc">
              <p className="m-num">01</p>
              <p className="m-name">Âncora Bíblica</p>
              <p className="m-desc">Um versículo não como decoração — como fundamento real do que será feito naquele dia. A Palavra precede a ação.</p>
            </div>
            <div className="m-col sa sc">
              <p className="m-num">02</p>
              <p className="m-name">Reflexão Direta</p>
              <p className="m-desc">Pontos concisos que desmontam as crenças que mantêm o vício vivo. Sem rodeios. Verdade crua.</p>
            </div>
            <div className="m-col sa sc">
              <p className="m-num">03</p>
              <p className="m-name">Do the Work</p>
              <p className="m-desc">Uma tarefa prática, concreta e incômoda. Não é conteúdo para consumir — é ação para executar.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="forwho">
        <div className="forwho-inner">
          <div>
            <div className="sec-label sa from-b">Para quem é</div>
            <h2 className="fw-title sa from-b">Para homens que<b>cansaram de cair.</b></h2>
          </div>
          <ul className="fw-list" data-stagger="">
            {[
              'Você quer parar mas não sabe como sustentar a decisão por mais de alguns dias',
              'Você já leu sobre o tema mas falta estrutura prática para avançar',
              'Você tem fé e quer um caminho que respeite essa base',
              'Você está cansado de se ver como vítima dos próprios impulsos',
              'Você quer recuperar autoridade sobre a própria vida',
            ].map((t, i) => (
              <li key={i} className="fw-item sa from-r">
                <span className="fw-arr">→</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="final" id="final">
        <div className="final-inner">
          <div className="sec-label sa from-b" style={{ justifyContent: 'center' }}>Sua decisão</div>
          <h2 className="final-title sa from-b">14 dias para provar<br /><em>que você pode decidir.</em></h2>
          <p className="final-body sa from-b">
            Esse desafio não te cura em 14 dias. Ele te prova que a mudança é possível.
            Que desejo não é ordem. O resto depende de você.
          </p>
          <div className="final-card sa sc">
            <div className="final-price-row">
              <span className="fc-from">R$ 197,00</span>
              <span className="fc-price"><sup>R$&nbsp;</sup>49<sup>,90</sup></span>
            </div>
            <p className="fc-tag">Acesso imediato e vitalício</p>
            <a href={CTA} target="_blank" rel="noopener" className="btn-gold-lg">Começar o desafio agora →</a>
            <p className="fc-safe">🔒 Compra 100% segura · Acesso imediato após o pagamento</p>
          </div>
          <p className="final-closing sa from-b">Homens fracos negociam. Homens livres cumprem.</p>
        </div>
      </section>

      <footer className="d-footer">
        <span>© 2025 Pare de Lutar Contra o Porno</span>
        <span><a href="#">Privacidade</a> &nbsp;·&nbsp; <a href="#">Termos</a></span>
      </footer>

      <div className="d-sticky" id="sticky" ref={stickyRef}>
        <div className="s-left">
          <span className="s-name">Desafio 14 Dias</span>
          <span className="s-price">R$ 49,90</span>
        </div>
        <a href={CTA} target="_blank" rel="noopener" className="s-btn">Garantir agora →</a>
      </div>
    </div>
  );
}
