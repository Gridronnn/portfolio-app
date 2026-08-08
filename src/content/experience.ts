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
    id: 'acme-staff',
    company: 'Acme Corp',
    role: 'Staff Software Engineer',
    location: 'San Francisco, CA',
    startDate: '2023',
    endDate: 'Present',
    bullets: [
      'Architected event-driven microservices platform processing 2B+ events/day across 40 services',
      'Led migration from monolith to distributed architecture, reducing deploy times by 85%',
      'Mentored 8 engineers across 3 teams; established technical design review process',
      'Drove adoption of OpenTelemetry observability stack, cutting MTTR from 45min to 8min',
    ],
  },
  {
    id: 'nexus-senior',
    company: 'Nexus Technologies',
    role: 'Senior Software Engineer',
    location: 'New York, NY',
    startDate: '2021',
    endDate: '2023',
    bullets: [
      'Built real-time collaboration engine using CRDTs, serving 200K concurrent users',
      'Designed and shipped React component library adopted by 6 product teams',
      'Optimized GraphQL data layer, reducing API response times by 60%',
      'Led hiring efforts, conducting 100+ technical interviews',
    ],
  },
  {
    id: 'vertex-mid',
    company: 'Vertex Labs',
    role: 'Software Engineer',
    location: 'Austin, TX',
    startDate: '2019',
    endDate: '2021',
    bullets: [
      'Developed ML pipeline infrastructure processing 500GB+ data daily using Apache Beam',
      'Built internal developer portal with Next.js, reducing onboarding time by 40%',
      'Contributed to open-source Kubernetes operators for stateful workloads',
    ],
  },
  {
    id: 'startup-junior',
    company: 'Stealth Startup',
    role: 'Software Engineer',
    location: 'Remote',
    startDate: '2017',
    endDate: '2019',
    bullets: [
      'Employee #4. Built entire backend from scratch: auth, billing, API gateway',
      'Shipped mobile app (React Native) from prototype to 50K MAU in 6 months',
      'Implemented CI/CD pipeline and infrastructure-as-code with Terraform',
    ],
  },
];
