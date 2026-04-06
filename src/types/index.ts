export type UserRole = 'student' | 'employer'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
  bio?: string
  university?: string
  skills?: Array<string>
  rating: number
  completedJobs: number
  balanceVND: number
  escrowVND: number
}

export type JobStatus =
  | 'open'
  | 'in-progress'
  | 'submitted'
  | 'completed'
  | 'cancelled'
export type ApplicationStatus =
  | 'pending'
  | 'accepted'
  | 'rejected'
  | 'completed'

export interface Job {
  id: string
  title: string
  description: string
  budgetVND: number
  category: string
  requiredSkills: Array<string>
  experienceLevel: 'beginner' | 'intermediate' | 'advanced'
  deadline: string
  employerId: string
  status: JobStatus
  createdAt: string
  attachments?: Array<string>
}

export interface Application {
  id: string
  jobId: string
  studentId: string
  proposalText: string
  proposedPrice: number
  status: ApplicationStatus
  submittedAt: string
}

export interface JobFilters {
  search?: string
  category?: string
  experience?: string
  priceRange?: string
  sort?: 'newest' | 'price-high' | 'price-low'
}
