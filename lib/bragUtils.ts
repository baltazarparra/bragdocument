import { marked } from "marked";
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import fs from "fs/promises";
import path from "path";

// Configuração para sanitizar o HTML do markdown
const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

export interface BragDocument {
  userId: number;
  markdown: string;
  period?: string;
  timestamp?: string;
}

/**
 * Sanitiza o markdown e converte para HTML seguro
 */
export function sanitizeMarkdown(markdown: string): string {
  // Converte markdown para HTML
  const rawHtml = marked.parse(markdown);

  // Sanitiza o HTML para prevenir XSS
  return DOMPurify.sanitize(rawHtml, {
    ALLOWED_TAGS: [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p",
      "a",
      "ul",
      "ol",
      "li",
      "blockquote",
      "code",
      "pre",
      "strong",
      "em",
      "del",
      "hr",
      "br",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td"
    ],
    ALLOWED_ATTR: ["href", "target", "rel", "class"]
  });
}

/**
 * Salva o documento de brag como um arquivo JSON
 */
export async function saveBragDocument(
  userId: number,
  markdown: string,
  period?: string,
  timestamp?: string
): Promise<void> {
  const bragDir = path.join(process.cwd(), "public", "brags");

  // Garantir que o diretório exista
  try {
    await fs.access(bragDir);
  } catch (error) {
    await fs.mkdir(bragDir, { recursive: true });
  }

  const filePath = path.join(bragDir, `${userId}.json`);
  const data: BragDocument = {
    userId,
    markdown,
    period,
    timestamp: timestamp || new Date().toISOString()
  };

  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}

/**
 * Carrega um documento de brag do sistema de arquivos
 */
export async function loadBragDocument(
  userId: number
): Promise<BragDocument | null> {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "brags",
      `${userId}.json`
    );
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data) as BragDocument;
  } catch (error) {
    return null;
  }
}
