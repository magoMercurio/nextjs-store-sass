// import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'
import '@/sass/globals.sass'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="es">
      <body className={roboto.className} >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
