"use-client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";

interface CardProp {
  image: string;
  step: string;
  heading: string;
  content: string;
}

const CardOne = ({ image, step, heading, content }: CardProp) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (card) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / rect.height) * 50; // Adjust sensitivity for smoother effect
      const rotateY = (x / rect.width) * 50;

      setRotation({
        x: rotateX,
        y: rotateY,
      });
    }
  };

  const resetRotation = () => setRotation({ x: 0, y: 0 });

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetRotation}
      className="relative max-w-md w-full h-full   md:max-w-lg lg:max-w-xl mx-auto bg-gray-100 rounded-2xl shadow-lg overflow-hidden transition-transform duration-5"
      style={{
        perspective: "1000px",
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: rotation.x === 0 && rotation.y === 0 ? "transform 0.5s ease-out" : "",
      }}
    >
      {/* Top Image Section */}
      <div className="w-full bg-gray-100 p-4">
        <Image
          src={image}
          alt={heading}
          className="w-full h-auto object-cover"
          width={600} // Increased image width for larger card
          height={350} // Adjust height to match increased width
        />
      </div>

      {/* Content Section */}
      <div className="p-6 bg-gray-100">
        <h2 className="text-sm text-gray-400 font-semibold mb-2">{step}</h2>
        <h3 className="text-xl md:text-lg lg:text-xl font-bold mb-4">{heading}</h3>
        <p className="text-gray-600 text-sm md:text-base lg:text-[1rem] pb-2">{content}</p>
      </div>
    </motion.div>
  );
};

export default CardOne;
