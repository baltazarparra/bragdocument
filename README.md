# 📄 Bragdocument

**Bragdocument** é uma aplicação web minimalista que renderiza Brag Documents do bot Bragfy para Telegram.

Construído com **Next.js 14** utilizando o App Router e seguindo a metodologia **Vibe Coding**.

---

## ✨ Funcionalidades

- Visualizador estático para brag documents públicos
- Página inicial com informações do produto
- Recebe dados de brag via API do bot do Telegram
- Notifica o bot quando a página está pronta
- Seguro, rápido e sem banco de dados

---

## 📦 Stack Tecnológica

- Next.js 14 (App Router)
- TypeScript
- Renderização de Markdown com sanitização
- Armazenamento baseado em arquivos via `/public/brags/*.json`
- Implantado na Vercel

---

## 🧠 Fluxo do Brag Document

1. Um usuário interage com o bot Bragfy no Telegram
2. O bot gera um Brag Document em Markdown
3. Ele envia um `POST` para `/api/build` com o conteúdo
4. A aplicação web salva como `/public/brags/{userId}.json`
5. O usuário pode visualizar sua página em `/user/{userId}`
6. A aplicação web envia um `POST /api/link-ready` para notificar o bot
7. O bot envia o link para o usuário

---

## 🚀 Estrutura do Projeto

```
/app
  page.tsx                   ← Página inicial
  not-found.tsx              ← Página 404 personalizada
  /user/[id]/page.tsx        ← Visualizador de Brag
  /api/build/route.ts        ← Aceita JSON brag do bot
  /api/link-ready/route.ts   ← Notifica o bot via webhook
/lib
  bragUtils.ts               ← Utilitários para manipulação de brags
/public
  /brags
    123456789.json           ← Arquivos Brag por userId do Telegram
```

---

## 📥 Endpoints da API

### `POST /api/build`

Recebe um Brag Document.

**Corpo:**

```json
{
  "userId": 123456789,
  "markdown": "# Minha semana",
  "period": "7d",
  "timestamp": "2025-03-29T12:00:00Z"
}
```

---

### `POST /api/link-ready`

Notifica o bot que um link está pronto.

**Corpo:**

```json
{
  "userId": 123456789,
  "url": "https://bragdocument.vercel.app/user/123456789"
}
```

---

## 🚀 Como executar

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Construir para produção
npm run build

# Executar em modo de produção
npm start
```

---

## 📄 Licença

MIT
