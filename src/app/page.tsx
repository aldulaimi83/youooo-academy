import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  Download,
  FileText,
  Gamepad2,
  GraduationCap,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
} from 'lucide-react'
import { courses } from '@/lib/courses'

type ProductCard = {
  title: string
  href: string
  external?: boolean
  badge: string
  description: string
  bullets: string[]
  cta: string
  icon: LucideIcon
  preview: 'games' | 'quran' | 'resume' | 'academy' | 'tools'
  links: { label: string; href: string; external?: boolean }[]
}

const stats = [
  { value: '12+', label: 'Games', icon: Gamepad2 },
  { value: '120+', label: 'Quran Pages', icon: BookOpen },
  { value: 'Mobile', label: 'Friendly', icon: Smartphone },
  { value: 'Free', label: 'To Use', icon: Sparkles },
  { value: 'No Signup', label: 'Required', icon: ShieldCheck },
]

const productCards: ProductCard[] = [
  {
    title: 'Games',
    href: 'https://game.youooo.com',
    external: true,
    badge: '12+ browser games',
    description:
      'Play free browser games like Stickman Smart Escape, Gems Crush, and Mesopotamia Mahjong.',
    bullets: ['Fast-loading on desktop and mobile', 'Save progress where supported', 'Warm casual game portal style'],
    cta: 'Play Games',
    icon: Gamepad2,
    preview: 'games',
    links: [
      { label: 'Stickman Smart Escape', href: 'https://game.youooo.com/stickman-smart-escape.html', external: true },
      { label: 'Gems Crush', href: 'https://game.youooo.com/gems-crush.html', external: true },
      { label: 'Mesopotamia Mahjong', href: 'https://game.youooo.com/mesopotamia-mahjong.html', external: true },
    ],
  },
  {
    title: 'Quran',
    href: 'https://quran.youooo.com',
    external: true,
    badge: 'Reading + study tools',
    description:
      'Read, search, and study Quran content in a calm, mobile-friendly interface with clean navigation.',
    bullets: ['Verse-by-verse reading experience', 'Popular surah pages and study resources', 'Designed for long, focused sessions'],
    cta: 'Explore Quran',
    icon: BookOpen,
    preview: 'quran',
    links: [
      { label: 'Al-Fatiha', href: 'https://quran.youooo.com/surahs/al-fatiha.html', external: true },
      { label: 'Yaseen', href: 'https://quran.youooo.com/surahs/ya-sin.html', external: true },
      { label: 'Ar-Rahman', href: 'https://quran.youooo.com/surahs/ar-rahman.html', external: true },
    ],
  },
  {
    title: 'Resume Tools',
    href: 'https://resume.youooo.com',
    external: true,
    badge: 'Career tools',
    description:
      'Build polished resumes and career pages with a focused, simple workflow that stays easy on mobile.',
    bullets: ['Clear editing flow', 'Professional layout and export focus', 'Good for job seekers and students'],
    cta: 'Open Resume Tools',
    icon: FileText,
    preview: 'resume',
    links: [
      { label: 'ATS-friendly', href: 'https://resume.youooo.com', external: true },
      { label: 'Template-driven', href: 'https://resume.youooo.com', external: true },
      { label: 'Export-ready', href: 'https://resume.youooo.com', external: true },
    ],
  },
  {
    title: 'Academy',
    href: '/courses',
    badge: 'Learning paths',
    description:
      'Structured learning for Python, Linux, Git, Cloud, Chess, and AI — built as one connected academy.',
    bullets: ['Course paths with clear progression', 'Certificates and project-based learning', 'Fast access to pricing and dashboard'],
    cta: 'Browse Courses',
    icon: GraduationCap,
    preview: 'academy',
    links: [
      { label: 'Python', href: '/courses/python-mastery' },
      { label: 'Linux', href: '/courses/linux-for-developers' },
      { label: 'Cloud', href: '/courses/cloud-engineering' },
    ],
  },
  {
    title: 'Utilities',
    href: '#tools',
    badge: 'Helpful web tools',
    description:
      'Practical utility pages for quick tasks, simple lookups, and the support tools that connect the network.',
    bullets: ['Username and domain helpers', 'Fast utility pages', 'Simple, low-friction workflows'],
    cta: 'View Tools',
    icon: Wrench,
    preview: 'tools',
    links: [
      { label: 'Username Checker', href: '#tools' },
      { label: 'Domain Finder', href: '#tools' },
      { label: 'People Search', href: '#tools' },
    ],
  },
]

const siteBlocks = [
  {
    title: 'What is YouOOO?',
    id: 'what-is-youooo',
    text:
      'YouOOO is a product network built around practical web experiences. Each product has a clear purpose: play games, study Quran content, build a resume, learn a skill, or use a helpful tool.',
  },
  {
    title: 'What can you do here?',
    text:
      'Jump into free browser games, read Quran pages, browse course paths, build career materials, and use supporting tools from one trusted brand.',
  },
  {
    title: 'Why use YouOOO?',
    text:
      'It is free to start, easy to use on mobile, and organized so visitors can understand what each product does without extra noise.',
  },
]

const faqItems = [
  {
    q: 'Is YouOOO free?',
    a: 'Yes. The network is built for free access so people can use the games, Quran tools, resume tools, and learning resources without paying to get started.',
  },
  {
    q: 'Do I need an account?',
    a: 'No account is required for browsing. Some products may offer account-based features later, but the main experience stays easy to enter.',
  },
  {
    q: 'Can I use it on mobile?',
    a: 'Yes. The homepage and all main product entry points are designed to be mobile friendly with buttons and cards that stack cleanly.',
  },
  {
    q: 'What Quran tools are available?',
    a: 'The Quran site includes reading pages, translations, tafsir-style study flow, and links to popular surahs that are easy to open on mobile.',
  },
  {
    q: 'Are the tools still being improved?',
    a: 'Yes. The network is actively evolving, with the homepage, games, academy content, and support tools continuing to get better over time.',
  },
]

const quranPages = [
  { label: 'Al-Fatiha', href: 'https://quran.youooo.com/surahs/al-fatiha.html', external: true },
  { label: 'Yaseen', href: 'https://quran.youooo.com/surahs/ya-sin.html', external: true },
  { label: 'Ar-Rahman', href: 'https://quran.youooo.com/surahs/ar-rahman.html', external: true },
  { label: 'Al-Kahf', href: 'https://quran.youooo.com/surahs/al-kahf.html', external: true },
]

const featuredCourses = courses.filter((course) => course.featured).slice(0, 3)

function previewBoxTitle(title: string, subtitle: string) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-[#d8c3a2] pb-3">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8c6a43]">{subtitle}</p>
        <h4 className="mt-1 text-sm font-bold text-[#2f2015]">{title}</h4>
      </div>
      <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8c6a43] shadow-sm">
        Preview
      </span>
    </div>
  )
}

function GamesPreview() {
  return (
    <div className="grid h-full grid-cols-[1.1fr_.9fr] gap-3 rounded-[26px] bg-[linear-gradient(180deg,#f8e8c8_0%,#ddb06e_48%,#9f6434_100%)] p-3">
      <div className="rounded-[22px] border border-[#7f562f]/20 bg-[#f6e1b2]/90 p-3 shadow-inner">
        {previewBoxTitle('Featured arcade wall', 'Games')}
        <div className="mt-3 rounded-[18px] bg-[linear-gradient(180deg,#8d5930_0%,#4a2d17_100%)] p-3 text-white shadow-lg">
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ffd89d]">
            <span>Stickman Smart Escape</span>
            <span>Top pick</span>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-[11px]">
            <div className="rounded-2xl bg-white/10 p-2">
              <div className="h-14 rounded-xl bg-[#f2c26e]" />
              <p className="mt-2 font-semibold">Trick traps</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-2">
              <div className="h-14 rounded-xl bg-[#87b36f]" />
              <p className="mt-2 font-semibold">Yo-yo timing</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-2">
              <div className="h-14 rounded-xl bg-[#d6a65d]" />
              <p className="mt-2 font-semibold">Hidden exits</p>
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-[#6b4a26]">
          <span className="rounded-full bg-white px-3 py-1 shadow-sm">Smart Escape</span>
          <span className="rounded-full bg-white px-3 py-1 shadow-sm">Gems Crush</span>
          <span className="rounded-full bg-white px-3 py-1 shadow-sm">Mahjong</span>
        </div>
      </div>
      <div className="grid gap-3">
        <div className="rounded-[22px] border border-[#d6bd92] bg-[#fbf4e6] p-3 shadow-sm">
          <div className="h-24 rounded-[18px] bg-[linear-gradient(180deg,#f6d796_0%,#d69953_100%)] p-3 text-[#432915]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em]">Mobile ready</p>
            <p className="mt-10 text-sm font-semibold">Tap, play, and save progress.</p>
          </div>
        </div>
        <div className="rounded-[22px] border border-[#d6bd92] bg-[#fbf4e6] p-3 shadow-sm">
          <div className="h-24 rounded-[18px] bg-[linear-gradient(180deg,#f2dfbe_0%,#c48f53_100%)] p-3 text-[#432915]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em]">Casual portal</p>
            <p className="mt-10 text-sm font-semibold">Quick access to the best games.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function QuranPreview() {
  return (
    <div className="grid h-full grid-cols-[1.1fr_.9fr] gap-3 rounded-[26px] bg-[linear-gradient(180deg,#f5ecd8_0%,#dfc89e_100%)] p-3">
      <div className="rounded-[22px] border border-[#d5c29d] bg-[#fffaf1] p-3 shadow-sm">
        {previewBoxTitle('Reading view', 'Quran')}
        <div className="mt-3 rounded-[18px] border border-[#e0d3bc] bg-white p-4">
          <div className="flex items-center justify-between text-[11px] font-semibold text-[#8b6a43]">
            <span>Surah page</span>
            <span>Arabic + translation</span>
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-3 w-3/4 rounded-full bg-[#efe0c9]" />
            <div className="h-3 w-11/12 rounded-full bg-[#e8d7bd]" />
            <div className="h-3 w-5/6 rounded-full bg-[#efe0c9]" />
            <div className="h-3 w-2/3 rounded-full bg-[#e8d7bd]" />
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-semibold text-[#7f623e]">
            <span className="rounded-full bg-[#f6ead4] px-2.5 py-1">Translation</span>
            <span className="rounded-full bg-[#f6ead4] px-2.5 py-1">Tafsir</span>
            <span className="rounded-full bg-[#f6ead4] px-2.5 py-1">Audio</span>
          </div>
        </div>
      </div>
      <div className="grid gap-3">
        <div className="rounded-[22px] border border-[#d5c29d] bg-[#fffaf1] p-3 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a43]">Popular surahs</p>
          <div className="mt-3 grid gap-2">
            {quranPages.map((page) => (
              <a
                key={page.label}
                href={page.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-[#e8d5b4] bg-white px-3 py-2 text-sm font-medium text-[#3b2717] transition-colors hover:bg-[#f7f0e4]"
              >
                {page.label}
              </a>
            ))}
          </div>
        </div>
        <div className="rounded-[22px] border border-[#d5c29d] bg-[#f4ead4] p-3 shadow-sm">
          <div className="rounded-[18px] bg-[#6f5237] p-3 text-[#fff8ea]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ffdca8]">Study flow</p>
            <p className="mt-2 text-sm font-semibold">Read, listen, and review in one calm session.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ResumePreview() {
  return (
    <div className="grid h-full grid-cols-[1fr_.9fr] gap-3 rounded-[26px] bg-[linear-gradient(180deg,#f7ead9_0%,#d6b28a_100%)] p-3">
      <div className="rounded-[22px] border border-[#d5bf9d] bg-[#fffaf3] p-3 shadow-sm">
        {previewBoxTitle('ATS-ready profile', 'Resume')}
        <div className="mt-3 rounded-[18px] bg-[linear-gradient(180deg,#8b5f39_0%,#4b2d19_100%)] p-4 text-white">
          <p className="text-xs uppercase tracking-[0.24em] text-[#ffdca8]">Sample candidate</p>
          <h4 className="mt-1 text-lg font-bold">Career profile</h4>
          <p className="mt-1 text-sm text-white/80">Clear headline, experience, skills, and export flow.</p>
          <div className="mt-4 grid gap-2">
            <div className="h-2 rounded-full bg-white/20" />
            <div className="h-2 rounded-full bg-white/20 w-11/12" />
            <div className="h-2 rounded-full bg-white/20 w-4/5" />
          </div>
        </div>
      </div>
      <div className="grid gap-3">
        <div className="rounded-[22px] border border-[#d5bf9d] bg-[#fffaf3] p-3 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a43]">Skills</p>
          <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-[#6f5237]">
            <span className="rounded-full bg-[#f7ebda] px-3 py-1">ATS friendly</span>
            <span className="rounded-full bg-[#f7ebda] px-3 py-1">PDF export</span>
            <span className="rounded-full bg-[#f7ebda] px-3 py-1">LinkedIn-ready</span>
          </div>
        </div>
        <div className="rounded-[22px] border border-[#d5bf9d] bg-[#f8eedf] p-3 shadow-sm">
          <div className="rounded-[18px] bg-[#efd2b2] p-3 text-[#3b2414]">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Download size={15} />
              Export polished resume
            </div>
            <p className="mt-2 text-xs leading-relaxed">Built for job seekers who want a simple workflow and a clean final result.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function AcademyPreview() {
  return (
    <div className="grid h-full gap-3 rounded-[26px] bg-[linear-gradient(180deg,#f4eddc_0%,#d9c8a4_100%)] p-3">
      <div className="rounded-[22px] border border-[#d5c29d] bg-[#fffaf2] p-3 shadow-sm">
        {previewBoxTitle('Course roadmap', 'Academy')}
        <div className="mt-3 grid gap-3">
          <div className="rounded-2xl bg-[#f6ead6] p-3">
            <div className="flex items-center justify-between text-sm font-semibold text-[#3b2717]">
              <span>Python mastery</span>
              <span>Live</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-[#d3b37f]">
              <div className="h-2 w-2/3 rounded-full bg-[#8a643a]" />
            </div>
          </div>
          <div className="rounded-2xl bg-[#f6ead6] p-3">
            <div className="flex items-center justify-between text-sm font-semibold text-[#3b2717]">
              <span>Linux and Git</span>
              <span>Structured</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-[#d3b37f]">
              <div className="h-2 w-1/2 rounded-full bg-[#8a643a]" />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-[22px] border border-[#d5c29d] bg-[#6f5237] p-4 text-[#fff7eb] shadow-sm">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ffdca8]">Featured courses</p>
        <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold">
          {featuredCourses.map((course) => (
            <span key={course.id} className="rounded-full bg-white/10 px-3 py-1">
              {course.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ToolsPreview() {
  return (
    <div className="grid h-full gap-3 rounded-[26px] bg-[linear-gradient(180deg,#f4ebdf_0%,#d8c2a1_100%)] p-3">
      <div className="rounded-[22px] border border-[#d5c29d] bg-[#fffaf2] p-3 shadow-sm">
        {previewBoxTitle('Utility grid', 'Tools')}
        <div className="mt-3 grid grid-cols-3 gap-2">
          {['Username Checker', 'Domain Finder', 'People Search'].map((label) => (
            <div key={label} className="rounded-2xl border border-[#e1ceb0] bg-[#faf3e6] p-3 text-center text-[11px] font-semibold text-[#3b2717]">
              <Search size={14} className="mx-auto mb-2 text-[#8b6a43]" />
              {label}
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-[22px] border border-[#d5c29d] bg-[#f3e5cf] p-3 shadow-sm">
        <div className="rounded-[18px] bg-white/80 p-3 text-[#3b2717]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a43]">Useful web helpers</p>
          <p className="mt-2 text-sm font-medium">Fast support tools that sit beside the learning and entertainment products.</p>
        </div>
      </div>
    </div>
  )
}

function renderPreview(kind: ProductCard['preview']) {
  switch (kind) {
    case 'games':
      return <GamesPreview />
    case 'quran':
      return <QuranPreview />
    case 'resume':
      return <ResumePreview />
    case 'academy':
      return <AcademyPreview />
    case 'tools':
      return <ToolsPreview />
    default:
      return null
  }
}

function ProductTile({ product }: { product: ProductCard }) {
  const Icon = product.icon
  const buttonProps = product.external
    ? { href: product.href, target: '_blank', rel: 'noreferrer' }
    : { href: product.href }

  return (
    <article className="overflow-hidden rounded-[30px] border border-[#d8c3a2] bg-white/85 shadow-[0_20px_60px_rgba(88,61,31,0.1)]">
      <div className="border-b border-[#e7d8c2] p-3 sm:p-4">{renderPreview(product.preview)}</div>
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex rounded-full bg-[#f3e6d3] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b6a43]">
              {product.badge}
            </span>
            <h3 className="mt-3 text-xl font-bold text-[#2f2015]">{product.title}</h3>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f3e6d3] text-[#8b6a43]">
            <Icon size={20} />
          </div>
        </div>

        <p className="mt-3 text-sm leading-6 text-[#6d5844]">{product.description}</p>

        <ul className="mt-4 space-y-2">
          {product.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 text-sm text-[#59412b]">
              <CheckCircle size={15} className="mt-0.5 shrink-0 text-[#9a6e3d]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {product.links.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#d8c3a2] bg-[#fff9ef] px-3 py-1.5 text-xs font-semibold text-[#7c5d3a] transition-colors hover:bg-[#f5ead8]"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full border border-[#d8c3a2] bg-[#fff9ef] px-3 py-1.5 text-xs font-semibold text-[#7c5d3a] transition-colors hover:bg-[#f5ead8]"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3">
          <div className="text-xs text-[#8e7257]">Free, fast, and easy to open on mobile.</div>
          {product.external ? (
            <a
              {...buttonProps}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b8894c] px-4 py-2.5 text-sm font-semibold text-[#2a1a0f] transition-colors hover:bg-[#c79a5f]"
            >
              {product.cta}
              <ArrowRight size={16} />
            </a>
          ) : (
            <Link
              {...buttonProps}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b8894c] px-4 py-2.5 text-sm font-semibold text-[#2a1a0f] transition-colors hover:bg-[#c79a5f]"
            >
              {product.cta}
              <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(237,208,159,0.3),_transparent_32%),linear-gradient(180deg,#f7efe2_0%,#f2e5cf_36%,#f8f3e9_100%)] text-[#2d1d12]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'YouOOO',
            url: 'https://youooo.com',
            description:
              'The YouOOO Network brings free browser games, Quran study tools, resume tools, learning courses, and useful web utilities together in one simple place.',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'YouOOO',
            url: 'https://youooo.com',
            description:
              'The YouOOO Network brings free browser games, Quran study tools, resume tools, learning courses, and useful web utilities together in one simple place.',
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-x-0 top-0 h-64 bg-[linear-gradient(180deg,rgba(255,255,255,0.55),transparent)]" />
          <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-[#d9b57b]/30 blur-3xl" />
          <div className="absolute right-0 top-16 h-80 w-80 rounded-full bg-[#8da07e]/18 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:pt-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d8c3a2] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8b6a43] shadow-sm">
              The YouOOO Network
            </span>

            <h1 className="mt-6 text-5xl font-bold tracking-tight text-[#2f2015] sm:text-7xl">
              The YouOOO Network
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f4a39] sm:text-xl">
              Free browser games, Quran study tools, career resources, learning projects, and useful web utilities —
              all in one simple place.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://game.youooo.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b8894c] px-6 py-3.5 text-sm font-semibold text-[#2a1a0f] shadow-sm transition-colors hover:bg-[#c79a5f]"
              >
                Play Games
                <ArrowRight size={16} />
              </a>
              <a
                href="https://quran.youooo.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d8c3a2] bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#5f442c] transition-colors hover:bg-white"
              >
                Explore Quran
              </a>
              <a
                href="https://resume.youooo.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d8c3a2] bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#5f442c] transition-colors hover:bg-white"
              >
                Resume Tools
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="rounded-2xl border border-[#dcc8aa] bg-white/75 p-4 shadow-sm">
                  <Icon size={18} className="text-[#a67a43]" />
                  <div className="mt-3 text-2xl font-bold text-[#2f2015]">{value}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6d4f]">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] border border-[#d8c3a2] bg-white/80 p-4 shadow-[0_24px_70px_rgba(92,65,35,0.12)]">
            <div className="rounded-[28px] border border-[#e6d7bf] bg-[#fbf5ea] p-4">
              <div className="flex items-center justify-between gap-3 border-b border-[#e2d3bc] pb-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a43]">Product ecosystem</p>
                  <h2 className="mt-1 text-lg font-bold text-[#2f2015]">Clear destinations. Clear purpose.</h2>
                </div>
                <span className="rounded-full bg-[#f3e6d3] px-3 py-1 text-[11px] font-semibold text-[#8b6a43]">Warm UI</span>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  { title: 'Games', text: 'Free play, save progress, and quick loading sessions.', href: 'https://game.youooo.com', external: true },
                  { title: 'Quran', text: 'Read, listen, and study in a calm reading flow.', href: 'https://quran.youooo.com', external: true },
                  { title: 'Resume', text: 'Build career pages with a clean export-first workflow.', href: 'https://resume.youooo.com', external: true },
                  { title: 'Academy', text: 'Structured learning paths for practical skills.', href: '/courses' },
                ].map((item) =>
                  item.external ? (
                    <a
                      key={item.title}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-[24px] border border-[#e2d3bc] bg-white p-4 transition-colors hover:bg-[#f7f1e6]"
                    >
                      <p className="text-sm font-semibold text-[#2f2015]">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-[#6d5844]">{item.text}</p>
                    </a>
                  ) : (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="rounded-[24px] border border-[#e2d3bc] bg-white p-4 transition-colors hover:bg-[#f7f1e6]"
                    >
                      <p className="text-sm font-semibold text-[#2f2015]">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-[#6d5844]">{item.text}</p>
                    </Link>
                  )
                )}
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-[#6d5844]">
                <Sparkles size={16} className="text-[#b8894c]" />
                One brand, multiple useful products, one clear ecosystem.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="games" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8b6a43]">Featured products</p>
            <h2 className="mt-2 text-3xl font-bold text-[#2f2015]">Each product has a clear job</h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-[#6d5844]">
            The homepage now explains the network first, then leads visitors into the right product with obvious buttons and short context.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {productCards.map((product) => (
            <ProductTile key={product.title} product={product} />
          ))}
        </div>
      </section>

      {/* Academy spotlight */}
      <section id="academy" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="grid gap-6 rounded-[34px] border border-[#d8c3a2] bg-[#fffaf1] p-6 shadow-[0_18px_60px_rgba(88,61,31,0.08)] lg:grid-cols-[.95fr_1.05fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8b6a43]">Why the academy matters</p>
            <h2 className="mt-2 text-3xl font-bold text-[#2f2015]">Practical learning with a clean structure</h2>
            <p className="mt-4 text-sm leading-7 text-[#6d5844]">
              YouOOO Academy is the learning side of the network. It connects Python, Linux, Git, Cloud, chess strategy, and AI
              into paths that are easier to understand than a random list of links.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {['Python', 'Linux', 'Git', 'Cloud', 'Chess', 'AI'].map((tag) => (
                <span key={tag} className="rounded-full bg-[#f3e6d3] px-3 py-1 text-xs font-semibold text-[#7c5d3a]">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/courses" className="inline-flex items-center gap-2 rounded-full bg-[#b8894c] px-5 py-3 text-sm font-semibold text-[#2a1a0f] transition-colors hover:bg-[#c79a5f]">
                Browse courses <ArrowRight size={16} />
              </Link>
              <Link href="/pricing" className="inline-flex items-center gap-2 rounded-full border border-[#d8c3a2] bg-white px-5 py-3 text-sm font-semibold text-[#5f442c] transition-colors hover:bg-[#f7f1e6]">
                View pricing
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {featuredCourses.map((course) => (
              <div key={course.id} className="rounded-[26px] border border-[#e4d4bb] bg-white p-4 shadow-sm">
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a43]">{course.category}</div>
                <h3 className="mt-2 text-lg font-bold text-[#2f2015]">{course.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6d5844]">{course.description}</p>
                <div className="mt-4 flex items-center justify-between text-xs font-semibold text-[#8a6d4f]">
                  <span>{course.level}</span>
                  <span>{course.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem blocks */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {siteBlocks.map((block) => (
            <article
              key={block.title}
              id={block.id}
              className="rounded-[30px] border border-[#d8c3a2] bg-white/85 p-6 shadow-[0_16px_50px_rgba(88,61,31,0.08)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8b6a43]">{block.title}</p>
              <p className="mt-3 text-sm leading-7 text-[#5f4a39]">{block.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="rounded-[34px] border border-[#d8c3a2] bg-[linear-gradient(180deg,#fffaf1_0%,#f4e7d2_100%)] p-6 shadow-[0_18px_60px_rgba(88,61,31,0.08)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8b6a43]">Utilities</p>
              <h2 className="mt-2 text-3xl font-bold text-[#2f2015]">Helpful web tools, grouped cleanly</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-[#6d5844]">
              The network also includes practical utilities such as username checking, domain discovery, and people search helpers.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { title: 'Username Checker', href: '#tools', note: 'Quick handle availability lookups' },
              { title: 'Domain Finder', href: '#tools', note: 'Helpful for brand planning' },
              { title: 'People Search', href: '#tools', note: 'Simple discovery and lookup flow' },
              { title: 'Support Tools', href: '/dashboard', note: 'Network utilities and account space' },
            ].map((tool) => (
              <Link key={tool.title} href={tool.href} className="rounded-[24px] border border-[#e4d4bb] bg-white p-4 transition-colors hover:bg-[#f7f1e6]">
                <Search size={18} className="text-[#a67a43]" />
                <h3 className="mt-3 text-base font-semibold text-[#2f2015]">{tool.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6d5844]">{tool.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8b6a43]">FAQ</p>
          <h2 className="mt-2 text-3xl font-bold text-[#2f2015]">Frequently asked questions</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {faqItems.map((item) => (
            <article key={item.q} className="rounded-[28px] border border-[#d8c3a2] bg-white/85 p-6 shadow-[0_14px_40px_rgba(88,61,31,0.06)]">
              <h3 className="text-lg font-semibold text-[#2f2015]">{item.q}</h3>
              <p className="mt-3 text-sm leading-7 text-[#6d5844]">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Privacy / Contact */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <article id="privacy" className="rounded-[30px] border border-[#d8c3a2] bg-white/85 p-6 shadow-[0_14px_40px_rgba(88,61,31,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8b6a43]">Privacy Policy</p>
            <p className="mt-3 text-sm leading-7 text-[#6d5844]">
              YouOOO uses local storage for progress, preferences, and saved settings where relevant. The goal is to keep the experience
              simple and avoid asking for unnecessary information.
            </p>
          </article>
          <article id="contact" className="rounded-[30px] border border-[#d8c3a2] bg-white/85 p-6 shadow-[0_14px_40px_rgba(88,61,31,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8b6a43]">Contact</p>
            <p className="mt-3 text-sm leading-7 text-[#6d5844]">
              For questions or feedback, use the contact page or email the team directly at{' '}
              <a href="mailto:support@youooo.com" className="font-semibold text-[#7c5d3a] underline decoration-[#cba46d] decoration-2 underline-offset-4">
                support@youooo.com
              </a>
              .
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}
