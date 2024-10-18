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
      <div className=" px-10 mb-6">
        <h2 className="text-4xl font-bold">Our Features</h2>
      </div>

      {/* Scrollable Cards Section */}
      {/* <div className="relative overflow-x-auto overflow-y-hidden whitespace-nowrap space-x-4 px-10">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="inline-block cursor-pointer py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img
              src={img}
              alt={`Feature ${index}`}
              className="w-[23rem] h-[38rem] object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </div> */}
      <div className="relative overflow-x-auto overflow-y-hidden whitespace-nowrap space-x-4 px-10 scrollbar">
  {images.map((img, index) => (
    <motion.div
      key={index}
      className="inline-block cursor-pointer py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <img
        src={img}
        alt={`Feature ${index}`}
        className="w-[23rem] h-[38rem] object-cover rounded-lg"
      />
    </motion.div>
  ))}
</div>
    </section>
  );
};

export default FeaturesSection;
