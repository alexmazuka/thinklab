import Link from 'next/link';

export const metadata = {
  title: 'Бот-коуч з мислення',
  description: 'Не дає відповідь — веде через фреймворк. Безкоштовно в режимі відкритої бети.',
};

export default function BotPage() {
  return (
    <>
      <section className="section-pad" style={{ borderTop: 'none' }}>
        <div className="wrap">
          <div className="mono text-noesis-grey mb-8">/ БОТ — AI КОУЧ МИСЛЕННЯ</div>
          <h1 className="font-serif leading-[0.95] tracking-[-0.025em] text-[clamp(48px,8.5vw,120px)] max-w-[18ch]">
            Бот, який <em className="highlight-accent">не дає</em><br />готову відповідь.
          </h1>
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-16 mt-14 items-end">
            <p className="lead">
              Більшість AI-чатів дають тобі рибу. Цей бот <em>вчить рибалити</em> — через правильний метод мислення для кожної ситуації.
              Задай проблему — він проведе через фреймворк.
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/#early-access" className="btn-primary">
                Приєднатись до беста-листа <span className="arrow">→</span>
              </Link>
              <Link href="/methods" className="btn-ghost">
                Спочатку — каталог <span className="arrow">→</span>
              </Link>
            </div>
          </div>
          <div className="mono mt-10 text-noesis-grey">
            СКОРО · ПЕРШІ ПІДПИСНИКИ ОТРИМАЮТЬ ДОСТУП ДО БЕТИ
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="section-label"><span className="num">01</span> ПРИКЛАД ДІАЛОГУ</div>
          <div className="max-w-3xl border border-noesis-ink bg-noesis-ink text-noesis-paper p-8 space-y-3 font-mono text-sm">
            <Bubble role="user" text="Не можу вирішити чи приймати job offer. Більша зп, галузь менш цікава." />
            <Bubble role="bot" text="Класичний трейд-офф. Не йдемо в pros/cons — не показують суть. Спробуємо 10-10-10." />
            <Bubble role="bot" text="Уяви, що прийняв offer. Як відчуватимешся через 10 хв? Через 10 місяців? Через 10 років?" />
            <Bubble role="user" text="У 10-річній — скоріше відмовитись. Але зараз страшно відмовитись від грошей." />
            <Bubble role="bot" text="Це сигнал — ти вже знаєш відповідь. Конфлікт між терміновим і довгостроковим." />
            <Bubble role="bot" text="Можна без бінарного вибору: offer як leverage для підвищення. Або як pilot на 6 міс. Яка third option ближча?" />
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--noesis-paper-2)' }}>
        <div className="wrap">
          <div className="section-label"><span className="num">02</span> ТРИ ПЕРСОНИ</div>
          <h2 className="font-serif text-[clamp(36px,5.5vw,72px)] leading-none mb-12">
            Три стилі. <em>Один метод.</em>
          </h2>
          <div className="grid md:grid-cols-3 gap-0 border border-noesis-ink">
            <PersonaCard
              name="Mentor"
              desc="Default. Теплий, заохочує, задає питання. Для більшості випадків."
              example='"Цікаво. Спробуй 10-10-10 на цьому рішенні…"'
              borderRight
            />
            <PersonaCard
              name="Direct"
              desc="Прямий, без прикрас. Коли обмаль часу."
              example='"Стоп. Ти стрибаєш до рішень. 5 Whys. Почни."'
              dark
              borderRight
            />
            <PersonaCard
              name="Socratic"
              desc="Тільки питання. Нуль порад. Коли хочеш підкачати мислення."
              example='"А чому ти думаєш, що це — єдиний вибір?"'
              accent
            />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="section-label"><span className="num">03</span> КОЛИ ВИКОРИСТОВУВАТИ</div>
          <div className="grid md:grid-cols-2 gap-0 border border-noesis-ink">
            {useCases.map((uc, i) => (
              <div
                key={uc.title}
                className={`p-7 flex flex-col gap-3 min-h-[200px] ${i % 2 === 0 ? 'md:border-r' : ''} ${i < 2 ? 'border-b' : ''} border-noesis-line`}
              >
                <div className="mono text-noesis-grey">{uc.framework}</div>
                <h3 className="font-serif text-2xl leading-tight">{uc.title}</h3>
                <p className="text-noesis-grey text-sm">{uc.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="signup" className="section-pad" style={{ background: 'var(--noesis-ink)', color: 'var(--noesis-paper)', borderTop: 'none' }}>
        <div className="wrap">
          <div className="mono text-noesis-accent mb-6">→ СПРОБУЙ</div>
          <h2 className="font-serif text-[clamp(36px,5.5vw,88px)] leading-none max-w-[16ch] mb-10">
            Відкрий <em className="text-noesis-accent">чат</em>.
          </h2>
          <p className="text-noesis-grey-soft max-w-[60ch] mb-10">
            У відкритій беті — без лімітів. Якщо стане вартим фінансування, введу м'який ліміт для anon-користувачів.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/#early-access" className="btn-accent">
              Приєднатись до беста-листа <span className="arrow">→</span>
            </Link>
            <Link
              href="/methods"
              className="btn"
              style={{ background: 'transparent', color: 'var(--noesis-paper)', borderColor: 'var(--noesis-paper)' }}
            >
              Спочатку — каталог
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Bubble({ role, text }: { role: 'user' | 'bot'; text: string }) {
  return (
    <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] px-4 py-3 border ${
          role === 'user'
            ? 'bg-noesis-accent text-noesis-ink border-noesis-accent'
            : 'bg-noesis-ink-soft text-noesis-paper border-white/20'
        }`}
      >
        {text}
      </div>
    </div>
  );
}

function PersonaCard({
  name,
  desc,
  example,
  dark,
  accent,
  borderRight,
}: {
  name: string;
  desc: string;
  example: string;
  dark?: boolean;
  accent?: boolean;
  borderRight?: boolean;
}) {
  const bg = dark ? 'bg-noesis-ink text-noesis-paper' : accent ? 'bg-noesis-accent text-noesis-ink' : 'bg-noesis-paper';
  const descColor = dark ? 'text-noesis-grey-soft' : 'text-noesis-grey';
  return (
    <div className={`p-7 flex flex-col gap-4 min-h-[240px] ${bg} ${borderRight ? 'md:border-r border-noesis-line' : ''}`}>
      <div className="mono opacity-70">ПЕРСОНА</div>
      <h3 className="font-serif text-3xl">{name}</h3>
      <p className={`text-sm ${descColor}`}>{desc}</p>
      <p className="font-serif italic mt-auto">{example}</p>
    </div>
  );
}

const useCases = [
  {
    framework: 'DECIDE · 10-10-10 · PRE-MORTEM',
    title: 'Прийняти рішення',
    text: 'Застряг між варіантами? Бот проведе через правильний фреймворк, а не дасть готову пораду.',
  },
  {
    framework: '5 WHYS · FISHBONE · INVERSION',
    title: 'Розв\'язати проблему',
    text: 'Щось не працює? Розкладемо до кореневої причини — не до першого «ну бо...».',
  },
  {
    framework: 'FEYNMAN · SOCRATIC',
    title: 'Зрозуміти концепт',
    text: 'Бот змусить пояснити ідею 10-річній дитині. Знайде пробіли. Закриє їх.',
  },
  {
    framework: 'PRE-MORTEM · SECOND-ORDER · DEVIL\'S ADVOCATE',
    title: 'Проаналізувати план',
    text: 'Збираєшся запускати щось велике? Бот зробить pre-mortem і атакує ідею на папері.',
  },
];
