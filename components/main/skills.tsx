import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  SKILL_CATEGORIES,
} from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4">
        {SKILL_CATEGORIES.map((category, categoryIndex) => (
          <div key={category.title} className="w-full">
            {/* Category Header */}
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {category.title}
              </h3>
              <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full"></div>
            </div>

            {/* Unified Skills Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-6 justify-items-center">
              {category.skills.map((skill, skillIndex) => (
                <SkillDataProvider
                  key={skill.skill_name}
                  src={skill.image}
                  name={skill.skill_name}
                  width={skill.width}
                  height={skill.height}
                  index={skillIndex} // Sequential index for staggered animations
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
