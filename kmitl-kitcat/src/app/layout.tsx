import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'

import { IBM_Plex_Sans_Thai } from 'next/font/google'
const ibmplexsansthai = IBM_Plex_Sans_Thai({
  subsets: ['thai'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

import Head from "next/head";
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Kitcat คิดแคท',
  description: 'รับฝากเลี้ยงแมว ดูแลแมวของคุณ',
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={ibmplexsansthai.className}>{children}</body>
    </html>
  )
}
