'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/codes', label: 'Active Codes' },
  { path: '/units', label: 'Unit Database' },
  { path: '/guides', label: 'Strategy Guides' },
  { path: '/faq', label: 'FAQ' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold text-green-600">🌱 GTD Central</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center text-sm font-medium transition-colors ${
                  item.path === pathname 
                    ? "text-green-600 font-semibold" 
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://www.roblox.com/games/13253735473/Garden-Tower-Defense"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground hidden md:flex items-center gap-2"
          >
            <span className="text-sm">🎮 Play GTD</span>
          </Link>
        </div>
      </div>
    </header>
  )
}