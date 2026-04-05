import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Briefcase, Shield, Star, Users, Zap } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

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

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      <HeroSection />
      <CategoriesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  )
}

function LandingNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Briefcase className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg text-foreground">MiGig</span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Đăng nhập
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Bắt đầu miễn phí
          </Link>
        </div>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
      <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-5">
        Dành riêng cho sinh viên IT Việt Nam
      </span>
      <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight mb-6">
        Kiếm tiền từ kỹ năng IT
        <br />
        <span className="text-primary">ngay khi đang học</span>
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
        Nền tảng micro-gigs kết nối sinh viên IT với doanh nghiệp. Linh hoạt, an
        toàn, phù hợp với thời khóa biểu của bạn.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          to="/signup"
          className="h-12 px-8 inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          Đăng ký miễn phí <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          to="/tim-viec"
          className="h-12 px-8 inline-flex items-center rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
        >
          Xem việc làm
        </Link>
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
  )
}

function CategoriesSection() {
  return (
    <section className="border-y border-border bg-secondary/40 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
          Danh mục phổ biến
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <Link
              key={c}
              to="/tim-viec"
              className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              {c}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-bold text-center text-foreground mb-12">
        Tại sao chọn MiGig?
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-card border border-border rounded-2xl p-7 hover:shadow-lg transition-shadow"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <f.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 text-base">
              {f.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="bg-secondary/40 border-y border-border py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Sinh viên nói gì?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-primary rounded-3xl px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-primary-foreground mb-3">
          Sẵn sàng bắt đầu chưa?
        </h2>
        <p className="text-primary-foreground/80 mb-8 text-lg">
          Tạo tài khoản miễn phí và nhận việc đầu tiên ngay hôm nay.
        </p>
        <Link
          to="/signup"
          className="h-12 px-8 inline-flex items-center gap-2 rounded-lg bg-secondary text-secondary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          Đăng ký ngay <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-primary" />
          <span className="font-bold text-foreground">MiGig</span>
        </div>
        <p>&copy; 2025 MiGig &ndash; Dành cho sinh viên IT Việt Nam.</p>
      </div>
    </footer>
  )
}
