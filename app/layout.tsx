import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import './globals.scss';
import Header from './Header';
import Footer from './Footer';
import LayoutServerComp from './layoutServerComp';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Grace Support Services ',
  description: 'Grace Support Services',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' mainGrid' + ' min-h-screen'}>
        <LayoutServerComp>{children}</LayoutServerComp>
      </body>
    </html>
  );
}
