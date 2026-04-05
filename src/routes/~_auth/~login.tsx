import { Link, createFileRoute } from '@tanstack/react-router'
import { Briefcase } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const Route = createFileRoute('/_auth/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        {/* LOGO */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl text-foreground">GigVerse</span>
        </div>

        {/* CARD */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
          <h1 className="text-xl font-bold mb-1">Đăng nhập</h1>
          <p className="text-sm text-muted-foreground mb-7">
            Chào mừng trở lại!
          </p>

          <div className="space-y-4">
            {/* EMAIL */}
            <div className="space-y-1.5">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="you@example.com"
                className="h-11"
              />
            </div>

            {/* PASSWORD */}
            <div className="space-y-1.5">
              <div className="flex justify-between">
                <Label>Mật khẩu</Label>
                <Link
                  to="/login"
                  className="text-xs text-blue-600 hover:underline"
                >
                  Quên mật khẩu?
                </Link>
              </div>
              <Input type="password" placeholder="••••••••" className="h-11" />
            </div>

            {/* LOGIN BUTTON */}
            <Button
              className="w-full h-11 bg-blue-600 text-white hover:bg-blue-700"
              asChild
            >
              <Link to="/profile">Đăng nhập</Link>
            </Button>

            {/* DIVIDER */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-40 bg-slate-200" />
              <span className="text-sm text-slate-500">hoặc</span>
              <div className="h-px w-40 bg-slate-200" />
            </div>

            {/* GOOGLE */}
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
        </div>

        {/* FOOTER */}
        <p className="mt-5 text-center text-sm text-muted-foreground">
          Chưa có tài khoản?{' '}
          <Link
            to="/signup"
            className="text-blue-600 font-medium hover:underline"
          >
            Đăng ký miễn phí
          </Link>
        </p>
      </div>
    </div>
  )
}
