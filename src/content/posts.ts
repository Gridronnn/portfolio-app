export interface Post {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  slug: string;
}

export const posts: Post[] = [
  {
    id: 'distributed-locks',
    title: 'Distributed Locks Are Harder Than You Think',
    date: '2024-11-15',
    readTime: '12 min',
    excerpt: 'A deep dive into the pitfalls of distributed locking with Redis, Zookeeper, and etcd. Why Redlock is probably not what you want.',
    slug: 'distributed-locks',
  },
  {
    id: 'react-compiler',
    title: 'React Compiler: What It Means for Your Codebase',
    date: '2024-09-02',
    readTime: '8 min',
    excerpt: 'Breaking down the React Compiler, its optimization model, and what patterns you should adopt (or drop) today.',
    slug: 'react-compiler',
  },
  {
    id: 'crdt-deep-dive',
    title: 'CRDTs in Production: Lessons from Building a Collab Editor',
    date: '2024-06-18',
    readTime: '15 min',
    excerpt: 'What we learned building a real-time collaborative editor with Yjs, and why eventual consistency is trickier than the papers suggest.',
    slug: 'crdt-deep-dive',
  },
  {
    id: 'go-concurrency',
    title: 'Go Concurrency Patterns That Actually Scale',
    date: '2024-03-22',
    readTime: '10 min',
    excerpt: 'Beyond goroutines and channels — practical patterns for building high-throughput Go services without shooting yourself in the foot.',
    slug: 'go-concurrency',
  },
  {
    id: 'platform-engineering',
    title: 'Platform Engineering Is Not Just DevOps Renamed',
    date: '2023-12-05',
    readTime: '7 min',
    excerpt: 'Why platform engineering deserves its own discipline, and how to build an internal developer platform that engineers actually want to use.',
    slug: 'platform-engineering',
  },
];
