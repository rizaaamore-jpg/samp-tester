export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with cart, checkout, and payment integration.",
    tags: ["React", "Next.js", "TypeScript", "Stripe", "Tailwind"],
    image: "/images/projects/ecommerce.jpg",
    liveUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/username/ecommerce"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team features.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    image: "/images/projects/taskapp.jpg",
    liveUrl: "https://taskapp.demo",
    githubUrl: "https://github.com/username/taskapp"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Modern portfolio website with dark mode, animations, and contact form.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "EmailJS"],
    image: "/images/projects/portfolio.jpg",
    liveUrl: "https://portfolio-demo.com",
    githubUrl: "https://github.com/username/portfolio"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with location detection and forecast charts.",
    tags: ["React", "Chart.js", "OpenWeather API", "Geolocation"],
    image: "/images/projects/weather.jpg",
    liveUrl: "https://weather-demo.com",
    githubUrl: "https://github.com/username/weather-app"
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "Headless CMS blog platform with markdown support and SEO optimization.",
    tags: ["Next.js", "Contentful", "GraphQL", "SEO", "SSG"],
    image: "/images/projects/blog.jpg",
    liveUrl: "https://blog-demo.com",
    githubUrl: "https://github.com/username/blog-platform"
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "Mobile-first fitness tracking application with workout plans and progress charts.",
    tags: ["React Native", "Firebase", "Chart.js", "Health API"],
    image: "/images/projects/fitness.jpg",
    liveUrl: "https://fitness-demo.com",
    githubUrl: "https://github.com/username/fitness-tracker"
  }
]
