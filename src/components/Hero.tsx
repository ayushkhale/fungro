import { ArrowRight, Star, User } from 'lucide-react'

const stats = [
  { value: '70L+', label: 'Active Teens' },
  { value: '₹14Cr+', label: 'Paid Out' },
  { value: '500+', label: 'Brand Partners' },
  { value: '4.2★', label: 'Play Store Rating' },
]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-8"
      style={{
        background: 'radial-gradient(ellipse at 70% 50%, rgba(62,255,160,0.07) 0%, transparent 60%), var(--color-bg)',
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'var(--color-green)' }} />
      <div className="absolute bottom-1/3 left-10 w-64 h-64 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: '#7effcc' }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(62,255,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(62,255,160,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-4 pb-20 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left: text */}
        <div className="animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-semibold"
            style={{ background: 'rgba(62,255,160,0.1)', color: 'var(--color-green)', border: '1px solid rgba(62,255,160,0.2)' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--color-green)' }} />
            India's #1 Teen Earning Platform · As seen on Shark Tank
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 italic font-hero">
            <span className="text-white">Teens Earn.</span>
            <br />
            <span className="gradient-text text-glow">Brands Win.</span>
            <br />
            <span className="text-white">India Grows.</span>
          </h1>

          <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-md">
            Complete real brand projects, sharpen marketable skills, and get paid in UPI — all without leaving home. Free forever.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#signup" className="btn-primary text-base px-7 py-3.5">
              Start Earning Now <ArrowRight size={18} />
            </a>
            <a href="#how-it-works" className="btn-outline text-base px-7 py-3.5">
              See How It Works
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-9 h-9 rounded-full flex items-center justify-center text-sm border-2"
                  style={{ background: 'var(--color-surface2)', borderColor: 'var(--color-bg)' }}>
                  <User size={16} className="text-gray-400" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#3effa0" color="#3effa0" />)}
              </div>
              <p className="text-xs text-gray-400">Trusted by <strong className="text-white">70 lakh+ teens</strong></p>
            </div>
          </div>
        </div>

        {/* Right: floating mockup card */}
        <div className="flex justify-center md:justify-end">
          <div className="relative animate-float">
            <img 
              src={`${import.meta.env.BASE_URL}floatinggen.png`}
              alt="Funngro Hero" 
              className="w-full max-w-2xl scale-110 drop-shadow-2xl" 
            />
          </div>
        </div>
      </div>

      {/* Stats ticker bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t overflow-hidden"
        style={{ borderColor: 'var(--color-border)', background: 'rgba(10,26,20,0.8)' }}>
        <div className="flex animate-ticker py-3" style={{ width: 'max-content' }}>
          {[...stats, ...stats].map((s, i) => (
            <div key={i} className="flex items-center gap-8 px-12">
              <span className="text-sm font-black" style={{ color: 'var(--color-green)' }}>{s.value}</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest">{s.label}</span>
              <span style={{ color: 'var(--color-border)' }}>·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
