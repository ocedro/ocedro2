'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SectionLabel } from '@/components/ui/section-label';
import { Divider } from '@/components/ui/divider';

export default function AgendePage() {
  const team = [
    { img: '/team/leandro-carone-team.jpg', name: 'Leandro Carone', role: 'Fundador e Responsável Técnico' },
    { img: '/team/dhimmy-fraga.jpg',        name: 'Dhimmy Fraga',   role: 'Psicólogo' },
    { img: '/team/nattanael-vieira.jpg',    name: 'Nattanael Vieira', role: 'Psicólogo' },
    { img: '/team/alvaro-martins.jpg',      name: 'Álvaro Martins', role: 'Psicólogo' },
    { img: '/team/joyce-jeremias.jpg',      name: 'Joyce Jeremias', role: 'Psicóloga' },
    { img: '/team/beatriz-carone.jpg',      name: 'Beatriz Carone', role: 'Psicóloga' },
    { img: '/team/valeria-alves.jpg',       name: 'Valéria Alves',  role: 'Psicóloga' },
    { img: '/team/karla-franco.jpg',        name: 'Karla Franco',   role: 'Psicóloga' },
  ];

  return (
    <div className="flex flex-col">

      {/* HERO */}
      <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: '#f0ede6' }}>
        {/* Decorações SVG premium */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 360" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="vline" x1="0" y1="0" x2="0" y2="360" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(209,61,29,0)"/>
              <stop offset="30%" stopColor="rgba(209,61,29,0.7)"/>
              <stop offset="70%" stopColor="rgba(209,61,29,0.7)"/>
              <stop offset="100%" stopColor="rgba(209,61,29,0)"/>
            </linearGradient>
          </defs>
          {/* Linha vertical esquerda */}
          <line x1="0" y1="0" x2="0" y2="360" stroke="url(#vline)" strokeWidth="2.5"/>
          {/* Círculos concêntricos inferior direito */}
          <circle cx="800" cy="360" r="180" stroke="rgba(209,61,29,0.08)" strokeWidth="1"/>
          <circle cx="800" cy="360" r="110" stroke="rgba(209,61,29,0.12)" strokeWidth="1"/>
          <circle cx="800" cy="360" r="55"  stroke="rgba(209,61,29,0.18)" strokeWidth="1"/>
          <circle cx="800" cy="360" r="20"  fill="rgba(209,61,29,0.06)"/>
          {/* Grid fino superior direito */}
          {[0,28,56,84,112].map((y) => <line key={y} x1="580" y1={y} x2="800" y2={y} stroke="rgba(209,61,29,0.1)" strokeWidth="0.5"/>)}
          {[580,608,636,664,692,720,748,776].map((x) => <line key={x} x1={x} y1="0" x2={x} y2="120" stroke="rgba(209,61,29,0.08)" strokeWidth="0.5"/>)}
          {/* Badge pill */}
          <rect x="640" y="18" width="120" height="22" rx="11" stroke="rgba(209,61,29,0.2)" strokeWidth="1"/>
          <text x="700" y="33" textAnchor="middle" fontSize="8" fill="rgba(209,61,29,0.45)" fontFamily="sans-serif" letterSpacing="1.5">CLÍNICA CEDRO</text>
          {/* Linha tracejada decorativa */}
          <line x1="40" y1="190" x2="320" y2="190" stroke="rgba(209,61,29,0.08)" strokeWidth="0.75" strokeDasharray="4 6"/>
          {/* Traços diagonais inferior esquerdo */}
          <line x1="20" y1="310" x2="60" y2="280" stroke="rgba(209,61,29,0.07)" strokeWidth="1"/>
          <line x1="10" y1="330" x2="70" y2="290" stroke="rgba(209,61,29,0.05)" strokeWidth="1"/>
          <line x1="0"  y1="350" x2="80" y2="300" stroke="rgba(209,61,29,0.04)" strokeWidth="1"/>
          {/* Pontos decorativos */}
          <circle cx="500" cy="50" r="2"   fill="rgba(209,61,29,0.12)"/>
          <circle cx="520" cy="70" r="1.5" fill="rgba(209,61,29,0.09)"/>
          <circle cx="540" cy="45" r="1"   fill="rgba(209,61,29,0.07)"/>
          {/* Linha horizontal sutil */}
          <line x1="40" y1="280" x2="200" y2="280" stroke="rgba(209,61,29,0.06)" strokeWidth="0.75"/>
        </svg>

        <motion.div
          className="max-w-[1200px] mx-auto px-8 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionLabel>Agende sua consulta</SectionLabel>
          <h1 className="mb-0 leading-tight" style={{ color: '#1a1a1a' }}>
            Cuide da sua saúde mental<br />
            <em className="font-serif italic" style={{ color: 'rgba(26,26,26,0.28)' }}>com quem entende você.</em>
          </h1>
          <Divider className="my-6" />
          <p className="text-lg max-w-[560px] mb-8" style={{ color: '#555' }}>
            Atendimento por videochamada, com psicólogos sérios. Sessões de 50 minutos, semanais ou quinzenais.
          </p>
          <div className="flex flex-wrap gap-6 mb-10">
            {['Sessão avulsa', 'Avaliação', 'Ciclo Cedro'].map((s, i) => (
              <div key={i} className="flex items-center gap-3 text-sm" style={{ color: '#666' }}>
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
      <section className="py-24 bg-cedro-navy text-cedro-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="mb-4 text-cedro-white">Como funciona</h2>
          <p className="text-cedro-sage mb-12">Simples. Sem complicação.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { n: '1', title: 'Sessão avulsa', desc: 'Você começa com uma sessão avulsa. Conhece o profissional, entende a abordagem, vê se é o que você procurava.' },
              { n: '2', title: 'Avaliação', desc: 'Junto com o psicólogo, vocês definem o objetivo do tratamento e a frequência ideal, semanal ou quinzenal.' },
              { n: '3', title: 'Ciclo Cedro', desc: 'Você inicia um Ciclo Cedro, acompanhamento com objetivo claro, com começo, meio e fim, sempre alinhado com o psicólogo que está te acompanhando.' },
            ].map((card) => (
              <div key={card.n} className="p-8 border border-cedro-sage/10 border-t-[3px] border-t-cedro-red bg-cedro-navy">
                <div className="font-serif text-5xl mb-3 leading-none" style={{ color: '#e8450a' }}>{card.n}</div>
                <div className="w-6 h-[1px] mb-4" style={{ background: 'rgba(209,61,29,0.3)' }} />
                <h4 className="text-cedro-white mb-2">{card.title}</h4>
                <p className="text-sm text-cedro-sage">{card.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[0.95rem] text-cedro-sage mt-12">Indicamos sempre psicólogos homens para atender homens e psicólogas mulheres para atender mulheres. Não é uma regra, mas é um direcionamento.</p>
        </div>
      </section>

      {/* MÉTODO CEDRO */}
      <section className="py-24 bg-cedro-black">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-[700px] mb-14">
            <SectionLabel>Método Cedro</SectionLabel>
            <h2 className="text-cedro-white">Em poucos meses, você pode sair da confusão para uma vida com sentido, disciplina e identidade clara.</h2>
            <p className="text-cedro-sage mt-4">É isso que o Método Cedro constrói.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                num: '01', title: 'Autenticidade e Integridade Pessoal',
                desc: 'Desenvolvimento de congruência entre valores pessoais e bíblicos com a sua biocosmovisão e comportamentos externos.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="#e8450a" strokeWidth="1.5" strokeLinejoin="round">
                    <polygon points="14,2 26,10 14,26 2,10"/>
                    <line x1="2" y1="10" x2="26" y2="10"/>
                    <line x1="9" y1="10" x2="14" y2="2"/>
                    <line x1="19" y1="10" x2="14" y2="2"/>
                    <line x1="9" y1="10" x2="14" y2="26"/>
                    <line x1="19" y1="10" x2="14" y2="26"/>
                  </svg>
                ),
              },
              {
                num: '02', title: 'Aceitação e Confissão Humilhante',
                desc: 'Desenvolvimento de uma perspectiva humilde sobre si, enfatizando a importância da responsabilidade e individualidade.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="#e8450a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="14" cy="7" r="3"/>
                    <line x1="14" y1="10" x2="14" y2="26"/>
                    <path d="M6,14 C6,20 10,24 14,26 C18,24 22,20 22,14"/>
                    <line x1="9" y1="14" x2="19" y2="14"/>
                  </svg>
                ),
              },
              {
                num: '03', title: 'Hábitos Poderosos',
                desc: 'Estabelecimento de rotinas e hábitos diários que reforcem o bem-estar pessoal e a realização, contribuindo para uma melhor saúde mental, física e espiritual.',
                icon: (
                  <svg width="28" height="24" viewBox="0 0 32 28" fill="none" stroke="#e8450a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="9" width="4" height="10" rx="1"/>
                    <rect x="5" y="11" width="3" height="6" rx="0.5"/>
                    <line x1="8" y1="14" x2="24" y2="14"/>
                    <rect x="24" y="11" width="3" height="6" rx="0.5"/>
                    <rect x="27" y="9" width="4" height="10" rx="1"/>
                  </svg>
                ),
              },
              {
                num: '04', title: 'Compreensão Vocacional e Identitária',
                desc: 'Alcance de clareza sobre identidade, propósito e missão pessoal.',
                icon: (
                  <svg width="26" height="24" viewBox="0 0 30 28" fill="none" stroke="#e8450a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15,24 L15,8"/>
                    <path d="M15,8 C15,4 9,2 7,5 C5,3 2,4 2,7 C0,8 0,11 2,12 C1,14 2,17 4,17 C4,20 6,22 9,22 C10,23 12,24 15,24"/>
                    <path d="M15,8 C15,4 21,2 23,5 C25,3 28,4 28,7 C30,8 30,11 28,12 C29,14 28,17 26,17 C26,20 24,22 21,22 C20,23 18,24 15,24"/>
                    <path d="M7,12 C8,10 10,10 11,12"/>
                    <path d="M23,12 C22,10 20,10 19,12"/>
                    <line x1="4" y1="15" x2="8" y2="13"/>
                    <line x1="26" y1="15" x2="22" y2="13"/>
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.num} className="p-8 border border-cedro-sage/10 transition-all hover:border-cedro-red hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="font-serif text-4xl leading-none" style={{ color: '#e8450a' }}>{item.num}</div>
                  <div>{item.icon}</div>
                </div>
                <h4 className="mb-3 text-cedro-white">{item.title}</h4>
                <p className="text-[0.95rem] text-cedro-sage">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button asChild withArrow>
              <a href="https://form.respondi.app/tiN0kxRc" target="_blank" rel="noopener noreferrer">Marcar minha primeira sessão</a>
            </Button>
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

      {/* EQUIPE */}
      <section className="py-24 bg-cedro-navy">
        <div className="max-w-[1200px] mx-auto px-8">
          <SectionLabel>Equipe Cedro</SectionLabel>
          <h2 className="mb-4">7 psicólogos.</h2>
          <p className="text-cedro-sage mb-12 max-w-[800px]">Cada profissional foi escolhido por critérios simples: ama os pacientes, respeita a profissão, cristão sólido e não para de estudar. Equipe supervisionada semanalmente por Leandro Carone.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-full aspect-[4/5] bg-cedro-black mb-4 overflow-hidden">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={600}
                    height={750}
                    className="w-full h-full object-cover object-top"
                  />
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
            <a href="https://wa.me/5519983133780" target="_blank" rel="noopener noreferrer">Agendar agora</a>
          </Button>
        </div>
      </section>

    </div>
  );
}
