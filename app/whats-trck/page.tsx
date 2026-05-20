export const metadata = {
  title: 'Redirecionando para o WhatsApp',
  robots: {
    index: false,
    follow: false,
  },
};

export default function WhatsTrackingPage() {
  return (
    <section className="min-h-svh flex items-center justify-center bg-[#f8f4ec] px-5 pt-24 pb-16">
      <div className="text-center max-w-[560px]">
        <div className="mx-auto mb-8 relative h-20 w-20">
          <div className="absolute inset-0 rounded-full border border-cedro-red/20" />
          <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-cedro-red border-r-cedro-red animate-spin" />
          <div className="absolute inset-6 rounded-full bg-cedro-red/10" />
          <div className="absolute inset-[1.85rem] rounded-full bg-cedro-red" />
        </div>

        <p className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-cedro-red mb-5">
          WhatsApp
        </p>
        <h1 className="text-cedro-navy mb-5">
          Aguarde, estamos te redirecionando para o Whatsapp
        </h1>
        <p className="text-cedro-ink/65">
          Sua conversa será aberta em instantes.
        </p>
      </div>
    </section>
  );
}
