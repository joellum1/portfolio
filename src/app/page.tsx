import Header from "@/components/Header"
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechSection from "@/components/TechSection";
import ExtraSection from "@/components/ExtraSection";

export default function Home() {
  return (
    <main className="flex flex-col m-4">
      <Header />
      <AboutSection />
      <ProjectsSection />
      <TechSection />
      <ExtraSection />
    </main>
  );
}