export interface Project {
  id: string;
  index: number;
  title: string;
  description: string;
  year: string;
  role: string;
  stack: string[];
  metrics?: string;
  github?: string;
  live?: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 'taskflow',
    index: 1,
    title: 'TaskFlow',
    description: 'Distributed task queue built in Go with Redis-backed scheduling, dead-letter recovery, and horizontal scaling. Handles 50K+ jobs/min in production.',
    year: '2024',
    role: 'Creator & Maintainer',
    stack: ['Go', 'Redis', 'gRPC', 'Docker', 'Prometheus'],
    metrics: '2.4K GitHub stars · 180 forks',
    github: 'https://github.com',
    image: '/images/projects/taskflow.jpg',
  },
  {
    id: 'radix-ui-system',
    index: 2,
    title: 'Radix Design System',
    description: 'Comprehensive React component library with 40+ primitives, built on Radix UI. Full a11y compliance, dark mode, and CSS-in-JS theming engine.',
    year: '2024',
    role: 'Lead Engineer',
    stack: ['React', 'TypeScript', 'Stitches', 'Radix', 'Storybook'],
    metrics: '1.8K GitHub stars · Used by 12 teams',
    github: 'https://github.com',
    live: 'https://example.com',
    image: '/images/projects/radix.jpg',
  },
  {
    id: 'neural-search',
    index: 3,
    title: 'Neural Search Engine',
    description: 'Semantic search platform using transformer embeddings and HNSW indexing. Sub-20ms p99 latency across 10M+ documents.',
    year: '2023',
    role: 'Tech Lead',
    stack: ['Python', 'FastAPI', 'PyTorch', 'FAISS', 'Kubernetes'],
    metrics: 'Serving 2M queries/day',
    github: 'https://github.com',
    image: '/images/projects/neural.jpg',
  },
  {
    id: 'infra-cli',
    index: 4,
    title: 'Infra CLI',
    description: 'Developer-experience CLI for cloud infrastructure provisioning. Terraform wrapper with opinionated defaults, drift detection, and cost estimation.',
    year: '2023',
    role: 'Creator',
    stack: ['Rust', 'Terraform', 'AWS', 'GitHub Actions'],
    metrics: '900+ GitHub stars',
    github: 'https://github.com',
    image: '/images/projects/infra.jpg',
  },
  {
    id: 'realtime-collab',
    index: 5,
    title: 'Realtime Collab Editor',
    description: 'Multiplayer code editor with CRDT-based conflict resolution, presence awareness, and WebRTC voice chat. Used internally by 200+ engineers.',
    year: '2022',
    role: 'Co-creator',
    stack: ['TypeScript', 'Yjs', 'WebRTC', 'Node.js', 'PostgreSQL'],
    live: 'https://example.com',
    image: '/images/projects/collab.jpg',
  },
];
