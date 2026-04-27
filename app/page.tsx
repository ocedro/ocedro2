'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SectionLabel } from '@/components/ui/section-label';
import { Divider } from '@/components/ui/divider';
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
  const playingRef = useRef(false);   // vídeo em play
  const pausedRef = useRef(false);    // qualquer pausa (play ou manual)
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

  // Pausar tudo
  const pauseAll = useCallback(() => {
    pausedRef.current = true;
    setPaused(true);
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    if (resumeRef.current) { clearTimeout(resumeRef.current); resumeRef.current = null; }
  }, []);

  // Retomar (só se vídeo não estiver em play)
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

  // Navegar manualmente — pausa e agenda retomada em 6s
  const navigateTo = useCallback((idx: number) => {
    const clamped = Math.max(0, Math.min(idx, totalPages - 1));
    setCurrent(clamped);
    pauseAll();
    if (resumeRef.current) clearTimeout(resumeRef.current);
    resumeRef.current = setTimeout(resume, 6000);
  }, [totalPages, pauseAll, resume]);

  // Inicia o timer automático
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

  // Pause when user clicks inside any iframe (window loses focus)
  useEffect(() => {
    const onBlur = () => {
      if (document.activeElement?.tagName === 'IFRAME') {
        pauseAll();
      }
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

  // Touch swipe
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

  // Mouse drag
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
  const onMouseLeave = () => { isDraggingMouse.current = false; };

  const slotW = isMobile ? 100 : 36.666;
  const gap = isMobile ? 0 : 5.33;

  return (
    <section className="py-24 bg-cedro-black text-cedro-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <SectionLabel>Leandro Carone por aí</SectionLabel>
        <p className="text-cedro-sage mb-10">Podcasts, pregações, lives e conteúdos</p>

        {/* Track */}
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
        >
          <div
            className="flex gap-4 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ transform: `translateX(calc(-${current} * (${slotW}% + ${gap}px)))` }}
          >
            {VIDEO_IDS.map((id) => (
              <div key={id} className="flex-none w-full md:w-[calc(36.666%-11px)] aspect-video border border-cedro-sage/10 bg-cedro-navy">
                <LiteYouTube videoId={id} title="Leandro Carone — vídeo" />
              </div>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-[2px] bg-cedro-sage/10 rounded overflow-hidden">
          {!paused ? (
            <div key={progKey} className="h-full bg-cedro-red rounded"
              style={{ animation: `progress ${INTERVAL}ms linear forwards` }} />
          ) : (
            <div className="h-full bg-cedro-red/30 rounded w-full" />
          )}
        </div>

        {/* Dots + Prev/Next */}
        <div className="flex items-center justify-center gap-4 mt-5">
          <button onClick={() => navigateTo(current - 1)} disabled={current === 0}
            className="w-8 h-8 rounded-full border border-cedro-sage/20 flex items-center justify-center text-cedro-sage hover:border-cedro-red hover:text-cedro-red transition-colors disabled:opacity-20"
            aria-label="Anterior">‹</button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} onClick={() => navigateTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'w-5 h-2 bg-cedro-red' : 'w-2 h-2 bg-cedro-sage/20 hover:bg-cedro-sage/40'
                }`} aria-label={`Vídeo ${i + 1}`} />
            ))}
          </div>
          <button onClick={() => navigateTo(current + 1)} disabled={current === totalPages - 1}
            className="w-8 h-8 rounded-full border border-cedro-sage/20 flex items-center justify-center text-cedro-sage hover:border-cedro-red hover:text-cedro-red transition-colors disabled:opacity-20"
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
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="min-h-svh flex items-center pt-20 relative overflow-hidden"
        style={{ backgroundImage: 'url(/hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center right' }}>
        <div className="absolute inset-0 bg-cedro-black/40 pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 w-full relative z-10">
          <motion.div
            className="max-w-[560px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SectionLabel>Clínica Cedro</SectionLabel>
            <h1 className="mb-6 text-cedro-white">
              Psicologia de qualidade para quem leva <em className="font-serif italic text-cedro-red">fé</em> e saúde mental a sério.
            </h1>
            <p className="text-lg text-cedro-sage mb-10 max-w-[480px]">
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

      {/* PROBLEMA */}
      <section className="py-24 bg-cedro-navy">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>O problema que nos originou</SectionLabel>
              <h2>Você sabe que precisa de ajuda, mas não sabe em quem confiar sem colocar seus valores em risco.</h2>
            </div>
            <div>
              <p className="mb-5">Tem cristão que foi ao psicólogo e ouviu que a fé era o problema. Tem cristão que foi ao pastor e ouviu que bastava orar mais.</p>
              <p className="mb-5">O problema é que os dois estavam com uma verdade pela metade.</p>
              <p className="mb-5">Fomos criados de forma complexa, e precisamos de especialistas que entendam isso. E tratam cada pessoa de forma integral.</p>
              <p><strong className="text-cedro-white font-bold">A Cedro nasceu disso.</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* E-BOOK SLIM (faixa discreta após o problema) */}
      <section className="py-8 bg-cedro-red text-white border-y border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex items-start md:items-center gap-4 flex-1">
              <div className="hidden md:block shrink-0">
                <Image
                  src="/ebook-cover.png"
                  alt=""
                  width={120}
                  height={90}
                  className="w-[72px] h-auto rounded shadow-lg"
                />
              </div>
              <div>
                <p className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-white/70 mb-1">E-book gratuito</p>
                <p className="font-bold text-[1rem] md:text-[1.1rem] text-white leading-tight">
                  Não faça terapia antes de ler isso.
                </p>
                <p className="text-[0.85rem] text-white/80 hidden md:block mt-1">Um guia honesto para quem está procurando psicólogo.</p>
              </div>
            </div>
            <a
              href="https://form.respondi.app/VKSO6qpV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-cedro-red font-bold tracking-wider uppercase text-[0.85rem] transition-all hover:-translate-y-0.5 shrink-0 w-full md:w-auto justify-center"
            >
              Receber grátis →
            </a>
          </div>
        </div>
      </section>

      {/* ABORDAGEM */}
      <section className="py-24 bg-cedro-black text-cedro-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <SectionLabel>Nossa abordagem</SectionLabel>
          <h2 className="mb-4 text-cedro-white">Nem o <span className="text-cedro-red">psicólogue</span>. Nem o psicrentão.</h2>
          <Divider />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            <div>
              <p className="mb-5 text-cedro-sage">Existe um psicólogo que trata sua fé como obstáculo, ilusão ou repressão. Cosmovisão hedonista e materialista, e, mesmo sem dizer, vai te guiando por um caminho contrário ao que você acredita.</p>
              <p className="text-cedro-sage">Existe um &quot;terapeuta&quot; que fez um curso de um ano, leu dois livros de autoajuda cristã e sai atendendo sem o embasamento técnico e teórico coerente. Profissional que usa a fé para vender &quot;conselhos&quot;.</p>
            </div>
            <div>
              <p className="mb-5"><strong className="text-cedro-white font-bold">Os dois causam dano enorme para o cristão verdadeiro, que tem dores reais.</strong></p>
              <p className="mb-5 text-cedro-sage">Na Cedro, usamos ciência psicológica com rigor técnico e operamos a partir de uma cosmovisão bíblica que reconhece verdade, o pecado, graça, responsabilidade e sentido.</p>
              <p className="text-cedro-sage">Não relativizamos sua moral. Não ignoramos sua dor emocional. Não chamamos sua fé de problema. Tratamos você como o ser humano que você é: Biológico, social, emocional e espiritual.</p>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUE CEDRO */}
      <section className="py-24 bg-cedro-navy">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>Por que Cedro</SectionLabel>
              <h2><span className="font-serif italic">&quot;O justo crescerá como o cedro no Líbano.&quot;</span></h2>
              <p className="text-cedro-sage mt-2">— Salmo 92</p>
              <Divider />
              <p>O cedro foca em estrutura, antes da estética.</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="p-8 border border-cedro-sage/10 transition-all hover:border-cedro-red hover:-translate-y-1 bg-cedro-black/20">
                <h4 className="mb-3 text-cedro-white">Raízes antes de aparência</h4>
                <p className="text-[0.95rem] text-cedro-sage">O cedro prioriza o crescimento das raízes. Nós queremos trabalhar a raiz dos problemas e crescer com estrutura.</p>
              </div>
              <div className="p-8 border border-cedro-sage/10 transition-all hover:border-cedro-red hover:-translate-y-1 bg-cedro-black/20">
                <h4 className="mb-3 text-cedro-white">Conectado à fonte</h4>
                <p className="text-[0.95rem] text-cedro-sage">Suas raízes buscam o lençol freático. Não depende dos fatores externos, pois está conectado à fonte.</p>
              </div>
              <div className="p-8 border border-cedro-sage/10 transition-all hover:border-cedro-red hover:-translate-y-1 bg-cedro-black/20">
                <h4 className="mb-3 text-cedro-white">Abraça ou quebra a rocha</h4>
                <p className="text-[0.95rem] text-cedro-sage">Ao se deparar com uma rocha, as raízes encontram o sentido no sofrimento e melhoram com ele.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEANDRO CARONE POR AÍ */}
      <VideoCarousel />

      {/* E-BOOK */}
      <section className="py-20 bg-[#d13d1d] text-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="hidden md:flex justify-center">
              <Image
                src="/ebook-cover.png"
                alt="E-book: Não faça terapia antes de ler isso"
                width={600}
                height={450}
                className="w-full max-w-[480px] h-auto rounded shadow-2xl"
              />
            </div>
            <div>
              <p className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-white/70 mb-4">E-book gratuito</p>
              <h3 className="text-[1.6rem] md:text-[2rem] text-white mb-3 leading-tight">Não faça terapia antes de ler isso.</h3>
              <p className="text-white/80 mb-8">Um guia honesto para quem está procurando psicólogo. Preencha o forms e receba gratuitamente.</p>
              <a
                href="https://form.respondi.app/VKSO6qpV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#d13d1d] font-bold tracking-wider uppercase text-[0.95rem] transition-all hover:-translate-y-0.5 w-full md:w-auto justify-center"
              >
                Quero o e-book →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM */}
      <section className="py-24 bg-cedro-navy">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <SectionLabel>Para quem é a Cedro</SectionLabel>
          <h2 className="mb-12 max-w-[800px]">Não somos para todo mundo. Somos para quem realmente quer trabalhar e mudar.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-cedro-red mb-4">Você está no lugar certo se:</h3>
              <ul className="flex flex-col">
                {[
                  'Está cansado de recaídas, culpa e instabilidade emocional e quer mais do que força de vontade',
                  'Sente um vazio no peito, uma sensação de estar no lugar errado, na hora errada, fazendo sempre a coisa errada.',
                  'Já tentou terapia e sentiu que faltou algo',
                  'Quer maturidade, direção e clareza, não dependência eterna',
                  'Acredita que fé e psicologia não precisam ser inimigas'
                ].map((item, i) => (
                  <li key={i} className="py-3 border-b border-cedro-sage/10 text-[0.95rem] flex items-start gap-3">
                    <span className="text-cedro-red font-bold shrink-0">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-cedro-sage mb-4">Não é para você se:</h3>
              <ul className="flex flex-col">
                {[
                  'Quer alívio rápido sem compromisso com mudança real',
                  'Está buscando alguém que confirme tudo que você já pensa',
                  'Não está disposto a ser confrontado'
                ].map((item, i) => (
                  <li key={i} className="py-3 border-b border-cedro-sage/10 text-[0.95rem] flex items-start gap-3">
                    <span className="text-cedro-sage/50 font-bold shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-cedro-black text-center text-cedro-white">
        <div className="max-w-[700px] mx-auto px-5 md:px-8">
          <h2 className="text-cedro-white">Você não precisa de um psicólogo qualquer.</h2>
          <p className="text-cedro-sage my-6 text-lg">Você precisa de alguém que entenda de onde você veio, no que você crê, e aonde você quer chegar.</p>
          <Button asChild withArrow>
            <a href="https://form.respondi.app/tiN0kxRc" target="_blank" rel="noopener noreferrer">Agendar sessão avulsa</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
