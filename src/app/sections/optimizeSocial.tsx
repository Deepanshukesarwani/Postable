import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const OptimizedForSocialMedia = () => {
  return (
    <section className="bg-white py-12 px-6 md:py-16 md:px-16 lg:py-20 lg:px-24 flex flex-col lg:flex-row items-start justify-between">
      {/* Text Section */}
      <motion.div
        className="max-w-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          Optimized for all social media
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          We&apos;ve meticulously designed each template to meet the specific guidelines
          and format requirements of all social media platforms. By preserving safe
          zones and adhering to platform standards, we ensure that your posts will
          always be visually striking, no matter where you share them.
        </p>
      </motion.div>

      {/* Checkpoints Section */}
      <motion.div
        className="mt-8 lg:mt-0 space-y-4 lg:ml-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center space-x-3">
          <Check className="text-purple-600" />
          <span className="text-lg font-medium text-gray-700">Readable</span>
        </div>
        <div className="flex items-center space-x-3">
          <Check className="text-purple-600" />
          <span className="text-lg font-medium text-gray-700">Visible</span>
        </div>
        <div className="flex items-center space-x-3">
          <Check className="text-purple-600" />
          <span className="text-lg font-medium text-gray-700">Accessible</span>
        </div>
      </motion.div>
    </section>
  );
};

export default OptimizedForSocialMedia;
