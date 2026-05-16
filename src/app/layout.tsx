import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  ),
  title: {
    default: 'YOUR NAME — Portfolio',
    template: '%s — YOUR NAME',
  },
  description:
    'Web デザイナー YOUR NAME のポートフォリオサイト。コーポレートサイト・オウンドメディア・LP・バナーまで、これまでの制作実績を紹介します。',
  openGraph: {
    title: 'YOUR NAME — Portfolio',
    description:
      'Web デザイナー YOUR NAME のポートフォリオサイト。これまでの制作実績を紹介します。',
    type: 'website',
    locale: 'ja_JP',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
