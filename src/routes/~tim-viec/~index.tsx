import { createFileRoute, useNavigate } from '@tanstack/react-router'
import Navbar from '@/components/navbar'
import SearchBar from '@/components/search-bar'
import JobCard from '@/components/job-card'
import JobFilterSidebar from '@/components/job-filter-sidebar'
import { useJobs } from '@/hooks/use-jobs'
import { useBookmarks } from '@/hooks/use-bookmarks'
import { mockEmployers } from '@/data/mock-jobs'

interface TimViecSearch {
  search?: string
  category?: string
  experience?: string
  priceRange?: string
  sort?: 'newest' | 'price-high' | 'price-low'
}

export const Route = createFileRoute('/tim-viec/')({
  validateSearch: (search: Record<string, unknown>): TimViecSearch => ({
    search: (search.search as string) || undefined,
    category: (search.category as string) || undefined,
    experience: (search.experience as string) || undefined,
    priceRange: (search.priceRange as string) || undefined,
    sort: (search.sort as TimViecSearch['sort']) || undefined,
  }),
  component: TimViecPage,
})

function TimViecPage() {
  const filters = Route.useSearch()
  const navigate = useNavigate({ from: Route.fullPath })
  const { jobs, isLoading } = useJobs(filters)
  const { isBookmarked, toggleBookmark } = useBookmarks()

  const updateFilter = (key: keyof TimViecSearch, value: string) => {
    navigate({
      search: (prev: TimViecSearch) => ({
        ...prev,
        [key]: value === 'all' ? undefined : value || undefined,
      }),
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Tìm việc</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {jobs.length} công việc phù hợp
          </p>
        </div>

        {/* Search + sort bar */}
        <div className="flex gap-3 mb-6 flex-wrap">
          <SearchBar
            value={filters.search ?? ''}
            onChange={(v) => updateFilter('search', v)}
          />
          <select
            value={filters.sort ?? 'newest'}
            onChange={(e) => updateFilter('sort', e.target.value)}
            className="w-44 h-11 px-3 rounded-lg border border-border bg-card text-foreground text-sm outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="newest">Mới nhất</option>
            <option value="price-high">Giá cao → thấp</option>
            <option value="price-low">Giá thấp → cao</option>
          </select>
        </div>

        <div className="flex gap-6">
          {/* Sidebar */}
          <JobFilterSidebar
            selectedCategory={filters.category ?? 'all'}
            selectedExperience={filters.experience ?? 'all'}
            selectedPriceRange={filters.priceRange ?? 'all'}
            onCategoryChange={(v) => updateFilter('category', v)}
            onExperienceChange={(v) => updateFilter('experience', v)}
            onPriceChange={(v) => updateFilter('priceRange', v)}
          />

          {/* Job list */}
          <div className="flex-1 space-y-4">
            {isLoading ? (
              <div className="bg-card border border-border rounded-2xl p-12 text-center">
                <p className="text-muted-foreground">Đang tải...</p>
              </div>
            ) : jobs.length === 0 ? (
              <div className="bg-card border border-border rounded-2xl p-12 text-center">
                <p className="text-muted-foreground">
                  Chưa có dữ liệu phù hợp.
                </p>
              </div>
            ) : (
              jobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  employer={mockEmployers[job.employerId]}
                  isBookmarked={isBookmarked(job.id)}
                  onToggleBookmark={toggleBookmark}
                />
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
