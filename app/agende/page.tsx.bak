'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SectionLabel } from '@/components/ui/section-label';
import { Divider } from '@/components/ui/divider';

export default function AgendePage() {
  const team = [
    { initials: 'LC', name: 'Leandro Carone', role: 'Fundador · CRP XX/XXXXX' },
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
      <section className="pt-32 pb-16 bg-cedro-navy">
        <motion.div 
          className="max-w-[1200px] mx-auto px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionLabel>Clínica Cedro</SectionLabel>
          <h1 className="text-cedro-white mb-4">Agende sua consulta.</h1>
          <Divider className="my-6" />
          <p className="text-lg text-cedro-sage max-w-[600px]">
            Atendimento por videochamada, com sessões de 50 minutos, semanais ou quinzenais, conforme sua necessidade avaliada por nossos profissionais.
          </p>
        </motion.div>
      </section>

      <section className="py-24 bg-cedro-black text-cedro-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="mb-4 text-cedro-white">Como funciona</h2>
          <p className="text-cedro-sage mb-8">Simples. Sem complicação.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
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
              <p className="text-sm text-cedro-sage">Se fizer sentido, você inicia um Ciclo Cedro — acompanhamento trimestral com objetivo claro, começo, meio e fim.</p>
            </div>
          </div>
          
          <p className="text-[0.95rem] text-cedro-sage">Aqui psicólogos homens para atender homens. Psicólogas mulheres para atender mulheres. Não é uma regra, mas é um direcionamento.</p>
          <div className="mt-10">
            <Button asChild withArrow>
              <a href="https://form.respondi.app/tiN0kxRc" target="_blank" rel="noopener noreferrer">Agendar sessão avulsa</a>
            </Button>
          </div>
        </div>
      </section>

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
