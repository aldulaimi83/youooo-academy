import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <img src="/youooo_logo.png" alt="YouOOO logo" className="h-8 w-auto rounded-md" />
              <span className="font-display font-semibold text-white">YouOOO Academy</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              The learning hub for Python, Cloud, Git, and future technical tracks.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium mb-3">Tracks</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="https://python.youooo.com" className="hover:text-slate-300 transition-colors">Python</Link></li>
              <li><Link href="https://cloud.youooo.com" className="hover:text-slate-300 transition-colors">Cloud</Link></li>
              <li><Link href="https://git.youooo.com" className="hover:text-slate-300 transition-colors">Git</Link></li>
              <li><Link href="/courses" className="hover:text-slate-300 transition-colors">Catalog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium mb-3">Academy</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="/pricing" className="hover:text-slate-300 transition-colors">Pricing</Link></li>
              <li><Link href="/dashboard" className="hover:text-slate-300 transition-colors">Dashboard</Link></li>
              <li><Link href="/courses" className="hover:text-slate-300 transition-colors">Course Library</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium mb-3">YouOOO Network</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="https://quran.youooo.com" className="hover:text-slate-300 transition-colors">Quran</Link></li>
              <li><Link href="https://resume.youooo.com" className="hover:text-slate-300 transition-colors">Resume</Link></li>
              <li><Link href="https://youooo.com" className="hover:text-slate-300 transition-colors">Main hub</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} YouOOO Academy. All rights reserved.</p>
          <p>Built as the learning hub for the YouOOO network.</p>
        </div>
      </div>
    </footer>
  )
}
