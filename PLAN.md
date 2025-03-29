# 🧠 Technical Plan — Bragdocument (Webapp Viewer for Bragfy)

Este documento descreve a estratégia de implementação para o webapp `bragdocument`, construído inteiramente usando **Cursor + Claude 3.7** (Craudinho), seguindo a metodologia **Vibe Coding**.

**Produção:** [https://bragdocument.vercel.app](https://bragdocument.vercel.app)

Priorizamos:

- **UX**: Experiência do Usuário
- **DX**: Experiência do Desenvolvedor
- **AX**: Experiência do Assistente

---

## 🎯 Objetivos

1. Servir uma **landing page institucional elegante e minimalista** (inspirada no resend.com)
2. Hospedar e renderizar **páginas estáticas de brag documents** para usuários
3. Integrar com o bot Bragfy do Telegram para receber e publicar brag documents via API

---

## 🧱 Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Fonte Inter** do Google Fonts
- **Vercel deployment**
- Sem autenticação, sem banco de dados
- Brag documents armazenados como arquivos `.json` em `/brags`
- Markdown renderizado com sanitização

---

## 🔄 Fluxo de Integração

1. O usuário digita "gerar link" no bot do Telegram
2. O bot gera o Brag Document (em Markdown)
3. O bot envia uma requisição `POST /api/build` para o webapp com:
   - `userId` (Telegram)
   - `markdown`
   - `period` (1d, 7d, 30d)
   - `timestamp`
4. O webapp salva isso como `/brags/{userId}.json`
5. A página `/user/{userId}` renderiza estaticamente
6. O webapp envia um `POST /api/link-ready` para o bot:
   - `{ userId, url }`
7. O bot responde ao usuário com:
   `Seu Brag Document está pronto! ✨ 🔗 {url}`

---

## ⚙️ Estratégia de Renderização

**Estratégia C: Reconstrução baseada em arquivos sob demanda**

- `/api/build` escreve o arquivo no disco
- `/user/[id]` carrega o arquivo dinamicamente
- Não é necessário ISR ou SSG
- Extremamente simples e confiável

---

## 🎨 Design Atual

- Landing page minimalista e elegante inspirada no [resend.com](https://resend.com)
- Tema claro/escuro baseado na preferência do sistema
- Animações sutis para melhorar a experiência do usuário
- Fonte Inter do Google para tipografia limpa e legível
- Layout centrado com espaçamento amplo
- CTA principal direcionando para o bot do Telegram

---

## 🗂️ Estrutura de Arquivos Atual

```
/app
  globals.css                ← Estilos globais
  layout.tsx                 ← Layout com fonte Inter
  page.tsx                   ← Landing page elegante
  /user/[id]/page.tsx        ← Página do Brag
  /api/build/route.ts        ← Bot envia Brag Document
  /api/link-ready/route.ts   ← Notifica o bot quando pronto
/lib
  bragUtils.ts               ← Utilitários para brags
/public
  /brags
    123456789.json           ← Brag document por usuário
  favicon.ico
  social-banner.png
```

---

## ✅ Status Atual

- [x] Scaffold do projeto Next.js 14 com TypeScript
- [x] Landing page redesenhada com estética minimalista inspirada no resend.com
- [x] Landing page totalmente responsiva com animações sutis
- [x] Estilos globais com suporte a tema claro/escuro
- [x] Implantação na Vercel
- [x] Estrutura de arquivos organizada para o App Router
- [ ] Implementar `/api/build` para receber dados de brag do bot
- [ ] Salvar JSON de brag em `/brags/{userId}.json`
- [ ] Renderizar páginas de brag a partir de JSON em `/user/[id]`
- [ ] Sanitizar e renderizar markdown
- [ ] Adicionar `/api/link-ready` para notificar o bot
- [ ] Testar fluxo completo localmente e na Vercel

---

## 🧠 Diretrizes Craudinho

- Não usar Server Actions
- Não usar banco de dados
- Ler/escrever arquivos de brag usando `fs/promises`
- Manter código modular e mínimo
- Markdown deve ser sanitizado
- Seguir este PLANO estritamente — não inventar comportamento

---

## 🔐 Segurança

- Apenas o bot pode fazer POST para `/api/build`
- Sem dados privados de usuário
- Markdown é sanitizado para evitar XSS

---

## 🌍 Deployment

- Implantado na Vercel
- Páginas de brag disponíveis em:  
  `https://bragdocument.vercel.app/user/{userId}`
