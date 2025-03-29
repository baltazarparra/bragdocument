export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              📄 Bragdocument
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-8">
              A maneira mais fácil de registrar e compartilhar suas conquistas
              profissionais
            </p>
            <a
              href="https://t.me/bragfy_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Começar com o Telegram Bot
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-3 text-slate-900">
                ✨ Fácil de usar
              </h2>
              <p className="text-slate-700">
                Interaja com o bot do Telegram e obtenha seu Brag Document
                pronto para compartilhar em segundos.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-3 text-slate-900">
                🔒 Privado
              </h2>
              <p className="text-slate-700">
                Você controla quem pode ver suas realizações, sem necessidade de
                conta ou login.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-3 text-slate-900">
                🚀 Compartilhável
              </h2>
              <p className="text-slate-700">
                Links permanentes para seus documentos, perfeito para
                compartilhar com colegas ou gestores.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">
              O que é um Brag Document?
            </h2>
            <p className="text-slate-700 mb-4">
              Um Brag Document é um registro de suas conquistas profissionais
              que você pode compartilhar com seu gestor, colegas ou incluir em
              seu portfólio. É uma ótima maneira de acompanhar seu progresso e
              garantir que suas contribuições sejam reconhecidas.
            </p>
            <p className="text-slate-700">
              Com o Bragfy, você pode facilmente criar e manter seus Brag
              Documents através de um bot do Telegram, sem precisar se preocupar
              com formatação ou armazenamento.
            </p>
          </div>

          <footer className="text-center text-slate-500 text-sm">
            <p>
              © {new Date().getFullYear()} Bragdocument. Todos os direitos
              reservados.
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
