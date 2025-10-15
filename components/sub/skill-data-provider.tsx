"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flex flex-col items-center gap-2"
    >
      <img 
        src={`/skills/${src}`} 
        width={width} 
        height={height} 
        alt={name}
        className="object-contain"
        onError={(e) => {
          console.error(`Failed to load image: /skills/${src}`);
          // Show skill name as fallback
          const fallback = document.createElement('div');
          fallback.className = 'w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center text-white text-xs font-bold text-center p-2';
          fallback.textContent = name;
          e.currentTarget.parentNode?.replaceChild(fallback, e.currentTarget);
        }}
      />
      <span className="text-xs text-gray-300 text-center font-medium">{name}</span>
    </motion.div>
  );
};
