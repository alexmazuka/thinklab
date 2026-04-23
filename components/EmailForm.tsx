'use client';

import { useState } from 'react';

// Formspree form ID — можна перезаписати через NEXT_PUBLIC_FORMSPREE_ID на білді.
// Поки що — заглушка (треба створити форму на formspree.io і підставити свій ID).
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'xjgjynje';

export function EmailForm({
  placeholder = 'ти@домен.com',
  cta = 'Приєднатись',
  source = 'site',
  variant = 'light',
}: {
  placeholder?: string;
  cta?: string;
  source?: string;
  variant?: 'light' | 'dark';
}) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, source }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
        if (typeof window !== 'undefined' && (window as unknown as { plausible?: (event: string, opts?: unknown) => void }).plausible) {
          (window as unknown as { plausible: (event: string, opts?: unknown) => void }).plausible('Signup', { props: { source } });
        }
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const dark = variant === 'dark';

  if (status === 'success') {
    return (
      <div className={`mono ${dark ? 'text-noesis-accent' : 'text-noesis-ink'}`}>
        ✓ МАЙЖЕ — ПІДТВЕРДИ ЛИСТОМ.
      </div>
    );
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={`flex max-w-lg w-full border ${dark ? 'border-noesis-paper' : 'border-noesis-ink'}`}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className={`flex-1 bg-transparent border-none px-4 py-3 text-sm outline-none ${
            dark ? 'text-noesis-paper placeholder:text-noesis-grey-soft' : 'text-noesis-ink placeholder:text-noesis-grey'
          }`}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`px-5 font-medium text-[13px] border-l ${
            dark
              ? 'bg-noesis-accent text-noesis-ink border-noesis-paper'
              : 'bg-noesis-ink text-noesis-paper border-noesis-ink hover:bg-noesis-accent hover:text-noesis-ink transition-colors'
          }`}
        >
          {status === 'loading' ? '…' : cta}
        </button>
      </form>
      {status === 'error' && (
        <p className="mt-2 text-xs text-red-500">Щось зламалось. Спробуй ще раз.</p>
      )}
    </div>
  );
}
