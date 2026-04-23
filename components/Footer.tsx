import Link from 'next/link';
import { EmailForm } from './EmailForm';

export function Footer() {
  return (
    <footer className="bg-noesis-ink text-noesis-paper mt-auto pt-20 pb-10">
      <div className="wrap">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr] pb-14 border-b border-white/10">
          <div>
            <Link href="/" className="flex items-center gap-2.5 font-serif text-[22px] tracking-tight mb-4">
              <span className="inline-block h-2.5 w-2.5 bg-noesis-accent border border-noesis-paper" />
              ThinkLab
            </Link>
            <p className="font-serif text-[28px] leading-tight max-w-sm">
              Три методи у твій inbox <em className="text-noesis-accent">щотижня.</em>
            </p>
            <div className="mt-5">
              <EmailForm cta="Приєднатись" source="footer" variant="dark" />
            </div>
            <p className="mono text-noesis-grey-soft mt-4">
              БЕЗКОШТОВНО · ВІДПИСКА У БУДЬ-ЯКИЙ ЧАС
            </p>
          </div>

          <FooterCol title="Продукт" links={[
            { href: '/methods', label: 'Каталог методів' },
            { href: '/bot', label: 'Бот-коуч' },
            { href: '/#early-access', label: 'Ранній доступ' },
          ]} />

          <FooterCol title="Про" links={[
            { href: '/about', label: 'Маніфест' },
            { href: 'https://matsuka.online', label: 'matsuka.online', external: true },
            { href: 'mailto:alex.mazuka@gmail.com', label: 'Контакт', external: true },
          ]} />

          <FooterCol title="Статус" links={[
            { href: '/#early-access', label: 'Фаза 1 — відкрита бета' },
            { href: '/about', label: 'Про підхід' },
          ]} />
        </div>

        <div className="flex justify-between flex-wrap gap-3 pt-7 text-xs text-noesis-grey-soft">
          <span>© 2026 ThinkLab · by <a href="https://matsuka.online" className="hover:text-noesis-accent">Oleksiy Matsuka</a></span>
          <span className="mono">THINK CLEARER · DECIDE BETTER</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string; external?: boolean }[];
}) {
  return (
    <div>
      <h4 className="mono text-noesis-grey-soft mb-4 font-medium">{title}</h4>
      <ul className="flex flex-col gap-2.5 text-sm">
        {links.map((l) =>
          l.external ? (
            <li key={l.href}>
              <a href={l.href} className="hover:text-noesis-accent">{l.label}</a>
            </li>
          ) : (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-noesis-accent">{l.label}</Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
