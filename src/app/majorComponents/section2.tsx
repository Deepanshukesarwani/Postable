// components/HeroSection.tsx

import { FC } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

const Section2: FC<HeroSectionProps> = ({ title, subtitle, buttonText }) => {
  return (
    <section className="flex flex-col items-start  py-10  sm:px-25 lg:px-17 xl:px-10   h-[50vh]">
      <motion.h1
        className="text-3xl sm:text-4xl lg:text-5xl font-thin  w-full text-black"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      <motion.p
        className="mt-4 text-4xl sm:text-xl font-thin lg:text-4xl text-gray-500"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {subtitle}
      </motion.p>
      <motion.button
        className="mt-8 px-6 py-3 bg-black text-white font-medium rounded-full flex items-center space-x-2 hover:bg-gray-800 transition duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <span>{buttonText}</span>
        <ArrowRight className="w-5 h-5 " />
      </motion.button>
    </section>
  );
};

export default Section2;
