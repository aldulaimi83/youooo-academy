import Link from 'next/link'
import { ArrowRight, BookOpen, Award, Users, Zap, CheckCircle } from 'lucide-react'
import CourseCard from '@/components/CourseCard'
import { courses } from '@/lib/courses'

const stats = [
  { label: 'Courses', value: '6+' },
  { label: 'Students', value: '2,400+' },
  { label: 'Certificates Issued', value: '900+' },
  { label: 'Avg Rating', value: '4.9★' },
]

const features = [
  { icon: BookOpen, title: 'Structured Curriculum', desc: 'Every course is carefully structured from basics to advanced — no gaps, no fluff.' },
  { icon: Award, title: 'Certificates', desc: 'Earn verifiable certificates upon completion that you can share on LinkedIn.' },
  { icon: Zap, title: 'Learn by Doing', desc: 'Real projects, real code, real results. Not just theory.' },
  { icon: Users, title: 'Community', desc: 'Join a community of learners. Ask questions, share progress, get unstuck.' },
]

export default function HomePage() {
  const featured = courses.filter((c) => c.featured)

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-600/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs px-4 py-2 rounded-full mb-8 font-medium">
            <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
            6 platforms · All live · Start for free
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
            Learn. Build.{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Get Hired.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Youooo Academy is a modern learning platform with courses in Python, Linux, Git, Cloud, Chess, and AI. Real projects. Real certificates. Real skills.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/courses"
              className="flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25"
            >
              Browse courses <ArrowRight size={18} />
            </Link>
            <Link
              href="/pricing"
              className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all"
            >
              See pricing
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-20 max-w-2xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/5 rounded-2xl px-4 py-5">
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-white">Featured Courses</h2>
            <p className="text-slate-500 mt-1">Our most popular learning paths</p>
          </div>
          <Link href="/courses" className="text-sm text-violet-400 hover:text-violet-300 flex items-center gap-1">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Why Youooo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 border-t border-white/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Why Youooo Academy?</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Built for people who want to actually learn, not just watch videos.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-[#111118] border border-white/5 rounded-2xl p-6 hover:border-violet-500/20 transition-colors">
              <div className="w-10 h-10 bg-violet-500/10 rounded-xl flex items-center justify-center mb-4">
                <Icon size={20} className="text-violet-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="bg-gradient-to-br from-violet-900/30 to-cyan-900/10 border border-violet-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Start learning today</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Join thousands of learners. First 2 courses are free — no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Link
              href="/auth/signup"
              className="bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all hover:scale-105"
            >
              Create free account
            </Link>
            <Link
              href="/courses"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all"
            >
              Browse courses
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm text-slate-500">
            {['No credit card required', 'Cancel anytime', 'Certificate included'].map((t) => (
              <span key={t} className="flex items-center gap-1.5 justify-center">
                <CheckCircle size={14} className="text-emerald-500" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
