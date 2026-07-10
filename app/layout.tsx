"use client"
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from "next-themes";
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white dark:bg-zinc-950 min-h-screen flex flex-col">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          <div className="flex-1 pt-16">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
