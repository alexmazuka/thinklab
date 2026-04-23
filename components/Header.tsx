'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
  { href: '/methods', label: 'Методи' },
  { href: '/bot', label: 'Бот' },
  { href: '/about', label: 'Про проєкт' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-noesis-line bg-noesis-paper/90 backdrop-blur-md">
      <div className="wrap flex items-center gap-8 py-4">
        <Link href="/" className="flex items-center gap-2.5 font-serif text-[22px] tracking-tight">
          <span className="inline-block h-2.5 w-2.5 bg-noesis-accent border border-noesis-ink" />
          ThinkLab
        </Link>

        <nav className="hidden md:flex items-center gap-[22px] ml-auto text-sm">
          {NAV.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + '/');
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 hover:after:bg-noesis-ink ${
                  active
                    ? "after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-noesis-ink"
                    : "hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:right-0 hover:after:-bottom-0.5 hover:after:h-0.5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/#early-access"
          className="ml-auto md:ml-0 border border-noesis-ink bg-noesis-ink text-noesis-paper px-3.5 py-2 text-[13px] font-medium hover:bg-noesis-accent hover:text-noesis-ink transition-colors"
        >
          Ранній доступ
        </Link>
      </div>
    </header>
  );
}
