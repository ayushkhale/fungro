import { Link } from 'react-router-dom'
import { Globe, Share2, Mail, Link2, Smartphone, Gamepad2, Heart } from 'lucide-react'
import FunngrovLogo from './FunngrovLogo'

export default function Footer() {
  return (
    <footer style={{ background: '#060f0a', borderTop: '1px solid var(--color-border)' }} className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <FunngrovLogo className="w-auto h-7 text-white" />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              India's #1 earning & learning platform for teens. Real projects, real money, real skills.
            </p>
            <div className="flex gap-3">
              {[Globe, Share2, Mail, Link2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--color-green)' }}>Platform</p>
            <ul className="space-y-3">
              {['Earn Money', 'Learn Skills', 'Browse Projects', 'For Companies', 'Leaderboard'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--color-green)' }}>Company</p>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Press', 'Blog', 'Contact'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--color-green)' }}>Legal</p>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Refund Policy'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
            {/* App download */}
            <div className="mt-6 flex flex-col gap-2">
              <a href="https://apps.apple.com/in/app/funngro-gigs-to-earn-online/id1636585642" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 transition-colors rounded-xl px-4 py-3">
                <Smartphone size={20} className="text-white" />
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 leading-none mb-1">Download on</p>
                  <p className="text-sm font-bold text-white leading-none">App Store</p>
                </div>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.wishbanc.funngro" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 transition-colors rounded-xl px-4 py-3">
                <Gamepad2 size={20} className="text-white" />
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 leading-none mb-1">Get it on</p>
                  <p className="text-sm font-bold text-white leading-none">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© 2026 Funngro Technologies Pvt. Ltd. All rights reserved.</p>
          <p className="text-xs text-gray-500 flex items-center justify-center md:justify-end gap-1">
            Made with <Heart size={12} className="text-green" fill="currentColor" /> for India's next generation
          </p>
        </div>
      </div>
    </footer>
  )
}
