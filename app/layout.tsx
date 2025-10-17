import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AquaBrain Demo',
  description: 'Next.js 14 TypeScript starter with RTL/i18n (Hebrew), Tailwind CSS, app router demo workspace',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
