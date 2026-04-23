import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'ThinkLab — шаблони мислення під рукою',
    template: '%s · ThinkLab',
  },
  description:
    'Каталог наукових методів мислення у форматі готових шаблонів. First Principles, 5 Whys, Pre-Mortem, DECIDE — коли, навіщо, як застосувати.',
  metadataBase: new URL('https://thinking.matsuka.online'),
  authors: [{ name: 'Oleksiy Matsuka', url: 'https://matsuka.online' }],
  creator: 'Oleksiy Matsuka',
  openGraph: {
    title: 'ThinkLab — шаблони мислення під рукою',
    description:
      'Каталог наукових методів мислення у форматі готових шаблонів. Безкоштовний ранній доступ.',
    url: 'https://thinking.matsuka.online',
    siteName: 'ThinkLab',
    images: ['/og.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ThinkLab by Oleksiy Matsuka',
    description: 'Шаблони мислення під рукою.',
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
};

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
        {plausibleDomain && (
          <Script
            strategy="afterInteractive"
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.tagged-events.js"
          />
        )}
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
