'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SectionLabel } from '@/components/ui/section-label';
import { Divider } from '@/components/ui/divider'

const bg  = '#0A0A09';
const bg2 = '#111110';
const bg3 = '#161614';
const text = '#E8E3D8';
const muted = 'rgba(232,227,216,0.55)';
const line = 'rgba(232,227,216,0.1)';
const red = '#C1341A';

export default function LeandroPage() {
  return (
    <div style={{ background: bg, color: text, fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'clamp(100px,14vh,160px)',
        paddingBottom: 'clamp(48px,7vh,80px)',
        background: `radial-gradient(ellipse at 70% 30%, rgba(193,52,26,0.08) 0%, transparent 60%), ${bg}`,
        position: 'relative',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(20px,5vw,40px)', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 'clamp(40px,6vw,80px)', alignItems: 'start' }}>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
              <div style={{ position: 'relative', display: 'inline-block', maxWidth: '360px', width: '100%' }}>
                <div style={{ position: 'absolute', top: '-10px', left: '-10px', width: '40px', height: '40px', borderTop: `1px solid ${red}`, borderLeft: `1px solid ${red}` }} />
                <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', width: '40px', height: '40px', borderBottom: `1px solid ${red}`, borderRight: `1px solid ${red}` }} />
                <Image src="/leandro-image.png" alt="Leandro Carone" width={480} height={600}
                  style={{ width: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'top', display: 'block', filter: 'grayscale(15%) contrast(1.05)' }} priority />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}>
              <SectionLabel>Quem fundou a Cedro</SectionLabel>
              <h1 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(2.8rem,6vw,5rem)', fontWeight: 600, lineHeight: 1.06, color: text, marginBottom: '12px' }}>
                Leandro Carone
              </h1>
              <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontStyle: 'italic', fontSize: 'clamp(1.2rem,2.5vw,1.7rem)', color: muted, marginBottom: '28px', lineHeight: 1.4 }}>
                Psicólogo, logoterapeuta, supervisor clínico e fundador da Clínica Cedro.
              </p>
              <a href="https://form.respondi.app/rdiSvqJY" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: red, fontFamily: 'sans-serif', textDecoration: 'none', marginBottom: '32px' }}>
                Quero fazer supervisão com o Leandro →
              </a>
              <div style={{ height: '1px', background: line, marginBottom: '28px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {[
                  'Nasci na igreja, sou a terceira geração da minha família que é cristã. Desde os 8 anos eu falava que seria pastor. Mesmo assim, carreguei por mais de dez anos um vício em pornografia que ninguém ao meu redor sabia, ou queria saber como tratar de verdade.',
                  'As respostas que a igreja me dava eram insuficientes: orar mais, jejuar mais, não por maldade, mas por falta de estudos e profundidade técnica e teológica. Não só isso, fiquei muito decepcionado com líderes de igrejas, me senti desamparado e alimentei uma indignação contra os cristãos rasos e descompromissados.',
                  'Tempos depois, na faculdade, vi que as correntes de psicologia ignoravam, ou não lidavam, dimensões da existência humana que eu sabia serem reais.',
                  'Nenhum dos dois lados entregava o que prometia, ou o que eu esperava. Mas eu nunca abandonei a convicção de que uma integração séria entre fé, ciência e prática clínica era possível e necessária.',
                ].map((p, i) => (
                  <p key={i} style={{ fontFamily: 'sans-serif', fontSize: 'clamp(0.88rem,1.5vw,0.97rem)', color: muted, lineHeight: 1.85 }}>{p}</p>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── O ENCAIXE ── */}
      <section style={{ background: bg2, padding: 'clamp(64px,10vh,120px) clamp(20px,5vw,40px)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h3 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', fontWeight: 600, color: text, marginBottom: '24px' }}>O encaixe</h3>
          {[
            'Foi na psicologia de Viktor Frankl que encontrei o primeiro elo. A Logoterapia opera sobre uma ontologia dimensional: o ser humano é corpo, psiquismo e espírito. Isso abria espaço legítimo para a espiritualidade dentro de um modelo clínico rigoroso, sem misticismo e sem reducionismo.',
            'O segundo elo foi ter feito terapia com o Jota Borgonhoni, ali encontrei uma pessoa, não só um psicólogo. E ele me mostrou que era possível atender de verdade, sem fingimentos, com técnica, autenticidade e bom senso. O considero como meu padrinho da profissão.',
            'Quando somei a isso a descrição das 12 camadas da personalidade aprendida com Francisco Escorsim e os trabalhos de Eric Johnson, Larry Crabb e Paul Tournier sobre integração entre teologia e psicologia, a síntese se formou. Cada tema que trato passa pelo mesmo filtro: como isso afeta o mundo físico, o comportamento concreto? Como afeta a subjetividade, a emoção, a narrativa, a experiência interna? E como afeta o espiritual, a relação com Deus, com o sentido, responsabilidade, com a identidade? Quando as três dimensões são contempladas entendo que a resposta é completa.',
          ].map((p, i) => (
            <p key={i} style={{ fontFamily: 'sans-serif', fontSize: 'clamp(0.9rem,1.6vw,1rem)', color: muted, lineHeight: 1.9, marginBottom: '18px' }}>{p}</p>
          ))}

          <blockquote style={{ borderLeft: `2px solid ${red}`, paddingLeft: '24px', margin: '48px 0', fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(1.4rem,3vw,2.2rem)', fontStyle: 'italic', color: text, lineHeight: 1.4 }}>
            "Encontrei ali um caminho para a minha própria maturidade, para lidar com as minhas falhas de uma maneira coerente com a realidade, não com uma versão editada dela."
          </blockquote>

          <h3 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', fontWeight: 600, color: text, margin: '48px 0 24px' }}>O início</h3>
          {[
            'Comecei a trabalhar como psicólogo em 2020 com uma obsessão: dominar o ofício. No primeiro ano, cheguei a atender 10, 12 pacientes por dia, boa parte deles de graça, porque eu precisava verificar na prática se o que eu estudava realmente transformava vidas.',
            'Cursos, supervisão, livros, pós-graduação em análise existencial e Logoterapia com o professor Luís Enrique, prática clínica orientada pelo Jota Borgonhoni. Fui atrás de tudo que daria robustez prática e teórica ao meu trabalho. Eu sabia que lidar com a vida de um paciente exige preparo, não apenas boa intenção.',
          ].map((p, i) => (
            <p key={i} style={{ fontFamily: 'sans-serif', fontSize: 'clamp(0.9rem,1.6vw,1rem)', color: muted, lineHeight: 1.9, marginBottom: '18px' }}>{p}</p>
          ))}

          <h3 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', fontWeight: 600, color: text, margin: '48px 0 24px' }}>A perseguição</h3>
          {[
            'Quando decidi me posicionar publicamente como psicólogo cristão, em 2023, eu sabia o custo. Mas não fiz por nicho mercadológico, fiz por vocação. Via a demanda real dos meus irmãos: pais procurando profissionais que não conduzissem seus filhos por um caminho oposto aos seus valores. Casamentos destruídos por orientações clínicas fundadas numa cosmovisão hedonista e materialista travestida de neutralidade. Homens presos em ciclos viciosos de pornografia encontrando profissionais normalizando o absurdo.',
            'Em menos de um ano o conselho de psicologia me procurou a partir de denúncias anônimas, não pela minha conduta clínica, mas por posts do meu perfil. Pelas minhas opiniões. Pela minha fé.',
            'Cogitei recuar. Estava com menos de 4 mil seguidores, apertado financeiramente, com minha esposa grávida. Mas quando li o Salmo 18, tive clareza. Contratei um advogado com um dinheiro que eu não tinha e montei o caso.',
          ].map((p, i) => (
            <p key={i} style={{ fontFamily: 'sans-serif', fontSize: 'clamp(0.9rem,1.6vw,1rem)', color: muted, lineHeight: 1.9, marginBottom: '18px' }}>{p}</p>
          ))}

          <blockquote style={{ borderLeft: `2px solid ${red}`, paddingLeft: '24px', margin: '48px 0', fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(1.4rem,3vw,2.2rem)', fontStyle: 'italic', color: text, lineHeight: 1.4 }}>
            "Bem-aventurados os perseguidos por causa da justiça, porque deles é o Reino dos Céus."
            <cite style={{ display: 'block', marginTop: '12px', fontFamily: 'sans-serif', fontStyle: 'normal', fontSize: '12px', color: muted, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Mateus 5:10</cite>
          </blockquote>

          <p style={{ fontFamily: 'sans-serif', fontSize: 'clamp(0.9rem,1.6vw,1rem)', color: muted, lineHeight: 1.9, marginBottom: '18px' }}>
            O processo segue em andamento, defendido com base na liberdade religiosa. Eu não recuei.
          </p>

          <h3 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', fontWeight: 600, color: text, margin: '48px 0 24px' }}>Hoje</h3>
          {[
            'Atendo clinicamente com base em análise existencial e Logoterapia frankliana, integradas a uma antropologia cristã. Meu trabalho se dedica a resolver a desordem interna do cristão, não com contenções superficiais, mas com um caminho real de reconstrução, em três eixos: o comportamental, rotina e disciplina; o emocional e moral, responsabilidade e caráter; e o espiritual, identidade e vocação.',
            'Em 2024, fundei a Clínica Cedro - psicologia para cristãos, com psicólogos cristãos. Em pouco mais de um ano, são 7 profissionais e mais de 200 pacientes acompanhados. Cedro não é nome por acaso: raízes profundas, madeira que não apodrece, símbolo bíblico de força e permanência. A Cedro não é uma clínica que aceita cristãos, é uma clínica construída para eles.',
            'Lidero jovens na Igreja Batista Vida Nova. Supervisiono psicólogos. Participei de um painel no Congresso Divinamente e fui convidado do Podcast Divinamente. Palestro em igrejas, empresas e escolas sobre pornografia, identidade, vocação, ansiedade e Logoterapia aplicada. E construí um ecossistema de produtos, do Desafio Pare de lutar contra o pornô à mentoria para pastores e líderes, porque cada pessoa está num momento diferente da jornada, e cada momento exige uma resposta à altura.',
          ].map((p, i) => (
            <p key={i} style={{ fontFamily: 'sans-serif', fontSize: 'clamp(0.9rem,1.6vw,1rem)', color: muted, lineHeight: 1.9, marginBottom: '18px' }}>{p}</p>
          ))}

          {/* Credenciais */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '40px', paddingTop: '40px', borderTop: `1px solid ${line}` }}>
            {[
              'Graduado em Psicologia',
              'Pós-graduado em Análise Existencial e Logoterapia Frankliana',
              'MBA em liderança e gestão',
              'Certificado pela Escola de Sexualidade, Andrea Vargas',
              '+6.000 horas de atendimento clínico',
              '+500 pacientes acompanhados',
              'Líder de Jovens, Ministério Arca na Igreja Batista Vida Nova, Campinas - SP',
              'Casado com Paula desde 2021 · Pai da Elisa',
              'CRP ativo, por enquanto, pelo menos. (Eu não disponibilizo aqui para não ficar sofrendo denúncias de intolerantes religiosos e idiotas úteis).',
            ].map((cred, i) => (
              <div key={i} style={{ padding: '8px 16px', border: `1px solid ${line}`, fontSize: '12px', color: muted, fontFamily: 'sans-serif', lineHeight: 1.5 }}>
                {cred}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{ background: bg3, padding: 'clamp(80px,12vh,140px) clamp(20px,5vw,40px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 50% 50%, rgba(193,52,26,0.07) 0%, transparent 65%)`, pointerEvents: 'none' }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(1.8rem,4.5vw,3.2rem)', fontWeight: 600, color: text, lineHeight: 1.15, marginBottom: '40px' }}>
            Eu não quero chegar ao último dia da minha vida com o arrependimento de que não me tornei tudo o que eu poderia.
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            <Button asChild withArrow>
              <a href="https://form.respondi.app/tiN0kxRc" target="_blank" rel="noopener noreferrer">Agendar sessão</a>
            </Button>
            <Button variant="outline" asChild withArrow className="border-white/35 text-white hover:border-white hover:text-white">
              <a href="https://form.respondi.app/rdiSvqJY" target="_blank" rel="noopener noreferrer">Quero fazer supervisão com o Leandro</a>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
