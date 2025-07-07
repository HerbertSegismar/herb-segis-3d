import React, { Suspense } from "react";
import Hero3D from "../components/portfolio/Hero3D";
import AboutSection from "../components/portfolio/AboutSection";
import SkillsSection from "../components/portfolio/SkillsSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import ContactSection from "../components/portfolio/ContactSection";
import LoadingSpinner from "../components/portfolio/LoadingSpinner";

export default function Portfolio() {
  return (
    <div className="bg-slate-900 text-white overflow-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <Hero3D />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </Suspense>
    </div>
  );
}
