import type { Metadata } from 'next'
import { Bakbak_One } from 'next/font/google'


const inter = Bakbak_One({
  weight:[ '400'],
  subsets:['devanagari'],
})


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
