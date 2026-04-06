import { Link, createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
} from 'lucide-react'

export const Route = createFileRoute('/_auth/signup')({
  component: SignupPage,
})

const universities = [
  'Đại học Bách Khoa Hà Nội',
  'Đại học Bách Khoa TP.HCM',
  'Đại học Công nghệ – ĐHQGHN',
  'Đại học Khoa học Tự nhiên HN',
  'Đại học Khoa học Tự nhiên HCM',
  'Đại học FPT',
  'Học viện Công nghệ Bưu chính Viễn thông',
  'Đại học Sư phạm Kỹ thuật TP.HCM',
  'Đại học Tôn Đức Thắng',
  'Đại học Duy Tân',
  'Đại học Đà Nẵng',
  'Học viện Kỹ thuật Mật mã',
  'Trường khác',
]

const inputClasses =
  'h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 placeholder:text-slate-400'

type Role = 'student' | 'employer' | null

function SignupPage() {
  const [role, setRole] = useState<Role>(null)
  const [step, setStep] = useState(1)

  return (
    <div className="flex min-h-screen bg-slate-50">
      <div className="hidden w-[420px] shrink-0 flex-col justify-between bg-blue-500 p-10 lg:flex">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
            <Briefcase className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold text-white">GigVerse</span>
        </div>

        <div>
          <h2 className="mb-4 text-3xl font-bold leading-snug text-white">
            Bắt đầu hành trình kiếm tiền của bạn
          </h2>
          <p className="mb-8 text-sm text-white/70">
            Hàng nghìn sinh viên IT đang kiếm thu nhập linh hoạt mỗi ngày.
          </p>

          <div className="flex flex-col gap-3">
            {[
              'Tìm việc phù hợp trong vài phút',
              'Thanh toán an toàn qua escrow',
              'Xây dựng portfolio thực tế',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-white/80" />
                <span className="text-sm text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-white/40">© 2025 GigVerse</p>
      </div>

      <div className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8 flex items-center gap-2 lg:hidden">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600">
              <Briefcase className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-slate-900">GigVerse</span>
          </div>

          <h1 className="mb-1 text-2xl font-bold text-slate-900">
            Tạo tài khoản
          </h1>
          <p className="mb-8 text-sm text-slate-500">
            Điền thông tin bên dưới để bắt đầu.
          </p>

          {step === 1 && (
            <div className="space-y-4">
              <p className="text-sm font-medium text-slate-900">
                Bạn đăng ký với tư cách:
              </p>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  aria-pressed={role === 'student'}
                  onClick={() => setRole('student')}
                  className={`relative flex flex-col items-center gap-3 rounded-2xl border-2 p-6 transition-all ${
                    role === 'student'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-slate-200 bg-white hover:border-blue-300'
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      role === 'student' ? 'bg-blue-100' : 'bg-slate-100'
                    }`}
                  >
                    <GraduationCap
                      className={`h-5 w-5 ${
                        role === 'student' ? 'text-blue-600' : 'text-slate-400'
                      }`}
                    />
                  </div>

                  <div className="text-center">
                    <p className="text-sm font-semibold text-slate-900">
                      Sinh viên
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Tìm việc & kiếm tiền
                    </p>
                  </div>

                  {role === 'student' && (
                    <div className="absolute bottom-4 right-4 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2.5 w-2.5 rounded-full bg-white" />
                    </div>
                  )}
                </button>
                <button
                  type="button"
                  aria-pressed={role === 'employer'}
                  onClick={() => setRole('employer')}
                  className={`relative flex flex-col items-center gap-3 rounded-2xl border-2 p-6 transition-all ${
                    role === 'employer'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-slate-200 bg-white hover:border-blue-300'
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      role === 'employer' ? 'bg-blue-100' : 'bg-slate-100'
                    }`}
                  >
                    <Building2
                      className={`h-5 w-5 ${
                        role === 'employer' ? 'text-blue-600' : 'text-slate-400'
                      }`}
                    />
                  </div>

                  <div className="text-center">
                    <p className="text-sm font-semibold text-slate-900">
                      Nhà tuyển dụng
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Đăng việc & thuê ngay
                    </p>
                  </div>

                  {role === 'employer' && (
                    <div className="absolute bottom-4 right-4 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2.5 w-2.5 rounded-full bg-white" />
                    </div>
                  )}
                </button>
              </div>

              <button
                type="button"
                disabled={!role}
                onClick={() => setStep(2)}
                className="h-11 w-full rounded-xl bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
              >
                Tiếp tục
              </button>

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
          )}

          {step === 2 && (
            <div className="space-y-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-blue-600"
              >
                ← Quay lại
              </button>

              <div className="space-y-1.5">
                <label
                  htmlFor="signup-name"
                  className="text-sm font-medium text-slate-900"
                >
                  Họ và tên
                </label>
                <input
                  id="signup-name"
                  placeholder="Nguyễn Văn A"
                  className={inputClasses}
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="signup-email"
                  className="text-sm font-medium text-slate-900"
                >
                  Email
                </label>
                <input
                  id="signup-email"
                  type="email"
                  placeholder="you@example.com"
                  className={inputClasses}
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="signup-password"
                  className="text-sm font-medium text-slate-900"
                >
                  Mật khẩu
                </label>
                <input
                  id="signup-password"
                  type="password"
                  placeholder="Ít nhất 8 ký tự"
                  className={inputClasses}
                />
              </div>

              {role === 'student' && (
                <div className="space-y-1.5">
                  <label
                    htmlFor="signup-university"
                    className="text-sm font-medium text-slate-900"
                  >
                    Trường đại học
                  </label>
                  <div className="relative">
                    <select
                      id="signup-university"
                      defaultValue=""
                      className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 pr-11 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    >
                      <option value="" disabled>
                        Chọn trường của bạn
                      </option>
                      {universities.map((university) => (
                        <option key={university} value={university}>
                          {university}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>
              )}

              <Link
                to="/forum"
                className="flex h-11 w-full items-center justify-center rounded-xl bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                Tạo tài khoản
              </Link>
            </div>
          )}

          <p className="mt-6 text-center text-sm text-slate-500">
            Đã có tài khoản?{' '}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:underline"
            >
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
