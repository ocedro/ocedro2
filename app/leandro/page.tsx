'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { SectionLabel } from '@/components/ui/section-label';
import { Divider } from '@/components/ui/divider';

export default function LeandroPage() {
  return (
    <div className="flex flex-col">
      <section className="min-h-svh flex items-center pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="relative inline-block max-w-[400px] w-full">
                {/* Canto superior esquerdo */}
                <div className="absolute -top-2 -left-2 w-12 h-12 pointer-events-none"
                  style={{ borderTop: '2px solid #d13d1d', borderLeft: '2px solid #d13d1d' }} />
                {/* Canto inferior direito */}
                <div className="absolute -bottom-2 -right-2 w-12 h-12 pointer-events-none"
                  style={{ borderBottom: '2px solid #d13d1d', borderRight: '2px solid #d13d1d' }} />
                <Image 
                  src="/leandro-image.png" 
                  alt="Leandro Carone" 
                  className="w-full h-auto object-cover"
                  width={480}
                  height={600}
                  priority
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <SectionLabel>Quem fundou a Cedro</SectionLabel>
              <h1 className="mb-2 text-cedro-white">Leandro Carone</h1>
              <p className="font-serif italic text-xl text-cedro-sage mb-8">Psicólogo, logoterapeuta, supervisor clínico e fundador da Clínica Cedro.</p>
              <Divider />
              <div className="flex flex-col gap-5 text-cedro-light/85">
                <p>Nasci na igreja, sou a terceira geração da minha família que é cristã. Desde os 8 anos eu falava que seria pastor. Mesmo assim, carreguei por mais de dez anos um vício em pornografia que ninguém ao meu redor sabia, ou queria saber como tratar de verdade.</p>
                <p>As respostas que a igreja me dava eram insuficientes: orar mais, jejuar mais, não por maldade, mas por falta de estudos e profundidade técnica e teológica. Não só isso, fiquei muito decepcionado com líderes de igrejas, me senti desamparado e alimentei uma indignação contra os cristãos rasos e descompromissados.</p>
                <p>Tempos depois, na faculdade, vi que as correntes de psicologia ignoravam, ou não lidavam, dimensões da existência humana que eu sabia serem reais.</p>
                <p>Nenhum dos dois lados entregava o que prometia – ou o que eu esperava. Mas eu nunca abandonei a convicção de que uma integração séria entre fé, ciência e prática clínica era possível e necessária.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cedro-light text-cedro-black">
        <div className="max-w-[800px] mx-auto px-5 md:px-8">
          <h3 className="text-cedro-black mb-6">O encaixe</h3>
          <p className="mb-5 text-cedro-navy">Foi na psicologia de Viktor Frankl que encontrei o primeiro elo. A Logoterapia opera sobre uma ontologia dimensional: o ser humano é corpo, psiquismo e espírito. Isso abria espaço legítimo para a espiritualidade dentro de um modelo clínico rigoroso, sem misticismo e sem reducionismo.</p>
          <p className="mb-5 text-cedro-navy">O segundo elo foi ter feito terapia com o Jota Borgonhoni, ali encontrei uma pessoa, não só um psicólogo. E ele me mostrou que era possível atender de verdade, sem fingimentos, com técnica, autenticidade e bom senso. O considero como meu padrinho da profissão.</p>
          <p className="mb-5 text-cedro-navy">Quando somei a isso a descrição das 12 camadas da personalidade aprendida com Francisco Escorsim e os trabalhos de Eric Johnson, Larry Crabb e Paul Tournier sobre integração entre teologia e psicologia, a síntese se formou. Cada tema que trato passa pelo mesmo filtro: como isso afeta o mundo físico, o comportamento concreto? Como afeta a subjetividade, a emoção, a narrativa, a experiência interna? E como afeta o espiritual, a relação com Deus, com o sentido, responsabilidade, com a identidade? Quando as três dimensões são contempladas entendo que a resposta é completa.</p>

          <div className="p-12 border-l-4 border-cedro-red my-12 bg-cedro-red/5">
            <p className="font-serif text-2xl italic text-cedro-black">&quot;Encontrei ali um caminho para a minha própria maturidade, para lidar com as minhas falhas de uma maneira coerente com a realidade — não com uma versão editada dela.&quot;</p>
          </div>

          <h3 className="text-cedro-black mb-6">O início</h3>
          <p className="mb-5 text-cedro-navy">Comecei a trabalhar como psicólogo em 2020 com uma obsessão: dominar o ofício. No primeiro ano, cheguei a atender 10, 12 pacientes por dia boa parte deles de graça porque eu precisava verificar na prática se o que eu estudava realmente transformava vidas.</p>
          <p className="mb-5 text-cedro-navy">Cursos, supervisão, livros, pós-graduação em análise existencial e Logoterapia com o professor Luís Enrique, prática clínica orientada pelo Jota Borgonhoni. Fui atrás de tudo que daria robustez prática e teórica ao meu trabalho. Eu sabia que lidar com a vida de um paciente exige preparo, não apenas boa intenção.</p>

          <h3 className="text-cedro-black mb-6 mt-12">A perseguição</h3>
          <p className="mb-5 text-cedro-navy">Quando decidi me posicionar publicamente como psicólogo cristão, em 2023, eu sabia o custo. Mas não fiz por nicho mercadológico, fiz por vocação. Via a demanda real dos meus irmãos: pais procurando profissionais que não conduzissem seus filhos por um caminho oposto aos seus valores. Casamentos destruídos por orientações clínicas fundadas numa cosmovisão hedonista e materialista travestida de neutralidade. Homens presos em ciclos viciosos de pornografia encontrando profissionais normalizando o absurdo.</p>
          <p className="mb-5 text-cedro-navy">Em menos de um ano o conselho de psicologia me procurou a partir de denúncias anônimas, não pela minha conduta clínica, mas por posts do meu perfil. Pelas minhas opiniões. Pela minha fé.</p>
          <p className="mb-5 text-cedro-navy">Cogitei recuar. Estava com menos de 4 mil seguidores, apertado financeiramente, com minha esposa grávida. Mas quando li o Salmo 18, tive clareza. Contratei um advogado com um dinheiro que eu não tinha e montei o caso.</p>

          <div className="p-12 border-l-4 border-cedro-red my-12 bg-cedro-red/5">
            <p className="font-serif text-2xl italic text-cedro-black">&quot;Bem-aventurados os perseguidos por causa da justiça, porque deles é o Reino dos Céus.&quot;</p>
            <cite className="block mt-4 font-sans not-italic text-sm text-cedro-navy">Mateus 5:10</cite>
          </div>

          <p className="mb-5 text-cedro-navy">O processo segue em andamento, defendido com base na liberdade religiosa. Eu não recuei.</p>

          <h3 className="text-cedro-black mb-6 mt-12">Hoje</h3>
          <p className="mb-5 text-cedro-navy">Atendo clinicamente com base em análise existencial e Logoterapia frankliana, integradas a uma antropologia cristã. Meu trabalho se dedica a resolver a desordem interna do cristão, não com contenções superficiais, mas com um caminho real de reconstrução, em três eixos: o comportamental, rotina e disciplina; o emocional e moral responsabilidade e caráter; e o espiritual, identidade e vocação.</p>
          <p className="mb-5 text-cedro-navy">Em 2024, fundei a Clínica Cedro - psicologia para cristãos, com psicólogos cristãos. Em pouco mais de um ano, são 7 profissionais e mais de 200 pacientes acompanhados. Cedro não é nome por acaso: raízes profundas, madeira que não apodrece, símbolo bíblico de força e permanência. A Cedro não é uma clínica que aceita cristãos, é uma clínica construída para eles.</p>
          <p className="mb-8 text-cedro-navy">Lidero jovens na Igreja Batista Vida Nova. Supervisiono psicólogos. Participei de um painel no Congresso Divinamente e fui convidado do Podcast Divinamente. Palestro em igrejas, empresas e escolas sobre pornografia, identidade, vocação, ansiedade e Logoterapia aplicada. E construí um ecossistema de produtos, do Desafio Pare de lutar contra o pornô à mentoria para pastores e líderes, porque cada pessoa está num momento diferente da jornada, e cada momento exige uma resposta à altura.</p>

          <div className="flex flex-wrap gap-4 mt-8">
            {[
              'Graduado em Psicologia',
              'Pós-graduado em Análise Existencial e Logoterapia Frankliana',
              'MBA em liderança e gestão',
              'Certificado pela Escola de Sexualidade — Andrea Vargas',
              '+6.000 horas de atendimento clínico',
              '+500 pacientes acompanhados',
              'Líder de Jovens — Ministério Arca na Igreja Batista Vida Nova, Campinas - SP',
              'Casado com Paula desde 2021 · Pai da Elisa',
              'CRP ativo – por enquanto, pelo menos. (Eu não disponibilizo aqui para não ficar sofrendo denúncias de intolerantes religiosos e idiotas úteis).'
            ].map((cred, i) => (
              <div key={i} className="px-5 py-2.5 border border-cedro-navy/20 text-sm text-cedro-navy">
                {cred}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cedro-navy text-center">
        <div className="max-w-[900px] mx-auto px-5 md:px-8">
          <h2 className="text-cedro-white">Eu não quero chegar ao último dia da minha vida com arrependimento que não me tornei tudo o que eu poderia.</h2>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button asChild withArrow>
              <a href="https://form.respondi.app/tiN0kxRc" target="_blank" rel="noopener noreferrer">Agendar sessão</a>
            </Button>
            <Button variant="outline" asChild withArrow>
              <a href="https://form.respondi.app/rdiSvqJY" target="_blank" rel="noopener noreferrer">Quero fazer supervisão com o Leandro</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
