import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const OptimizedForSocialMedia = () => {
  return (
    <section className=" py-12 px-6 md:py-16 md:px-16 lg:py-20 lg:px-10 flex flex-col lg:flex-row items-start ">
      {/* Text Section */}
      <motion.div
        className="max-w-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-900">
          Optimized for all social media
        </h1>
        <p className="mt-4 text-xs md:text-base text-gray-600">
          We&apos;ve meticulously designed each template to meet the specific guidelines
          and format requirements of all social media platforms. By preserving safe
          zones and adhering to platform standards, we ensure that your posts will
          always be visually striking, no matter where you share them.
        </p>   
      </motion.div>

      {/* Checkpoints Section */}
      <motion.div
        className="mt-16 lg:mt-[2.5rem] space-y-4 lg:ml-[10rem]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-3">
          <Check className="text-purple-600" />
          <span className="text-base font-medium text-gray-700">Readable</span>
        </div>
        <div className="flex items-center space-x-3">
          <Check className="text-purple-600" />
          <span className="text-base font-medium text-gray-700">Visible</span>
        </div>
        <div className="flex items-center space-x-3">
          <Check className="text-purple-600" />
          <span className="text-base font-medium text-gray-700">Accessible</span>
        </div>
      </motion.div>
      
    </section>
  );
};

export default OptimizedForSocialMedia;
