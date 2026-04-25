'use client';

import { useState } from 'react';
import { MethodChat } from './MethodChat';

type Intent = {
  key: string;
  label: string;
  hint: string;
  methodSlug?: string;
  methodName?: string;
  placeholder: string;
};

const INTENTS: Intent[] = [
  {
    key: 'decision',
    label: 'Прийняти рішення',
    hint: 'DECIDE · 10-10-10 · Regret Minimization',
    methodSlug: 'decide',
    methodName: 'DECIDE',
    placeholder:
      'Опиши вибір, з яким зіткнувся. Наприклад: "Маю два офери — більша зп vs цікавіша галузь."',
  },
  {
    key: 'problem',
    label: 'Розібратись із проблемою',
    hint: '5 Whys · Fishbone · Iceberg',
    methodSlug: '5-whys',
    methodName: '5 Whys',
    placeholder:
      'Опиши проблему-симптом, не розв\'язання. Наприклад: "Команда стабільно зриває дедлайни."',
  },
  {
    key: 'plan',
    label: 'Перевірити план',
    hint: 'Pre-Mortem · Inversion · Second-Order',
    methodSlug: 'pre-mortem',
    methodName: 'Pre-Mortem',
    placeholder:
      'Опиши план, який збираєшся запустити. Наприклад: "Лаунч нового продукту через 2 місяці."',
  },
  {
    key: 'analyze',
    label: 'Проаналізувати ситуацію',
    hint: 'First Principles · MECE · SWOT',
    methodSlug: 'first-principles',
    methodName: 'First Principles',
    placeholder:
      'Опиши ситуацію, яку треба розкласти. Наприклад: "Ринок сповільнюється — потрібен новий підхід."',
  },
  {
    key: 'concept',
    label: 'Зрозуміти концепт',
    hint: 'Feynman · Socratic',
    methodSlug: 'feynman-technique',
    methodName: 'Feynman',
    placeholder:
      'Що хочеш зрозуміти глибше? Наприклад: "Як насправді працює inflation?"',
  },
  {
    key: 'other',
    label: 'Інше — вільний режим',
    hint: 'Бот сам обере фреймворк',
    placeholder:
      'Опиши що завгодно — бот обере відповідний метод. Наприклад: "Не можу обрати, з чого почати тиждень."',
  },
];

export function BotSelector() {
  const [intentKey, setIntentKey] = useState<string>('decision');
  const intent = INTENTS.find((i) => i.key === intentKey) || INTENTS[0];

  return (
    <div className="border border-noesis-ink bg-noesis-paper">
      <div className="p-6 border-b border-noesis-ink bg-noesis-paper-2">
        <div className="mono text-xs text-noesis-grey mb-3">ЩО ВИРІШУЄМО?</div>
        <div className="grid sm:grid-cols-[1fr_auto] gap-4 items-end">
          <label className="block">
            <select
              value={intentKey}
              onChange={(e) => setIntentKey(e.target.value)}
              className="w-full appearance-none bg-noesis-paper border border-noesis-ink px-4 py-3 text-base font-serif outline-none focus:bg-noesis-accent cursor-pointer"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23111' d='M6 8L0 0h12z'/%3E%3C/svg%3E\")",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 16px center',
                paddingRight: '40px',
              }}
            >
              {INTENTS.map((i) => (
                <option key={i.key} value={i.key}>
                  {i.label}
                </option>
              ))}
            </select>
          </label>
          <div className="mono text-xs text-noesis-grey self-end pb-3">{intent.hint}</div>
        </div>
      </div>

      <MethodChat
        key={intent.key /* re-mount on intent switch to clear state */}
        methodSlug={intent.methodSlug}
        methodName={intent.methodName}
        seedPrompt=""
        placeholder={intent.placeholder}
        variant="default"
      />

      <div className="p-4 mono text-[10px] text-noesis-grey border-t border-noesis-line bg-noesis-paper-2">
        ПИТАННЯМИ, НЕ ВІДПОВІДЯМИ · OPENROUTER · gpt-4o-mini
      </div>
    </div>
  );
}
