'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export function CopyButton({ text, label = 'Скопіювати шаблон', eventName = 'Copy Template' }: { text: string; label?: string; eventName?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      if (typeof window !== 'undefined' && (window as unknown as { plausible?: (event: string, opts?: unknown) => void }).plausible) {
        (window as unknown as { plausible: (event: string, opts?: unknown) => void }).plausible(eventName);
      }
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore — older browsers without clipboard API
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="btn-accent"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" /> Скопійовано
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" /> {label}
        </>
      )}
    </button>
  );
}
