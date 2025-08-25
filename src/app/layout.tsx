import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const fonteCursiva = localFont({
  src: [
    {
      path: './fonts/Sloop-ScriptThree.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-cursive',
})

const fonteSerifada = localFont({
  src: [
    {
      path: './fonts/TYPEWR__.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Chlorine Ateliê',
  description: 'Arte em Biscuit, com Alma e Afeto.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* mantém os links do Google por enquanto */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700&family=Great+Vibes&family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${fonteCursiva.variable} ${fonteSerifada.variable} font-body antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  )
}
