import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {
  Briefcase,
  Edit3,
  ExternalLink,
  GraduationCap,
  MapPin,
  Star,
} from 'lucide-react'
import Navbar from '@/components/navbar'

export const Route = createFileRoute('/ho-so/')({
  component: HoSoPage,
})

const skills = [
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'Figma',
  'REST API',
  'MongoDB',
]

const portfolio = [
  {
    title: 'App quan ly chi tieu',
    tech: ['React Native', 'Firebase'],
    desc: 'App mobile quan ly tai chinh ca nhan voi bieu do thong ke.',
  },
  {
    title: 'Landing page SaaS',
    tech: ['Next.js', 'Tailwind'],
    desc: 'Thiet ke va xay dung landing page cho startup fintech.',
  },
  {
    title: 'Chatbot ho tro hoc tap',
    tech: ['Python', 'OpenAI'],
    desc: 'Bot AI tich hop vao Telegram ho tro on thi cho sinh vien.',
  },
]

const completedJobs = [
  {
    title: 'Xay dung dashboard admin',
    employer: 'Cong ty ABC',
    amount: '3.500.000 d',
    date: '15/05/2025',
  },
  {
    title: 'Viet API backend Node.js',
    employer: 'Startup XYZ',
    amount: '2.200.000 d',
    date: '02/05/2025',
  },
  {
    title: 'Thiet ke UI mobile app',
    employer: 'Freelancer Tuan',
    amount: '1.800.000 d',
    date: '20/04/2025',
  },
]

type TabId = 'overview' | 'jobs'

function HoSoPage() {
  const [activeTab, setActiveTab] = useState<TabId>('overview')

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Profile header */}
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 mb-6">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary shrink-0">
              NH
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div>
                  <h1 className="text-xl font-bold text-foreground">
                    Nguyen Ha
                  </h1>
                  <p className="text-muted-foreground text-sm mt-0.5">
                    Sinh vien Freelancer · Web & Mobile Developer
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground flex-wrap">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> Ha Noi
                    </span>
                    <span className="flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5" /> Dai hoc Bach
                      Khoa Ha Noi
                    </span>
                    <span className="flex items-center gap-1 text-amber-500 font-medium">
                      <Star className="w-3.5 h-3.5 fill-amber-400" /> 4.9
                      <span className="text-muted-foreground font-normal">
                        (12 job hoan thanh)
                      </span>
                    </span>
                  </div>
                </div>
                <button className="flex items-center gap-1.5 shrink-0 px-3 py-1.5 text-sm font-medium rounded-lg border border-border hover:bg-secondary transition-colors">
                  <Edit3 className="w-3.5 h-3.5" /> Chinh sua ho so
                </button>
              </div>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
            {(
              [
                ['12', 'Viec hoan thanh'],
                ['7.500.000 d', 'Da kiem duoc'],
                ['4.9 *', 'Danh gia'],
              ] as const
            ).map(([val, label]) => (
              <div key={label} className="text-center">
                <p className="text-lg font-bold text-foreground">{val}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 border-b border-border">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${
              activeTab === 'overview'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            Tong quan
          </button>
          <button
            onClick={() => setActiveTab('jobs')}
            className={`px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${
              activeTab === 'jobs'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            Cong viec cua toi
          </button>
        </div>

        {/* Tab content */}
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'jobs' && <JobsTab />}
      </main>
    </div>
  )
}

function OverviewTab() {
  return (
    <div className="space-y-6">
      {/* Bio */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h2 className="text-base font-semibold text-foreground mb-3">
          Gioi thieu
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Minh la sinh vien nam 3 Dai hoc Bach Khoa Ha Noi, chuyen nganh Khoa
          hoc May tinh. Dam me lap trinh web va mobile, dac biet la React va
          Node.js. Da co kinh nghiem freelance 1 nam voi 12 du an hoan thanh.
        </p>
      </div>

      {/* Skills */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h2 className="text-base font-semibold text-foreground mb-3">
          Ky nang
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="px-3 py-1.5 bg-primary/8 text-primary text-sm font-medium rounded-lg"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Portfolio */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-foreground">
            Du an (Portfolio)
          </h2>
          <button className="text-sm font-medium text-primary hover:underline">
            + Them du an
          </button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.map((p) => (
            <div
              key={p.title}
              className="border border-border rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold text-foreground leading-snug">
                  {p.title}
                </h3>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5" />
              </div>
              <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-1 mt-3">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-0.5 rounded-md border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h2 className="text-base font-semibold text-foreground mb-4">
          Hoc van
        </h2>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-muted-foreground" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">
              Dai hoc Bach Khoa Ha Noi
            </p>
            <p className="text-xs text-muted-foreground">
              Khoa hoc May tinh · 2022 - 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function JobsTab() {
  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-base font-semibold text-foreground">
          Viec da hoan thanh
        </h2>
      </div>
      <div className="flex flex-col gap-3">
        {completedJobs.map((j) => (
          <div
            key={j.title}
            className="flex items-center justify-between p-4 rounded-xl border border-border hover:bg-secondary/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{j.title}</p>
                <p className="text-xs text-muted-foreground">
                  {j.employer} · {j.date}
                </p>
              </div>
            </div>
            <span className="text-sm font-semibold text-green-600">
              {j.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
