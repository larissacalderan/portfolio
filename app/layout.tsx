import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Larissa Calderan | Desenvolvedora Full-stack",
  description: "Portfólio de Larissa Calderan, Desenvolvedora Full-stack.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="!scroll-smooth">
      <body
        className={`${inter.className} overflow-x-hidden bg-[#050505] text-gray-300 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
