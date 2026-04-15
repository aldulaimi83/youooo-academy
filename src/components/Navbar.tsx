'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Hub' },
  { href: 'https://python.youooo.com', label: 'Python' },
  { href: 'https://cloud.youooo.com', label: 'Cloud' },
  { href: 'https://git.youooo.com', label: 'Git' },
  { href: '/courses', label: 'Courses' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/youooo_logo.png" alt="YouOOO logo" className="h-9 w-auto rounded-lg" />
          <span className="font-display font-semibold text-white text-lg tracking-tight">
            YouOOO <span className="text-cyan-300">Academy</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-400">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="https://youooo.com" className="text-sm text-slate-300 hover:text-white px-4 py-2 transition-colors">
            More from YouOOO
          </Link>
          <Link href="/courses" className="text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-4 py-2 rounded-lg transition-colors font-semibold">
            Explore paths
          </Link>
        </div>

        <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0a0a0f] px-4 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-slate-300 hover:text-white text-sm"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="https://youooo.com" className="text-slate-300 hover:text-white text-sm" onClick={() => setOpen(false)}>
            More from YouOOO
          </Link>
          <Link href="/courses" className="bg-cyan-500 text-slate-950 text-sm px-4 py-2 rounded-lg text-center font-semibold" onClick={() => setOpen(false)}>
            Explore paths
          </Link>
        </div>
      )}
    </header>
  )
}
