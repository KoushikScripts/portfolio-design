"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 mt-16 md:mt-40 w-full z-[20]"
    >
      {/* Left Content */}
      <div className="w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start">
        {/* Role Box */}
        <motion.div
          variants={slideInFromTop}
          className="flex items-center justify-center md:justify-start gap-2 py-[6px] px-[6px] border border-red-primary/50 opacity-[0.9] rounded-lg max-w-fit mx-auto md:mx-0"
        >
          <SparklesIcon className="text-red-primary h-4 w-4 md:h-5 md:w-5" />
          <h1 className="text-[12px] md:text-[13px] text-gray-200 font-semibold">
            AI Engineer & DevOps Engineer (Student)
          </h1>
        </motion.div>

        {/* Hero Heading */}
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white max-w-[600px] leading-tight"
        >
          Narra Suryakoushik Reddy
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          variants={slideInFromLeft(0.6)}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-white max-w-[600px] leading-tight"
        >
          Building{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-primary to-red-hover">
            Intelligent Systems
          </span>{" "}
          with AI &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-primary to-red-hover">
            Automation
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-3 sm:my-4 max-w-[500px] mx-auto md:mx-0"
        >
          AI Engineer and DevOps enthusiast specializing in intelligent automation and machine learning systems. Former AI Agent Innovations Intern at Skin Seoul, Singapore. Currently pursuing Master of Computer Application at LPU while building production-grade AI solutions.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.a
          variants={slideInFromLeft(1)}
          href="#projects"
          className="py-4 px-5 sm:px-6 bg-transparent border-red-primary border-2 text-white text-base sm:text-base font-medium rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:border-red-hover hover:shadow-red-glow max-w-[110px] sm:max-w-[200px] mx-auto md:mx-0 flex items-center justify-center"
        >
          Explore My Journey
        </motion.a>

      </div>

      {/* Right Side Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full flex justify-center items-center mt-8 md:mt-0"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={400}
          width={400}
          draggable={false}
          className="select-none drop-shadow-lg sm:h-[450px] sm:w-[450px] md:h-[500px] md:w-[500px]"
        />
      </motion.div>
    </motion.div>
  );
};
