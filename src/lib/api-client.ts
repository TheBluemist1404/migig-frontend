import axios from 'axios'
import { env } from '@/lib/env'

let refreshRequest: Promise<unknown> | null = null

export const api = axios.create({
  baseURL: env.apiUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (!originalRequest || originalRequest._retry) {
      throw error
    }

    if (error.response?.status !== 401) {
      throw error
    }

    const requestUrl = String(originalRequest.url ?? '')
    const isAuthRoute =
      requestUrl.includes('/auth/login') ||
      requestUrl.includes('/auth/register') ||
      requestUrl.includes('/auth/refresh') ||
      requestUrl.includes('/auth/logout')

    if (isAuthRoute) {
      throw error
    }

    originalRequest._retry = true

    refreshRequest ??= api.post('/auth/refresh').finally(() => {
      refreshRequest = null
    })

    await refreshRequest
    return api(originalRequest)
  },
)
