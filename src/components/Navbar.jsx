import { Link, useLocation } from 'react-router-dom'
import { Article, House } from '@phosphor-icons/react'

const links = [
  { to: '/', label: '首页', icon: House },
  { to: '/blog', label: '文章', icon: Article },
]

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200/80 bg-zinc-50/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6">
        <Link
          to="/"
          className="text-lg font-bold tracking-tight text-zinc-900 hover:text-emerald-600 transition-colors"
        >
          周祖豪
        </Link>

        <ul className="flex items-center gap-1">
          {links.map(({ to, label, icon: Icon }) => {
            const active = to === '/'
              ? pathname === '/'
              : pathname.startsWith(to)
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? 'bg-zinc-200/70 text-zinc-900'
                      : 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700'
                  }`}
                >
                  <Icon weight="bold" className="h-4 w-4" />
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
