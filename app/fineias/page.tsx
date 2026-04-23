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
      <section className="pt-32 pb-20 bg-cedro-black relative overflow-hidden"
        style={{ backgroundImage: 'url(/fineias-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center right' }}>
        {/* Vignette barroca */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 50%, transparent 25%, rgba(10,4,1,0.75) 100%)' }} />
        <div className="max-w-[800px] mx-auto px-5 md:px-8 relative z-10">
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

      {/* CTA FINAL */}
      <section className="py-24 bg-cedro-black text-center text-cedro-white relative overflow-hidden" style={textureStyle}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 70% 50%, transparent 30%, rgba(10,4,1,0.6) 100%)' }} />
        <div className="max-w-[700px] mx-auto px-8 relative z-10">
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
