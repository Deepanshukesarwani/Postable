// components/FeaturesSection.tsx

import { FC } from 'react';
import { motion } from 'framer-motion';

interface FeaturesSectionProps {
  images: string[];  // Array of image paths
}

const FeaturesSection: FC<FeaturesSectionProps> = ({ images }) => {
  return (
    <section className="py-10 ">
  {/* Section Heading */}
  <div className="px-14 mb-6">
    <h2 className="text-4xl font-bold">Our Features</h2>
  </div>
  {/* Horizontal Scroll Container */}
  <div className="relative overflow-x-auto overflow-y-hidden whitespace-nowrap space-x-4 px-10 scrollbar">
    {images.map((img, index) => (
      <motion.div
        key={index}
        className="inline-block cursor-pointer p-4 transition-transform transform hover:scale-105"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <img
          src={img}
          alt={`Feature ${index}`}
          className="w-[23rem] h-[38rem] object-cover"
        />
      </motion.div>
    ))}
  </div>
</section>

  );
};

export default FeaturesSection;
