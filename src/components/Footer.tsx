import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#d4b790]/20 bg-[#f7efe0] text-[#3a2818]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="mb-10 grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#e2bf84] to-[#b8894c] font-bold text-[#2f2015]">
                Y
              </div>
              <span className="font-semibold text-[#2f2015]">Youooo Network</span>
            </div>
            <p className="text-sm leading-relaxed text-[#6d5844]">
              Free browser games, Quran study, career tools, learning paths, and practical utilities in one network.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-[#2f2015]">Explore</h4>
            <ul className="space-y-2 text-sm text-[#6d5844]">
              <li><Link href="/" className="transition-colors hover:text-[#2f2015]">Home</Link></li>
              <li><a href="https://game.youooo.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#2f2015]">Games</a></li>
              <li><a href="https://quran.youooo.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#2f2015]">Quran</a></li>
              <li><a href="https://resume.youooo.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#2f2015]">Resume</a></li>
            </ul>
          </div>

          {/* Academy */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-[#2f2015]">Academy</h4>
            <ul className="space-y-2 text-sm text-[#6d5844]">
              <li><Link href="/courses" className="transition-colors hover:text-[#2f2015]">Courses</Link></li>
              <li><Link href="/pricing" className="transition-colors hover:text-[#2f2015]">Pricing</Link></li>
              <li><Link href="/dashboard" className="transition-colors hover:text-[#2f2015]">Dashboard</Link></li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-[#2f2015]">Tools</h4>
            <ul className="space-y-2 text-sm text-[#6d5844]">
              <li><Link href="#tools" className="transition-colors hover:text-[#2f2015]">Utilities</Link></li>
              <li><Link href="#faq" className="transition-colors hover:text-[#2f2015]">FAQ</Link></li>
              <li><Link href="#what-is-youooo" className="transition-colors hover:text-[#2f2015]">What is YouOOO?</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-[#2f2015]">Legal</h4>
            <ul className="space-y-2 text-sm text-[#6d5844]">
              <li><a href="/#privacy" className="transition-colors hover:text-[#2f2015]">Privacy Policy</a></li>
              <li><a href="/#contact" className="transition-colors hover:text-[#2f2015]">Contact</a></li>
              <li><Link href="/sitemap.xml" className="transition-colors hover:text-[#2f2015]">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#d4b790]/20 pt-6 text-xs text-[#7b664f] sm:flex-row">
          <p>© {new Date().getFullYear()} Youooo Academy. All rights reserved.</p>
          <p>Built with Next.js · Hosted on Vercel</p>
        </div>
      </div>
    </footer>
  )
}
