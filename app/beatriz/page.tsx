'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SectionLabel } from '@/components/ui/section-label';

const bookingUrl = 'https://form.respondi.app/tiN0kxRc';

const rightFit = [
  'Você se cobra o tempo todo e sente que nunca consegue fazer o suficiente.',
  'Tem cuidado de todo mundo, mas percebeu que também precisa ser cuidada.',
  'Deseja compreender melhor suas emoções, seus limites e seus relacionamentos.',
  'Busca uma terapia que respeite sua fé sem abrir mão do rigor clínico.',
];

const pillars = [
  ['Um lugar para baixar a guarda', 'Você não precisa chegar com tudo organizado. Aqui, sua história pode ser contada no seu tempo, sem julgamentos.'],
  ['Clareza para fazer escolhas', 'A terapia ajuda a reconhecer padrões, nomear necessidades e construir limites mais saudáveis.'],
  ['Fé tratada com respeito', 'Sua espiritualidade faz parte da sua história e pode ser acolhida com maturidade, nunca usada para silenciar sua dor.'],
];

export default function BeatrizHome() {
  return (
    <div className="flex flex-col bg-cedro-white text-cedro-ink">
      <section className="relative min-h-svh overflow-hidden bg-[#f8f4ec] pt-24">
        <div className="absolute inset-0 md:left-[48%]">
          <Image src="/beatriz-hero.jpeg" alt="Beatriz Carone sorrindo" fill priority className="object-cover object-[50%_28%] md:object-[50%_36%]" sizes="(max-width: 768px) 100vw, 52vw" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,244,236,0.04)_15%,rgba(248,244,236,0.97)_67%,#f8f4ec_100%)] md:bg-[linear-gradient(90deg,#f8f4ec_0%,rgba(248,244,236,0.98)_39%,rgba(248,244,236,0.42)_62%,rgba(248,244,236,0)_82%)]" />
        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] w-full max-w-[1200px] items-end px-5 pb-12 md:items-center md:px-8 md:pb-0">
          <motion.div className="max-w-[590px]" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <SectionLabel>Psicologia para mulheres</SectionLabel>
            <h1 className="mb-6 text-cedro-navy">Você não precisa dar conta de <em className="font-serif italic text-cedro-red">tudo</em> sozinha.</h1>
            <p className="mb-9 max-w-[520px] text-lg text-cedro-ink/75">Um espaço seguro para cuidar de quem você é — para além das expectativas, dos papéis e da rotina.</p>
            <Button asChild withArrow><a href={bookingUrl} target="_blank" rel="noopener noreferrer">Quero começar</a></Button>
          </motion.div>
        </div>
      </section>

      <section className="bg-cedro-white py-20 md:py-24">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-10 px-5 md:grid-cols-[0.92fr_1fr] md:gap-16 md:px-8">
          <div><SectionLabel>Talvez você se reconheça</SectionLabel><h2 className="text-cedro-navy">Por fora, você segue fazendo o que precisa. Por dentro, alguma coisa pede cuidado.</h2></div>
          <div className="space-y-5 text-cedro-ink/75">
            <p>É possível ser forte e ainda estar cansada. Amar as pessoas à sua volta e, ao mesmo tempo, sentir que se perdeu de si.</p>
            <p>Ansiedade, culpa, sobrecarga, conflitos nos relacionamentos e dificuldade de colocar limites não são sinais de fracasso.</p>
            <p className="font-bold text-cedro-navy">São experiências que merecem ser compreendidas com seriedade e acolhimento.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-cedro-clay/15 bg-[#efe7dc] py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <div className="mb-12 max-w-[760px]"><SectionLabel>Um cuidado que integra</SectionLabel><h2 className="text-cedro-navy">Escuta sensível, direção clínica e respeito por tudo o que importa para você.</h2></div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {pillars.map(([title, text]) => <div key={title} className="rounded-lg border border-cedro-clay/12 bg-white p-7 shadow-sm"><h3 className="mb-4 text-cedro-navy">{title}</h3><p className="text-[0.98rem] text-cedro-ink/72">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-20 md:py-24">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1fr] lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-xl"><Image src="/beatriz-profile.jpeg" alt="Retrato de Beatriz Carone" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 44vw" /></div>
          <div><SectionLabel>Com você nesse caminho</SectionLabel><h2 className="mb-6 text-cedro-navy">Cuidar de si não é egoísmo. É voltar a habitar a própria vida.</h2><div className="space-y-5 text-cedro-ink/75"><p>Na terapia, você encontra espaço para falar com honestidade sobre o que pesa — sem precisar minimizar a dor nem sustentar uma imagem de força.</p><p>O processo é construído em conjunto, respeitando seu ritmo, sua história, seus valores e os recursos que você já carrega.</p><p className="font-serif text-2xl italic text-cedro-red">— Beatriz Carone</p></div></div>
        </div>
      </section>

      <section className="bg-cedro-white py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <div className="mb-12 max-w-[850px]"><SectionLabel>Este espaço é para você</SectionLabel><h2 className="text-cedro-navy">Você pode começar sem ter todas as respostas.</h2></div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-lg border border-cedro-clay/12 bg-[#f8f4ec] p-7 md:p-9"><h3 className="mb-6 text-cedro-red">A terapia pode ajudar se:</h3><ul className="space-y-4">{rightFit.map(item => <li key={item} className="flex gap-3 text-[0.98rem] text-cedro-ink/75"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cedro-red"/><span>{item}</span></li>)}</ul></div>
            <div className="flex flex-col justify-center rounded-lg bg-cedro-navy p-7 text-white md:p-9"><p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-white/55">Atendimento online</p><h3 className="mb-4 text-white">De onde você estiver, com privacidade e presença.</h3><p className="text-[0.98rem] text-white/72">Sessões individuais para mulheres adultas, realizadas por videochamada.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-cedro-red py-20 text-center text-white md:py-24">
        <div className="mx-auto max-w-[760px] px-5 md:px-8"><SectionLabel className="text-white/60">Seu próximo passo</SectionLabel><h2 className="text-white">Você também merece o cuidado que oferece a tanta gente.</h2><p className="my-6 text-lg text-white/78">Se algo em você reconheceu que é hora de começar, vamos conversar.</p><a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-cedro-red transition-transform hover:-translate-y-0.5">Agendar uma conversa →</a></div>
      </section>
    </div>
  );
}
