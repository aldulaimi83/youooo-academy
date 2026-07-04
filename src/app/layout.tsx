import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://youooo.com'),
  title: {
    default: 'The YouOOO Network',
    template: '%s | YouOOO',
  },
  description:
    'The YouOOO Network brings free browser games, Quran study tools, resume tools, learning courses, and useful web utilities together in one simple place.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'The YouOOO Network',
    description:
      'Free browser games, Quran study tools, resume tools, learning courses, and useful web utilities — all in one simple place.',
    url: 'https://youooo.com',
    siteName: 'YouOOO',
    type: 'website',
    images: [
      {
        url: '/og-youooo.svg',
        width: 1200,
        height: 630,
        alt: 'The YouOOO Network',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The YouOOO Network',
    description:
      'Free browser games, Quran study tools, resume tools, learning courses, and useful web utilities — all in one simple place.',
    images: ['/og-youooo.svg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#0a0a0f]">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
