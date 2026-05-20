import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SectionLabel } from '@/components/ui/section-label';
import { Divider } from '@/components/ui/divider';

export default function FineiasPage() {
  const encounters = [
    { num: '01', title: 'Identidade, vergonha e propósito', desc: 'Você não é o que fez, você é quem Deus diz que você é. Mudança do eixo narrativo. A mentalidade de Finéias.' },
    { num: '02', title: 'Mentiras que alimentam o ciclo', desc: 'Todo vício é sustentado por crenças falsas. Mentiras sobre Deus, sobre si, sobre os outros.' },
    { num: '03', title: 'Vício não é apenas pecado: é um mecanismo', desc: 'A psicologia do vício. Três níveis: comportamento, emoção, espiritualidade.' },
    { num: '04', title: 'Gatilhos, hábitos e sistemas', desc: 'Mapear o ciclo pessoal de queda, conhecer seus pontos fracos.' },
    { num: '05', title: 'Desejo deformado: a pornotopia', desc: 'Quando o prazer vira prisão. Sistema dopaminérgico, fantasia vs. intimidade real.' },
    { num: '06', title: 'A mentalidade para construção de hábitos poderosos', desc: 'As 3 grandes barreiras: 0 dias, 1 mês, 3 meses. Resistência, resiliência e organização.' },
    { num: '07', title: 'Os 6 passos práticos', desc: 'Redimir o prazer, não rejeitá-lo. Protocolo e código de honra.' },
    { num: '08', title: 'Masculinidade redimida', desc: 'A psicologia do homem fraco. A virtude da fortaleza. O que é ser homem.' },
    { num: '09', title: 'Plano de guerra e cultura de verdade', desc: 'Liberdade exige estrutura. Protocolos, rotinas, vigilância e reafirmação da identidade.' },
    { num: '10', title: 'Vocação e envio', desc: 'Mentalidade redimida. O propósito de ser livre: liderar outros à liberdade.' },
  ];

  const textureStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
    backgroundSize: '300px 300px',
  };

  return (
    <div className="flex flex-col">

      {/* HERO */}
      <section className="min-h-svh flex items-end md:items-center pt-32 pb-12 md:pb-20 bg-cedro-black relative overflow-hidden">
        {/* Desktop bg */}
        <div
          className="hidden md:block absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'url(/fineias-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center right' }}
        />
        {/* Mobile bg */}
        <div
          className="block md:hidden absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'url(/fineias-bg-mobile.png)', backgroundSize: 'cover', backgroundPosition: 'center top' }}
        />
        {/* Mobile gradient (cedro-black com tom quente) para legibilidade */}
        <div className="md:hidden absolute inset-0 pointer-events-none bg-gradient-to-t from-cedro-black via-cedro-black/85 via-50% to-transparent" />
        {/* Vignette barroca */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 50%, transparent 25%, rgba(10,4,1,0.75) 100%)' }} />
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10 w-full">
          <div className="max-w-[640px]">
            <Image
              src="/fineias-logo.png"
              alt="Mentoria Fineias"
              width={948}
              height={137}
              className="w-auto mb-10 object-contain"
              style={{ height: '70px' }}
              priority
            />
            <SectionLabel>Mentoria Fineias</SectionLabel>
            <h1 className="mb-6 text-cedro-white">
              Você prometeu que seria a última vez. Mas caiu de novo.
            </h1>
            <p className="text-lg text-cedro-sage mb-10">
              A Sociedade Finéias é uma mentoria em grupo para homens cristãos que estão prontos para quebrar o ciclo do vício em pornografia. 10 encontros. 12 homens. Sem gravação. Tudo acontece ao vivo.
            </p>
            <Button asChild withArrow>
              <a href="https://form.respondi.app/Qr9kjWMI" target="_blank" rel="noopener noreferrer">Quero sair desse ciclo</a>
            </Button>
          </div>
        </div>
      </section>

      {/* O CICLO */}
      <section className="py-24 bg-cedro-navy text-cedro-white relative overflow-hidden" style={textureStyle}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
          <h2 className="mb-12 text-cedro-white">O ciclo que você conhece bem demais.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            {[
              { title: 'Culpa, vergonha e medo', desc: 'Hábito silencioso e solitário que gera incongruência moral, vergonha sexual e medo constante de ser descoberto.' },
              { title: 'Depressão, ansiedade e autocrítica', desc: 'Sofrimento mental severo. Alta autocrítica, perfeccionismo, medo do fracasso e solidão.' },
              { title: 'Impactos físicos e sexuais', desc: 'Disfunção erétil, ejaculação precoce, dessensibilização, escalada para conteúdos cada vez mais extremos e insatisfação conjugal.' },
              { title: 'Alterações neurológicas', desc: 'O cérebro reage como o de um usuário de drogas. Querer cada vez mais. Diminuição do autocontrole, sistema dopaminérgico corrompido. Córtex pré-frontal atrofiado.' },
              { title: 'Distanciamento relacional', desc: 'Redução da capacidade de conexão afetiva. Distanciamento emocional e físico das pessoas que você ama.' },
              { title: 'O ciclo se retroalimenta', desc: 'Sentimentos negativos → consumo → alterações cerebrais → mais solidão → mais consumo. Você sabe disso. É hora de quebrar.' }
            ].map((symptom, i) => (
              <div key={i} className="p-8 bg-cedro-black border-l-4 border-cedro-red">
                <h4 className="font-sans text-base font-bold text-cedro-white mb-2">{symptom.title}</h4>
                <p className="text-sm text-cedro-sage">{symptom.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPOSTA */}
      <section className="py-24 bg-cedro-black text-cedro-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>A proposta</SectionLabel>
              <h2 className="mb-4 text-cedro-white">
                A Sociedade Finéias não é um grupo de apoio onde você fica repetindo que é viciado.
              </h2>
              <Divider />
              <p className="mb-4 text-cedro-sage">É uma mentoria de transformação onde você muda o eixo narrativo: da culpa para o chamado, do vício para a filiação.</p>
              <p className="text-cedro-sage"><strong className="text-cedro-white font-bold">Mentalidade Finéias:</strong> não é só resistir ao pecado. É odiar o que destrói a aliança e agir com zelo.</p>
            </div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 my-12">
                <div className="text-center p-8 border border-cedro-sage/10 bg-cedro-navy">
                  <div className="font-serif text-5xl font-bold text-cedro-red">10</div>
                  <p className="text-sm text-cedro-sage mt-2">Encontros online</p>
                </div>
                <div className="text-center p-8 border border-cedro-sage/10 bg-cedro-navy">
                  <div className="font-serif text-5xl font-bold text-cedro-red">12</div>
                  <p className="text-sm text-cedro-sage mt-2">Homens por turma</p>
                </div>
                <div className="text-center p-8 border border-cedro-sage/10 bg-cedro-navy">
                  <div className="font-serif text-5xl font-bold text-cedro-red">0</div>
                  <p className="text-sm text-cedro-sage mt-2">Gravações</p>
                </div>
              </div>
              <p className="text-sm text-cedro-sage text-center">Tudo é ao vivo, em tempo real, com aliança e confidencialidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA MEIO */}
      <section className="py-12 bg-cedro-black border-y border-cedro-red/30 text-center">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="text-lg text-cedro-white mb-6">Já sabe que precisa disso? Não precisa ler mais nada.</p>
          <Button asChild withArrow>
            <a href="https://form.respondi.app/Qr9kjWMI" target="_blank" rel="noopener noreferrer">Entrar na lista de espera</a>
          </Button>
        </div>
      </section>

      {/* 10 ENCONTROS */}
      <section className="py-24 bg-cedro-navy text-cedro-white relative overflow-hidden" style={textureStyle}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
          <SectionLabel>Os 10 encontros</SectionLabel>
          <h2 className="mb-8 text-cedro-white">A jornada completa.</h2>
          <div className="my-12">
            {encounters.map((encounter, i) => (
              <div key={i} className="grid grid-cols-[80px_1fr] gap-6 py-6 border-b border-cedro-sage/10">
                <div className="font-serif text-4xl text-cedro-red/60">{encounter.num}</div>
                <div>
                  <h4 className="font-sans text-base font-bold text-cedro-white mb-1">{encounter.title}</h4>
                  <p className="text-sm text-cedro-sage">{encounter.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-24 bg-cedro-black text-cedro-white relative overflow-hidden" style={textureStyle}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 40%, transparent 20%, rgba(10,4,1,0.7) 100%)' }} />
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
          <SectionLabel>Quem já passou por aqui</SectionLabel>
          <h2 className="mb-12 text-cedro-white">Homens que pararam de se esconder.</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Elias */}
            <div className="p-8 bg-cedro-navy border border-cedro-sage/10 border-l-[3px] border-l-cedro-red flex flex-col">
              <p className="text-cedro-sage text-[0.95rem] leading-relaxed mb-6 flex-1">
                &ldquo;Estava num momento muito conturbado do meu relacionamento e da vida espiritual, e o trabalho em grupo com o Leandro me ajudou a ganhar forças na caminhada e enxergar um caminho sólido. Compartilhar essa experiência com outros que estavam vivendo esse mesmo momento foi de grande ajuda nos períodos mais difíceis. Fiz amigos com quem até hoje posso me abrir, trocar experiências e orar junto.&rdquo;
              </p>
              <div className="pt-4 border-t border-cedro-sage/10">
                <p className="text-cedro-white font-bold text-sm">Elias</p>
                <p className="text-cedro-sage text-xs">36 anos</p>
              </div>
            </div>

            {/* Denis */}
            <div className="p-8 bg-cedro-navy border border-cedro-sage/10 border-l-[3px] border-l-cedro-red flex flex-col">
              <p className="text-cedro-sage text-[0.95rem] leading-relaxed mb-4 flex-1">
                &ldquo;Procurei ajuda em alguns lugares onde me sentisse seguro para me abrir e expor minha dificuldade na dependência de pornografia, depois de mais de 20 anos de consumo desse maldito vício. Foi então que descobri pelo Instagram o trabalho que o Leandro conduzia.&rdquo;
                <br /><br />
                &ldquo;Hoje tenho consciência, e sei bem como foi sombrio todo esse tempo que passei sem a ajuda de um profissional como o Leandro. Hoje vivo mais tranquilamente com a minha consciência, tenho paz no meu lar, e o meu desempenho profissional tem sido melhor por conta da ajuda que recebi. Recomendo a todos vocês que passam por esta dificuldade. Sua família merece.&rdquo;
              </p>
              <div className="pt-4 border-t border-cedro-sage/10">
                <p className="text-cedro-white font-bold text-sm">Denis</p>
                <p className="text-cedro-sage text-xs">45 anos, engenheiro mecânico</p>
              </div>
            </div>

            {/* Lucas */}
            <div className="p-8 bg-cedro-navy border border-cedro-sage/10 border-l-[3px] border-l-cedro-red flex flex-col">
              <p className="text-cedro-sage text-[0.95rem] leading-relaxed mb-4 flex-1">
                &ldquo;Passei por vários tipos de buscas para encontrar algo que me ajudasse a largar esse vício, e cheguei a pensar que não teria solução. Acabei fazendo parte dessa terapia em grupo com o Leandro, e mesmo sendo encontros EAD, me senti muito à vontade em ter um grupo com quem podia contar a qualquer momento.&rdquo;
                <br /><br />
                &ldquo;A forma didática e prática que o Leandro proporciona facilita muito o aprendizado para vencer e romper esse ciclo. Só tenho a agradecer pelas novas amizades, pelo fortalecimento prático, mental e espiritual.&rdquo;
              </p>
              <div className="pt-4 border-t border-cedro-sage/10">
                <p className="text-cedro-white font-bold text-sm">Lucas</p>
                <p className="text-cedro-sage text-xs">23 anos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTIMENTO E TURMA */}
      <section className="py-24 bg-cedro-navy text-cedro-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background: 'radial-gradient(ellipse at 80% 50%, rgba(209,61,29,0.25) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 relative z-10">
          <SectionLabel>Investimento e turma</SectionLabel>
          <h2 className="mb-12 text-cedro-white">O que está em jogo.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Card preço */}
            <div className="p-10 bg-cedro-black border border-cedro-red/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-cedro-red text-cedro-white text-xs font-bold tracking-[0.15em] uppercase px-3 py-1.5">
                Condição especial
              </div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-cedro-sage mb-4">Investimento</p>

              <p className="text-cedro-sage text-base mb-2">
                <span className="line-through opacity-70">De R$ 1.497</span>
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-cedro-sage text-lg">por</span>
                <span className="font-serif font-bold text-cedro-red leading-none" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}>
                  R$ 1.197
                </span>
              </div>
              <p className="text-cedro-sage text-sm leading-relaxed mb-2">à vista</p>
              <div className="w-12 h-[2px] bg-cedro-red my-6" />
              <p className="text-cedro-sage text-sm leading-relaxed">
                Acesso completo aos 10 encontros ao vivo. Sem gravação, sem upsell, sem mensalidade.
              </p>
            </div>

            {/* Card turma */}
            <div className="p-10 bg-cedro-black border border-cedro-sage/15 flex flex-col">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-cedro-sage mb-4">Próxima turma</p>
              <h3 className="text-cedro-white text-2xl font-bold mb-6 leading-tight">
                Começa quando fechar 12 homens.
              </h3>
              <p className="text-cedro-sage text-[0.95rem] leading-relaxed mb-4">
                Não trabalhamos com data marcada. A turma abre quando completa o grupo certo, porque o trabalho só funciona em grupo pequeno e comprometido.
              </p>
              <p className="text-cedro-sage text-[0.95rem] leading-relaxed mb-8">
                Você entra na lista, recebe o aviso quando fechar, e decide se entra ou não.
              </p>
              <div className="mt-auto pt-6 border-t border-cedro-sage/10 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="font-serif text-3xl font-bold text-cedro-red leading-none">12</div>
                  <p className="text-xs text-cedro-sage mt-2">Homens</p>
                </div>
                <div>
                  <div className="font-serif text-3xl font-bold text-cedro-red leading-none">10</div>
                  <p className="text-xs text-cedro-sage mt-2">Encontros</p>
                </div>
                <div>
                  <div className="font-serif text-3xl font-bold text-cedro-red leading-none">0</div>
                  <p className="text-xs text-cedro-sage mt-2">Gravações</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-cedro-black text-center text-cedro-white relative overflow-hidden" style={textureStyle}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 70% 50%, transparent 30%, rgba(10,4,1,0.6) 100%)' }} />
        <div className="max-w-[700px] mx-auto px-5 md:px-8 relative z-10">
          <h2 className="text-cedro-white mb-6">Quanto mais tempo no ciclo, mais difícil sair.</h2>
          <p className="text-cedro-sage my-6 text-lg">Cada turma é limitada a 12 homens. O grupo precisa ser pequeno para funcionar de verdade, com confiança, aliança e acompanhamento real.</p>
          <p className="text-cedro-sage mb-4">Você não precisa ter tudo resolvido para entrar. Precisa estar pronto para parar de se esconder.</p>
          <p className="text-[0.95rem] text-cedro-sage mb-10">Mande uma mensagem. A conversa é sigilosa.</p>
          <Button asChild withArrow>
            <a href="https://form.respondi.app/Qr9kjWMI" target="_blank" rel="noopener noreferrer">Quero participar da próxima turma</a>
          </Button>
        </div>
      </section>

    </div>
  );
}
