'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/ui/navbar/Navbar'
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showNavbar = !pathname.startsWith('/order/session/');
  return (
    <html lang="en">
      <body className={inter.className}>
        {showNavbar && <Navbar />}
        {children}
      </body>
    </html>
  );
}
