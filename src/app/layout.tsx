import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from 'next';

// 1. Importe as fontes do Google diretamente
import { Crimson_Pro, Great_Vibes } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

// 2. Configure as fontes do Google (elas se tornam variáveis CSS)
const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body', // Fonte principal do corpo do texto
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display', // Fonte para títulos grandes e de destaque
});

// 3. Configure suas fontes locais (já estava quase perfeito)
const fonteCursiva = localFont({
  src: '../assets/fonts/Sloop-ScriptThree.ttf',
  variable: '--font-cursive', // Fonte para detalhes e assinaturas
});

const fonteSerifada = localFont({
  src: '../assets/fonts/TypewriterPress-Regular.ttf', // Usando a nova fonte
  variable: '--font-serif', // Fonte para títulos (headline)
});

export const metadata: Metadata = {
  title: 'Chlorine Ateliê',
  description: 'Arte em Biscuit, com Alma e Afeto.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${crimsonPro.variable} ${greatVibes.variable} ${fonteCursiva.variable} ${fonteSerifada.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased"> {/* font-body será a padrão */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}