/* ── 3D-style campaign icons using SVG + green gradients ── */

export function IconSocialPost({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g-social" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3effa0" />
          <stop offset="1" stopColor="#0fa858" />
        </linearGradient>
      </defs>
      {/* Phone body */}
      <rect x="13" y="3" width="22" height="38" rx="4" fill="url(#g-social)" opacity="0.15" stroke="url(#g-social)" strokeWidth="2" />
      <rect x="16" y="8" width="16" height="10" rx="2" fill="url(#g-social)" opacity="0.5" />
      {/* Like + share icons */}
      <circle cx="19" cy="28" r="2.5" fill="#3effa0" />
      <circle cx="27" cy="28" r="2.5" fill="#3effa0" opacity="0.6" />
      <circle cx="35" cy="28" r="2.5" fill="#3effa0" opacity="0.3" />
      {/* Notch */}
      <rect x="20" y="5" width="8" height="2" rx="1" fill="#3effa0" opacity="0.4" />
      {/* Home bar */}
      <rect x="20" y="37" width="8" height="1.5" rx="1" fill="#3effa0" opacity="0.4" />
      {/* 3D shadow */}
      <rect x="15" y="6" width="22" height="38" rx="4" fill="#0a1a14" opacity="0.2" transform="translate(2,2)" />
    </svg>
  )
}

export function IconSurvey({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g-survey" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3effa0" />
          <stop offset="1" stopColor="#0fa858" />
        </linearGradient>
      </defs>
      {/* Clipboard */}
      <rect x="8" y="8" width="32" height="36" rx="3" fill="url(#g-survey)" opacity="0.12" stroke="url(#g-survey)" strokeWidth="2" />
      {/* Clip top */}
      <rect x="17" y="5" width="14" height="6" rx="3" fill="#3effa0" opacity="0.8" />
      {/* Bars */}
      <rect x="13" y="18" width="22" height="2.5" rx="1.25" fill="#3effa0" opacity="0.7" />
      <rect x="13" y="24" width="16" height="2.5" rx="1.25" fill="#3effa0" opacity="0.5" />
      <rect x="13" y="30" width="19" height="2.5" rx="1.25" fill="#3effa0" opacity="0.35" />
      {/* Check */}
      <circle cx="35" cy="36" r="6" fill="#3effa0" />
      <path d="M32 36l2 2 4-4" stroke="#0a1a14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconReferral({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g-ref" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3effa0" />
          <stop offset="1" stopColor="#0fa858" />
        </linearGradient>
      </defs>
      {/* Left person */}
      <circle cx="12" cy="14" r="6" fill="url(#g-ref)" opacity="0.7" />
      <path d="M4 34c0-6 3.5-10 8-10s8 4 8 10" fill="url(#g-ref)" opacity="0.4" />
      {/* Right person */}
      <circle cx="36" cy="14" r="6" fill="url(#g-ref)" opacity="0.9" />
      <path d="M28 34c0-6 3.5-10 8-10s8 4 8 10" fill="url(#g-ref)" opacity="0.6" />
      {/* Arrow connecting */}
      <path d="M20 16h8" stroke="#3effa0" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M25 13l3 3-3 3" stroke="#3effa0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconAppDownload({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g-app" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3effa0" />
          <stop offset="1" stopColor="#0fa858" />
        </linearGradient>
      </defs>
      {/* Phone */}
      <rect x="11" y="4" width="26" height="40" rx="5" fill="url(#g-app)" opacity="0.12" stroke="url(#g-app)" strokeWidth="2" />
      <rect x="19" y="7" width="10" height="2" rx="1" fill="#3effa0" opacity="0.5" />
      {/* Down arrow */}
      <path d="M24 16v14" stroke="#3effa0" strokeWidth="3" strokeLinecap="round" />
      <path d="M18 26l6 6 6-6" stroke="#3effa0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Base line */}
      <path d="M17 35h14" stroke="#3effa0" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

export function IconVideo({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g-video" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3effa0" />
          <stop offset="1" stopColor="#0fa858" />
        </linearGradient>
      </defs>
      {/* Screen */}
      <rect x="3" y="12" width="30" height="22" rx="4" fill="url(#g-video)" opacity="0.15" stroke="url(#g-video)" strokeWidth="2" />
      {/* Camera lens */}
      <circle cx="18" cy="23" r="6" fill="#3effa0" opacity="0.25" stroke="#3effa0" strokeWidth="1.5" />
      <circle cx="18" cy="23" r="3" fill="#3effa0" opacity="0.7" />
      {/* Camera bracket */}
      <path d="M33 18l9-5v18l-9-5V18z" fill="url(#g-video)" opacity="0.7" />
      {/* Rec dot */}
      <circle cx="38" cy="15" r="3" fill="#3effa0" />
    </svg>
  )
}

export function IconSampling({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g-sample" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3effa0" />
          <stop offset="1" stopColor="#0fa858" />
        </linearGradient>
      </defs>
      {/* Box */}
      <rect x="8" y="20" width="32" height="24" rx="3" fill="url(#g-sample)" opacity="0.15" stroke="url(#g-sample)" strokeWidth="2" />
      {/* Box lid */}
      <rect x="6" y="16" width="36" height="7" rx="2" fill="url(#g-sample)" opacity="0.4" stroke="url(#g-sample)" strokeWidth="1.5" />
      {/* Ribbon vertical */}
      <rect x="21" y="16" width="6" height="28" rx="1" fill="#3effa0" opacity="0.5" />
      {/* Ribbon horizontal */}
      <rect x="8" y="27" width="32" height="5" rx="1" fill="#3effa0" opacity="0.3" />
      {/* Bow */}
      <path d="M20 16c-4-4-8-3-7 1s5 3 7-1z" fill="#3effa0" opacity="0.8" />
      <path d="M28 16c4-4 8-3 7 1s-5 3-7-1z" fill="#3effa0" opacity="0.8" />
      <circle cx="24" cy="15" r="3" fill="#3effa0" />
    </svg>
  )
}

export function IconBrandAwareness({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g-brand" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3effa0" />
          <stop offset="1" stopColor="#0fa858" />
        </linearGradient>
      </defs>
      {/* Megaphone body */}
      <path d="M6 18h10l18-10v28L16 26H6V18z" fill="url(#g-brand)" opacity="0.2" stroke="url(#g-brand)" strokeWidth="2" strokeLinejoin="round" />
      {/* Handle */}
      <rect x="6" y="26" width="10" height="10" rx="2" fill="url(#g-brand)" opacity="0.5" />
      {/* Sound waves */}
      <path d="M37 14c3 2.5 4 6 4 10s-1 7.5-4 10" stroke="#3effa0" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M40 10c5 4 7 9 7 14s-2 10-7 14" stroke="#3effa0" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      {/* Star on bell */}
      <circle cx="22" cy="22" r="3" fill="#3effa0" opacity="0.6" />
    </svg>
  )
}

export function IconContent({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g-content" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3effa0" />
          <stop offset="1" stopColor="#0fa858" />
        </linearGradient>
      </defs>
      {/* Paper */}
      <rect x="8" y="6" width="28" height="36" rx="3" fill="url(#g-content)" opacity="0.12" stroke="url(#g-content)" strokeWidth="2" />
      {/* Lines */}
      <rect x="13" y="13" width="18" height="2.5" rx="1.25" fill="#3effa0" opacity="0.7" />
      <rect x="13" y="19" width="14" height="2.5" rx="1.25" fill="#3effa0" opacity="0.5" />
      <rect x="13" y="25" width="16" height="2.5" rx="1.25" fill="#3effa0" opacity="0.35" />
      {/* Pen */}
      <rect x="30" y="28" width="6" height="16" rx="2" fill="url(#g-content)" opacity="0.8" transform="rotate(-45 30 28)" />
      <path d="M38 40l-4 4 2-5 2 1z" fill="#3effa0" />
      {/* Pen tip */}
      <circle cx="42" cy="22" r="3" fill="#3effa0" opacity="0.9" />
    </svg>
  )
}
