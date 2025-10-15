import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300 py-20">
        Featured Projects
      </h1>
      <div className="h-full w-full flex flex-col lg:flex-row gap-10 px-10 max-w-7xl">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
            technologies={project.technologies}
            date={project.date}
            category={project.category}
          />
        ))}
      </div>
    </section>
  );
};
