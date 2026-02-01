export interface Experience {
  id: number
  title: string
  company: string
  period: string
  description: string[]
  skills: string[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: [
      "Lead frontend development for multiple client projects",
      "Implemented responsive designs and optimized performance",
      "Mentored junior developers and conducted code reviews"
    ],
    skills: ["React", "TypeScript", "Next.js", "Tailwind", "GraphQL"]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description: [
      "Developed full-stack web applications for various clients",
      "Collaborated with designers to implement UI/UX designs",
      "Integrated third-party APIs and payment gateways"
    ],
    skills: ["Node.js", "Express", "MongoDB", "React", "AWS"]
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Startup XYZ",
    period: "2019 - 2020",
    description: [
      "Built user interfaces for web applications",
      "Worked with design team to ensure pixel-perfect implementation",
      "Optimized applications for maximum speed and scalability"
    ],
    skills: ["JavaScript", "React", "CSS3", "Git", "REST APIs"]
  }
]
