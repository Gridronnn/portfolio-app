export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    id: 'developer-profile',
    company: 'Independent Software Engineering',
    role: 'AI-Native Software Engineer & Full-Stack Developer',
    location: 'Coimbatore, Tamil Nadu, India',
    startDate: '2024',
    endDate: 'Present',
    bullets: [
      'Architected and shipped multiple end-to-end web applications including Aura Finance Pro, The Day You Entered the World, and FileFlow AI.',
      'Implemented enterprise security best practices: OAuth 2.0 PKCE, PostgreSQL Row-Level Security (RLS), CSP with frame-ancestors clickjacking prevention, and HSTS.',
      'Designed responsive, art-directed user interfaces combining Framer Motion, Tailwind CSS, HTML5 Canvas, and modern web APIs.',
      'Practicing algorithmic problem solving, core computer science concepts, and object-oriented architectures daily.',
    ],
  },
  {
    id: 'dsa-coursework',
    company: 'Computer Science & Engineering Fundamentals',
    role: 'Core Systems & Algorithms Focus',
    location: 'Nehru Institute of Engineering and Technology',
    startDate: '2025',
    endDate: '2029',
    bullets: [
      'Pursuing B.E. in Computer Science & Engineering under Anna University.',
      'Rigorous coursework covering Data Structures & Algorithms, Object-Oriented Programming, Computer Architecture, Digital Logic, and Embedded Systems.',
      'Developing strong core competencies in Java, Python, and memory/computation complexity analysis.',
    ],
  },
];
