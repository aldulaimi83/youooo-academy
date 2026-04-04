export interface Course {
  id: string
  title: string
  description: string
  category: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  lessons: number
  duration: string
  price: number
  image: string
  slug: string
  tags: string[]
  featured?: boolean
}

export interface Lesson {
  id: string
  courseId: string
  title: string
  duration: string
  type: 'video' | 'text' | 'quiz'
  order: number
  content?: string
  videoUrl?: string
}

export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  enrolledCourses: string[]
  completedLessons: string[]
  certificates: string[]
}

export interface Plan {
  id: string
  name: string
  price: number
  interval: 'month' | 'year'
  features: string[]
  stripePriceId: string
  popular?: boolean
}
