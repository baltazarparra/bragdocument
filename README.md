# 📄 Bragdocument

**Bragdocument** is a minimal webapp that renders Brag Documents from the Bragfy Telegram bot.

Built with **Next.js 14** using the App Router and powered by the **Vibe Coding** methodology.

---

## ✨ Features

- Static viewer for public brag documents
- Landing page with product info
- Receives brag data via API from Telegram bot
- Notifies the bot when the page is ready
- Secure, fast, and zero-database

---

## 📦 Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Markdown rendering with sanitation
- File-based storage via `/brags/*.json`
- Deployed on Vercel

---

## 🧠 Brag Document Flow

1. A user interacts with the Bragfy bot on Telegram
2. The bot generates a Brag Document in Markdown
3. It sends a `POST` to `/api/build` with the content
4. The webapp saves it as `/brags/{userId}.json`
5. The user can view their page at `/user/{userId}`
6. The webapp sends a `POST /api/link-ready` to notify the bot
7. The bot sends the link to the user

---

## 🚀 Project Structure

```
/app
  page.tsx                   ← Landing page
  /user/[id]/page.tsx        ← Brag viewer
  /api/build/route.ts        ← Accepts JSON brag from bot
  /api/link-ready/route.ts   ← Notifies bot via webhook
/brags
  123456789.json             ← Brag files by Telegram userId
/public
  favicon.ico
  social-banner.png
```

---

## 📥 API Endpoints

### `POST /api/build`

Receive a Brag Document.

**Body:**

```json
{
  "userId": 123456789,
  "markdown": "# My week",
  "period": "7d",
  "timestamp": "2025-03-29T12:00:00Z"
}
```

---

### `POST /api/link-ready`

Notify the bot that a link is ready.

**Body:**

```json
{
  "userId": 123456789,
  "url": "https://bragdocument.vercel.app/user/123456789"
}
```

---

## 📄 License

MIT
