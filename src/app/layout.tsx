import '@/app/styles/global.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WANHUN - Solutions',
  description: '%s | WANHUN - Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
