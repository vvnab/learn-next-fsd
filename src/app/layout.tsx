import "@/shared/ui/global.css";
import { inter } from "@/shared/ui/fonts";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acme Dashboard (FSD)',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
