import axios from 'axios'

type ValidationMessage = {
  formErrors?: Array<string>
  fieldErrors?: Record<string, Array<string>>
}

export function getApiErrorMessage(error: unknown): string {
  if (!axios.isAxiosError(error)) {
    return 'Something went wrong. Please try again.'
  }

  const message = error.response?.data?.message as
    | string
    | ValidationMessage
    | undefined

  if (typeof message === 'string') {
    return message
  }

  if (message && typeof message === 'object') {
    const formError = message.formErrors?.[0]
    if (formError) {
      return formError
    }

    const fieldError = Object.values(message.fieldErrors ?? {}).flat()[0]
    if (fieldError) {
      return fieldError
    }
  }

  return error.message || 'Request failed.'
}
