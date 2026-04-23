import Link from 'next/link';

export const metadata = {
  title: 'Про проєкт',
  description: 'ThinkLab — особистий проєкт Oleksiy Matsuka. Каталог шаблонів мислення для швидкого застосування.',
};

export default function AboutPage() {
  return (
    <>
      <section className="section-pad" style={{ borderTop: 'none' }}>
        <div className="wrap">
          <div className="mono text-noesis-grey mb-8">/ ПРО ПРОЄКТ — МАНІФЕСТ</div>
          <h1 className="font-serif leading-[0.95] tracking-[-0.025em] text-[clamp(48px,8.5vw,104px)] max-w-[14ch]">
            Навіщо <em className="highlight-accent">ThinkLab</em>.
          </h1>
          <p className="lead mt-7 max-w-[60ch]">
            Я будую цей каталог у першу чергу для себе — щоб шаблони мислення були під рукою,
            коли треба ухвалити рішення. І відкриваю його безкоштовно для всіх, хто хоче так само.
          </p>
        </div>
      </section>

      <Block num="01" title="Проблема">
        <p>
          Коли настає момент рішення — немає часу шукати «як правильно». Книги про mental models
          дають теорію без практики. AI-асистенти відповідають <em>замість</em> нас, а не допомагають думати.
          Mind map'и — красиві, але повільні. Потрібен простий інструмент: відкрив шаблон,
          заповнив за 5-20 хвилин, отримав ясність.
        </p>
      </Block>

      <Block num="02" title="Відповідь">
        <p>
          Існує ~60 перевірених методів мислення — від Арістотеля до Kahneman. Я збираю їх у
          форматі, що працює: <strong>коли використати, кроки, приклад, copy-paste структура</strong> для Obsidian/Notion.
        </p>
        <p>
          Бот-коуч — поруч для випадків, коли незрозуміло, який метод підходить. Він не дає відповіді —
          веде через питання фреймворку.
        </p>
      </Block>

      <Block num="03" title="Принципи" paper2>
        <ol className="list-none">
          {[
            ['Наука > hype.', 'Кожен метод — з джерелом і автором.'],
            ['Інструмент > порада.', 'Шаблон для заповнення, а не «просто подумай».'],
            ['Практика > теорія.', '5 хвилин із шаблоном — більше, ніж 5 годин із книгою.'],
            ['Безкоштовно, поки можна.', 'Рання версія — відкрита для всіх, хто підпишеться.'],
          ].map(([k, v], i) => (
            <li
              key={i}
              className="py-5 border-t border-noesis-line grid grid-cols-[40px_1fr] gap-4 last:border-b"
            >
              <span className="mono text-noesis-grey">{String(i + 1).padStart(2, '0')}</span>
              <span><strong>{k}</strong> <span className="text-noesis-grey">{v}</span></span>
            </li>
          ))}
        </ol>
      </Block>

      <Block num="04" title="Статус">
        <p>
          Зараз — відкрита бета. Якщо ти відкриваєш шаблони і вони реально допомагають —
          я робитиму більше. Якщо ніхто не користується — закрию. Чесно.
        </p>
        <p>
          Після фази відкритої бети можливо зроблю lifetime pack (PDF + Notion, один платіж).
          Ранні підписники отримають безкоштовно назавжди.
        </p>
      </Block>

      <Block num="05" title="Хто я">
        <p>
          <a href="https://matsuka.online" className="underline hover:text-noesis-accent">Oleksiy Matsuka</a> — продуктовий менеджер,
          автор matsuka.online, редактор. Працюю зі стратегічним аналізом медіа й наративів.
          ThinkLab — це побічний продукт моєї власної практики.
        </p>

        <div className="mt-10 p-7 bg-noesis-accent border border-noesis-ink max-w-2xl">
          <div className="mono mb-2.5">МОТО</div>
          <div className="font-serif italic text-[clamp(22px,2.2vw,28px)] leading-[1.2]">
            Мисли ясніше. Вирішуй <em>розумніше</em>.
          </div>
        </div>

        <p className="mono text-noesis-grey mt-10">
          ФІДБЕК — <a href="mailto:alex.mazuka@gmail.com" className="underline">ALEX.MAZUKA@GMAIL.COM</a>
        </p>

        <div className="mt-10">
          <Link href="/methods" className="btn-primary">
            До каталогу методів <span className="arrow">→</span>
          </Link>
        </div>
      </Block>
    </>
  );
}

function Block({
  num,
  title,
  children,
  paper2,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
  paper2?: boolean;
}) {
  return (
    <section
      className="section-pad"
      style={paper2 ? { background: 'var(--noesis-paper-2)' } : undefined}
    >
      <div className="wrap">
        <div className="section-label">
          <span className="num">{num}</span> {title.toUpperCase()}
        </div>
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-14">
          <h2 className="font-serif text-[clamp(36px,5.5vw,72px)] leading-none">{title}</h2>
          <div className="space-y-6 text-noesis-ink max-w-[62ch] leading-relaxed">{children}</div>
        </div>
      </div>
    </section>
  );
}
