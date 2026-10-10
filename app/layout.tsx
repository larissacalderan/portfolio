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
  const setInitialTheme = `(function(){try{var t=localStorage.getItem('theme'); if(!t){t = 'dark';} document.documentElement.setAttribute('data-theme', t);}catch(e){} })()`;
  return (
    <html lang="pt-br" data-theme="dark" className="!scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        {children}
      </body>
    </html>
  );
}
