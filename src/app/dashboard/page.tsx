import Link from 'next/link'
import { BookOpen, Award, Clock, ArrowRight, Lock } from 'lucide-react'
import { courses } from '@/lib/courses'

export default function DashboardPage() {
  // Mock data — replace with real Supabase data once auth is wired up
  const enrolledCourses = courses.slice(0, 2)
  const completionPercent = [65, 30]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="mb-10">
        <p className="text-slate-500 text-sm mb-1">Welcome back</p>
        <h1 className="text-3xl font-bold text-white">Your Dashboard</h1>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        {[
          { icon: BookOpen, label: 'Enrolled', value: '2' },
          { icon: Clock, label: 'Hours Learned', value: '14' },
          { icon: Award, label: 'Certificates', value: '0' },
          { icon: BookOpen, label: 'Lessons Done', value: '12' },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="bg-[#111118] border border-white/5 rounded-2xl p-5">
            <div className="w-9 h-9 bg-violet-500/10 rounded-xl flex items-center justify-center mb-3">
              <Icon size={18} className="text-violet-400" />
            </div>
            <div className="text-2xl font-bold text-white">{value}</div>
            <div className="text-xs text-slate-500 mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      {/* In Progress */}
      <h2 className="text-xl font-semibold text-white mb-5">In Progress</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
        {enrolledCourses.map((course, i) => (
          <Link key={course.id} href={`/courses/${course.slug}`} className="group">
            <div className="bg-[#111118] border border-white/5 rounded-2xl p-5 hover:border-violet-500/30 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs text-slate-500 bg-white/5 px-2 py-0.5 rounded-md">{course.category}</span>
                  <h3 className="text-white font-medium mt-2 group-hover:text-violet-300 transition-colors">{course.title}</h3>
                </div>
                <ArrowRight size={16} className="text-slate-600 group-hover:text-violet-400 transition-colors mt-1" />
              </div>
              {/* Progress bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Progress</span>
                  <span>{completionPercent[i]}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full transition-all"
                    style={{ width: `${completionPercent[i]}%` }}
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Locked Courses (upsell) */}
      <div className="bg-gradient-to-br from-violet-900/20 to-cyan-900/10 border border-violet-500/20 rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-violet-500/10 rounded-xl flex items-center justify-center">
              <Lock size={18} className="text-violet-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold">4 more courses available</h3>
              <p className="text-slate-500 text-sm">Upgrade to Pro to unlock all courses + certificates</p>
            </div>
          </div>
          <Link
            href="/pricing"
            className="bg-violet-600 hover:bg-violet-500 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap"
          >
            Upgrade to Pro
          </Link>
        </div>
      </div>
    </div>
  )
}
