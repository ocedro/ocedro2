'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SectionLabel } from '@/components/ui/section-label';
import { Divider } from '@/components/ui/divider';

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
const VISIBLE = 3;
const TOTAL_PAGES = VIDEO_IDS.length - VISIBLE + 1;
const INTERVAL = 2800;

function VideoCarousel() {
  const [current, setCurrent] = useState(0);
  const [progKey, setProgKey] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pausedRef = useRef(false);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    setProgKey(k => k + 1);
  }, []);

  const next = useCallback(() => {
    if (pausedRef.current) return;
    setCurrent(c => (c + 1) % TOTAL_PAGES);
    setProgKey(k => k + 1);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(next, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [next]);

  // Listen for YouTube postMessage events to detect play/pause
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      try {
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
        if (data?.event === 'onStateChange') {
          const isPlaying = data.info === 1; // 1 = playing, 2 = paused, 0 = ended
          pausedRef.current = isPlaying;
          setPaused(isPlaying);
          if (!isPlaying) setProgKey(k => k + 1); // restart progress bar when paused/ended
        }
      } catch {}
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  const resetTimer = (idx: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    goTo(idx);
    timerRef.current = setInterval(next, INTERVAL);
  };

  return (
    <section className="py-24 bg-cedro-black text-cedro-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-8">
        <SectionLabel>Leandro Carone por aí</SectionLabel>
        <p className="text-cedro-sage mb-10">Podcasts, pregações, lives e conteúdos</p>

        {/* Track */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ transform: `translateX(calc(-${current} * (36.666% + 5.33px)))` }}
          >
            {VIDEO_IDS.map((id) => (
              <div key={id} className="flex-none w-[calc(36.666%-11px)] aspect-video border border-cedro-sage/10">
                <iframe
                  src={`https://www.youtube.com/embed/${id}?rel=0&enablejsapi=1`}
                  title="Leandro Carone"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-[2px] bg-cedro-sage/10 rounded overflow-hidden">
          {!paused && (
            <div
              key={progKey}
              className="h-full bg-cedro-red rounded"
              style={{ animation: `progress ${INTERVAL}ms linear forwards` }}
            />
          )}
          {paused && <div className="h-full bg-cedro-red/30 rounded w-full" />}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
            <button
              key={i}
              onClick={() => resetTimer(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-cedro-red scale-125' : 'bg-cedro-sage/20 hover:bg-cedro-sage/40'
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="min-h-screen flex items-center pt-20 relative overflow-hidden"
        style={{ backgroundImage: 'url(/hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-cedro-black/60 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-cedro-red/5 to-transparent pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-8 w-full relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-16 items-center">
            <motion.div 
              className="order-2 md:order-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <SectionLabel>Clínica Cedro</SectionLabel>
              <h1 className="mb-6 text-cedro-white">
                Psicologia de qualidade para quem leva <em className="font-serif italic text-cedro-red">fé</em> e saúde mental a sério.
              </h1>
              <p className="text-lg text-cedro-sage mb-10 max-w-[520px]">
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
            <motion.div 
              className="order-1 md:order-2 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <div className="relative z-10">
                <Image 
                  src="/hero-image.png" 
                  alt="Leandro Carone — Psicólogo Clínico" 
                  width={480} 
                  height={600} 
                  className="w-full h-auto max-w-[300px] md:max-w-[480px] mx-auto md:ml-auto object-cover"
                  priority
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-[60%] h-[60%] border-2 border-cedro-red opacity-30 z-0 hidden md:block" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="py-24 bg-cedro-navy">
        <div className="max-w-[1200px] mx-auto px-8">
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

      {/* ABORDAGEM */}
      <section className="py-24 bg-cedro-black text-cedro-white">
        <div className="max-w-[1200px] mx-auto px-8">
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
        <div className="max-w-[1200px] mx-auto px-8">
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
      <section className="py-20 bg-[#e8450a] text-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
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
              <h3 className="text-[2rem] text-white mb-3 leading-tight">Não faça terapia antes de ler isso.</h3>
              <p className="text-white/80 mb-8">Um guia honesto para quem está procurando psicólogo. Preencha o forms e receba gratuitamente.</p>
              <a
                href="https://form.respondi.app/VKSO6qpV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#e8450a] font-bold tracking-wider uppercase text-[0.95rem] transition-all hover:-translate-y-0.5"
              >
                Quero o e-book →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM */}
      <section className="py-24 bg-cedro-navy">
        <div className="max-w-[1200px] mx-auto px-8">
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
        <div className="max-w-[700px] mx-auto px-8">
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
