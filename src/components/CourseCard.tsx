import Link from 'next/link'
import { Clock, BookOpen, BarChart3 } from 'lucide-react'
import { Course } from '@/types'
import { cn } from '@/lib/utils'

const levelColor = {
  Beginner: 'text-emerald-400 bg-emerald-400/10',
  Intermediate: 'text-yellow-400 bg-yellow-400/10',
  Advanced: 'text-red-400 bg-red-400/10',
}

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/courses/${course.slug}`} className="group block">
      <div className="bg-[#111118] border border-white/5 rounded-2xl overflow-hidden hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/5">
        {/* Thumbnail */}
        <div className="h-44 bg-gradient-to-br from-violet-900/40 to-cyan-900/20 relative flex items-center justify-center">
          <div className="text-5xl opacity-30 select-none">
            {course.category === 'Programming' && '🐍'}
            {course.category === 'DevOps' && '🐧'}
            {course.category === 'Tools' && '🔧'}
            {course.category === 'Cloud' && '☁️'}
            {course.category === 'Chess' && '♟️'}
            {course.category === 'AI' && '🤖'}
          </div>
          {course.featured && (
            <span className="absolute top-3 left-3 text-xs bg-violet-600 text-white px-2.5 py-1 rounded-full font-medium">
              Featured
            </span>
          )}
          <span className="absolute top-3 right-3 text-xs bg-[#0a0a0f]/80 text-slate-300 px-2.5 py-1 rounded-full">
            {course.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className={cn('text-xs px-2 py-0.5 rounded-full font-medium', levelColor[course.level])}>
              {course.level}
            </span>
            <span className="text-violet-400 font-bold text-lg">${course.price}</span>
          </div>

          <h3 className="text-white font-semibold text-base mb-1 group-hover:text-violet-300 transition-colors">
            {course.title}
          </h3>
          <p className="text-slate-500 text-sm mb-4 line-clamp-2">{course.description}</p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <span className="flex items-center gap-1">
              <BookOpen size={12} /> {course.lessons} lessons
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} /> {course.duration}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {course.tags.map((tag) => (
              <span key={tag} className="text-xs text-slate-500 bg-white/5 px-2 py-0.5 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
