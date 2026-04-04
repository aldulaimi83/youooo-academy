import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, BookOpen, Award, CheckCircle, Lock } from 'lucide-react'
import { courses } from '@/lib/courses'
import { cn } from '@/lib/utils'

const levelColor: Record<string, string> = {
  Beginner: 'text-emerald-400 bg-emerald-400/10',
  Intermediate: 'text-yellow-400 bg-yellow-400/10',
  Advanced: 'text-red-400 bg-red-400/10',
}

// Mock lessons for demo
function getMockLessons(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: `lesson-${i + 1}`,
    title: `Lesson ${i + 1}: ${['Introduction', 'Setup & Installation', 'Core Concepts', 'Your First Project', 'Advanced Patterns', 'Real-world Example', 'Best Practices', 'Testing', 'Deployment', 'Recap'][i % 10]}`,
    duration: `${Math.floor(Math.random() * 15) + 5} min`,
    free: i < 3,
  }))
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const course = courses.find((c) => c.slug === slug)
  if (!course) notFound()

  const lessons = getMockLessons(course.lessons)
  const free = lessons.filter((l) => l.free)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <Link href="/courses" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 mb-8 transition-colors">
        <ArrowLeft size={14} /> Back to courses
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main */}
        <div className="lg:col-span-2">
          {/* Hero */}
          <div className="h-56 bg-gradient-to-br from-violet-900/40 to-cyan-900/20 rounded-2xl flex items-center justify-center mb-8 text-8xl opacity-40">
            {course.category === 'Programming' && '🐍'}
            {course.category === 'DevOps' && '🐧'}
            {course.category === 'Tools' && '🔧'}
            {course.category === 'Cloud' && '☁️'}
            {course.category === 'Chess' && '♟️'}
            {course.category === 'AI' && '🤖'}
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={cn('text-xs px-2.5 py-1 rounded-full font-medium', levelColor[course.level])}>
              {course.level}
            </span>
            <span className="text-xs text-slate-500 bg-white/5 px-2.5 py-1 rounded-full">{course.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">{course.title}</h1>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">{course.description}</p>

          {/* Meta */}
          <div className="flex flex-wrap gap-6 text-sm text-slate-500 mb-10 pb-10 border-b border-white/5">
            <span className="flex items-center gap-2"><BookOpen size={16} /> {course.lessons} lessons</span>
            <span className="flex items-center gap-2"><Clock size={16} /> {course.duration}</span>
            <span className="flex items-center gap-2"><Award size={16} /> Certificate included</span>
          </div>

          {/* Curriculum */}
          <h2 className="text-xl font-semibold text-white mb-4">Curriculum</h2>
          <div className="space-y-2">
            {lessons.map((lesson) => (
              <div
                key={lesson.id}
                className="flex items-center justify-between bg-[#111118] border border-white/5 rounded-xl px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  {lesson.free ? (
                    <CheckCircle size={16} className="text-violet-400 shrink-0" />
                  ) : (
                    <Lock size={16} className="text-slate-600 shrink-0" />
                  )}
                  <span className={`text-sm ${lesson.free ? 'text-slate-300' : 'text-slate-500'}`}>
                    {lesson.title}
                  </span>
                  {lesson.free && (
                    <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">Free</span>
                  )}
                </div>
                <span className="text-xs text-slate-600">{lesson.duration}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <div className="bg-[#111118] border border-white/5 rounded-2xl p-6 sticky top-24">
            <div className="text-4xl font-bold text-white mb-1">${course.price}</div>
            <p className="text-slate-500 text-sm mb-6">One-time purchase · Lifetime access</p>

            <Link
              href="/auth/signup"
              className="block w-full bg-violet-600 hover:bg-violet-500 text-white text-center py-3.5 rounded-xl font-semibold transition-all hover:scale-105 mb-3"
            >
              Enroll now
            </Link>
            <Link
              href="/pricing"
              className="block w-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-center py-3.5 rounded-xl font-medium transition-all"
            >
              Get Pro — all courses
            </Link>

            <div className="mt-6 space-y-3 text-sm text-slate-500">
              {[
                `${course.lessons} lessons · ${course.duration}`,
                'Certificate of completion',
                'Lifetime access',
                `${free.length} free lessons to preview`,
                'Mobile + desktop',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
