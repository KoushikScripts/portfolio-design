"use client";

import { motion } from "framer-motion";
import { EDUCATION } from "@/constants";

const EducationCard = ({
  degree,
  institution,
  location,
  duration,
  type,
  index,
}: {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  type: 'current' | 'completed';
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
        {/* Status Badge and Icon */}
        <div className="flex justify-between items-start mb-4">
          <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
            🎓
          </div>
          <span className={`text-xs px-2 py-1 rounded-full border ${
            type === 'current' 
              ? 'bg-green-500/20 text-green-300 border-green-500/30' 
              : 'bg-red-500/20 text-red-300 border-red-500/30'
          }`}>
            {type === 'current' ? 'Current' : 'Completed'}
          </span>
        </div>
        
        {/* Degree */}
        <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-2 group-hover:text-red-400 transition-colors leading-tight">
          {degree}
        </h3>
        
        {/* Institution */}
        <p className="text-gray-300 text-xs sm:text-sm mb-2 font-medium">
          {institution}
        </p>
        
        {/* Location */}
        <p className="text-gray-400 text-xs mb-2 sm:mb-3 flex items-center">
          <span className="mr-1">📍</span>
          {location}
        </p>
        
        {/* Duration */}
        <div className="flex items-center text-gray-300 text-xs sm:text-sm">
          <span className="mr-2">📅</span>
          <span>{duration}</span>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export const Education = () => {
  return (
    <section
      id="education"
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
        Education
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-300 text-sm sm:text-base lg:text-lg text-center max-w-3xl mb-8 sm:mb-10 lg:mb-12 px-4"
      >
        Academic foundation in computer science, data science, and continuous learning journey
      </motion.p>

      <div className="h-full w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {EDUCATION.map((edu, index) => (
            <EducationCard
              key={`${edu.institution}-${edu.degree}`}
              degree={edu.degree}
              institution={edu.institution}
              location={edu.location}
              duration={edu.duration}
              type={edu.type}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};