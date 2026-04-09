import { api } from '@/lib/api-client'

export type AuthRole = 'EMPLOYEE' | 'EMPLOYER'

export interface AuthUser {
  id: string
  email: string
  username: string
  organization: string
  role: AuthRole
  createdAt: string
  updatedAt: string
  deletedAt: string | null
}

type AuthResponse = {
  user: AuthUser
}

export interface LoginPayload {
  email: string
  password: string
  role: AuthRole
}

export interface RegisterPayload extends LoginPayload {
  username?: string
  organization: string
}

export async function login(payload: LoginPayload): Promise<AuthUser> {
  const { data } = await api.post<AuthResponse>('/auth/login', payload)
  return data.user
}

export async function register(payload: RegisterPayload): Promise<AuthUser> {
  const { data } = await api.post<AuthResponse>('/auth/register', payload)
  return data.user
}

export async function logout(): Promise<void> {
  await api.post('/auth/logout')
}
