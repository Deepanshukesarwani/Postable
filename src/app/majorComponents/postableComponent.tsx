import { ArrowRight } from 'lucide-react';

const PostableContentSection = () => {
  return (
    <section className="bg-white py-12 px-6 md:py-16 md:px-16 lg:py-20 lg:px-24 flex flex-col items-start text-left">
      {/* Heading */}
      <div className="max-w-xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          We help you create postable content that not only{' '}
          <span className="text-gray-800">looks great</span> but also{' '}
          <span className="text-gray-900">engages your audience</span>.
        </h1>
      </div>

      {/* Call to Action Button */}
      <div className="mt-8">
        <a
          href="#"
          className="bg-black text-white text-lg font-semibold py-3 px-6 rounded-lg inline-flex items-center hover:bg-gray-800 transition-all"
        >
          Get Started for FREE
          <ArrowRight className="ml-3" />
        </a>
      </div>
    </section>
  );
};

export default PostableContentSection;
