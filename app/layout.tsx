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
  const socialIcons = [
    { link: '/', iconPath: '/icons/x_logo.svg.svg' },
    { link: '/', iconPath: '/icons/instagram_logo.svg.svg' },
    { link: '/', iconPath: '/icons/tiktok_logo.svg.svg' },
    { link: '/', iconPath: '/icons/facebook_logo.svg.svg' },
    { link: '/', iconPath: '/icons/threads_logo.svg.svg' },
  ];
  return (
    <html lang="en">
      <body className={inter.className + ' mainGrid' + ' min-h-screen'}>
        <Header socialIcons={socialIcons} />
        <main
          className="fullWidth"
          id="main">
          {children}
        </main>
        <Footer socialIcons={socialIcons} />
      </body>
    </html>
  );
}
