import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import '../styles/globals.css'
import { Providers } from './providers'

const workSans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Ygor's Portfolio`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Providers>
        <body className={workSans.className}>{children}</body>
      </Providers>
    </html>
  )
}
