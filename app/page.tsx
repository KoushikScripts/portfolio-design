import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { CurrentFocus } from "@/components/main/current-focus";
import { Certifications } from "@/components/main/certifications";
import { Experience } from "@/components/main/experience";
import { Education } from "@/components/main/education";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <CurrentFocus />
        <Certifications />
        <Experience />
        <Education />
        <Projects />
      </div>
    </main>
  );
}
