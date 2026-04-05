export const JOB_CATEGORIES = [
  { id: 'web', label: 'Web Development' },
  { id: 'mobile', label: 'Mobile App' },
  { id: 'ai', label: 'AI & Machine Learning' },
  { id: 'data', label: 'Data Analysis' },
  { id: 'design', label: 'UI/UX Design' },
  { id: 'content', label: 'Content Writing' },
  { id: 'social', label: 'Social Media' },
  { id: 'other', label: 'Khác' },
]

export const EXPERIENCE_LEVELS = [
  { value: 'beginner', label: 'Mới bắt đầu' },
  { value: 'intermediate', label: 'Có kinh nghiệm' },
  { value: 'advanced', label: 'Chuyên gia' },
]

export const PRICE_RANGES = [
  { id: 'all', label: 'Tất cả giá', min: 0, max: Infinity },
  { id: '100-500k', label: '100K – 500K ₫', min: 100000, max: 500000 },
  { id: '500k-2m', label: '500K – 2M ₫', min: 500000, max: 2000000 },
  { id: '2m-5m', label: '2M – 5M ₫', min: 2000000, max: 5000000 },
  { id: '5m+', label: '5M+ ₫', min: 5000000, max: Infinity },
]

export const JOB_STATUS_LABELS: Record<string, string> = {
  open: 'Đang Tuyển',
  'in-progress': 'Đang Thực Hiện',
  submitted: 'Đã Nộp',
  completed: 'Đã Hoàn Thành',
  cancelled: 'Đã Hủy',
}

export const EXPERIENCE_LABELS: Record<string, string> = {
  beginner: 'Mới bắt đầu',
  intermediate: 'Có kinh nghiệm',
  advanced: 'Chuyên gia',
}

export const STATUS_COLORS: Record<string, string> = {
  open: 'bg-green-100 text-green-800',
  'in-progress': 'bg-blue-100 text-blue-800',
  submitted: 'bg-yellow-100 text-yellow-800',
  completed: 'bg-emerald-100 text-emerald-800',
  cancelled: 'bg-red-100 text-red-800',
  pending: 'bg-amber-100 text-amber-800',
  accepted: 'bg-green-100 text-green-800',
  rejected: 'bg-red-100 text-red-800',
}
