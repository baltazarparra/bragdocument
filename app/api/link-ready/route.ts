import { NextRequest, NextResponse } from "next/server";

// URL do webhook do bot do Telegram (deve ser configurada via variável de ambiente na produção)
const BOT_WEBHOOK_URL =
  process.env.BOT_WEBHOOK_URL || "https://api.example.com/bot/webhook";

export async function POST(request: NextRequest) {
  try {
    // Receber os dados
    const body = await request.json();

    // Validar os dados recebidos
    if (
      !body ||
      typeof body.userId !== "number" ||
      typeof body.url !== "string"
    ) {
      return NextResponse.json(
        { success: false, error: "Dados inválidos" },
        { status: 400 }
      );
    }

    const { userId, url } = body;

    // Enviar a notificação para o webhook do bot
    const response = await fetch(BOT_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId,
        url,
        event: "link_ready"
      })
    });

    if (!response.ok) {
      throw new Error(`Falha ao notificar o bot: ${response.statusText}`);
    }

    // Retornar resposta de sucesso
    return NextResponse.json({
      success: true,
      message: "Bot notificado com sucesso"
    });
  } catch (error) {
    console.error("Erro ao notificar o bot:", error);

    return NextResponse.json(
      { success: false, error: "Erro ao processar a requisição" },
      { status: 500 }
    );
  }
}
