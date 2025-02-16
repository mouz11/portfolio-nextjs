import {Metadata} from 'next'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import BlogSection from '@/components/BlogSection'
import ContactSection from '@/components/ContactSection'
import ScrollToTopButton from '@/components/ScrollToTopButton'

export const metadata: Metadata = {
    title: 'Mohamed Ouizgany | Full Stack Developer',
    description: 'Portfolio of Mohamed Ouizgany, a Full Stack Developer with 1+ years of experience in building modern web applications.',
    openGraph: {
        title: 'Mohamed Ouizgany | Full Stack Developer',
        description: 'Portfolio of Mohamed Ouizgany, a Full Stack Developer with 1+ years of experience in building modern web applications.',
        images: [{url: '/og-image.jpg'}],
    },
}

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
            <HeroSection />
            <div className="space-y-12 md:space-y-16">
                <AboutSection />
                <ProjectsSection />
                <SkillsSection />
                <BlogSection />
                <ContactSection />
            </div>
            <ScrollToTopButton />
        </main>
    )
}

