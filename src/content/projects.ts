export interface Project {
  id: string;
  index: number;
  title: string;
  tagline: string;
  description: string;
  year: string;
  role: string;
  stack: string[];
  metrics?: string;
  github?: string;
  live?: string;
  image: string;
  secondaryImage?: string;
  bullets?: string[];
}

export const projects: Project[] = [
  {
    id: 'aura-finance-pro',
    index: 1,
    title: 'Aura Finance Pro',
    tagline: 'Executive Wealth & Expense Intelligence Platform',
    description:
      'Architected and deployed a comprehensive financial intelligence platform with automated budget pacing, wealth analytics, OCR receipt scanning, cash-flow forecasting, multi-currency support, and an AI assistant. Hardened with OAuth 2.0 PKCE, PostgreSQL RLS data isolation, CSP, frame-ancestors clickjacking prevention, and client-side PDF/CSV reporting.',
    year: '2026',
    role: 'Lead Architect & Full-Stack Developer',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Vercel', 'OAuth 2.0 PKCE', 'RLS'],
    metrics: 'Production Deployed · OAuth 2.0 + RLS Hardened',
    github: 'https://github.com/Gridronnn/expense-tracker-pro',
    live: 'https://expense-tracker-pro-sigma-sage.vercel.app',
    image: '/images/projects/aura_dashboard.png',
    secondaryImage: '/images/projects/aura_ledger.png',
    bullets: [
      'Engineered secure authentication with Supabase Auth using OAuth 2.0 PKCE and PostgreSQL Row-Level Security (RLS) with auth.uid()-based data isolation.',
      'Implemented security hardening with Content Security Policy (CSP), frame-ancestors protection, HSTS, and sanitized input handling.',
      'Built financial tools including subscription tracking, savings-goal milestones, OCR receipt scanning, cash-flow forecasting, and an AI financial assistant.',
      'Added responsive Framer Motion interactions, command-palette navigation, and client-side PDF/CSV financial reporting with Vercel deployment.',
    ],
  },
  {
    id: 'the-day-you-entered-the-world',
    index: 2,
    title: 'The Day You Entered the World',
    tagline: 'Interactive Historical Web Experience & Keepsake Generator',
    description:
      "Built and deployed an immersive web experience that reconstructs the world around a user's birth date. Generates personalized sections covering historical headlines, weather, costs, culture, astronomy, and then-vs-now comparisons with generative Web Audio and high-DPI keepsake rendering.",
    year: '2026',
    role: 'Creator & Frontend Engineer',
    stack: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Web Audio API', 'HTML5 Canvas'],
    metrics: 'Interactive Web Experience · Generative Audio',
    github: 'https://github.com/Gridronnn/the-day-you-entered-the-world',
    live: 'https://the-day-you-entered-the-world.vercel.app/',
    image: '/images/projects/the_day_landing.png',
    secondaryImage: '/images/projects/the_day_arrival.png',
    bullets: [
      "Built and deployed an interactive web experience reconstructing the world around a user's birth date.",
      'Created personalized sections covering historical headlines, weather, costs, culture, astronomy, and then-vs-now comparisons.',
      'Implemented generative audio, animated time-travel transitions, currency conversion, and a high-DPI shareable keepsake generator.',
    ],
  },
  {
    id: 'fileflow-ai',
    index: 3,
    title: 'FileFlow AI',
    tagline: 'AI-Powered Intelligent File Organization & Workflows',
    description:
      'Developed an AI-focused file management web application prototype exploring intelligent file categorization, automated metadata extraction, and AI-assisted organization workflows.',
    year: '2026',
    role: 'AI & Full-Stack Developer',
    stack: ['Python', 'React', 'Next.js', 'AI Agents', 'REST API'],
    metrics: 'AI-Assisted Workflow Prototype',
    github: 'https://github.com/Gridronnn',
    image: '/images/projects/fileflow_preview.svg',
    bullets: [
      'Developed and deployed an AI-focused file management web application prototype exploring intelligent file organization and AI-assisted workflows.',
      'Engineered automated categorization pipelines and natural language file retrieval.',
    ],
  },
];
