export const siteConfig = {
  // Basic site info
  title: "Creative Portfolio",
  description: "A modern portfolio template built with Next.js and Tailwind CSS",
  author: "Your Name",
  url: "https://your-portfolio.com",
  
  // Social links
  social: {
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "your.email@example.com",
  },

  // Navigation
  navigation: [
    { name: "Home", href: "/" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ],

  // Hero section
  hero: {
    title: "Creative Developer & Designer",
    subtitle: "I build beautiful digital experiences",
    description: "I'm a full-stack developer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.",
  },

  // About section
  about: {
    title: "About Me",
    description: "I'm a passionate developer with a keen eye for design and a commitment to creating intuitive, user-friendly applications. With expertise in modern web technologies, I bring ideas to life through clean code and creative solutions.",
    skills: [
      "React/Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "UI/UX Design",
      "Full-Stack Development",
    ],
  },

  // Contact section
  contact: {
    title: "Get in Touch",
    description: "I'm always open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!",
  },

  // SEO and Metadata
  seo: {
    keywords: "portfolio, developer, designer, web development, react, nextjs",
    ogImage: "/og-image.jpg",
    twitterHandle: "@yourusername",
  },
}; 