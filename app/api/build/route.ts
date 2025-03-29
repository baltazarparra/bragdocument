import { NextRequest, NextResponse } from "next/server";
import { saveBragDocument } from "@/lib/bragUtils";

export async function POST(request: NextRequest) {
  try {
    // Receber os dados do bot
    const body = await request.json();

    // Validar os dados recebidos
    if (
      !body ||
      typeof body.userId !== "number" ||
      typeof body.markdown !== "string"
    ) {
      return NextResponse.json(
        { success: false, error: "Dados inválidos" },
        { status: 400 }
      );
    }

    const { userId, markdown, period, timestamp } = body;

    // Salvar o documento brag
    await saveBragDocument(userId, markdown, period, timestamp);

    // Montar URL completa do brag document
    const host = request.headers.get("host") || "";
    const protocol = host.includes("localhost") ? "http" : "https";
    const url = `${protocol}://${host}/user/${userId}`;

    // Retornar resposta de sucesso
    return NextResponse.json({
      success: true,
      url,
      message: "Brag Document foi criado com sucesso"
    });
  } catch (error) {
    console.error("Erro ao salvar o Brag Document:", error);

    return NextResponse.json(
      { success: false, error: "Erro ao processar a requisição" },
      { status: 500 }
    );
  }
}
