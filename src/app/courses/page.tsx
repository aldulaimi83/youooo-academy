import CourseCard from '@/components/CourseCard'
import { courses } from '@/lib/courses'

const categories = ['All', 'Programming', 'DevOps', 'Tools', 'Cloud', 'Chess', 'AI']

export default function CoursesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white mb-3">All Courses</h1>
        <p className="text-slate-400">Explore our full library of courses. More added regularly.</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`text-sm px-4 py-2 rounded-full border transition-colors ${
              cat === 'All'
                ? 'bg-violet-600 border-violet-600 text-white'
                : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}
