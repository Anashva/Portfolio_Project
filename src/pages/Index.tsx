import DynamicBackground from '@/components/DynamicBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => (
  <>
    <DynamicBackground />
    <Navbar />
    <main>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
      <footer className="text-center py-8 text-muted-foreground font-mono text-xs border-t border-border">
        © 2025 Anashva Singh. Built with passion.
      </footer>
    </main>
  </>
);

export default Index;
