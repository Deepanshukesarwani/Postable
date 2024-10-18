import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
const contentData = {
  individual: {
    text: "Postable is perfect for individuals who want to elevate their social media presence without the hassle. Whether you're sharing thoughts, opinions, or everyday moments, Postable makes it easy to create and share beautiful, impactful posts from your tweets.",
    image: '/images/Individual.webp',
  },
  influencer: {
    text: "Postable helps influencers engage with their audience through easy-to-create, visually appealing posts. Whether it’s a promotion or a personal update, Postable ensures your content is always on point.",
    image: '/images/Influencers.webp',
  },
  businesses: {
    text: "Businesses can now streamline their social media strategies with Postable, creating compelling posts that resonate with their target audiences, all while maintaining a consistent brand presence.",
    image: '/images/Businesses.webp',
  },
};

const DynamicContentSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<'individual' | 'influencer' | 'businesses'>('individual');

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-12 px-6 md:px-16">
      {/* Left Side: Headings, Buttons, Text */}
      <div className="lg:w-1/2">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          One Solution for All!
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Postable helps everyone to share their thoughts across multiple platforms.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 mb-6">
          {['individual', 'influencer', 'businesses'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as 'individual' | 'influencer' | 'businesses')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Paragraph */}
        <p className="text-lg text-gray-600 mb-6">
          {contentData[selectedCategory].text}
        </p>

        {/* Bullet Points */}
        <ul className="space-y-2">
          <li className="flex items-center">
            <div className="w-2.5 h-2.5 bg-gray-400 rounded-full mr-2"></div>
            Effortless Post Creation
          </li>
          <li className="flex items-center">
            <div className="w-2.5 h-2.5 bg-gray-400 rounded-full mr-2"></div>
            Enhanced Visual Appeal
          </li>
          <li className="flex items-center">
            <div className="w-2.5 h-2.5 bg-gray-400 rounded-full mr-2"></div>
            Easy Sharing Across Platforms
          </li>
          <li className="flex items-center">
            <div className="w-2.5 h-2.5 bg-gray-400 rounded-full mr-2"></div>
            Consistent Social Media Presence
          </li>
        </ul>
      </div>

      {/* Right Side: Dynamic Image with Animation */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center items-center">
        <motion.img
          key={selectedCategory}
          src={contentData[selectedCategory].image}
          alt={selectedCategory}
          className="w-[80%] max-w-xs rounded-lg "
          initial={{ opacity: 0, rotateX: 15, rotateY: -15 }}
          animate={{ opacity: 1, rotateX: 0, rotateY: 0 }}
          transition={{ duration: 0.5 }}
          style={{ perspective: 400 }}
        />
      </div>
    </section>
  );
};

export default DynamicContentSection;
