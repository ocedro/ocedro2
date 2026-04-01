'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SectionLabel } from '@/components/ui/section-label';
import { Divider } from '@/components/ui/divider';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-cedro-red/5 to-transparent pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-16 items-center">
            <motion.div 
              className="order-2 md:order-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <SectionLabel>Clínica Cedro</SectionLabel>
              <h1 className="mb-6 text-cedro-white">
                Terapia para quem não quer escolher entre <em className="font-serif italic text-cedro-red">fé</em> e saúde mental.
              </h1>
              <p className="text-lg text-cedro-sage mb-10 max-w-[520px]">
                Tratamento com rigor técnico e respeito aos seus valores. Seja acompanhado por psicólogos sérios, cristãos, e maduros.
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
                  src="/hero-image.jpg" 
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
              <p className="mb-5 text-cedro-sage">Existe um psicólogo que trata sua fé como obstáculo, ilusão ou repressão. Cosmovisão hedonista e materialista — e, mesmo sem dizer, vai te guiando por um caminho contrário ao que você acredita.</p>
              <p className="text-cedro-sage">Existe um &quot;terapeuta&quot; que fez um curso de um ano, leu dois livros de autoajuda cristã e sai atendendo sem o embasamento técnico e teórico coerente. Profissional que usa a fé para vender &quot;conselhos&quot;.</p>
            </div>
            <div>
              <p className="mb-5"><strong className="text-cedro-white font-bold">Os dois causam dano enorme para o cristão verdadeiro, que tem dores reais.</strong></p>
              <p className="mb-5 text-cedro-sage">Na Cedro, usamos ciência psicológica com rigor técnico — e operamos a partir de uma cosmovisão bíblica que reconhece verdade, pecado, graça, responsabilidade e sentido.</p>
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
              <p>O cedro foca em ser sólido, antes de ser grande.</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="p-8 border border-cedro-sage/10 transition-all hover:border-cedro-red hover:-translate-y-1 bg-cedro-black/20">
                <h4 className="mb-3 text-cedro-white">Raízes antes de aparência</h4>
                <p className="text-[0.95rem] text-cedro-sage">O cedro prioriza o crescimento das raízes. Nós queremos trabalhar a raiz dos problemas e crescer com estrutura.</p>
              </div>
              <div className="p-8 border border-cedro-sage/10 transition-all hover:border-cedro-red hover:-translate-y-1 bg-cedro-black/20">
                <h4 className="mb-3 text-cedro-white">Conectado à fonte</h4>
                <p className="text-[0.95rem] text-cedro-sage">Suas raízes buscam o lençol freático. Não depende dos fatores externos — está conectado à fonte.</p>
              </div>
              <div className="p-8 border border-cedro-sage/10 transition-all hover:border-cedro-red hover:-translate-y-1 bg-cedro-black/20">
                <h4 className="mb-3 text-cedro-white">Abraça ou quebra a rocha</h4>
                <p className="text-[0.95rem] text-cedro-sage">Ao se deparar com uma rocha, as raízes encontram o sentido no sofrimento e melhoram com ele.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CICLO CEDRO */}
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

      {/* E-BOOK */}
      <section className="py-20 bg-cedro-navy text-cedro-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="bg-cedro-black/20 p-12 border border-cedro-red/30 text-center">
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

      {/* DEPOIMENTOS */}
      <section className="py-24 bg-cedro-black">
        <div className="max-w-[1200px] mx-auto px-8">
          <SectionLabel>O que dizem os pacientes</SectionLabel>
          <h2 className="mb-12">Histórias reais.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex flex-col gap-6">
              <div className="p-10 border-l-4 border-cedro-red bg-cedro-navy/50">
                <p className="font-serif text-lg italic text-cedro-light mb-4">&quot;Após 12 anos sofrendo com ansiedade, hoje posso dizer que há 1 ano não tomo mais remédio e não tenho mais crises de pânico. O Leandro uniu psicologia e Cristo para me libertar.&quot;</p>
                <cite className="font-sans not-italic text-sm text-cedro-sage">— Paciente da Clínica Cedro</cite>
              </div>
              <div className="p-10 border-l-4 border-cedro-red bg-cedro-navy/50">
                <p className="font-serif text-lg italic text-cedro-light mb-4">&quot;Não me senti apenas diante de um profissional competente, mas de alguém que carrega um chamado. Sua postura cristã não é apenas um detalhe — é o que torna sua prática única.&quot;</p>
                <cite className="font-sans not-italic text-sm text-cedro-sage">— Paciente da Clínica Cedro</cite>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="p-10 border-l-4 border-cedro-red bg-cedro-navy/50">
                <p className="font-serif text-lg italic text-cedro-light mb-4">&quot;Quando cheguei até o Leandro, eu estava em estado de desespero. A cada sessão, eu me sentia mais leve e conseguia compreender melhor aquilo que antes parecia confuso.&quot;</p>
                <cite className="font-sans not-italic text-sm text-cedro-sage">— Paciente da Clínica Cedro</cite>
              </div>
              <div className="p-10 border-l-4 border-cedro-red bg-cedro-navy/50">
                <p className="font-serif text-lg italic text-cedro-light mb-4">&quot;O Leandro literalmente salvou minha vida. Com ele eu descobri que não tenho culpa, descobri o sentido da vida, que Deus estava comigo.&quot;</p>
                <cite className="font-sans not-italic text-sm text-cedro-sage">— Paciente da Clínica Cedro</cite>
              </div>
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
