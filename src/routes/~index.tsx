import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Briefcase, Shield, Star, Users, Zap } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

export const metadata = {
  title: 'GigVerse – Kiếm tiền linh hoạt cho sinh viên IT',
  description: 'Nền tảng micro-gigs dành riêng cho sinh viên IT Việt Nam.',
}

const features = [
  {
    icon: Zap,
    title: 'Nhận việc ngay hôm nay',
    desc: 'Hàng trăm micro-gig IT đang chờ. Ứng tuyển và bắt đầu làm trong vài phút.',
  },
  {
    icon: Shield,
    title: 'Thanh toán an toàn (Escrow)',
    desc: 'Tiền được giữ ký quỹ, chỉ giải phóng sau khi bạn hoàn thành và được xác nhận.',
  },
  {
    icon: Users,
    title: 'Cộng đồng sinh viên IT',
    desc: 'Kết nối với hàng nghìn sinh viên IT trên cả nước và xây dựng portfolio thực tế.',
  },
]

const testimonials = [
  {
    name: 'Trần Minh Khoa',
    school: 'BKHN',
    text: 'Mình kiếm được 8 triệu trong tháng đầu, phù hợp lắm khi đang học.',
  },
  {
    name: 'Lê Thị Thu',
    school: 'UET',
    text: 'Tìm được việc React buổi sáng, chiều đã bắt đầu làm. Nhanh và tiện!',
  },
  {
    name: 'Nguyễn Đức Huy',
    school: 'PTIT',
    text: 'Escrow giúp mình yên tâm khi nhận job lạ, không lo bị quỵt tiền nữa.',
  },
]

const categories = [
  'Web Dev',
  'Mobile App',
  'AI / ML',
  'UI/UX Design',
  'Data',
  'DevOps',
  'Testing',
  'Khác',
]

const stats = [
  ['2.500+', 'Sinh viên'],
  ['10.000+', 'Công việc'],
  ['4.8 ★', 'Đánh giá trung bình'],
]

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(129,140,248,0.18),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(196,181,253,0.22),_transparent_30%),radial-gradient(circle_at_center_top,_rgba(125,211,252,0.14),_transparent_34%),linear-gradient(180deg,_rgba(255,255,255,0.98)_0%,_rgba(245,247,255,0.98)_40%,_rgba(238,243,255,0.96)_72%,_rgba(255,255,255,1)_100%)]" />
      <div className="pointer-events-none absolute -left-10 top-20 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-10 h-96 w-96 rounded-full bg-violet-200/45 blur-3xl" />
      <div className="pointer-events-none absolute left-1/3 top-64 h-72 w-72 rounded-full bg-sky-100/60 blur-3xl" />

      <div className="relative z-10">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-300 bg-white/80 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 shadow-sm">
                <Briefcase className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold">GigVerse</span>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/dang-nhap"
                className="rounded-md border border-blue-600 bg-white px-4 py-2 text-blue-600 text-sm transition-colors hover:border-blue-700 hover:bg-blue-700 hover:text-white"
              >
                Đăng Nhập
              </Link>
              <Link
                to="/dang-ky"
                className="rounded-md border border-slate-200 bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-blue-700 hover:bg-blue-700"
              >
                Bắt đầu miễn phí
              </Link>
            </div>
          </div>
        </header>

        <section className="mx-auto max-w-7xl px-4 pb-20 pt-40 text-center">
          <h1 className="mb-6 text-5xl font-bold">
            Kiếm tiền từ kỹ năng IT <br />
            <span className="text-blue-600">ngay khi đang học</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-2xl leading-relaxed text-slate-500">
            Nền tảng micro-gigs kết nối sinh viên IT với doanh nghiệp.
            <br />
            Linh hoạt, an toàn, phù hợp với thời khóa biểu của bạn.
          </p>

          <div className="flex justify-center gap-3">
            <Link
              to="/dang-ky"
              className="flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
            >
              Đăng ký miễn phí <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/tim-viec"
              className="rounded-md border border-blue-600 bg-white px-6 py-3 text-blue-600 shadow-sm transition-colors hover:border-blue-700 hover:bg-blue-700 hover:text-white"
            >
              Xem việc làm
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-10">
            {stats.map(([value, label]) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-bold text-slate-900">{value}</p>
                <p className="mt-1 text-sm text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200/70 bg-white/50 py-10 text-center backdrop-blur-sm">
          <p className="mb-5 text-xl font-bold uppercase tracking-widest text-slate-500">
            Danh mục phổ biến
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 transition-colors hover:border-blue-700 hover:bg-blue-700 hover:text-white"
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Tại sao chọn GigVerse?
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-slate-200/80 bg-white/85 p-6 shadow-sm backdrop-blur-sm"
              >
                <feature.icon className="mb-3 text-blue-600" />
                <h3 className="mb-2 font-bold">{feature.title}</h3>
                <p className="text-sm text-slate-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white/45 py-20 backdrop-blur-sm">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Sinh viên nói gì?
          </h2>

          <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur-sm"
              >
                <div className="mb-3 flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="mb-4 text-sm text-slate-500">
                  {testimonial.text}
                </p>

                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-xs text-slate-500">{testimonial.school}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 text-center">
          <h2 className="mb-4 text-3xl font-bold">Sẵn sàng bắt đầu chưa?</h2>

          <Link
            to="/dang-ky"
            className="inline-block rounded-md bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
          >
            Đăng ký ngay
          </Link>
        </section>

        <footer className="border-t border-slate-200/70 py-6 text-sm text-slate-500">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-sm sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 shadow-sm">
                <Briefcase className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold text-slate-900">GigVerse</span>
            </div>
            <p>© 2025 GigVerse - Dành cho sinh viên IT Việt Nam</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
