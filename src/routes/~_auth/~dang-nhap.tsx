import { Link, createFileRoute } from '@tanstack/react-router'
import { Briefcase } from 'lucide-react'

export const Route = createFileRoute('/_auth/dang-nhap')({
  component: LoginPage,
})

const inputClasses =
  'h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 placeholder:text-slate-400'

const primaryButtonClasses =
  'flex h-11 w-full items-center justify-center rounded-xl bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-700'

function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex items-center justify-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600">
            <Briefcase className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-900">GigVerse</span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="mb-1 text-xl font-bold text-slate-900">Đăng nhập</h1>
          <p className="mb-7 text-sm text-slate-500">Chào mừng trở lại!</p>

          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-900">
                Email
              </label>
              <input
                id="login-email"
                type="email"
                placeholder="you@example.com"
                className={inputClasses}
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-slate-900">
                  Mật khẩu
                </label>
                <Link
                  to="/login"
                  className="text-xs text-blue-600 hover:underline"
                >
                  Quên mật khẩu?
                </Link>
              </div>
              <input
                id="login-password"
                type="password"
                placeholder="••••••••"
                className={inputClasses}
              />
            </div>

            <Link to="/profile" className={primaryButtonClasses}>
              Đăng nhập
            </Link>

            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-40 bg-slate-200" />
              <span className="text-sm text-slate-500">hoặc</span>
              <div className="h-px w-40 bg-slate-200" />
            </div>

            <button
              type="button"
              className="flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-900 transition-colors hover:border-blue-700 hover:bg-blue-700 hover:text-white"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Tiếp tục với Google
            </button>
          </div>
        </div>

        <p className="mt-5 text-center text-sm text-slate-500">
          Chưa có tài khoản?{' '}
          <Link
            to="/signup"
            className="font-medium text-blue-600 hover:underline"
          >
            Đăng ký miễn phí
          </Link>
        </p>
      </div>
    </div>
  )
}
