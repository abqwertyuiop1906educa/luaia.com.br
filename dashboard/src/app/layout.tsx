import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luaia Dashboard',
  description: 'Dashboard da plataforma luaia.com.br',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}