import { notFound } from 'next/navigation';
import Link from 'next/link';
import { methods, getMethodBySlug } from '@/lib/methods';
import { methodDetails } from '@/lib/method-details';
import { CopyButton } from '@/components/CopyButton';

export function generateStaticParams() {
  return methods.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const method = getMethodBySlug(slug);
  if (!method) return {};
  return {
    title: `${method.name} — ${method.nameEn}`,
    description: method.tldr,
  };
}

export default async function MethodPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const method = getMethodBySlug(slug);
  if (!method) notFound();
  const detail = methodDetails[slug];

  return (
    <>
      <section className="section-pad" style={{ borderTop: 'none', paddingBottom: 'clamp(48px,6vw,96px)' }}>
        <div className="wrap max-w-4xl">
          <Link href="/methods" className="mono text-noesis-grey hover:text-noesis-ink mb-8 inline-block">
            ← МЕТОДИ
          </Link>
          <div className="mono text-noesis-grey mb-6 flex gap-4 flex-wrap">
            <span>{categoryLabel(method.category).toUpperCase()}</span>
            <span>·</span>
            <span>{method.time}</span>
          </div>
          <h1 className="font-serif leading-[0.95] tracking-[-0.025em] text-[clamp(44px,6.5vw,104px)]">
            {method.name}
          </h1>
          <p className="font-serif italic text-noesis-grey mt-2 text-[clamp(18px,1.6vw,22px)]">{method.nameEn}</p>

          <div className="mt-10 bg-noesis-ink text-noesis-paper p-8 border border-noesis-ink max-w-3xl">
            <div className="mono text-noesis-accent mb-3">СУТЬ</div>
            <p className="text-lg leading-relaxed">{method.tldr}</p>
          </div>
        </div>
      </section>

      {detail ? (
        <>
          <section className="section-pad">
            <div className="wrap max-w-4xl">
              <div className="section-label"><span className="num">01</span> КОЛИ ВИКОРИСТОВУВАТИ</div>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="font-serif text-2xl mb-4">Підходить</h3>
                  <ul className="space-y-3">
                    {detail.whenToUse.map((w) => (
                      <li key={w} className="flex gap-3 py-3 border-t border-noesis-line last:border-b">
                        <span className="text-noesis-ink mt-0.5">✓</span>
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif text-2xl mb-4 text-noesis-grey">НЕ підходить</h3>
                  <ul className="space-y-3">
                    {detail.whenNotToUse.map((w) => (
                      <li key={w} className="flex gap-3 py-3 border-t border-noesis-line last:border-b text-noesis-grey">
                        <span className="mt-0.5">✗</span>
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="section-pad" style={{ background: 'var(--noesis-paper-2)' }}>
            <div className="wrap max-w-4xl">
              <div className="section-label"><span className="num">02</span> КРОКИ</div>
              <ol className="border-t border-noesis-ink">
                {detail.steps.map((step, i) => (
                  <li key={step.title} className="py-8 border-b border-noesis-line grid grid-cols-[40px_1fr] gap-6">
                    <div className="mono text-noesis-grey pt-1">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl leading-tight mb-2">{step.title}</h3>
                      <p className="text-noesis-grey leading-relaxed mb-3">{step.description}</p>
                      {step.prompt && (
                        <pre className="bg-noesis-ink text-noesis-paper p-4 text-xs font-mono whitespace-pre-wrap leading-relaxed">
                          {step.prompt}
                        </pre>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="section-pad">
            <div className="wrap max-w-4xl">
              <div className="section-label"><span className="num">03</span> ПРИКЛАД ІЗ ЖИТТЯ</div>
              <div className="border border-noesis-ink p-8">
                <h3 className="font-serif text-[clamp(24px,2.2vw,32px)] leading-tight mb-4">
                  {detail.example.context}
                </h3>
                <p className="text-noesis-grey leading-relaxed mb-6">{detail.example.walkthrough}</p>
                <div className="pt-6 border-t border-noesis-line">
                  <div className="mono text-noesis-grey mb-2">РЕЗУЛЬТАТ</div>
                  <p>{detail.example.outcome}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="section-pad" style={{ background: 'var(--noesis-ink)', color: 'var(--noesis-paper)' }}>
            <div className="wrap max-w-4xl">
              <div className="flex items-baseline justify-between flex-wrap gap-4 mb-8">
                <div>
                  <div className="mono text-noesis-accent mb-3">04 · ШАБЛОН</div>
                  <h2 className="font-serif text-[clamp(36px,5vw,64px)] leading-none">
                    Копіюй і <em>заповнюй</em>.
                  </h2>
                </div>
                <CopyButton text={detail.template} eventName={`Copy Template: ${method.slug}`} />
              </div>
              <pre className="p-6 text-xs font-mono whitespace-pre-wrap overflow-x-auto leading-relaxed border border-noesis-paper/20 bg-noesis-ink-soft">
                {detail.template}
              </pre>
              <p className="mono text-noesis-grey-soft mt-5">
                MARKDOWN · OBSIDIAN · NOTION · GOOGLE DOCS
              </p>
            </div>
          </section>

          <section className="section-pad">
            <div className="wrap max-w-4xl">
              <div className="mono text-noesis-grey mb-3">ДЖЕРЕЛО</div>
              <p className="text-noesis-grey">{detail.source}</p>
            </div>
          </section>
        </>
      ) : (
        <section className="section-pad">
          <div className="wrap max-w-3xl">
            <div className="border border-noesis-ink p-8 bg-noesis-paper-2">
              <div className="mono text-noesis-grey mb-3">В РОБОТІ</div>
              <h3 className="font-serif text-3xl mb-4">Детальний шаблон готується</h3>
              <p className="text-noesis-grey mb-5 leading-relaxed">
                Поки що тут коротка суть методу. Детальний шаблон (коли використати, кроки, приклад, copy-paste) —
                я додаю по мірі написання. Якщо саме цей метод тобі потрібен зараз — напиши, додам у першу чергу.
              </p>
              <a href="mailto:alex.mazuka@gmail.com" className="mono underline">
                ALEX.MAZUKA@GMAIL.COM
              </a>
            </div>
          </div>
        </section>
      )}

      <section className="section-pad" style={{ background: 'var(--noesis-paper-2)' }}>
        <div className="wrap max-w-4xl">
          <div className="border border-noesis-ink p-8 bg-noesis-paper flex items-start justify-between flex-wrap gap-6">
            <div className="flex-1 min-w-[260px]">
              <div className="mono text-noesis-grey mb-3">НЕ ВПЕВНЕНИЙ?</div>
              <h3 className="font-serif text-[clamp(24px,2.4vw,32px)] leading-tight mb-3">
                Який метод <em>підходить</em>?
              </h3>
              <p className="text-noesis-grey">
                Опиши проблему боту — він запропонує правильний фреймворк і проведе через нього.
              </p>
            </div>
            <Link href="/bot" className="btn-primary">
              Відкрити бота <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function categoryLabel(cat: string) {
  const map: Record<string, string> = {
    critical: 'Критичне мислення',
    decision: 'Прийняття рішень',
    problem: 'Вирішення проблем',
    strategy: 'Стратегія',
    mental: 'Ментальні моделі',
  };
  return map[cat] || cat;
}
