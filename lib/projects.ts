export interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  metrics: string;
  demoLink: string;
  githubLink: string;
}

export const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store with real-time inventory management.',
    image: '/projects/mouzShop.png',
    category: 'Full Stack',
    technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
    metrics: 'Full shop management system.',
    demoLink: 'https://github.com/mouz11/mouzShop',
    githubLink: 'https://github.com/mouz11/mouzShop',
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
  },
  {
    title: 'Online portfolio',
    description: 'Fully responsive web portfolio.',
    image: '/projects/portfolio.png',
    category: 'Web App',
    technologies: ['NextJs'],
    metrics: 'Stunning design, seamless performance.',
    demoLink: 'https://www.mohamedelouizgany.com',
    githubLink: 'https://github.com',
  },
]

export const categories = ['All', 'Full Stack', 'Web App', 'Mobile', 'Data Visualization'] 