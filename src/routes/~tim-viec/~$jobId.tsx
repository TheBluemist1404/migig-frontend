import { useState } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import {
  ArrowLeft,
  Bookmark,
  ChevronRight,
  Clock,
  Paperclip,
  Shield,
  Star,
} from 'lucide-react'
import Navbar from '@/components/navbar'
import ApplicationModal from '@/components/application-modal'
import { useJobDetail } from '@/hooks/use-jobs'
import { useBookmarks } from '@/hooks/use-bookmarks'
import {
  formatDateVN,
  formatTimeAgo,
  formatVND,
  getInitials,
} from '@/lib/utils'
import { EXPERIENCE_LABELS } from '@/data/constants'

export const Route = createFileRoute('/tim-viec/$jobId')({
  component: JobDetailPage,
})

function JobDetailPage() {
  const { jobId } = Route.useParams()
  const { job, employer, isLoading, error } = useJobDetail(jobId)
  const { isBookmarked, toggleBookmark } = useBookmarks()
  const [modalOpen, setModalOpen] = useState(false)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-muted-foreground">Đang tải...</p>
        </main>
      </div>
    )
  }

  if (error || !job) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-destructive mb-4">
            {error ?? 'Không tìm thấy công việc'}
          </p>
          <Link to="/tim-viec" className="text-primary hover:underline">
            ← Quay lại danh sách
          </Link>
        </main>
      </div>
    )
  }

  const saved = isBookmarked(job.id)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Link
          to="/tim-viec"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Quay lại danh sách
        </Link>

        <div className="flex gap-6 flex-col lg:flex-row">
          {/* Main content */}
          <div className="flex-1 space-y-5">
            {/* Header card */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-xs px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground font-medium">
                      {job.category}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-md border border-border text-muted-foreground">
                      {EXPERIENCE_LABELS[job.experienceLevel]}
                    </span>
                  </div>
                  <h1 className="text-xl font-bold text-foreground mt-2">
                    {job.title}
                  </h1>
                  <p className="text-2xl font-bold text-primary mt-2">
                    {formatVND(job.budgetVND)}
                  </p>
                  <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground flex-wrap">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> Đăng{' '}
                      {formatTimeAgo(job.createdAt)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-orange-500" /> Hạn:{' '}
                      {formatDateVN(job.deadline)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => toggleBookmark(job.id)}
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                >
                  <Bookmark
                    className={`w-5 h-5 ${saved ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
                  />
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-base font-semibold text-foreground mb-4">
                Mô tả công việc
              </h2>
              <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {job.description}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-base font-semibold text-foreground mb-3">
                Kỹ năng yêu cầu
              </h2>
              <div className="flex flex-wrap gap-2">
                {job.requiredSkills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-lg"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Attachments */}
            {job.attachments && job.attachments.length > 0 && (
              <div className="bg-card border border-border rounded-2xl p-6">
                <h2 className="text-base font-semibold text-foreground mb-3">
                  File đính kèm
                </h2>
                <div className="flex flex-col gap-2">
                  {job.attachments.map((file) => (
                    <div
                      key={file}
                      className="flex items-center gap-3 p-3 rounded-xl border border-border hover:bg-secondary/30 transition-colors cursor-pointer"
                    >
                      <Paperclip className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-foreground">{file}</span>
                      <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-72 space-y-4 shrink-0">
            <SidebarContent
              employer={employer}
              saved={saved}
              onToggleBookmark={() => toggleBookmark(job.id)}
              onApply={() => setModalOpen(true)}
            />
          </div>
        </div>
      </main>

      <ApplicationModal
        jobTitle={job.title}
        jobBudget={job.budgetVND}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  )
}

/** Sidebar tách riêng để giữ component chính gọn */
function SidebarContent({
  employer,
  saved,
  onToggleBookmark,
  onApply,
}: {
  employer: { name: string; rating: number; completedJobs: number } | null
  saved: boolean
  onToggleBookmark: () => void
  onApply: () => void
}) {
  return (
    <>
      {/* CTAs */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-2.5">
        <button
          onClick={onApply}
          className="w-full h-11 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
        >
          Ứng tuyển ngay
        </button>
        <button
          onClick={onToggleBookmark}
          className="w-full h-11 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors flex items-center justify-center gap-2"
        >
          <Bookmark
            className={`w-4 h-4 ${saved ? 'fill-primary text-primary' : ''}`}
          />
          {saved ? 'Đã lưu' : 'Lưu công việc'}
        </button>
      </div>

      {/* Employer */}
      {employer && (
        <div className="bg-card border border-border rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">
            Nhà tuyển dụng
          </h3>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center font-bold text-primary text-sm">
              {getInitials(employer.name)}
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                {employer.name}
              </p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span>{employer.rating}</span>
                <span>· {employer.completedJobs} job đã đăng</span>
              </div>
            </div>
          </div>
          <button className="w-full py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors">
            Xem hồ sơ
          </button>
        </div>
      )}

      {/* Safety note */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
        <div className="flex items-start gap-2.5">
          <Shield className="w-4 h-4 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-xs font-semibold text-primary mb-1">
              Thanh toán bảo mật
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Tiền được giữ ký quỹ an toàn. Chỉ giải phóng khi bạn hoàn thành và
              được xác nhận.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
