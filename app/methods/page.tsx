import { MethodCard } from '@/components/MethodCard';
import { methods } from '@/lib/methods';

export const metadata = {
  title: 'Каталог методів',
  description: 'Від First Principles до Bayesian Updating. Кожен метод — з коли використати, кроками, прикладом і шаблоном для копіювання.',
};

export default function MethodsPage() {
  return (
    <>
      <section className="section-pad" style={{ borderTop: 'none' }}>
        <div className="wrap">
          <div className="mono text-noesis-grey mb-8">/ МЕТОДИ — КАТАЛОГ</div>
          <h1 className="font-serif leading-[0.95] tracking-[-0.025em] text-[clamp(48px,8.5vw,104px)]">
            Шаблони <em>мислення</em>.<br />
            Всі {methods.length}.
          </h1>
          <p className="lead mt-7">
            Для 10 методів — повні шаблони: коли використати, кроки, приклад, copy-paste для Obsidian або Notion.
            Решта — короткі sumари, додаю детально по мірі запиту.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="section-label"><span className="num">01</span> КАТАЛОГ</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-noesis-ink">
            {methods.map((m, i) => {
              const col = i % 3;
              const isLastCol = col === 2;
              const row = Math.floor(i / 3);
              const lastRowIdx = Math.floor((methods.length - 1) / 3);
              const isLastRow = row === lastRowIdx;
              return (
                <div
                  key={m.slug}
                  className={`${!isLastCol ? 'lg:border-r sm:odd:border-r' : ''} ${!isLastRow ? 'border-b' : ''} border-noesis-line`}
                >
                  <MethodCard method={m} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
