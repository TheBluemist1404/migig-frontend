import { useState } from 'react'
import { X } from 'lucide-react'
import type React from 'react'
import { useApplication } from '@/hooks/use-application'
import { formatVND } from '@/lib/utils'

interface ApplicationModalProps {
  jobTitle: string
  jobBudget: number
  isOpen: boolean
  onClose: () => void
}

export default function ApplicationModal({
  jobTitle,
  jobBudget,
  isOpen,
  onClose,
}: ApplicationModalProps) {
  const [proposal, setProposal] = useState('')
  const [price, setPrice] = useState('')
  const { submitApplication, isSubmitting, error, isSuccess, reset } =
    useApplication()

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    submitApplication({
      jobId: '',
      proposal,
      proposedPrice: Number(price),
    })
  }

  const handleClose = () => {
    setProposal('')
    setPrice('')
    reset()
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={handleClose} />

      {/* Modal */}
      <div className="relative bg-card rounded-2xl p-6 w-full max-w-md mx-4 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">
            Gửi ứng tuyển
          </h2>
          <button
            onClick={handleClose}
            className="p-1 rounded-lg hover:bg-secondary transition-colors"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        <p className="text-sm font-medium text-foreground mb-1">{jobTitle}</p>
        <p className="text-xs text-muted-foreground mb-4">
          Ngân sách: {formatVND(jobBudget)}
        </p>

        {isSuccess ? (
          <div className="py-8 text-center">
            <p className="text-primary font-semibold">Ứng tuyển thành công!</p>
            <button
              onClick={handleClose}
              className="mt-4 px-4 py-2 text-sm rounded-lg border border-border hover:bg-secondary transition-colors"
            >
              Đóng
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">
                Nội dung đề xuất
              </label>
              <textarea
                placeholder="Giới thiệu bản thân và lý do bạn phù hợp với công việc này..."
                className="w-full min-h-32 p-3 rounded-lg border border-border bg-background text-foreground text-sm resize-none outline-none focus:ring-2 focus:ring-ring"
                value={proposal}
                onChange={(e) => setProposal(e.target.value)}
              />
              <p className="text-xs text-muted-foreground mt-1">
                {proposal.length} ký tự (tối thiểu 50)
              </p>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">
                Giá đề xuất (VND)
              </label>
              <input
                type="number"
                placeholder="VD: 3000000"
                className="w-full p-3 rounded-lg border border-border bg-background text-foreground text-sm outline-none focus:ring-2 focus:ring-ring"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            <button
              type="submit"
              disabled={isSubmitting || proposal.length < 50}
              className="w-full h-11 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Đang gửi...' : 'Gửi ứng tuyển'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
