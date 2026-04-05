import { useCallback, useState } from 'react'

interface SubmitApplicationParams {
  jobId: string
  proposal: string
  proposedPrice: number
}

interface UseApplicationReturn {
  submitApplication: (params: SubmitApplicationParams) => Promise<void>
  isSubmitting: boolean
  error: string | null
  isSuccess: boolean
  reset: () => void
}

/** Hook gửi ứng tuyển công việc
 * TODO: Replace with API call: POST /api/applications
 */
export function useApplication(): UseApplicationReturn {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)

  const reset = useCallback(() => {
    setError(null)
    setIsSuccess(false)
  }, [])

  const submitApplication = useCallback(
    async (params: SubmitApplicationParams) => {
      // Validate
      if (params.proposal.length < 50) {
        setError('Nội dung đề xuất phải ít nhất 50 ký tự')
        return
      }
      if (params.proposedPrice <= 0) {
        setError('Giá đề xuất phải lớn hơn 0')
        return
      }

      setIsSubmitting(true)
      setError(null)

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500))
        console.log('Application submitted:', params)
        setIsSuccess(true)
      } catch {
        setError('Có lỗi xảy ra, vui lòng thử lại')
      } finally {
        setIsSubmitting(false)
      }
    },
    [],
  )

  return { submitApplication, isSubmitting, error, isSuccess, reset }
}
