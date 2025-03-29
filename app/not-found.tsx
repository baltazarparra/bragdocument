export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-slate-300 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-slate-700 mb-4">
          Brag Document não encontrado
        </h2>
        <p className="text-slate-600 mb-8">
          O documento que você está procurando não existe ou foi removido.
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Voltar para a página inicial
        </a>
      </div>
    </main>
  );
}
