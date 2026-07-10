export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  category: string
  role: string
  company?: string
  year: string
  techStack: string[]
  highlights: string[]
  liveUrl?: string
  githubUrl?: string
  image?: string
  accent: "teal" | "amber" | "violet"
  featured?: boolean
  status: "live" | "wip" | "archived"
}

export const projects: Project[] = [
  {
    id: "wakasa",
    name: "WAKASA WMS",
    tagline: "Automotive Warehouse Management ERP",
    description:
      "Led full-stack development of an end-to-end ERP Warehouse Management System for multi-warehouse automotive operations — covering inbound, outbound, stock opname, and reporting modules.",
    category: "Enterprise ERP",
    role: "Lead Full-Stack Developer",
    company: "PT Bee Digital",
    year: "2026",
    techStack: ["Laravel", "Vue.js", "Ant Design", "MySQL", "Docker"],
    highlights: [
      "Architected backend with Laravel RESTful APIs, queue jobs, and RBAC",
      "Designed inventory state machine for multi-warehouse operations",
      "Built inbound, outbound, stock opname, and reporting modules end-to-end",
      "Delivered as sole lead full-stack developer",
      "Deployed to production at wms.aisya.id serving live automotive ops",
    ],
    liveUrl: "https://wms.aisya.id",
    image: "/wakasa.svg",
    accent: "teal",
    featured: true,
    status: "live",
  },
  {
    id: "ellospeak",
    name: "ElloSpeak",
    tagline: "Language Learning Platform",
    description:
      "Responsive language learning interface with interactive lessons, progress tracking, and real-time feedback — built as a modern SSR SaaS with TanStack Start.",
    category: "EdTech SaaS",
    role: "Full-Stack Developer",
    year: "2025",
    techStack: ["TanStack Start", "React.js", "Tailwind CSS", "PostgreSQL", "Docker"],
    highlights: [
      "Interactive lesson interface with real-time learner feedback",
      "Progress tracking with per-user analytics",
      "SSR architecture for SEO and fast time-to-content",
      "Containerized deployment via Docker",
      "Live at ellospeak.web.id",
    ],
    liveUrl: "https://ellospeak.web.id",
    image: "/ellospeak.svg",
    accent: "amber",
    status: "live",
  },
  {
    id: "bibib",
    name: "BIBIB POS",
    tagline: "Offline-First Point of Sale",
    description:
      "Full POS workflow: product catalog, transactions, payments, and stock management with offline-first sync. Role-based access, transaction logs, and exportable sales summaries.",
    category: "Retail SaaS",
    role: "Full-Stack Developer",
    year: "2025",
    techStack: ["TanStack Start", "React.js", "Tailwind CSS", "PostgreSQL", "Docker"],
    highlights: [
      "Offline-first sync engine for uninterrupted retail operations",
      "Full transaction pipeline: catalog → cart → payment → receipt",
      "Role-based access with granular permission control",
      "Exportable sales summaries and stock reports",
      "Live at bibib.web.id",
    ],
    liveUrl: "https://bibib.web.id",
    image: "/bibib.svg",
    accent: "violet",
    status: "live",
  },
]
