import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center font-bold text-white">
                Y
              </div>
              <span className="font-semibold text-white">Youooo Academy</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Modern learning. Real skills. Built to scale.
            </p>
          </div>

          {/* Learn */}
          <div>
            <h4 className="text-white text-sm font-medium mb-3">Learn</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="/courses" className="hover:text-slate-300 transition-colors">All Courses</Link></li>
              <li><Link href="/courses?cat=programming" className="hover:text-slate-300 transition-colors">Programming</Link></li>
              <li><Link href="/courses?cat=devops" className="hover:text-slate-300 transition-colors">DevOps</Link></li>
              <li><Link href="/courses?cat=ai" className="hover:text-slate-300 transition-colors">AI</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-medium mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="/pricing" className="hover:text-slate-300 transition-colors">Pricing</Link></li>
              <li><Link href="/dashboard" className="hover:text-slate-300 transition-colors">Dashboard</Link></li>
              <li><Link href="/auth/signup" className="hover:text-slate-300 transition-colors">Sign Up</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-sm font-medium mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link></li>
              <li><Link href="/refund" className="hover:text-slate-300 transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Youooo Academy. All rights reserved.</p>
          <p>Built with Next.js · Hosted on Vercel</p>
        </div>
      </div>
    </footer>
  )
}
