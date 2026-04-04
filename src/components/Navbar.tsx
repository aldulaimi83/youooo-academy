'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, BookOpen } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center font-bold text-white text-lg">
            Y
          </div>
          <span className="font-semibold text-white text-lg tracking-tight">
            Youooo <span className="text-violet-400">Academy</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-400">
          <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/auth/login"
            className="text-sm text-slate-300 hover:text-white px-4 py-2 transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/auth/signup"
            className="text-sm bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg transition-colors font-medium"
          >
            Get started free
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0a0a0f] px-4 py-4 flex flex-col gap-4">
          <Link href="/courses" className="text-slate-300 hover:text-white text-sm" onClick={() => setOpen(false)}>Courses</Link>
          <Link href="/pricing" className="text-slate-300 hover:text-white text-sm" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="/dashboard" className="text-slate-300 hover:text-white text-sm" onClick={() => setOpen(false)}>Dashboard</Link>
          <Link href="/auth/login" className="text-slate-300 hover:text-white text-sm" onClick={() => setOpen(false)}>Log in</Link>
          <Link href="/auth/signup" className="bg-violet-600 text-white text-sm px-4 py-2 rounded-lg text-center font-medium" onClick={() => setOpen(false)}>
            Get started free
          </Link>
        </div>
      )}
    </header>
  )
}
