import { useState } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import {
  Bell,
  Briefcase,
  ChevronDown,
  Menu,
  MessageSquare,
  User,
  Wallet,
  X,
} from 'lucide-react'
import { getInitials } from '@/lib/utils'

/** Nav links — only /tim-viec is registered; others use <a> until routes exist */
const registeredLinks = [
  { href: '/tim-viec' as const, label: 'Tìm việc', registered: true },
]
const unregisteredLinks = [
  { href: '/cong-viec-cua-toi', label: 'Việc của tôi' },
  { href: '/tin-nhan', label: 'Tin nhắn' },
  { href: '/vi', label: 'Ví' },
]

const userName = 'Nguyễn Hà'

export default function Navbar() {
  const location = useLocation()
  const pathname = location.pathname
  const [mobileOpen, setMobileOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  const linkClass = (href: string) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      pathname.startsWith(href)
        ? 'bg-primary/10 text-primary'
        : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg tracking-tight text-foreground">
              MiGig
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {registeredLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={linkClass(link.href)}
              >
                {link.label}
              </Link>
            ))}
            {unregisteredLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={linkClass(link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <a
              href="/tin-nhan"
              className="hidden md:flex relative p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <MessageSquare className="w-5 h-5 text-muted-foreground" />
              <span className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center text-[10px] font-bold bg-primary text-primary-foreground rounded-full">
                3
              </span>
            </a>
            <button className="hidden md:flex p-2 rounded-lg hover:bg-secondary transition-colors">
              <Bell className="w-5 h-5 text-muted-foreground" />
            </button>

            {/* Profile dropdown */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-lg hover:bg-secondary transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                  {getInitials(userName)}
                </div>
                <span className="text-sm font-medium text-foreground">
                  {userName}
                </span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-1 w-48 bg-card border border-border rounded-lg shadow-lg py-1 z-50">
                  <Link
                    to="/profile"
                    onClick={() => setProfileOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-secondary"
                  >
                    <User className="w-4 h-4" /> Hồ sơ của tôi
                  </Link>
                  <a
                    href="/vi"
                    onClick={() => setProfileOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-secondary"
                  >
                    <Wallet className="w-4 h-4" /> Ví của tôi
                  </a>
                  <hr className="my-1 border-border" />
                  <Link
                    to="/login"
                    onClick={() => setProfileOpen(false)}
                    className="block px-4 py-2 text-sm text-destructive hover:bg-secondary"
                  >
                    Đăng xuất
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-3 flex flex-col gap-1">
          {registeredLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className={linkClass(link.href)}
            >
              {link.label}
            </Link>
          ))}
          {unregisteredLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={linkClass(link.href)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-border mt-2 flex flex-col gap-1">
            <Link
              to="/profile"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-secondary"
            >
              Hồ sơ
            </Link>
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-destructive"
            >
              Đăng xuất
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
