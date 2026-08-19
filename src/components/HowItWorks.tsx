import { CheckCircle2, Smartphone, Wallet, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: Smartphone,
    step: '01',
    title: 'Download & Sign Up',
    desc: 'Create your free Funngro account in under 2 minutes. No fees, no hidden charges — ever.',
  },
  {
    icon: BarChart3,
    step: '02',
    title: 'Browse & Pick Projects',
    desc: 'Explore hundreds of projects from top brands. Choose ones that match your interests and time.',
  },
  {
    icon: CheckCircle2,
    step: '03',
    title: 'Complete & Submit',
    desc: 'Do the task, submit your work directly in the app. Our quality system ensures fair evaluation.',
  },
  {
    icon: Wallet,
    step: '04',
    title: 'Get Paid in UPI',
    desc: 'Approved work = instant payout. Transfer to UPI or bank — your money, your choice.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            From zero to <span className="gradient-text">first payout</span> in 4 steps
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Getting started is ridiculously simple. Thousands of teens earn their first ₹100 within their first hour.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-0 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
            style={{ background: 'linear-gradient(90deg, transparent, var(--color-green), transparent)' }} />

          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i} className="flex flex-col items-center text-center px-4 mb-8 md:mb-0">
                {/* Icon circle */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center z-10 relative card-hover"
                    style={{
                      background: 'var(--color-surface2)',
                      border: '2px solid rgba(62,255,160,0.3)',
                      boxShadow: '0 0 30px rgba(62,255,160,0.1)',
                    }}>
                    <Icon size={28} style={{ color: 'var(--color-green)' }} />
                  </div>
                  {/* Step number */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black"
                    style={{ background: 'var(--color-green)', color: '#0a1a14' }}>
                    {i + 1}
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a href="#signup" className="btn-primary text-base px-8 py-4">
            Start Your Journey →
          </a>
        </div>
      </div>
    </section>
  )
}
