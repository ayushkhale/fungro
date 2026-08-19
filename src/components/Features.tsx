import { DollarSign, BookOpen, Briefcase, Award, Smartphone, Shield } from 'lucide-react'

const features = [
  {
    icon: DollarSign,
    title: 'Earn Real Money',
    desc: 'Complete brand tasks — surveys, social posts, referrals, registrations — and get paid in UPI or bank transfer within 24 hours.',
    tag: 'Most Popular',
  },
  {
    icon: BookOpen,
    title: 'Learn Marketable Skills',
    desc: 'Pick up digital marketing, content creation, data entry, and more through real-world projects that build your resume.',
    tag: 'Skill Builder',
  },
  {
    icon: Briefcase,
    title: 'Real Brand Projects',
    desc: 'Work with 500+ top Indian and global brands — not fake internships. Real briefs, real deliverables, real payouts.',
    tag: 'Exclusive',
  },
  {
    icon: Award,
    title: 'Rank & Unlock More',
    desc: 'Climb the GroRank leaderboard. The higher you go, the bigger the projects and payouts unlocked for you.',
    tag: 'Gamified',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Experience',
    desc: 'Do everything from your phone — browse tasks, submit work, track earnings, withdraw money — all in one app.',
    tag: 'Easy',
  },
  {
    icon: Shield,
    title: 'Safe & Trusted',
    desc: 'Verified brands only. No spam, no scams. Funngro is backed by SucSEED and featured on Shark Tank India.',
    tag: 'Verified',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">Why Funngro</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Everything you need to <span className="gradient-text">earn & grow</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            We built the ultimate platform for India's ambitious teens to monetize their time and build skills that matter.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div
                key={i}
                className="glass rounded-2xl p-6 card-hover group"
                style={{ border: '1px solid var(--color-border)' }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(62,255,160,0.1)' }}>
                  <Icon size={22} style={{ color: 'var(--color-green)' }} />
                </div>

                {/* Tag */}
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-3 inline-block"
                  style={{ background: 'rgba(62,255,160,0.1)', color: 'var(--color-green)' }}>
                  {f.tag}
                </span>

                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
