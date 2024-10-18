// components/FAQSection.tsx

import { useState,useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Is Postable free to use?',
    answer: 'Yes, Postable offers a free plan with basic features.',
  },
  {
    question: 'What social media platforms does this tool support?',
    answer: 'Postable supports Instagram, Twitter, Facebook, LinkedIn, and more.',
  },
  {
    question: 'Can I customize the created images?',
    answer: 'Yes, you can fully customize the images with your branding.',
  },
  {
    question: 'Do I need design skills to use this platform?',
    answer: 'No, Postable is designed to be user-friendly for everyone.',
  },
  {
    question: 'Do I need to know the format or size of each social media?',
    answer: 'No, Postable automatically formats the images to fit each platform’s requirements.',
  },
];

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <section className="container mx-auto py-16 h-screen px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Section */}
      <div className="space-y-4">
        <h2 className="text-4xl font-bold">FAQ</h2>
        <p className="text-gray-600">
          Let’s help you with some of your frequently asked questions.
        </p>
        <p className="text-purple-600 cursor-pointer">Ask a Question →</p>
      </div>

      {/* Right Section */}
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            {/* Question */}
            <div
              className="flex justify-between items-center py-4 cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <motion.h3
                className={`text-lg font-medium ${expandedIndex === index ? 'underline' : ''}`}
                whileHover={{ textDecoration: 'underline' }}
              >
                {item.question}
              </motion.h3>
              <ChevronDown
                className={`transition-transform ${expandedIndex === index ? 'rotate-180' : ''}`}
              />
            </div>

            {/* Answer */}
            <motion.div
              className="pb-4 text-gray-600 overflow-hidden"
              initial={{ opacity: 0, height: 0 }} // Initial state
              animate={{
                opacity: expandedIndex === index ? 1 : 0, // Animate opacity
                height: expandedIndex === index ? answerRefs.current[index]?.scrollHeight : 0, // Animate to the measured height
              }}
              exit={{ opacity: 0, height: 0 }} // Exit state
              transition={{ duration: 0.3 }} // Transition duration
              ref={(el) => {
                // Assign the ref directly
                answerRefs.current[index] = el; 
              }}
            >
              {item.answer}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default FAQSection;
