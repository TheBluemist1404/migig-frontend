import { create } from 'zustand'
import type { AuthRole, AuthUser } from '@/lib/auth'

type AuthState = {
  user: AuthUser | null
  role: AuthRole | null
  setUser: (user: AuthUser | null) => void
  setRole: (role: AuthRole | null) => void
  clearAuth: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  role: null,
  setUser: (user) => set({ user }),
  setRole: (role) => set({ role }),
  clearAuth: () => set({ user: null, role: null }),
}))
