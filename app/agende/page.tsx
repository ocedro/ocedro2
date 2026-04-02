'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SectionLabel } from '@/components/ui/section-label';
import { Divider } from '@/components/ui/divider';

export default function AgendePage() {
  const team = [
    { initials: 'LC', name: 'Leandro Carone', role: 'Fundador e Responsável Técnico' },
    { initials: 'DF', name: 'Dhimmy Fraga', role: 'Psicólogo' },
    { initials: 'NV', name: 'Nattanael Vieira', role: 'Psicólogo' },
    { initials: 'AM', name: 'Álvaro Martins', role: 'Psicólogo' },
    { initials: 'JJ', name: 'Joyce Jeremias', role: 'Psicóloga' },
    { initials: 'BC', name: 'Beatriz Carone', role: 'Psicóloga' },
    { initials: 'VA', name: 'Valéria Alves', role: 'Psicóloga' },
    { initials: 'KF', name: 'Karla Franco', role: 'Psicóloga' },
  ];

  return (
    <div className="flex flex-col">

      {/* HERO */}
      <section className="pt-32 pb-20 bg-cedro-navy relative overflow-hidden">
        <div className="absolute top-[-80px] right-[-80px] w-[320px] h-[320px] rounded-full border border-cedro-red/10 pointer-events-none" />
        <div className="absolute top-[-20px] right-[-20px] w-[180px] h-[180px] rounded-full border border-cedro-red/15 pointer-events-none" />
        <motion.div
          className="max-w-[1200px] mx-auto px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionLabel>Clínica Cedro</SectionLabel>
          <h1 className="text-cedro-white mb-0 leading-tight">
            Agende sua consulta.<br />
            <em className="font-serif italic text-cedro-white/50">Sem complicação.</em>
          </h1>
          <Divider className="my-6" />
          <p className="text-lg text-cedro-sage max-w-[560px] mb-8">
            Atendimento por videochamada, com psicólogos sérios. Sessões de 50 minutos, semanais ou quinzenais.
          </p>
          <div className="flex flex-wrap gap-6 mb-10">
            {['Sessão avulsa', 'Avaliação', 'Ciclo Cedro'].map((s, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-cedro-sage/80">
                <span className="w-6 h-6 rounded-full border border-cedro-red text-cedro-red text-xs font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                {s}
              </div>
            ))}
          </div>
          <Button asChild withArrow>
            <a href="https://form.respondi.app/tiN0kxRc" target="_blank" rel="noopener noreferrer">Agendar sessão avulsa</a>
          </Button>
        </motion.div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-24 bg-cedro-black text-cedro-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="mb-4 text-cedro-white">Como funciona</h2>
          <p className="text-cedro-sage mb-12">Simples. Sem complicação.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border-t-4 border-cedro-red bg-cedro-navy">
              <div className="font-serif text-5xl text-cedro-red/40 mb-4">1</div>
              <h4 className="text-cedro-white mb-2">Sessão avulsa</h4>
              <p className="text-sm text-cedro-sage">Você começa com uma sessão avulsa. Conhece o profissional, entende a abordagem, sente se faz sentido.</p>
            </div>
            <div className="p-8 border-t-4 border-cedro-red bg-cedro-navy">
              <div className="font-serif text-5xl text-cedro-red/40 mb-4">2</div>
              <h4 className="text-cedro-white mb-2">Avaliação</h4>
              <p className="text-sm text-cedro-sage">Junto com o psicólogo, vocês definem o objetivo do tratamento e a frequência ideal — semanal ou quinzenal.</p>
            </div>
            <div className="p-8 border-t-4 border-cedro-red bg-cedro-navy">
              <div className="font-serif text-5xl text-cedro-red/40 mb-4">3</div>
              <h4 className="text-cedro-white mb-2">Ciclo Cedro</h4>
              <p className="text-sm text-cedro-sage">Você inicia um Ciclo Cedro — acompanhamento com objetivo claro, começo, meio e fim.</p>
            </div>
          </div>
          <p className="text-[0.95rem] text-cedro-sage mt-12">Aqui psicólogos homens para atender homens. Psicólogas mulheres para atender mulheres. Não é uma regra, mas é um direcionamento.</p>
        </div>
      </section>

      {/* CICLO CEDRO — metodologia */}
      <section className="py-24 bg-cedro-black">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-[700px] mb-14">
            <SectionLabel>O que você vai encontrar</SectionLabel>
            <h2>Terapia que te dá liberdade para pensar.</h2>
            <p className="text-cedro-sage mt-4">O Ciclo Cedro é nosso formato de acompanhamento terapêutico estruturado em ciclos trimestrais. Não acreditamos em terapia infinita. Algo com começo, meio e fim, o objetivo fica claro desde o primeiro dia.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Congruência', desc: 'Você para de viver dividido entre o que crê e como age.' },
              { num: '02', title: 'Entrega responsável', desc: 'Reconhecer limites, assumir responsabilidade e viver liberdade sem auto engano.' },
              { num: '03', title: 'Disciplina estruturante', desc: 'Sua rotina vira estrutura, que coloca ordem na sua vida.' },
              { num: '04', title: 'Responsabilidade vocacional', desc: 'Descobrir quem você é, o que você tem em mãos e qual seu propósito.' },
              { num: '05', title: 'Ordem interior e exterior', desc: 'Estabilidade, clareza e paz.' },
              { num: '06', title: 'O caminho é real', desc: 'Não prometemos cura instantânea. Prometemos um processo comprometido com a Verdade e com o seu crescimento.' },
            ].map((item) => (
              <div key={item.num} className="p-8 border border-cedro-sage/10 transition-all hover:border-cedro-red hover:-translate-y-1">
                <div className="font-serif text-4xl text-cedro-red/50 mb-2">{item.num}</div>
                <h4 className="mb-3 text-cedro-white">{item.title}</h4>
                <p className="text-[0.95rem] text-cedro-sage">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-24 bg-cedro-navy">
        <div className="max-w-[1200px] mx-auto px-8">
          <SectionLabel>O que dizem os pacientes</SectionLabel>
          <h2 className="mb-12">Histórias reais.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex flex-col gap-6">
              <div className="p-10 border-l-4 border-cedro-red bg-cedro-black/50">
                <p className="font-serif text-lg italic text-cedro-light mb-4">&quot;Após 12 anos sofrendo com ansiedade, hoje posso dizer que há 1 ano não tomo mais remédio e não tenho mais crises de pânico. O Leandro uniu psicologia e Cristo para me libertar.&quot;</p>
                <cite className="font-sans not-italic text-sm text-cedro-sage">— Paciente da Clínica Cedro</cite>
              </div>
              <div className="p-10 border-l-4 border-cedro-red bg-cedro-black/50">
                <p className="font-serif text-lg italic text-cedro-light mb-4">&quot;Não me senti apenas diante de um profissional competente, mas de alguém que carrega um chamado. Sua postura cristã não é apenas um detalhe — é o que torna sua prática única.&quot;</p>
                <cite className="font-sans not-italic text-sm text-cedro-sage">— Paciente da Clínica Cedro</cite>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="p-10 border-l-4 border-cedro-red bg-cedro-black/50">
                <p className="font-serif text-lg italic text-cedro-light mb-4">&quot;Quando cheguei até o Leandro, eu estava em estado de desespero. A cada sessão, eu me sentia mais leve e conseguia compreender melhor aquilo que antes parecia confuso.&quot;</p>
                <cite className="font-sans not-italic text-sm text-cedro-sage">— Paciente da Clínica Cedro</cite>
              </div>
              <div className="p-10 border-l-4 border-cedro-red bg-cedro-black/50">
                <p className="font-serif text-lg italic text-cedro-light mb-4">&quot;O Leandro literalmente salvou minha vida. Com ele eu descobri que não tenho culpa, descobri o sentido da vida, que Deus estava comigo.&quot;</p>
                <cite className="font-sans not-italic text-sm text-cedro-sage">— Paciente da Clínica Cedro</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-BOOK */}
      <section className="py-20 bg-cedro-black text-cedro-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="bg-cedro-navy/50 p-12 border border-cedro-red/30 text-center">
              <SectionLabel className="!mb-2">E-book gratuito</SectionLabel>
              <h3 className="text-[1.8rem] text-cedro-white mb-2">Não faça terapia antes de ler isso.</h3>
              <p className="font-serif italic text-cedro-sage">Um guia honesto para quem está procurando psicólogo.</p>
            </div>
            <div>
              <h3 className="mb-2 text-cedro-white">Baixe gratuitamente.</h3>
              <p className="text-cedro-sage mb-8">Coloque seu nome e e-mail abaixo e receba o e-book direto na sua caixa de entrada.</p>
              <Button asChild withArrow>
                <a href="https://form.respondi.app/VKSO6qpV" target="_blank" rel="noopener noreferrer">Quero o e-book</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="py-24 bg-cedro-navy">
        <div className="max-w-[1200px] mx-auto px-8">
          <SectionLabel>Equipe Cedro</SectionLabel>
          <h2 className="mb-4">7 psicólogos cristãos.</h2>
          <p className="text-cedro-sage mb-12 max-w-[800px]">Cada profissional foi escolhido por um critério simples: ama os pacientes, respeita a profissão e não para de estudar. Equipe supervisionada semanalmente por Leandro Carone.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-full aspect-[3/4] bg-cedro-black mb-4 flex items-center justify-center font-serif text-3xl text-cedro-sage/50">
                  {member.initials}
                </div>
                <h4 className="text-base text-cedro-white mb-1">{member.name}</h4>
                <p className="text-sm text-cedro-sage">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-cedro-black text-center">
        <div className="max-w-[600px] mx-auto px-8">
          <h2 className="text-cedro-white">O melhor passo agora é simples.</h2>
          <p className="text-cedro-sage my-4 mb-8">Converse agora com alguém da nossa equipe para começar.</p>
          <Button asChild withArrow>
            <a href="https://form.respondi.app/tiN0kxRc" target="_blank" rel="noopener noreferrer">Agendar agora</a>
          </Button>
        </div>
      </section>

    </div>
  );
}
