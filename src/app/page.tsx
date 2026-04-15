import Link from 'next/link'
import { ArrowRight, Cloud, Code2, GitBranch, Layers3, Rocket, ShieldCheck } from 'lucide-react'

const tracks = [
  {
    name: 'Python Track',
    href: 'https://python.youooo.com',
    badge: 'Live Track',
    icon: Code2,
    summary: 'Programming fundamentals, structured challenges, projects, and hands-on learning.',
    color: 'from-cyan-500/18 to-sky-500/6',
  },
  {
    name: 'Cloud Track',
    href: 'https://cloud.youooo.com',
    badge: 'Live Track',
    icon: Cloud,
    summary: 'AWS, DevOps, Kubernetes, labs, diagrams, and infrastructure thinking.',
    color: 'from-emerald-500/18 to-cyan-500/6',
  },
  {
    name: 'Git Track',
    href: 'https://git.youooo.com',
    badge: 'Live Track',
    icon: GitBranch,
    summary: 'Version control, collaboration workflow, branching, recovery, and deployment habits.',
    color: 'from-sky-500/18 to-violet-500/6',
  },
]

const principles = [
  {
    title: 'One hub, clear tracks',
    desc: 'Start at the academy hub, then move into the focused site that matches the skill you want to build.',
    icon: Layers3,
  },
  {
    title: 'Real-world learning',
    desc: 'The tracks are built around practical progress, not just passive reading.',
    icon: Rocket,
  },
  {
    title: 'Built to grow',
    desc: 'Python, Cloud, and Git are live now. More technical paths can plug into the same system later.',
    icon: ShieldCheck,
  },
]

export default function HomePage() {
  return (
    <div>
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute top-1/3 left-1/4 h-[360px] w-[360px] rounded-full bg-emerald-500/8 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse" />
            Academy hub · Python, Cloud, and Git live now
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-7xl font-display">
            One academy.
            <br />
            Three focused <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">technical tracks.</span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-slate-400 sm:text-xl">
            `academy.youooo.com` is the front door for the YouOOO learning system.
            Start here, then go deeper inside the dedicated Python, Cloud, and Git experiences.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://python.youooo.com"
              className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 text-base font-semibold text-slate-950 transition-all hover:scale-105 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25"
              target="_blank"
              rel="noopener"
            >
              Open Python track <ArrowRight size={18} />
            </a>
            <Link
              href="/courses"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              View academy catalog
            </Link>
          </div>

          <div className="mt-18 grid grid-cols-1 gap-6 text-left md:grid-cols-3">
            {tracks.map(({ name, href, badge, icon: Icon, summary, color }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener"
                className={`rounded-3xl border border-white/8 bg-[#0f1522]/90 bg-gradient-to-br ${color} p-6 transition-colors hover:border-cyan-400/30`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/8 bg-white/6">
                    <Icon className="text-cyan-300" size={22} />
                  </div>
                  <span className="rounded-full bg-white/6 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-300">{badge}</span>
                </div>
                <h2 className="mb-3 text-2xl text-white font-display">{name}</h2>
                <p className="mb-5 leading-relaxed text-slate-400">{summary}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                  Visit track <ArrowRight size={15} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-t border-white/5 px-4 py-20 sm:px-6">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/6 bg-[#0f1522] p-8">
            <span className="mb-5 inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-emerald-300">
              Academy structure
            </span>
            <h2 className="mb-4 text-4xl text-white font-display">This domain should explain the system, not duplicate a track.</h2>
            <p className="mb-6 leading-relaxed text-slate-400">
              The premium structure is simple: the academy homepage helps people choose where to begin, while each track gets its own stronger, more focused learning experience.
            </p>
            <div className="space-y-4">
              {[
                'academy.youooo.com = hub and decision point',
                'python.youooo.com = programming track',
                'cloud.youooo.com = infrastructure track',
                'git.youooo.com = workflow track',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/6 bg-white/3 px-4 py-4 text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {principles.map(({ title, desc, icon: Icon }) => (
              <div key={title} className="rounded-3xl border border-white/6 bg-[#0f1522] p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-500/15 bg-cyan-500/10">
                  <Icon className="text-cyan-300" size={20} />
                </div>
                <h3 className="mb-2 text-xl text-white font-display">{title}</h3>
                <p className="leading-relaxed text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-white font-display">Where do you want to go next?</h2>
          <p className="mx-auto max-w-2xl text-slate-500">Use the hub first, then choose the track that matches your current goal.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <a href="https://python.youooo.com" target="_blank" rel="noopener" className="rounded-3xl border border-white/6 bg-[#111118] p-7 transition-colors hover:border-cyan-400/20">
            <div className="mb-3 text-sm uppercase tracking-[0.18em] text-cyan-300">Python</div>
            <h3 className="mb-3 text-2xl text-white font-display">Build programming confidence</h3>
            <p className="leading-relaxed text-slate-500">Best for learners who want practice, projects, and hands-on code work.</p>
          </a>
          <a href="https://cloud.youooo.com" target="_blank" rel="noopener" className="rounded-3xl border border-white/6 bg-[#111118] p-7 transition-colors hover:border-emerald-400/20">
            <div className="mb-3 text-sm uppercase tracking-[0.18em] text-emerald-300">Cloud</div>
            <h3 className="mb-3 text-2xl text-white font-display">Think like an infrastructure builder</h3>
            <p className="leading-relaxed text-slate-500">Best for labs, architecture, deployment, DevOps, and cloud workflow thinking.</p>
          </a>
          <a href="https://git.youooo.com" target="_blank" rel="noopener" className="rounded-3xl border border-white/6 bg-[#111118] p-7 transition-colors hover:border-sky-400/20">
            <div className="mb-3 text-sm uppercase tracking-[0.18em] text-sky-300">Git</div>
            <h3 className="mb-3 text-2xl text-white font-display">Master developer workflow</h3>
            <p className="leading-relaxed text-slate-500">Best for source control, collaboration, branching habits, and safe release flow.</p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="rounded-3xl border border-cyan-500/15 bg-gradient-to-br from-cyan-950/40 to-emerald-950/20 p-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white font-display">Academy hub is ready</h2>
          <p className="mx-auto mb-8 max-w-lg text-slate-400">
            The homepage now has one job: help visitors understand the learning system and move into the right track fast.
          </p>
          <div className="mb-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="https://python.youooo.com" className="rounded-xl bg-cyan-500 px-8 py-4 text-base font-semibold text-slate-950 transition-all hover:scale-105 hover:bg-cyan-400" target="_blank" rel="noopener">
              Go to Python
            </a>
            <a href="https://cloud.youooo.com" className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10" target="_blank" rel="noopener">
              Go to Cloud
            </a>
            <a href="https://git.youooo.com" className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10" target="_blank" rel="noopener">
              Go to Git
            </a>
          </div>
          <div className="flex flex-col justify-center gap-3 text-sm text-slate-500 sm:flex-row">
            {['One clean hub', 'Three live technical tracks', 'More paths can plug in later'].map((t) => (
              <span key={t} className="flex items-center justify-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
