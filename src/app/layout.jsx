import './globals.css';
import { CartProvider } from '../context/CartContext'; // caminho correto
import { Geist } from 'next/font/google';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });

export const metadata = {
  title: 'Bloom Store',
  description: 'Loja de exemplo com Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.variable} antialiased`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
