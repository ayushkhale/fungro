import { useState } from 'react'
import { ArrowRight, CheckCircle2, Zap, ShieldCheck, Smartphone } from 'lucide-react'

export default function SignupCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section
      id="signup"
      className="py-24 relative overflow-hidden"
    >
      {/* Background radial */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(62,255,160,0.08) 0%, transparent 70%)',
        }} />
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(62,255,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(62,255,160,1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <span className="section-label">Join the Movement</span>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
          Ready to earn your <br /><span className="gradient-text text-glow">first ₹1,000?</span>
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Join 70 lakh+ teens already earning. Sign up free and complete your first task today.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="flex-1 px-5 py-3.5 rounded-full text-white text-sm outline-none"
              style={{
                background: 'var(--color-surface2)',
                border: '1px solid var(--color-border)',
              }}
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Get Early Access <ArrowRight size={16} />
            </button>
          </form>
        ) : (
          <div className="flex items-center justify-center gap-2 mb-8 text-lg font-bold"
            style={{ color: 'var(--color-green)' }}>
            <CheckCircle2 size={24} />
            You're on the list! We'll be in touch soon.
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          {[
            { text: '100% Free forever', Icon: CheckCircle2 },
            { text: 'First payout in 24h', Icon: Zap },
            { text: 'Safe & verified brands', Icon: ShieldCheck },
            { text: 'Download on iOS & Android', Icon: Smartphone }
          ].map(item => (
            <span key={item.text} className="flex items-center gap-1.5">
              <item.Icon size={16} className="text-green" /> {item.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
