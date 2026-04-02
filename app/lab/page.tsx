import Image from 'next/image';


import { Button } from '@/components/ui/button';
import { SectionLabel } from '@/components/ui/section-label';
import { Divider } from '@/components/ui/divider';

export default function LabPage() {
  return (
    <div className="flex flex-col">
      <section className="pt-32 pb-20 bg-cedro-black">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            <div>
              <Image
                src="/cedrolab-logo.png"
                alt="CedroLAB"
                width={240}
                height={60}
                className="mb-8 w-auto h-14 object-contain"
                priority
              />
              <SectionLabel>CedroLAB · Mentoria</SectionLabel>
              <h1 className="mb-6 text-cedro-white">
                Você é psicólogo, mas não sabe dizer quem você é como profissional.
              </h1>
              <p className="text-lg text-cedro-sage mb-8">
                Sabe atender. Estudou. Tem CRP. Mas na hora de se posicionar, criar conteúdo, cobrar o que vale e construir uma prática que sustenta sua vida trava.
              </p>
              <p className="mb-10 text-cedro-white">
                O problema é falta de identidade profissional. E é exatamente isso que a CedroLAB resolve.
              </p>
              <Button asChild withArrow>
                <a href="https://form.respondi.app/dbn6xbQI" target="_blank" rel="noopener noreferrer">Quero fazer parte</a>
              </Button>
            </div>
            <div>
              <Image 
                src="/lab-image.png" 
                alt="Leandro Carone — CedroLAB" 
                className="w-full h-auto max-w-[440px] mx-auto object-cover"
                width={480}
                height={600}
                priority
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cedro-navy text-cedro-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <SectionLabel>Isso te descreve?</SectionLabel>
          <h2 className="mb-10 max-w-[800px] text-cedro-white">Se você se reconhece aqui, a CedroLAB foi feita para você.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-5">
              <div className="p-8 border border-cedro-sage/10 bg-cedro-black">
                <h4 className="text-cedro-red mb-3">Você posta, mas não sabe o que está construindo</h4>
                <p className="text-[0.95rem] text-cedro-sage">Cria conteúdo sem estratégia, copia o que vê funcionar para outros, e sente que está falando para ninguém.</p>
              </div>
              <div className="p-8 border border-cedro-sage/10 bg-cedro-black">
                <h4 className="text-cedro-red mb-3">Cobra pouco e atende demais</h4>
                <p className="text-[0.95rem] text-cedro-sage">Agenda cheia, conta no vermelho. Não sabe quanto vale, tem medo de perder paciente se cobrar o que precisa.</p>
              </div>
              <div className="p-8 border border-cedro-sage/10 bg-cedro-black">
                <h4 className="text-cedro-red mb-3">Tem medo de se posicionar</h4>
                <p className="text-[0.95rem] text-cedro-sage">Sabe o que acredita mas não consegue dizer em público. Tem receio do conselho, dos colegas, do cancelamento.</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="p-8 border border-cedro-sage/10 bg-cedro-black">
                <h4 className="text-cedro-red mb-3">Saiu da faculdade sem direção</h4>
                <p className="text-[0.95rem] text-cedro-sage">Formou, mas ninguém te ensinou a ser psicólogo no mundo real. Não sabe como montar consultório, atrair pacientes ou se diferenciar.</p>
              </div>
              <div className="p-8 border border-cedro-sage/10 bg-cedro-black">
                <h4 className="text-cedro-red mb-3">Compara sua prática com a dos outros</h4>
                <p className="text-[0.95rem] text-cedro-sage">Vê colegas crescendo e fica se perguntando o que falta. Insegurança constante sobre a própria competência.</p>
              </div>
              <div className="p-8 border border-cedro-sage/10 bg-cedro-black">
                <h4 className="text-cedro-red mb-3">Quer integrar fé e profissão, mas não sabe como</h4>
                <p className="text-[0.95rem] text-cedro-sage">Sente que precisa esconder sua cosmovisão ou não sabe como posicioná-la com seriedade e sem parecer amador.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cedro-black text-cedro-white">
        <div className="max-w-[800px] mx-auto px-8">
          <SectionLabel>A solução</SectionLabel>
          <h2 className="mb-6 text-cedro-white">A CedroLAB resolve pela raiz: identidade profissional.</h2>
          <Divider />
          <p className="mb-5 text-cedro-sage">Quando você sabe quem é como profissional, tudo se organiza: o que falar, como cobrar, para quem criar, onde investir tempo e energia.</p>
          <p className="mb-5 text-cedro-sage">A CedroLAB é uma mentoria com Leandro Carone e Gabriel Ferreira para psicólogos que querem construir uma prática clínica séria, sustentável e coerente com seus valores.</p>
          <p className="text-cedro-sage">Não é uma plataforma com conteúdos gravados. É mentoria com acompanhamento real e individualizado.</p>
        </div>
      </section>

      <section className="py-24 bg-cedro-navy text-cedro-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <SectionLabel>Programa Eixo</SectionLabel>
          <h2 className="mb-4 text-cedro-white">Identidade profissional para psicólogos.</h2>
          <p className="text-cedro-sage mb-12">O programa central da mentoria. Encontros + supervisões clínicas + comunidade.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Mindset e posicionamento', desc: 'Clareza sobre quem você é como profissional, como comunicar isso e para quem. Sair da paralisia e começar a construir autoridade real.' },
              { num: '02', title: 'Vitrine digital', desc: 'Bio, foto, destaques, fixados e mais. Tudo para gerar percepção do valor que você já tem.' },
              { num: '03', title: 'Prática e precificação', desc: 'Quanto cobrar, como estruturar pacotes, equipamentos essenciais, tráfego, ferramentas. O que você precisa e o que é queimar dinheiro.' },
              { num: '04', title: 'Supervisão clínica', desc: 'Supervisões semanais em grupo. Casos reais, orientação prática, amadurecimento clínico acompanhado.' },
            ].map((item) => (
              <div key={item.num} className="p-8 border border-cedro-sage/10 transition-all hover:border-cedro-red hover:-translate-y-1 bg-cedro-black">
                <div className="font-serif text-4xl text-cedro-red/50 mb-2">{item.num}</div>
                <h4 className="mb-3 text-cedro-white">{item.title}</h4>
                <p className="text-[0.95rem] text-cedro-sage">{item.desc}</p>
              </div>
            ))}
            <div className="p-8 border border-cedro-sage/10 transition-all hover:border-cedro-red hover:-translate-y-1 bg-cedro-black">
              <div className="font-serif text-4xl text-cedro-red/20 mb-2">05</div>
              <h4 className="mb-3 text-cedro-red">Resultado</h4>
              <p className="text-[0.95rem] text-cedro-sage">Você sai do CedroLAB sabendo quem é, o que faz, para quem faz e com uma prática que funciona.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cedro-black text-cedro-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <SectionLabel>Quem conduz</SectionLabel>
          <h2 className="mb-12 text-cedro-white">A mentoria é conduzida por quem já construiu na prática.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Leandro */}
            <div className="grid grid-cols-[160px_1fr] gap-8 items-start">
              <div>
                <Image
                  src="/leandro-lab.jpeg"
                  alt="Leandro Carone"
                  width={320}
                  height={420}
                  className="w-full h-auto object-cover"
                  priority
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="mb-1 text-cedro-white">Leandro Carone</h3>
                <p className="text-xs font-bold tracking-widest uppercase text-cedro-red mb-4">Psicólogo Clínico · Fundador</p>
                <p className="mb-4 text-cedro-sage text-[0.95rem]">Psicólogo clínico com mais de 6.000 horas de atendimento. Pós-graduado em Análise Existencial e Logoterapia Frankliana. Fundador da Clínica Cedro, uma equipe de 7 psicólogos supervisionados semanalmente.</p>
                <p className="mb-4 text-cedro-sage text-[0.95rem]">Enfrenta o conselho de psicologia por se posicionar como cristão. Construiu tudo do zero, sem curso de marketing, sem agência. Na prática, errando e corrigindo.</p>
                <p className="text-cedro-white italic text-[0.95rem]">&ldquo;A mentoria CedroLAB é tudo o que eu gostaria de ter tido quando comecei.&rdquo;</p>
              </div>
            </div>

            {/* Gabriel */}
            <div className="grid grid-cols-[160px_1fr] gap-8 items-start">
              <div className="bg-cedro-navy border border-cedro-sage/10 aspect-[4/5] flex items-center justify-center">
                <p className="text-cedro-sage/40 text-sm text-center px-4">Foto em breve</p>
              </div>
              <div>
                <h3 className="mb-1 text-cedro-white">Gabriel Ferreira</h3>
                <p className="text-xs font-bold tracking-widest uppercase text-cedro-red mb-4">Engenheiro · Sócio</p>
                <p className="mb-4 text-cedro-sage text-[0.95rem]">Engenheiro agrícola formado pela Unicamp. Sócio da Cedro e principal responsável pelas vendas e gestão financeira da clínica.</p>
                <p className="text-cedro-sage text-[0.95rem]">Atua também como gestor financeiro da clínica de estética da esposa, trazendo para a CedroLAB uma visão prática de gestão, crescimento e sustentabilidade de negócios.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-cedro-navy text-cedro-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="mb-12 text-cedro-white">A Mentoria CedroLAB não é para qualquer psicólogo.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-cedro-red mb-4">É para você se:</h3>
              <ul className="flex flex-col">
                {[
                  'Quer construir uma prática séria e sustentável, não um hobby',
                  'Está disposto a se posicionar com clareza, mesmo que dê medo',
                  'Quer orientação prática de quem já fez, não teoria de quem só ensina',
                  'Entende que vai exigir trabalho, constância e humildade'
                ].map((item, i) => (
                  <li key={i} className="py-3 border-b border-cedro-sage/10 text-[0.95rem] flex items-start gap-3">
                    <span className="text-cedro-red font-bold shrink-0">●</span>
                    <span className="text-cedro-sage">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-cedro-white mb-4">Não é para você se:</h3>
              <ul className="flex flex-col">
                {[
                  'Quer fórmula mágica para ganhar dinheiro rápido',
                  'Não está disposto a estudar, produzir e se expor',
                  'Quer alguém que valide tudo sem te confrontar'
                ].map((item, i) => (
                  <li key={i} className="py-3 border-b border-cedro-sage/10 text-[0.95rem] flex items-start gap-3">
                    <span className="text-cedro-sage/50 font-bold shrink-0">—</span>
                    <span className="text-cedro-sage">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cedro-black text-center text-cedro-white">
        <div className="max-w-[800px] mx-auto px-8">
          <h2 className="text-cedro-white mb-6">Vagas limitadas. Seleção individual. Não vou ajudar um psicólogo ruim.</h2>
          <p className="text-cedro-sage mb-2 text-lg">A mentoria é restrita para manter qualidade e acompanhamento real.</p>
          <p className="text-cedro-sage mb-10">Preencha o formulário de aplicação. Se houver fit, entramos em contato.</p>
          <Button asChild withArrow>
            <a href="https://form.respondi.app/dbn6xbQI" target="_blank" rel="noopener noreferrer">Aplicar para o CedroLAB</a>
          </Button>
          <p className="mt-8 text-sm text-cedro-sage/60">
            Também oferecemos supervisão clínica para psicólogos.{' '}
            <a href="https://form.respondi.app/rdiSvqJY" target="_blank" rel="noopener noreferrer" className="text-cedro-red underline hover:text-cedro-red-hover">
              Link supervisão
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
