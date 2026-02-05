/*** src/app/layout.tsx ***/
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Living Ambientes Planejados | Móveis de Alto Padrão",
  description:
    "Portfólio institucional de alto padrão da Living Ambientes Planejados. Sofisticação, exclusividade e móveis sob medida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-stone-50 text-zinc-950 font-sans selection:bg-zinc-900 selection:text-white flex flex-col min-h-screen`}
      >
        <Header />
        <div className="flex-1 pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
