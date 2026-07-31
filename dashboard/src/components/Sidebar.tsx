'use client'

import Link from 'next/link'

const menuItems = [
  { name: 'Dashboard', href: '/' },
  { name: 'Anúncios', href: '/anuncios' },
  { name: 'Auditoria', href: '/auditoria' },
  { name: 'Clientes', href: '/clientes' },
  { name: 'Comissões', href: '/comissoes' },
  { name: 'Conversas', href: '/conversas' },
  { name: 'Pagamentos', href: '/pagamentos' },
  { name: 'Pedidos', href: '/pedidos' },
  { name: 'Repasses', href: '/repasses' },
  { name: 'Saúde', href: '/saude' },
]

export default function Sidebar() {
  return (
    <nav>
      <ul>
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}