export type Job = {
  slug: string
  title: string
  company: string
  companyInitial: string
  area: string
  remote: boolean
  employmentType: "Full-time" | "Contract" | "Internship"
  experience: string
  salaryRange: string
  tags: string[]
  postedAt: string
  description: string
  responsibilities: string[]
  requirements: string[]
}

export const jobs: Job[] = [
  {
    slug: "senior-backend-engineer-fintech-koramangala",
    title: "Senior Backend Engineer",
    company: "Rupeeflow",
    companyInitial: "R",
    area: "Koramangala",
    remote: false,
    employmentType: "Full-time",
    experience: "4-7 years",
    salaryRange: "₹28L – ₹40L",
    tags: ["Go", "Postgres", "AWS", "Fintech"],
    postedAt: "2026-07-04",
    description:
      "Rupeeflow is building payment infrastructure for small merchants across India. We're looking for a senior backend engineer to own our ledger and settlement systems.",
    responsibilities: [
      "Design and maintain core ledger and settlement services handling millions of transactions daily",
      "Partner with the compliance team on audit-ready financial data pipelines",
      "Mentor two mid-level engineers on the payments team",
    ],
    requirements: [
      "4+ years building production backend systems, ideally in fintech or payments",
      "Strong Go or equivalent statically-typed language experience",
      "Comfortable owning services end-to-end, from design through on-call",
    ],
  },
  {
    slug: "product-designer-d2c-indiranagar",
    title: "Product Designer",
    company: "Loop Living",
    companyInitial: "L",
    area: "Indiranagar",
    remote: false,
    employmentType: "Full-time",
    experience: "2-5 years",
    salaryRange: "₹18L – ₹26L",
    tags: ["Figma", "D2C", "Design Systems"],
    postedAt: "2026-07-01",
    description:
      "Loop Living makes modular furniture for rented apartments. We're a 30-person team looking for a product designer to own our shopping and post-purchase experience.",
    responsibilities: [
      "Own end-to-end design for the shopping funnel and post-purchase tracking experience",
      "Maintain and extend our design system across web and app",
      "Run user interviews with customers across our top 5 cities",
    ],
    requirements: [
      "2+ years designing consumer products, D2C or marketplace experience a plus",
      "Strong portfolio showing end-to-end product thinking, not just visuals",
      "Comfortable working closely with engineering on implementation details",
    ],
  },
  {
    slug: "devops-engineer-remote-bangalore-hybrid",
    title: "DevOps Engineer",
    company: "Stackframe",
    companyInitial: "S",
    area: "Hybrid - HSR Layout",
    remote: true,
    employmentType: "Full-time",
    experience: "3-6 years",
    salaryRange: "₹22L – ₹32L",
    tags: ["Kubernetes", "Terraform", "GCP"],
    postedAt: "2026-06-29",
    description:
      "Stackframe helps mid-size companies migrate off legacy infrastructure onto modern cloud stacks. Fully remote-friendly with a Bangalore office for anyone who wants to come in.",
    responsibilities: [
      "Own CI/CD pipelines and infrastructure-as-code across client environments",
      "Build internal tooling to speed up client onboarding",
      "Be part of an on-call rotation for critical client infrastructure",
    ],
    requirements: [
      "3+ years with Kubernetes and Terraform in production",
      "Experience with at least one major cloud provider (GCP preferred)",
      "Comfortable communicating directly with client engineering teams",
    ],
  },
  {
    slug: "growth-marketing-manager-startup-hsr",
    title: "Growth Marketing Manager",
    company: "Chai Point Labs",
    companyInitial: "C",
    area: "HSR Layout",
    remote: false,
    employmentType: "Full-time",
    experience: "3-5 years",
    salaryRange: "₹15L – ₹22L",
    tags: ["Performance Marketing", "SEO", "Analytics"],
    postedAt: "2026-06-27",
    description:
      "We're a fast-growing subscription beverage brand looking for a growth marketing manager to own paid acquisition and lifecycle marketing.",
    responsibilities: [
      "Own paid acquisition budget across Meta, Google and emerging channels",
      "Build and iterate on lifecycle email/SMS flows to improve retention",
      "Report directly to the founder on weekly growth metrics",
    ],
    requirements: [
      "3+ years in performance marketing at a D2C or subscription business",
      "Comfortable with SQL for pulling your own cohort data",
      "Bias toward fast experimentation over long planning cycles",
    ],
  },
  {
    slug: "frontend-engineer-internship-koramangala",
    title: "Frontend Engineering Intern",
    company: "Ledger Labs",
    companyInitial: "L",
    area: "Koramangala",
    remote: false,
    employmentType: "Internship",
    experience: "0-1 years",
    salaryRange: "₹35,000/month stipend",
    tags: ["React", "TypeScript", "Internship"],
    postedAt: "2026-07-03",
    description:
      "A 6-month internship with a strong chance of full-time conversion. You'll work directly with two senior engineers on our core dashboard product.",
    responsibilities: [
      "Ship real features in our React + TypeScript dashboard, reviewed by senior engineers",
      "Pair on bug fixes and small feature work in your first month",
      "Present your work in our weekly demo session",
    ],
    requirements: [
      "Solid fundamentals in JavaScript/TypeScript and React",
      "A GitHub profile or portfolio we can look at",
      "Available to work from our Koramangala office at least 4 days a week",
    ],
  },
  {
    slug: "data-analyst-logistics-whitefield",
    title: "Data Analyst",
    company: "RouteWise",
    companyInitial: "R",
    area: "Whitefield",
    remote: false,
    employmentType: "Full-time",
    experience: "1-3 years",
    salaryRange: "₹10L – ₹15L",
    tags: ["SQL", "Python", "Logistics"],
    postedAt: "2026-06-24",
    description:
      "RouteWise optimizes last-mile delivery routes for e-commerce companies. Looking for a data analyst to join our 4-person analytics team.",
    responsibilities: [
      "Build dashboards tracking delivery performance across 12 cities",
      "Partner with the ops team to identify route inefficiencies",
      "Support ad-hoc analysis requests from leadership",
    ],
    requirements: [
      "1+ years working with SQL and a scripting language (Python preferred)",
      "Comfortable presenting findings to non-technical stakeholders",
      "Logistics or supply chain background a plus, not required",
    ],
  },
]

export function getJobBySlug(slug: string) {
  return jobs.find((j) => j.slug === slug)
}
