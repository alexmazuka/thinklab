# ThinkLab — сайт

Особистий проєкт [Олексія Мацуки](https://matsuka.online) з каталогом шаблонів мислення.
Next.js 15 + React 19 + Tailwind + TypeScript + AI SDK + OpenRouter.

## Quick start

```bash
cd 06_Site/site
cp .env.example .env.local
# Заповни OPENROUTER_API_KEY, FORMSPREE_ID, NEXT_PUBLIC_PLAUSIBLE_DOMAIN
npm install
npm run dev
```

Відкриється `http://localhost:3000`. Бот-коуч живе на головній (секція "БОТ-КОУЧ") і всередині кожного методу.

## Structure

```
app/
  page.tsx              — Home (hero + інлайн-бот + 10 core методів + early access)
  methods/              — Каталог + сторінка методу (з прикладами + чатом на кожному)
  bot/                  — Окрема сторінка бота
  about/                — Про проєкт
  api/
    bot/route.ts        — OpenRouter streaming proxy + 40 method-specific системних промптів
    subscribe/route.ts  — Formspree proxy
components/
  BotSelector           — Дропдаун "Що вирішуємо?" → пре-сетує метод і відкриває чат
  MethodChat            — Інлайн чат-компонент (useChat + ai/react)
  Header, Footer, EmailForm, MethodCard, CopyButton
lib/
  methods.ts            — 40 методів (назви, категорії, tldr, час)
  method-details.ts     — Детальні шаблони для 10 core методів
  method-examples.ts    — Професійний + побутовий приклад на кожен з 40 методів
```

## Бот-коуч (OpenRouter)

Один edge-route `/api/bot` обслуговує:
- Інлайн-бот на головній (через `<BotSelector />`).
- Інлайн-чати на кожній сторінці методу (через `<MethodChat methodSlug="…" />`).
- Окрему сторінку `/bot`.

Запит несе `{ messages, method }`. Якщо `method` збігається з ключем у `METHOD_PROMPTS` (40 методів), системний промпт доповнюється method-specific інструкцією — бот веде юзера саме через цей фреймворк.

Default-модель — `openai/gpt-4o-mini` через OpenRouter. Можна замінити через `OPENROUTER_MODEL` (напр. `anthropic/claude-3.5-sonnet`, `meta-llama/llama-3.1-70b-instruct`).

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

Усі 40 методів мають короткий огляд (tldr) + два приклади (професійний / побутовий) + інлайн-чат.

## Deploy на Vercel

```bash
npx vercel link        # один раз: пов'яжи з проєктом thinklab
npx vercel             # preview deploy
npx vercel --prod      # продакшн
```

### Env vars у Vercel dashboard

| Variable                       | Required | Опис                                                                |
| ------------------------------ | -------- | ------------------------------------------------------------------- |
| `OPENROUTER_API_KEY`           | yes      | Ключ із <https://openrouter.ai/keys>. Без нього `/api/bot` віддає 503. |
| `OPENROUTER_MODEL`             | no       | Default `openai/gpt-4o-mini`. Список — <https://openrouter.ai/models>. |
| `FORMSPREE_ID`                 | yes      | Server-side fallback для `/api/subscribe`.                          |
| `NEXT_PUBLIC_FORMSPREE_ID`     | yes      | Той самий ID — для прямого POST з клієнта (`<EmailForm />`).        |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | no       | `thinking.matsuka.online` для аналітики.                            |

Після зміни env vars — натисни **Redeploy** у Vercel, бо edge runtime читає їх на старті.

### Custom domain

`thinking.matsuka.online` → Vercel → Settings → Domains → CNAME `cname.vercel-dns.com`.

### Статичний експорт (опційно)

`next.config.mjs` вмикає `output: 'export'`, якщо запустити з `STATIC_BUILD=1 npm run build`.
У статичному режимі `/api/bot` не працює — бот вимикається.

## Аналітика

Plausible — встанови у своєму інстансі плаузібла домен `thinking.matsuka.online`. Автоматично трекає:
- Pageviews
- Custom event `Signup` (email capture)
- Custom event `Copy Template: <slug>` (кнопка "Скопіювати шаблон")

## Kill-criteria (фаза 1 — 2 тижні після лонча)

- **GO:** ≥ 50 email-підписників, ≥ 20 Copy Template events, ≥ 30% повернень.
- **REWORK:** підписники є, але Copy Template events <5 → проблема в форматі шаблонів.
- **STOP:** <20 підписників, <5 повторних візитів → немає попиту.

Докладніше — у `07_Launch/03_Kill_Criteria.md`.
