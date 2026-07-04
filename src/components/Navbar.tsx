'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import { Gamepad2, BookOpen, FileText, GraduationCap, Wrench, Menu, X } from 'lucide-react'

const navItems: Array<{ label: string; href: string; external?: boolean; icon?: LucideIcon }> = [
  { label: 'Home', href: '/' },
  { label: 'Games', href: 'https://game.youooo.com', external: true, icon: Gamepad2 },
  { label: 'Quran', href: 'https://quran.youooo.com', external: true, icon: BookOpen },
  { label: 'Resume', href: 'https://resume.youooo.com', external: true, icon: FileText },
  { label: 'Academy', href: '/courses', icon: GraduationCap },
  { label: 'Tools', href: '#tools', icon: Wrench },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#d4b790]/20 bg-[#f7efe0]/88 text-[#3a2818] backdrop-blur-md shadow-[0_10px_30px_rgba(74,50,28,0.08)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#e2bf84] to-[#b98a4c] font-bold text-[#2f2015] text-lg shadow-sm">
            Y
          </div>
          <span className="text-lg font-semibold tracking-tight text-[#2f2015]">
            Youooo <span className="text-[#8b6438]">Network</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {navItems.map((item) => {
            const Icon = item.icon
            const classes =
              'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-[#5b3f24] transition-colors hover:bg-[#f1e3cc] hover:text-[#24170f]'

            return item.external ? (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className={classes}>
                {Icon ? <Icon size={15} /> : null}
                {item.label}
              </a>
            ) : (
              <Link key={item.label} href={item.href} className={classes}>
                {Icon ? <Icon size={15} /> : null}
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/pricing" className="rounded-full border border-[#d2b48b] px-4 py-2 text-sm font-medium text-[#6a4a2a] transition-colors hover:bg-[#f4e8d7]">
            Pricing
          </Link>
          <Link href="/auth/signup" className="rounded-full bg-[#b8894c] px-4 py-2 text-sm font-semibold text-[#2a1a0f] transition-colors hover:bg-[#c69657]">
            Start free
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="text-[#6a4a2a] md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-[#d4b790]/20 bg-[#f8f1e5] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const classes = 'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#5d4126] hover:bg-[#f2e3cd]'

              return item.external ? (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className={classes} onClick={() => setOpen(false)}>
                  {Icon ? <Icon size={16} /> : null}
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} href={item.href} className={classes} onClick={() => setOpen(false)}>
                  {Icon ? <Icon size={16} /> : null}
                  {item.label}
                </Link>
              )
            })}
          </div>
          <div className="mt-4 flex gap-3">
            <Link href="/pricing" className="flex-1 rounded-full border border-[#d2b48b] px-4 py-3 text-center text-sm font-medium text-[#6a4a2a]" onClick={() => setOpen(false)}>
              Pricing
            </Link>
            <Link href="/auth/signup" className="flex-1 rounded-full bg-[#b8894c] px-4 py-3 text-center text-sm font-semibold text-[#2a1a0f]" onClick={() => setOpen(false)}>
              Start free
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
