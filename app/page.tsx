import { AnimatedSection } from "./components/AnimatedSection";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-7xl px-6 py-6 flex justify-between items-center">
        <div className="font-medium text-lg">Bragdocument</div>
        <Link
          href="https://t.me/bragfybot"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:underline transition-all"
        >
          Iniciar agora →
        </Link>
      </header>

      {/* Hero Section */}
      <AnimatedSection
        className="w-full max-w-4xl px-6 pt-24 pb-32 text-center"
        delay={0}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-8 leading-tight">
          Registre suas conquistas profissionais com elegância
        </h1>
        <p className="text-xl text-[var(--foreground)]/70 max-w-2xl mx-auto mb-14">
          Bragdocument é a maneira mais rápida e elegante de criar e
          compartilhar seus documentos de conquistas profissionais.
        </p>
        <Link
          href="https://t.me/bragfybot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[var(--foreground)] text-[var(--background)] rounded-full px-8 py-4 font-medium hover:opacity-90 transition-all hover:scale-[1.01] active:scale-[0.99]"
        >
          Iniciar com Telegram
        </Link>
      </AnimatedSection>

      {/* Features Section */}
      <section className="w-full max-w-5xl px-6 py-24 border-t border-[var(--foreground)]/10">
        <div className="grid md:grid-cols-3 gap-12">
          <AnimatedSection delay={100}>
            <h2 className="text-xl font-medium mb-4">
              O que é um Brag Document?
            </h2>
            <p className="text-[var(--foreground)]/70">
              Um registro estruturado de suas realizações profissionais que
              evidencia seu impacto e valor. Essencial para avaliações,
              promoções e portfólios.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <h2 className="text-xl font-medium mb-4">
              Como isso ajuda profissionais
            </h2>
            <p className="text-[var(--foreground)]/70">
              Facilita conversas sobre crescimento profissional, fornece
              evidências concretas de impacto e cria um histórico claro de suas
              contribuições.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <h2 className="text-xl font-medium mb-4">Privado e acessível</h2>
            <p className="text-[var(--foreground)]/70">
              Seus documentos são privados por padrão. Compartilhe apenas quando
              estiver pronto, com quem você quiser, sem necessidade de
              cadastros.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full max-w-4xl px-6 py-24 text-center border-t border-[var(--foreground)]/10">
        <h2 className="text-3xl font-medium mb-16">
          Tão simples quanto conversar
        </h2>
        <div className="flex flex-col gap-12 items-center">
          <AnimatedSection className="max-w-md" delay={150} withTranslate>
            <div className="text-lg font-medium mb-3">
              1. Converse com o bot
            </div>
            <p className="text-[var(--foreground)]/70">
              Inicie uma conversa com nosso bot no Telegram e siga as instruções
              simples para estruturar seu documento.
            </p>
          </AnimatedSection>
          <AnimatedSection className="max-w-md" delay={300} withTranslate>
            <div className="text-lg font-medium mb-3">
              2. Receba seu documento
            </div>
            <p className="text-[var(--foreground)]/70">
              Nosso sistema organiza suas contribuições em um formato elegante e
              profissional instantaneamente.
            </p>
          </AnimatedSection>
          <AnimatedSection className="max-w-md" delay={450} withTranslate>
            <div className="text-lg font-medium mb-3">
              3. Compartilhe quando quiser
            </div>
            <p className="text-[var(--foreground)]/70">
              Receba um link único para seu documento que você pode compartilhar
              com recrutadores, gestores ou adicionar ao seu portfólio.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-4xl px-6 py-24 text-center border-t border-[var(--foreground)]/10">
        <h2 className="text-3xl font-medium mb-6">Comece agora mesmo</h2>
        <p className="text-xl text-[var(--foreground)]/70 max-w-2xl mx-auto mb-12">
          Não perca mais tempo com documentos complexos. Crie seu Brag Document
          em minutos.
        </p>
        <Link
          href="https://t.me/bragfybot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[var(--foreground)] text-[var(--background)] rounded-full px-8 py-4 font-medium hover:opacity-90 transition-all hover:scale-[1.01] active:scale-[0.99]"
        >
          Iniciar com Telegram
        </Link>
      </section>

      {/* Footer */}
      <footer className="w-full px-6 py-12 border-t border-[var(--foreground)]/10 text-center text-sm text-[var(--foreground)]/50">
        <p>
          © {new Date().getFullYear()} Bragdocument. Todos os direitos
          reservados.
        </p>
      </footer>
    </main>
  );
}
