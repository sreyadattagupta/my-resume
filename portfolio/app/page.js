'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AchievementsSection from '@/components/AchievementsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ParticlesBackground />
      <div className="scanlines" />
      <div className="grid-bg" />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <AchievementsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
