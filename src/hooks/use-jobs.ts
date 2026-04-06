import type { Job, JobFilters, User } from '@/types'
import { mockEmployers, mockJobs } from '@/data/mock-jobs'
import { PRICE_RANGES } from '@/data/constants'

interface UseJobsReturn {
  jobs: Array<Job>
  isLoading: boolean
  error: string | null
}

/** Filter and sort mock jobs based on filter criteria */
function getFilteredJobs(filters?: JobFilters): Array<Job> {
  let result = [...mockJobs]

  if (filters?.search) {
    const q = filters.search.toLowerCase()
    result = result.filter(
      (j) =>
        j.title.toLowerCase().includes(q) ||
        j.requiredSkills.some((s) => s.toLowerCase().includes(q)),
    )
  }

  if (filters?.category && filters.category !== 'all') {
    result = result.filter((j) => j.category === filters.category)
  }

  if (filters?.experience && filters.experience !== 'all') {
    result = result.filter((j) => j.experienceLevel === filters.experience)
  }

  if (filters?.priceRange && filters.priceRange !== 'all') {
    const range = PRICE_RANGES.find((r) => r.id === filters.priceRange)
    if (range) {
      result = result.filter(
        (j) => j.budgetVND >= range.min && j.budgetVND <= range.max,
      )
    }
  }

  if (filters?.sort === 'price-high') {
    result.sort((a, b) => b.budgetVND - a.budgetVND)
  } else if (filters?.sort === 'price-low') {
    result.sort((a, b) => a.budgetVND - b.budgetVND)
  } else {
    result.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
  }

  return result
}

/** Hook quản lý danh sách jobs với filter
 * TODO: Replace with API call: GET /api/jobs?search=...&category=...&experience=...&priceRange=...&sort=...
 */
export function useJobs(filters?: JobFilters): UseJobsReturn {
  const jobs = getFilteredJobs(filters)
  return { jobs, isLoading: false, error: null }
}

interface UseJobDetailReturn {
  job: Job | null
  employer: User | null
  isLoading: boolean
  error: string | null
}

/** Hook lấy chi tiết 1 job theo ID
 * TODO: Replace with API call: GET /api/jobs/:id
 */
export function useJobDetail(jobId: string): UseJobDetailReturn {
  const job = mockJobs.find((j) => j.id === jobId) ?? null
  const employer = job ? (mockEmployers[job.employerId] ?? null) : null
  const error = !job ? 'Không tìm thấy công việc' : null

  return { job, employer, isLoading: false, error }
}
