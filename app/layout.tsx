import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import MainNavigation from '../components/ui/MainNavigation'
import React from "react";

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Flashcards App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.className} p-0 m-0 bg-customBgColor`}>
      <body className="font-display">
        <header>
          <MainNavigation />
        </header>
        <main className="px-0 pt-12 pb-24 mx-auto w-11/12 sm:w-4/5 lg:w-3/4 lg:max-w-240">{children}</main>
      </body>
    </html>
  );
}
