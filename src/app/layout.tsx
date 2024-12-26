import "@/shared/ui/global.css";
import { inter } from "@/shared/ui/fonts";

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
