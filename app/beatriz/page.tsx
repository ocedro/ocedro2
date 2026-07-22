'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SectionLabel } from '@/components/ui/section-label';

const bookingUrl = 'https://form.respondi.app/tiN0kxRc';

const team = [
  { img: '/team/beatriz-carone.jpg', name: 'Beatriz Carone', role: 'Psicóloga' },
  { img: '/team/leandro-carone-team.jpg', name: 'Leandro Carone', role: 'Fundador e Responsável Técnico' },
  { img: '/team/nattanael-vieira.jpg', name: 'Nattanael Vieira', role: 'Psicólogo' },
  { img: '/team/alvaro-martins.jpg', name: 'Álvaro Martins', role: 'Psicólogo' },
  { img: '/team/joyce-jeremias.jpg', name: 'Joyce Jeremias', role: 'Psicóloga' },
  { img: '/team/valeria-alves.jpg', name: 'Valéria Alves', role: 'Psicóloga' },
  { img: '/team/karla-franco.jpg', name: 'Karla Franco', role: 'Psicóloga' },
  { img: '/team/dhimmy-fraga.jpg', name: 'Dhimmy Fraga', role: 'Psicólogo' },
];

const rightFit = [
  'Está cansada de recaídas, culpa e instabilidade emocional e quer mais do que força de vontade.',
  'Sente que precisa de direção, maturidade e clareza para reconstruir a vida por dentro.',
  'Já tentou terapia e percebeu que faltava alguém que respeitasse sua fé sem perder rigor clínico.',
  'Acredita que fé e psicologia não precisam ser inimigas.',
];

const wrongFit = [
  'Quer alívio rápido sem compromisso com mudança real.',
  'Busca alguém que apenas confirme tudo que você já pensa.',
  'Não está disposta a ser confrontada com cuidado e responsabilidade.',
];

export default function BeatrizHome() {
  return (
    <div className="flex flex-col bg-cedro-white text-cedro-ink">
      <section className="relative min-h-svh overflow-hidden bg-[#f8f4ec] pt-24">
        <div className="absolute inset-0 md:left-[48%]">
          <Image
            src="/beatriz-hero.jpeg"
            alt="Beatriz Carone sorrindo"
            fill
            priority
            className="object-cover object-[50%_28%] md:object-[50%_36%]"
            sizes="(max-width: 768px) 100vw, 52vw"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,244,236,0.04)_15%,rgba(248,244,236,0.97)_67%,#f8f4ec_100%)] md:bg-[linear-gradient(90deg,#f8f4ec_0%,rgba(248,244,236,0.98)_39%,rgba(248,244,236,0.42)_62%,rgba(248,244,236,0)_82%)]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] w-full max-w-[1200px] items-end px-5 pb-12 md:items-center md:px-8 md:pb-0">
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
            <p className="mb-10 max-w-[480px] text-lg text-cedro-ink/75">
              Psicologia com rigor técnico, profundidade filosófica e respeito aos seus valores.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild withArrow>
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer">Agendar sessão</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#equipe">Conheça a equipe</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-cedro-clay/10 bg-[#eee7dc] py-18 md:py-24">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-10 px-5 md:grid-cols-[0.92fr_1fr] md:gap-16 md:px-8">
          <div>
            <SectionLabel>O problema que nos originou</SectionLabel>
            <h2 className="text-cedro-navy">Você sabe que precisa de ajuda, mas não sabe em quem confiar sem colocar seus valores em risco.</h2>
          </div>
          <div className="space-y-5 text-cedro-ink/78">
            <p>Tem cristã que foi ao psicólogo e ouviu que a fé era o problema. Tem cristã que foi ao pastor e ouviu que bastava orar mais.</p>
            <p>O problema é que os dois estavam com uma verdade pela metade.</p>
            <p>Fomos criados de forma complexa, e precisamos de especialistas que entendam isso. E que tratam cada pessoa de forma integral.</p>
            <p className="font-bold text-cedro-navy">A Cedro nasceu disso.</p>
          </div>
        </div>
      </section>

      <section id="equipe" className="scroll-mt-24 bg-[#f8f4ec] py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <SectionLabel>Conheça nossa equipe</SectionLabel>
          <h2 className="mb-4 text-cedro-navy">Psicólogos preparados para cuidar da sua história.</h2>
          <p className="mb-12 max-w-[800px] text-cedro-ink/70">Cada profissional foi escolhido por critérios simples: ama os pacientes, respeita a profissão, é cristão sólido e não para de estudar. Equipe supervisionada semanalmente por Leandro Carone.</p>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="mb-4 aspect-[4/5] w-full overflow-hidden rounded-lg bg-cedro-cream shadow-sm">
                  <Image src={member.img} alt={member.name} width={600} height={750} className="h-full w-full object-cover object-top" />
                </div>
                <h3 className="mb-1 font-sans text-base font-bold text-cedro-navy">{member.name}</h3>
                <p className="text-sm text-cedro-ink/60">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-cedro-sage/25 bg-[#e9efee] py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <div className="mb-12 max-w-[760px]">
            <SectionLabel>Nossa abordagem</SectionLabel>
            <h2 className="text-cedro-navy">Nem o “psicólogue”. Nem o psicrentão.</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="rounded-lg border border-cedro-clay/12 bg-white p-7 shadow-sm">
              <h3 className="mb-4 text-cedro-navy">Técnica sem hostilidade à fé.</h3>
              <p className="text-[0.98rem] text-cedro-ink/72">Existe um psicólogo que trata sua fé como obstáculo, ilusão ou repressão. A Cedro não parte desse lugar.</p>
            </div>
            <div className="rounded-lg border border-cedro-clay/12 bg-white p-7 shadow-sm">
              <h3 className="mb-4 text-cedro-navy">Fé sem improviso clínico.</h3>
              <p className="text-[0.98rem] text-cedro-ink/72">Também não vendemos conselhos espirituais como se fossem terapia. Dor real exige preparo real.</p>
            </div>
            <div className="rounded-lg border border-cedro-clay/12 bg-white p-7 shadow-sm">
              <h3 className="mb-4 text-cedro-navy">Cuidado integral.</h3>
              <p className="text-[0.98rem] text-cedro-ink/72">Tratamos você como ser humano biológico, social, emocional e espiritual, com responsabilidade e sentido.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f0e7] py-20 md:py-24">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-5 md:px-8 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <SectionLabel>Por que Cedro</SectionLabel>
            <h2 className="text-cedro-navy"><span className="font-serif italic">“O justo crescerá como o cedro no Líbano.”</span></h2>
            <p className="mt-3 text-cedro-ink/60">Salmo 92</p>
            <p className="mt-8 text-cedro-ink/75">O cedro foca em estrutura antes da estética. Cresce para baixo antes de aparecer para fora. Essa imagem organiza a forma como pensamos cuidado, maturidade e reconstrução.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-1">
            {[
              ['Raízes antes de aparência', 'Trabalhamos a raiz dos problemas, não apenas os sintomas mais visíveis.'],
              ['Conectado à fonte', 'A clínica reconhece a importância de valores, fé e sentido na vida psíquica.'],
              ['Força com flexibilidade', 'Dores, limites e crises são tratados como parte de um caminho real de amadurecimento.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-lg border border-cedro-clay/15 bg-[#f8f4ec] p-6">
                <h3 className="mb-2 text-[1.35rem] text-cedro-navy">{title}</h3>
                <p className="text-[0.95rem] text-cedro-ink/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-cedro-clay/12 bg-[#eae2d7] py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <div className="mb-12 max-w-[850px]">
            <SectionLabel>Para quem é a Cedro</SectionLabel>
            <h2 className="text-cedro-navy">Não somos para todo mundo. Somos para quem realmente quer trabalhar e mudar.</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-cedro-clay/12 bg-white p-7 shadow-sm">
              <h3 className="mb-5 text-cedro-red">Você está no lugar certo se:</h3>
              <ul className="space-y-4">
                {rightFit.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.98rem] text-cedro-ink/75">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cedro-red" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-cedro-clay/12 bg-[#f3eee5] p-7">
              <h3 className="mb-5 text-cedro-navy">Talvez não seja para você se:</h3>
              <ul className="space-y-4">
                {wrongFit.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.98rem] text-cedro-ink/70">
                    <span className="mt-[0.65rem] h-[2px] w-3 shrink-0 rounded-full bg-cedro-clay" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cedro-navy py-20 text-center text-white md:py-24">
        <div className="mx-auto max-w-[760px] px-5 md:px-8">
          <SectionLabel className="text-white/60">Próximo passo</SectionLabel>
          <h2 className="text-white">Você não precisa de um psicólogo qualquer.</h2>
          <p className="my-6 text-lg text-white/75">Você precisa de alguém que entenda de onde você veio, no que você crê, e aonde você quer chegar.</p>
          <Button asChild withArrow>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer">Agendar sessão avulsa</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
