# 🧠 Technical Plan — Bragdocument (Webapp Viewer for Bragfy)

This document outlines the implementation strategy for the `bragdocument` webapp, built entirely using **Cursor + Claude 3.7** (Craudinho), following the **Vibe Coding** methodology.

We prioritize:

- **UX**: User Experience
- **DX**: Developer Experience
- **AX**: Assistant Experience

---

## 🎯 Goals

1. Serve a **clean institutional landing page**
2. Host and render **static brag document pages** for users
3. Integrate with the Bragfy Telegram bot to receive and publish brag documents via API

---

## 🧱 Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Vercel deployment**
- No authentication, no database
- Brag documents stored as `.json` files in `/brags`
- Markdown rendered with sanitation

---

## 🔄 Integration Flow

1. The user types “gerar link” in the Telegram bot
2. The bot generates the Brag Document (in Markdown)
3. The bot sends a `POST /api/build` request to the webapp with:
   - `userId` (Telegram)
   - `markdown`
   - `period` (1d, 7d, 30d)
   - `timestamp`
4. The webapp saves this as `/brags/{userId}.json`
5. The page `/user/{userId}` renders it statically
6. The webapp sends a `POST /api/link-ready` to the bot:
   - `{ userId, url }`
7. The bot replies to the user with:
   `Seu Brag Document está pronto! ✨ 🔗 {url}`

---

## ⚙️ Rendering Strategy

**Strategy C: File-based rebuild on demand**

- `/api/build` writes the file to disk
- `/user/[id]` loads the file dynamically
- No ISR or SSG needed
- Extremely simple and reliable

---

## 🗂️ File Structure

```
/app
  page.tsx                 ← Landing page
  /user/[id]/page.tsx      ← Brag page
  /api/build/route.ts      ← Bot sends Brag Document
  /api/link-ready/route.ts ← Notify bot when ready
/brags
  123456789.json           ← Brag document by user
/public
  favicon.ico
  social-banner.png
```

---

## ✅ Development Steps

- [ ] Scaffold Next.js 14 project with TypeScript
- [ ] Build landing page at `/`
- [ ] Implement `/api/build` to receive brag data from the bot
- [ ] Save brag JSON in `/brags/{userId}.json`
- [ ] Render brag pages from JSON in `/user/[id]`
- [ ] Sanitize and render markdown
- [ ] Add `/api/link-ready` to notify the bot
- [ ] Test full flow locally and on Vercel

---

## 🧠 Craudinho Guidelines

- Do not use Server Actions
- Do not use a database
- Read/write brag files using `fs/promises`
- Keep code modular and minimal
- Markdown must be sanitized
- Follow this PLAN strictly — do not invent behavior

---

## 🔐 Security

- Only the bot can POST to `/api/build`
- No private user data
- Markdown is sanitized to avoid XSS

---

## 🌍 Deployment

- Deployed on Vercel
- Brag pages live at:  
  `https://bragdocument.vercel.app/user/{userId}`
