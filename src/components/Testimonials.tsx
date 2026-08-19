import { Quote, Star, Laptop, GraduationCap, Mic } from 'lucide-react'

const testimonials = [
  {
    name: 'Ananya Sharma',
    age: 17,
    city: 'Delhi',
    earned: '₹8,400/month',
    quote: 'I started using Funngro during my board exam prep breaks. Within 3 months I earned enough to buy my first laptop. This is genuinely life-changing!',
    Icon: Laptop,
    rating: 5,
  },
  {
    name: 'Rohan Mehta',
    age: 16,
    city: 'Pune',
    earned: '₹5,200/month',
    quote: 'Brands actually pay you real money for simple tasks. I do surveys and social tasks in my free time. It\'s the best side hustle for any teen with a phone.',
    Icon: GraduationCap,
    rating: 5,
  },
  {
    name: 'Priya Nair',
    age: 18,
    city: 'Kochi',
    earned: '₹12,000/month',
    quote: 'The GroRank system keeps me motivated. I\'m a Gold-tier earner now and I get premium brand campaigns. Funngro really rewards hard work!',
    Icon: Mic,
    rating: 5,
  },
]

const stats = [
  { value: '70L+', label: 'Teens Earning' },
  { value: '₹14Cr+', label: 'Total Paid Out' },
  { value: '500+', label: 'Brand Partners' },
  { value: '<24h', label: 'Payout Time' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24" style={{ background: 'var(--color-surface)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl md:text-5xl font-black gradient-text mb-1">{s.value}</p>
              <p className="text-sm text-gray-400 uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label">Real Stories</span>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Teens who are <span className="gradient-text">winning big</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 card-hover flex flex-col"
              style={{ border: '1px solid var(--color-border)' }}
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl" style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <t.Icon size={20} style={{ color: 'var(--color-green)' }} />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">Age {t.age} · {t.city}</p>
                  </div>
                </div>
                <Quote size={20} style={{ color: 'var(--color-green)', opacity: 0.6 }} />
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-300 leading-relaxed flex-1 mb-4">"{t.quote}"</p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4"
                style={{ borderTop: '1px solid var(--color-border)' }}>
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={12} fill="#3effa0" color="#3effa0" />
                  ))}
                </div>
                <span className="text-sm font-bold" style={{ color: 'var(--color-green)' }}>{t.earned}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
