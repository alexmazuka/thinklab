'use client';

import { useChat } from 'ai/react';
import { useState } from 'react';

export function MethodChat({
  methodSlug,
  methodName,
  seedPrompt,
  placeholder,
  variant = 'default',
}: {
  methodSlug?: string;
  methodName?: string;
  seedPrompt?: string;
  placeholder?: string;
  variant?: 'default' | 'compact';
}) {
  const [open, setOpen] = useState(variant === 'default');

  const { messages, input, handleInputChange, handleSubmit, isLoading, error, stop } = useChat({
    api: '/api/bot',
    body: { method: methodSlug },
    initialInput: seedPrompt || '',
  });

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="btn-primary"
        type="button"
      >
        Спробувати з ботом <span className="arrow">→</span>
      </button>
    );
  }

  return (
    <div className="border border-noesis-ink bg-noesis-paper">
      <div className="flex items-center justify-between p-4 border-b border-noesis-line bg-noesis-paper-2">
        <div className="mono text-xs">
          {methodName ? `БОТ-КОУЧ · ${methodName.toUpperCase()}` : 'БОТ-КОУЧ · ВІЛЬНИЙ РЕЖИМ'}
        </div>
        <div className="mono text-[10px] text-noesis-grey">OPENROUTER · gpt-4o-mini</div>
      </div>

      {messages.length === 0 ? (
        <div className="p-5 text-sm text-noesis-grey leading-relaxed">
          {methodName
            ? `Опиши свою проблему — бот проведе тебе через метод "${methodName}". Питаннями, не готовими відповідями.`
            : 'Опиши ситуацію — бот обере відповідний фреймворк і проведе тебе через нього.'}
        </div>
      ) : (
        <div className="p-5 space-y-3 max-h-[420px] overflow-y-auto">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                  m.role === 'user'
                    ? 'bg-noesis-accent text-noesis-ink border border-noesis-accent'
                    : 'bg-noesis-ink text-noesis-paper border border-noesis-ink'
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}
          {isLoading && messages[messages.length - 1]?.role === 'user' && (
            <div className="flex justify-start">
              <div className="bg-noesis-ink-soft text-noesis-paper px-4 py-3 text-xs mono border border-noesis-ink">
                …думаю
              </div>
            </div>
          )}
        </div>
      )}

      {error && (
        <div className="px-5 py-3 text-xs text-red-600 border-t border-noesis-line bg-red-50">
          Помилка: {error.message || 'щось пішло не так'}. Спробуй ще раз.
        </div>
      )}

      <form onSubmit={handleSubmit} className="p-4 border-t border-noesis-line flex gap-2">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder={placeholder || (methodName ? `Опиши ситуацію для "${methodName}"…` : 'Опиши ситуацію…')}
          className="flex-1 border border-noesis-ink px-4 py-3 text-sm bg-noesis-paper outline-none focus:bg-noesis-paper-2"
          disabled={isLoading}
        />
        {isLoading ? (
          <button
            type="button"
            onClick={stop}
            className="px-5 bg-noesis-grey text-noesis-paper font-medium text-[13px]"
          >
            Стоп
          </button>
        ) : (
          <button
            type="submit"
            disabled={!input.trim()}
            className="px-5 bg-noesis-ink text-noesis-paper font-medium text-[13px] hover:bg-noesis-accent hover:text-noesis-ink transition-colors disabled:opacity-40"
          >
            →
          </button>
        )}
      </form>
    </div>
  );
}
