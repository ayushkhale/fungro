import { ArrowRight } from 'lucide-react'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24"
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="section-label">What is Funngro?</span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              The platform built <br />
              <span className="gradient-text">by teens, for teens</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-5">
              Funngro connects India's 300 million youth with brands that need authentic, youthful engagement. Teens earn real money doing tasks they're already good at — posting, sharing, reviewing, surveying.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Unlike random gig platforms, Funngro is built mobile-first for students, with parental controls, verified brands, and a gamified experience that makes earning feel like leveling up.
            </p>
            <div className="mb-8 mt-2">
              <a href="https://play.google.com/store/apps/details?id=com.wishbanc.funngro" target="_blank" rel="noopener noreferrer">
                <img 
                  src={`${import.meta.env.BASE_URL}getinplay.png`}
                  alt="Download on Google Play and App Store" 
                  className="h-20 md:h-24 w-auto object-contain hover:scale-105 transition-transform cursor-pointer -ml-4"
                />
              </a>
            </div>
            <a href="#how-it-works" className="btn-primary">
              See How It Works <ArrowRight size={16} />
            </a>
          </div>

          {/* Right: visual */}
          <div className="relative">
            <img 
              src={`${import.meta.env.BASE_URL}heroimg.png`}
              alt="Funngro Hero Background" 
              className="w-full h-auto drop-shadow-2xl rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
