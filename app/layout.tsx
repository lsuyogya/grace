import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import './globals.scss';
import Header from './Header';
import Footer from './Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Grace Support Services ',
  description: 'Grace Support Services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' mainGrid' + ' min-h-screen'}>
        <Header />
        <main className="fullWidth">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
