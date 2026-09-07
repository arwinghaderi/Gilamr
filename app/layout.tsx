import type { Metadata } from "next";
import { abarFaNum } from "@/lib/fonts";
import ThemeProvider from "@/providers/ThemeProvider";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  icons: {
    icon: "/images/Logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fa"
      className={`${abarFaNum.variable} h-full antialiased`}
      dir="rtl"
      suppressHydrationWarning
    >
      <Analytics />
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
