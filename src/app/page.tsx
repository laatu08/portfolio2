import HeroSection from '@/components/sections/hero';
import ContactSection from '@/components/sections/contact';
import AboutMeSection from '@/components/sections/about-me';
import SkillsSection from '@/components/sections/skills';
import ExperienceSection from '@/components/sections/experiences';
import TestimonialsSection from '@/components/sections/testimonials';
import WorkSection from '@/components/sections/work';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  return (
    <>
      <AnimatedSection><HeroSection /></AnimatedSection>
      <AnimatedSection><AboutMeSection /></AnimatedSection>
      <AnimatedSection><SkillsSection /></AnimatedSection>
      <AnimatedSection><ExperienceSection /></AnimatedSection>
      <AnimatedSection><WorkSection /></AnimatedSection>
      <AnimatedSection><TestimonialsSection /></AnimatedSection>
      <AnimatedSection><ContactSection /></AnimatedSection>

      {/* <HeroSection></HeroSection>
      <AboutMeSection></AboutMeSection>
      <SkillsSection></SkillsSection>
      <ExperienceSection></ExperienceSection>
      <WorkSection></WorkSection>
      <TestimonialsSection></TestimonialsSection>
      <ContactSection></ContactSection> */}
      
      
      
      
      
      
      
    </>
  );
}
