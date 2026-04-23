import Link from 'next/link';

export type Method = {
  slug: string;
  name: string;
  nameEn: string;
  category: 'critical' | 'decision' | 'problem' | 'strategy' | 'mental';
  tldr: string;
  time: string;
};

const categoryLabels: Record<Method['category'], string> = {
  critical: 'КРИТИЧНЕ',
  decision: 'РІШЕННЯ',
  problem: 'ПРОБЛЕМИ',
  strategy: 'СТРАТЕГІЯ',
  mental: 'МЕНТАЛЬНІ',
};

export function MethodCard({ method }: { method: Method }) {
  return (
    <Link
      href={`/methods/${method.slug}`}
      className="group block p-7 border border-noesis-ink bg-noesis-paper hover:bg-noesis-paper-2 transition-colors min-h-[220px] flex flex-col"
    >
      <div className="flex justify-between items-start mb-3">
        <span className="mono text-noesis-grey">{categoryLabels[method.category]}</span>
        <span className="mono text-noesis-grey">{method.time}</span>
      </div>
      <h3 className="font-serif text-2xl leading-tight mb-1 group-hover:underline underline-offset-4">{method.name}</h3>
      <p className="text-xs text-noesis-grey italic mb-3">{method.nameEn}</p>
      <p className="text-sm text-noesis-grey/90 leading-relaxed flex-1">{method.tldr}</p>
    </Link>
  );
}
