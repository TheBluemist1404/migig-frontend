import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'migig-bookmarks'

interface UseBookmarksReturn {
  bookmarkedIds: Array<string>
  toggleBookmark: (jobId: string) => void
  isBookmarked: (jobId: string) => boolean
}

/** Hook quản lý bookmark/save jobs, persist vào localStorage
 * TODO: Replace with API calls: POST/DELETE /api/bookmarks/:jobId
 */
export function useBookmarks(): UseBookmarksReturn {
  const [bookmarkedIds, setBookmarkedIds] = useState<Array<string>>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  // Sync to localStorage on change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarkedIds))
  }, [bookmarkedIds])

  const toggleBookmark = useCallback((jobId: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId],
    )
  }, [])

  const isBookmarked = useCallback(
    (jobId: string) => bookmarkedIds.includes(jobId),
    [bookmarkedIds],
  )

  return { bookmarkedIds, toggleBookmark, isBookmarked }
}
