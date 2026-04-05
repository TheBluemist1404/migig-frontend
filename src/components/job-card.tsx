import { Link } from '@tanstack/react-router'
import { Bookmark, Clock, Star } from 'lucide-react'
import type { Job, User } from '@/types'
import { formatTimeAgo, formatVND } from '@/lib/utils'
import { EXPERIENCE_LABELS } from '@/data/constants'

interface JobCardProps {
  job: Job
  employer: User
  isBookmarked: boolean
  onToggleBookmark: (id: string) => void
}

export default function JobCard({
  job,
  employer,
  isBookmarked,
  onToggleBookmark,
}: JobCardProps) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          {/* Title + badges */}
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-base font-semibold text-foreground">
              {job.title}
            </h2>
            <span className="text-xs px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground font-medium">
              {job.category}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-md border border-border text-muted-foreground">
              {EXPERIENCE_LABELS[job.experienceLevel] ?? job.experienceLevel}
            </span>
          </div>

          {/* Budget */}
          <p className="text-lg font-bold text-primary mt-1">
            {formatVND(job.budgetVND)}
          </p>

          {/* Description */}
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-2">
            {job.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {job.requiredSkills.map((skill) => (
              <span
                key={skill}
                className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Employer + time */}
          <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground flex-wrap">
            <span className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span className="font-medium text-foreground">
                {employer.rating}
              </span>
              {employer.name}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {formatTimeAgo(job.createdAt)}
            </span>
          </div>
        </div>

        {/* Bookmark */}
        <button
          onClick={() => onToggleBookmark(job.id)}
          className="shrink-0 p-2 rounded-lg hover:bg-secondary transition-colors"
        >
          <Bookmark
            className={`w-4 h-4 ${isBookmarked ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
          />
        </button>
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-4 pt-4 border-t border-border">
        <Link
          to="/tim-viec/$jobId"
          params={{ jobId: job.id }}
          className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Xem chi tiết
        </Link>
        <Link
          to="/tim-viec/$jobId"
          params={{ jobId: job.id }}
          className="px-4 py-2 text-sm font-medium rounded-lg border border-border text-foreground hover:bg-secondary transition-colors"
        >
          Ứng tuyển ngay
        </Link>
      </div>
    </div>
  )
}
