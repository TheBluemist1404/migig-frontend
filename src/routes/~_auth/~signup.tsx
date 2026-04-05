import { Link, createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Briefcase, Building2, CheckCircle2, GraduationCap } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { cn } from '@/lib/utils'

export const Route = createFileRoute('/_auth/signup')({
  component: RouteComponent,
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

type Role = 'student' | 'employer' | null

function RouteComponent() {
  const [role, setRole] = useState<Role>(null)
  const [step, setStep] = useState(1)

  return (
    <div className="min-h-screen bg-background flex">
      {/* LEFT */}
      <div className="hidden lg:flex flex-col justify-between w-[420px] shrink-0 bg-blue-500 p-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <Briefcase className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg text-white">GigVerse</span>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-4 leading-snug">
            Bắt đầu hành trình kiếm tiền của bạn
          </h2>
          <p className="text-white/70 text-sm mb-8">
            Hàng nghìn sinh viên IT đang kiếm thu nhập linh hoạt mỗi ngày.
          </p>

          <div className="flex flex-col gap-3">
            {[
              'Tìm việc phù hợp trong vài phút',
              'Thanh toán an toàn qua escrow',
              'Xây dựng portfolio thực tế',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-white/80" />
                <span className="text-white/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-white/40 text-xs">© 2025 GigVerse</p>
      </div>

      {/* RIGHT */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* LOGO MOBILE */}
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground">GigVerse</span>
          </div>

          <h1 className="text-2xl font-bold text-foreground mb-1">
            Tạo tài khoản
          </h1>
          <p className="text-muted-foreground text-sm mb-8">
            Điền thông tin bên dưới để bắt đầu.
          </p>

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-4">
              <p className="text-sm font-medium text-foreground">
                Bạn đăng ký với tư cách:
              </p>

              <div className="grid grid-cols-2 gap-3">
                {/* STUDENT */}
                <button
                  type="button"
                  onClick={() => setRole('student')}
                  className={cn(
                    'relative flex flex-col items-center gap-3 rounded-2xl border-2 p-6 transition-all',
                    role === 'student'
                      ? 'border-2 border-blue-600 bg-blue-50'
                      : 'border-2 border-slate-200 bg-white hover:border-blue-300',
                  )}
                >
                  <div
                    className={cn(
                      'flex h-12 w-12 items-center justify-center rounded-xl',
                      role === 'student' ? 'bg-blue-100' : 'bg-slate-100',
                    )}
                  >
                    <GraduationCap
                      className={cn(
                        'h-5 w-5',
                        role === 'student' ? 'text-blue-600' : 'text-slate-400',
                      )}
                    />
                  </div>

                  <div className="text-center">
                    <p className="font-semibold text-sm text-foreground">
                      Sinh viên
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Tìm việc & kiếm tiền
                    </p>
                  </div>

                  {role === 'student' && (
                    <div className="absolute bottom-4 right-4 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2.5 w-2.5 rounded-full bg-white" />
                    </div>
                  )}
                </button>

                {/* EMPLOYER */}
                <button
                  type="button"
                  onClick={() => setRole('employer')}
                  className={cn(
                    'relative flex flex-col items-center gap-3 rounded-2xl border-2 p-6 transition-all',
                    role === 'employer'
                      ? 'border-2 border-blue-600 bg-blue-50'
                      : 'border-2 border-slate-200 bg-white hover:border-blue-300',
                  )}
                >
                  <div
                    className={cn(
                      'flex h-12 w-12 items-center justify-center rounded-xl',
                      role === 'employer' ? 'bg-blue-100' : 'bg-slate-100',
                    )}
                  >
                    <Building2
                      className={cn(
                        'h-5 w-5',
                        role === 'employer'
                          ? 'text-blue-600'
                          : 'text-slate-400',
                      )}
                    />
                  </div>

                  <div className="text-center">
                    <p className="font-semibold text-sm text-foreground">
                      Nhà tuyển dụng
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
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
              <Button
                className="w-full h-11 bg-blue-600 text-white hover:bg-blue-700"
                disabled={!role}
                onClick={() => setStep(2)}
              >
                Tiếp tục
              </Button>
              <Button className="w-full h-11 gap-2 !bg-primary !text-primary hover:!bg-blue-700 hover:!text-white">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
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
              </Button>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-4">
              <button
                onClick={() => setStep(1)}
                className="text-sm text-muted-foreground hover:text-blue-600 flex items-center gap-1 mb-2"
              >
                ← Quay lại
              </button>
              <br />
              <div className="space-y-1.5">
                <Label htmlFor="name">Họ và tên</Label>
                <Input id="name" placeholder="Nguyễn Văn A" className="h-11" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="h-11"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="password">Mật khẩu</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Ít nhất 8 ký tự"
                  className="h-11"
                />
              </div>
              {role === 'student' && (
                <div className="space-y-1.5">
                  <Label>Trường đại học</Label>
                  <Select>
                    <SelectTrigger className="h-11 w-full">
                      <SelectValue placeholder="Chọn trường của bạn" />
                    </SelectTrigger>
                    <SelectContent
                      position="popper"
                      className="z-50 w-[var(--radix-select-trigger-width)] rounded-2xl border border-slate-200 bg-white p-2 shadow-xl"
                    >
                      {universities.map((u) => (
                        <SelectItem
                          key={u}
                          value={u}
                          className="rounded-xl px-4 py-3 text-base text-slate-900 focus:bg-slate-50 focus:text-slate-900"
                        >
                          {u}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <Button
                className="w-full h-11 mt-2 bg-blue-600 text-white hover:bg-blue-700"
                asChild
              >
                <Link to="/forum">Tạo tài khoản</Link>
              </Button>
            </div>
          )}

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Đã có tài khoản?{' '}
            <Link
              to="/login"
              className="text-blue-600 font-medium hover:underline "
            >
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
