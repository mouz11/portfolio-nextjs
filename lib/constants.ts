export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME,
  title: process.env.NEXT_PUBLIC_SITE_TITLE,
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
  url: process.env.NEXT_PUBLIC_SITE_URL,
  ogImage: "/og-image.jpg",
  links: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL,
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    email: process.env.NEXT_PUBLIC_EMAIL,
    twitter: process.env.NEXT_PUBLIC_TWITTER_HANDLE,
  },
}

export const personalInfo = {
  fullName: "Mohamed Ouizgany",
  shortName: "M.O.U.Z",
  role: "Full Stack Developer",
  roles: [
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Problem Solver',
  ],
  location: "Paris, France",
  shortBio: "I create beautiful, functional, and user-friendly digital experiences",
  longBio: `With over 1 years of experience in full stack development, I specialize in creating
    scalable, efficient, and user-friendly web applications. My expertise spans from
    front-end technologies like React.js and Angular.js to back-end frameworks such as Node.js
    and Spring Boot.`,
  profileImage: "/profile-photo.jpg",
  resume: "/resume_en.pdf",
  experience: {
    years: "1+",
    projects: "5+",
    reliability: "99%",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Spring Boot",
      "PostgreSQL",
      "AWS",
      "Docker"
    ]
  },
  achievements: [
    "Developed a high-throughput platform handling sensitive data at scale",
    "Reduced load times by 40% through performance optimization techniques",
    "Implemented CI/CD pipelines, increasing deployment frequency by 300%"
  ],
  timeline: [
    {
      year: "2024",
      title: "Junior Developer",
      company: "Docaposte",
      description: "Assisted in the development of web applications."
    },
    {
      year: "2024",
      title: "Full Stack Developer Intern",
      company: "Docaposte",
      description: "Developed and maintained a client project."
    },
    {
      year: "2023",
      title: "Full Stack Developer Intern",
      company: "ArtEyeZ",
      description: "Developed a business operations management application."
    }
  ],
  skills: {
    technical: [
      {
        category: 'Frontend',
        technologies: [
          { name: 'React', level: 80, years: 3 },
          { name: 'Angular', level: 70, years: 2 },
          { name: 'TypeScript', level: 85, years: 3 },
          { name: 'Next.js', level: 75, years: 2 },
          { name: 'Tailwind CSS', level: 90, years: 2 },
        ],
      },
      {
        category: 'Backend',
        technologies: [
          { name: 'Node.js', level: 80, years: 4 },
          { name: 'Python', level: 60, years: 2 },
          { name: 'Spring Boot', level: 90, years: 3 },
          { name: 'PostgreSQL', level: 75, years: 3 },
          { name: 'MongoDB', level: 70, years: 2 },
        ],
      },
      {
        category: 'Tools & Others',
        technologies: [
          { name: 'Git', level: 90, years: 5 },
          { name: 'Docker', level: 75, years: 2 },
          { name: 'CI/CD', level: 60, years: 1 },
          { name: 'AWS', level: 65, years: 2 },
          { name: 'Kubernetes', level: 55, years: 1 },
        ],
      },
    ],
    soft: [
      'Communication',
      'Problem Solving',
      'Teamwork',
      'Adaptability',
      'Time Management',
      'Leadership',
    ]
  },
  projects: [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online store with real-time inventory management.',
      image: '/projects/mouzShop.png',
      category: 'Full Stack',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
      metrics: 'Full shop management system.',
      demoLink: 'https://github.com/mouz11/mouzShop',
      githubLink: 'https://github.com/mouz11/mouzShop',
      featured: true
    },
    {
      title: 'Food ordering system',
      description: 'A microservices app that intend to accomplish the food ordering process.',
      image: '/projects/microservices.png',
      category: 'Web App',
      technologies: ['Spring boot', 'Postgresql', 'MongoDB', 'Apache Kafka', 'Kubernetes', 'Docker', 'SAGA', 'Outbox', 'CQRS'],
      metrics: 'Domain-Driven Design and Hexagonal Architecture, loosely-coupled, and interchangeable components.',
      demoLink: 'https://github.com/mouz11/food-ordering-system',
      githubLink: 'https://github.com/mouz11/food-ordering-system',
      featured: true
    },
    {
      title: 'Online portfolio',
      description: 'Fully responsive web portfolio.',
      image: '/projects/portfolio.png',
      category: 'Web App',
      technologies: ['NextJs', 'TypeScript', 'Tailwind CSS'],
      metrics: 'Stunning design, seamless performance.',
      demoLink: 'https://www.elouizgany.com',
      githubLink: 'https://github.com/mouz11/creative-portfolio',
      featured: true
    }
  ],
  projectCategories: ['All', 'Full Stack', 'Web App', 'Mobile', 'Data Visualization'],
  availability: {
    status: "Currently available for freelance projects and full-time opportunities",
    preferredContact: "Email or LinkedIn message"
  },
  contact: {
    email: process.env.NEXT_PUBLIC_EMAIL,
    github: process.env.NEXT_PUBLIC_GITHUB_URL,
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    twitter: process.env.NEXT_PUBLIC_TWITTER_HANDLE,
    location: "Paris, France",
    phone: "+33 7 49 54 74 55"
  }
}

export const navItems = [
  { href: '#home', label: 'Home', isHash: true },
  { href: '#about', label: 'About', isHash: true },
  { href: '#projects', label: 'Projects', isHash: true },
  { href: '/blog', label: 'Blog', isHash: false },
  { href: '#contact', label: 'Contact', isHash: true },
]

export const blogConfig = {
  postsPerPage: Number(process.env.NEXT_PUBLIC_POSTS_PER_PAGE) || 6,
  featuredPostsCount: Number(process.env.NEXT_PUBLIC_FEATURED_POSTS_COUNT) || 3,
}

export const shareConfig = {
  platforms: [
    {
      name: 'WhatsApp',
      color: 'hover:text-green-500',
      getUrl: (message: string, url: string) => 
        `https://wa.me/?text=${encodeURIComponent(`${message} ${url}`)}`,
    },
    {
      name: 'Facebook',
      color: 'hover:text-blue-600',
      getUrl: (message: string, url: string) => 
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(message)}`,
    },
    {
      name: 'X',
      color: 'hover:text-foreground',
      getUrl: (message: string, url: string) => 
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${message}\n${url}`)}`,
    },
    {
      name: 'LinkedIn',
      color: 'hover:text-blue-700',
      getUrl: (message: string, url: string, title?: string, summary?: string) => 
        `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title || '')}&summary=${encodeURIComponent(summary || '')}`,
    },
  ],
} 