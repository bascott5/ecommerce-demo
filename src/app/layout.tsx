import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';

const inter = Inter({ subsets: ['latin'] })

import Navbar from '@/components/navbar';
export const metadata: Metadata = {
  title: 'Ecommerce Store',
  description: 'This is a demo of an ecommerce store',
}
// NOTE: removed body tag surrounging {children}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar>
        {children}
      </Navbar>
    </html>
  )
}
