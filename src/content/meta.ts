export const siteConfig = {
  name: 'Abishek P S',
  title: 'Software Engineer',
  description: 'Staff Software Engineer building distributed systems, developer tools, and design systems. Open-source contributor and conference speaker.',
  email: 'hello@abishekps.dev',
  location: 'Hyderabad, India',
  availability: 'Open to opportunities',
  socials: [
    { label: 'GitHub', href: 'https://github.com', handle: '@abishekps' },
    { label: 'LinkedIn', href: 'https://linkedin.com', handle: '/in/abishekps' },
    { label: 'Twitter / X', href: 'https://x.com', handle: '@abishekps' },
  ],
  techStack: [
    'TypeScript', 'React', 'Next.js', 'Go', 'Rust', 'Python',
    'Node.js', 'PostgreSQL', 'Redis', 'Kubernetes', 'Docker',
    'AWS', 'Terraform', 'GraphQL', 'gRPC',
  ],
} as const;

export type SiteConfig = typeof siteConfig;
