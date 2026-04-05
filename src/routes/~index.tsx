import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Briefcase, Shield, Star, Users, Zap } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: App,
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

const cats = [
  'Web Dev',
  'Mobile App',
  'AI / ML',
  'UI/UX Design',
  'Data',
  'DevOps',
  'Testing',
  'Khác',
]

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(129,140,248,0.18),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(196,181,253,0.22),_transparent_30%),radial-gradient(circle_at_center_top,_rgba(125,211,252,0.14),_transparent_34%),linear-gradient(180deg,_rgba(255,255,255,0.98)_0%,_rgba(245,247,255,0.98)_40%,_rgba(238,243,255,0.96)_72%,_rgba(255,255,255,1)_100%)]" />
      <div className="pointer-events-none absolute -left-10 top-20 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-10 h-96 w-96 rounded-full bg-violet-200/45 blur-3xl" />
      <div className="pointer-events-none absolute left-1/3 top-64 h-72 w-72 rounded-full bg-sky-100/60 blur-3xl" />

      <div className="relative z-10">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-300 bg-white/78 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg">GigVerse</span>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                Đăng Nhập
              </Link>
              <Link
                to="/signup"
                className="rounded-md border border-slate-200 bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-blue-700 hover:bg-blue-700 hover:text-white"
              >
                Bắt đầu miễn phí
              </Link>
            </div>
          </div>
        </header>

        <section className="max-w-7xl mx-auto px-4 pt-40 pb-20 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Kiếm tiền từ kỹ năng IT <br />
            <span className="text-blue-600">ngay khi đang học</span>
          </h1>

          <p className="text-2xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
            Nền tảng micro-gigs kết nối sinh viên IT với doanh nghiệp.
            <br />
            Linh hoạt, an toàn, phù hợp với thời khóa biểu của bạn.
          </p>

          <div className="flex justify-center gap-3">
            <Link
              to="/signup"
              className="flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
            >
              Đăng ký miễn phí <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              type="button"
              className="rounded-md border border-blue-600 bg-primary px-6 py-3 text-primary shadow-sm transition-colors hover:border-blue-700 hover:bg-blue-700 hover:text-white"
            >
              <Link to="/tim-viec">Xem việc làm</Link>
            </button>
          </div>
          <div className="flex items-center justify-center gap-10 mt-16 flex-wrap">
            {[
              ['2.500+', 'Sinh viên'],
              ['10.000+', 'Công việc'],
              ['4.8 ★', 'Đánh giá trung bình'],
            ].map(([val, label]) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-bold text-foreground">{val}</p>
                <p className="text-sm text-muted-foreground mt-1">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-10 border-y border-slate-200/70 bg-white/50 text-center backdrop-blur-sm">
          <p className="text-xl font-bold uppercase tracking-widest text-slate-500 mb-5">
            Danh mục phổ biến
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {cats.map((c) => (
              <button
                key={c}
                type="button"
                className="rounded-full border border-lightgray bg-primary px-4 py-2 text-sm text-primary transition-colors hover:border-blue-700 hover:bg-blue-700 hover:text-white"
              >
                {c}
              </button>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tại sao chọn GigVerse?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="border border-slate-200/80 rounded-xl p-6 bg-white/82 shadow-sm backdrop-blur-sm"
              >
                <f.icon className="mb-3 text-blue-600" />
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white/46 py-20 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-center mb-12">
            Sinh viên nói gì?
          </h2>

          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="border border-slate-200/80 rounded-xl p-6 bg-white/88 shadow-sm backdrop-blur-sm"
              >
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-sm mb-4 text-slate-500">{t.text}</p>

                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.school}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Sẵn sàng bắt đầu chưa?</h2>

          <Link
            to="/signup"
            className="inline-block rounded-md bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
          >
            Đăng ký ngay
          </Link>
        </section>

        <footer className="border-t border-slate-200/70 py-6 text-center text-sm text-gray-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg">GigVerse</span>
            </div>
            <p>� 2025 GigVerse - Dành cho sinh viên IT Việt Nam</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
