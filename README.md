# Funngro Marketing Website

A 2-page React + Vite + Tailwind CSS marketing website inspired by Funngro's youth-first brand identity.

## Project Structure

```
fungro/
├── index.html                    # HTML entry + Google Fonts
├── vite.config.ts                # Vite + Tailwind CSS plugin
├── src/
│   ├── index.css                 # Global styles, CSS variables, animations
│   ├── main.tsx                  # React entry point
│   ├── App.tsx                   # Router (react-router-dom)
│   ├── pages/
│   │   ├── Home.tsx              # Page 1: Landing / Home
│   │   └── Company.tsx           # Page 2: For Companies
│   └── components/
│       ├── Navbar.tsx            # Sticky nav with glass scroll effect
│       ├── Footer.tsx            # Multi-column footer
│       ├── Hero.tsx              # Hero with floating card & stats ticker
│       ├── AboutSection.tsx      # What is Funngro + skill bars
│       ├── Features.tsx          # 6-card features grid
│       ├── HowItWorks.tsx        # 4-step process
│       ├── Testimonials.tsx      # Stats + 3 testimonial cards
│       └── SignupCTA.tsx         # Email capture CTA
└── README.md
```

## Pages

| Route      | Page                   | Description |
|------------|------------------------|-------------|
| `/`        | Home.tsx               | Hero, About, Features, How It Works, Testimonials, Signup |
| `/company` | Company.tsx            | Brand hero, Campaign types, Benefits, Steps, Contact form |

## Tech Stack

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS v4 via @tailwindcss/vite
- react-router-dom (routing)
- lucide-react (icons)

## How to Run

```bash
npm install
npm run dev
```

Open http://localhost:5173 for Home  
Open http://localhost:5173/company for Company page
