import { notFound } from "next/navigation";
import { loadBragDocument, sanitizeMarkdown } from "@/lib/bragUtils";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function BragDocumentPage({ params }: PageProps) {
  const userId = parseInt(params.id, 10);

  // Verificar se o ID é válido
  if (isNaN(userId)) {
    notFound();
  }

  // Carregar o documento brag
  const bragDoc = await loadBragDocument(userId);

  // Se não encontrar o documento, mostrar a página 404
  if (!bragDoc) {
    notFound();
  }

  // Sanitizar o markdown e convertê-lo em HTML
  const sanitizedHtml = sanitizeMarkdown(bragDoc.markdown);

  // Formatação da data e período
  const displayDate = bragDoc.timestamp
    ? new Date(bragDoc.timestamp).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      })
    : "";

  const periodMap: Record<string, string> = {
    "1d": "Diário",
    "7d": "Semanal",
    "30d": "Mensal",
    "90d": "Trimestral",
    "180d": "Semestral",
    "365d": "Anual"
  };

  const periodName = bragDoc.period
    ? periodMap[bragDoc.period] || bragDoc.period
    : "";

  return (
    <main className="min-h-screen bg-slate-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-2xl font-bold text-slate-900">
                Brag Document
                {periodName && (
                  <span className="ml-2 text-lg text-slate-600">
                    ({periodName})
                  </span>
                )}
              </h1>
              {displayDate && (
                <div className="text-sm text-slate-500">{displayDate}</div>
              )}
            </div>
            <div className="text-sm text-slate-500">ID: {userId}</div>
          </div>

          <div className="p-6">
            <div
              className="prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
            />
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-200 text-center">
            <a
              href="/"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              ← Voltar para a página inicial
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
