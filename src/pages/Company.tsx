import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  Target, Users, BarChart2, Megaphone, ShieldCheck, Clock,
  ArrowRight, CheckCircle2, Building2, Rocket, Globe
} from 'lucide-react'
import {
  IconSocialPost, IconSurvey, IconReferral, IconAppDownload,
  IconVideo, IconSampling, IconBrandAwareness, IconContent
} from '../components/CampaignIcons'

/* ─── Data ─────────────────────────────────────────────── */

const benefits = [
  {
    icon: Target,
    title: 'Precision Targeting',
    desc: 'Reach teens filtered by age, city, interests, and income tier — not just random demographics.',
  },
  {
    icon: Users,
    title: 'Massive Reach',
    desc: 'Access 70 lakh+ verified teen users across 500+ cities in India. Pure organic reach.',
  },
  {
    icon: BarChart2,
    title: 'Real-Time Analytics',
    desc: 'Track task completions, engagement rates, UGC quality, and ROI from your campaign dashboard.',
  },
  {
    icon: Megaphone,
    title: 'Authentic UGC',
    desc: 'Get genuine posts, reviews, and referrals — not bot-generated content. Real teens, real voices.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Verified',
    desc: 'Every submission is reviewed before payout. You only pay for quality, approved work.',
  },
  {
    icon: Clock,
    title: 'Fast Campaign Go-Live',
    desc: 'Launch a campaign in 48 hours. From brief to live results — no agency lag.',
  },
]

const steps = [
  {
    step: '01',
    title: 'Post Your Project Brief',
    desc: 'Define your campaign goal, target audience, task type (survey, referral, content, social), and budget. Our team reviews and approves it within 24 hours.',
    icon: Building2,
  },
  {
    step: '02',
    title: 'Teens Discover & Apply',
    desc: 'Matched teens see your project in their feed. High-GroRank earners get priority access, ensuring quality contributors.',
    icon: Users,
  },
  {
    step: '03',
    title: 'Submissions Roll In',
    desc: 'Teens complete the task and submit proof. Our AI + human moderation layer filters quality submissions automatically.',
    icon: CheckCircle2,
  },
  {
    step: '04',
    title: 'Approve & Pay',
    desc: 'Review approved submissions on your dashboard. Teens get paid instantly. You get detailed campaign analytics.',
    icon: BarChart2,
  },
]

const campaignTypes = [
  { Icon: IconSocialPost,     label: 'Social Media Posts' },
  { Icon: IconSurvey,         label: 'Surveys & Research' },
  { Icon: IconReferral,       label: 'Referral Campaigns' },
  { Icon: IconAppDownload,    label: 'App Downloads' },
  { Icon: IconVideo,          label: 'Video Reviews' },
  { Icon: IconSampling,       label: 'Product Sampling' },
  { Icon: IconBrandAwareness, label: 'Brand Awareness' },
  { Icon: IconContent,        label: 'Content Creation' },
]

/* ─── Component ─────────────────────────────────────────── */

export default function Company() {
  const [form, setForm] = useState({ name: '', company: '', email: '', type: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <main>

        {/* ─── HERO ─── */}
        <section
          className="relative min-h-[85vh] flex items-center overflow-hidden pt-16"
          style={{
            background: 'radial-gradient(ellipse at 30% 60%, rgba(62,255,160,0.08) 0%, transparent 60%), var(--color-bg)',
          }}
        >
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(62,255,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(62,255,160,1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
          <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
            style={{ background: 'var(--color-green)' }} />

          <div className="relative max-w-7xl mx-auto px-6 py-20 w-full grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-semibold"
                style={{ background: 'rgba(62,255,160,0.1)', color: 'var(--color-green)', border: '1px solid rgba(62,255,160,0.2)' }}>
                <Rocket size={13} />
                For Brands & Companies
              </div>

              <h1 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-white mb-6 italic font-hero">
                The smartest way to <br /><span className="gradient-text">engage Gen-Z</span>
              </h1>

              <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-md">
                Run authentic teen-powered campaigns at scale. Surveys, UGC, referrals, app downloads — all delivered by 70 lakh+ verified young Indians.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <a href="#company-signup" className="btn-primary text-base px-7 py-3.5">
                  Post a Project <ArrowRight size={18} />
                </a>
                <a href="#how-companies" className="btn-outline text-base px-7 py-3.5">
                  See How It Works
                </a>
              </div>

              <div className="flex flex-wrap gap-5">
                {[['70L+', 'Verified Teens'], ['₹14Cr+', 'Tasks Completed'], ['500+', 'Brands Active']].map(([val, label]) => (
                  <div key={label}>
                    <p className="text-2xl font-black" style={{ color: 'var(--color-green)' }}>{val}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Gen-Z illustration */}
            <div className="flex items-center justify-center md:justify-end">
              <div className="relative animate-float">
                <img
                  src={`${import.meta.env.BASE_URL}genz3dvector`}
                  alt="Gen-Z teens using Funngro"
                  className="w-full max-w-xl scale-110 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── CAMPAIGN TYPES ─── */}
        <section className="py-20" style={{ background: 'var(--color-surface)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left side text and 3D Number */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <img 
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/green-st-patricks-number-8-3d-icon-png-download-14402645.png" 
                  alt="8" 
                  className="w-48 md:w-64 drop-shadow-2xl animate-float -ml-4" 
                />
                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mt-[-10px]">
                  types of <br />
                  <span className="gradient-text">campaigns</span>
                </h2>
                <p className="mt-4 text-gray-400 text-lg">One powerful platform to run them all.</p>
              </div>

              {/* Right side Vertical Marquee Cards */}
              <div className="relative h-[600px] overflow-hidden"
                   style={{
                     maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
                     WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
                   }}>
                <div 
                  className="grid grid-cols-2 gap-4 animate-marquee-vertical magic-cards-container pt-4"
                  onMouseMove={(e: any) => {
                    document.querySelectorAll(".magic-card").forEach((card: any) => {
                      const rect = card.getBoundingClientRect(),
                            x = e.clientX - rect.left,
                            y = e.clientY - rect.top;
                      card.style.setProperty("--mouse-x", `${x}px`);
                      card.style.setProperty("--mouse-y", `${y}px`);
                    });
                  }}
                >
                  {[...campaignTypes, ...campaignTypes].map((c, i) => {
                    const { Icon } = c
                    return (
                      <div key={i} className="magic-card h-40">
                        <div className="magic-card-content group p-5 text-left cursor-pointer overflow-hidden relative items-start justify-start">
                          <p className="text-xl md:text-2xl font-hero text-white mb-1 relative z-10 leading-tight">
                            {c.label}
                          </p>
                          
                          <div className="absolute -bottom-4 -right-4 opacity-30 transition-transform duration-500 group-hover:scale-125 group-hover:-translate-x-2 group-hover:-translate-y-2 pointer-events-none">
                            <Icon size={96} />
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── BENEFITS ─── */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="section-label">Why Funngro for Brands</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Marketing that <span className="gradient-text">actually works</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">No bots. No fake impressions. Just motivated teens doing real work for your brand.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => {
                const Icon = b.icon
                return (
                  <div key={i} className="glass rounded-2xl p-6 card-hover group"
                    style={{ border: '1px solid var(--color-border)' }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: 'rgba(62,255,160,0.1)' }}>
                      <Icon size={22} style={{ color: 'var(--color-green)' }} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section id="how-companies" className="py-24" style={{ background: 'var(--color-surface)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="section-label">How It Works</span>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                From brief to <span className="gradient-text">results in 48h</span>
              </h2>
            </div>

            <div className="space-y-6">
              {steps.map((s, i) => {
                const Icon = s.icon
                const isEven = i % 2 === 0
                return (
                  <div
                    key={i}
                    className={`glass rounded-2xl p-8 flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} items-center gap-8`}
                    style={{ border: '1px solid var(--color-border)' }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-2xl flex items-center justify-center relative"
                        style={{ background: 'rgba(62,255,160,0.1)', border: '1px solid rgba(62,255,160,0.2)' }}>
                        <Icon size={32} style={{ color: 'var(--color-green)' }} />
                        <span className="absolute -top-3 -right-3 text-xs font-black w-7 h-7 rounded-full flex items-center justify-center"
                          style={{ background: 'var(--color-green)', color: '#0a1a14' }}>
                          {s.step}
                        </span>
                      </div>
                    </div>
                    <div className={isEven ? '' : 'md:text-right'}>
                      <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                      <p className="text-gray-400 leading-relaxed max-w-lg">{s.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── SIGNUP / CTA FORM ─── */}
        <section
          id="company-signup"
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, rgba(62,255,160,0.07) 0%, transparent 70%)' }} />

          <div className="relative max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left */}
              <div>
                <span className="section-label">Get Started</span>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                  Launch your <br /><span className="gradient-text">first campaign</span>
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Fill out the form and our team will reach out within 24 hours with a custom campaign plan tailored to your goals.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: <Globe size={18} />, text: 'Reach teens across 500+ Indian cities' },
                    { icon: <ShieldCheck size={18} />, text: 'Only pay for verified, quality submissions' },
                    { icon: <BarChart2 size={18} />, text: 'Full analytics dashboard included' },
                    { icon: <Clock size={18} />, text: 'Go live in as little as 48 hours' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                      <div style={{ color: 'var(--color-green)' }}>{item.icon}</div>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Form */}
              <div className="glass rounded-2xl p-8" style={{ border: '1px solid var(--color-border)' }}>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-lg font-bold text-white mb-2">Tell us about your project</h3>

                    {[
                      { name: 'name', placeholder: 'Your Full Name', type: 'text' },
                      { name: 'company', placeholder: 'Company / Brand Name', type: 'text' },
                      { name: 'email', placeholder: 'Work Email Address', type: 'email' },
                    ].map(f => (
                      <input
                        key={f.name}
                        type={f.type}
                        name={f.name}
                        placeholder={f.placeholder}
                        value={form[f.name as keyof typeof form]}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none"
                        style={{
                          background: 'var(--color-surface2)',
                          border: '1px solid var(--color-border)',
                        }}
                      />
                    ))}

                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{
                        background: 'var(--color-surface2)',
                        border: '1px solid var(--color-border)',
                        color: form.type ? 'white' : '#6b8f7b',
                      }}
                    >
                      <option value="" disabled>Campaign Type</option>
                      {campaignTypes.map(c => (
                        <option key={c.label} value={c.label}>{c.label}</option>
                      ))}
                    </select>

                    <textarea
                      name="message"
                      placeholder="Tell us your campaign goals & budget..."
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none resize-none"
                      style={{
                        background: 'var(--color-surface2)',
                        border: '1px solid var(--color-border)',
                      }}
                    />

                    <button type="submit" className="btn-primary w-full justify-center text-base py-3.5">
                      Submit & Get in Touch <ArrowRight size={18} />
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      No spam. Our team responds within 24 business hours.
                    </p>
                  </form>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                      style={{ background: 'rgba(62,255,160,0.15)' }}>
                      <CheckCircle2 size={32} style={{ color: 'var(--color-green)' }} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Request received!</h3>
                    <p className="text-gray-400 text-sm">Our brand partnerships team will reach out to <strong className="text-white">{form.email}</strong> within 24 hours.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
