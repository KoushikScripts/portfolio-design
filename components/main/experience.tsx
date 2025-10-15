"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/constants";

const ExperienceCard = ({
  title,
  company,
  duration,
  achievements,
  technologies,
  index,
}: {
  title: string;
  company: string;
  duration: string;
  achievements: string[];
  technologies: string[];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-lg shadow-lg hover:scale-[1.02] transition-all duration-300 border border-[#2A0E61] hover:border-red-500 group bg-gradient-to-br from-[#0C0C0C] to-[#1A1A1A]"
    >
      <div className="relative p-4 sm:p-5 lg:p-6">
        {/* Duration Badge */}
        <div className="flex justify-between items-start mb-4">
          <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
            💼
          </div>
          <span className="text-xs px-2 py-1 bg-red-500/20 text-red-300 rounded-full border border-red-500/30">
            {duration}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-2 group-hover:text-red-400 transition-colors leading-tight">
          {title}
        </h3>
        
        {/* Company */}
        <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 font-medium">
          {company}
        </p>
        
        {/* Achievements */}
        <div className="mb-3 sm:mb-4">
          <h4 className="text-xs sm:text-sm font-medium text-red-300 mb-2">Key Achievements:</h4>
          <ul className="space-y-1 sm:space-y-2">
            {achievements.map((achievement, idx) => (
              <li key={idx} className="text-gray-300 text-xs leading-relaxed flex items-start">
                <span className="text-red-400 mr-2 mt-1 text-xs">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 bg-red-500/10 text-red-300 rounded border border-red-500/20 hover:bg-red-500/20 hover:border-red-400 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-20 relative"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent pointer-events-none" />
      
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-[28px] sm:text-[32px] lg:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300 py-12 sm:py-16 lg:py-20 text-center"
      >
        Professional Experience
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-300 text-sm sm:text-base lg:text-lg text-center max-w-3xl mb-8 sm:mb-10 lg:mb-12 px-4"
      >
        Practical experience in AI agent development, automation, and workflow optimization
      </motion.p>

      <div className="h-full w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {EXPERIENCE.map((exp, index) => (
            <ExperienceCard
              key={`${exp.company}-${exp.title}`}
              title={exp.title}
              company={exp.company}
              duration={exp.duration}
              achievements={exp.achievements}
              technologies={exp.technologies}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};