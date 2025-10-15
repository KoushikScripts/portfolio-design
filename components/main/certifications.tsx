"use client";

import { motion } from "framer-motion";
import { CERTIFICATIONS } from "@/constants";

const CertificationCard = ({
  title,
  issuer,
  date,
  credentialUrl,
  badge,
  index,
}: {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badge?: string;
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
        {/* Date Badge */}
        <div className="flex justify-between items-start mb-4">
          <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
            🏆
          </div>
          <span className="text-xs px-2 py-1 bg-red-500/20 text-red-300 rounded-full border border-red-500/30">
            {date}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-2 group-hover:text-red-400 transition-colors leading-tight">
          {title}
        </h3>
        
        {/* Issuer */}
        <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 font-medium">
          {issuer}
        </p>
        
        {/* Credential Link */}
        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs px-3 py-1 bg-red-500/20 text-red-300 rounded border border-red-500/30 hover:bg-red-500/30 hover:border-red-400 transition-all duration-300"
          >
            View Credential
          </a>
        )}

        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export const Certifications = () => {
  return (
    <section
      id="certifications"
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
        Certifications
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-300 text-sm sm:text-base lg:text-lg text-center max-w-3xl mb-8 sm:mb-10 lg:mb-12 px-4"
      >
        Professional certifications and achievements in data science, AI, and system administration
      </motion.p>

      <div className="h-full w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {CERTIFICATIONS.map((cert, index) => (
            <CertificationCard
              key={cert.title}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              credentialUrl={cert.credentialUrl}
              badge={cert.badge}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};