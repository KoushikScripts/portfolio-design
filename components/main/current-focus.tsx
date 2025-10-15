"use client";

import { motion } from "framer-motion";
import { CURRENT_FOCUS } from "@/constants";

const CurrentFocusCard = ({
  title,
  description,
  icon,
  technologies,
  category,
  index,
}: {
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  category: string;
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
        {/* Icon and Category */}
        <div className="flex justify-between items-start mb-4">
          <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <span className="text-xs px-2 py-1 bg-red-500/20 text-red-300 rounded-full border border-red-500/30">
            {category.replace('-', ' ').toUpperCase()}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-red-400 transition-colors">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
          {description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="text-xs px-2 py-1 bg-gray-800/50 text-gray-300 rounded border border-gray-700 hover:border-red-500 transition-colors backdrop-blur-sm"
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

export const CurrentFocus = () => {
  return (
    <section
      id="current-focus"
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
        Current Focus
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-300 text-sm sm:text-base lg:text-lg text-center max-w-3xl mb-8 sm:mb-10 lg:mb-12 px-4"
      >
        Exploring cutting-edge technologies and building innovative solutions in AI, automation, and DevOps
      </motion.p>

      <div className="h-full w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {CURRENT_FOCUS.map((item, index) => (
            <CurrentFocusCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              technologies={item.technologies}
              category={item.category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};