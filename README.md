# ThinkLab — сайт

Особистий проєкт [Oleksiy Matsuka](https://matsuka.online) з каталогом шаблонів мислення. Next.js 15 + Tailwind v4 + TypeScript.

## Quick start

```bash
cd 06_Site/site
cp .env.example .env.local
# Заповни FORMSPREE_ID, OPENAI_API_KEY, NEXT_PUBLIC_PLAUSIBLE_DOMAIN
npm install
npm run dev
```

Відкриється `http://localhost:3000`.

## Structure

```
app/
  page.tsx              — Home (hero + 10 core methods + early access)
  methods/              — Каталог + сторінка методу
  bot/                  — Бот-демо
  about/                — Про проєкт (з ім'ям)
  api/
    bot/route.ts        — OpenAI streaming proxy
    subscribe/route.ts  — Formspree proxy
components/
  Header, Footer, EmailForm, MethodCard, CopyButton
lib/
  methods.ts            — 40 методів (назви, категорії, tldr, час)
  method-details.ts     — Детальні шаблони для 10 core методів
```

## Core 10 методів з повними шаблонами

1. First Principles
2. 5 Whys
3. Pre-Mortem
4. 10-10-10
5. Eisenhower Matrix
6. OODA Loop
7. DECIDE
8. Inversion
9. Feynman Technique
10. SCAMPER

Решта 30 методів — мають короткий огляд (tldr). Додаватиму деталі за пріоритетом трафіку на сторінки.

## Deploy

### Vercel (рекомендується — підтримує бот API і SSR)

```bash
npx vercel link
npx vercel --prod
```

Встанови env vars у Vercel dashboard:
- `FORMSPREE_ID`
- `OPENAI_API_KEY`
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`

Домен (наприклад `thinking.matsuka.online`): додай у Vercel → Domains → налаштуй CNAME у DNS-провайдера.

### Статичний експорт (GitHub Pages) — тільки якщо без бота

`next.config.mjs` вже має `output: 'export'`. Бот-роут не працюватиме на GH Pages — треба деплой API окремо на Vercel/Cloudflare Workers.

## Аналітика

Plausible — встанови скрипт у своєму плаузіблі з domain `thinking.matsuka.online`. Автоматично трекає:
- Pageviews
- Custom event `Signup` (email capture)
- Custom event `Copy Template: <slug>` (кнопка "Скопіювати шаблон")

## Kill-criteria (фаза 1 — 2 тижні після лонча)

- **GO:** ≥ 50 email-підписників, ≥ 20 Copy Template events, ≥ 30% повернень
- **REWORK:** підписники є, але Copy Template events <5 → проблема в форматі шаблонів
- **STOP:** <20 підписників, <5 повторних візитів → немає попиту

Докладніше — у `07_Launch/03_Kill_Criteria.md`.
