import { Link, useLocation } from 'react-router-dom'
import { Article, House, Sparkle } from '@phosphor-icons/react'

const links = [
  { to: '/', label: '首页', icon: House },
  { to: '/blog', label: '文章', icon: Article },
]

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-white transition-colors hover:text-emerald-400"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
            <Sparkle weight="fill" className="h-4 w-4" />
          </span>
          周祖豪
        </Link>

        <ul className="flex items-center gap-1">
          {links.map(({ to, label, icon: Icon }) => {
            const active = to === '/' ? pathname === '/' : pathname.startsWith(to)
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                    active
                      ? 'bg-white/[0.08] text-white'
                      : 'text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200'
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
