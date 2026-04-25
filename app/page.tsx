import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { EmailForm } from '@/components/EmailForm';
import { BotSelector } from '@/components/BotSelector';
import { methods } from '@/lib/methods';

const CORE_SLUGS = [
  'first-principles',
  '5-whys',
  'pre-mortem',
  '10-10-10',
  'eisenhower',
  'ooda-loop',
  'decide',
  'inversion',
  'feynman-technique',
  'scamper',
];

export default function HomePage() {
  const core = CORE_SLUGS
    .map((s) => methods.find((m) => m.slug === s))
    .filter(Boolean) as typeof methods;

  return (
    <>
      {/* 01 HERO */}
      <section className="section-pad" style={{ borderTop: 'none' }}>
        <div className="wrap">
          <div className="mono text-noesis-grey flex justify-between mb-12 flex-wrap gap-2">
            <span>№ 001 — БІБЛІОТЕКА ШАБЛОНІВ МИСЛЕННЯ</span>
            <span>EST. 2026 · UA · ВІДКРИТА БЕТА</span>
          </div>

          <h1 className="font-serif leading-[0.95] tracking-[-0.025em] text-[clamp(48px,8.5vw,136px)]">
            Мисли ясніше.<br />
            <em>Вирішуй </em>
            <em className="highlight-accent">розумніше.</em>
          </h1>

          <div className="grid md:grid-cols-[1.2fr_1fr] gap-16 mt-16 items-end">
            <p className="lead">
              Каталог <strong>40+ наукових методів мислення</strong> — у форматі, який працює за 5 хвилин до наступного рішення.
              10 методів з повними шаблонами: First Principles, 5 Whys, Pre-Mortem, DECIDE. Безкоштовно у бету.
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/methods" className="btn-primary">
                Відкрити каталог <span className="arrow">→</span>
              </Link>
              <Link href="#bot" className="btn-ghost">
                Спробувати бота — безкоштовно <span className="arrow">→</span>
              </Link>
            </div>
          </div>

          <div className="mt-18 grid grid-cols-[auto_1fr] gap-8 items-center py-5 border-t border-b border-noesis-line mt-16">
            <div className="mono text-noesis-grey">ОСНОВАНО НА</div>
            <div className="flex gap-9 flex-wrap font-serif italic text-[clamp(18px,1.6vw,22px)]">
              <span>Kahneman</span><span className="text-noesis-line">·</span>
              <span>Taleb</span><span className="text-noesis-line">·</span>
              <span>Munger</span><span className="text-noesis-line">·</span>
              <span>Meadows</span><span className="text-noesis-line">·</span>
              <span>Popper</span>
            </div>
          </div>

          <div className="mono mt-5 flex gap-7 text-noesis-grey flex-wrap">
            <span>40+ МЕТОДІВ</span>
            <span>10 ШАБЛОНІВ</span>
            <span>COPY-PASTE В OBSIDIAN</span>
            <span>БЕЗКОШТОВНО У БЕТУ</span>
          </div>
        </div>
      </section>

      {/* 02 BOT — INLINE */}
      <section id="bot" className="section-pad" style={{ background: 'var(--noesis-paper-2)' }}>
        <div className="wrap">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
            <div>
              <div className="section-label"><span className="num">02</span> БОТ-КОУЧ</div>
              <h2 className="font-serif text-[clamp(36px,5.5vw,72px)] leading-none">
                Спробуй <em>прямо тут.</em>
              </h2>
              <p className="text-noesis-grey mt-6 leading-relaxed max-w-[44ch]">
                Обери, що вирішуємо. Бот підставить відповідний фреймворк і проведе через нього питаннями — не готовими відповідями.
              </p>
              <ul className="mt-8 space-y-2 mono text-xs text-noesis-grey">
                <li>· БЕЗ РЕЄСТРАЦІЇ</li>
                <li>· OPENROUTER · GPT-4O-MINI</li>
                <li>· КОНТЕКСТ МЕТОДУ В СИСТЕМНОМУ ПРОМПТІ</li>
                <li>· УКРАЇНСЬКОЮ ЗА ЗАМОВЧУВАННЯМ</li>
              </ul>
            </div>
            <BotSelector />
          </div>
        </div>
      </section>

      {/* 03 PROBLEM */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-label"><span className="num">03</span> ПРОБЛЕМА</div>
          <div className="grid md:grid-cols-[1fr_1.1fr] gap-20">
            <div>
              <h2 className="font-serif text-[clamp(36px,5.5vw,88px)] leading-none">
                Чому <em>більшість</em> рішень<br />ми робимо на інтуїції.
              </h2>
            </div>
            <div className="pt-5">
              <ul className="list-none">
                {[
                  'Нас не вчать системному мисленню — ні в школі, ні на роботі.',
                  'У моменті рішення немає часу, щоб піти й розібратись «як правильно».',
                  'Книги про mental models — теорія без практики.',
                  'AI-чат-боти відповідають замість тебе. Не вчать.',
                ].map((text, i) => (
                  <li
                    key={i}
                    className="py-5 border-t border-noesis-line grid grid-cols-[40px_1fr] gap-4 last:border-b"
                  >
                    <span className="mono text-noesis-grey">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 p-7 bg-noesis-accent border border-noesis-ink">
                <div className="mono mb-2.5">МІСТ</div>
                <div className="font-serif text-[clamp(22px,2.2vw,28px)] leading-[1.2]">
                  ThinkLab — інструментарій, який перетворює мислення на <em>навичку, яку можна тренувати</em>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 CORE 10 */}
      <section className="section-pad">
        <div className="wrap">
          <div className="flex items-baseline justify-between mb-10 flex-wrap gap-4">
            <div>
              <div className="section-label"><span className="num">04</span> КАТАЛОГ</div>
              <h2 className="font-serif text-[clamp(36px,5.5vw,88px)] leading-none">
                Почни з <em>десяти</em>.
              </h2>
            </div>
            <Link href="/methods" className="btn-ghost">
              Усі 40 методів <span className="arrow">→</span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-noesis-ink">
            {core.map((m, i) => {
              const col = i % 3;
              const totalRows = Math.ceil(core.length / 3);
              const row = Math.floor(i / 3);
              const isLastRow = row === totalRows - 1;
              const isLastCol = col === 2;
              return (
                <Link
                  key={m.slug}
                  href={`/methods/${m.slug}`}
                  className={`p-7 flex flex-col gap-3 min-h-[220px] group transition-colors hover:bg-noesis-paper-2 ${
                    isLastCol ? '' : 'lg:border-r border-noesis-line'
                  } ${isLastRow ? '' : 'border-b border-noesis-line'} ${
                    col === 0 ? 'sm:border-r lg:border-r' : ''
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="mono text-noesis-grey">№ {String(i + 1).padStart(2, '0')}</div>
                    <div className="mono text-noesis-grey">{m.time}</div>
                  </div>
                  <h3 className="font-serif text-2xl leading-tight mt-2 group-hover:underline underline-offset-4">
                    {m.name}
                  </h3>
                  <p className="text-sm text-noesis-grey flex-1">{m.tldr}</p>
                  <div className="text-xs text-noesis-grey italic">{m.nameEn}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05 HOW IT WORKS */}
      <section className="section-pad" style={{ background: 'var(--noesis-paper-2)' }}>
        <div className="wrap">
          <div className="section-label"><span className="num">05</span> ЯК ЦЕ ПРАЦЮЄ</div>
          <h2 className="font-serif text-[clamp(36px,5.5vw,88px)] leading-none mb-14">
            Три кроки.<br /><em>Повторюються нескінченно.</em>
          </h2>

          <div className="grid md:grid-cols-3 gap-0 border-t border-noesis-ink">
            {[
              ['01', 'Обери метод', 'Каталог відсортовано за ситуацією — рішення, проблема, стратегія, аналіз.'],
              ['02', 'Відкрий шаблон', 'Коли використати. Кроки. Приклад. Скопіюй в Obsidian або Notion.'],
              ['03', 'Застосуй і оціни', 'Заповни за 5-20 хв. Через тиждень — порівняй прогноз і реальність.'],
            ].map(([num, title, text], i) => (
              <div
                key={num}
                className={`py-8 relative ${i < 2 ? 'md:border-r border-noesis-line' : ''} ${i > 0 ? 'md:pl-6' : ''} ${i < 2 ? 'md:pr-6' : ''}`}
              >
                <div className="mono text-noesis-grey mb-5">КРОК {num}</div>
                <h3 className="font-serif text-[clamp(24px,2.8vw,40px)] leading-[1.1] tracking-[-0.015em]">{title}</h3>
                <p className="mt-3 text-noesis-grey">{text}</p>
                {i < 2 && (
                  <span className="hidden md:block absolute top-8 -right-1.5 h-3 w-3 bg-noesis-accent border border-noesis-ink" />
                )}
              </div>
            ))}
          </div>

          <blockquote className="mt-16 pl-10 border-l-4 border-noesis-ink max-w-3xl">
            <div className="font-serif italic text-[clamp(22px,2.4vw,30px)] leading-[1.3]">
              Чим більше ітерацій — тим краща інтуїція. Це не філософія.<br />
              Це <span className="bg-noesis-accent px-1.5 not-italic">&nbsp;тренування&nbsp;</span>.
            </div>
          </blockquote>
        </div>
      </section>

      {/* 05 EARLY ACCESS */}
      <section id="early-access" className="section-pad scroll-mt-24" style={{ background: 'var(--noesis-ink)', color: 'var(--noesis-paper)', borderTop: 'none' }}>
        <div className="wrap">
          <div className="mono text-noesis-accent mb-6">→ ПОЧНИ ТУТ</div>
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-end">
            <h2 className="font-serif text-[clamp(36px,5.5vw,88px)] leading-none max-w-[18ch]">
              Безкоштовно для <em>ранніх</em><br />
              <em className="text-noesis-accent">підписників.</em>
            </h2>
            <div>
              <p className="text-noesis-grey-soft mb-8 leading-relaxed">
                Підпишись — отримаєш нові шаблони першим, плюс PDF-пак з 10 основними методами.
                Коли стане платним — у тебе залишиться безкоштовний доступ назавжди.
              </p>
              <EmailForm cta="Приєднатись" source="home-early-access" variant="dark" />
              <p className="mono text-noesis-grey-soft mt-5">
                БЕЗ СПАМУ · ВІДПИСКА ОДНИМ КЛІКОМ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 FAQ */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-label"><span className="num">06</span> ПОШИРЕНІ ПИТАННЯ</div>
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-14">
            <div>
              <h2 className="font-serif text-[clamp(36px,5.5vw,88px)] leading-none">
                Ти, мабуть,<br />думаєш.
              </h2>
            </div>
            <div>
              {faqs.map((f, i) => (
                <details
                  key={f.q}
                  className="group border-t border-noesis-line last:border-b"
                  open={i === 0}
                >
                  <summary className="list-none cursor-pointer py-6 flex justify-between items-center gap-4 font-serif text-[clamp(22px,2vw,28px)] leading-tight">
                    <span>{f.q}</span>
                    <span className="mono text-[24px] text-noesis-grey transition-transform group-open:rotate-45 group-open:text-noesis-ink">+</span>
                  </summary>
                  <div className="pb-6 max-w-[62ch] text-noesis-ink/80 leading-relaxed">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 07 CTA */}
      <section className="section-pad" style={{ background: 'var(--noesis-paper-2)' }}>
        <div className="wrap text-center">
          <div className="mono text-noesis-grey mb-4">ГОТОВИЙ?</div>
          <h2 className="font-serif text-[clamp(36px,5.5vw,88px)] leading-none mb-10 max-w-[18ch] mx-auto">
            Відкрий перший <em>метод</em>.
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/methods" className="btn-primary">
              До каталогу <span className="arrow">→</span>
            </Link>
            <Link href="/bot" className="btn-ghost">
              Спитати бота
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const faqs = [
  {
    q: 'Це ще один self-help?',
    a: 'Ні. Тут нема мотивації. Це каталог перевірених методів з наукового foundation — Kahneman, Taleb, Munger, Meadows — з готовими шаблонами для практичного застосування.',
  },
  {
    q: 'Чим це відрізняється від ChatGPT?',
    a: 'ChatGPT дає відповіді. ThinkLab дає методи, щоб ти сам дійшов до відповіді. Бот-коуч тут теж не відповідає — веде через питання фреймворку.',
  },
  {
    q: 'Хто стоїть за проєктом?',
    a: 'Oleksiy Matsuka — продуктовий менеджер і автор matsuka.online. Проєкт — побічний продукт моєї роботи зі стратегічним аналізом і рішеннями.',
  },
  {
    q: 'Коли буде платна версія?',
    a: 'Якщо статистика покаже, що ранні користувачі реально відкривають шаблони — зроблю lifetime pack (PDF + Notion, один платіж). Всі early-subscribers отримають безкоштовно.',
  },
  {
    q: 'Refund?',
    a: 'Фаза 1 безкоштовна. Коли з\'явиться платна версія — 14 днів no-questions-asked.',
  },
];
