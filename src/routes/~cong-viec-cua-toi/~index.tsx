import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/cong-viec-cua-toi/')({
  component: MyJobsPage,
})
type JobStatus = 'pending' | 'active' | 'submitted' | 'paid' | 'rejected'
type JobTab = 'applied' | 'active' | 'done'

type JobItem = {
  id: string
  title: string
  employer: string
  price: string
  status: JobStatus
  applied?: string
  deadline?: string
  escrow?: boolean
  date?: string
}

const statusConfig: Record<JobStatus, { label: string; className: string }> = {
  pending: {
    label: 'Đã ứng tuyển',
    className: 'bg-amber-100 text-amber-700',
  },
  active: {
    label: 'Đang thực hiện',
    className: 'bg-blue-100 text-blue-700',
  },
  submitted: {
    label: 'Đã nộp',
    className: 'bg-violet-100 text-violet-700',
  },
  paid: {
    label: 'Đã thanh toán',
    className: 'bg-emerald-100 text-emerald-700',
  },
  rejected: {
    label: 'Bị từ chối',
    className: 'bg-rose-100 text-rose-700',
  },
}

const appliedJobs: Array<JobItem> = [
  {
    id: '1',
    title: 'Xây dựng landing page cho startup',
    employer: 'Techvibe',
    price: '3.000.000 ₫',
    status: 'pending',
    applied: '2 giờ trước',
  },
  {
    id: '2',
    title: 'API Node.js cho app mobile',
    employer: 'Logity',
    price: '5.000.000 ₫',
    status: 'pending',
    applied: '1 ngày trước',
  },
  {
    id: '3',
    title: 'UI mobile screens – React Native',
    employer: 'FoodApp',
    price: '3.500.000 ₫',
    status: 'rejected',
    applied: '3 ngày trước',
  },
]

const activeJobs: Array<JobItem> = [
  {
    id: '4',
    title: 'Dashboard admin – React + Node',
    employer: 'Công ty ABC',
    price: '4.200.000 ₫',
    status: 'active',
    deadline: 'Còn 3 ngày',
    escrow: true,
  },
  {
    id: '5',
    title: 'Thiết kế UI fintech app',
    employer: 'Fintechvn',
    price: '6.000.000 ₫',
    status: 'submitted',
    deadline: 'Đã nộp',
    escrow: true,
  },
]

const doneJobs: Array<JobItem> = [
  {
    id: '6',
    title: 'Chatbot AI tư vấn khách hàng',
    employer: 'AI Solutions',
    price: '8.000.000 ₫',
    status: 'paid',
    date: '10/05/2025',
  },
  {
    id: '7',
    title: 'Tối ưu SEO website',
    employer: 'Media Corp',
    price: '1.800.000 ₫',
    status: 'paid',
    date: '02/05/2025',
  },
]

const jobsByTab: Record<JobTab, Array<JobItem>> = {
  applied: appliedJobs,
  active: activeJobs,
  done: doneJobs,
}

function MyJobsPage() {
  const [activeTab, setActiveTab] = useState<JobTab>('applied')

  return (
    <div className="min-h-screen bg-[#fcfcfd] text-slate-900">
      <TopNavbar />

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-[42px]">
              Công việc của tôi
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-500 sm:text-lg">
              Quản lý tất cả công việc bạn đã ứng tuyển và đang thực hiện.
            </p>
          </div>

          <div className="mb-10 inline-flex max-w-full flex-wrap rounded-2xl bg-slate-100 p-1.5">
            <TabButton
              active={activeTab === 'applied'}
              count={
                appliedJobs.filter((job) => job.status !== 'rejected').length
              }
              label="Đã ứng tuyển"
              onClick={() => setActiveTab('applied')}
              countClassName="bg-amber-100 text-amber-700"
            />
            <TabButton
              active={activeTab === 'active'}
              count={activeJobs.length}
              label="Đang làm"
              onClick={() => setActiveTab('active')}
              countClassName="bg-blue-100 text-blue-700"
            />
            <TabButton
              active={activeTab === 'done'}
              label="Đã hoàn thành"
              onClick={() => setActiveTab('done')}
            />
          </div>

          <div className="space-y-4">
            {jobsByTab[activeTab].length === 0 ? (
              <div className="rounded-[28px] border border-slate-200 bg-white px-6 py-16 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                  <IconCheck className="h-5 w-5" />
                </div>
                <p className="text-sm text-slate-500">Chưa có dữ liệu.</p>
              </div>
            ) : (
              jobsByTab[activeTab].map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  showActions={activeTab === 'active'}
                />
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

function TopNavbar() {
  const links = [
    { label: 'Tìm việc', href: '/tim-viec', active: false },
    { label: 'Việc của tôi', href: '/cong-viec-cua-toi', active: true },
    { label: 'Tin nhắn', href: '/tin-nhan', active: false },
    { label: 'Ví', href: '/vi', active: false },
  ]

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
            <IconBriefcase className="h-5 w-5" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900">
            GigVerse
          </span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`rounded-2xl px-5 py-3 text-sm font-medium transition ${
                link.active
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            className="relative hidden h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:bg-slate-100 sm:flex"
          >
            <IconMessage className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white">
              3
            </span>
          </button>
          <button
            type="button"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:bg-slate-100 sm:flex"
          >
            <IconBell className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="flex items-center gap-3 rounded-full p-1 pr-2 transition hover:bg-slate-100"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-600">
              NH
            </span>
            <span className="hidden text-sm font-medium text-slate-800 sm:block">
              Nguyễn Hà
            </span>
            <IconChevronDown className="hidden h-4 w-4 text-slate-500 sm:block" />
          </button>
        </div>
      </div>
    </header>
  )
}

function TabButton({
  active,
  count,
  label,
  onClick,
  countClassName = 'bg-slate-200 text-slate-600',
}: {
  active: boolean
  count?: number
  label: string
  onClick: () => void
  countClassName?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-2 rounded-xl px-4 py-3 text-base font-semibold transition sm:px-5 ${
        active
          ? 'bg-white text-slate-900 shadow-[0_1px_2px_rgba(15,23,42,0.08)]'
          : 'text-slate-500 hover:text-slate-900'
      }`}
    >
      <span>{label}</span>
      {typeof count === 'number' && (
        <span
          className={`inline-flex h-7 min-w-7 items-center justify-center rounded-full px-2 text-xs font-bold ${countClassName}`}
        >
          {count}
        </span>
      )}
    </button>
  )
}

function JobCard({ job, showActions }: { job: JobItem; showActions: boolean }) {
  const status = statusConfig[job.status]

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white px-6 py-6 shadow-[0_1px_0_rgba(15,23,42,0.02)] transition hover:border-slate-300 hover:shadow-sm sm:px-7">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-[22px] font-bold leading-tight text-slate-900">
              {job.title}
            </h2>
            <span
              className={`rounded-full px-3 py-1 text-sm font-semibold ${status.className}`}
            >
              {status.label}
            </span>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-base text-slate-500">
            <span>{job.employer}</span>
            <span className="font-bold text-slate-900">{job.price}</span>
            {job.applied ? <span>{job.applied}</span> : null}
            {job.deadline ? (
              <span className="inline-flex items-center gap-1.5">
                <IconClock className="h-4 w-4" />
                {job.deadline}
              </span>
            ) : null}
            {job.date ? <span>{job.date}</span> : null}
          </div>

          {job.escrow ? (
            <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-amber-100 bg-amber-50 px-3 py-2 text-sm text-amber-700">
              <IconLock className="h-4 w-4" />
              <span className="font-medium">
                {job.status === 'submitted'
                  ? 'Chờ xác nhận thanh toán'
                  : 'Tiền đang giữ (Escrow)'}
              </span>
            </div>
          ) : null}
        </div>

        <div className="mt-1 hidden text-slate-400 sm:block">
          <IconChevronRight className="h-5 w-5" />
        </div>
      </div>

      {showActions && job.status === 'active' ? (
        <div className="mt-5 flex flex-wrap gap-3 border-t border-slate-100 pt-5">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <IconMessage className="h-4 w-4" />
            Chat
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            <IconUpload className="h-4 w-4" />
            Nộp sản phẩm
          </button>
        </div>
      ) : null}

      {showActions && job.status === 'submitted' ? (
        <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-5 text-sm text-slate-500">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-100 text-violet-600">
            <IconCheck className="h-4 w-4" />
          </span>
          <span>
            Đang chờ nhà tuyển dụng xác nhận và giải phóng thanh toán.
          </span>
        </div>
      ) : null}
    </div>
  )
}

function IconBriefcase({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3.5" y="6.5" width="17" height="13" rx="2.5" />
      <path d="M9 6.5V5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 5v1.5" />
      <path d="M3.5 11.5h17" />
      <path d="M12 11.5v3" />
    </svg>
  )
}

function IconMessage({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 17.5 3.5 20V6.5A2.5 2.5 0 0 1 6 4h12a2.5 2.5 0 0 1 2.5 2.5V15A2.5 2.5 0 0 1 18 17.5Z" />
    </svg>
  )
}

function IconBell({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.5 9.5a5.5 5.5 0 1 1 11 0c0 5 2 5.5 2 5.5h-15s2-.5 2-5.5" />
      <path d="M10 18.5a2 2 0 0 0 4 0" />
    </svg>
  )
}

function IconChevronDown({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function IconChevronRight({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m9 6 6 6-6 6" />
    </svg>
  )
}

function IconClock({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2.5 1.5" />
    </svg>
  )
}

function IconLock({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="5" y="10.5" width="14" height="9" rx="2" />
      <path d="M8 10.5V8a4 4 0 1 1 8 0v2.5" />
    </svg>
  )
}

function IconUpload({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 15V5" />
      <path d="m8.5 8.5 3.5-3.5 3.5 3.5" />
      <path d="M5 18.5h14" />
    </svg>
  )
}

function IconCheck({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  )
}
