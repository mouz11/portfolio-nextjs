# Creative Portfolio Template

A modern, responsive portfolio template built with Next.js 14, TypeScript, and Tailwind CSS. Perfect for developers, designers, and creatives who want to showcase their work with a clean and professional online presence.

## 🌟 Features

- ⚡️ Built with Next.js 14 and TypeScript
- 🎨 Styled with Tailwind CSS
- 📱 Fully responsive design
- 🌙 Dark mode support
- 📝 Blog section with Markdown support
- 🎯 SEO optimized
- 📊 Projects showcase
- 📬 Contact form
- 🚀 Easy deployment to Vercel

## 🚀 Quick Start

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/creative-portfolio.git
   cd creative-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`:
     ```bash
     cp .env.example .env.local
     ```
   - Update the variables in `.env.local` with your values

### Environment Variables

The following environment variables are used in this project:

#### Required Variables
- `NEXT_PUBLIC_SITE_URL`: Your website's URL (in development, use `http://localhost:3000`)

#### Optional Variables (Features)

**Contact Form (EmailJS)**
If you want to use the contact form functionality:
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`: Your EmailJS service ID
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`: Your EmailJS public key
To set these up:
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email template
3. Get your service ID, template ID, and public key
4. Add them to your `.env.local`

**Google Analytics**
If you want to track website analytics:
- `NEXT_PUBLIC_GA_TRACKING_ID`: Your Google Analytics tracking ID

**GitHub Integration**
If you want to automatically fetch your GitHub repositories:
- `GITHUB_ACCESS_TOKEN`: Your GitHub personal access token
To get this:
1. Go to GitHub Settings → Developer Settings → Personal Access Tokens
2. Generate a new token with `repo` scope
3. Copy the token to your `.env.local`

**Blog Comments (Giscus)**
If you want to enable blog comments:
- `NEXT_PUBLIC_GISCUS_REPO`: Your repository name (username/repo)
- `NEXT_PUBLIC_GISCUS_REPO_ID`: Your repository ID
- `NEXT_PUBLIC_GISCUS_CATEGORY`: The category name for discussions
- `NEXT_PUBLIC_GISCUS_CATEGORY_ID`: The category ID for discussions

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 🎨 Customization

### 1. Site Configuration

All site content is centralized in `lib/config.ts`. Update this file to change:
- Site metadata (title, description, author)
- Social media links
- Navigation items
- Hero section content
- About section content
- Contact section content
- SEO settings

### 2. Projects

Add your projects in `lib/projects.ts`:
```typescript
export const projects = [
  {
    title: "Project Name",
    description: "Project description",
    image: "/path/to/image.jpg",
    tags: ["React", "TypeScript"],
    link: "https://project-url.com",
    github: "https://github.com/username/project"
  },
  // Add more projects...
];
```

### 3. Blog Posts

1. Add your Markdown files in `public/blog/`
2. Update blog metadata in `lib/blog/metadata.ts`

### 4. Styling

- Customize colors in `tailwind.config.ts`
- Modify global styles in `app/globals.css`
- Component-specific styles are in their respective files

## 📁 Project Structure

```
├── app/                 # Next.js app directory
├── components/          # React components
├── lib/                 # Configuration and utilities
│   ├── config.ts       # Site configuration
│   ├── projects.ts     # Projects data
│   └── blog/           # Blog related utilities
├── public/             # Static assets
│   └── blog/           # Blog post markdown files
└── styles/             # Additional styling
```

## 🚀 Deployment

The easiest way to deploy your portfolio is using [Vercel](https://vercel.com):

1. Push your code to a GitHub repository
2. Import your repository to Vercel
3. Add your environment variables
4. Deploy!

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/creative-portfolio/issues).

## 💖 Support

Give a ⭐️ if you like this project! 