'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SectionLabel } from '@/components/ui/section-label';
import { LiteYouTube } from '@/components/lite-youtube';

const VIDEO_IDS = [
  'bAiZ3Gi6_NU',
  'RJ5AU_2mtFA',
  'M1mv_XhZ4gs',
  'TE9U7NSiHNM',
  'zfsuZ0Rces4',
  'p8oFCFIGAdk',
  '0_KogS-dOTE',
  'SFLQ9CMO38I',
];
const INTERVAL = 3800;

function VideoCarousel() {
  const [current, setCurrent] = useState(0);
  const [progKey, setProgKey] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const playingRef = useRef(false);
  const pausedRef = useRef(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const mouseStartX = useRef(0);
  const isDraggingMouse = useRef(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const visible = isMobile ? 1 : 3;
  const totalPages = VIDEO_IDS.length - visible + 1;

  const pauseAll = useCallback(() => {
    pausedRef.current = true;
    setPaused(true);
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    if (resumeRef.current) { clearTimeout(resumeRef.current); resumeRef.current = null; }
  }, []);

  const resume = useCallback(() => {
    if (playingRef.current) return;
    pausedRef.current = false;
    setPaused(false);
    setProgKey(k => k + 1);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setCurrent(c => (c + 1) % totalPages);
        setProgKey(k => k + 1);
      }
    }, INTERVAL);
  }, [totalPages]);

  const navigateTo = useCallback((idx: number) => {
    const clamped = Math.max(0, Math.min(idx, totalPages - 1));
    setCurrent(clamped);
    pauseAll();
    if (resumeRef.current) clearTimeout(resumeRef.current);
    resumeRef.current = setTimeout(resume, 6000);
  }, [totalPages, pauseAll, resume]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setCurrent(c => (c + 1) % totalPages);
        setProgKey(k => k + 1);
      }
    }, INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (resumeRef.current) clearTimeout(resumeRef.current);
    };
  }, [totalPages]);

  useEffect(() => {
    const onBlur = () => {
      if (document.activeElement?.tagName === 'IFRAME') pauseAll();
    };
    window.addEventListener('blur', onBlur);
    return () => window.removeEventListener('blur', onBlur);
  }, [pauseAll]);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      try {
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
        if (data?.event === 'onStateChange') {
          const isPlaying = data.info === 1;
          playingRef.current = isPlaying;
          if (isPlaying) {
            pauseAll();
          } else {
            if (resumeRef.current) clearTimeout(resumeRef.current);
            resumeRef.current = setTimeout(resume, 2000);
          }
        }
      } catch {}
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, [pauseAll, resume]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      navigateTo(dx < 0 ? current + 1 : current - 1);
    }
  };

  const onMouseDown = (e: React.MouseEvent) => {
    mouseStartX.current = e.clientX;
    isDraggingMouse.current = true;
  };

  const onMouseUp = (e: React.MouseEvent) => {
    if (!isDraggingMouse.current) return;
    isDraggingMouse.current = false;
    const dx = e.clientX - mouseStartX.current;
    if (Math.abs(dx) > 40) navigateTo(dx < 0 ? current + 1 : current - 1);
  };

  const slotW = isMobile ? 100 : 36.666;
  const gap = isMobile ? 0 : 5.33;

  return (
    <section className="py-20 md:py-24 bg-[#f6f2ea] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="max-w-[720px] mb-10">
          <SectionLabel>Leandro Carone por aí</SectionLabel>
          <h2 className="text-cedro-navy mb-4">Conversas, aulas e reflexões para pensar a vida com mais profundidade.</h2>
          <p className="text-cedro-ink/75">Uma seleção de conteúdos para conhecer melhor a voz, a abordagem e a visão clínica do Leandro.</p>
        </div>

        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={() => { isDraggingMouse.current = false; }}
        >
          <div
            className="flex gap-4 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ transform: `translateX(calc(-${current} * (${slotW}% + ${gap}px)))` }}
          >
            {VIDEO_IDS.map((id) => (
              <div key={id} className="flex-none w-full md:w-[calc(36.666%-11px)] aspect-video overflow-hidden rounded-lg border border-cedro-clay/15 bg-cedro-white shadow-sm">
                <LiteYouTube videoId={id} title="Leandro Carone" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 h-[2px] bg-cedro-clay/15 rounded overflow-hidden">
          {!paused ? (
            <div key={progKey} className="h-full bg-cedro-red rounded" style={{ animation: `progress ${INTERVAL}ms linear forwards` }} />
          ) : (
            <div className="h-full bg-cedro-red/30 rounded w-full" />
          )}
        </div>

        <div className="flex items-center justify-center gap-4 mt-6">
          <button onClick={() => navigateTo(current - 1)} disabled={current === 0}
            className="w-9 h-9 rounded-full border border-cedro-clay/25 flex items-center justify-center text-cedro-navy hover:border-cedro-red hover:text-cedro-red transition-colors disabled:opacity-25"
            aria-label="Anterior">‹</button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} onClick={() => navigateTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'w-5 h-2 bg-cedro-red' : 'w-2 h-2 bg-cedro-clay/25 hover:bg-cedro-clay/50'
                }`} aria-label={`Vídeo ${i + 1}`} />
            ))}
          </div>
          <button onClick={() => navigateTo(current + 1)} disabled={current === totalPages - 1}
            className="w-9 h-9 rounded-full border border-cedro-clay/25 flex items-center justify-center text-cedro-navy hover:border-cedro-red hover:text-cedro-red transition-colors disabled:opacity-25"
            aria-label="Próximo">›</button>
        </div>
      </div>

      <style>{`
        @keyframes progress { from { width: 0% } to { width: 100% } }
      `}</style>
    </section>
  );
}

export default function Home() {
  const rightFit = [
    'Está cansado de recaídas, culpa e instabilidade emocional e quer mais do que força de vontade.',
    'Sente que precisa de direção, maturidade e clareza para reconstruir a vida por dentro.',
    'Já tentou terapia e percebeu que faltava alguém que respeitasse sua fé sem perder rigor clínico.',
    'Acredita que fé e psicologia não precisam ser inimigas.',
  ];

  const wrongFit = [
    'Quer alívio rápido sem compromisso com mudança real.',
    'Busca alguém que apenas confirme tudo que você já pensa.',
    'Não está disposto a ser confrontado com cuidado e responsabilidade.',
  ];

  return (
    <div className="flex flex-col bg-cedro-white text-cedro-ink">
      <section className="min-h-svh flex items-end md:items-center pt-24 pb-12 md:pb-0 relative overflow-hidden bg-[#f8f4ec]">
        <div
          className="hidden md:block absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'url(/hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center right' }}
        />
        <div
          className="block md:hidden absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'url(/home-bg-mobile.png)', backgroundSize: 'cover', backgroundPosition: 'center top' }}
        />
        <div className="hidden md:block absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(248,244,236,0.96)_0%,rgba(248,244,236,0.9)_30%,rgba(248,244,236,0.58)_52%,rgba(248,244,236,0.12)_76%,rgba(248,244,236,0)_100%)]" />
        <div className="md:hidden absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(248,244,236,0.92)_0%,rgba(248,244,236,0.88)_46%,rgba(248,244,236,0.98)_100%)]" />

        <div className="max-w-[1200px] mx-auto px-5 md:px-8 w-full relative z-10">
          <motion.div
            className="max-w-[560px]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <SectionLabel>Clínica Cedro</SectionLabel>
            <h1 className="mb-6 text-cedro-navy">
              Psicologia de qualidade para quem leva <em className="font-serif italic text-cedro-red">fé</em> e saúde mental a sério.
            </h1>
            <p className="text-lg text-cedro-ink/75 mb-10 max-w-[480px]">
              Psicologia com rigor técnico, profundidade filosófica e respeito aos seus valores.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild withArrow>
                <a href="https://form.respondi.app/tiN0kxRc" target="_blank" rel="noopener noreferrer">Agendar sessão</a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/leandro">Conheça a história</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-18 md:py-24 bg-cedro-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[0.92fr_1fr] gap-10 md:gap-16 items-start">
          <div>
            <SectionLabel>O problema que nos originou</SectionLabel>
            <h2 className="text-cedro-navy">Você sabe que precisa de ajuda, mas não sabe em quem confiar sem colocar seus valores em risco.</h2>
          </div>
          <div className="space-y-5 text-cedro-ink/78">
            <p>Tem cristão que foi ao psicólogo e ouviu que a fé era o problema. Tem cristão que foi ao pastor e ouviu que bastava orar mais.</p>
            <p>O problema é que os dois estavam com uma verdade pela metade.</p>
            <p>Fomos criados de forma complexa, e precisamos de especialistas que entendam isso. E que tratam cada pessoa de forma integral.</p>
            <p className="font-bold text-cedro-navy">A Cedro nasceu disso.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#efe7dc] py-8 border-y border-cedro-clay/15">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="flex items-center gap-5">
            <Image src="/ebook-cover.png" alt="" width={120} height={90} className="hidden md:block w-[72px] h-auto rounded-md shadow-md" />
            <div>
              <p className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-cedro-red mb-1">E-book gratuito</p>
              <p className="font-bold text-[1.05rem] md:text-[1.15rem] text-cedro-navy leading-tight">Não faça terapia antes de ler isso.</p>
              <p className="text-[0.9rem] text-cedro-ink/70 hidden md:block mt-1">Um guia honesto para quem está procurando psicólogo.</p>
            </div>
          </div>
          <a
            href="https://form.respondi.app/VKSO6qpV"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-cedro-red text-white font-bold tracking-wider uppercase text-[0.85rem] transition-all hover:bg-cedro-red-hover hover:-translate-y-0.5 w-full md:w-auto rounded-md"
          >
            Receber grátis
          </a>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-[#fbfaf7]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="max-w-[760px] mb-12">
            <SectionLabel>Nossa abordagem</SectionLabel>
            <h2 className="text-cedro-navy">Nem o “psicólogue”. Nem o psicrentão.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-lg bg-white p-7 border border-cedro-clay/12 shadow-sm">
              <h3 className="text-cedro-navy mb-4">Técnica sem hostilidade à fé.</h3>
              <p className="text-[0.98rem] text-cedro-ink/72">Existe um psicólogo que trata sua fé como obstáculo, ilusão ou repressão. A Cedro não parte desse lugar.</p>
            </div>
            <div className="rounded-lg bg-white p-7 border border-cedro-clay/12 shadow-sm">
              <h3 className="text-cedro-navy mb-4">Fé sem improviso clínico.</h3>
              <p className="text-[0.98rem] text-cedro-ink/72">Também não vendemos conselhos espirituais como se fossem terapia. Dor real exige preparo real.</p>
            </div>
            <div className="rounded-lg bg-white p-7 border border-cedro-clay/12 shadow-sm">
              <h3 className="text-cedro-navy mb-4">Cuidado integral.</h3>
              <p className="text-[0.98rem] text-cedro-ink/72">Tratamos você como ser humano biológico, social, emocional e espiritual, com responsabilidade e sentido.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-cedro-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] gap-12 items-center">
          <div>
            <SectionLabel>Por que Cedro</SectionLabel>
            <h2 className="text-cedro-navy"><span className="font-serif italic">“O justo crescerá como o cedro no Líbano.”</span></h2>
            <p className="text-cedro-ink/60 mt-3">Salmo 92</p>
            <p className="mt-8 text-cedro-ink/75">O cedro foca em estrutura antes da estética. Cresce para baixo antes de aparecer para fora. Essa imagem organiza a forma como pensamos cuidado, maturidade e reconstrução.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4">
            {[
              ['Raízes antes de aparência', 'Trabalhamos a raiz dos problemas, não apenas os sintomas mais visíveis.'],
              ['Conectado à fonte', 'A clínica reconhece a importância de valores, fé e sentido na vida psíquica.'],
              ['Força com flexibilidade', 'Dores, limites e crises são tratados como parte de um caminho real de amadurecimento.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-lg border border-cedro-clay/15 bg-[#f8f4ec] p-6">
                <h3 className="text-cedro-navy text-[1.35rem] mb-2">{title}</h3>
                <p className="text-[0.95rem] text-cedro-ink/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoCarousel />

      <section className="py-18 md:py-22 bg-cedro-red text-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[0.72fr_1fr] gap-8 md:gap-14 items-center">
          <Image
            src="/ebook-cover.png"
            alt="E-book: Não faça terapia antes de ler isso"
            width={600}
            height={450}
            className="hidden md:block w-full max-w-[360px] h-auto rounded-lg shadow-2xl justify-self-center"
          />
          <div>
            <p className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-white/70 mb-4">E-book gratuito</p>
            <h2 className="text-white mb-4">Não faça terapia antes de ler isso.</h2>
            <p className="text-white/82 mb-8 max-w-[560px]">Um guia honesto para quem está procurando psicólogo. Preencha o formulário e receba gratuitamente.</p>
            <a
              href="https://form.respondi.app/VKSO6qpV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-cedro-red font-bold tracking-wider uppercase text-[0.95rem] transition-all hover:-translate-y-0.5 w-full md:w-auto rounded-md"
            >
              Quero o e-book
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-[#fbfaf7]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="max-w-[850px] mb-12">
            <SectionLabel>Para quem é a Cedro</SectionLabel>
            <h2 className="text-cedro-navy">Não somos para todo mundo. Somos para quem realmente quer trabalhar e mudar.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg bg-white border border-cedro-clay/12 p-7 shadow-sm">
              <h3 className="text-cedro-red mb-5">Você está no lugar certo se:</h3>
              <ul className="space-y-4">
                {rightFit.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.98rem] text-cedro-ink/75">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cedro-red shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-[#f3eee5] border border-cedro-clay/12 p-7">
              <h3 className="text-cedro-navy mb-5">Talvez não seja para você se:</h3>
              <ul className="space-y-4">
                {wrongFit.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.98rem] text-cedro-ink/70">
                    <span className="mt-[0.65rem] h-[2px] w-3 rounded-full bg-cedro-clay shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-cedro-navy text-center text-white">
        <div className="max-w-[760px] mx-auto px-5 md:px-8">
          <SectionLabel className="text-white/60">Próximo passo</SectionLabel>
          <h2 className="text-white">Você não precisa de um psicólogo qualquer.</h2>
          <p className="text-white/75 my-6 text-lg">Você precisa de alguém que entenda de onde você veio, no que você crê, e aonde você quer chegar.</p>
          <Button asChild withArrow>
            <a href="https://form.respondi.app/tiN0kxRc" target="_blank" rel="noopener noreferrer">Agendar sessão avulsa</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
