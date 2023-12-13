import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store | Tienda',
  description: 'Tienda en Linea',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header>
          <nav>
            <ul>
              <li>Home</li>
              <li>Store</li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
